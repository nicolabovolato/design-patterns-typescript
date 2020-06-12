import { FormulaFacade } from "./Facades";

export default class Facade{


    formulary: FormulaFacade;

    constructor() {

        this.formulary = new FormulaFacade();
        this.run();
    }

    run(): void {
        let mass = 10;
        let time = 5;
        let distance = 20;

        let energy = this.formulary.getMovingObjectKineticEnergy(distance, time, mass);

        console.log(`Object has ${energy}J of Energy`);
    }
}