import { Salesman, SalesLeader, SalesManager, SalesOfficer, SaleHandler } from "./Chain";

export default class Chain{

    salesDept: SaleHandler;

    constructor(){

        this.salesDept = this.configure();
        this.run();
    }

    configure(): SaleHandler {
        let salesman = new Salesman();
        let leader = new SalesLeader();
        let manager = new SalesManager();
        let officer = new SalesOfficer();

        salesman.setNext(leader);
        leader.setNext(manager);
        manager.setNext(officer);

        return salesman;
    }

    run(): void {

        this.salesDept.handle(500);
        this.salesDept.handle(5000);
        this.salesDept.handle(20000);
        this.salesDept.handle(500000);
    }
}

new Chain();