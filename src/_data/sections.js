import { readFileSync } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'src', 'content');

export const welcome = readFileSync(join(contentDir, 'welcome.md'), 'utf-8');
export const services = readFileSync(join(contentDir, 'services.md'), 'utf-8');
export const bio = readFileSync(join(contentDir, 'bio.md'), 'utf-8');