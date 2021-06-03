const wholeBody = document.querySelector('.body');
const mainLeft = document.querySelector('.main-left-details');
const mainImg = document.querySelector('.main-img');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

one.addEventListener('click', () =>{
  mainImg.src = "img/pepsi001.png";
  wholeBody.style.backgroundColor = "#0065c3";
  wholeBody.style.transition = "0.5s";
  mainLeft.style.color = "#fff";
})
two.addEventListener('click', () =>{
  mainImg.src = "img/pepsi002.png";
  wholeBody.style.backgroundColor = "#cbcacb";
  wholeBody.style.transition = "0.5s";
  mainLeft.style.color = "#191919";
})
three.addEventListener('click', () =>{
  mainImg.src = "img/pepsi003.png";
  wholeBody.style.backgroundColor = "#1f2124";
  wholeBody.style.transition = "0.5s";
  mainLeft.style.color = "#fff";
})
