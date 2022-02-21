const yargs = require("yargs");
const Movie = require("./utils");

// console.log(yargs.argvs);
// yargs allows you to call this app like this:
// node app.js --add --title "Spiderman" --actor "Tom Holland"

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie();
        movie.add();
        console.log(movie.list());
    } else {
        console.log("Incorrect command");
    }
};

app(yargs.argv);