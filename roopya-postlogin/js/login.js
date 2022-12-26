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

const loginformWrapper = document.querySelector("#login-number-box");
const loginform = document.querySelector("#login-form");
const mobilenumber = document.getElementById("MobileNumber");
let mobileOTP = "";
let enteredOTP = "";

const loginOtpWrapper = document.querySelector("#login-otp-box");

// LOGIN MOBILE NUMBER FORM SCRIPT
loginform.addEventListener("submit", (event) => {
  event.preventDefault();
  // if the email field is valid, we let the form submit
  if (!mobilenumber.validity.valid) {
    return false;
  } else {
    mobileOTP = 6789;
    console.log(mobileOTP);
    otpResendTimer(".resend-otp-link");
    loginformWrapper.classList.add("d-none");
    loginOtpWrapper.classList.remove("d-none");
  }
});

// LOGIN OTP FORM SCRIPT
const otpinputs = document.querySelectorAll(".form-group-otp .form-control");
otpinputsArray = Array.from(otpinputs);
otpinputsArray.map((item, index) => {
  item.addEventListener("keyup", function (e) {
    enteredOTP =
      otpinputsArray[0].value +
      otpinputsArray[1].value +
      otpinputsArray[2].value +
      otpinputsArray[3].value;
    console.log(e.target);
    console.log(enteredOTP, "enteredOTP");
    if (e.keyCode === 8 || e.keyCode === 37) {
      var prev = otpinputsArray[index - 1];
      console.log(e.keyCode);
      console.log(prev);
      if (otpinputsArray.includes(prev)) {
        prev.focus();
      }
    } else if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 90) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode === 39
    ) {
      var next = otpinputsArray[index + 1];
      console.log(next);
      console.log(e.keyCode);
      if (otpinputsArray.includes(next)) {
        next.focus();
      } else {
        // console.log("test");
      }
    }
  });
});

const loginformotp = document.querySelector("#login-form-otp");
loginformotp.addEventListener("submit", (event) => {
  event.preventDefault();
  // if the OTP is valid, we let the form submit

  if (mobileOTP != enteredOTP) {
    otpinputsArray.map((item) => {
      item.setCustomValidity("otp entered is not correct");
    });
  } else {
    loginformWrapper.classList.add("d-none");
    loginOtpWrapper.classList.remove("d-none");
    loginformotp.submit();
  }
});

let resendOtpLink = document.querySelector(".resend-otp-link");
resendOtpLink.addEventListener("click", function () {
  otpResendTimer(".resend-otp-link");
});

/*let counter = 0;
let otpTimerStart = setInterval(function () {
  counter++;
  console.log(counter);
}, 1000);*/

//let otpTimerStop = clearInterval(otpTimerStart);

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);
  this.stop = function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };
  this.start = function () {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };
  this.reset = function (newT) {
    t = newT;
    return this.stop().start();
  };
}
function otpResendTimer(timerElem) {
  let counter = 10;
  let timer_element = document.querySelector(timerElem);
  let timer = new Timer(function () {
    counter--;
    console.log(counter);
    if (counter > 0) {
      timer_element.textContent = `Enter OTP in ${counter} sec`;
      timer_element.classList.add("disabled");
    } else if (counter == 0) {
      timer.stop();
      timer_element.textContent = `Resend OTP`;
      timer_element.classList.remove("disabled");
    }
  }, 1000);
}
