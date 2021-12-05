import {ProductCard as ProductCardHOC} from './ProductCard';
import {ProductCardHOCProps} from '../interfaces/interfaces';

import {ProductTitle} from './ProductTitle';
import {ProductImage} from './ProductImage';
import {ProductButtons} from './ProductButtons';

export {ProductImage} from './ProductImage';
export {ProductTitle} from './ProductTitle';
export {ProductButtons} from './ProductButtons';

/* Asignar componentes a un componente */
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;
