function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please enter a valid number';
    }
    else {
        let subtraction = number - 7;

        if (subtraction < 7) {
            return subtraction;
        }
        else {
            return number * 2;
        }
    }

}

let LGSevenOut = isLGSeven(15);
console.log(LGSevenOut);