import { Test, TestingModule } from '@nestjs/testing';
import { IntrinioService } from './intrinio.service';
import { HttpModule } from '@nestjs/common';

describe('IntrinioService', () => {
    let service: IntrinioService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [IntrinioService],
        }).compile();

        service = module.get<IntrinioService>(IntrinioService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
