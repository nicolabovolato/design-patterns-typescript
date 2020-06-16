import { Director } from "./Director"
import { BLTSandwichBuilder, ClubSandwichBuilder, PBJSandwichBuilder } from "./Builders"


export default class BuilderExample {

    director: Director

    constructor() {

        this.director = new Director()

        this.run()
    }

    private run() {

        let bltSandwichBuilder = new BLTSandwichBuilder()
        let clubSandwichBuilder = new ClubSandwichBuilder()
        let pbjSandwichBuilder = new PBJSandwichBuilder()

        this.director.makeSandwich(bltSandwichBuilder)
        this.director.makeSandwich(clubSandwichBuilder)
        this.director.makeLoadedSandwich(pbjSandwichBuilder)

        let bltSandwich = bltSandwichBuilder.getSandwich()
        let clubSandwich = clubSandwichBuilder.getSandwich()
        let pbjSandwich = pbjSandwichBuilder.getSandwich()

        console.log(bltSandwich)
        console.log(clubSandwich)
        console.log(pbjSandwich)
        
    }
}