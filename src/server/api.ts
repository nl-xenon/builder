// src/server/api.ts
export interface ApiRoute {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  handler: Function;
}

/**
 * Пример генерации API-маршрутов.
 * В реальной реализации можно сканировать контроллеры или конфигурационные файлы.
 */
export function generateApiRoutes(): ApiRoute[] {
  return [
    {
      method: 'GET',
      path: '/api/status',
      handler: async (req: any, res: any) => {
        res.json({ status: 'ok' });
      }
    }
  ];
}
