function validation() {
  const form = document.querySelector("#form");
  let email = document.querySelector("#email").value;

  let text = document.querySelector("#text");
  let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");

    text.innerHTML = "Your Email Addres in Valid";
    text.style.color = "#0f0";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");

    text.innerHTML = "Please Enter Valid Email Address.";
    text.style.color = "#f00";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");

    text.innerHTML = "";
    text.style.color = "#0f0";
  }
}
