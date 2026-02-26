import fs from 'fs';
import path from 'path';

const sourceDir = '/Users/charif/Downloads/stitch_ai_travel_search 2';
const targetDir = '/Users/charif/Documents/Antigravity/AI travel 3.0/travel/src/app';

// Ensure the source directory exists
if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
}

const folders = fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

console.log(`Found ${folders.length} folders in the source directory.`);

let importedCount = 0;
const indexLinks = [];

folders.forEach(folder => {
    const codeHtmlPath = path.join(sourceDir, folder, 'code.html');

    if (fs.existsSync(codeHtmlPath)) {
        console.log(`Importing: ${folder}`);

        // Read the HTML content
        const htmlContent = fs.readFileSync(codeHtmlPath, 'utf8');

        // We need to escape backticks and $ in the HTML content for the template literal
        const escapedHtml = htmlContent
            .replace(/`/g, '\\`')
            .replace(/\$/g, '\\$');

        // Create the target directory
        // We'll prefix with 's_' to avoid any Next.js reserved words or conflicts
        const routeName = `s_${folder}`;
        const pageDir = path.join(targetDir, routeName);

        if (!fs.existsSync(pageDir)) {
            fs.mkdirSync(pageDir, { recursive: true });
        }

        // Generate the React Component code
        const componentCode = `
import React from 'react';

// Automatically generated screen from Stitch export: ${folder}
export default function Screen() {
  return (
    <div className="w-full h-full bg-white relative" dangerouslySetInnerHTML={{ __html: \`
${escapedHtml}
    \` }} />
  );
}
`;

        // Write the page.tsx file
        fs.writeFileSync(path.join(pageDir, 'page.tsx'), componentCode.trim(), 'utf8');
        importedCount++;
        indexLinks.push({ name: folder, route: routeName });
    } else {
        console.log(`Skipping: ${folder} (No code.html found)`);
    }
});

console.log(`Successfully generated ${importedCount} Next.js pages.`);

// Generate an Index Page
const indexPageDir = path.join(targetDir, 'tous-les-ecrans');
if (!fs.existsSync(indexPageDir)) {
    fs.mkdirSync(indexPageDir, { recursive: true });
}

// Sort links alphabetically
indexLinks.sort((a, b) => a.name.localeCompare(b.name));

const indexCode = `
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export default function AllScreensIndex() {
  const screens = ${JSON.stringify(indexLinks, null, 2)};

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50 overflow-y-auto w-full max-w-[430px]">
      <div className="bg-[#1152d4] px-6 pt-12 pb-6 text-white sticky top-0 z-10 shadow-md">
        <h1 className="text-2xl font-bold flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" />
            Tous Les Écrans
        </h1>
        <p className="text-white/80 mt-2 text-sm">{screens.length} écrans importés depuis Stitch</p>
      </div>
      
      <div className="p-4 grid grid-cols-1 gap-3 pb-10">
        {screens.map((screen) => (
          <Link 
            key={screen.route} 
            href={\`/\${screen.route}\`}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow group"
          >
            <span className="font-medium text-gray-800 text-sm truncate pr-4 group-hover:text-[#1152d4]">
                {screen.name.replace(/_/g, ' ')}
            </span>
            <span className="text-gray-300 group-hover:text-[#1152d4]">➔</span>
          </Link>
        ))}
        
        <Link href="/" className="mt-6 text-center text-[#1152d4] hover:underline text-sm font-bold">
            Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(indexPageDir, 'page.tsx'), indexCode.trim(), 'utf8');
console.log('Generated Index screen at /tous-les-ecrans');
