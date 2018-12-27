const { EMPTY_STRING, HYPHEN } = require("./util/constants.js");

const isNotHyphen = function (element) {
    return element != HYPHEN;
};

const removeHyphen = function (text) {
    return text.split(EMPTY_STRING).filter(isNotHyphen);
};

const isOption = function (input) {
    return input.startsWith(HYPHEN);
};

const isFile = function (input) {
    return !input.startsWith(HYPHEN);
};

const sortOptions = function (options) {
    return ["l", "w", "c"].filter((x) => options.includes(x));
};

const extractOptions = function (usrInputs) {
    let options = { "l": "line", "w": "word", "c": "byte" };
    let userOptions = removeHyphen(usrInputs.filter(isOption).join(EMPTY_STRING));
    return sortOptions(userOptions).map((x) => options[x]);
};

const extractFiles = function (usrInputs) {
    return usrInputs.filter(isFile);
};

const parse = function (usrInputs) {
    firstArg = usrInputs[0];
    if (isFile(firstArg)) {
        return { "options": ["line", "word", "byte"], "files": usrInputs.slice(0) };
    }
    return { "options": extractOptions(usrInputs), "files": extractFiles(usrInputs) };
};

module.exports = { parse };