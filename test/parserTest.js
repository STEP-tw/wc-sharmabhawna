const { deepEqual } = require("assert");
const { parse } = require("../src/parser.js");

describe("parse", function () {
    describe("for single file", function () {
        it("should parse default options", function () {
            let expectedOutput = { "options": ["l", "w", "c"], "files": ["file1"] };
            deepEqual(parse(["file1"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "options": ["l"], "files": ["file1"] };
            deepEqual(parse(["-l", "file1"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "options": ["w"], "files": ["file1"] };
            deepEqual(parse(["-w", "file1"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "options": ["c"], "files": ["file1"] };
            deepEqual(parse(["-c", "file1"]), expectedOutput);
        });

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "options": ["c", "w"], "files": ["file1"] };
            deepEqual(parse(["-cw", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "options": ["l", "c", "w"], "files": ["file1"] };
            deepEqual(parse(["-lcw", "file1"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "options": ["l", "c"], "files": ["file1"] };
            deepEqual(parse(["-l", "-c", "file1"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "options": ["c", "l", "w"], "files": ["file1"] };
            deepEqual(parse(["-c", "-l", "-w", "file1"]), expectedOutput);
        });
    });

    describe("for mutiple files", function () {
        it("should parse default options", function () {
            let expectedOutput = { "options": ["l", "w", "c"], "files": ["file1", "file2"] };
            deepEqual(parse(["file1", "file2"]), expectedOutput)
        });
        it("should parse -l", function () {
            let expectedOutput = { "options": ["l"], "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "file1", "file2"]), expectedOutput);
        });

        it("should parse -w", function () {
            let expectedOutput = { "options": ["w"], "files": ["file1", "file2"] };
            deepEqual(parse(["-w", "file1", "file2"]), expectedOutput);
        });

        it("should parse -c", function () {
            let expectedOutput = { "options": ["c"], "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of two options specified together", function () {
            let expectedOutput = { "options": ["c", "w"], "files": ["file1", "file2"] };
            deepEqual(parse(["-cw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified together", function () {
            let expectedOutput = { "options": ["l", "c", "w"], "files": ["file1", "file2"] };
            deepEqual(parse(["-lcw", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of two options specified seperately", function () {
            let expectedOutput = { "options": ["l", "c"], "files": ["file1", "file2"] };
            deepEqual(parse(["-l", "-c", "file1", "file2"]), expectedOutput);
        });

        it("should parse any combination of three options specified seperately", function () {
            let expectedOutput = { "options": ["c", "l", "w"], "files": ["file1", "file2"] };
            deepEqual(parse(["-c", "-l", "-w", "file1", "file2"]), expectedOutput);
        });
    });
});