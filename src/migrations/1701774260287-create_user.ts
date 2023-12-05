import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1701774260287 implements MigrationInterface {
    name = 'CreateUser1701774260287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`telefono\` varchar(20) NOT NULL, \`email\` varchar(40) NOT NULL, \`deletedAt\` timestamp NULL, \`spettatore\` tinyint NOT NULL DEFAULT 1, \`streamer\` tinyint NOT NULL DEFAULT 0, \`dataNascita\` date NOT NULL, PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
