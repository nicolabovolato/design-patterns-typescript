export interface Prototype {
    clone(): Prototype
}

export class Rectangle implements Prototype {

    width: number
    heigth: number

    constructor(rectangle?: Rectangle) {

        this.width = rectangle && rectangle.width || 0
        this.heigth = rectangle && rectangle.heigth || 0
    }

    clone(): Rectangle {
        return new Rectangle(this)
    }
}