const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, '..', 'src', 'docs')
const targetDir = path.join(__dirname, '..', 'static', 'docs')

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function copyMarkdownFiles(src, dest) {
  ensureDirectoryExists(dest)
  
  const items = fs.readdirSync(src)
  
  for (const item of items) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    const stat = fs.statSync(srcPath)
    
    if (stat.isDirectory()) {
      copyMarkdownFiles(srcPath, destPath)
    } else if (item.endsWith('.md')) {
      console.log(`Copying: ${srcPath} -> ${destPath}`)
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

console.log('Starting markdown files copy...')
copyMarkdownFiles(sourceDir, targetDir)
console.log('Markdown files copy completed!') 