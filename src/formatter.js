const singleFileFormater = function (countDetails) {
    let { fileName, counts } = countDetails;
    return counts = counts.concat(fileName).join(" ");
};

const format = function (countsDetails) {
    if (countsDetails.length == 1) {
        return singleFileFormater(countsDetails[0]);
    }
    let result = countsDetails.map(singleFileFormater);
    let total = countsDetails.reduce(totaller, [0, 0, 0, 0]).concat("total").join(" ");
    result = result.concat(total);
    return result.join("\n");
};

const totaller = function (total, { counts }) {
    let totalCounts = [];
    for (let index = 0; index < counts.length; index++) {
        totalCounts = totalCounts.concat(total[index] + counts[index])
    }
    return totalCounts;
};

module.exports = { format };