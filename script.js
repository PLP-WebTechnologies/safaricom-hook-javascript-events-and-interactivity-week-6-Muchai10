// Background Toggle
const toggleBgBtn = document.getElementById("toggle-bg-btn");
let isDarkMode = false;
toggleBgBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = isDarkMode ? "#f0f0f0" : "#222";
    document.body.style.color = isDarkMode ? "#000" : "#fff";
    isDarkMode = !isDarkMode;
});

// Slider for Text Size
const textSlider = document.getElementById("text-size-slider");
const textParagraph = document.getElementById("text-paragraph");
textSlider.addEventListener("input", function () {
    textParagraph.style.fontSize = textSlider.value + "px";
});

// Modal Functionality
const openModalBtn = document.getElementById("open-modal-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form Validation
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    let isValid = true;

    // Name Validation
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.match(passwordPattern)) {
        passwordError.textContent = "Password must be 8+ chars, include 1 uppercase & 1 number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

//Dropdown Menu Interaction
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.addEventListener("change", function () {
    let selectedOption = dropdown.options[dropdown.selectedIndex].text;
    dropdownMessage.textContent = `You selected: ${selectedOption}`;
});
