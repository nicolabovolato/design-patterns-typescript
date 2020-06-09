import { Singleton } from "./Singletons";

export default class SingletonApp{

    constructor(){

        this.run();
    }

    private run(){
        
        let s1 = Singleton.getInstance()
        let s2 = Singleton.getInstance()

        s1.value = 10;

        console.log(s1)
        console.log(s2)
    }
}
