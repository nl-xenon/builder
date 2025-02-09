// src/fs/scrubber.ts
import fs from 'fs/promises';
import path from 'path';

export async function scrubDirectory(dir: string, ageThresholdMs: number): Promise<void> {
  try {
    const files = await fs.readdir(dir);
    const now = Date.now();
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);
      if (now - stats.mtimeMs > ageThresholdMs) {
        await fs.unlink(filePath);
        console.log(`Удалён файл: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Ошибка при очистке директории ${dir}:`, error);
  }
}
