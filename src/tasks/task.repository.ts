import { Repository, EntityRepository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';


@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    // This is a repo for tasks
    // Defining repo allows for custom methods and for findOne built in methods.

    async createTask(createTaskDTO: CreateTaskDTO): Promise<Task>{
        // taken from task service.
        // DTO is useful as the same shape of data is guaranteed.
        // 

        const { title, description } = createTaskDTO;

        const task = new Task();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save();

        return task;

    }

}