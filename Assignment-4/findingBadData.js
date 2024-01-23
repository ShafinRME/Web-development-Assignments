function findingBadData(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return 'Please enter numbers only!!!';
        }
        else {
            if (numbers[i] < 0) {
                count++;
            }
            else {
                continue;
            }
        }

    }
    return count;
}

let inputNumbers = [-4, -9, 8, -33, -55];

let badDataOutput = findingBadData(inputNumbers);

console.log(badDataOutput);