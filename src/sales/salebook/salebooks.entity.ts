import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sale_has_books')
export class SaleBooksEntity {

    @PrimaryGeneratedColumn()
    idSaleHasBooks: number;

    @Column()
    idSale: number;
    
    @Column()
    idBook: number;

    @Column()
    cant: number;
}
