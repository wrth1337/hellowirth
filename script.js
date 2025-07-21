const element = document.getElementById("typewriter-text");

const delay = ms => new Promise(res => setTimeout(res, ms));

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}

async function typeWriterEffect() {
  const fullText = "Hello World!";
  const replacement = "irth!";
  const base = "Hello W";

  for (let i = 0; i <= fullText.length; i++) {
    element.textContent = fullText.substring(0, i);
    await delay(getRandomNumber(75,105));
  }

  await delay(450);

  for (let i = fullText.length; i >= base.length; i--) {
    element.textContent = fullText.substring(0, i);
    await delay(getRandomNumber(65,100));
  }

  for (let i = 0; i <= replacement.length; i++) {
    element.textContent = base + replacement.substring(0, i);
    await delay(getRandomNumber(100,140));
  }
}

typeWriterEffect();
