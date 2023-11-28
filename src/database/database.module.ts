import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SaleModule } from '../sales/sale.module';
import { SaleBooksModule } from '../sales/salebook/salebooks.module';

@Module({
	imports:[
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'mysql', 
				host: process.env.DB_HOST,
				port: parseInt(process.env.DB_PORT), 
				username: process.env.DB_USER, 
				password: process.env.DB_PASSWORD, 
				database: process.env.DB_NAME,
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
				synchronize:true
			})
		}),
		SaleModule,SaleBooksModule
	]
})
export class DatabaseModule {
	constructor( private readonly connection:Connection){}
}
