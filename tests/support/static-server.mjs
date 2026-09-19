import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.cwd());
const port = 4173;

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml']
]);

createServer((request, response) => {
  const rawPath = new URL(request.url, `http://127.0.0.1:${port}`).pathname;
  const relativePath = rawPath === '/' ? 'index.html' : rawPath.replace(/^\/+/, '');
  const candidate = normalize(join(root, relativePath));

  if (!candidate.startsWith(root)) {
    response.writeHead(403).end('Forbidden');
    return;
  }

  try {
    const stat = statSync(candidate);
    if (!stat.isFile()) throw new Error('Not a file');

    response.writeHead(200, {
      'Content-Type': contentTypes.get(extname(candidate)) ?? 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    createReadStream(candidate).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not Found');
  }
}).listen(port, '127.0.0.1');

