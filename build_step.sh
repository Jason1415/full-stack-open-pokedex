#!/bin/bash

echo "Starting Build Script"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application for production
echo "Building the application..."
npm run build

# Ensure the backend serves the production build
echo "Preparing backend to serve the frontend..."
# Move the Webpack build output to the dist directory if needed
if [ -d "dist" ]; then
  echo "Build output already in 'dist'."
else
  mv build dist
fi

echo "Build script completed successfully."