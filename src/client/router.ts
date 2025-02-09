// src/client/router.ts
export interface RouteDefinition {
  path: string;
  componentPath: string;
}

/**
 * Пример генерации маршрутов для клиентского приложения.
 * В реальной реализации можно сканировать файловую систему и генерировать маршруты автоматически.
 */
export async function generateRoutes(uiDir: string): Promise<RouteDefinition[]> {
  return [
    { path: '/', componentPath: `${uiDir}/Home.vue` },
    { path: '/about', componentPath: `${uiDir}/About.vue` },
  ];
}
