import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encodePassword } from 'src/utils/bcryt';
import { UserDto } from './dtos/user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(User.name) private taskModel: Model<UserDocument>) {}
  async create(params: UserDto): Promise<any> {
    const password = await encodePassword(params.password);
    params.password = password;
    return await this.taskModel.create({ ...params });
  }
  async getAll() {
    return await this.taskModel.find();
  }
}
