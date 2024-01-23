function evenOdd(name) {
    let count = 0;
    if (typeof name !== 'string') {
        return 'Please enter only string';
    }
    else {
        for (let i = 0; i < name.length; i++) {
            count++;
        }

        if (count % 2 == 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }

}
let names = 'SHAFIN AHMED';
let nameOut = evenOdd(names);
console.log(nameOut);