import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DefaultEntity implements IDefaultDTO {
  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date | undefined;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date | undefined;
}
