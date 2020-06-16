import { LoggerTemplate, EmailLogger, FileLogger } from "./Templates"

export default class TemplateExample {

    logger1: LoggerTemplate
    logger2: LoggerTemplate

    constructor(){

        this.logger1 = new EmailLogger("john@doe.com","error")
        this.logger2 = new FileLogger("/logs/app.log","debug")
        this.run(false)
        this.run(true)
    }

    run(runningInContainer: boolean): void {

        console.log("---")
        if(runningInContainer){

            this.logger1.log("[FATAL] App crashed")
        }
        else{
            
            this.logger2.log("[INFO] App started")
            this.logger2.log("[FATAL] App crashed")
        }

    }
}