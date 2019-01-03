const { NEWLINE, SPACE } = require("./constants.js");

const splitBy = function (seperator, text) {
    return text.split(seperator);
};

const splitByNewLine = splitBy.bind("null", NEWLINE);

const splitBySpace = splitBy.bind("null", SPACE);

module.exports = { splitByNewLine, splitBySpace };