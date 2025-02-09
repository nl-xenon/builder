// src/fs/config.ts
import fs from 'fs/promises';

export interface BuildConfig {
  sourceDir: string;
  outputDir: string;
  environment: 'development' | 'production';
}

const defaultConfig: BuildConfig = {
  sourceDir: './src',
  outputDir: './dist',
  environment: 'development',
};

export async function loadConfig(configPath: string): Promise<BuildConfig> {
  try {
    const content = await fs.readFile(configPath, 'utf-8');
    const userConfig = JSON.parse(content);
    return { ...defaultConfig, ...userConfig };
  } catch (error) {
    console.warn(`Не удалось загрузить конфигурацию из ${configPath}. Используются значения по умолчанию.`);
    return defaultConfig;
  }
}
