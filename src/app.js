const yargs = require("yargs");
const Movie = require("./utils");

// console.log(yargs.argvs);
// yargs allows you to call this app like this:
// node app.js --add --title "Spiderman" --actor "Tom Holland"

// const app = (yargsObj) => {
//     if (yargsObj.add) {
//         const movie = new Movie();
//         movie.add(this.title);
//         console.log(movie.list());
//     // } else if (yargsObj.addMulti) {
//     //     let titles = 
//     //     for (let i = 0; i < movie.addMulti; i++) {

//     //         const element = array[i];
            
//     //     }


//     //     const movie = new Movie();
//     //     movie.add();
//     //     console.log(movie.list());
//     } else {
//         console.log("Incorrect command");
//     }
// };

    const app = (yargsObj) => {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            movie.add();
            console.log(movie.list());
            // add movie to array, consol log at end of runtime
        } else if (yargsObj.addMore) {
                const movie = new Movie(yargsObj.title, yargsObj.actor);
                const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
                movie.add();
                movie1.add();
                console.log(movie1.list());
            } else {
                console.log("Incorrect Command")
            }
    };

app(yargs.argv);