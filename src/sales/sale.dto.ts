export interface SaleDto {
    readonly idSale: number;
    readonly idCustomer: number;
    readonly total: number;
}

export interface SaleHasBooksDto {
    readonly idSaleHasBooks: number;
    readonly idSale: number;
    readonly idBook: number;
    readonly cant: number;
}
