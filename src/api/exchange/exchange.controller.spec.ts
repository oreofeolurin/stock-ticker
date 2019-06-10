import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeController } from './exchange.controller';
import { CoreModule } from '../../core/core.module';
import { ExchangeService } from './exchange.service';

describe('Exchange Controller', () => {
    let controller: ExchangeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CoreModule],
            controllers: [ExchangeController],
            providers: [ExchangeService],
        }).compile();

        controller = module.get<ExchangeController>(ExchangeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
