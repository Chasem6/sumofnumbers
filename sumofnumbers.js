

const test = [1, 2, 3, 4];

function sumFor(nums) {
    for (const num of nums) {
      total += num;
    }
    return total;
}

console.log(sumFor(test));