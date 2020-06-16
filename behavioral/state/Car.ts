import { CarState, EngineOffState } from "./States"

export class Car {
    
    private state: CarState = new EngineOffState(this)
    handbrake: boolean = true

    setState(_state: CarState): void {
        this.state = _state
    }

    turnKeys(): void {
        this.state.turnKeys()
    }

    toggleHandbrake(): void {
        this.state.toggleHandbrake()
    }

    accelerate(): void {
        this.state.accelerate()
    }

    brake(): void {
        this.state.brake()
    }
}