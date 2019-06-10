import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseTransformInterceptor } from './core/interceptors/response-transform.interceptor';

const PORT = 4000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new ResponseTransformInterceptor());

    if (process.env.NODE_ENV !== 'production' || ('ENABLE_SWAGGER' in process.env && /(true|on|1)/gi.test(process.env.ENABLE_SWAGGER))) {
        const options = new DocumentBuilder()
            .setTitle('Stock Ticker')
            .setSchemes('http', 'https')
            .build();

        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(PORT, () => {
        Logger.log(`App listening on port ${PORT}`, 'HTTP');
        Logger.log('Press Ctrl+C to quit.', 'HTTP');
    });
}

bootstrap();
