/** @type {import("prettier").Config} */
export default {
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
  };
  