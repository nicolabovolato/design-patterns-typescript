import { Editor } from "./Editor";

export interface Memento {

    originator: object;

    restore(): void;
}

export class Snapshot implements Memento {

    originator: Editor;
    private text: string;

    constructor(_originator: Editor) {
        
        this.originator = _originator;
        this.text = _originator.text;
    }

    restore(): void {

        this.originator.text = this.text;
    }
}