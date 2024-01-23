function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please enter a valid number';
    }
    else {
        let output = (number * 3 + 10) / 2 - 5;
        return output;
    }

}

let numberOut = mindGame(3);

console.log(numberOut);