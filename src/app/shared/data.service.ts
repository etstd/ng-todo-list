import { InMemoryDbService } from 'angular-in-memory-web-api';
import { todos } from './data';

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    return { todos };
  }
};