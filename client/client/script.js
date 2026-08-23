// Hassoni Chat

const input = document.querySelector(".send input");
const sendBtn = document.querySelector(".send button");
const messages = document.querySelector(".messages");


sendBtn.addEventListener("click", sendMessage);


input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});


function sendMessage(){

    let text = input.value.trim();

    if(text === ""){
        return;
    }


    let message = document.createElement("div");

    message.className = "message";


    message.innerHTML = `

    <img src="https://i.imgur.com/8Km9tLL.png">

    <div>

    <b class="owner">
    حسوني 👑
    </b>

    <p>
    ${text}
    </p>

    </div>

    `;


    messages.appendChild(message);


    input.value="";


    messages.scrollTop = messages.scrollHeight;

}
