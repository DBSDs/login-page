import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty, ApiResponseProperty } from '@midwayjs/swagger';

import { CommonDTO } from './common.dto';

const requiredString = RuleType.string().required();

export class UserLoginDTO {
  @Rule(requiredString)
  @ApiProperty({ example: 'clj', description: '用户名' })
  username: string;

  @Rule(requiredString)
  @ApiProperty({ example: '123456', description: '密码' })
  password: string;
}

export class UserLoginResultDTO extends CommonDTO {
  @ApiResponseProperty({
    type: [String],
  })
  data: {
    token: string;
  };
}
