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

    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    emailjs.init("vbFsDRgAQuM2igArp");
    var templateParams = {
      name: `${name} ${last_name}`,
      user_email: email,
      message: message,
    };

    emailjs.send("service_varnibhu", "template_qp5mg9i", templateParams).then(
      function (response) {
        console.log(response);
        console.log("SUCCESS!", response.status, response.text);
        dispaly.innerHTML = "Thanks for submitting";
        document.getElementById("name").value = ""
        last_name = ""
        email = ""
        message = ""
        setTimeout(() => {
          dispaly.innerHTML = "";
        }, 4000);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

// const sendEmail = () => {
//   emailjs.init("z-lsdP50vYBdAFZisbSQd");
//   var templateParams = {
//     name: "James",
//     email: "prajwalgadge9899@gmail.com",
//     message: "hello from varnibhu",
//   };

//   emailjsForm.send("service_varnibhu", "template_4hkq57r", templateParams).then(
//     function (response) {
//       console.log("SUCCESS!", response.status, response.text);
//     },
//     function (error) {
//       console.log("FAILED...", error);
//     }
//   );
// };
