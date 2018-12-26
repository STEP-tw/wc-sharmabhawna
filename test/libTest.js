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
    it("should handle default arguments for single file", function () {
        let expectedOutput = "2 4 23 file1";
        equal(wc(["file1"], readFileSync), expectedOutput);
    });

    it("should count lines for single file when -l specified", function () {
        let expectedOutput = "2 file1";
        equal(wc(["-l", "file1"], readFileSync), expectedOutput);
    });

    it("should count words for single file when -w specified", function () {
        let expectedOutput = "4 file1";
        equal(wc(["-w", "file1"], readFileSync), expectedOutput);
    });
});

module.exports = { wc };