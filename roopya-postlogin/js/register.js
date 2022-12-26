const linkback = document.querySelectorAll(".link-back");
linkbackArray = Array.from(linkback);
linkbackArray.map((item, index) => {
  item.addEventListener("click", function (e) {
    let prevstepId = item.getAttribute("data-previd");
    let currentStepId = item.parentElement.id;
    document.querySelector(`#${prevstepId}`).classList.remove("d-none");
    document.querySelector(`#${currentStepId}`).classList.add("d-none");
  });
});
const registerStepWrapper_1 = document.querySelector("#register-form-step-1");
const registerform_1 = document.querySelector("#register-form");

const registerStepWrapper_2 = document.querySelector("#register-form-step-2");
const registerform_2 = document.querySelector("#register-form-communication");

const registerStepWrapper_3 = document.querySelector("#register-form-step-3");
const registerform_3 = document.querySelector("#register-form-occupation");

// REGISTER FORM STEP 1 SCRIPT
registerform_1.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(registerform_1.checkValidity());
  if (registerform_1.checkValidity() == false) {
    console.log("not submitted");
    return false;
  } else {
    console.log("form 1 submitted");
    registerStepWrapper_1.classList.add("d-none");
    registerStepWrapper_2.classList.remove("d-none");
  }
});

// REGISTER FORM STEP 2 SCRIPT
registerform_2.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(registerform_2.checkValidity());
  if (registerform_2.checkValidity() == false) {
    console.log("not submitted");
    return false;
  } else {
    console.log("form 2 submitted");
    registerStepWrapper_2.classList.add("d-none");
    registerStepWrapper_3.classList.remove("d-none");
  }
});

// REGISTER FORM STEP 2 SCRIPT
registerform_3.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(registerform_3.checkValidity());
  if (registerform_3.checkValidity() == false) {
    console.log("not submitted");
    return false;
  } else {
    console.log("form 3 submitted");
  }
});
