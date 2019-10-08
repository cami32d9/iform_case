"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {

    let hiddenForms = document.querySelectorAll(".hidden");

    hiddenForms.forEach(form => {
        form.querySelectorAll("input").forEach(input => {
            console.log("I should disable now");
            input.disabled = true;
        });
    });

    let currentCheckoutSection = document.querySelector("#basket");
    console.log(currentCheckoutSection);

    const form = document.querySelector("form");
    const forwardButtons = document.querySelectorAll(".forward");
    forwardButtons.forEach(button => {
        console.log("addListener");
        button.addEventListener("click", function(e) {
            if(form.checkValidity()) {
                e.preventDefault();

                const gotoDestination = button.getAttribute("data-goto");

                if (gotoDestination !== "thankyou") {

                goToNextCheckoutPage(gotoDestination);
                }
            }
        });
    });

    function goToNextCheckoutPage(nextPage) {
        console.log(nextPage);

        let nextCheckoutSection = document.querySelector(`#${nextPage}`);

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
