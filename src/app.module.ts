import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleModule } from './sales/sale.module';
import { DatabaseModule } from './database/database.module';
import { SaleBooksModule } from './sales/salebook/salebooks.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, SaleModule, SaleBooksModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}