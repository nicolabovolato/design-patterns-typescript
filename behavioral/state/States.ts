import { Car } from "./Car"

export abstract class CarState {

    protected car: Car

    constructor(_car: Car) {
        this.car = _car
    }

    abstract turnKeys(): void
    abstract toggleHandbrake(): void
    abstract accelerate(): void
    abstract brake(): void
}

export class EngineOffState extends CarState {
    
    constructor(_car: Car) {

        super(_car)
        console.log("Engine is now turned off")
    }

    turnKeys(): void {

        console.log("Turning keys...")
        this.car.setState(new StoppedState(this.car))
    }

    toggleHandbrake(): void {
        this.car.handbrake = !this.car.handbrake
    }

    accelerate(): void {
        console.log("Engined is not started")
    }

    brake(): void {
        console.log("Engined is not started")
    }
}

export class StoppedState extends CarState {
    
    constructor(_car: Car) {

        super(_car)
        console.log("Car is now stopped")
    }

    turnKeys(): void {

        console.log("Turning keys...")
        this.car.setState(new EngineOffState(this.car))
    }

    toggleHandbrake(): void {

        this.car.handbrake = !this.car.handbrake
        console.log(`Handbrake is ${this.car.handbrake ? 'on' : 'off'}`)
    }

    accelerate(): void {

        if(!this.car.handbrake){

            console.log("Accelerating...")
            this.car.setState(new MovingState(this.car))
        } 
        else console.log("Remove Handbrake first")
    }

    brake(): void {
        console.log("Car is stoppped")
    }
}

export class MovingState extends CarState {

    constructor(_car: Car) {

        super(_car)
        console.log("Car is now moving")
    }

    turnKeys(): void {
        console.log("Car is moving, cannot turn keys")
    }

    toggleHandbrake(): void {
        console.log("Car is moving, cannot toggle handbrake")
    }

    accelerate(): void {
        console.log("Car keeps moving")
    }

    brake(): void {
        
        console.log("Braking...")
        this.car.setState(new StoppedState(this.car))
    }
}
