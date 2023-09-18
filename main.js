const showButton = document.querySelector("#show-btn");
const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");
const loginButton = document.querySelector("#loginBtn");
const alertModal = document.querySelector("#alertModal");
const iconEye = document.querySelector(".fa-eye");

showButton.addEventListener("click", (e) => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
  iconEye.classList.toggle("color-grey");
});

loginButton.addEventListener("click", (e) => {
  if (
    usernameInput.value.trim() === "" ||
    passwordInput.value.trim() === ""
  ) {
    e.stopPropagation();
    e.preventDefault();

    alertModal.style.display = "block";

    // Close the modal when clicking anywhere
    window.addEventListener("click", () => {
      if (getComputedStyle(alertModal).display == "block") {
        alertModal.style.display = "none";
      }
    });
  }
});