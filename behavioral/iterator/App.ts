import { UserCollection, User } from "./Users";
import { MailService } from "./MailService";

export default class IteratorEx {

    subscribedUsers: UserCollection;
    constructor(){

        this.subscribedUsers = this.configure();
        this.run();
    }

    configure(): UserCollection {

        let collection = new UserCollection();

        collection.add(new User("John Doe", "john@doe.com"));
        collection.add(new User("John Doe Jr.", "john1@doe.com"));
        collection.add(new User("John Doe Sr.", "john2@doe.com"));

        return collection;
    }

    run(): void {

        MailService.sendMail(this.subscribedUsers.getIterator(), "spam");
    }
}