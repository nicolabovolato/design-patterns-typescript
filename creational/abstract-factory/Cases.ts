export interface Case {

    width: number;
    length: number;
    height: number;

    volume(): number;
    info(): void;
}

export class StandardCase implements Case{

    width: number = 20;
    height: number = 60;
    length: number = 40;

    volume(): number {
        return this.width * this.length * this.height;
    }

    info(): void{
        console.log("Standard Case");
    }

}

export class SmallCase implements Case{

    width: number = 15;
    height: number = 40;
    length: number = 20;

    volume(): number {
        return this.width * this.length * this.height;
    }

    info(): void{
        console.log("Small Case");
    }    
};