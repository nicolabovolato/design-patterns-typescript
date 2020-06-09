import { Vehicle, Car, Motorcycle } from "./Vehicles";

export abstract class VehicleFactory {

    abstract createVehicle() : Vehicle;

    start(): void {
        let v = this.createVehicle();
        v.start();
    }
}

export class CarFactory extends VehicleFactory {

    createVehicle() : Vehicle {
        
        let horsepower = 100;
        let speed = 150;

        return new Car(horsepower, speed);
    }
}

export class MotorcycleFactory extends VehicleFactory {

    createVehicle() : Vehicle {

        let horsepower = 25;
        let speed = 100;

        return new Motorcycle(horsepower, speed);
    }
}