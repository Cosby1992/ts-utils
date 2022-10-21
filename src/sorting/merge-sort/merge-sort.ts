import { Comparator } from "types-and-interfaces/comparator/comparator.type";

function defaultComparator<T>(item: T, other: T) {
    if(item > other) return 1;
    if(item < other) return -1;
    return 0;
} 

/**
 * Sorts an array using the merge sort algorithm
 * @param array unsorted array eg. [2,3,1]
 * @returns sorted array eg. [1,2,3]
 */
export function mergeSort<T>(array: T[], comparator: Comparator<T> = defaultComparator): T[] {

    const arrayLength = array.length;

    if(arrayLength <= 1) {
        return array;
    }

    const middleIndex = Math.round(arrayLength / 2);

    const left = mergeSort([...array].slice(0, middleIndex), comparator);
    const right = mergeSort([...array].slice(middleIndex, arrayLength), comparator);

    return merge(left, right, comparator);

}

function merge<T>(left: T[], right: T[], comparator: Comparator<T>): T[] {

    const sorted: T[] = [];
    
    let pointerLeft = 0;
    let pointerRight = 0;

    while(pointerLeft < left.length && pointerRight < right.length) {
        if(comparator(left[pointerLeft], right[pointerRight]) < 0) {
            sorted.push(left[pointerLeft]);
            pointerLeft++
        } else {
            sorted.push(right[pointerRight]);
            pointerRight++;
        }
    }

    sorted.push(...left.slice(pointerLeft, left.length));
    sorted.push(...right.slice(pointerRight, right.length));

    return sorted;
}

