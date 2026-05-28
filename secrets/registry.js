window.hellowirthSecrets = (() => {
  const commands = new Map();
  const installedStyles = new Set();

  function normalize(value) {
    return value.trim().toLowerCase();
  }

  function installStyles(id, styles) {
    if (installedStyles.has(id) || document.getElementById(id)) {
      installedStyles.add(id);
      return;
    }

    const style = document.createElement("style");
    style.id = id;
    style.textContent = styles;
    document.head.appendChild(style);
    installedStyles.add(id);
  }

  function register(command, callback) {
    commands.set(normalize(command), callback);
  }

  function run(value) {
    const secret = commands.get(normalize(value));

    if (secret) {
      secret();
      return true;
    }

    return false;
  }

  return {
    installStyles,
    register,
    run,
  };
})();
