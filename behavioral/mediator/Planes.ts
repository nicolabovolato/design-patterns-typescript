import { Mediator } from "./Mediators"

export interface Plane {

    name: string  
    speed: number
    passengers: number

    signalTakeOff(): void
    signalLand(): void

    confirmTakeOff(): void
    confirmLand(): void
}

export class Boeing737 implements Plane{

    name: string = "Boeing 737"
    speed: number = 1012
    passengers: number = 215

    mediator: Mediator

    constructor(_mediator: Mediator){
        this.mediator = _mediator
    }

    signalTakeOff(): void {
        this.mediator.notify(this, "takeoff")
    }

    signalLand(): void {
        this.mediator.notify(this, "land")
    }

    confirmTakeOff(): void {
        console.log(`${this.name} has taken off`)
    }

    confirmLand(): void {
        console.log(`${this.name} has landed`)
    }
}

export class AirbusA300 implements Plane{

    name: string = "Airbus A300"
    speed: number = 1012
    passengers: number = 250

    mediator: Mediator

    constructor(_mediator: Mediator){
        this.mediator = _mediator
    }

    signalTakeOff(): void {
        this.mediator.notify(this, "takeoff")
    }

    signalLand(): void {
        this.mediator.notify(this, "land")
    }

    confirmTakeOff(): void {
        console.log(`${this.name} has taken off`)
    }

    confirmLand(): void {
        console.log(`${this.name} has landed`)
    }
}

export class FokkerF100 implements Plane{

    name: string = "Fokker F100"
    speed: number = 845
    passengers: number = 109

    mediator: Mediator

    constructor(_mediator: Mediator){
        this.mediator = _mediator
    }

    signalTakeOff(): void {
        this.mediator.notify(this, "takeoff")
    }

    signalLand(): void {
        this.mediator.notify(this, "land")
    }

    confirmTakeOff(): void {
        console.log(`${this.name} has taken off`)
    }

    confirmLand(): void {
        console.log(`${this.name} has landed`)
    }
}