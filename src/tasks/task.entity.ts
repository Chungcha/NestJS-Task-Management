import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from './tasks.model';

@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    // this decorator tells typeorm this is a primary key column.  ID sould be generated and incremated with new task.
    id: number;
    // typicall number

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus

}