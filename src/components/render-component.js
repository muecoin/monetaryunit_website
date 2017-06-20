import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default (componentTree) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MUE</title>
  </head>
  <body>
    ${renderToStaticMarkup(componentTree)}
  </body>
  </html>`;
}
