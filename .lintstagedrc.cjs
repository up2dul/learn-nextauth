module.exports = {
  // Type check TypeScript files
  './src/**/*.{ts,tsx}': () => 'npx tsc --noEmit',

  // Lint & Prettify JS, CJS, MJS, TS, and TSX files
  './**/*.{js,cjs,mjs,ts,tsx,mdx}': (filenames) => [
    `npx eslint ${filenames.join(' ')}`,
    `npx prettier --w ${filenames.join(' ')}`,
  ],
};
