import { Controller, Get, Param } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {

    constructor(private service: ExchangeService) {
    }

    @Get()
    getAll() {
        return this.service.getAllStockExchange();

    }

    @Get(':mic/exchange')
    getTicker(@Param('mic') mic: string) {
        return this.service.getExchangeTicker(mic);

    }
}
