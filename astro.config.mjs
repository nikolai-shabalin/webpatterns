// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      // Выбираем тему для подсветки синтаксиса
      theme: 'github-dark',
      // Включаем подсветку для всех языков
      wrap: true
    }
  }
});
