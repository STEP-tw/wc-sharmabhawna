const { NEWLINE, SPACE } = require("./util/constants.js");

const singleFileFormater = function (fileCountsDetail) {
    let { fileName, counts } = fileCountsDetail;
    return counts = counts.concat(fileName).join(SPACE);
};

const format = function (filesCountsDetail) {
    if (filesCountsDetail.length == 1) {
        let fileCountsDetail = filesCountsDetail[0];
        return singleFileFormater(fileCountsDetail);
    }
    let requiredOutput = filesCountsDetail.map(singleFileFormater);
    let totalCounts = filesCountsDetail.reduce(totalGenerator).counts;
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