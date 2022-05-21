const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click',function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innertext = newColor;
})

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return newColor = `rgb(${r}, ${g} , ${b})`
}