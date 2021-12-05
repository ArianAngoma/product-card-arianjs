import React from 'react';
import renderer from 'react-test-renderer';

/* Importaciones propias */
import {ProductTitle, ProductCard} from '../../src';
// @ts-ignore
import {product1} from '../data/products';

describe('ProductTitle', () => {
    test('Debe de mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});