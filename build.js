const fs = require('fs');
const path = require('path');

console.log('🔨 Starting build process...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read source HTML
const srcPath = path.join(__dirname, 'src', 'index.html');
const distPath = path.join(__dirname, 'dist', 'index.html');

try {
  let html = fs.readFileSync(srcPath, 'utf8');
  
  // Replace timestamp placeholder
  const timestamp = new Date().toISOString();
  html = html.replace('<!-- BUILD_TIMESTAMP -->', timestamp);
  
  // Write to dist
  fs.writeFileSync(distPath, html);
  
  console.log('✅ Build completed successfully!');
  console.log(`📁 Output: ${distPath}`);
  console.log(`⏰ Built at: ${timestamp}`);
  
  // Simulate potential build failure for testing
  // You can uncomment this line to test build failures:
  // throw new Error('Simulated build failure for testing');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}