import { Television } from "./Television";

export interface Command {

    execute(): void;
}

export class VolumeUpCommand implements Command {

    tv: Television;

    constructor(_tv: Television){

        this.tv = _tv;
    }

    execute(): void {

        console.log("Turning volume up");
        this.tv.operation("volup");
        console.log(`Volume is now ${this.tv.getVolume()}`)
    }
}

export class VolumeDownCommand implements Command {

    tv: Television;

    constructor(_tv: Television){

        this.tv = _tv;
    }

    execute(): void {
        
        console.log("Turning volume down");
        this.tv.operation("voldown");
        console.log(`Volume is now ${this.tv.getVolume()}`)
    }
}

export class ChannelUpCommand implements Command {

    tv: Television;

    constructor(_tv: Television){

        this.tv = _tv;
    }

    execute(): void {

        console.log("Turning channel up");
        this.tv.operation("chup");
        console.log(`Channel is now ${this.tv.getChannel()}`)
    }
}

export class ChannelDownCommand implements Command {

    tv: Television;

    constructor(_tv: Television){

        this.tv = _tv;
    }

    execute(): void {
        
        console.log("Turning channel down");
        this.tv.operation("chdown");
        console.log(`Channel is now ${this.tv.getChannel()}`)
    }
}