import { RigFactory, SmallRigFactory, StandardRigFactory} from "./Factories";
import { Case } from "./Cases";
import { Monitor } from "./Monitors";

export default class AbstractFactory{

    factory: RigFactory;

    case: Case;
    monitor: Monitor;

    constructor(){

        this.factory = this.configure("small");
        this.case = this.factory.createCase();
        this.monitor = this.factory.createMonitor();

        this.run();

        this.factory = this.configure("standard");
        this.case = this.factory.createCase();
        this.monitor = this.factory.createMonitor();

        this.run();
    }

    private configure(size: string): RigFactory{
        
        switch(size){

            case "small":
                return new SmallRigFactory();

            case "standard":
            default:
                return new StandardRigFactory();
        }
    }

    private run(){
        this.case.info();
        this.monitor.info();
    }
}