const { NEWLINE, SPACE, EMPTY_STRING } = require("./constants.js");

const splitBy = function (seperator, text) {
    return text.split(seperator);
};
const splitByNewLine = splitBy.bind("null", NEWLINE);

const splitBySpace = splitBy.bind("null", SPACE);

const isPresent = function (text, element) {
    return text.split(EMPTY_STRING).includes(element);
};

module.exports = { splitByNewLine, splitBySpace, isPresent };