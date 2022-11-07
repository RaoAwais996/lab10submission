function multiplesum(x,y,z) {
    var sum = 0;
    for (let index = 1; index < z; index++) {
        if (index % x == 0 || index % y == 0) {
            sum += index;
        }
    }
    return sum
}

module.exports = multiplesum;