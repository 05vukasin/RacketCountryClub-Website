const h1 = document.querySelector('h1');

let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  const dots = '.'.repeat(dotCount);
  h1.textContent = `Coming Soon${dots}`;
}, 500);
