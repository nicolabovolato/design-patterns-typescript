export interface Person {

    getClothingInfo(): void;
}

export class BasicPerson implements Person{

    getClothingInfo(){
        console.log("I'm wearing basic clothes");
    }
}