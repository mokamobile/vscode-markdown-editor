import { rm, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Since this is a .js file, we can't use __dirname directly with ES modules.
// This is the standard way to get the directory name in an ES module.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Correctly resolve the path to be relative to the script's location.
const distDir = join(__dirname, '..', '..', 'media', 'dist');

async function build() {
  try {
    // 1. Clean up the dist directory
    console.log(`Cleaning directory: ${distDir}`);
    await rm(distDir, { recursive: true, force: true });
    console.log('Cleaned old build files.');

    // 2. Recreate the dist directory
    await mkdir(distDir, { recursive: true });
    console.log('Created dist directory.');

    // 3. Run the bun build
    console.log('Starting bun build...');
    const result = await Bun.build({
      entrypoints: [join(__dirname, '..', 'src', 'main.ts')],
      outdir: distDir,
      minify: true,
      sourcemap: 'external',
    });

    if (!result.success) {
      console.error("Build failed");
      for (const message of result.logs) {
        console.error(message);
      }
      process.exit(1);
    }

    console.log('Build successful!');

  } catch (error) {
    console.error('An error occurred during the build process:', error);
    process.exit(1);
  }
}

build();
