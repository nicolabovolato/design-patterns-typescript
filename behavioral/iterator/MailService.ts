import { UserIterator } from "./Iterators";

export class MailService {

    static sendMail(iterator: UserIterator, text: string): void {

        while(iterator.hasMore()){

            let user = iterator.getNext();
            console.log(`Email sent to ${user.email} with text '${text}'`)
        }
    }
}