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
const files = { "file1": "I like\nwatching\ncricket", "file2": "1 2 3\n4 5 6\n7 8 9" };
const readFileSync = mockedReader(files, "utf8");

describe("wc", function () {
    describe("for single file", function () {
        it("should handle default options", function () {
            let parsedInputs = { "option": "lcw", "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines when -l specified", function () {
            let parsedInputs = { "option": "l", "files": ["file1"] }
            let expectedOutput = "2 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words when -w specified", function () {
            let parsedInputs = { "option": "w", "files": ["file1"] }
            let expectedOutput = "4 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count bytes when -c specified", function () {
            let parsedInputs = { "option": "c", "files": ["file1"] }
            let expectedOutput = "23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words when -wl specified", function () {
            let parsedInputs = { "option": "wl", "files": ["file1"] }
            let expectedOutput = "2 4 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words when -cl specified", function () {
            let parsedInputs = { "option": "cl", "files": ["file1"] }
            let expectedOutput = "2 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words when -cw specified", function () {
            let parsedInputs = { "option": "cw", "files": ["file1"] }
            let expectedOutput = "4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when -cwl specified", function () {
            let parsedInputs = { "option": "cwl", "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when -lcw specified", function () {
            let parsedInputs = { "option": "lcw", "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when -wlc specified", function () {
            let parsedInputs = { "option": "wlc", "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

    });
});