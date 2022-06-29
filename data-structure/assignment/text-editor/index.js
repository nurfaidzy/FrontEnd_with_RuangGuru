module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.undoStack = []
        this.redoStack = []
    }

    write(c) {
        // TODO: answer here
        let write = this.undoStack.push(c)
        return write
    }

    read() {
        // TODO: answer here
        let read = this.undoStack.join("")
        return read
    }

    undo() {
        // TODO: answer here
        let undo = this.undoStack.pop()
        if (undo === undefined) {
            return
        }
        else {
            this.redoStack.push(undo)
        }
    }
    
    redo() {
        // TODO: answer here
        let redo = this.redoStack.pop()
        if (redo === undefined) {
            return
        }
        else {
            this.undoStack.push(redo)
        }
    }
}
