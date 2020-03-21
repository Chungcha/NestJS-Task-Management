import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDTO } from './dto/create-task.dto';

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

    // @Post()
    // createTask(
    //     @Body('title') title: string,
    //     @Body('description') description: string
    //     // body decorator.  to retrieve the entire request body (@Body() /*html will collect the entire requestbody and put it here =>*/ body)
    //     // Extracting specific body parameters that we want.
    // ): Task {
    //     return this.tasksService.createTask(title, description);
    // }

    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
        return this.tasksService.createTask(createTaskDTO);
    }
    // the parameter has the entire request body and expects it to be shape of the DTO. 
    // needs to be changed in the service.

}
