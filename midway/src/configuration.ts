import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as orm from '@midwayjs/orm';
import * as jwt from '@midwayjs/jwt';
import * as swagger from '@midwayjs/swagger';
const cors = require('@koa/cors');
import { join } from 'path';
import 'tsconfig-paths/register';

import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { JwtMiddleware } from './middleware/jwt.middleware';

@Configuration({
  imports: [
    koa,
    validate,
    jwt,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    {
      component: info,
      enabledEnvironment: ['local'],
    },
    orm,
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    this.app.useMiddleware([
      ReportMiddleware,
      JwtMiddleware,
      cors({ origin: '*' }),
    ]);

    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
