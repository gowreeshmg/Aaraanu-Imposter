const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const overrideStyle = `
<style>
/* Clean Override for Home Screen Layout to Fix Button Clicks and Spacing */
body[data-screen="home"] {
  overflow: hidden !important;
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
}

body[data-screen="home"] .app-shell {
  padding: 0 !important;
  height: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  position: relative !important;
  overflow: hidden !important;
}

#home.screen.active {
  display: flex !important;
  flex-direction: column !important;
  position: relative !important;
  height: 100% !important;
  width: 100% !important;
  overflow: hidden !important;
  padding: 0 !important;
}

#homeActions {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 100% !important;
  max-width: 520px !important;
  background: #060509 !important;
  border-top: 1px solid #1a1726 !important;
  border-radius: 24px 24px 0 0 !important;
  padding: 16px 20px calc(16px + env(safe-area-inset-bottom)) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  align-items: center !important;
  z-index: 99999 !important;
  pointer-events: auto !important;
}

#homeActions button {
  pointer-events: auto !important;
  position: relative !important;
  z-index: 999999 !important;
}
</style>
`;

if(!html.includes('Clean Override for Home Screen Layout')) {
   html = html.replace('</head>', overrideStyle + '</head>');
   fs.writeFileSync('index.html', html, 'utf8');
   console.log('Added CSS override to index.html');
} else {
   console.log('Override already exists');
}
