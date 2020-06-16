export interface Vehicle {

    wheels: number
    horsepower: number
    speed: number

    start(): void
}

export class Car implements Vehicle {
    
    wheels: number
    horsepower: number
    speed: number
    
    constructor(_horsepower: number, _speed: number) {
        
        this.wheels = 4
        this.horsepower = _horsepower
        this.speed = _speed
    }

    start(): void {
        console.log("Car started")
    }
}

export class Motorcycle implements Vehicle {
    
    wheels: number
    horsepower: number
    speed: number
    
    constructor(_horsepower: number, _speed: number) {

        this.wheels = 2
        this.horsepower = _horsepower
        this.speed = _speed
    }

    start(): void {
        console.log("Motorcycle started")
    }
}