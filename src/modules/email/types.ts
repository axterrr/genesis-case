import { ApiProperty } from '@nestjs/swagger';

export class EmailDTO {
    @ApiProperty({
        title: 'email',
        required: true,
        type: String
    })
    public email: string;
}
