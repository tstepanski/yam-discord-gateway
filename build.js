import {exec} from "child_process";
import fileSystem from "fs/promises";

const execAsync = (command) =>
	new Promise((resolve, reject) =>
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`Error: ${stdout}`);

				reject(error);
			} else {
				resolve({stdout, stderr});
			}
		}));

await execAsync("tsc");

const fieldsToRemove = ["devDependencies", "private", "scripts", "release"];
let packageJson = await fileSystem.readFile("package.json", {encoding: "utf-8"});
const packageStructure = JSON.parse(packageJson);

for (const fieldToRemove of fieldsToRemove) {
	delete packageStructure[fieldToRemove];
}

packageJson = JSON.stringify(packageStructure, null, 2);

await fileSystem.writeFile("./dist/package.json", packageJson);
