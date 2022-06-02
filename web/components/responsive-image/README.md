# Kata devqueta

## Introducción

Strapi pregenera, almacena y sirve distintos formatos de imagen a partir de la original que se sube al CMS. Por defecto tiene distintos puntos de corte configurados: `large` (1000px), `medium` (750 px), `small` (500 px) y `thumbnail` (156 px) que [se pueden configurar](https://docs-v3.strapi.io/developer-docs/latest/development/plugins/upload.html#configuration).

> Nota: Se puede ver un ejemplo de la estructura del campo imagen que llega desde la API de Strapi [en Notion](https://www.notion.so/redradixinternal/Im-genes-responsive-19a60993c5534ecb84128f8aeb4d5550#1a553a1394af4e0485f997f689ba48ec).

Para integrar estas imágenes optimizadas y evitar las molestias del componente `next/image`, hasta ahora hemos recurrido a dos aproximaciones distintas, cada una con sus inconveniencias:

### Aproximación 1: agnóstica a maqueta

Se utiliza un selector sobre la entidad de la API para pasarle una única URL, el tamaño más adecuado en cada caso, a los componentes puramente visuales, que utilizan el elemento `<img>` estándar.

[Implementada en este componente](./Aprox01/index.jsx) | [Detalles (Notion)](https://www.notion.so/redradixinternal/Im-genes-responsive-19a60993c5534ecb84128f8aeb4d5550#fbc035e0e8394d9d8dfa61c698166c2e) | [Limitaciones (Notion)](https://www.notion.so/redradixinternal/Im-genes-responsive-19a60993c5534ecb84128f8aeb4d5550#9adf29c672f8446b82c7e0a32d1756d7)

### Aproximación 2: integrada con maqueta

Se utiliza un componente de imagen específico para toda la aplicación que gestione esta lógica de Strapi y delegue la selección del formato al navegador. Para esto, se utiliza un elemento `<picture>` y el componente configura tantos elementos `<source>` como formatos disponga el recurso.

[Implementada en este componente](./Aprox02.jsx) | [Detalles (Notion)](https://www.notion.so/redradixinternal/Im-genes-responsive-19a60993c5534ecb84128f8aeb4d5550#db8022f097af411f86be966279d9e75a) | [Limitaciones (Notion)](https://www.notion.so/redradixinternal/Im-genes-responsive-19a60993c5534ecb84128f8aeb4d5550#a98cab156c4042ed8741c5b4b830dc41)

## Kata: aproximación virtuosa

Objetivo: integrar las imágenes pregeneradas por Strapi mediante un componente de React que saque lo mejor del navegador.

- Utilizar un componente de imagen que delegue la selección de formato al navegador. Como no se está haciendo dirección de arte ni distintos formatos de fichero (jpg, png, webp, avif...), sino que solo se están utilizando imágenes redimensionadas, es mejor utilizar el atributo `srcset` de `<img>` ([según CSS Tricks](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)) en lugar del elemento `<picture>`. Esto permite al navegador una mayor participación en la selección del formato.
- El atributo `src` de _fallback_ también puede seleccionarse de acuerdo al que probablemente sea óptimo.

[Implementar en este componente](./Aprox03.jsx) | [Ver en el navegador las distintas aproximaciones](http://localhost:3000/kata-responsive-image)

> Nota: se ha habilitado el uso del elemento `<img>` que Next.js bloquea por defecto. [Saber más](https://www.notion.so/redradixinternal/Habilitar-el-uso-del-elemento-img-89ee3ae0b6a9412f8032d77c5063b83e).
