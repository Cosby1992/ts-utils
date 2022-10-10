
class SuperArrayError extends Error {
    constructor(message?: string | undefined) {
        super(message);
    }

}

class IndexOutOfBoundsException extends SuperArrayError {
    constructor(message?: string | undefined) {
        super(message);
    }
}