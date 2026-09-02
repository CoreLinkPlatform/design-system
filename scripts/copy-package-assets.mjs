import { cp, mkdir, rm } from 'node:fs/promises';

const assetDirectories = ['fonts', 'styles'];
const assetFiles = [
  ['tokens/semantic.css', 'tokens/semantic.css'],
  ['experimental/styles.css', 'experimental/styles.css'],
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });

for (const directory of assetDirectories) {
  await cp(`src/${directory}`, `dist/${directory}`, { recursive: true });
}

for (const [source, destination] of assetFiles) {
  await mkdir(`dist/${destination.split('/').slice(0, -1).join('/')}`, { recursive: true });
  await cp(`src/${source}`, `dist/${destination}`);
}
