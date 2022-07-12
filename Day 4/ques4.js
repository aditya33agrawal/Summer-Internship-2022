function diff(num) {
    const diff = Math.abs(num - 13);
    return num > 13 ? (2 * diff) : diff;
};

console.log(diff(75));
console.log(diff(4));
