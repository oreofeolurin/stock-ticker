import { HttpModule, Module } from '@nestjs/common';
import { IntrinioService } from './services/intrinio.service';

@Module({
    imports: [HttpModule],
    providers: [IntrinioService],
    exports: [IntrinioService],
})
export class CoreModule {
}
