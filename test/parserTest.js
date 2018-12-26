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

        it("should parse -cl", function () {
            let expectedOutput = { "option": "cl", "files": ["file1"] };
            deepEqual(parse(["-cl", "file1"]), expectedOutput);
        });

        it("should parse -wl", function () {
            let expectedOutput = { "option": "wl", "files": ["file1"] };
            deepEqual(parse(["-wl", "file1"]), expectedOutput);
        });

        it("should parse -cw", function () {
            let expectedOutput = { "option": "cw", "files": ["file1"] };
            deepEqual(parse(["-cw", "file1"]), expectedOutput);
        });

        it("should parse -cwl", function () {
            let expectedOutput = { "option": "cwl", "files": ["file1"] };
            deepEqual(parse(["-cwl", "file1"]), expectedOutput);
        });

        it("should parse -cw", function () {
            let expectedOutput = { "option": "wcl", "files": ["file1"] };
            deepEqual(parse(["-wcl", "file1"]), expectedOutput);
        });

        it("should parse -cw", function () {
            let expectedOutput = { "option": "lcw", "files": ["file1"] };
            deepEqual(parse(["-lcw", "file1"]), expectedOutput);
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