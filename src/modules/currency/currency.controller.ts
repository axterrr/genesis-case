import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('rate')
export class CurrencyController {
    constructor(
        public readonly service: CurrencyService
    ) {}

    @Get()
    public async getUsdToUah(): Promise<unknown> {
        return {
            "rate": await this.service.getUsdToUahRate()
        };
    }
}
