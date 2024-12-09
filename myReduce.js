Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIdx = initialValue !== undefined ? 0 : 1;

    for (let i = startIdx; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const values = [175, 50, 25];
console.log(
    values.myReduce((acc, curr) => acc - curr)
);
