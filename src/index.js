import Koa from 'koa';
import Router from '@koa/router';
import { resolve, join } from 'path';
import { readdir, stat } from 'fs/promises';

const app = new Koa();
const router = new Router();

const cwd = process.cwd();

router.get('/', (ctx, next) => {
  ctx.body = 'Hello Easy Mock Server';
});

const createRoute = (res) => {
  const { method, url, status, headers, body } = res;
  if (method === 'POST'){
    router.post('/mock' + url, (ctx, next) => {
      ctx.status = status;
      ctx.body = body;
    });
  } else {
    router.get(url, (ctx, next) => {
      ctx.status = status;
      ctx.body = body;
    });
  }
};

const rootDir = join(cwd, 'mock');

const walkFile = async (filePath) => {
  const fileStat = await stat(filePath)
  const isDir = fileStat.isDirectory();
  if (isDir) {
    const files = await readdir(filePath);
    for (const file of files) {
      const subfilePath = `${filePath}/${file}`;
      const fileStat = await stat(subfilePath)
      const isDir = fileStat.isDirectory();
      if (isDir) {
        walkFile(subfilePath);
      } else {
        const res = await import(subfilePath);
        createRoute(res.default);
      }
    }
  }
}

walkFile(rootDir);

app.use(router.routes()).use(router.allowedMethods())

app.listen(8200, () => {
  console.log('localhost is listening on port 8200 http://localhost:8200/');
});