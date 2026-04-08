#!/bin/bash
set -e

echo "🔨 Installing dependencies..."
npm install

echo "📦 Building TypeScript..."
npm run build:server

echo "🔧 Fixing ES module imports..."
find dist/server/routes -name "*.js" -exec sed -i "s|from '../../src/utils/supabase'|from '../../src/utils/supabase.js'|g" {} \;
find dist/server/routes -name "*.js" -exec sed -i "s|from '../../src/types'|from '../../src/types/index.js'|g" {} \;

echo "✅ Build complete!"
