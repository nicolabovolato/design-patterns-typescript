import { Sorter } from "./Sorter";
import { SimpleSortStrategy, ReverseSortStrategy } from "./Strategies";

export default class StrategyEx {

    sorter: Sorter;

    constructor(){

        this.sorter = new Sorter();
        this.run();
    }

    run(): void {

        let data = [5, 2, 1, 10, 7, 3];

        this.sorter.setStrategy(new SimpleSortStrategy());
        console.log(this.sorter.sort(data));

        this.sorter.setStrategy(new ReverseSortStrategy());
        console.log(this.sorter.sort(data));
    }
}