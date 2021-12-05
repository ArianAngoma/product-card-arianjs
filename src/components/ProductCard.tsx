import React, {createContext, CSSProperties} from 'react';

/* Importaciones propias */
import {useProduct} from '../hooks/useProduct';
import {InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

/* Crear context para counter, increaseBy y  product  */
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (arg: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    /* Hook para el producto */
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({
        product,
        onChange,
        value,
        initialValues
    });

    return (
        <Provider value={{
            counter, increaseBy, product, maxCount
        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product: product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}