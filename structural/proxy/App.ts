import { MoneyTransfer, BankAccount, WireTransfer, WireTransferProxy } from "./Proxy";

export default class Proxy {

    transfer: MoneyTransfer;

    constructor(){

        this.transfer = new WireTransfer();
        this.run();

        
        this.transfer = new WireTransferProxy();
        this.run();
    }

    run(): void {

        let creditor = new BankAccount(500);
        let debitor = new BankAccount(500);

        console.log(`Creditor balance: ${creditor.getBalance()}$`);
        console.log(`Debitor balance: ${debitor.getBalance()}$`);

        let result = this.transfer.transfer(1000, debitor, creditor);

        if(result) console.log("Transfer complete");
        else console.log("Transfer failed");

        console.log(`Creditor balance: ${creditor.getBalance()}$`);
        console.log(`Debitor balance: ${debitor.getBalance()}$`);

        console.log("---");
    }
}

