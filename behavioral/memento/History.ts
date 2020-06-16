import { Memento } from "./Mementos"

export class History {

    private history: Memento[] = []

    add(state: Memento): void {

        console.log("Saving state")
        this.history.push(state)
    }

    undo(): void {

        if(this.history.length > 0) {
            
            console.log("Restoring previous state")
            let memento = this.history.pop()
            memento?.restore()
        }
        else console.log("Cannot undo")
    }
}