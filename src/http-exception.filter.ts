import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.getResponse();
    const errorMessage = typeof exceptionResponse === 'object' && exceptionResponse.hasOwnProperty('message')
      ? (exceptionResponse as any).message
      : exceptionResponse;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      errorMessage,
    });
  }
}
