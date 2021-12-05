import {useEffect, useRef, useState} from 'react';

/* Importaciones propias */
import {InitialValues, onChangeArgs, Product} from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({product, onChange, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    /* Referencia si el componente esta montado */
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);

        /* Si viene el valor máximo */
        if (initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount);

        setCounter(newValue);

        /* Si el onChange tiene valor, ejecutarlo */
        onChange && onChange({count: newValue, product});
    }

    const reset = () => setCounter(initialValues?.count || value);

    /* Cambiar el estado si el value cambia */
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    /* Efecto para que primer efecto no se ejecute al cargar el componente */
    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }
}