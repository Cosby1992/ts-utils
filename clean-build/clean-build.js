import fs from 'node:fs';
const dir = 'dist';
fs.rmSync(dir, { recursive: true, force: true });
console.log("Successfully cleaned project");