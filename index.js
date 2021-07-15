const core = require('@actions/core');
const github = require('@actions/github');

try {
	// `docker-image` input defined in action metadata file
	const dockerImage = core.getInput('docker-image');
	console.log(`The docker repo is ${dockerImage}.`);
} catch (error) {
	core.setFailed(error.message);
}