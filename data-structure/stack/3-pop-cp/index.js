// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
    #data
    #size
    #top
    constructor() {
        // TODO: answer here
        this.#data=[]
        this.#size=10
        this.#top=-1
    }

    get data() {
        return this.#data
    }
    get size() {
        return this.#size
    }
    get top() {
        return this.#top
    }

    push(elemen) {
        // TODO: answer here
        if (this.#top === this.#size - 1) {
            throw new Error('stack overflow');
        } 
        this.#top++;
        this.#data[this.#top] = elemen;
    }

    pop() {
        // TODO: answer here
        if (this.#top === -1) {
            throw new Error('stack underflow');
        }
        let el = this.#data[this.top];
        this.#top--;
        this.#data.splice(this.top + 1);
        return el;
    }
}