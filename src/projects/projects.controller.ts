import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('projects')
export class ProjectsController {

    @Get()
    getAllProjects(@Req() request: Request, @Res() response: Response): any {
        console.log(request.headers);
        response.status(200).send('All projects');
    }
}
