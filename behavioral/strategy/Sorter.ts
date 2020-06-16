import { SortingStrategy } from "./Strategies";

export class Sorter {

    private strategy?: SortingStrategy;

    setStrategy(_strategy: SortingStrategy){
        this.strategy = _strategy;
    }

    sort(data: number[]): number[]{
        return this.strategy?.sort(data) || [];
    }
}