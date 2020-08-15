// Make Connection
let socket = io.connect(window.location.href),
    message = document.querySelector("#message"),
    handle = document.querySelector("#handle"),
    btn = document.querySelector("#send"),
    output = document.querySelector("#output"),
    feedback = document.querySelector("#feedback");

btn.addEventListener("click", () =>{
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", () =>{
  socket.emit("typing", handle.value);
})

socket.on("chat", data =>{
  feedback.innerHTML = "";
  output.innerHTML += `<p><strong>${data.handle}:</strong> ${data.message} </p>`;
})

socket.on("typing", data =>{
  feedback.innerHTML = `<p><em>${data} is typing a message..</em></p>`;
})