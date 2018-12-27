const { splitByNewLine, splitBySpace } = require("./util/string.js");

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
    return data.length;
};

const getContent = function (fileName, reader) {
    return reader(fileName, "utf8");
};

const extractCounts = function (content, options) {
    let requiredCounts = { "line": countLines, "word": countWords, "byte": countBytes };
    return options.map((option) => requiredCounts[option](content));
};

const getFileCount = function (readFileSync, options, fileName) {
    let content = getContent(fileName, readFileSync);
    let counts = extractCounts(content, options);
    return { fileName, counts }
};

const wc = function (parsedInputs, readFileSync) {
    let { options, files } = parsedInputs;
    let fileCountExtractor = getFileCount.bind("null", readFileSync, options);
    return files.map(fileCountExtractor);
};

module.exports = { wc };