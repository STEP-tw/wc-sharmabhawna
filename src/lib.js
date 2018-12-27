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

const extractCounts = function (content, options, counts, option) {
    let requiredCounts = { "l": countLines, "w": countWords, "c": countBytes };
    if (options.includes(option)) {
        counts = counts.concat(requiredCounts[option](content));
    }
    return counts;
};

const getFileCount = function (readFileSync, options, fileName) {
    let content = getContent(fileName, readFileSync);
    let countsExtractor = extractCounts.bind("null", content, options);
    let counts = ["l", "w", "c"].reduce(countsExtractor, []);
    return { fileName, counts }
};

const wc = function (parsedInputs, readFileSync) {
    let { options, files } = parsedInputs;
    let fileCountExtractor = getFileCount.bind("null", readFileSync, options);
    return files.map(fileCountExtractor);
};

module.exports = { wc };