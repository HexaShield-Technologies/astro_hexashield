import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexashield-technologies.github.io/astro_hexashield',
  base: '/astro_hexashield/',
  integrations: [tailwind(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), htmlBeautifier({
    indent_size: 4,
    indent_char: "\t",
    max_preserve_newlines: -1,
    preserve_newlines: false,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: "keep",
    brace_style: "collapse",
    space_before_conditional: false,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: 120,
    indent_inner_html: false,
    comma_first: false,
    e4x: false,
    indent_empty_lines: false,
})]
});