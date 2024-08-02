const getStarted = async () => {
  const response = await fetch("/signup");

  if (response.ok) {
    document.location.assign("/signup");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#get-started-btn")
  .addEventListener("click", getStarted);

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signup-name").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-name").value.trim();

  if ((name, email, password)) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-btn")
  .addEventListener("submit", signupFormHandler);
