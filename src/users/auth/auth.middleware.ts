import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('In middleware 2');
    const auto = req.headers.authorization;
    if (auto != 'Bearer') {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      
    }
    next();
  }
}
