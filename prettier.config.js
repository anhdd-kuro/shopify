module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  liquidSingleQuote: true,
  embeddedSingleQuote: true,
  printWidth: 100,
  plugins: [
    require('@shopify/prettier-plugin-liquid'),
    require('prettier-plugin-tailwindcss'),
  ],
}