import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailDTO } from './types';
import { Email } from '../../entities/email.entity';

@Controller('subscribe')
export class EmailController {
    constructor(
        public readonly service: EmailService
    ) {}

    @Post()
    @HttpCode(200)
    public async postSubscribeEmail(@Body() body: EmailDTO): Promise<Email> {
        return this.service.addEmail(body.email);
    }
}
