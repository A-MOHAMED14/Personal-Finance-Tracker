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
