/** @type {import("prettier").Config} */
module.exports = {
  tailwindConfig: './tailwind.config.cjs',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  // add tabwidth to the config object
  tabWidth: 4,
  useTabs: true,
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'crlf',
  printWidth: 300,
};
