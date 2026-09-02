import { access, readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile('package.json', 'utf8'));
const required = [
  manifest.exports['.'].import,
  manifest.exports['.'].types,
  manifest.exports['./styles.css'],
  manifest.exports['./experimental/styles.css'],
];

for (const path of required) {
  await access(path);
}

if (manifest.name !== '@corelinkplatform/design-system') {
  throw new Error(`Unexpected package name: ${manifest.name}`);
}

if (!manifest.version.endsWith('alpha.5')) {
  throw new Error(`Unexpected release version: ${manifest.version}`);
}

console.log(`Package contract verified for ${manifest.name}@${manifest.version}`);
