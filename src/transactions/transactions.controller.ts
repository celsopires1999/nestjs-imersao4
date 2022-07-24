import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { TenantGuard } from './../tenant/tenant.guard';
import { TenantService } from './../tenant/tenant/tenant.service';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly tenantService: TenantService,
  ) {}

  @UseGuards(JwtAuthGuard, TenantGuard)
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @UseGuards(JwtAuthGuard, TenantGuard)
  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
