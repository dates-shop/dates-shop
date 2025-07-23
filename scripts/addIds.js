// scripts/addIds.js
const fs = require('fs');
const path = require('path');

// adjust this if your project root is different
const dataPath = path.join(__dirname, '..', 'src', 'data', 'datesData.json');

// read + parse
const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// inject IDs (smallest-to-largest, 1-based)
const withIds = raw.map((item, idx) => ({
  id: idx + 1,
  ...item,
}));

// overwrite file
fs.writeFileSync(dataPath, JSON.stringify(withIds, null, 2), 'utf-8');
console.log(`✅ Added IDs to ${withIds.length} entries.`);
