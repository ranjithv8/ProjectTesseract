requirejs.config({
    baseUrl: 'lib',
});

// Start the main app logic.
requirejs(['Tesseract'],
function(t) {
   t.recognize("imgs/A.png",{lang:"eng"});
});