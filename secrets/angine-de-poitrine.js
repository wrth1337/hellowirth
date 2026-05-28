(() => {
  const styles = `
.secret-dot {
    position: fixed;
    left: var(--dot-left);
    top: var(--dot-top);
    z-index: 9;
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    pointer-events: none;
    animation: secret-dot-fade var(--dot-duration) ease-out var(--dot-delay) forwards;
}

@keyframes secret-dot-fade {
    0% {
        opacity: 0;
        transform: translateY(8px) scale(0.35);
    }

    18%, 68% {
        opacity: var(--dot-opacity);
        transform: translateY(0) scale(1);
    }

    100% {
        opacity: 0;
        transform: translateY(-14px) scale(0.7);
    }
}

.secret-triangle {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 10;
    width: 0;
    height: 0;
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-bottom: 208px solid #ffd700;
    filter: drop-shadow(0 0 18px rgba(255, 215, 0, 0.95)) drop-shadow(0 0 44px rgba(255, 179, 0, 0.7));
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -55%) scale(0.8);
    animation: secret-triangle-fade 9500ms ease-out forwards;
}

@keyframes secret-triangle-fade {
    0% {
        opacity: 0;
        transform: translate(-50%, -55%) scale(0.8);
    }

    16%, 68% {
        opacity: 0.95;
        transform: translate(-50%, -55%) scale(1);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -55%) scale(0.92);
    }
}
`;

  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  function addGoldenTriangle() {
    const triangle = document.createElement("div");
    triangle.className = "secret-triangle";
    document.body.appendChild(triangle);
    window.setTimeout(() => triangle.remove(), 9800);
  }

  function playSecret() {
    window.hellowirthSecrets.installStyles("angine-de-poitrine-secret-styles", styles);
    addGoldenTriangle();

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dotCount = prefersReducedMotion ? 18 : 39;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("span");
      const size = 56;
      const duration = getRandomNumber(6500, 9500);
      const delay = prefersReducedMotion ? 0 : getRandomNumber(0, 900);

      dot.className = "secret-dot";
      dot.style.setProperty("--dot-size", `${size}px`);
      dot.style.setProperty("--dot-left", `${getRandomNumber(0, 100)}vw`);
      dot.style.setProperty("--dot-top", `${getRandomNumber(0, 100)}vh`);
      dot.style.setProperty("--dot-opacity", getRandomNumber(0.45, 0.95).toFixed(2));
      dot.style.setProperty("--dot-duration", `${duration}ms`);
      dot.style.setProperty("--dot-delay", `${delay}ms`);

      fragment.appendChild(dot);
      window.setTimeout(() => dot.remove(), duration + delay + 300);
    }

    document.body.appendChild(fragment);
  }

  window.hellowirthSecrets.register("angine de poitrine", playSecret);
})();
