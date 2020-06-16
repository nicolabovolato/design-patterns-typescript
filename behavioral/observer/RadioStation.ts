import { Subscriber } from "./Subscribers";

export class RadioStation {
    private listeners: Subscriber[] = [];

    subscribe(listener: Subscriber): void {
        this.listeners.push(listener);
    }

    unsubscribe(listener: Subscriber): void {
        this.listeners = this.listeners.filter(_listener => listener === _listener);
    }

    broadcast(message: string): void {
        this.listeners.forEach((listener: Subscriber) => listener.update(message));
    }
}