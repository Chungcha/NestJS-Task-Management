import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
//controller decorator. 'tasks' is the url
//decorators are a typescript feature, allows annotations of classes or classmembers, like methods or properties to add extra functionality. 
//users the controller decorator to decorate the class, defining this is a CONTROLLER.
// nest g controller tasks

export class TasksController {

    constructor(private tasksService: TasksService){}
    // dependency injection is done in the constructor of a class.
    // when instantized, it is going to look for a TaskService object, find/create it and assign it as an argument as taskService.  Assigns it as an argument to task service, it is a private property in the class, allowing other methods in the class to use it.

    @Get()
    // won't be called unless we tell nest what type of req it gonna handle.  Add a decorator.
    // when there is a get request going to tasks, the get all tasks will go.
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

}
