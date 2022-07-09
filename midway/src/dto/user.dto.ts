import { Rule, RuleType } from '@midwayjs/validate';

const requiredString = RuleType.string().required();

export class UserLoginDTO {
  @Rule(requiredString)
  username: string;

  @Rule(requiredString)
  password: string;
}
