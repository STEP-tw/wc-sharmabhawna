const { splitByNewLine, splitBySpace, splitByEmptyString, isPresent } = require("./util.js");
const { format } = require("./formatter.js");

const countLines = function (data) {
    return splitByNewLine(data).length - 1;
};

const countWords = function (data) {
    const wordCounter = function (count, line) {
        return count + splitBySpace(line).length;
    };
    return splitByNewLine(data).reduce(wordCounter, 0);
};

const countBytes = function (data) {
    return splitByEmptyString(data).length;
};

const getContent = function (fileName, reader) {
    return reader(fileName, "utf8");
};

const getFileCount = function (readFileSync, option, fileName) {
    let content = getContent(fileName, readFileSync);
    let counts = [];
    if (isPresent(option, "l")) {
        counts.push(countLines(content));
    }
    if (isPresent(option, "w")) {
        counts.push(countWords(content));
    }
    if (isPresent(option, "c")) {
        counts.push(countBytes(content));
    }
    return { fileName, counts };
};

const getFilesCounts = function (readFileSync, option, files) {
    let countsExtractor = getFileCount.bind("null", readFileSync, option);
    let countDetails = files.map(countsExtractor);
    return format(countDetails);
};

const wc = function (parsedInputs, readFileSync) {
    let { option, files } = parsedInputs;
    return getFilesCounts(readFileSync, option, files);
};

module.exports = { wc };