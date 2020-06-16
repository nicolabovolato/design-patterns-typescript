export abstract class LoggerTemplate {

    loglevel: string

    constructor(_loglevel: string) {
        this.loglevel = _loglevel
    }

    abstract log(message: string): void
}

export class FileLogger extends LoggerTemplate {

    private path: string

    constructor(_path: string, _loglevel: string) {

        super(_loglevel)
        this.path = _path
    }

    log(message: string): void {
        console.log(`Message '${message}' written to ${this.path}`)
    }
}

export class EmailLogger extends LoggerTemplate {

    private email: string

    constructor(_email: string, _loglevel: string) {

        super(_loglevel)
        this.email = _email
    }

    log(message: string): void {
        console.log(`Message '${message}' sent to ${this.email}`)
    }
}