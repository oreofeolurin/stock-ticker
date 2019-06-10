import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IntrinioService } from '../../core/services/intrinio.service';

@Injectable()
export class ExchangeService {
    constructor(private intrinioService: IntrinioService) {
    }

    async getAllStockExchange() {
        try {
            const res = await this.intrinioService.get('stock_exchanges');
            return res.data;
        } catch (e) {
            throw new InternalServerErrorException((e));
        }
    }

    async getExchangeTicker(mic: string) {
        try {
            const res = await this.intrinioService.get(`stock_exchanges/${mic}/prices`);
            return res.data;
        } catch (e) {
            throw new InternalServerErrorException((e));
        }
    }
}
