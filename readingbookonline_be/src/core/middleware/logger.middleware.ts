import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');

    use(req: Request, res: Response, next: NextFunction) {
        const { method, originalUrl } = req;
        const userAgent = req.get('user-agent') || '';
        const ip = req.ip;

        res.on('finish', () => {
            const { statusCode } = res;
            this.logger.log(
                `${method} ${originalUrl} ${statusCode} - ${userAgent} [${ip}]`,
            );
        });

        next();
    }
}
