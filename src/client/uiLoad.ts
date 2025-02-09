// src/client/uiLoad.ts
import fs from 'fs/promises';

export async function loadUIComponent(componentPath: string): Promise<string> {
  try {
    const content = await fs.readFile(componentPath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Ошибка загрузки UI-компонента из ${componentPath}:`, error);
    throw error;
  }
}
