const fs = require('fs');
const path = require('path');

const base64 = process.env.GOOGLE_SERVICES_JSON;

if (!base64) {
  console.error('ERROR: GOOGLE_SERVICES_JSON environment variable is missing');
  process.exit(1);
}

const json = Buffer.from(base64, 'base64').toString('utf8');
const filePath = path.join('android', 'app', 'google-services.json');

fs.writeFileSync(filePath, json);
console.log(`✅ Wrote ${filePath}`);
