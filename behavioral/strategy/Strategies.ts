export interface SortingStrategy {

    sort(data: number[]): number[]
}

export class SimpleSortStrategy implements SortingStrategy {

    sort(data: number[]) : number[] {
        return data.sort((a, b) => a - b)
    }
}

export class ReverseSortStrategy implements SortingStrategy {

    sort(data: number[]) : number[] {
        return data.sort((a, b) => b - a)
    }
}