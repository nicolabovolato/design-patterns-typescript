export class Television {

    private volume: number = 20
    private channel: number = 1

    operation(opcode: string): void{

        switch(opcode){

            case "volup":

                if(this.volume < 100) this.volume += 10
                break

            case "voldown":

                if(this.volume > 0) this.volume -= 10
                break

            case "chup":

                if(this.channel < 999) this.channel++
                break

            case "chdown":

                if(this.channel > 1) this.channel--
                break
        }
    }

    getVolume(): number {
        return this.volume
    }

    getChannel(): number {
        return this.channel
    }
}