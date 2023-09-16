document.getElementById("home_links1").addEventListener("click", (event) => {
  if (document.getElementById("nav-check").checked == true) {
    document.getElementById("nav-check").checked = false;
  }
});

document.getElementById("home_links2").addEventListener("click", (event) => {
  if (document.getElementById("nav-check").checked == true) {
    document.getElementById("nav-check").checked = false;
  }
});

document.getElementById("home_links3").addEventListener("click", (event) => {
  if (document.getElementById("nav-check").checked == true) {
    document.getElementById("nav-check").checked = false;
  }
});

document.getElementById("home_links4").addEventListener("click", (event) => {
  if (document.getElementById("nav-check").checked == true) {
    document.getElementById("nav-check").checked = false;
  }
});

const sendBtn = document
  .getElementById("sendBtn")
  .addEventListener("click", () => {
    let dispaly = document.getElementById("response");
    dispaly.innerHTML = "Thanks for submitting";
    setTimeout(() => {
      dispaly.innerHTML = "";
    }, 4000);
  });
