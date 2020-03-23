// // models define the shape of a task.
// // no nest g model

// // can define a model as a class or an interface.
// // can be Interface or Class
// // Interface: typescript, enforces shape of object upon compilation.  After compilation, interfaces not preserved as interfaces.
// // Class: Classes will be preserved.  Useful when creating object based on blueprint n self contained functionality using METHODS.

// // if not sure, start with interface and upgrade to class.

// export interface Task {

//     id: string;
//     // properties of task
//     title: string;
//     description: string;
//     status: TaskStatus;
//     // prefined set of statuses
//     // uses Typescript enumertation or enums
// }

// export enum TaskStatus {
//     // predefined list of statuses
//     OPEN = 'OPEN',
//     IN_PROGRESS = 'IN_PROGRESS',
//     DONE = 'DONE'
// }

// Interface not needed as entity is a blueprint that is used to define tasks.  Task status enum still needed though.