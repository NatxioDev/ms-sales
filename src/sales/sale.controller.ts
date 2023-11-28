import { Controller, Body, Delete, Get, Param, Post, Put, HttpStatus } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleDto } from './sale.dto';


@Controller('sales')
export class SaleController {

    constructor(private readonly saleService: SaleService) {}

    @Get()
    async getSaleInfo(){
        return{
            statusCode: HttpStatus.OK,
            data: await this.saleService.getSaleInfo()
        };
    }

    @Get(':idSale')
    async getSaleInfoById(@Param('idSale') idSale: number){
        return{
            statusCode: HttpStatus.OK,
            data: await this.saleService.getSaleInfoById(idSale)
        };
    }

    @Get(':idSale/book')
    async getBooksInSale(@Param('idSale') idSale: number){
        return {
            statusCode: HttpStatus.OK,
            data: await this.saleService.getBooksInSale(idSale),
        };
    }

    @Get(':idSale/complete')
    async getInfoComplete(@Param('idSale') idSale: number){
        return {
            statusCode: HttpStatus.OK,
            data: await this.saleService.getInfoComplete(idSale),
        };
    }

    @Post('save')
    async create(@Body() saleModel: SaleDto){
        return {
            statusCode: HttpStatus.OK,
            message: 'Sale added successfully',
            data: await this.saleService.insert(saleModel),
        };
    }


    @Put(':idSale')
    async update(@Param('idSale') idSale: number, @Body() data: Partial<SaleDto>){
        return {
            statusCode: HttpStatus.OK,
            message: 'Sale update successfully',
            data: await this.saleService.update(idSale, data),
        };
    }

    @Delete(':idSale')
    async delete (@Param('idSale') idSale: number){
        await this.saleService.delete(idSale);
        return {
            statusCode: HttpStatus.OK,
            message: 'Sale deleted successfully',
        };
    }
}
