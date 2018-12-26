const { splitByNewLine, splitBySpace, splitByEmptyString, zip } = require("./util.js");

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

const getCounts = function (content) {
    let lines = countLines(content);
    let words = countWords(content);
    let bytes = countBytes(content);
    return { lines, words, bytes };
};

const wc = function (parsedInputs, readFileSync) {
    let { option, files } = parsedInputs;
    let fileName = files[0];
    let content = getContent(fileName, readFileSync);
    let { lines, words, bytes } = getCounts(content);
    if (option == "l") {
        return [lines, fileName].join(" ");
    }
    if (option == "w") {
        return [words, fileName].join(" ");
    }
    if (option == "c") {
        return [bytes, fileName].join(" ");
    }
    return [lines, words, bytes, fileName].join(" ");
};

module.exports = { wc };