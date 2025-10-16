# Colors

Pequeña librería para colorear texto en la terminal. Este README está orientado a usuarios que instalarán el paquete desde npm.

## Instalación

Instala desde npm:

```powershell
npm install colors
```

> Si aún no publicaste el paquete, reemplaza `colors` por el nombre real del paquete cuando lo publiques.

## Uso

Importa la función `style` y úsala directamente:

```ts
import { style } from 'colors';

console.log(style('Hola mundo', { color: 'red' }));
console.log(style('Naranja', { hex: '#ff9900', underline: true }));
console.log(style('Negrita y azul', { color: 'blue', bold: true }));
```

## API

- `style(text: string, options?: StyleOptions): string`

Opciones (`StyleOptions`):

- `color`: nombre del color entre: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`.
- `hex`: string con código HEX (`#rrggbb` o `#rgb`).
- `bold`, `dim`, `italic`, `underline`, `inverse`, `hidden`, `strikethrough`: booleanos para estilos.

Ejemplos:

```ts
// Color por nombre
style('texto rojo', { color: 'red' });

// Color personalizado por hex
style('texto naranja', { hex: '#ff9900' });

// Combinado
style('texto', { color: 'blue', bold: true, underline: true });
```

## Notas técnicas

- El paquete usa códigos ANSI 24-bit generados desde HEX; los nombres de color internos se mapean a HEX para garantizar consistencia entre terminales.
- `reset` se aplica automáticamente al final del texto.