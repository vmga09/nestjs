import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatequeryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const anyNumber =parseInt(value.numero.toString(),10);
    if (isNaN(anyNumber)) {
      throw new HttpException('Invalid number', 400);
    }
    return {
      ...value,
      numero: anyNumber};

  }
}
