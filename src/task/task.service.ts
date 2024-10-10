import {HttpException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma.service';


// interface para especificar tarea, se debe exportar
export interface Task {
    id: number;
    title: string;
    description: string;
}

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}
    
    getTasks(): any {
        return  this.prisma.task.findMany();
         //{"title":'Obteniendo tarea',"description":'Obteniendo descripción'}
    }

    getTask(id:string): any {

        
        return this.prisma.task.findUnique({
            where: {
                id: String(id),
            },
        })
    }


    getAllTask(): any {
        return  "Obteniendo todas las tareas" //{"title":'Obteniendo tarea',"description":'Obteniendo descripción'}
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
        const gtask = this.prisma.task.create({data: task});
        return gtask
    }
}