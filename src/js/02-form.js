const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || "";
    form.elements.message.value = parsedData.message || "";
  }
});

form.addEventListener("input", () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("Both fields are required!");
    return;
  }

  const formData = { email, message };
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
