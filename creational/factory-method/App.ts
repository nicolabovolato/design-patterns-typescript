import { CarFactory, MotorcycleFactory } from "./Factories"

export class App{

    constructor(){
        App.run()
    }

    private static run(): void {

        let car = new CarFactory()
        let motorcycle =  new MotorcycleFactory()

        car.start()
        motorcycle.start()
    }

}