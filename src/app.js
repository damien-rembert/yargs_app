const yargs = require("yargs");
const Movie = require("./utils");

    const app = (yargsObj) => {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            movie.add();
            // console.log(movie.list());
            // add movie to array, consol log at end of runtime
        } else if (yargsObj.addMore) {
            let movieArr = [];
            if (typeof yargsObj.title !== "string") {
                // actor  for every title
                if (yargsObj.actor && yargsObj.title.length == yargsObj.actor.length) {
                    for (let i = 0; i < yargsObj.title.length; i++) {
                        const movie = new Movie(yargsObj.title[i], yargsObj.actor[i]);
                        // movie.add();
                        movieArr.push(movie);
                    }
                // just title    
                } else {
                    for (let i = 0; i < yargsObj.title.length; i++) {
                        const movie = new Movie(yargsObj.title[i]);
                        // movie.add();
                        movieArr.push(movie);
                    }
                }
        } else {
            if (yargsObj.actor) {
                const movie = new Movie(yargsObj.title, yargsObj.actor);
                movieArr.push(movie);
            } else {
                const movie = new Movie(yargsObj.title);
                movieArr.push(movie);
            }
    

        }
        console.log(movieArr);

                // const movie = new Movie(yargsObj.title, yargsObj.actor);
                // const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
                // movie.add();
                // movie1.add();
                // console.log(movie1.list());
        } else {
            console.log("Incorrect Command")
        }
    };

// console.log(yargs.argv);
app(yargs.argv);