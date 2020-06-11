export interface Garden {

    mowLawn(): void;
}

export class SmallGarden implements Garden {

    mowLawn(): void {
        console.log("Takes little time");
    }
}

export class BigGarden implements Garden {

    mowLawn(): void {
        console.log("Takes some time");
    }
}