import React from 'react';
import renderer from 'react-test-renderer';

/* Importaciones propias */
import {ProductImage, ProductCard} from '../../src';
// @ts-ignore
import {product2} from '../data/products';

describe('ProductImage', () => {
    test('Debe de mostrar en componente correctamente con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
                          className="custom-class"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});