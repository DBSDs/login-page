import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('(api/user/login)<POST>登陆接口测试', () => {
  let app: Application;
  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch (err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    await close(app);
  });

  it('正常登陆', async () => {
    const startTime = Date.now();
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: 'jack', password: 'redballoon' });

    const cost = Date.now() - startTime;

    expect(result.status).toBe(200);
    expect(cost).toBeLessThanOrEqual(1000);
    expect(result.body.code).toBe(200);
    expect(result.body.result).toBe('success');
    expect(result.body.message).toBe('登录成功');
    expect(result.body.data.token).toBeDefined();
    expect(typeof result.body.data.token).toBe('string');
  });

  it('异常登陆', async () => {
    const startTime = Date.now();
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: 'admin', password: 'xxxxxxx' });
    const cost = Date.now() - startTime;

    expect(result.status).toBe(200);
    expect(cost).toBeLessThanOrEqual(1000);
    expect(result.body).toEqual({
      code: 400,
      result: 'error',
      message: '账号或密码不正确',
      data: null,
    });
  });
});
