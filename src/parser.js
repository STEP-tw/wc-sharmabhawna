const { EMPTY_STRING, HYPHEN } = require("./util/constants.js");

const createFormat = function (options, files) {
    return { options, files };
};

const getFirstFileIndex = function (usrInputs) {
    let allFiles = usrInputs.filter(isFile);
    return usrInputs.indexOf(allFiles[0]);
};

const isNotHyphen = function (element) {
    return element != HYPHEN;
};

const removeHyphens = function (list) {
    return list.join(EMPTY_STRING).split(EMPTY_STRING).filter(isNotHyphen);
};

const isFile = function (input) {
    return !input.startsWith(HYPHEN);
};

const sortOptions = function (options) {
    return ["l", "w", "c"].filter((x) => options.includes(x));
};

const extractOptions = function (usrInputs) {
    let options = { "l": "line", "w": "word", "c": "byte" };
    let startingFileIndex = getFirstFileIndex(usrInputs);
    let userOptions = removeHyphens(usrInputs.slice(0, startingFileIndex));
    return sortOptions(userOptions).map((x) => options[x]);
};

const extractFiles = function (usrInputs) {
    let startingFileIndex = getFirstFileIndex(usrInputs);
    return usrInputs.slice(startingFileIndex);
};

const parse = function (usrInputs) {
    firstArg = usrInputs[0];
    let options = extractOptions(usrInputs);
    let files = extractFiles(usrInputs);
    if (isFile(firstArg)) {
        options = ["line", "word", "byte"];
    }
    return createFormat(options, files);
};

module.exports = { parse };