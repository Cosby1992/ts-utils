import { Queue } from "queue/queue.interface";

class QueueNode<T> {
    constructor(public item: T, public next: QueueNode<T> | null = null) {}
}

export class LinkedQueue<T> implements Queue<T> {

    private head: QueueNode<T> | null = null;

    constructor() {}

    enqueue(item: T) {

        if(this.head === null) {
            this.head = new QueueNode(item);
            return;
        }

        let current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = new QueueNode(item);
        
        return;
    }

    dequeue(): T | null {
        if(this.head === null) {
            return null;
        }

        const head = this.head;
        this.head = this.head.next;
        return head.item;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

}