@echo off
cd /d "%~dp0"
echo EcoSort AI Offline Advanced v4.0
node --version
if errorlevel 1 (echo Node.js 18+ is required. Install from https://nodejs.org/ & pause & exit /b 1)
echo Running checks...
npm run check
if errorlevel 1 (pause & exit /b 1)
npm test
if errorlevel 1 (pause & exit /b 1)
echo Starting EcoSort AI at http://localhost:3000
npm start
pause
