import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';

const PORTFOLIO_DIR = './public/portfolio';
const QUALITY = {
  large: 85,
  small: 80,
  thumbnail: 80,  // dla zdjęć reprezentacyjnych
  background: 85  // dla zdjęć tła portfolio
};
const MAX_WIDTH = {
  large: 1920,
  small: 600,
  thumbnail: 1200,  // dla zdjęć reprezentacyjnych (używane w kafelkach)
  background: 1920  // dla zdjęć tła portfolio
};

// Statystyki
let stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0
};

async function processImage(inputPath, outputPath, size) {
  try {
    const inputStats = await stat(inputPath);
    const originalSize = inputStats.size;
    stats.totalOriginalSize += originalSize;
    
    console.log(`Processing: ${inputPath} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    // Sprawdź czy plik WebP już istnieje i jest mniejszy
    if (existsSync(outputPath)) {
      const existingStats = await stat(outputPath);
      if (existingStats.size < originalSize * 0.9) {
        console.log(`  ✓ Already optimized, skipping`);
        stats.skipped++;
        stats.totalOptimizedSize += existingStats.size;
        return;
      }
    }
    
    // Utwórz katalog jeśli nie istnieje
    await mkdir(dirname(outputPath), { recursive: true });
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Oblicz nowe wymiary
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH[size]) {
      height = Math.round((height * MAX_WIDTH[size]) / width);
      width = MAX_WIDTH[size];
    }
    
    // Konwertuj do WebP
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY[size],
        effort: 6 // 0-6, wyższe = lepsza kompresja ale wolniejsze
      })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const optimizedSize = outputStats.size;
    stats.totalOptimizedSize += optimizedSize;
    stats.processed++;
    
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    console.log(`  ✓ Created: ${outputPath} (${(optimizedSize / 1024).toFixed(2)} KB, -${savings}%)`);
    
  } catch (error) {
    console.error(`  ✗ Error processing ${inputPath}:`, error.message);
    stats.errors++;
  }
}

async function processDirectory(dirPath, relativePath = '', isPortfolioRoot = false) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  
  // Najpierw przetwórz pliki na tym poziomie (zdjęcia reprezentacyjne)
  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      
      // Przetwarzaj tylko obrazy
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const fullPath = join(dirPath, entry.name);
        const baseName = basename(entry.name, ext);
        
        // Sprawdź czy to zdjęcie tła portfolio (pf_*.jpg)
        if (isPortfolioRoot && entry.name.startsWith('pf_')) {
          const outputPath = join(PORTFOLIO_DIR, `${baseName}.webp`);
          await processImage(fullPath, outputPath, 'background');
        } 
        // W przeciwnym razie to zdjęcie reprezentacyjne w katalogu
        else if (!isPortfolioRoot) {
          // Sprawdź czy nie jest w folderze large/small (te przetworzymy osobno)
          const pathParts = relativePath.split('/');
          const isInSizeFolder = pathParts.includes('large') || pathParts.includes('small');
          
          if (!isInSizeFolder) {
            const outputPath = join(dirPath, `${baseName}.webp`);
            await processImage(fullPath, outputPath, 'thumbnail');
          }
        }
      }
    }
  }
  
  // Teraz przetwórz podkatalogi
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = join(dirPath, entry.name);
      const newRelativePath = join(relativePath, entry.name);
      
      // Jeśli to folder large/ lub small/, przetwórz wszystkie obrazy w nim
      if (entry.name === 'large' || entry.name === 'small') {
        const size = entry.name;
        const subEntries = await readdir(fullPath, { withFileTypes: true });
        
        for (const subEntry of subEntries) {
          if (subEntry.isFile()) {
            const ext = extname(subEntry.name).toLowerCase();
            
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
              const inputPath = join(fullPath, subEntry.name);
              const baseName = basename(subEntry.name, ext);
              const outputPath = join(fullPath, `${baseName}.webp`);
              
              await processImage(inputPath, outputPath, size);
            }
          }
        }
      } else {
        // Rekurencyjnie przetwarzaj inne podkatalogi
        await processDirectory(fullPath, newRelativePath, false);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('This will convert all images to WebP format and optimize their sizes.\n');
  
  try {
    await processDirectory(PORTFOLIO_DIR, '', true);
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 Optimization Summary:');
    console.log('='.repeat(60));
    console.log(`Processed: ${stats.processed} images`);
    console.log(`Skipped: ${stats.skipped} images (already optimized)`);
    console.log(`Errors: ${stats.errors} images`);
    console.log(`\nOriginal total size: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized total size: ${(stats.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    
    if (stats.totalOriginalSize > 0) {
      const totalSavings = ((1 - stats.totalOptimizedSize / stats.totalOriginalSize) * 100).toFixed(1);
      console.log(`Total savings: ${totalSavings}%`);
    }
    
    console.log('\n✅ Image optimization complete!');
    console.log('\nNote: Original files are preserved. WebP versions are created alongside them.');
    console.log('You can update your code to use .webp files with fallback to originals.');
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  }
}

main();
