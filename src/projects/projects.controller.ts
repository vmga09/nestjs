import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {

    @Get()
    getAllProjects(): any {
        return  {"proyecto":'Obteniendo todos los proyectos'};
    }
}
