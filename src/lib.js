const { splitByNewLine, splitBySpace } = require("./util/string.js");
const { format } = require("./formatter.js");

const countLines = function(data) {
	return splitByNewLine(data).length - 1;
};

const countWords = function(data) {
	const wordCounter = function(count, line) {
		return count + splitBySpace(line).filter(x => x != "").length;
	};
	return splitByNewLine(data).reduce(wordCounter, 0);
};

const countBytes = function(data) {
	return data.length;
};

const extractCounts = function(content, options) {
	let requiredCounts = { line: countLines, word: countWords, byte: countBytes };
	return options.map(option => requiredCounts[option](content));
};

const getFilesCount = function(options, files, reader, console) {
	let filesCounts = [];
	for (let index in files) {
		let fileName = files[index];
		reader(fileName, "utf8", (error, data) => {
			let counts = extractCounts(data, options);
			filesCounts[index] = { fileName, counts };
			if (files.length == filesCounts.filter(x => x).length) {
				return format(filesCounts, console);
			}
		});
	}
};

const wc = function(parsedInputs, reader, console) {
	let { options, files } = parsedInputs;
	return getFilesCount(options, files, reader, console);
};

module.exports = { wc };
