import {
    IsString,
    IsNumber,
    IsNotEmpty,
} from 'class-validator';



export class CreateTaskDto {
    id: number;
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}