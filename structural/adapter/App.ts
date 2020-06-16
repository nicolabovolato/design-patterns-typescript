import { Windows, Win10 } from "./Windows"
import { Linux, Ubuntu } from "./Linux"
import { LinuxAdapter } from "./Adapter"

export default class AdapterExample {

    windows: Windows
    linux: Linux

    constructor(){

        this.windows = new Win10()
        this.linux = new Ubuntu()

        this.run()
    }

    private run(){
        
        let adapter = new LinuxAdapter(this.linux)

        this.windows.runWindowsProgram('freecell')
        this.linux.runLinuxProgram('gparted')
        adapter.runWindowsProgram('freecell')

    }
}