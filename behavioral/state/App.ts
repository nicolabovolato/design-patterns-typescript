import { Car } from "./Car"

export default class StateExample {

    car: Car

    constructor(){

        this.car = new Car()
        this.run()
    }

    run(): void {

        this.car.turnKeys()

        this.car.accelerate()
        this.car.toggleHandbrake()

        this.car.accelerate()
        this.car.toggleHandbrake()

        this.car.brake()

        this.car.turnKeys()
    }
}
