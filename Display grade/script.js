const gradeBox = document.getElementById("grade-box");
const submitButton = document.getElementById("submitButton");
const alert = document.getElementById("alert");
const catImage = document.getElementById("catImage");
submitButton.addEventListener("click", collectInformation);

function collectInformation() {
  alert.setAttribute("hidden", true);
  gradeBox.setAttribute("hidden", true);
  catImage.setAttribute("hidden", true);
  const gradeInput = document.getElementById("gradeInput");
  console.log("Grade entered:", gradeInput.value);

  if (
    gradeInput.value === "" ||
    gradeInput.value < 0 ||
    gradeInput.value > 100
  ) {
    alert.removeAttribute("hidden");
    alert.innerHTML = "Please input a number form 0 to 100";
  } else {
    gradeBox.innerHTML = gradeInput.value;
    gradeBox.removeAttribute("hidden");
    if (gradeInput.value >= 90) {
      gradeBox.style.backgroundColor = "purple";
    } else if (gradeInput.value >= 80) {
      gradeBox.style.backgroundColor = "blue";
    } else if (gradeInput.value >= 70) {
      gradeBox.style.backgroundColor = "green";
    } else if (gradeInput.value >= 60) {
      gradeBox.style.backgroundColor = "yellow";
    } else if (gradeInput.value >= 50) {
      gradeBox.style.backgroundColor = "orange";
    } else if (gradeInput.value >= 40) {
      gradeBox.style.backgroundColor = "lightgrey";
    } else if (gradeInput.value >= 30) {
      gradeBox.style.backgroundColor = "grey";
    } else if (gradeInput.value >= 20) {
      gradeBox.style.backgroundColor = "black";
    } else {
      gradeBox.style.backgroundColor = "red";
      catImage.removeAttribute("hidden");
      alert.innerHTML = "Oh no! You failed! Here's a cat to cheer you up!";
    }
  }
}
