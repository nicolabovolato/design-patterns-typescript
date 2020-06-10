export interface Windows {

    runWindowsProgram(name: string): void;
}

export class Win10 implements Windows {

    runWindowsProgram(name: string): void {

        console.log(`Running ${name} on Windows 10`);
    }
}