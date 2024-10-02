// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Todo } from './todo.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mariadb',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'something',
//       database: 'todo_db',
//       entities: [Todo],
//       synchronize: true,
//     }),
//     TypeOrmModule.forFeature([Todo]),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'something',
      database: 'todo_db',
      entities: [Todo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
