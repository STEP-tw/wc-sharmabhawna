const { NEWLINE, SPACE } = require("./util/constants.js");

const singleFileFormater = function (fileCounts) {
    let { fileName, counts } = fileCounts;
    return counts = counts.concat(fileName).join(SPACE);
};

const appendTotal = function (requiredOutput, filesCounts) {
    let totalCounts = filesCounts.reduce(totalGenerator).counts;
    let total = totalCounts.concat("total").join(SPACE);
    return requiredOutput = requiredOutput.concat(total).join(NEWLINE);
};

const format = function (filesCounts) {
    if (filesCounts.length == 1) {
        let fileCounts = filesCounts[0];
        return singleFileFormater(fileCounts);
    }
    let requiredOutput = filesCounts.map(singleFileFormater);
    return appendTotal(requiredOutput, filesCounts);
};

const totalGenerator = function (accumulator, { counts }) {
    let total = [];
    for (let index = 0; index < counts.length; index++) {
        total = total.concat(accumulator.counts[index] + counts[index])
    }
    return total.counts = total;
};

module.exports = { format };