import { SandwichBuilder } from "./Builders"

export class Director {

    makeSandwich(builder: SandwichBuilder): void {

        builder.buildBread()
        builder.buildContent()
        builder.buildSpread()
        builder.buildBread()
    }

    makeLoadedSandwich(builder: SandwichBuilder): void {

        builder.buildBread()
        builder.buildContent()
        builder.buildSpread()
        builder.buildContent()
        builder.buildSpread()
        builder.buildBread()
    }

}