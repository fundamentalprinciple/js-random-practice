/*
let myPromise = new Promise(
    function(resolve, reject) {
        resolve("value")
    }
)

myPromise.then(
    function(value) {
        console.log(value)
    },
    function(error) {
        console.log(error)
        console.log("actually from error")
    }
)
*/


async function myFunction() {
    let promise = new Promise()
}

myFunction().then(
    function(value) {
        console.log(value)
    }
).finally(
    function() {
        console.log("finally")
    }
)

