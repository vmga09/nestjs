import {
    IsString,
    IsNumber,
    IsNotEmpty,
} from 'class-validator';



export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}