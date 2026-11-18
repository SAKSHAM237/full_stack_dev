const fs = require('fs').promises;

async function createFile(filePath, content) {
	await fs.writeFile(filePath, content, 'utf8');
	console.log(`Created: ${filePath}`);
}

async function readFile(filePath) {
	const content = await fs.readFile(filePath, 'utf8');
	console.log(`Contents of ${filePath}:\n${content}`);
	return content;
}

async function updateFile(filePath, content) {
	await fs.appendFile(filePath, content, 'utf8');
	console.log(`Updated: ${filePath}`);
}

async function deleteFile(filePath) {
	await fs.unlink(filePath);
	console.log(`Deleted: ${filePath}`);
}

async function demonstrateCRUD() {
	const filePath = './sample.txt';

	try {
		await createFile(filePath, 'This is the original content.\n');
		await readFile(filePath);
		await updateFile(filePath, 'This line was added during the update.\n');
		await readFile(filePath);
		await deleteFile(filePath);
	} catch (error) {
		console.error(`CRUD operation failed: ${error.message}`);
	}
}

if (require.main === module) {
	demonstrateCRUD();
}

module.exports = { createFile, readFile, updateFile, deleteFile };
