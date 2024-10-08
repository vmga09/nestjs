import { Module } from '@nestjs/common';
import  { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
})
export class AppModule {}
