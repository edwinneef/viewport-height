# Viewport Height

## What it does
This utility sets a CSS variable on the document with a correct viewport height value in pixels. The value will be updated on browser resizing and orientation changes.

## How to use

1. Import the utility.
   `import CalculateVH from './viewport-height';`
2. Init the utility.
   `new CalculateVH('--variable-name')`
3. Use the variable in your CSS
   `min-height: calc(var(--vh) * 100); // sets 100 viewport height`