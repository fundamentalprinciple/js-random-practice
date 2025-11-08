const myPromise = new Promise(
        function myFunction(resolve, reject) {
            setTimeout(
                () => {resolve("resolved")}, 3000
            )
        }
);

myPromise.then(
    function(value) {console.log(value)}
);

console.log('life goes on')
