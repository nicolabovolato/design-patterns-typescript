import { Parser } from "./Parser"

export default class InterpreterExample {

    parser: Parser

    constructor(){

        this.parser = new Parser();
        this.run()
    }

    run(): void {

        console.log(this.parser.parse("2 2 +"));
        console.log(this.parser.parse("2 2 -"));
        console.log(this.parser.parse("1 2 3 - +"));
    }
}