import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from './../../accounts/entities/account.entity';

export enum ReportStatus {
  PENDING = 'pending',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export const ReportStatusList: string[] = Object.values(ReportStatus);

@Table({
  tableName: 'reports',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Report extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  start_date: Date;

  @Column({ allowNull: false })
  end_date: Date;

  @Column({ allowNull: true })
  file_url: string;

  @Column({ allowNull: false })
  status: ReportStatus;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;
}
