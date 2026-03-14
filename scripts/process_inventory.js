import fs from 'fs';
import path from 'path';

const csvFiles = [
    'alibaba-com-2026-03-14.csv',
    'alibaba-com-2026-03-14-2.csv',
    'alibaba-com-2026-03-14-3.csv',
    'alibaba-com-2026-03-14-3 (1).csv'
];

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'src', 'data');
const outputFile = path.join(outputDir, 'products.json');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function parseCSVLine(line) {
    const result = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(cur.trim());
            cur = '';
        } else {
            cur += char;
        }
    }
    result.push(cur.trim());
    return result;
}

function parsePrice(priceStr) {
    if (!priceStr) return null;
    // Handle ranges like "$2.55-2.80"
    const matches = priceStr.match(/(\d+\.?\d*)/g);
    if (!matches) return null;
    const prices = matches.map(Number);
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    return avg;
}

const CATEGORIES = {
    'vibrators': ['vibrator', 'vibrating', 'sucking', 'massager', 'egg'],
    'bdsm': ['bdsm', 'restraints', 'rope', 'blindfold', 'fetish', 'leather', 'games'],
    'dildos': ['dildo', 'penis', 'realistic', 'wand'],
    'wellness': ['oil', 'candle', 'care', 'heating', 'pillow', 'cushion'],
    'couples': ['couple']
};

function getCategory(title) {
    const lowerTitle = title.toLowerCase();
    for (const [cat, keywords] of Object.entries(CATEGORIES)) {
        if (keywords.some(kw => lowerTitle.includes(kw))) {
            return cat;
        }
    }
    return 'wellness'; // Default
}

let allProducts = [];
let idCounter = 1;

csvFiles.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${file}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const header = parseCSVLine(lines[0]);

    // Find indices for data (title), price, and image
    const titleIdx = header.indexOf('data');
    const priceIdx = header.indexOf('price');
    const price2Idx = header.indexOf('price2');
    const price3Idx = header.indexOf('price3');
    const imageIdx = header.indexOf('image');

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const row = parseCSVLine(lines[i]);
        
        const title = row[titleIdx];
        if (!title) continue;

        let rawPrice = row[priceIdx] || row[price2Idx] || row[price3Idx];
        const parsedPrice = parsePrice(rawPrice);
        if (!parsedPrice) continue;

        const increasedPrice = parsedPrice * 1.8;
        const image = row[imageIdx];

        allProducts.push({
            id: idCounter++,
            name: title,
            price: `$${increasedPrice.toFixed(2)}`,
            priceRaw: increasedPrice,
            image: image,
            type: getCategory(title),
            desc: title // Use title as description for now
        });
    }
});

fs.writeFileSync(outputFile, JSON.stringify(allProducts, null, 2));
console.log(`Successfully processed ${allProducts.length} products to ${outputFile}`);
