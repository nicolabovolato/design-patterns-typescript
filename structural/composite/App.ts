import { ArmyRank, Division, Soldier } from "./Army"

export default class CompositeExample {

    army: ArmyRank

    constructor() {

        this.army = this.configure()
        this.run()
    }

    configure(): ArmyRank {

        let army = new Division("Army")

        army.add(new Soldier("General", "Patton"))
        
        army.add(new Division("Paratroopers"))
        army.add(new Soldier("Private", "Brown"))
        army.add(new Soldier("Sergeant", "Davis"))
        army.add(new Soldier("Private", "Miller"))

        army.add(new Division("Infantry"))
        army.add(new Soldier("Private", "Jones"))
        army.add(new Soldier("Sergeant", "Smith"))
        army.add(new Soldier("Private", "Williams"))

        return army
    }

    run(): void {
        this.army.executeOrder()
    }
}
