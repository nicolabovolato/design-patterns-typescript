import { Expression, NumberExpression, AdditionExpression, SubtractionExpression } from "./Interpreters"

export class Parser {

    expressions: Expression[] = []

    parse(input: string): number {

        try {

            let symbols = input.split(" ")
            symbols.forEach((symbol: string) => {

                if(symbol.match(/[0-9]+$/)) this.expressions.push(new NumberExpression(symbol))
                else if(symbol.match(/[+-]+$/)) {

                    let expression1 = this.expressions.pop() || new NumberExpression("0")
                    let expression2 = this.expressions.pop() || new NumberExpression("0")

                    let result = 0

                    switch(symbol) {

                        case "+":
                            result = new AdditionExpression(expression1, expression2).interpret()
                            break

                        case "-":
                            result = new SubtractionExpression(expression1, expression2).interpret()
                            break
                    }

                    this.expressions.push(new NumberExpression(result.toString()))
                }
            })

            return this.expressions.pop()?.interpret() || 0
        }

        catch(err) {

            console.log(err)
            console.log("invalid input")
            return 0
        }
    }
}