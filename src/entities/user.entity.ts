import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'tb_user' })
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;
}
