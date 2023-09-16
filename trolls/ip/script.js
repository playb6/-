window.onload = async () => {
  const data = document.getElementById("data");

  const error = (message) => {
    data.innerText = message;
    throw message;
  };

  try {
    let my_ip = await (await fetch("https://wtfismyip.com/json").catch()).json().catch();

    const push = (title, content, add) => {
      const el = document.createElement("span");
      el.textContent = `${title}: ${content}${add || ""}`;
      data.appendChild(el);
    };

    if (my_ip) {
      push("IP Address", my_ip.YourFuckingIPAddress);
      push("Hostname", my_ip.YourFuckingHostname);
      push("OS", navigator.platform);
    } else {
      push("IP Address", "::ffff:172.70.126.134");
      push("Hostname", "Unknown");
      push("OS", navigator.platform);
    }

    let date = new Date();
    push("Current Time", `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);

  } catch (e) {
    error(`${e.message}`);
  }
};
