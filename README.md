# Product-Card-ArianJs

Este es un paquete de pruebas de despliegue en NPM

### Arian Angoma Vilchez

## Ejemplo
```
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from 'product-card-arianjs'
```

```
<ProductCard product={product} initialValues={{ count: 5, maxCount: 15 }}>

    {
        ({reset, increaseBy, isMaxCountReached, count, maxCount}) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }

</ProductCard>
```