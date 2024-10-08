import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
    taskService: TaskService;

    constructor( taskService: TaskService) {
        this.taskService = taskService;
    }

  // En la url debe ser http://localhost:3000/task/v1
    @Get('/all')
    getAllTask(): any {
        return  this.taskService.getTasks();
    }

    @Get('/index')
    getIndex(): any {
        return  {"tarea":'Obteniendo tarea'};
    }
}