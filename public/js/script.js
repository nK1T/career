const form = document.getElementById("careerForm");
const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".btn");
const backButtons = document.querySelectorAll(".back-btn");
let currentPage = 0;
const applyForField = document.getElementById("applyFor");
function validateEmail(input) {
    const email = input.value;
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (pattern.test(email)) {
        input.style.border = "1px solid green";
    } else {
        input.style.border = "1px solid red";
    }
}
function validateAndMoveToNext() {
  // Check if all required fields on the current page are filled
  const currentPageFields = pages[currentPage].querySelectorAll("[required]");
  let allFieldsFilled = true;

  currentPageFields.forEach((field) => {
    if (!field.value) {
      allFieldsFilled = false;
      field.style.borderColor = "red";
    } else {
      field.style.borderColor = ""; // Reset border color if the field is filled
    }
  });

  if (!allFieldsFilled) {
    return;
  }

  // If it's the first page, validate the "Apply For" field
  if (currentPage === 0) {
    if (applyForField.value === "") {
      applyForField.style.borderColor = "red";
      return;
    } else {
      applyForField.style.borderColor = ""; // Reset border color if the field is selected
    }
  }

  // Hide the current page
  pages[currentPage].style.display = "none";

  // Show the next page
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].style.display = "block";
}

function moveToPrevious() {
  // Hide the current page
  pages[currentPage].style.display = "none";

  // Show the previous page
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].style.display = "block";
}

nextButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    validateAndMoveToNext();
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    moveToPrevious();
  });
});
