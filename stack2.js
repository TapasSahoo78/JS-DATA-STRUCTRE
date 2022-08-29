class Stack {
    constructor() {
        this.input = [];
    }

    push(element) {
        this.input.push(element);
        return this;
    }

    pop() {
        return this.input.pop();
    }
}

const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');

stack.pop(); // c
stack.pop(); // b
stack.pop(); // a
