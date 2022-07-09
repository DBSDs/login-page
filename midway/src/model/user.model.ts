import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Init, Provide } from '@midwayjs/decorator';

import { UserLoginDTO } from '../dto/user.dto';
import { UserEntity } from '../entity/user.entity';

@Provide()
class UserModel {
  @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param user {UserLoginDTO} 用户名
   */
  async getUserByUsernameAndPassword(user: UserLoginDTO): Promise<UserEntity> {
    const firstUser = await this.userRepo.findOne({
      where: user,
    });

    return firstUser;
  }

  async getAllUser(): Promise<UserEntity[]> {
    const result = await this.userRepo.find();
    return result;
  }

  @Init()
  async saveMock() {
    const user = new UserEntity();
    user.username = 'jack';
    user.password = 'redballoon';
    await this.userRepo.save(user);
    console.log('has benn saved');
  }
}

export { UserModel };
