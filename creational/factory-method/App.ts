import { VehicleFactory, CarFactory, MotorcycleFactory } from "./Factories"

export default class FactoryMethodExample {

    vehicle1: VehicleFactory
    vehicle2: VehicleFactory

    constructor() {

        this.vehicle1 = new CarFactory()
        this.vehicle2 = new MotorcycleFactory()

        this.run()
    }

    private run(): void {

        this.vehicle1.start()
        this.vehicle2.start()
    }

}