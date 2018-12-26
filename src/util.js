const NEWLINE = "\n";
const SPACE = " ";
const EMPTY_String = "";

const splitBy = function (seperator, data) {
    return data.split(seperator);
};
const splitByNewLine = splitBy.bind("null", NEWLINE);

const splitBySpace = splitBy.bind("null", SPACE);

const splitByEmptyString = splitBy.bind("null", EMPTY_String);

const isPresent = function (text, element) {
    return text.split("").includes(element);
};

module.exports = { splitByNewLine, splitBySpace, splitByEmptyString, splitByEmptyString, isPresent };