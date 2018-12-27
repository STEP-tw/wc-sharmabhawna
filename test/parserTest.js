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

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "option": "cw", "files": ["file1"] };
            deepEqual(parse(["-cw", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "option": "lcw", "files": ["file1"] };
            deepEqual(parse(["-lcw", "file1"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "option": "lc", "files": ["file1"] };
            deepEqual(parse(["-l", "-c", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "option": "clw", "files": ["file1"] };
            deepEqual(parse(["-c", "-l", "-w", "file1"]), expectedOutput);
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

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "option": "cw", "files": ["file1", "file2"] };
            deepEqual(parse(["-cw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "option": "lcw", "files": ["file1", "file2"] };
            deepEqual(parse(["-lcw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "option": "lc", "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "-c", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "option": "clw", "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "-l", "-w", "file1", "file2"]), expectedOutput);
        });
    });
});