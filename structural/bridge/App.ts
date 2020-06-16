import { SmallGarden, BigGarden } from "./Gardens"
import { House, BigHouse } from "./Houses"


export default class BridgeExample {

    constructor(){
        this.run()
    }

    run(): void {

        let smallGarden = new SmallGarden()
        let bigGarden = new BigGarden()

        let houseWithBigGarden = new House(bigGarden)
        let bigHouseWithSmallGarden = new BigHouse(smallGarden)

        houseWithBigGarden.mowLawn()
        bigHouseWithSmallGarden.mowLawn()

    }
}