import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(task: string): Promise<Todo> {
    const newTodo = this.todoRepository.create({ task });
    return this.todoRepository.save(newTodo);
  }

  remove(id: number): Promise<void> {
    return this.todoRepository.delete(id).then(() => undefined);
  }
}
