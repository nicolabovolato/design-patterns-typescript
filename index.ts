import * as readline from 'readline'
import AbstractFactoryExample from './creational/abstract-factory/App'
import BuilderExample from './creational/builder/App'
import FactoryMethodExample from './creational/factory-method/App'
import PrototypeExample from './creational/prototype/App'
import SingletonExample from './creational/singleton/App'
import AdapterExample from './structural/adapter/App'
import BridgeExample from './structural/bridge/App'
import CompositeExample from './structural/composite/App'
import DecoratorExample from './structural/decorator/App'
import FacadeExample from './structural/facade/App'
import FlyweightExample from './structural/flyweight/App'
import ProxyExample from './structural/proxy/App'
import ChainExample from './behavioral/chain-of-responsibility/App'
import CommandExample from './behavioral/command/App'
import InterpreterExample from './behavioral/interpreter/App'
import IteratorExample from './behavioral/iterator/App'
import MediatorExample from './behavioral/mediator/App'
import MementoExample from './behavioral/memento/App'
import ObserverExample from './behavioral/observer/App'
import StateExample from './behavioral/state/App'
import StrategyExample from './behavioral/strategy/App'
import TemplateExample from './behavioral/template-method/App'
import VisitorExample from './behavioral/visitor/App'

showIntro()
showPatternFamilyMenu()

function showIntro() {

    console.log("0=--                    --=OO=--                    --=0")
    console.log("| Design patterns in typescript - 2020 Nicola Bovolato |")
    console.log("0=--                    --=OO=--                    --=0")
    console.log("")
}

function showPatternFamilyMenu() {

    console.log("Select Pattern Family:")
    console.log(" 1) Creational")
    console.log(" 2) Structural")
    console.log(" 3) Behavioral")
    console.log("")

    let rl = readline.createInterface(process.stdin, process.stdout)
    rl.setPrompt('Selection: ')
    rl.prompt()
    rl.on('line', function(input) {
        
        switch(input){
            case "1":
                rl.close()
                showCreationalPatternsMenu()
                break

            case "2":
                rl.close()
                showStructuralPatternsMenu()
                break

            case "3":
                rl.close()
                showBehavioralPatternsMenu()
                break

            default:
                rl.prompt()
        }
    })
}

function showCreationalPatternsMenu() {
    console.log("Select a creational pattern:")
    console.log(" 1) Abstract Factory")
    console.log(" 2) Builder")
    console.log(" 3) Factory Method")
    console.log(" 4) Prototype")
    console.log(" 5) Singleton")
    console.log(" 0) Go Back")
    console.log("")

    let rl = readline.createInterface(process.stdin, process.stdout)
    rl.setPrompt('Selection: ')
    rl.prompt()
    rl.on('line', function(input) {
        
        switch(input){

            case "0":
                rl.close()
                showPatternFamilyMenu()
                break

            case "1":
                console.log("O=--  Abstract Factory  --=O")
                new AbstractFactoryExample()
                break
                
            case "2":
                console.log("O=--  Builder  --=O")
                new BuilderExample()
                break

            case "3":
                console.log("O=--  Factory Method  --=O")
                new FactoryMethodExample()
                break

            case "4":
                console.log("O=--  Prototype  --=O")
                new PrototypeExample()
                break

            case "5":
                console.log("O=--  Singleton  --=O")
                new SingletonExample()
                break

            default:
                rl.prompt()
        }
    })
}

function showStructuralPatternsMenu() {
    console.log("Select a structural pattern:")
    console.log(" 1) Adapter")
    console.log(" 2) Bridge")
    console.log(" 3) Composite")
    console.log(" 4) Decorator")
    console.log(" 5) Facade")
    console.log(" 6) Flyweight")
    console.log(" 7) Proxy")
    console.log(" 0) Go Back")
    console.log("")

    let rl = readline.createInterface(process.stdin, process.stdout)
    rl.setPrompt('Selection: ')
    rl.prompt()
    rl.on('line', function(input) {
        
        switch(input){

            case "0":
                rl.close()
                showPatternFamilyMenu()
                break

            case "1":
                console.log("O=--  Adapter  --=O")
                new AdapterExample()
                break

            case "2":
                console.log("O=--  Bridge  --=O")
                new BridgeExample()
                break

            case "3":
                console.log("O=--  Composite  --=O")
                new CompositeExample()
                break

            case "4":
                console.log("O=--  Decorator  --=O")
                new DecoratorExample()
                break

            case "5":
                console.log("O=--  Facade  --=O")
                new FacadeExample()
                break

            case "6":
                console.log("O=--  Flyweight  --=O")
                new FlyweightExample()
                break

            case "7":
                console.log("O=--  Proxy  --=O")
                new ProxyExample()
                break

            default:
                rl.prompt()
        }
    })
}

function showBehavioralPatternsMenu() {
    console.log("Select a behavioral pattern:")
    console.log("  1) Chain of Responsibility")
    console.log("  2) Command")
    console.log("  3) Interpreter")
    console.log("  4) Iterator")
    console.log("  5) Mediator")
    console.log("  6) Memento")
    console.log("  7) Observer")
    console.log("  8) State")
    console.log("  9) Strategy")
    console.log(" 10) Template Method")
    console.log(" 11) Visitor")
    console.log("  0) Go Back")
    console.log("")

    let rl = readline.createInterface(process.stdin, process.stdout)
    rl.setPrompt('Selection: ')
    rl.prompt()
    rl.on('line', function(input) {
        
        switch(input){

            case "0":
                rl.close()
                showPatternFamilyMenu()
                break

            case "1":
                console.log("O=--  Chain of Responsibility --=O")
                new ChainExample()
                break

            case "2":
                console.log("O=--  Command  --=O")
                new CommandExample()
                break

            case "3":
                console.log("O=--  Interpreter  --=O")
                new InterpreterExample()
                break

            case "4":
                console.log("O=--  Iterator  --=O")
                new IteratorExample()
                break

            case "5":
                console.log("O=--  Mediator  --=O")
                new MediatorExample()
                break
                
            case "6":
                console.log("O=--  Memento  --=O")
                new MementoExample()
                break

            case "7":
                console.log("O=--  Observer  --=O")
                new ObserverExample()
                break

            case "8":
                console.log("O=--  State  --=O")
                new StateExample()
                break

            case "9":
                console.log("O=--  Strategy  --=O")
                new StrategyExample()
                break

            case "10":
                console.log("O=--  Template  --=O")
                new TemplateExample()
                break

            case "11":
                console.log("O=--  Visitor  --=O")
                new VisitorExample()
                break

            default:
                rl.prompt()
        }
    })
}
