const { NEWLINE, SPACE } = require("./util/constants.js");

const singleFileFormater = function (countDetails) {
    let { fileName, counts } = countDetails;
    return counts = counts.concat(fileName).join(SPACE);
};

const format = function (countsDetails) {
    if (countsDetails.length == 1) {
        return singleFileFormater(countsDetails[0]);
    }
    let requiredOutput = countsDetails.map(singleFileFormater);
    let totalCounts = countsDetails.reduce(totalGenerator).counts;
    let total = totalCounts.concat("total").join(SPACE);
    return requiredOutput = requiredOutput.concat(total).join(NEWLINE);
};

const totalGenerator = function (accumulator, { counts }) {
    let total = [];
    for (let index = 0; index < counts.length; index++) {
        total = total.concat(accumulator.counts[index] + counts[index])
    }
    return total.counts = total;
};

module.exports = { format };