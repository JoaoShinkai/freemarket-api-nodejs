import {MigrationInterface, QueryRunner} from "typeorm";

export class createRelationUserProduct1652294698347 implements MigrationInterface {
    name = 'createRelationUserProduct1652294698347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UQ_e12875dfb3b1d92d7d7c5377e22` ON `user`");
        await queryRunner.query("ALTER TABLE `product` ADD `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `birth_date`");
        await queryRunner.query("ALTER TABLE `user` ADD `birth_date` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_329b8ae12068b23da547d3b4798` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_329b8ae12068b23da547d3b4798`");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `product` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `birth_date`");
        await queryRunner.query("ALTER TABLE `user` ADD `birth_date` date NOT NULL");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `user` ADD `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `userId`");
        await queryRunner.query("CREATE UNIQUE INDEX `UQ_e12875dfb3b1d92d7d7c5377e22` ON `user` (`email`)");
    }

}
