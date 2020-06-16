import { ShapeVisitor } from "./Visitors"

export interface Shape {

    accept(visitor: ShapeVisitor): void
}

export class Circle implements Shape {
    
    radius: number

    constructor(_radius: number) {
        this.radius= _radius
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this)
    }
}

export class Rectangle implements Shape {
    
    height: number
    length: number

    constructor(_height: number, _length: number) {

        this.height= _height
        this.length= _length
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this)
    }
}