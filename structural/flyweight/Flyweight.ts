export class CloudFactory {

    private static cloudTypes: CloudType[] = []

    static getCloudType(color: string) : CloudType {
        
        let found = this.cloudTypes.find((cloud: CloudType) => cloud.color === color)

        if(!found || found === null){

            found = new CloudType(color)
            this.cloudTypes.push(found)
        }
        
        return found
    }

    static getInstances(): number {
        return this.cloudTypes.length
    }
}

export class CloudType {
    
    color: string
    
    constructor(_color: string) {
        this.color = _color
    }
}

export class Cloud {

    x: number
    y: number
    type: CloudType

    constructor(_x: number, _y: number, _type: CloudType) {

        this.x = _x
        this.y = _y
        this.type = _type
    }

    rain(): void {
        console.log(`Rain falls from ${this.type.color} cloud`)
    }
}

export class Sky {

    clouds: Cloud[] = []

    addCloud(x: number, y: number, color: string): void {
        
        let type = CloudFactory.getCloudType(color)
        let cloud = new Cloud(x, y, type)

        this.clouds.push(cloud)
    }

    rain(): void {
        this.clouds.forEach((cloud: Cloud) => cloud.rain())
    }
}

