import { Controller, Get, Post, Put, Delete, Patch, Body, Query, Param, HttpCode, HttpException, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { ValidatequeryPipe } from './pipes/validatequery/validatequery.pipe';
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

    @Get('/byid/:id')
    getTask(@Param('id') id:string): any {
        console.log(id);
    
       const task = this.taskService.getTask(id);
       console.log(task);
        if(task == null){
            throw new HttpException('Task not found', 404);
        }else{
            return  task;
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

    // Para probar la funcion de pipe 
    @Get('/pipe/:num')
    getNumber(@Param('num',ParseIntPipe) num:number): any {
        return num + 14
        
    }

    @Get('/active/:status')
    isUserActive(@Param('status',ParseBoolPipe) status:boolean): any {
        console.log(typeof(status));
        return status
        
    }

    @Get('/tarea/query')
    test(@Query(ValidatequeryPipe) query:{tarea:string, numero:number}): any {
        console.log(query);
        return `Hola ${query.tarea} ${query.numero + 10}`;
    }
}