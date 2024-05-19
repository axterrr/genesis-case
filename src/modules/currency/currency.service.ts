import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {
    public async getUsdToUahRate(): Promise<number> {
        const apiKey = process.env.EXCHANGE_RATE_API_KEY || 'exchange_rate_api_key';
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

        const response = await axios.get(url);
        return response.data.conversion_rates.UAH;
    }
}
