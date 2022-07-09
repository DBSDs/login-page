import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { Validate } from '@midwayjs/validate';
import { JwtService } from '@midwayjs/jwt';

import { UserLoginDTO } from '../dto/user.dto';
import { UserModel } from '../model/user.model';

@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userModel: UserModel;

  @Inject()
  jwtService: JwtService;

  @Post('/login')
  @Validate()
  async login(@Body() user: UserLoginDTO) {
    const finduser = await this.userModel.getUserByUsernameAndPassword(user);
    if (finduser) {
      const token = await this.jwtService.sign({
        user: user.username,
        password: user.password,
      });

      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token,
        },
      };
    }

    return {
      code: 400,
      result: 'error',
      message: '账号或密码不正确',
      data: null,
    };
  }
}
