import { Garden } from "./Gardens";

export class House {

    protected garden: Garden;

    constructor(_garden: Garden){

        this.garden = _garden;
    }

    openFrontDoor(): void {
        console.log("Door open");
    }

    openWindows(): void {
        console.log("Windows opened");
    }

    mowLawn(): void {
        this.garden.mowLawn();
    }

}

export class BigHouse extends House {

    constructor(_garden: Garden){

        super(_garden);
    }

    openBackDoor(): void {
        console.log("Door open");
    }

    openWindows(): void {
        console.log("Windows opened");
    }

}