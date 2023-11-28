import { Controller, Body, Delete, Get, Param, Post, Put, HttpStatus } from '@nestjs/common';
import { SaleBooksService } from './salebooks.service';
import { SaleHasBooksDto } from '../sale.dto';


@Controller('detail')
export class SaleBooksController {

    constructor(private readonly saleBookService: SaleBooksService) {}

    
    @Post('save')
    async createBooksInSale(@Body() saleModel: SaleHasBooksDto){
        return {
            statusCode: HttpStatus.OK,
            message: 'Books in Sale added successfully',
            data: await this.saleBookService.insertBooks(saleModel),
        };
    }

    

    
}
