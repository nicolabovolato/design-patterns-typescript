import { RadioStation } from "./RadioStation"
import { RadioListener } from "./Subscribers"

export default class ObserverExample {

    station: RadioStation

    constructor(){

        this.station = new RadioStation()
        this.run()
    }

    run(): void {

        this.station.subscribe(new RadioListener())
        this.station.subscribe(new RadioListener())
        this.station.subscribe(new RadioListener())

        this.station.broadcast("Music")

        this.station.subscribe(new RadioListener())

        this.station.broadcast("News")
    }
}
