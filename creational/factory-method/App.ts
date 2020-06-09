import { CarFactory, MotorcycleFactory } from "./Factories";

export default class FactoryMethod{

    constructor(){
        this.init();
    }

    private init(): void {

        let car = new CarFactory();
        let motorcycle =  new MotorcycleFactory();

        car.start();
        motorcycle.start();
    }

}