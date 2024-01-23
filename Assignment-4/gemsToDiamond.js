function gemsToDiamond(gems1, gems2, gems3) {

    if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number') {
        return 'Please enter a valid number';
    }
    else {
        let diamonds1 = gems1 * 21;
        let diamonds2 = gems2 * 32;
        let diamonds3 = gems3 * 43;

        let totalDiamonds = diamonds1 + diamonds2 + diamonds3;
        if (totalDiamonds < 2000) {
            return totalDiamonds;
        }
        else {
            let remainsDiamonds = totalDiamonds - 2000;
            return remainsDiamonds;
        }
    }

}

let inputGems = gemsToDiamond(100, 5, 8);

console.log(inputGems);