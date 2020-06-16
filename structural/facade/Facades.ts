import { VelocityFormula, KineticEnergyFormula } from "./Formulas"

export class FormulaFacade {

    getMovingObjectKineticEnergy(distance: number, time: number, mass: number): number {

        let velocity = VelocityFormula.getVelocity(distance, time)
        let energy = KineticEnergyFormula.getEnergy(mass, velocity)
        return energy
    }
}