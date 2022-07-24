import { IsIn, IsISO8601, IsNotEmpty } from 'class-validator';
import { IsAfter } from './../../common/validators/is.after-rule';
import { ReportStatus, ReportStatusList } from './../entities/report.entity';

export class CreateReportDto {
  @IsISO8601()
  @IsNotEmpty()
  start_date: Date;

  @IsAfter('start_date')
  @IsISO8601()
  @IsNotEmpty()
  end_date: Date;

  @IsIn(ReportStatusList)
  @IsNotEmpty()
  status: ReportStatus;
}
