bgArray = ["img/img01.jpg","img/img02.jpg","img/img03.jpg","img/img04.jpg","img/img05.jpg","img/img06.jpg","img/img07.jpg","img/img08.jpg","img/img09.jpg","img/img10.jpg"];

function randBg(){
  const randValue = Math.floor(Math.random() * 10);
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.src = bgArray[randValue];
  img.classList.add('backgroundImg');
  body.appendChild(img);
}

randBg();