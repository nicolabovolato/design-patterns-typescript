export class Singleton {

    private static instance: Singleton = new Singleton();
    value: number = 0;

    private constructor() {}

    static getInstance(): Singleton {
        return this.instance;
    }

}