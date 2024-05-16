
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  var a = img1.src
  var b = img2.src

  img1.src = b;
  img2.src = a;

})


