import { Plane } from "./Planes";

export interface Mediator {

    notify(sender: object, event: string): void;
}

export class AirTrafficControlMediator implements Mediator {
    
    isRunwayFree: boolean = true; 

    notify(sender: Plane, event: string): void {

        switch(event) {
            
            case "takeoff":

                if(this.isRunwayFree) {

                    this.isRunwayFree = false;
                    sender.confirmTakeOff();
                    this.isRunwayFree = true;
                }
                else console.log(`${sender.name} could not take off, runway is occupied`);

                break;
                
            case "land":

                if(this.isRunwayFree) {

                    this.isRunwayFree = false;
                    sender.confirmLand();
                    this.isRunwayFree = true;
                }
                else console.log(`${sender.name} could not land, runway is occupied`);

                break;
        }
    }

}