const { splitByNewLine, splitBySpace, isPresent } = require("./util/string.js");
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

const getFilesCounts = function (readFileSync, options, files) {
    let fileCount = getFileCount.bind("null", readFileSync, options);
    let filesCountsDetail = files.map(fileCount);
    return format(filesCountsDetail);
};

const wc = function (parsedInputs, readFileSync) {
    let { options, files } = parsedInputs;
    return getFilesCounts(readFileSync, options, files);
};

module.exports = { wc };