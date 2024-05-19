import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public email: string;
}