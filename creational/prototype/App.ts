import { Rectangle } from "./Prototypes"

export default class PrototypeExample {

    constructor(){

        this.run()
    }

    private run(){
        
        let rectangle1 = new Rectangle()

        rectangle1.heigth = 10
        rectangle1.width = 20

        let rectangle2 = rectangle1.clone()

        console.log(rectangle1)
        console.log(rectangle2)
    }
}