const fs = require("fs");
function readFile(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if(!err) {
				resolve(data);
			} else {
				reject(err);
			}
		});
	});
}
async function go(cb) {
	var file1 = await readFile("abc.txt");
	var file2 = await readFile("xyz.txt");
	console.log(file1.toString());
	console.log(file2.toString());
	cb();
};

console.log("start");
go(()=>{
	console.log("end");
});
