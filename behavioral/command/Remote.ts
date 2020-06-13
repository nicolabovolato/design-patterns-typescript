import { Command } from "./Commands";

export class Remote {

    commands: Command[] = [];

    add(command: Command): void {
        this.commands.push(command);
    }

    pushButtons(): void {
        this.commands.forEach((command: Command) => command.execute());
        this.commands = [];
    }
}