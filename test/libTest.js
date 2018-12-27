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
        it("should count lines, words and bytes for default options", function () {
            let parsedInputs = { "options": ["l", "c", "w"], "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines when option is l", function () {
            let parsedInputs = { "options": ["l"], "files": ["file1"] }
            let expectedOutput = "2 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words when option is w", function () {
            let parsedInputs = { "options": ["w"], "files": ["file1"] }
            let expectedOutput = "4 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count bytes when option is c", function () {
            let parsedInputs = { "options": ["c"], "files": ["file1"] }
            let expectedOutput = "23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words options are wl or lw", function () {
            let parsedInputs = { "options": ["w", "l"], "files": ["file1"] }
            let expectedOutput = "2 4 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and bytes when options are lc or cl", function () {
            let parsedInputs = { "options": ["c", "l"], "files": ["file1"] }
            let expectedOutput = "2 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words and bytes when options are cw or wc", function () {
            let parsedInputs = { "options": ["c", "w"], "files": ["file1"] }
            let expectedOutput = "4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when any combination three options is specified", function () {
            let parsedInputs = { "options": ["c", "l", "w"], "files": ["file1"] }
            let expectedOutput = "2 4 23 file1";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });
    });

    describe("for multiple files", function () {
        it("should count lines, words and bytes for default options", function () {
            let parsedInputs = { "options": ["l", "c", "w"], "files": ["file1", "file2"] }
            let expectedOutput = "2 4 23 file1\n2 9 17 file2\n4 13 40 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines when option is l", function () {
            let parsedInputs = { "options": ["l"], "files": ["file1", "file2"] }
            let expectedOutput = "2 file1\n2 file2\n4 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words when option is w", function () {
            let parsedInputs = { "options": ["w"], "files": ["file1", "file2"] }
            let expectedOutput = "4 file1\n9 file2\n13 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count bytes when option is c", function () {
            let parsedInputs = { "options": ["c"], "files": ["file1", "file2"] }
            let expectedOutput = "23 file1\n17 file2\n40 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words options are wl or lw", function () {
            let parsedInputs = { "options": ["w", "l"], "files": ["file1", "file2"] }
            let expectedOutput = "2 4 file1\n2 9 file2\n4 13 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and bytes when options are lc or cl", function () {
            let parsedInputs = { "options": ["c", "l"], "files": ["file1", "file2"] }
            let expectedOutput = "2 23 file1\n2 17 file2\n4 40 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words and bytes when options are cw or wc", function () {
            let parsedInputs = { "options": "cw", "files": ["file1", "file2"] }
            let expectedOutput = "4 23 file1\n9 17 file2\n13 40 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when any combination three options are specified", function () {
            let parsedInputs = { "options": ["c", "l", "w"], "files": ["file1", "file2"] }
            let expectedOutput = "2 4 23 file1\n2 9 17 file2\n4 13 40 total";
            equal(wc(parsedInputs, readFileSync), expectedOutput);
        });
    });
});