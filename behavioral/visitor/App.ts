import { ShapeAnalyzer } from "./Visitors"
import { Rectangle, Circle } from "./Shapes"

export default class VisitorExample {

    analyzer: ShapeAnalyzer

    constructor(){

        this.analyzer = new ShapeAnalyzer()

        this.run()
    }

    run(): void {

        let rectangle = new Rectangle(5, 10)
        let circle = new Circle(8)

        rectangle.accept(this.analyzer)
        circle.accept(this.analyzer)
    }
}
