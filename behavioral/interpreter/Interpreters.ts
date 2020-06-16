export interface Expression {

    interpret(): number;
}

export class NumberExpression implements Expression {

    private param: number;

    constructor(_param: string){
        this.param = parseInt(_param)
    }

    interpret(): number {
        return this.param
    }
}

export class AdditionExpression implements Expression {

    private param1: Expression;
    private param2: Expression;

    constructor(_param1: Expression, _param2: Expression){

        this.param1 = _param1;
        this.param2 = _param2;
    }

    interpret(): number {
        return this.param1.interpret() + this.param2.interpret();
    }
}

export class SubtractionExpression implements Expression {

    private param1: Expression;
    private param2: Expression;

    constructor(_param1: Expression, _param2: Expression){
        
        this.param1 = _param1;
        this.param2 = _param2;
    }

    interpret(): number {
        return this.param1.interpret() - this.param2.interpret();
    }
}
