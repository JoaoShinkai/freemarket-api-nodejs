import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationUserFavorites1652885145838 implements MigrationInterface {
  name = 'RelationUserFavorites1652885145838';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user_favorites_product` (`userId` int NOT NULL, `productId` int NOT NULL, INDEX `IDX_2e88eb864c57e998cf498e59de` (`userId`), INDEX `IDX_fa3df350132320d1af65d002b0` (`productId`), PRIMARY KEY (`userId`, `productId`)) ENGINE=InnoDB'
    );
    await queryRunner.query(
      'ALTER TABLE `user_favorites_product` ADD CONSTRAINT `FK_2e88eb864c57e998cf498e59de6` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE `user_favorites_product` ADD CONSTRAINT `FK_fa3df350132320d1af65d002b0f` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user_favorites_product` DROP FOREIGN KEY `FK_fa3df350132320d1af65d002b0f`'
    );
    await queryRunner.query(
      'ALTER TABLE `user_favorites_product` DROP FOREIGN KEY `FK_2e88eb864c57e998cf498e59de6`'
    );
    await queryRunner.query(
      'DROP INDEX `IDX_fa3df350132320d1af65d002b0` ON `user_favorites_product`'
    );
    await queryRunner.query(
      'DROP INDEX `IDX_2e88eb864c57e998cf498e59de` ON `user_favorites_product`'
    );
    await queryRunner.query('DROP TABLE `user_favorites_product`');
  }
}
