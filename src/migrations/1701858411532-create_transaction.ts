import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTransaction1701858411532 implements MigrationInterface {
    name = 'CreateTransaction1701858411532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`transaction\` (\`idTransaction\` int NOT NULL AUTO_INCREMENT, \`idSender\` int NULL, \`idReceiver\` int NULL, PRIMARY KEY (\`idTransaction\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`wallet\` DROP FOREIGN KEY \`FK_7ffa945bca6b8b8886483fadc43\``);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`CreatedAt\` \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`UpdatedAt\` \`UpdatedAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_9ef57a881fa732726ea52cb9af3\` FOREIGN KEY (\`idSender\`) REFERENCES \`wallet\`(\`idWallet\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction\` ADD CONSTRAINT \`FK_32e3eb445ab905b1a3d49b70cb3\` FOREIGN KEY (\`idReceiver\`) REFERENCES \`wallet\`(\`idWallet\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wallet\` ADD CONSTRAINT \`FK_7ffa945bca6b8b8886483fadc43\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`wallet\` DROP FOREIGN KEY \`FK_7ffa945bca6b8b8886483fadc43\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_32e3eb445ab905b1a3d49b70cb3\``);
        await queryRunner.query(`ALTER TABLE \`transaction\` DROP FOREIGN KEY \`FK_9ef57a881fa732726ea52cb9af3\``);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`UpdatedAt\` \`UpdatedAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`wallet\` CHANGE \`CreatedAt\` \`CreatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`wallet\` ADD CONSTRAINT \`FK_7ffa945bca6b8b8886483fadc43\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`transaction\``);
    }

}
