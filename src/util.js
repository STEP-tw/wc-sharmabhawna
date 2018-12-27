const NEWLINE = "\n";
const SPACE = " ";

const splitBy = function (seperator, text) {
    return text.split(seperator);
};
const splitByNewLine = splitBy.bind("null", NEWLINE);

const splitBySpace = splitBy.bind("null", SPACE);

const isPresent = function (text, element) {
    return text.split("").includes(element);
};

module.exports = { splitByNewLine, splitBySpace, isPresent, NEWLINE, SPACE };