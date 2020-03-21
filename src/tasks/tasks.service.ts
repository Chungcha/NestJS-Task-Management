import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

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

}
