import { Sky, CloudFactory } from "./Flyweight"

export default class FlyweightExample {

    sky: Sky

    constructor(){

        this.sky = new Sky()
        this.configure()
        this.run()
    }

    configure(): void {

        this.sky.addCloud(0, 0, "white")
        this.sky.addCloud(1, 1, "white")
        this.sky.addCloud(1, 0, "grey")
        this.sky.addCloud(0, 1, "grey")
    }

    run(): void {

        this.sky.rain()

        console.log(`Cloud type instances: ${CloudFactory.getInstances()}`)
    }
}
