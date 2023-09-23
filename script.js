const submitBtn = document.querySelector("#submit-btn");
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const message = document.querySelector("#message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  name.value = "";
  email.value = "";
  message.value = "";
});
