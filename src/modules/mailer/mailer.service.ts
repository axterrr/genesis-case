import { Injectable } from '@nestjs/common';
import { Email } from '../../entities/email.entity';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Resend } from 'resend';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class MailerService {

    private readonly resend = new Resend(process.env.RESEND_API_KEY || 'resend_api_key');

    @Cron(CronExpression.EVERY_DAY_AT_10AM)
    private async sendEmails() {

        const emails: Email[] = await Email.find();
        const addresses: string[] = emails.map(e => e.email);

        const rate: number = await new CurrencyService().getUsdToUahRate();

        for (const address of addresses) {
            this.resend.emails.send({
                from: process.env.RESEND_SENDER_EMAIL || 'email@example.com',
                to: address,
                subject: 'Currency rate',
                text: `Today's exchange rate of the dollar to the hryvnia is ${rate}`
            });
        }
    }
}
