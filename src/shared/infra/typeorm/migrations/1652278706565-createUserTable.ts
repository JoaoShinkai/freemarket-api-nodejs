import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserTable1652278706565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createTable(
        new Table({
          name: 'user',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'first_name',
              type: 'varchar'
            },
            {
              name: 'second_name',
              type: 'varchar'
          },
          {
              name: 'cpf',
              type: 'varchar'
          },
          {
              name: 'birth_date',
              type: 'Date'
          },
          {
              name: 'state',
              type: 'varchar'
          },
          {
              name: 'city',
              type: 'varchar'
          },
          {
              name: 'postal_code',
              type: 'varchar'
          },
          {
              name: 'street',
              type: 'varchar'
          },
          {
              name: 'number',
              type: 'varchar'
          },
          {
              name: 'district',
              type: 'varchar'
          },
          {
              name: 'phone',
              type: 'varchar'
          },
          {
              name: 'email',
              type: 'varchar',
              isUnique: true
          },
          {
              name: 'password',
              type: 'varchar'
          },
          {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
          },
          {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
          }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable('user');
    }

}
