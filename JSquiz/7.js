function removeVowels(str) {
    const vowels = ['a','e','i','o','u'];
    var strList = str.split('');

    for (i in strList) {
        //console.log(strList[i]);
        if ( vowels.includes(strList[i].toLowerCase()) ) {
            console.log(strList[i])
            strList.splice(i,1);
        }
            
    }

    word = ''
    for (i of strList) {
        word += i;
    }

    return word;
}

console.log(removeVowels('Prince'));
