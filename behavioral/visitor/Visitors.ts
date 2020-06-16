import { Shape, Circle, Rectangle } from "./Shapes";

export interface ShapeVisitor {
    
    visitCircle(shape: Circle): void;
    visitRectangle(shape: Rectangle): void;
}

export class ShapeAnalyzer implements ShapeVisitor {
    
    visitCircle(shape: Circle): void {
        let area = Math.PI * Math.pow(shape.radius, 2);
        let circumference = 2 * Math.PI * shape.radius;

        console.log(`Circle: r = ${shape.radius}, C = ${circumference}, A = ${area}`);
    }

    visitRectangle(shape: Rectangle): void {
        let area = shape.height * shape.length;
        let perimeter = shape.height * 2 + shape.length * 2;

        console.log(`Rectangle: b = ${shape.length}, h = ${shape.height}, 2P = ${perimeter}, A = ${area}`);
    }
}
