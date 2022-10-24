import "./styles/main.css";
// import logo from "./images/logo.svg";
import "./template.html";

const heroForm = document.querySelector("#heroForm");
const CTAForm = document.querySelector("#CTAForm");

const validate = (e) => {
  e.preventDefault();
  console.log("Validating");

  if (true) {
    e.target.submit();
  }
};

heroForm.addEventListener("submit", (e) => validate(e));

const isValid = (s, regex) => {
  return String(s).toLowerCase().match(regex);
};
