import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
// injectable decorator. makes this available for injection in other components part of the same module. 
// nest g service tasks
export class TasksService {

    private tasks: Task[] = [];
    // if not private, any other components that injects this service can make changes to the array...which is the service's job, not other other components.
    // expected to be an array of tasks.

    getAllTasks(): Task[] {
        //getAllTasks method proxies the array since it is private property.
        return this.tasks;
    }

    // createTask(title: string, description: string): Task {
    //     // the parameters we want from the user.  ID is created in the service and status will default to open
    //     // returns a task object on line 32
    //     const task: Task = {
    //         id: uuid(),
    //         // uuid package creates ID's for us.
    //         title,
    //         // JS syntactic sugah. Object Literal Syntax where if the Key is the same as the variable used to define value, just define the key. Same as title: title
    //         description,
    //         status: TaskStatus.OPEN
    //     }

    //     this.tasks.push(task);
    //     return task;
    //     // GOOD PRACTICE TO RETURN NEWLY CREATED RESOURCE!!!!!
    //     // It reduces load on application not requiring the front end to make another request.

    // }

    createTask(createTaskDTO: CreateTaskDTO): Task {
        const { title, description } = createTaskDTO
        // reconstructs the object with the selected keys in the DTO
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task);
        return task;

    }

    getTasksById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    deleteTask(id: string): Task {
        // could also return VOID if no return
        const task = this.tasks.find(task => task.id === id);
        this.tasks = this.tasks.filter(item => item !== task)
        return task
        // returning the deleted instance
    }

    updateTaskStatus(id: string, status: TaskStatus ): Task {
        const updatedTask = this.getTasksById(id)
        updatedTask.status = status
        return updatedTask
    }

}
