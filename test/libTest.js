const { deepEqual } = require("assert");
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
            let parsedInputs = { "options": ["line", "byte", "word"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4, 23] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines when option is l", function () {
            let parsedInputs = { "options": ["line"], "files": ["file1"] };
            let expectedOutput = [{ "fileName": "file1", "counts": [2] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words when option is w", function () {
            let parsedInputs = { "options": ["word"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [4] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count bytes when option is c", function () {
            let parsedInputs = { "options": ["byte"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [23] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words options are wl or lw", function () {
            let parsedInputs = { "options": ["word", "line"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and bytes when options are lc or cl", function () {
            let parsedInputs = { "options": ["byte", "line"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 23] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words and bytes when options are cw or wc", function () {
            let parsedInputs = { "options": ["byte", "word"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [4, 23] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when any combination three options is specified", function () {
            let parsedInputs = { "options": ["byte", "line", "word"], "files": ["file1"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4, 23] }];
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });
    });

    describe("for multiple files", function () {
        it("should count lines, words and bytes for default options", function () {
            let parsedInputs = { "options": ["line", "byte", "word"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4, 23] }]
            expectedOutput.push({ "fileName": "file2", "counts": [2, 9, 17] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines when option is l", function () {
            let parsedInputs = { "options": ["line"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2] }]
            expectedOutput.push({ "fileName": "file2", "counts": [2] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words when option is w", function () {
            let parsedInputs = { "options": ["word"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [4] }]
            expectedOutput.push({ "fileName": "file2", "counts": [9] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count bytes when option is c", function () {
            let parsedInputs = { "options": ["byte"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [23] }]
            expectedOutput.push({ "fileName": "file2", "counts": [17] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and words options are wl or lw", function () {
            let parsedInputs = { "options": ["word", "line"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4] }]
            expectedOutput.push({ "fileName": "file2", "counts": [2, 9] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines and bytes when options are lc or cl", function () {
            let parsedInputs = { "options": ["byte", "line"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 23] }]
            expectedOutput.push({ "fileName": "file2", "counts": [2, 17] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count words and bytes when options are cw or wc", function () {
            let parsedInputs = { "options": ["byte", "word"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [4, 23] }]
            expectedOutput.push({ "fileName": "file2", "counts": [9, 17] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });

        it("should count lines, words and bytes when any combination three options are specified", function () {
            let parsedInputs = { "options": ["byte", "line", "word"], "files": ["file1", "file2"] }
            let expectedOutput = [{ "fileName": "file1", "counts": [2, 4, 23] }]
            expectedOutput.push({ "fileName": "file2", "counts": [2, 9, 17] });
            deepEqual(wc(parsedInputs, readFileSync), expectedOutput);
        });
    });
});