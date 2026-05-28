(() => {
  const originalTexts = new WeakMap();
  const activeNodes = new Set();
  let isActive = false;
  let runId = 0;

  function canMutateTextNode(node) {
    const parent = node.parentElement;

    if (!parent || !node.nodeValue.match(/[aA]/)) {
      return false;
    }

    return !parent.closest("script, style, input, textarea, button, select, option");
  }

  function getTextNodes() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return canMutateTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      }
    );
    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    return nodes;
  }

  function landmvrkText(value) {
    return value.replace(/[aA]/g, character => {
      if (Math.random() > 0.58) {
        return character;
      }

      return character === "A" ? "V" : "v";
    });
  }

  function activate() {
    isActive = true;
    runId += 1;

    const currentRun = runId;
    const nodes = getTextNodes();

    nodes.forEach((node, index) => {
      if (!originalTexts.has(node)) {
        originalTexts.set(node, node.nodeValue);
      }

      activeNodes.add(node);

      window.setTimeout(() => {
        if (!isActive || currentRun !== runId) {
          return;
        }

        node.nodeValue = landmvrkText(originalTexts.get(node));
      }, index * 70 + Math.random() * 260);
    });
  }

  function deactivate() {
    isActive = false;
    runId += 1;

    Array.from(activeNodes).forEach((node, index) => {
      window.setTimeout(() => {
        const originalText = originalTexts.get(node);

        if (originalText !== undefined) {
          node.nodeValue = originalText;
        }

        activeNodes.delete(node);
      }, index * 48 + Math.random() * 190);
    });
  }

  function toggleSecret() {
    if (isActive) {
      deactivate();
      return;
    }

    activate();
  }

  window.hellowirthSecrets.register("landmvrks", toggleSecret);
})();
