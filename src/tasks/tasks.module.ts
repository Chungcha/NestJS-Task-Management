import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository])
    // provide an array of entities or repos that we want to include.
    // makes this typeorm module include the injectable instance of TaskRepo
  ],
  controllers: [TasksController],
  providers: [TasksService]
  //providers are a service.
})
export class TasksModule {}
