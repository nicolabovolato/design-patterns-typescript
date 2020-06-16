export interface MoneyTransfer {

    transfer(amount: number, debitor: BankAccount, creditor: BankAccount): boolean
}

export class BankAccount {

    private credit: number 

    constructor(_credit: number){
        this.credit = _credit
    }

    withdraw(amount: number): void {
        if(amount > 0) this.credit -= amount
    }

    deposit(amount: number): void {
        if(amount > 0) this.credit += amount 
    }

    getBalance(): number {
        return this.credit
    }
}

export class WireTransfer implements MoneyTransfer {

    transfer(amount: number, debitor: BankAccount, creditor: BankAccount): boolean {
        if(amount > 0){

            debitor.withdraw(amount)
            creditor.deposit(amount)
            return true
        }
        else return false
    }
}

export class WireTransferProxy implements MoneyTransfer {

    unsafeTransfer: WireTransfer = new WireTransfer()

    transfer(amount: number, debitor: BankAccount, creditor: BankAccount): boolean {

        if(creditor.getBalance() > amount){

            return this.unsafeTransfer.transfer(amount, debitor, creditor)
        }
        else return false
    }
}