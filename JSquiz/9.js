function capital(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let phrase = 'hello i am under the water';
console.log(capital(phrase));




