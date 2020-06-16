import { Person, BasicPerson } from "./Person"
import { JacketDecorator, UmbrellaDecorator } from "./Decorators"

export default class DecoratorExample {

    person: Person

    constructor(){

        this.person = this.configure(false, false)
        this.run()

        this.person = this.configure(true, false)
        this.run()

        this.person = this.configure(false, true)
        this.run()

        this.person = this.configure(true, true)
        this.run()
    }

    configure(cold: boolean, raining: boolean): Person {
        
        let person = new BasicPerson()

        if(cold) person = new JacketDecorator(person)
        if(raining) person = new UmbrellaDecorator(person)

        return person
    }

    run(): void {

        this.person.getClothingInfo()
        console.log("---")
    }
}