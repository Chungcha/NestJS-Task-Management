/************************** Data Transfer Object *************************/
// Usually a class as it is preserved after compiling and runtime.  Useful when using pipes.

export class CreateTaskDTO {
    title: string;
    description: string;
}