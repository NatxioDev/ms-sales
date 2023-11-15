import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SaleEntity } from './sale.entity'
import { SaleDto } from './sale.dto';

@Injectable()
export class SaleService {

    constructor(
        @InjectRepository(SaleEntity)
        private readonly saleRepository: Repository<SaleEntity>){
    }

    async findAll(){
        return await this.saleRepository.find();
    }

    async findById(idSale: number) {
        return await this.saleRepository.findOneBy({ idSale });
    }
    
    async insert(data: SaleDto){
        const sale = this.saleRepository.create(data);
        await this.saleRepository.save(data);
        return sale;
    }

    async update(idSale: number, data: Partial<SaleDto>){
        await this.saleRepository.update({ idSale }, data);
        return await this.saleRepository.findOneBy({ idSale });
    }
    
    async delete(idSale: number) {
        await this.saleRepository.delete({ idSale });
        return { deleted: true };
    }
}
