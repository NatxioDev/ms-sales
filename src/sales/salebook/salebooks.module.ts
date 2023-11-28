import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleBooksService } from './salebooks.service';
import { SaleBooksController } from './salebooks.controller';
import { SaleBooksEntity } from './salebooks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleBooksEntity])],
  controllers: [SaleBooksController],
  providers: [SaleBooksService],
})
export class SaleBooksModule {}