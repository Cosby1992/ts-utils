import fs from 'node:fs';
const coverageDir = 'coverage';
const testReportDir = 'test_reports';
fs.rmSync(coverageDir, { recursive: true, force: true });
fs.rmSync(testReportDir, { recursive: true, force: true });
console.log("Successfully cleaned test files");