import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { SaleBooksEntity } from './salebooks.entity'
import {SaleHasBooksDto } from '../sale.dto';

@Injectable()
export class SaleBooksService {

    constructor( 
        @InjectRepository(SaleBooksEntity) private readonly saleBooksRepository: Repository<SaleBooksEntity>, 
        @InjectEntityManager() private readonly entityManager: EntityManager){}

    
    async insertBooks(data: SaleHasBooksDto){
        const sale = this.saleBooksRepository.create(data);
        await this.saleBooksRepository.save(data);
        return sale;
    }

}
