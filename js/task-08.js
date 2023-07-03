const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Внимание! Все поля должны быть заполнены!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}
