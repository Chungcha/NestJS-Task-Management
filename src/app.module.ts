import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule]
})
export class AppModule {}


/************************************* Modules ************************************/
// starting point of app
// effective way to organize components by closely related set of capabilites (per feature)
// good practice to have folder per module, and it's components
// Modles are singletons, they can be imported by multiple other modules
// Module: nest g module tasks -generates a new module
