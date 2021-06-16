const bubbleElem = document.querySelector('#bubble');
const finalTextArray = document.querySelector('#bubble').getAttribute('text').split('');
const currentTextArray = [];


finalTextArray.forEach((character, index) => {
  setTimeout(() => {
    if (character === '§') {
      currentTextArray.push('<br>');
    }
    else {
      currentTextArray.push(character);
    }
    document.querySelector('#bubble').innerHTML = currentTextArray.join('');
  }, 1000 + 50 * index);
});
const html = document.getElementsByTagName('html')[0];
html.addEventListener('mousemove', ({ clientX, clientY }) => {
  const ratio = 3;
  const centerX = html.offsetWidth / 2;
  const centerY = html.offsetHeight / 2;
  const backgroundPositionX = ((centerX - clientX) / centerX) * ratio;
  const backgroundPositionY = ((centerY - clientY) / centerY) * ratio;
  html.style['background-position'] = `${backgroundPositionX}px ${backgroundPositionY}px`;
});
