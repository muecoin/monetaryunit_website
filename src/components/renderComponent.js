import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default (componentTree) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>MUE</title>
  </head>
  <body>
    ${renderToStaticMarkup(componentTree)}
  </body>
  </html>`;
}
