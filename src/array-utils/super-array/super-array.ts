
class SuperArray<T> extends Array<T> {

    constructor(...items: T[]) {
        super(...items);
    }

    prepend(...items: T[]) {
        this.unshift(...items);
    }

    append(...items: T[]) {
        this.push(...items);
    }

    insertAt(index: number, item: T) {
        if(index > (this.length - 1) || index < 0) {
            throw new IndexOutOfBoundsException(`Index ${index} is out of bounds for length ${this.length}`);
        }

        this.splice(index, 0, item);
    }

    remove(item: T) {
        const index = this.indexOf(item);

        if(index === -1) {
            return undefined;
        }

        const deletedItem = this.splice(index, 1);
        return deletedItem;
    }

}

export default SuperArray;