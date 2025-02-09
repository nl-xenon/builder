// src/server/render.ts
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

/**
 * Рендерит переданный компонент приложения в HTML-строку.
 * @param App Корневой компонент Vue
 */
export async function renderServerComponent(App: any): Promise<string> {
  const app = createSSRApp(App);
  return await renderToString(app);
}
