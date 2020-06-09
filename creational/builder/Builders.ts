export interface SandwichBuilder {

    reset(): void;
    
    buildBread(): void;
    buildContent(): void;
    buildSpread(): void;
}

export class BLTSandwichBuilder implements SandwichBuilder{
    
    private sandwich: string[]

    constructor(){
        this.sandwich = []
    }

    reset(): void {
        this.sandwich = []
    }

    buildBread(): void {
        this.sandwich.push("Brown Bread")
    }

    buildContent(): void {
        this.sandwich.push("Bacon")
        this.sandwich.push("Lettuce")
        this.sandwich.push("Tomato")
    }

    buildSpread(): void {
        this.sandwich.push("Mayonnaise")
    }

    getSandwich(){
        return this.sandwich
    }

}

export class PBJSandwichBuilder implements SandwichBuilder{
    
    private sandwich: string[]

    constructor(){
        this.sandwich = []
    }

    reset(): void {
        this.sandwich = []
    }

    buildBread(): void {
        this.sandwich.push("White Bread")
    }

    buildContent(): void {}

    buildSpread(): void {
        this.sandwich.push("Peanut Butter")
        this.sandwich.push("Jam")
    }

    getSandwich(){
        return this.sandwich
    }

}

export class ClubSandwichBuilder implements SandwichBuilder{
    
    private sandwich: string[]

    constructor(){
        this.sandwich = []
    }

    reset(): void {
        this.sandwich = []
    }

    buildBread(): void {
        this.sandwich.push("White Bread")
    }

    buildContent(): void {
        this.sandwich.push("Ham")
        this.sandwich.push("Bacon")
        this.sandwich.push("Egg")
        this.sandwich.push("Lettuce")
        this.sandwich.push("Tomato")
        this.sandwich.push("Cheese")
    }

    buildSpread(): void {}

    getSandwich(){
        return this.sandwich
    }

}
