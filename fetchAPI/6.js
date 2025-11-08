async function myFunction() {
    let myPromise = new Promise(function(resolve,reject) {
        setTimeout(()=>{
        resolve('Hi')}, 3000);
    });

    let value = await myPromise;
    console.log(value);
};

myFunction();
