const NEWLINE = "\n";
const SPACE = " ";

const splitBy = function (seperator, data) {
    return data.split(seperator);
};
const splitByNewLine = splitBy.bind("null", NEWLINE);

const splitBySpace = splitBy.bind("null", SPACE);

const isPresent = function (text, element) {
    return text.split("").includes(element);
};

module.exports = { splitByNewLine, splitBySpace, isPresent, NEWLINE, SPACE };