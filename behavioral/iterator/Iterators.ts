import { User, UserCollection } from "./Users";

export interface Iterator<T> {

    getNext(): T;
    hasMore(): boolean;
}

export class UserIterator implements Iterator<User> {
    
    private collection: UserCollection;
    private position: number = -1;

    constructor(_collection: UserCollection){
        this.collection = _collection;
    }

    getNext(): User {

        this.position++;
        let users = this.collection.getUsers();
        return users[this.position];
    }

    hasMore(): boolean {
        return this.collection.count() > this.position + 1;
    }
}