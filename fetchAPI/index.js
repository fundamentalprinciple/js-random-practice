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

