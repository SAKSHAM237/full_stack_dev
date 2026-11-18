// Experiment 2: Perform CRUD operations on files using the fs module
// ---------------------------------------------------------------
// This script demonstrates creating, reading, updating (appending), and deleting a file.
// Run with `node exp2_file_crud.js`.

const fs = require('fs');
const path = require('path');

// Define a temporary file path in the same directory
const filePath = path.join(__dirname, 'sample.txt');

// CREATE: write initial content to the file
fs.writeFileSync(filePath, 'Hello, world!', 'utf8');
console.log('File created:', filePath);

// READ: read and output the file content
const content = fs.readFileSync(filePath, 'utf8');
console.log('File content:', content);

// UPDATE: append additional text to the file
fs.appendFileSync(filePath, '\nAppended line.');
console.log('File updated.');

// READ again to show updated content
const updated = fs.readFileSync(filePath, 'utf8');
console.log('Updated content:', updated);

// DELETE: remove the file
fs.unlinkSync(filePath);
console.log('File deleted.');
