window.onload = async () => {
  const data = document.getElementById("data");

  const error = (message) => {
    data.innerText = message;
    throw message;
  };

  const addMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;
    data.appendChild(messageElement);
  };

  try {
    let my_ip = await (await fetch("https://wtfismyip.com/json").catch()).json().catch();

    if (my_ip) {
      addMessage(`Your IP Address is: ${my_ip.YourFuckingIPAddress}`);
    } else {
      addMessage(`IP Address: ::ffff:172.70.126.134`);
    }

  } catch (e) {
    error(`${e.message}`);
  }
};
