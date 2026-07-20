const fs = require('fs');

global.window = {
    localStorage: { getItem: ()=>null, setItem: ()=>null },
    innerWidth: 400,
    addEventListener: ()=>{},
    dispatchEvent: ()=>{}
};
const dummyEl = {
    addEventListener: ()=>{},
    classList: { add: ()=>{}, remove: ()=>{}, contains: ()=>false, toggle: ()=>{} },
    style: {},
    appendChild: ()=>{},
    append: ()=>{},
    removeAttribute: ()=>{},
    setAttribute: ()=>{},
    querySelector: () => dummyEl,
    querySelectorAll: () => ([]),
    parentNode: { style: {} }
};

global.document = {
    createElement: (tag) => dummyEl,
    getElementById: (id) => dummyEl,
    querySelector: () => dummyEl,
    querySelectorAll: () => ([]),
    body: dummyEl,
    documentElement: dummyEl
};
global.navigator = { userAgent: 'test' };
global.Event = class {};

const wordsJs = fs.readFileSync('words.js', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

try {
    eval(wordsJs);
    eval(appJs);
    console.log("NO ERROR IN EVAL");
    
    if (typeof window.__loaderStartTime !== 'undefined') {
        console.log("Loader logic ran.");
    }
} catch(e) {
    console.error("ERROR CAUGHT:");
    console.error(e);
}
