const isNotDash = function (element) {
    return element != "-";
};

const removeDash = function (text) {
    return text.split("").filter(isNotDash).join("");
};

const isOption = function (input) {
    return input.startsWith("-");
};

const isFile = function (input) {
    return !input.startsWith("-");
};

const extractOptions = function (usrInputs) {
    return removeDash(usrInputs.filter(isOption).join(""));
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