const buttonToggle = document.querySelector(".button-toggle");
const toggle = document.querySelector(".toggle");
buttonToggle.addEventListener("click", () => {
  if (
    buttonToggle.style.marginLeft &&
    buttonToggle.style.marginLeft == "140px"
  ) {
    buttonToggle.style.marginLeft = "0px";
    document.body.style.backgroundColor = "var(--light)";
  } else {
    buttonToggle.style.marginLeft = "140px";
    document.body.style.backgroundColor = "var(--dark)";
  }
});
