const movieArr = [];

class Movie {
    constructor (title, actor ="No clue who is in this.") {
        this.title = title;
        this.actor = actor;
    }

    add() {
        movieArr.push(this);
    }

    list() {
        return movieArr;
    }
}

module.exports = Movie;