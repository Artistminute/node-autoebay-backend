import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './ApplicationModule';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

async function bootstrap() {

    const app = await NestFactory.create(ApplicationModule);

    app.use(bodyParser.json());
    app.use(cors());

    await app.listen(3000);

}
bootstrap();
