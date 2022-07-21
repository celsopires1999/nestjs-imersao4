export class CreateTransactionDto {
  payment_date: Date;

  name: string;

  description: string;

  category: string;

  amount: number;

  type: string;
}
