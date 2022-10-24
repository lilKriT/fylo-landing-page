import "./styles/main.css";
// import logo from "./images/logo.svg";
import "./template.html";

const heroForm = document.querySelectorAll("#heroForm");
const CTAForm = document.querySelectorAll("#CTAForm");

const isValid = (s, regex) => {
  return String(s).toLowerCase().match(regex);
};
