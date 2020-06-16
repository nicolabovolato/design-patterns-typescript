import { Iterator, UserIterator } from "./Iterators"

export class User {
    
    name: string
    email: string

    constructor(_name: string, _email: string){
        
        this.email = _email
        this.name = _name
    }
}

export class UserCollection {

    users: User[] = []

    getUsers(): User[] {
        return this.users
    }

    count(): number {
        return this.users.length
    }

    add(user: User): void {
        this.users.push(user)
    }

    remove(user: User): void {
        this.users = this.users.filter(_user => user.email === _user.email)
    }

    getIterator(): UserIterator {
        return new UserIterator(this)
    }
}

