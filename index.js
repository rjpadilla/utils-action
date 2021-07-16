const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process')

// const pull = ({imageName}) => {
// 	console.log(`Pulling docker image (${imageName})`);
// 	child_process.execSync(
// 		`docker pull ${imageName}`
// 	);
// };

try {
	// `docker-image` input defined in action metadata file
	const dockerImage = core.getInput('docker-image');
	console.log(`The docker repo is ${dockerImage}.`);

	console.log(`Pulling docker image (${dockerImage})`);
	child_process.execSync(
		`docker pull ${dockerImage}`
	);
	child_process.execSync(
		`docker image inspect ${dockerImage}`
	);
} catch (error) {
	core.setFailed(error.message);
}