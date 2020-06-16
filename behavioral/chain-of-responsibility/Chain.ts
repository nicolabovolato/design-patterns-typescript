export interface SaleHandler {

    setNext(handler: SaleHandler): void
    handle(amount: number): void
}

export abstract class AbstractSaleHandler implements SaleHandler {

    private nextHandler!: SaleHandler

    setNext(handler: SaleHandler): void {
        this.nextHandler = handler
    }

    handle(amount : number): void {
        if(this.nextHandler) this.nextHandler.handle(amount)
    }
}

export class Salesman extends AbstractSaleHandler {

    handle(amount: number): void {

        if(amount < 1000) console.log(`${amount}$: A Salesman will handle this order`)
        else super.handle(amount)
    }
}

export class SalesLeader extends AbstractSaleHandler {

    handle(amount: number): void {

        if(amount < 10000) console.log(`${amount}$: A Sales Leader will handle this order`)
        else super.handle(amount)
    }
}

export class SalesManager extends AbstractSaleHandler {

    handle(amount: number): void {

        if(amount < 50000) console.log(`${amount}$: A Sales Manager will handle this order`)
        else super.handle(amount)
    }
}

export class SalesOfficer extends AbstractSaleHandler {

    handle(amount: number): void {
        console.log(`${amount}$: A Sales Officer will handle this order`)
    }
}