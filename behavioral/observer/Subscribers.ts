export interface Subscriber {

    update(message: string): void
}

export class RadioListener implements Subscriber {

    update(message: string): void {
        console.log(`New Broadcast received: '${message}'`)
    }
}