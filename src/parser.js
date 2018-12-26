const hasNoOption = function (firstArg) {
    return !firstArg.startsWith("-");
};

const parse = function (usrInputs) {
    firstArg = usrInputs[0];
    if (hasNoOption(firstArg)) {
        return { "option": "lwc", "files": usrInputs.slice(0) };
    }
    return { "option": firstArg.slice(1), "files": usrInputs.slice(1) };
};

module.exports = { parse };