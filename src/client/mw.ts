// src/client/mw.ts
export type MiddlewareFunction = (context: any, next: () => Promise<void>) => Promise<void>;

/**
 * Выполняет цепочку middleware последовательно.
 * @param context Контекст для middleware
 * @param middlewares Массив middleware-функций
 */
export async function runClientMiddlewares(context: any, middlewares: MiddlewareFunction[]): Promise<void> {
  let index = -1;
  async function dispatch(i: number): Promise<void> {
    if (i <= index) throw new Error("next() вызвано несколько раз");
    index = i;
    const fn = middlewares[i];
    if (fn) {
      await fn(context, () => dispatch(i + 1));
    }
  }
  await dispatch(0);
}
