import { LinkedQueue } from './linked-queue';


describe('LinkedQueue', () => {

    test('New instance should be empty', () => {
        const queue = new LinkedQueue<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    test('One item in same item out', () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);
        expect(queue.dequeue()).toBe(1);
    })

    test('Two items in same items out', () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    })

    test('Supports objects', () => {
        
        const customObject = {
            name: "TEST",
            age: 100
        }
        
        const queue = new LinkedQueue<typeof customObject>();
        queue.enqueue(customObject);

        expect(queue.dequeue()).toBe(customObject);

    })

    test('Can contain many items', () => {
        const queue = new LinkedQueue<number>();

        for (let i = 1; i <= 10000; i++) {
            queue.enqueue(i);
        }

        expect(queue.dequeue()).toBe(1);
    })

    test('Is not empty when it contains an item', () => {
        const queue = new LinkedQueue<number>();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    })

    test.each([
        {items: [1]},
        {items: [1,2]},
        {items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
        {items: [9,8,7,6,5,4,3,2,1]}
    ])('(FIFO) when $items are enqueued they should be dequeued in the same order', ({items}) => {
        const queue = new LinkedQueue<number>();
        items.forEach(item => queue.enqueue(item));

        let dequeued: (number|null)[] = [];

        while(!queue.isEmpty()) {
            dequeued.push(queue.dequeue());
        }

        expect(dequeued).toEqual(items);
    })

    test('Dequeing empty queue returns null', () => {
        const queue = new LinkedQueue<number>();
        expect(queue.dequeue()).toBeNull();
    })


})