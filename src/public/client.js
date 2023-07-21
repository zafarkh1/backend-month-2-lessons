const socket = io();

const name = prompt("Enter your name");

const container = document.querySelector(".container");
const h3 = document.createElement("h3");

h3.textContent = "You joined";
container.append(h3);

socket.emit("user-joined", { username: name });

socket.on("new-user-joined", ({ username }) => {
  const h3 = document.createElement("h3");
  h3.innerText = `${username} joined`;
  container.append(h3);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { message } = e.target;

  const h5 = document.createElement("h5");
  h5.innerText = `You: ${message.value}`;
  container.append(h5);

  socket.emit("new-message", {
    from: name,
    message: message.value,
  });

  e.target.message.value = "";
});

socket.on("new-user-message", ({ from, message }) => {
  const h5 = document.createElement("h5");
  h5.innerText = `${from}: ${message}`;
  container.append(h5);
});

input.addEventListener("keyup", () => {
  socket.emit("user-typing", { username: efw });
});

const h5 = document.createElement("h5");

socket.on("new-user-typing", ({ username }) => {
  h5 = null;
  h5.innerText = `${username} typing ...`;
  container.append(h5);

  if (h5.innerText) {
    setTimeout(() => {
      h5.remove();
    }, 9000);
  }
});
