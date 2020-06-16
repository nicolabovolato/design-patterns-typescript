import { Editor } from "./Editor"  
import { History } from "./History"
import { Snapshot } from "./Mementos"  

export default class MementoExample {

    editor: Editor
    history: History

    constructor(){

        this.editor = new Editor()
        this.history = new History()
        this.run()
    }

    run(): void {

        this.editor.text = "Version 1.0"
        this.history.add(new Snapshot(this.editor))

        this.editor.text = "Version 1.1"
        this.history.add(new Snapshot(this.editor))

        this.editor.text = "Version 1.2"
        this.history.add(new Snapshot(this.editor))

        this.history.undo()
        console.log(this.editor.text)

        this.history.undo()
        console.log(this.editor.text)

        this.history.undo()
        console.log(this.editor.text)
    }
}