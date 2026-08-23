const messageInput =
  document.getElementById("messageInput");

const sendButton =
  document.getElementById("sendButton");

const messages =
  document.getElementById("messages");


function sendMessage() {

  const text =
    messageInput.value.trim();

  if (!text) {
    return;
  }


  const messageElement =
    document.createElement("div");

  messageElement.className =
    "message";


  const currentTime =
    new Date().toLocaleTimeString(
      "ar-YE",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );


  messageElement.innerHTML = `

    <span class="name">
      حسوني
    </span>

    <span class="time">
      ${currentTime}
    </span>

    <p>
      ${text}
    </p>

  `;


  messages.appendChild(
    messageElement
  );


  messages.scrollTop =
    messages.scrollHeight;


  messageInput.value = "";

}


sendButton.addEventListener(
  "click",
  sendMessage
);


messageInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      sendMessage();

    }

  }
);
