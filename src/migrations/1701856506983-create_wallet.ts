import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWallet1701856506983 implements MigrationInterface {
    name = 'CreateWallet1701856506983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`wallet\` (\`idWallet\` int NOT NULL AUTO_INCREMENT, \`Saldo\` int NOT NULL, \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`UpdatedAt\` timestamp NULL, \`idUser\` int NULL, PRIMARY KEY (\`idWallet\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`wallet\` ADD CONSTRAINT \`FK_7ffa945bca6b8b8886483fadc43\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`wallet\` DROP FOREIGN KEY \`FK_7ffa945bca6b8b8886483fadc43\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`wallet\``);
    }

}
