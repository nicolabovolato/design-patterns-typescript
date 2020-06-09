export interface Monitor {

    resolution: number;
    size: number;

    info(): void;
}

export class StandardMonitor implements Monitor{

    resolution: number = 1440;
    size: number = 27;

    info(): void{
        console.log("Standard Monitor");
    }
}

export class SmallMonitor implements Monitor{

    resolution: number = 1080;
    size: number = 22;

    info(): void{
        console.log("Small Monitor");
    }
}