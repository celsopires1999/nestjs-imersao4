import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAccountDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  balance: number;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  subdomain: string;
}
