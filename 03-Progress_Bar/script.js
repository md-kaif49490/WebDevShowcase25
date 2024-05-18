var progress = document.querySelector('#progress');
var h3 = document.querySelector('h3');

var count = 0;
var prog = setInterval(function() {
    if (count === 100) {
        h3.style.opacity = 1
        clearInterval(prog)
    }
    count++;
    progress.style.width = count + '%';
}, 100);

