import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { TenantGuard } from './../tenant/tenant.guard';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @UseGuards(JwtAuthGuard, TenantGuard)
  @Post()
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @UseGuards(JwtAuthGuard, TenantGuard)
  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @MessagePattern('reports-generated')
  async reportsGenerated(@Payload() message: KafkaMessage) {
    const { id, ...other } = message as any;
    await this.reportsService.update(id, other);
  }
}
