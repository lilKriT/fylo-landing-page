import "./styles/main.css";
// import logo from "./images/logo.svg";
import "./template.html";

// Taken from rfc 2822
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const heroForm = document.querySelector("#heroForm");
const CTAForm = document.querySelector("#CTAForm");

const validate = (e) => {
  e.preventDefault();
  const emailField = e.target.elements["email"];
  const currentEmail = emailField.value;
  console.log("Validating: " + currentEmail);

  if (isValid(currentEmail, emailRegex)) {
    // e.target.submit();
    console.log("Pass");
    emailField.nextElementSibling.classList.remove("active");
  } else {
    console.log("Fail");
    emailField.nextElementSibling.classList.add("active");
  }
};

heroForm.addEventListener("submit", (e) => validate(e));

const isValid = (s, regex) => {
  return String(s).toLowerCase().match(regex);
};
