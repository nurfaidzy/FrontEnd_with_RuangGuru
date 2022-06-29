// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

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
        if(this.#top<9){
            this.#data[++this.#top]=elemen
        }else{
            throw new Error('stack overflow')
        }
    }
}
