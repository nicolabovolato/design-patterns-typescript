import { Monitor, StandardMonitor, SmallMonitor } from "./Monitors"
import { Case, StandardCase, SmallCase } from "./Cases"

export abstract class RigFactory {

    abstract createMonitor() : Monitor
    abstract createCase() : Case
}

export class StandardRigFactory extends RigFactory {

    createMonitor(): Monitor {
        return new StandardMonitor()
    }

    createCase(): Case {
        return new StandardCase()
    }
}

export class SmallRigFactory extends RigFactory {

    createMonitor(): Monitor {
        return new SmallMonitor()
    }

    createCase(): Case {
        return new SmallCase()
    }
}