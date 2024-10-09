import {HttpException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';


// interface para especificar tarea, se debe exportar
export interface Task {
    id: number;
    title: string;
    description: string;
}

@Injectable()
export class TaskService {
    private tasks:Task[] = [];
    getTasks(): any {
        return  this.tasks //{"title":'Obteniendo tarea',"description":'Obteniendo descripción'}
    }

    getTask(id:number): any {
        console.log("aqui",id);
        const taskFound =  this.tasks.find(task => task.id === id);
        if(!taskFound) {
            return false
        }
        return  taskFound //{"title":'Obteniendo tarea',"description":'Obteniendo descripción'}
    }


    getAllTask(): any {
        return  this.tasks //{"title":'Obteniendo tarea',"description":'Obteniendo descripción'}
    }
    updateTasks() {
        return {"tarea":'Actualizando  tarea'};
    }

    deleteTasks() {
        return {"tarea":'Eliminando tarea'};
    }

    upadateStatusTasks() {
        return {"tarea":'Actualizando estado tarea'};
    }

    createTasks(task:CreateTaskDto) {
        this.tasks.push({
            ...task,id: this.tasks.length + 1});
        return task;
    }
}