import fs from 'fs';
import path from 'path';

const appDir = '/Users/charif/Documents/Antigravity/AI travel 3.0/travel/src/app';

// Read all subdirectories in /app starting with "s_" (Stitch screens)
const folders = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('s_'))
    .map(dirent => dirent.name);

console.log(`Found ${folders.length} Stitch screen pages to update.`);

let updatedCount = 0;

folders.forEach(folder => {
    const pagePath = path.join(appDir, folder, 'page.tsx');

    if (fs.existsSync(pagePath)) {
        const defaultContent = fs.readFileSync(pagePath, 'utf8');

        // Check if it's an old raw HTML page that needs updating
        if (defaultContent.includes('dangerouslySetInnerHTML') && !defaultContent.includes('InteractiveScreen')) {

            // Extract the raw HTML string between backticks
            const htmlMatch = defaultContent.match(/__html:\s*`([\s\S]*?)`\s*}}/);

            if (htmlMatch && htmlMatch[1]) {
                const rawHtml = htmlMatch[1];

                const newComponentCode = `
import React from 'react';
import InteractiveScreen from '@/components/InteractiveScreen';

// Automatically generated and updated interactive screen from Stitch export: ${folder.replace('s_', '')}
export default function Screen() {
  const htmlContent = \`
${rawHtml}
\`;

  return (
    <InteractiveScreen html={htmlContent} screenName="${folder}" />
  );
}
`;

                fs.writeFileSync(pagePath, newComponentCode.trim(), 'utf8');
                updatedCount++;
            } else {
                console.log(`Failed to extract HTML for: ${folder}`);
            }
        } else {
            console.log(`Skipping: ${folder} (Already updated or invalid format)`);
        }
    }
});

console.log(`Successfully updated ${updatedCount} pages to use InteractiveScreen.`);
