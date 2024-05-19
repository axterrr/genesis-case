import { Module } from '@nestjs/common';
import { CurrencyModule } from './modules/currency/currency.module';
import { EmailModule } from './modules/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';
import { ScheduleModule } from '@nestjs/schedule';
import {MailerModule} from "./modules/mailer/mailer.module";

@Module({
    imports: [
        CurrencyModule,
        EmailModule,
        MailerModule,
        TypeOrmModule.forRoot(AppDataSource.options),
        ScheduleModule.forRoot(),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
