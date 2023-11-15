import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales')
export class SaleEntity {

    @PrimaryGeneratedColumn()
    idSale: number;

    @Column()
    idCustomer: number;

    @Column()
    total: number;
}
