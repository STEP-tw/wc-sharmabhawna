const { EMPTY_STRING, HYPHEN } = require("./util/constants.js");

const isNotDash = function (element) {
    return element != HYPHEN;
};

const removeDash = function (text) {
    return text.split(EMPTY_STRING).filter(isNotDash).join(EMPTY_STRING);
};

const isOption = function (input) {
    return input.startsWith(HYPHEN);
};

const isFile = function (input) {
    return !input.startsWith(HYPHEN);
};

const extractOptions = function (usrInputs) {
    return removeDash(usrInputs.filter(isOption).join(EMPTY_STRING));
};

const extractFiles = function (usrInputs) {
    return usrInputs.filter(isFile);
};

const parse = function (usrInputs) {
    firstArg = usrInputs[0];
    if (isFile(firstArg)) {
        return { "option": "lwc", "files": usrInputs.slice(0) };
    }
    return { "option": extractOptions(usrInputs), "files": extractFiles(usrInputs) };
};

module.exports = { parse };