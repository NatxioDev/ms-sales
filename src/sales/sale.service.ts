import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from 'typeorm';
import { SaleEntity } from './sale.entity'
import { SaleDto, SaleHasBooksDto } from './sale.dto';

@Injectable()
export class SaleService {

    constructor( 
        @InjectRepository(SaleEntity) private readonly saleRepository: Repository<SaleEntity>, 
        @InjectEntityManager() private readonly entityManager: EntityManager){  
    }

    async getSaleInfo(): Promise<any>  {
        const result = await this.entityManager.query(
            'select s.idSale, s.idCustomer, c.name, c.lastname, s.total ' +
            'from sales s ' +
            'left join customers c on s.idCustomer = c.idCustomer;');
        return result;
    }

    async getSaleInfoById(idSale: number): Promise<any>  {
        const result = await this.entityManager.query(
            'select s.idSale, s.idCustomer, c.name, c.lastname, s.total ' +
            'from sales s ' +
            'left join customers c on s.idCustomer = c.idCustomer ' +
            'where s.idSale = ?;', 
            [idSale]);
        return result;
    }

    async getBooksInSale(idSale: number): Promise<any>  {
        const result = await this.entityManager.query(
            'select x.idSaleHasBooks, x.idSale, x.idBook, b.title, x.cant ' +
            'from sale_has_books x ' +
            'left join books b on x.idBook = b.idBook ' +
            'where x.idSale = ?;', 
            [idSale]);
        return result;
    }

    async getInfoComplete(idSale: number): Promise<any>  {
        const result = await this.entityManager.query(
            'select x.idSaleHasBooks, x.idSale, x.idBook, c.name, c.lastname, b.title, x.cant ' +
            'from sale_has_books x ' +
            'left join books b on x.idBook = b.idBook ' +
            'left join sales s on x.idSale = s.idSale ' + 
            'left join customers c on s.idCustomer = c.idCustomer ' +
            'WHERE x.idSale = ?;', 
            [idSale]);
        return result;
    }
    
    async insert(data: SaleDto){
        const sale = this.saleRepository.create(data);
        const salet = await this.saleRepository.save(data);
        return salet;
    }

    async insertBooks(data: SaleHasBooksDto){
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
