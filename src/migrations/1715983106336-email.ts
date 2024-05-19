import { MigrationInterface, QueryRunner } from 'typeorm';

export class Email1715983106336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE email (id int NOT NULL AUTO_INCREMENT, email varchar(255) NOT NULL,  PRIMARY KEY (id)) ENGINE=InnoDB`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE email`)
    }

}
