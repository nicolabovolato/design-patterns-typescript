import { Mediator, AirTrafficControlMediator } from "./Mediators";
import { Boeing737, FokkerF100, AirbusA300 } from "./Planes";

export default class MediatorEx {

    atc: Mediator;

    constructor(){

        this.atc = new AirTrafficControlMediator();
        this.run();
    }

    run(): void {

        let plane1 = new Boeing737(this.atc);
        let plane2 = new FokkerF100(this.atc);
        let plane3 = new AirbusA300(this.atc);

        plane1.signalTakeOff();
        plane2.signalLand();
        plane3.signalLand();
    }
}
