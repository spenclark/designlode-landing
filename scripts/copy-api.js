import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const projectRoot = process.cwd();
const srcDir = join(projectRoot, 'src', 'app', 'api');
const destDir = join(projectRoot, 'build', 'server', 'src', 'app', 'api');

if (!existsSync(srcDir)) {
	console.log('No src/app/api directory found, skipping copy');
	process.exit(0);
}

mkdirSync(destDir, { recursive: true });
cpSync(srcDir, destDir, { recursive: true });
console.log('Copied api routes to build/server/src/app/api');

