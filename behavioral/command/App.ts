import { Television } from "./Television"
import { Remote } from "./Remote"
import { VolumeUpCommand, VolumeDownCommand, ChannelUpCommand, ChannelDownCommand } from "./Commands"

export default class CommandExample {

    tv: Television
    remote: Remote

    constructor(){

        this.tv = new Television()
        this.remote = this.configure()
        this.run()
    }

    configure(): Remote {
        let command1 = new VolumeUpCommand(this.tv) 
        let command2 = new VolumeDownCommand(this.tv) 
        let command3 = new ChannelUpCommand(this.tv) 
        let command4 = new ChannelDownCommand(this.tv)

        let remote = new Remote()

        remote.add(command1)
        remote.add(command2)
        remote.add(command3)
        remote.add(command4)

        return remote
    }

    run(): void {

        this.remote.pushButtons()
    }
}
