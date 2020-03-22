import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    // uses the pg driver
    host: 'localhost',
    port: 5432,
    username: 'charliechung',
    password: 'Tigers27',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // these translate to tables in database.  this tells typeorm which files.
    synchronize: true
    // Everytime connection starts, it is going to syncs up with schemas in the PG database.  
    // Not recommended in production
}