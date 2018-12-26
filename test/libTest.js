const { equal } = require("assert");
const { wc } = require("../src/lib.js");

const areMatched = function (firstArg, secondArg) {
    return firstArg == secondArg;
};

const mockedReader = function (expectedFiles, expectedEnocoding) {
    return function (actualFileName, actualEnocoding) {
        if (areMatched(expectedEnocoding, actualEnocoding)) {
            return expectedFiles[actualFileName];
        }
    };
};
const files = { "file1": "I like\nwatching\ncricket" };
const readFileSync = mockedReader(files, "utf8");

describe("wc", function () {
    it("should handle default arguments for a single file", function () {
        let expectedOutput = { "lineCount": 2, "wordCount": 4, "byteCount": 23 };
        equal(wc("file1", readFileSync), expectedOutput);
    });
});

module.exports = { wc };