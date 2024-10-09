import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param, HttpCode, HttpException } from '@nestjs/common';
import { TaskService } from './task.service';
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('task')
export class TaskController {
    taskService: TaskService;

    constructor( taskService: TaskService) {
        this.taskService = taskService;
    }

  // En la url debe ser http://localhost:3000/task/v1

  

    @Get('/all')
    getAllTask() {
        return  this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id:string): any {
    
       
        if(!this.taskService.getTask(parseInt(id))){
            throw new HttpException('Task not found', 404);
        }else{
            return  this.taskService.getTask(parseInt(id));
        }
       
    }

    @Get('/index')
    getIndex(@Query() query:any): any {
        console.log(query);
        return  {"tarea":'Obteniendo tarea'};
    }

    @Post('/tasks')
    createTasks(@Body() task:CreateTaskDto): any {
        console.log(task);
        return  this.taskService.createTasks(task);
    }

    @Put('/tasks')
    updateTasks(): any {
        return  this.taskService.updateTasks();
    }

    @Patch('/tasks')
    anUpdateTasks(): any {
        return  this.taskService.upadateStatusTasks();
    }

    @Delete('/tasks')
    deleteTasks(): any {
        return  this.taskService.deleteTasks();
    }
}