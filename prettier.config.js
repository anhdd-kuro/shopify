module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  liquidSingleQuote: true,
  embeddedSingleQuote: true,
  printWidth: 100,
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@shopify/prettier-plugin-liquid')
  ],
}