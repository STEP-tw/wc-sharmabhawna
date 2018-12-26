const wc = function (usrInputs, readFileSync) {
    let fileName = usrInputs[usrInputs.length - 1];
    let fileContent = readFileSync(fileName, "utf8");
    let lineCount = fileContent.split("\n").length - 1;
    const wordCounter = function (count, line) {
        return count + line.split(" ").length;
    };
    let wordCount = fileContent.split("\n").reduce(wordCounter, 0);
    let byteCount = fileContent.split("").length;
    if (usrInputs.length == 1) {
        return [lineCount, wordCount, byteCount, fileName].join(" ");
    }
    if (usrInputs[0] == "-l") {
        return [lineCount, fileName].join(" ");
    }
    if (usrInputs[0] == "-w") {
        return [wordCount, fileName].join(" ");
    }
    return [byteCount, fileName].join(" ");
};

module.exports = { wc };