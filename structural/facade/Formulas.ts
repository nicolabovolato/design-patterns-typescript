export class VelocityFormula {

    static getVelocity(distance: number, time: number): number {
        return distance / time
    }

    static getDistance(velocity: number, time: number): number {
        return velocity * time
    }

    static getTime(distance: number, velocity: number): number {
        return distance / velocity
    }
}

export class KineticEnergyFormula {

    static getEnergy(mass: number, velocity: number): number {
        return 0.5 * mass * Math.pow(velocity, 2)
    }

    static getMass(energy: number, velocity: number): number {
        return (2 * energy) / Math.pow(velocity, 2)
    }

    static getVelocity(energy: number, mass: number): number {
        return Math.sqrt((2 * energy) / mass)
    }
}