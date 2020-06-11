import { Person } from "./Person";

abstract class BaseDecorator implements Person {

    person: Person;

    constructor(_person: Person) {

        this.person = _person;
    }

    getClothingInfo(): void {

        this.person.getClothingInfo();
    }

}

export class JacketDecorator extends BaseDecorator {

    constructor(_person: Person){

        super(_person);
    }

    getClothingInfo(): void {
        super.getClothingInfo()
        console.log("and a jacket");
    }

}

export class UmbrellaDecorator extends BaseDecorator {

    constructor(_person: Person){

        super(_person);
        this.openUmbrella();
    }

    getClothingInfo(): void {
        super.getClothingInfo()
        console.log("i'm also carrying an umbrella");
    }

    openUmbrella(): void {
        
        console.log("Opened umbrella")
    }

}