const { deepEqual } = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function () {
    describe("for single file", function () {
        it("should parse default options", function () {
            let expectedOutput = { "option": "lwc", "files": ["file1"] };
            deepEqual(parse(["file1"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "option": "l", "files": ["file1"] };
            deepEqual(parse(["-l", "file1"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "option": "w", "files": ["file1"] };
            deepEqual(parse(["-w", "file1"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "option": "c", "files": ["file1"] };
            deepEqual(parse(["-c", "file1"]), expectedOutput);
        });
    });

    describe("for mutiple files", function () {
        it("should parse default options", function () {
            let expectedOutput = { "option": "lwc", "files": ["file1", "file2"] };
            deepEqual(parse(["file1", "file2"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "option": "l", "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "file1", "file2"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "option": "w", "files": ["file1", "file2"] };
            deepEqual(parse(["-w", "file1", "file2"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "option": "c", "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "file1", "file2"]), expectedOutput);
        });
    });
});