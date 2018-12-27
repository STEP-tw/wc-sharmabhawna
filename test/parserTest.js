const { deepEqual } = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function () {
    describe("for single file", function () {
        it("should parse default options", function () {
            let expectedOutput = { "options": ["line", "word", "byte"], "files": ["file1"] };
            deepEqual(parse(["file1"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "options": ["line"], "files": ["file1"] };
            deepEqual(parse(["-l", "file1"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "options": ["word"], "files": ["file1"] };
            deepEqual(parse(["-w", "file1"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "options": ["byte"], "files": ["file1"] };
            deepEqual(parse(["-c", "file1"]), expectedOutput);
        });

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "options": ["byte", "word"], "files": ["file1"] };
            deepEqual(parse(["-cw", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "options": ["line", "byte", "word"], "files": ["file1"] };
            deepEqual(parse(["-lcw", "file1"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "options": ["line", "byte"], "files": ["file1"] };
            deepEqual(parse(["-l", "-c", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "options": ["byte", "line", "word"], "files": ["file1"] };
            deepEqual(parse(["-c", "-l", "-w", "file1"]), expectedOutput);
        });
    });

    describe("for mutiple files", function () {
        it("should parse default options", function () {
            let expectedOutput = { "options": ["line", "word", "byte"], "files": ["file1", "file2"] };
            deepEqual(parse(["file1", "file2"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "options": ["line"], "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "file1", "file2"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "options": ["word"], "files": ["file1", "file2"] };
            deepEqual(parse(["-w", "file1", "file2"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "options": ["byte"], "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "options": ["byte", "word"], "files": ["file1", "file2"] };
            deepEqual(parse(["-cw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "options": ["line", "byte", "word"], "files": ["file1", "file2"] };
            deepEqual(parse(["-lcw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "options": ["line", "byte"], "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "-c", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "options": ["byte", "line", "word"], "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "-l", "-w", "file1", "file2"]), expectedOutput);
        });
    });
});