import { Windows } from "./Windows"
import { Linux } from "./Linux"

export class LinuxAdapter implements Windows{

    private linux: Linux

    constructor(_linux: Linux){
        this.linux = _linux
    }

    runWindowsProgram(name: string): void {
        this.linux.runLinuxProgram(`Windows Program '${name}'`)
    }

}