"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
  let hiddenForms = document.querySelectorAll(".hidden");

  hiddenForms.forEach(form => {
    form.querySelectorAll("input").forEach(input => {
      input.disabled = true;
    });
  });

  let progressPoint = document.querySelector(`.progress_circle.basket`);
  progressPoint.style.borderColor = "red";

  let currentCheckoutSection = document.querySelector("#basket");

  const form = document.querySelector("form");

  // FORWARD BUTTONS
  const forwardButtons = document.querySelectorAll(".forward");
  forwardButtons.forEach(button => {
    console.log("addListener");
    button.addEventListener("click", function(e) {
      if (form.checkValidity() === false) {
        currentCheckoutSection.classList.add("invalidated");
      }

      if (form.checkValidity()) {
        e.preventDefault();
        currentCheckoutSection.classList.remove("invalidated");

        const checkoutDestination = button.getAttribute("data-goto");

        goToDestination(checkoutDestination);
      }
    });
  });

  // BACK BUTTONS
  const backButtons = document.querySelectorAll(".back");
  backButtons.forEach(button => {
    console.log("addListener");
    button.addEventListener("click", function(e) {
      e.preventDefault();

      const checkoutDestination = button.getAttribute("data-goto");

      goToDestination(checkoutDestination);
    });
  });

  function goToDestination(thisPage) {
    console.log(thisPage);

    progressPoint.style.borderColor = "purple";

    progressPoint = document.querySelector(`.progress_circle.${thisPage}`);
    progressPoint.style.borderColor = "red";

    let nextCheckoutSection = document.querySelector(`#${thisPage}`);

    currentCheckoutSection.classList.add("hidden");
    currentCheckoutSection.querySelectorAll("input").forEach(input => {
      input.disabled = true;
    });

    nextCheckoutSection.classList.remove("hidden");
    nextCheckoutSection.querySelectorAll("input").forEach(input => {
      input.disabled = false;
    });

    currentCheckoutSection = nextCheckoutSection;
  }
}
