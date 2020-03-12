//from TK follow-along and video

//building a Promise 
let time = 0;
const timeMachine = () => {
    return new Promise((resolve, reject) => {
        //async fcn, often used to fake the time an api call takes
        setTimeout(() => {
            resolve((time += 1000));
        }, 1000);
    });
};

// timeMachine()
//     .then(newTime => {
//         console.log(newTime); 
//     });

//not terribly useful, but demonstraits Promise chaining
// timeMachine()
//     .then(newTime => {
//         const myTime = newTime / 1000;
//         return `${myTime} seconds have passed`;
//     })
//     .then(newString => {
//         console.log(newString); 
//     });

const parseTime = ms => {
    return new Promise((resolve, reject) => {
        const timeString = time / 1000;
        if (ms > 999) {
            resolve(`${timeString} seconds have passed`);
        } else {
            reject(new Error(`ms is less than 1 second promise rejected!`));
        }
    });
};

timeMachine()
    .then(parseTime)
    .then(timePassed => {
        console.log(timePassed); 
    })
    .catch(err => {
        console.log(err); 
    });
