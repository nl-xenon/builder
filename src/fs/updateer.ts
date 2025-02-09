// src/fs/updateer.ts
import fs from 'fs/promises';

export async function updateFile(filePath: string, newContent: string): Promise<void> {
  try {
    let currentContent = '';
    try {
      currentContent = await fs.readFile(filePath, 'utf-8');
    } catch (e) {
      // Если файл не существует – ничего не читаем
    }
    if (currentContent !== newContent) {
      await fs.writeFile(filePath, newContent, 'utf-8');
      console.log(`Файл ${filePath} обновлён.`);
    } else {
      console.log(`Файл ${filePath} не требует обновления.`);
    }
  } catch (error) {
    console.error(`Ошибка обновления файла ${filePath}:`, error);
  }
}
