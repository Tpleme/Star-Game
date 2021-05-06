const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

const utils = {

    //sum and array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    //create an arrau of numbers between min and max
    range: (min, max) => Array.from({length: max - min +1}, (_, i) => min + i),

    //pick a random number betwwen min and max
    random: (min, max) => min + Math.floor(Math.random() * (max - min +1)),

    //Given an array of numbers and a max, pick a random sum from the set of all available sums in the array
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = utils.sum(candidateSet);
                
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }

        return sums[utils.random(0, sums.length -1)];
    }
};

export default utils;