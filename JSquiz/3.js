function Sum(numbers) {
    var sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    return sum;
}


let numbers = [1,2,3,4,5];

console.log(Sum(numbers));
