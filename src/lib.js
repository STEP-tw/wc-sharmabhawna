const { splitByNewLine, splitBySpace, splitByEmptyString, isPresent } = require("./util.js");

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

const wcForSingleFile = function (readFileSync, option, fileName) {
    let content = getContent(fileName, readFileSync);
    let result = [];
    if (isPresent(option, "l")) {
        result.push(countLines(content));
    }
    if (isPresent(option, "w")) {
        result.push(countWords(content));
    }
    if (isPresent(option, "c")) {
        result.push(countBytes(content));
    }
    result.push(fileName);
    return result;
};

const wc = function (parsedInputs, readFileSync) {
    let { option, files } = parsedInputs;
    let fileName = files[0];
    return wcForSingleFile(readFileSync, option, fileName).join(" ");
};

module.exports = { wc };