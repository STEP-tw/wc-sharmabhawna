const { NEWLINE, SPACE } = require("./util/constants.js");

const singleFileFormater = function (countDetails) {
    let { fileName, counts } = countDetails;
    return counts = counts.concat(fileName).join(SPACE);
};

const format = function (countsDetails) {
    if (countsDetails.length == 1) {
        return singleFileFormater(countsDetails[0]);
    }
    let result = countsDetails.map(singleFileFormater);
    let totalCounts = countsDetails.reduce(totalGenerator, [0, 0, 0]).concat("total").join(SPACE);
    return result = result.concat(totalCounts).join(NEWLINE);
};

const totalGenerator = function (accumulator, { counts }) {
    let total = [];
    for (let index = 0; index < counts.length; index++) {
        total = total.concat(accumulator[index] + counts[index])
    }
    return total;
};

module.exports = { format };