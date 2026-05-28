(() => {
  const styles = `
.flashbang-overlay {
    position: fixed;
    inset: 0;
    z-index: 999;
    background: #fff;
    opacity: 0;
    pointer-events: none;
    animation: flashbang-fade 5200ms ease-out forwards;
}

@keyframes flashbang-fade {
    0%, 34% {
        opacity: 1;
    }

    48% {
        opacity: 0.86;
    }

    68% {
        opacity: 0.42;
    }

    100% {
        opacity: 0;
    }
}
`;

  function playSecret() {
    window.hellowirthSecrets.installStyles("counter-strike-secret-styles", styles);

    const overlay = document.createElement("div");
    overlay.className = "flashbang-overlay";
    document.body.appendChild(overlay);

    window.setTimeout(() => overlay.remove(), 5400);
  }

  window.hellowirthSecrets.register("counter strike", playSecret);
})();
