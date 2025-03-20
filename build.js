import {exec} from "child_process";
import fileSystem from "fs/promises";

const execAsync = (command) =>
	new Promise((resolve, reject) =>
		exec(command, (error, stdout, stderr) => {
			if (error) {
				reject(error);
			} else {
				resolve({stdout, stderr});
			}
		}));

await execAsync("tsc");
await fileSystem.copyFile("package.json", "./dist/package.json");
