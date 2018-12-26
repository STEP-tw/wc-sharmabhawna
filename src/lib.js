const wc = function (fileName, readFileSync) {
    let fileContent = readFileSync(fileName, "utf8");
    let lineCount = fileContent.split("\n").length - 1;
    const wordCounter = function (count, line) {
        return count + line.split(" ").length;
    };
    let wordCount = fileContent.split("\n").reduce(wordCounter, 0);
    let byteCount = fileContent.split("").length;
    return { lineCount, wordCount, byteCount };
};

module.exports = { wc };