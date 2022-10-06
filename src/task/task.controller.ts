import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { TaskService } from './task.service';

@Controller('user')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/')
  async create(@Body() user: UserDto): Promise<any> {
    try {
      return await this.taskService.create(user);
    } catch {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
  }
  @Get('/')
  async findAll() {
    return await this.taskService.getAll();
  }
}
