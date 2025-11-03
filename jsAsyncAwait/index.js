async function sayHello() {
    return new Promise( (resolve, reject) => {
        setTimeout(function(){
            resolve("async hello")
        }, 2000)
    });
}

(async () => {
    console.log("before function call");

    const wish = await sayHello();
    console.log(wish);

    console.log('after');
})();
