// F - TASK

function findDoubler(str) {
    let result = str.toLowerCase().split('').sort();

    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(findDoubler("Hello"));
console.log(findDoubler("dEvex"));
console.log(findDoubler("magnus"));
