class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        let students = [];
        let topStudents = [];
        let score = this.scores;
        let value = 0;
        for (let i = 0; i < score.length; i++) {
            value =  score[i].correct * 4 - score[i].wrong;
            students.push({
                name: score[i].name,
                correct: score[i].correct,
                wrong: score[i].wrong,
                empty: score[i].empty,
                value: value
            });
        }
        students.sort((a, b) => {
            if (a.value > b.value) {
                return -1;
            } else if (a.value < b.value) {
                return 1;
            } else if (a.value === b.value) {
                if (a.correct > b.correct) {
                    return -1;
                } else if (a.correct < b.correct) {
                    return 1;
                } else if (a.correct === b.correct) {
                    if (a.name < b.name) {
                        return -1;
                    }
                }
            }
        });
        for (let i = 0; i < students.length; i++) {
            topStudents.push(students[i].name);
        }
        return topStudents;
    }
}

module.exports = {
    Score,
    Scores
}