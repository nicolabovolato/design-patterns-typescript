export interface Linux {

    runLinuxProgram(name: string): void;
}

export class Ubuntu implements Linux{

    runLinuxProgram(name: String): void {
        console.log(`Running ${name} on Ubuntu`);
    }
}