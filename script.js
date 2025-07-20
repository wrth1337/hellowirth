const element = document.getElementById("typewriter-text");

const delay = ms => new Promise(res => setTimeout(res, ms));

async function typeWriterEffect() {
  const fullText = "Hello World!";
  const replacement = "Wirth!";
  const base = "Hello ";

  for (let i = 0; i <= fullText.length; i++) {
    element.textContent = fullText.substring(0, i);
    await delay(100);
  }

  await delay(800);

  for (let i = fullText.length; i >= base.length; i--) {
    element.textContent = fullText.substring(0, i);
    await delay(80);
  }

  for (let i = 0; i <= replacement.length; i++) {
    element.textContent = base + replacement.substring(0, i);
    await delay(100);
  }
}

typeWriterEffect();
