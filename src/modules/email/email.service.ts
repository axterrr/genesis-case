import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Email } from '../../entities/email.entity';

@Injectable()
export class EmailService {

    public async addEmail(emailAddress: string): Promise<Email> {

        const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(emailAddress))
            throw new HttpException('Invalid email format', HttpStatus.BAD_REQUEST);

        const existingEmail: Email | null = await Email.findOne({
            where: {
                email: emailAddress
            }
        });
        if(existingEmail)
            throw new HttpException('Email has already been subscribed', HttpStatus.CONFLICT);

        const newEmail = new Email();
        newEmail.email = emailAddress;
        return await newEmail.save();
    }
}
