export interface ArmyRank {

    executeOrder(): void;
}

export class Soldier implements ArmyRank {

    rank: string;
    name: string;

    constructor(_rank: string, _name: string){

        this.rank = _rank;
        this.name = _name;
    }

    executeOrder(): void {
        
        console.log(`${this.rank} ${this.name} executed order`);
    }
}

export class Division implements ArmyRank {

    name: string;
    private children: ArmyRank[] = [];

    constructor(_name: string){
        this.name = _name;
    }

    add(child: ArmyRank): void {
        this.children.push(child);
    }

    remove(child: ArmyRank): void {
        this.children = this.children.filter(_child => child === _child);
    }

    executeOrder(): void {
        this.children.forEach( (child: ArmyRank) => child.executeOrder());
    }
}