import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default (componentTree) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MUE</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">
    <link rel="manifest" href="assets/images/manifest.json">
    <link rel="mask-icon" href="assets/images/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <meta name="msapplication-config" content="assets/images/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="At MUE, we aim to break away from the mould that cryptocurrency is only for tech-savvy people.">
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-87464347-1', 'auto');
      ga('send', 'pageview');
    </script>
  </head>
  <body>
    ${renderToStaticMarkup(componentTree)}
  </body>
  </html>`;
}
