// Quick Answer #1
new Set([1,1,2,2,3,4]) // Output: Set { 1, 2, 3, 4 }

// Quick Answer #2
[...new Set("referee")].join("") // Output: "ref"

// Quick Answer #3
m = Map { [1,2,3] => true, [1,2,3] => false }

// Code for hasDuplicate:
const hasDuplicate = arr => new Set(arr).size !== arr.length;


// Code for vowelCount:
const vowelCount = str => {
    const vowelMap = new Map();
    const vowels = 'aeiou';

    [...str.toLowerCase()].forEach(char => {
        if (vowels.includes(char)) {
            vowelMap.set(char, vowelMap.get(char) + 1 || 1);
        }
    });

    return vowelMap;
}

