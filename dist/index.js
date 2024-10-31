"use strict";
const quizOptions = [
    { id: "artQuiz", label: "Art Quiz", category: "humanities" },
    { id: "astrologyQuiz", label: "Astrology Quiz", category: "humanities" },
    { id: "literatureQuiz", label: "Literature Quiz", category: "humanities" },
    { id: "englishQuiz", label: "English Quiz", category: "humanities" },
    { id: "historyQuiz", label: "History Quiz", category: "humanities" },
    { id: "geographyQuiz", label: "Geography Quiz", category: "humanities" },
    { id: "philosophyQuiz", label: "Philosophy Quiz", category: "humanities" },
    { id: "socialStudiesQuiz", label: "Social Studies Quiz", category: "humanities" },
    { id: "sportsQuiz", label: "Sports Quiz", category: "entertainment" },
    { id: "animalQuiz", label: "Animals Quiz", category: "entertainment" },
    { id: "musicQuiz", label: "Music Quiz", category: "entertainment" },
    { id: "chemistryQuiz", label: "Chemistry Quiz", category: "sciences" },
    { id: "psychologyQuiz", label: "Psychology Quiz", category: "sciences" },
    { id: "physicsQuiz", label: "Physics Quiz", category: "sciences" },
    { id: "biologyQuiz", label: "Biology Quiz", category: "sciences" },
    { id: "healthCareQuiz", label: "Health Care Quiz", category: "sciences" },
    { id: "mathQuiz", label: "Math Quiz", category: "technology" },
    { id: "computerScienceQuiz", label: "Computer Science Quiz", category: "technology" },
    { id: "engineeringQuiz", label: "Engineering Quiz", category: "technology" },
    { id: "politicsQuiz", label: "Politics Quiz", category: "social-studies" },
    { id: "economicsQuiz", label: "Economics Quiz", category: "social-studies" },
    { id: "financeQuiz", label: "Finance Quiz", category: "social-studies" },
    { id: "realEstateQuiz", label: "Real Estate Quiz", category: "social-studies" }
];
// Chemistry Quiz Data
const chemistryData = {
    1: [
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Au", correct: true },
                { text: "Ag", correct: false },
                { text: "Pb", correct: false },
                { text: "Fe", correct: false },
            ],
        },
        {
            question: "Which of the following is a noble gas?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Argon", correct: true },
                { text: "Hydrogen", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the pH of pure water?",
            answers: [
                { text: "7", correct: true },
                { text: "5", correct: false },
                { text: "10", correct: false },
                { text: "3", correct: false },
            ],
        },
        {
            question: "Which acid is found in citrus fruits?",
            answers: [
                { text: "Acetic acid", correct: false },
                { text: "Citric acid", correct: true },
                { text: "Lactic acid", correct: false },
                { text: "Sulfuric acid", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the primary component of natural gas?",
            answers: [
                { text: "Ethane", correct: false },
                { text: "Propane", correct: false },
                { text: "Methane", correct: true },
                { text: "Butane", correct: false },
            ],
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Argon", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What type of bond involves the sharing of electron pairs between atoms?",
            answers: [
                { text: "Ionic bond", correct: false },
                { text: "Covalent bond", correct: true },
                { text: "Metallic bond", correct: false },
                { text: "Hydrogen bond", correct: false },
            ],
        },
        {
            question: "Which element has the atomic number 1?",
            answers: [
                { text: "Helium", correct: false },
                { text: "Hydrogen", correct: true },
                { text: "Lithium", correct: false },
                { text: "Oxygen", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is the process of a solid turning directly into a gas called?",
            answers: [
                { text: "Condensation", correct: false },
                { text: "Sublimation", correct: true },
                { text: "Evaporation", correct: false },
                { text: "Deposition", correct: false },
            ],
        },
        {
            question: "Which of the following is a base?",
            answers: [
                { text: "Hydrochloric acid", correct: false },
                { text: "Sodium hydroxide", correct: true },
                { text: "Acetic acid", correct: false },
                { text: "Sulfuric acid", correct: false },
            ],
        },
    ],
};
// History Quiz Data
const historyData = {
    1: [
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "George Washington", correct: true },
                { text: "Abraham Lincoln", correct: false },
                { text: "John Adams", correct: false },
            ],
        },
        {
            question: "Which war was fought between the North and South regions in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Civil War", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "War of 1812", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1920", correct: false },
                { text: "1898", correct: false },
            ],
        },
        {
            question: "Who wrote the Declaration of Independence?",
            answers: [
                { text: "James Madison", correct: false },
                { text: "George Washington", correct: false },
                { text: "Thomas Jefferson", correct: true },
                { text: "Benjamin Franklin", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Which empire was known for its road system and postal service?",
            answers: [
                { text: "Roman Empire", correct: true },
                { text: "Ottoman Empire", correct: false },
                { text: "Mongol Empire", correct: false },
                { text: "Persian Empire", correct: false },
            ],
        },
        {
            question: "What ancient civilization is known for its pyramids?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Rome", correct: false },
                { text: "Egypt", correct: true },
                { text: "Mesopotamia", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Who was the famous queen of Egypt known for her relationships with Julius Caesar and Mark Antony?",
            answers: [
                { text: "Nefertiti", correct: false },
                { text: "Cleopatra", correct: true },
                { text: "Hatshepsut", correct: false },
                { text: "Tutankhamun", correct: false },
            ],
        },
        {
            question: "What event began the French Revolution?",
            answers: [
                { text: "Storming of the Bastille", correct: true },
                { text: "The Reign of Terror", correct: false },
                { text: "Napoleon's Rise to Power", correct: false },
                { text: "The Declaration of the Rights of Man", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What was the primary cause of World War I?",
            answers: [
                { text: "Economic Crisis", correct: false },
                { text: "Assassination of Archduke Franz Ferdinand", correct: true },
                { text: "Colonial Rivalries", correct: false },
                { text: "Treaty of Versailles", correct: false },
            ],
        },
        {
            question: "Which movement sought to end racial segregation in the United States?",
            answers: [
                { text: "Women's Suffrage Movement", correct: false },
                { text: "Civil Rights Movement", correct: true },
                { text: "Labor Movement", correct: false },
                { text: "Environmental Movement", correct: false },
            ],
        },
    ],
};
// Math Quiz Data
const mathData = {
    1: [
        {
            question: "What is the square root of 144?",
            answers: [
                { text: "10", correct: false },
                { text: "12", correct: true },
                { text: "14", correct: false },
                { text: "16", correct: false },
            ],
        },
        {
            question: "If x + 5 = 10, what is x?",
            answers: [
                { text: "3", correct: false },
                { text: "5", correct: true },
                { text: "10", correct: false },
                { text: "15", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is 15% of 200?",
            answers: [
                { text: "20", correct: false },
                { text: "25", correct: false },
                { text: "30", correct: true },
                { text: "35", correct: false },
            ],
        },
        {
            question: "What is the value of π (Pi) to two decimal places?",
            answers: [
                { text: "3.14", correct: true },
                { text: "3.15", correct: false },
                { text: "3.13", correct: false },
                { text: "3.16", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the formula for the area of a circle?",
            answers: [
                { text: "πr^2", correct: true },
                { text: "2πr", correct: false },
                { text: "r^2", correct: false },
                { text: "πd", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the derivative of x^2?",
            answers: [
                { text: "2x", correct: true },
                { text: "x", correct: false },
                { text: "x^2", correct: false },
                { text: "1", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "Solve for x: 2x + 3 = 11",
            answers: [
                { text: "4", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "3", correct: false },
            ],
        },
    ],
};
const quizDataMap = {
    chemistryQuiz: chemistryData,
    historyQuiz: historyData,
    mathQuiz: mathData,
};
const quizData = [
    { id: "chemistryQuiz", data: chemistryData },
    { id: "historyQuiz", data: historyData },
    { id: "mathQuiz", data: mathData },
];
function isQuizDataKey(key) {
    return quizData.some(quiz => quiz.id === key);
}
let currentQuestion = 0;
let totalQuestions = 0; // Total number of questions
let score = 0;
// DOM Elements
const loginContainer = document.querySelector(".loginContainer");
const displayContainer = document.querySelector(".displayContainer");
// Function to remove an element by its ID
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove(); // Remove the element from the DOM
    }
}
// Function to remove the registration section
function removeRegisterSection() {
    removeElementById("registerSection");
}
// Function to remove the login section
function removeLoginSection() {
    removeElementById("loginSection");
}
// Function to remove the quiz section
function removeQuizSection() {
    removeElementById("quizSection");
}
// Function to remove the score section
function removeScoreSection() {
    removeElementById("scoreSection");
}
// Function to remove the past scores section
function removePastScoresSection() {
    removeElementById("pastScoresSection");
}
function removeQuizSelectionSection() {
    removeElementById("quizSelectionSection");
}
function removeDifficultySelectionSection() {
    removeElementById("difficultySection");
}
// Function to remove all sections dynamically
function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removeDifficultySelectionSection();
    removeQuizSelectionSection();
    removePastScoresSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-default"); // Remove the dialog
}
// Function to create and append the registration form dynamically
function createRegisterSection() {
    var _a;
    const registerSection = document.createElement("div");
    registerSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "registeration-section", "space-y-2");
    registerSection.id = "registerSection";
    registerSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white my-3">Register</h2>
		<label for="firstName" class="block text-md/6 font-medium text-gray-900 dark:text-white">First Name:</label>
		<input type="text" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name" />
		<label for="lastName" class="block text-md/6 font-medium text-gray-900 dark:text-white">Last Name:</label>
		<input type="text" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name" />
		<label for="email" class="block text-md/6 font-medium text-gray-900 dark:text-white">Email:</label>
		<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" />
		<label for="registerUsername" class="block text-md/6 font-medium text-gray-900 dark:text-white">Username:</label>
		<input type="text" id="registerUsername" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" autocomplete="username"/>
		<label for="registerPassword" class="block text-md/6 font-medium text-gray-900 dark:text-white">Password:</label>
		<input type="password" id="registerPassword" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" autocomplete="current-password"/>
		<label for="confirmPassword" class="block text-md/6 font-medium text-gray-900 dark:text-white">Retype Password:</label>
		<input type="password" id="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Retype password" autocomplete="current-password"/>
		<div class="flex items-center mb-4">
			<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" value="" id="registerPasswordView">
			<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white " for="registerPasswordView">
				Show Password
			</label>
		</div>
		<button id="registerButton" class="float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
		<p id="registerError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;"></p>
    `;
    // Append the dynamically created register section to the loginContainer
    (_a = document.querySelector(".loginContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(registerSection);
    // Attach event listener to the register button
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", validateRegistrationForm);
    // Attach event listener for the Enter key on the register section
    registerSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateRegistrationForm();
        }
    });
    // Retrieve input elements by their IDs and attach event listeners to them
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword, } = getRegisterFormFields();
    // Attach input event listeners to all input fields for clearing error styles
    [
        firstName,
        lastName,
        email,
        registerUsername,
        registerPassword,
        confirmPassword,
    ].forEach((field) => {
        field.addEventListener("input", clearErrorStyles);
    });
    const checkbox = loginContainer.querySelector("#registerPasswordView");
    const passwordElement = document.querySelector("#registerPassword");
    const confirmPasswordElement = document.querySelector("#confirmPassword");
    checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener("change", function () {
        if (passwordElement && confirmPasswordElement) {
            if (this.checked) {
                passwordElement.setAttribute("type", "text");
                confirmPasswordElement.setAttribute("type", "text");
            }
            else {
                passwordElement.setAttribute("type", "password");
                confirmPasswordElement.setAttribute("type", "password");
            }
        }
    });
}
// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
// Validate registration form
async function validateRegistrationForm() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword, } = getRegisterFormFields();
    const fields = [
        { element: firstName, name: "First Name" },
        { element: lastName, name: "Last Name" },
        { element: email, name: "Email" },
        { element: registerUsername, name: "Username" },
        { element: registerPassword, name: "Password" },
        { element: confirmPassword, name: "Confirm Password" },
    ];
    // Reset previous error styles
    resetErrorStyles(fields);
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none";
    // Basic validation
    for (const field of fields) {
        const value = field.element.value.trim();
        if (!value) {
            showError(`${field.name} is required.`, field.element);
            return;
        }
    }
    const userEmail = email.value.trim();
    if (!validateEmail(userEmail)) {
        showError("Please enter a valid email address.", email);
        return;
    }
    const password = registerPassword.value.trim();
    const confirmPwd = confirmPassword.value.trim();
    if (!isValidPassword(password)) {
        showError("Password must be at least 8 characters long and contain at least one symbol.", registerPassword);
        return;
    }
    if (password !== confirmPwd) {
        showError("Passwords do not match.", registerPassword);
        showError("Passwords do not match.", confirmPassword);
        return;
    }
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (isUsernameTaken(registerUsername.value.trim(), users)) {
        showError("Username already exists.", registerUsername);
        return;
    }
    // Register the new user
    await registerUser(fields);
}
function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("mt-2");
        field.element.classList.remove("text-md");
        field.element.classList.remove("text-red-600");
        field.element.classList.remove("dark:text-red-400");
    });
}
function showError(message, field) {
    const registerError = document.getElementById("registerError");
    registerError.textContent = message;
    registerError.style.display = "block";
    field.classList.add("mt-2");
    field.classList.add("text-md");
    field.classList.add("text-red-600");
    field.classList.add("dark:text-red-400");
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
}
function isUsernameTaken(username, users) {
    return users.some((user) => user.username === username);
}
function getRegisterFormFields() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const registerUsername = document.getElementById("registerUsername");
    const registerPassword = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    return {
        firstName,
        lastName,
        email,
        registerUsername,
        registerPassword,
        confirmPassword,
    };
}
async function registerUser(fields) {
    // Hash the password before storing it
    const hashedPassword = await hashPassword(fields[4].element.value.trim());
    const newUser = {
        id: generateUniqueId(),
        firstName: fields[0].element.value.trim(),
        lastName: fields[1].element.value.trim(),
        username: fields[3].element.value.trim(),
        password: hashedPassword, // Store the hashed password
    };
    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Add the new user to the users array
    users.push(newUser);
    // Save the updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Update the UI to transition from registration to login
    const registerSection = document.getElementById("registerSection");
    const loginSection = document.getElementById("loginSection");
    registerSection.style.display = "none";
    loginSection.style.display = "block"; // Go to login after registration
}
// Helper function to hash the password (SHA-256 example)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}
// Function to generate a unique ID
function generateUniqueId() {
    return "user_" + (Math.floor(Math.random() * 1650) + 256); // Simple unique ID
}
// Function to remove error classes and hide the error message
function clearErrorStyles() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword, } = getRegisterFormFields();
    const fields = [
        firstName,
        lastName,
        email,
        registerUsername,
        registerPassword,
        confirmPassword,
    ];
    fields.forEach((field) => {
        field.classList.remove("mt-2");
        field.classList.remove("text-md");
        field.classList.remove("text-red-600");
        field.classList.remove("dark:text-red-400");
    }); // Remove error class from all fields
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none"; // Hide error message
}
// Function to create and append the login form dynamically
function createLoginSection() {
    var _a;
    const loginSection = document.createElement("div");
    loginSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "login-section", "space-y-2");
    loginSection.id = "loginSection";
    loginSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white my-3">Login</h2>
		<label for="loginUsername" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Username:</label>
		<input type="text" id="loginUsername" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" autocomplete="username"/>
		<label for="loginPassword" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password:</label>
		<input type="password" id="loginPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" autocomplete="current-password"/>
		<div class="form-check">
			<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="checkbox" type="checkbox" value="" id="loginPasswordView">
			<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white" for="loginPasswordView">
				Show Password
			</label>
		</div>
		<button id="loginButton" class="float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
		<p id="loginError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;">Incorrect username or password.</p>
		`;
    loginContainer.appendChild(loginSection);
    (_a = document
        .querySelector("#loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateLoginForm);
    loginSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateLoginForm();
        }
    });
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    // Attach the same event listener to both login input fields
    [loginUsername, loginPassword].forEach((field) => {
        field.addEventListener("input", clearLoginErrorStyles);
    });
    const checkbox = loginContainer.querySelector("#loginPasswordView");
    const passwordElement = document.querySelector("#loginPassword");
    checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener("change", function () {
        if (passwordElement) {
            if (this.checked) {
                passwordElement.setAttribute("type", "text");
            }
            else {
                passwordElement.setAttribute("type", "password");
            }
        }
    });
}
// Validate login form
async function validateLoginForm() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    // Reset error styles for both fields
    const fields = [loginUsername, loginPassword];
    fields.forEach((field) => {
        field.classList.remove("mt-2");
        field.classList.remove("text-md");
        field.classList.remove("text-red-600");
        field.classList.remove("dark:text-red-400");
    });
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
    // Check if either field is blank
    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";
        // Add '' class to empty fields
        fields.forEach((field) => {
            if (!field.value.trim()) {
                field.classList.add("mt-2");
                field.classList.add("text-md");
                field.classList.add("text-red-600");
                field.classList.add("dark:text-red-400");
            }
        });
        return;
    }
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Hash the entered password for comparison
    const hashedPassword = await hashPassword(password);
    // Find the user with matching username and hashed password
    const user = users.find((user) => user.username === username && user.password === hashedPassword);
    // Login logic
    if (user) {
        handleLoginSuccess(user); // On successful login
    }
    else {
        handleLoginError("Incorrect username or password."); // On login failure
    }
}
function getLoginFormFields() {
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    return { loginUsername, loginPassword };
}
// Helper function to handle login errors
function handleLoginError(message) {
    const loginError = document.getElementById("loginError");
    loginError.textContent = message;
    loginError.style.display = "block";
    const { loginUsername, loginPassword } = getLoginFormFields();
    [loginUsername, loginPassword].forEach((field) => {
        field.classList.add("mt-2");
        field.classList.add("text-md");
        field.classList.add("text-red-600");
        field.classList.add("dark:text-red-400");
    });
}
// Helper function to handle successful login
function handleLoginSuccess(user) {
    // Set current session user
    sessionStorage.setItem("currentUserId", user.id);
    sessionStorage.setItem("firstName", user.firstName);
    sessionStorage.setItem("lastName", user.lastName);
    sessionStorage.setItem("username", user.username);
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none"; // Hide any previous error
    // Load user data and proceed to the quiz
    loadQuiz(); // Proceed to quiz section
}
// Function to remove error classes and hide the login error message
function clearLoginErrorStyles() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const fields = [loginUsername, loginPassword];
    // Remove error class from both fields
    fields.forEach((field) => {
        field.classList.remove("mt-2");
        field.classList.remove("text-md");
        field.classList.remove("text-red-600");
        field.classList.remove("dark:text-red-400");
    });
    // Hide error message
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
}
function logoutEventListener() {
    var _a;
    (_a = document.querySelector("#logoutButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        localStorage.removeItem("quizProgress"); // Remove any quiz progress
        // Redirect to the login page
        removeAllSections();
        createRegisterSection();
        createLoginSection();
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = ""; // Clear welcome message
        }
        sessionStorage.clear();
    });
}
// function sortQuizArrayByDifficulty( arr: QuizOption[] ) {
// 	return arr.sort( ( a, b ) => {
//         if ( a.difficulty < b.difficulty ) {
//             return -1;
//         }
//         if ( a.difficulty > b.difficulty ) {
//             return 1;
//         }
//         return 0;
//     } );
// }
function sortQuizArrayByName(arr) {
    arr.sort((a, b) => a.label.localeCompare(b.label));
}
function createQuizSelection() {
    const quizSelectionSection = document.createElement("div");
    quizSelectionSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "quiz-selection-section");
    quizSelectionSection.id = "quizSelectionSection";
    quizSelectionSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Select a Quiz</h2>
        <div id="quizOptions" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
            
        </div>

		<div class="flex justify-center mt-5">
			<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-4 h-4 bg-zinc-700 rounded-full me-1.5 flex-shrink-0"></span>New</span>
			<span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-4 h-4 bg-amber-700 rounded-full me-1.5 flex-shrink-0"></span>In Progress</span>
		</div>
    `;
    displayContainer.appendChild(quizSelectionSection);
    // Retrieve current user's progress
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const currentProgress = JSON.parse(localStorage.getItem(userProgressKey) || "[]");
    const quizOptionsContainer = document.getElementById("quizOptions");
    if (quizOptionsContainer) {
        sortQuizArrayByName(quizOptions);
        quizOptions.forEach((quiz) => {
            const button = document.createElement("button");
            button.id = quiz.id;
            button.textContent = quiz.label;
            button.className =
                "button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";
            // Check if the quiz is already in progress
            const progressItem = currentProgress.find((item) => item.quizId === quiz.id && item.currentQuestion > 0);
            if (progressItem) {
                // Quiz is in progress, change the button class
                button.className =
                    "button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
            }
            button.addEventListener("click", () => {
                var _a;
                sessionStorage.setItem("quizId", button.id);
                let quizData = button.id.split("_")[0].concat("Data");
                console.log(quizData);
                sessionStorage.setItem("quizData", quizData);
                const tempArray = (_a = sessionStorage
                    .getItem("quizId")) === null || _a === void 0 ? void 0 : _a.split("_")[0].split(/(?=[A-Z])/);
                if (tempArray) {
                    tempArray[0] =
                        tempArray[0].charAt(0).toUpperCase() +
                            tempArray[0].slice(1);
                    const quiz_type = tempArray.join(" ");
                    sessionStorage.setItem("quizType", quiz_type);
                }
                addBackToSelectionSectionButton();
                sessionStorage.setItem("quizId", quiz.id);
                promptForDifficulty(quiz.id);
            });
            quizOptionsContainer.appendChild(button);
        });
    }
}
function promptForDifficulty(quizId) {
    // Remove the quiz selection section
    removeElementById("quizSelectionSection");
    const difficultySection = document.createElement("div");
    difficultySection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "login-section", "space-y-2");
    difficultySection.id = "difficultySection";
    difficultySection.innerHTML = `
	  <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Select Difficulty Level</h2>
	  <div id="difficultyOptions" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">

	  </div>
	`;
    displayContainer.appendChild(difficultySection);
    // Retrieve current user's progress
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const currentProgress = JSON.parse(localStorage.getItem(userProgressKey) || "[]");
    const difficultyOptionsContainer = document.getElementById("difficultyOptions");
    if (difficultyOptionsContainer) {
        for (let level = 1; level <= 5; level++) {
            const button = document.createElement("button");
            button.textContent = `Level ${level}`;
            button.className =
                "button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";
            // // Check if the quiz is already in progress at any difficulty level
            // const progressItems = currentProgress.filter( ( item ) => item.currentQuestion > 0 );
            // if ( progressItems.length > 0 ) {
            // 	button.className =
            // 		"button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
            // }
            button.addEventListener("click", () => {
                sessionStorage.setItem("difficultyLevel", level.toString());
                // Now load the quiz questions based on the selected difficulty
                setupQuizData(quizId, level);
            });
            difficultyOptionsContainer.appendChild(button);
        }
    }
}
function setupQuizData(quizId, difficultyLevel) {
    var _a;
    removeAllSections();
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    if (localStorage.getItem(userScoresKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
    addBackToSelectionSectionButton();
    if (!isQuizDataKey(quizId)) {
        console.error("Invalid quiz ID.");
        return;
    }
    // Find the quiz in the quizData array
    const quizItem = quizData.find(quiz => quiz.id === quizId);
    if (!quizItem) {
        console.error("Quiz not found.");
        return;
    }
    const selectedQuiz = quizItem.data;
    const questions = selectedQuiz[difficultyLevel];
    if (!questions) {
        console.error("Invalid difficulty level.");
        return;
    }
    // Shuffle the questions
    const shuffledQuestions = shuffle(questions);
    // Shuffle answers within each question
    shuffledQuestions.forEach((question) => {
        question.answers = shuffle(question.answers);
    });
    sessionStorage.setItem("currentQuizData", JSON.stringify(shuffledQuestions));
    sessionStorage.setItem("totalQuestions", questions.length.toString());
    // Update quizType for display purposes
    const quizType = ((_a = quizOptions.find(option => option.id === quizId)) === null || _a === void 0 ? void 0 : _a.label) || "Quiz";
    sessionStorage.setItem("quizType", quizType);
    // Proceed to load the quiz
    displayQuestion();
}
// Function to create and append the quiz section dynamically
function createQuizSection() {
    const quizSection = document.createElement("div");
    quizSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "quiz-section");
    quizSection.id = "quizSection";
    quizSection.innerHTML = `
        <div class="question-container">
            <p id="question" class="text-2xl"></p>
        </div>
        <div id="answers" class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5"></div>
        <div class="w-full bg-transparent rounded-full h-2.5 p-6">
			<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%" id="quizProgressBar"></div>
		</div>
    `;
    displayContainer.appendChild(quizSection);
}
// Function to create and append the score section dynamically
function createScoreSection() {
    var _a;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Quiz Completed!</h2>
        <p id="scoreMessage" class="py-4"></p>
        <button id="retryButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800  retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_a = document
        .querySelector("#retryButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => returnToBeginning());
}
// Function to create the past scores section dynamically
function createPastScoresSection() {
    var _a;
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-7", "w-full", "lg:w-11/12", "view-score-history");
    pastScoresSection.id = "pastScoresSection";
    pastScoresSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Past Scores</h2>
		<div class="overflow-x-auto">
        	<table id="pastScores" class="scores-table w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-100" style="width: 100%; border-collapse: collapse;"></table>
        </div>
		<button id="backButton" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-4">Back to Quiz</button>
    `;
    displayContainer.appendChild(pastScoresSection);
    const currentUserId = sessionStorage.getItem("currentUserId");
    (_a = document.querySelector("#backButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("pastScoresSection");
        if (checkProgressAtEnd(currentUserId)) {
            showScore();
        }
        else {
            loadQuiz();
        }
    });
}
// Function to create and append the action buttons dynamically
function createActionButtons() {
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 col-span-2 space-y-2 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max ";
    actionButtons.innerHTML = `
		<div class="grid grid-cols-1">
			<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
		</div>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
}
function createScoresButtons() {
    var _a;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 text-center col-span-2 space-y-2 md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max ";
    actionButtons.innerHTML = `
		<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
		<button id="viewScoresButton" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">View Past Scores</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    (_a = document
        .querySelector("#viewScoresButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("quizSelectionSection");
        createSortButtons();
    });
}
function addBackToSelectionSectionButton() {
    var _a, _b;
    const actionButtons = document.querySelector("#actionButtons");
    if (actionButtons) {
        actionButtons.innerHTML += `
        <button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		`;
    }
    (_a = document
        .querySelector("#backToSelectionButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    logoutEventListener();
    (_b = document
        .querySelector("#viewScoresButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById("quizSelectionSection");
        createSortButtons();
    });
}
function createSortButtons() {
    var _a, _b, _c, _d, _e;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 col-span-2 text-center space-y-2 md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max ";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
        <button id="resetScoresButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Reset All Scores</button>
		<button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		<div class="buttonGroup md:grid grid-cols-1 gap-1 my-auto text-center space-y-2 md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max">
			<button id="sortByQuizButton" class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sort by Quiz</button>
			<button id="sortByDateButton" class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sort by Date</button>
			<button id="sortByScoreButton" class="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Sort by Score</button>
		</div>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    // Get the current user ID
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");
    renderScores(pastScores);
    // Sort by Quiz (alphabetically)
    (_a = document
        .querySelector("#sortByQuizButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const sortedByQuiz = [...pastScores].sort((a, b) => a.quiz.localeCompare(b.quiz));
        renderScores(sortedByQuiz);
    });
    // Sort by Date (newest to oldest)
    (_b = document
        .querySelector("#sortByDateButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const sortedByDate = [...pastScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        renderScores(sortedByDate);
    });
    // Sort by Score (highest to lowest)
    (_c = document
        .querySelector("#sortByScoreButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        const sortedByPercentage = [...pastScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });
        renderScores(sortedByPercentage);
    });
    (_d = document
        .querySelector("#backToSelectionButton")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    (_e = document
        .querySelector("#resetScoresButton")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
function renderScores(pastScores) {
    // Remove existing sections
    removeElementById("quizSection");
    removeElementById("scoreSection");
    removeElementById("pastScoresSection");
    // Create the past scores section dynamically
    createPastScoresSection();
    // Create table headers and rows for the scores
    const tableHeaders = `
		<thead class="text-md text-white uppercase bg-gray-400 dark:bg-gray-700">
			<tr>
				<th>Quiz</th>
				<th>Score</th>
				<th>Percentage</th>
				<th class="scoreDate">Date</th>
				<th class="scoreTime">Time</th>
			</tr>
		</thead>`;
    const tableRows = pastScores
        .map(({ score, total, quiz, date }) => {
        const percentage = ((score / total) * 100).toFixed(2); // Calculate percentage
        const formattedDate = formatDate(date);
        const formattedTime = formatTime(date);
        return `
				<tbody>
					<tr class="bg-white hover:bg-gray-200 dark:hover:bg-slate-700 border-b dark:bg-gray-800 dark:border-gray-700">
						<td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">${quiz}</td>
						<td>${score} / ${total}</td>
						<td class="scorePercentage">${percentage}%</td>
						<td class="scoreDate">${formattedDate}</td>
						<td class="scoreDate">${formattedTime}</td>
					</tr>
				</tbody>`;
    })
        .join("");
    // Insert the table into the #pastScores element
    const pastScoresElement = document.querySelector("#pastScores");
    pastScoresElement.innerHTML = `
        ${tableHeaders}
        ${tableRows}
    `;
}
// Helper function to format time to hh:mm AM/PM
function formatTime(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    let hours = date.getHours(); // Get hours from 0 to 23
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with leading zero if necessary
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // Adjust midnight hour from 0 to 12
    const formattedHours = hours.toString().padStart(2, "0"); // Pad hours with leading zero if necessary
    return `${formattedHours}:${minutes} ${ampm}`; // Return in hh:mm AM/PM format
}
// Helper function to format date to mm/dd/yy
function formatDate(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11, so add 1
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year (yy)
    return `${month}/${day}/${year}`; // Return in mm/dd/yy format
}
function createDialog() {
    var _a, _b;
    const dialog = document.createElement("div");
    dialog.setAttribute("tabindex", "-1");
    dialog.classList.add("overflow-y-auto", "flex", "overflow-x-hidden", "inset-2/4", "z-50", "justify-center", "items-center", "w-full", "max-h-full", "col-span-12");
    dialog.id = "dialog";
    dialog.innerHTML = `
		<div class="relative p-4 w-full max-w-2xl max-h-full">
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-200">
				<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						Reset Past Scores Confirmation
					</h3>
					<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
						<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<div class="p-4 md:p-5 space-y-4">
					<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						Are you sure you want to delete all past scores? This action cannot be undone.
					</p>
				</div>
				<div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
					<button data-modal-hide="default-modal" type="button" id="resetConfirm" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
					<button data-modal-hide="default-modal" type="button" id="cancel-btn" class="py-2.5 px-5 ms-3 text-md font-medium text-gray-900 dark:text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
				</div>
			</div>
		</div>
    `;
    displayContainer.appendChild(dialog);
    // Add event listener for the Confirm button
    (_a = document.getElementById("resetConfirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const currentUserId = sessionStorage.getItem("currentUserId");
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem("quizData");
        sessionStorage.removeItem("quizId");
        removeElementById("dialog"); // Close the dialog
        removeAllSections();
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_b = document.querySelector("#cancel-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById("dialog"); // Close the dialog
    });
}
// Function to reset quiz and return to the beginning
function returnToBeginning() {
    // Reset quiz variables
    currentQuestion = 0;
    score = 0;
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const difficultyLevel = parseInt(sessionStorage.getItem("difficultyLevel"));
    const quizId = sessionStorage.getItem("quizId");
    // Retrieve current progress and remove the current quiz's progress
    let currentProgress = JSON.parse(localStorage.getItem(userProgressKey) || "[]");
    currentProgress = currentProgress.filter((item) => !(item.quizId === quizId && item.difficultyLevel === difficultyLevel));
    // Add new progress starting from the beginning
    currentProgress.push({ currentQuestion, score, quizId, difficultyLevel });
    // Sort and save the updated progress
    sortProgressArray(currentProgress);
    localStorage.setItem(userProgressKey, JSON.stringify(currentProgress));
    // Update the UI
    removeElementById("scoreSection");
    createActionButtons();
    // Display the first question
    setupQuizData(quizId, difficultyLevel);
}
// Function to load the quiz
function loadQuiz() {
    const currentUserId = sessionStorage.getItem("currentUserId");
    if (!currentUserId) {
        // If no user is logged in, show the login and registration sections
        createRegisterSection();
        createLoginSection();
        return;
    }
    // Retrieve users and find the current user
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((user) => user.id === currentUserId);
    if (!foundUser) {
        createRegisterSection();
        createLoginSection();
        console.error("User not found!");
        return;
    }
    const { firstName } = foundUser;
    // Check if the user has logged in before
    const hasLoggedInBeforeKey = `hasLoggedInBefore_${currentUserId}`;
    const hasLoggedInBefore = localStorage.getItem(hasLoggedInBeforeKey);
    // Display a welcome message based on the user's login history
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        if (hasLoggedInBefore) {
            welcomeMessage.textContent = `Welcome back, ${firstName}!`;
        }
        else {
            welcomeMessage.textContent = `Welcome, ${firstName}!`;
            localStorage.setItem(hasLoggedInBeforeKey, "true"); // Mark user as logged in for future
        }
    }
    removeElementById("registerSection");
    removeElementById("loginSection");
    const userScoresKey = `quizScores_${currentUserId}`;
    if (localStorage.getItem(userScoresKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
    createQuizSelection();
}
// Function to load progress on quiz start
function loadProgress() {
    if (!document.querySelector("#quizSection")) {
        createQuizSection();
    }
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const quizId = sessionStorage.getItem("quizId");
    const currentProgress = JSON.parse(localStorage.getItem(userProgressKey) || "[]");
    const difficultyLevel = parseInt(sessionStorage.getItem("difficultyLevel"));
    const progressItem = currentProgress.find((item) => item.quizId === quizId && item.difficultyLevel === difficultyLevel);
    if (progressItem) {
        currentQuestion = progressItem.currentQuestion;
        score = progressItem.score;
    }
    else {
        // Start from the beginning if no progress is saved
        currentQuestion = 0;
        score = 0;
        // Save initial progress
        currentProgress.push({ currentQuestion, score, quizId, difficultyLevel });
        sortProgressArray(currentProgress);
        localStorage.setItem(userProgressKey, JSON.stringify(currentProgress));
    }
}
function sortProgressArray(progressArray) {
    progressArray.sort((a, b) => {
        if (a.quizId < b.quizId)
            return -1;
        if (a.quizId > b.quizId)
            return 1;
        return 0;
    });
}
function createQuestionElement(question) {
    // Get DOM elements
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    if (!questionEl || !answersEl) {
        return;
    }
    // Set the question text
    questionEl.textContent = question.question;
    // Efficient shuffling using Fisher-Yates
    const shuffledAnswers = shuffle(question.answers);
    // If there are more buttons than answers, remove the excess ones
    while (answersEl.children.length > shuffledAnswers.length) {
        answersEl.removeChild(answersEl.lastChild);
    }
    // Add or update buttons
    shuffledAnswers.forEach((answer, index) => {
        let button;
        if (answersEl.children[index]) {
            // Reuse existing button
            button = answersEl.children[index];
        }
        else {
            // Create new button if necessary
            button = document.createElement("button");
            button.className =
                "answer-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"; // Use a CSS class for styling
            answersEl.appendChild(button);
        }
        // Update the button text
        button.textContent = answer.text;
        // Remove any previous event listeners and add a new one
        const newButton = button.cloneNode(true);
        button.replaceWith(newButton);
        newButton.addEventListener("click", () => checkAnswer(index));
    });
}
// Display Question
function displayQuestion() {
    loadProgress();
    removeElementById("quizSelectionSection");
    // Get the selected quiz data from sessionStorage
    const selection = sessionStorage.getItem("quizData");
    if (!selection) {
        console.error("Invalid quiz selection.");
        return;
    }
    const currentQuizDataStr = sessionStorage.getItem("currentQuizData");
    if (!currentQuizDataStr) {
        console.error("No quiz data found.");
        return;
    }
    const currentQuiz = JSON.parse(currentQuizDataStr);
    totalQuestions = currentQuiz.length;
    // Check if currentQuestion is within bounds
    if (currentQuestion >= totalQuestions) {
        showScore();
        return;
    }
    const currentQuizData = currentQuiz[currentQuestion];
    createQuestionElement(currentQuizData);
    // Update the progress bar
    updateProgressBar();
}
// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("quizProgressBar");
    const progressValue = ((currentQuestion + 1) / totalQuestions) * 100; // Calculate percentage
    console.log(`Progress: ${progressValue}`);
    progressBar.style.width = String(`${progressValue}%`); // Update the value of the progress bar
    // Save current progress
    saveProgress();
}
// Function to save progress to localStorage
function saveProgress() {
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const quizId = sessionStorage.getItem("quizId");
    const difficultyLevel = parseInt(sessionStorage.getItem("difficultyLevel"));
    const currentProgress = JSON.parse(localStorage.getItem(userProgressKey) || "[]");
    const index = currentProgress.findIndex((item) => item.quizId === quizId && item.difficultyLevel === difficultyLevel);
    if (index !== -1) {
        // Update existing progress
        currentProgress[index].currentQuestion = currentQuestion;
        currentProgress[index].score = score;
    }
    else {
        // Add new progress
        currentProgress.push({ currentQuestion, score, quizId, difficultyLevel });
    }
    // Sort the array alphabetically by quizId and difficultyLevel
    sortProgressArray(currentProgress);
    localStorage.setItem(userProgressKey, JSON.stringify(currentProgress));
}
// Function to check the answer and proceed
function checkAnswer(selectedAnswerIndex) {
    const currentQuizDataStr = sessionStorage.getItem("currentQuizData");
    if (!currentQuizDataStr) {
        console.error("No quiz data available.");
        return;
    }
    const currentQuizData = JSON.parse(currentQuizDataStr);
    const question = currentQuizData[currentQuestion];
    const selectedAnswer = question.answers[selectedAnswerIndex];
    const test = JSON.stringify(question.answers);
    console.log("selectedAnswerIndex:", selectedAnswerIndex);
    console.log(`Selected answer: ${test}`);
    if (selectedAnswer.correct) {
        score++;
    }
    currentQuestion++;
    saveProgress();
    // Display the next question
    displayQuestion();
}
// Generic shuffle function using the Fisher-Yates algorithm
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
// Function to show the final score
function showScore() {
    removeAllSections();
    // Display the score section
    createScoresButtons();
    createScoreSection();
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");
    const quizId = sessionStorage.getItem("quizId");
    const difficultyLevelStr = sessionStorage.getItem("difficultyLevel");
    if (!quizId || !difficultyLevelStr || !isQuizDataKey(quizId)) {
        console.error("Invalid quiz selection.");
        return;
    }
    const difficultyLevel = parseInt(difficultyLevelStr, 10);
    // Find the quiz in the quizData array
    const quizItem = quizData.find(quiz => quiz.id === quizId);
    if (!quizItem) {
        console.error("Quiz not found.");
        return;
    }
    const selectedQuiz = quizItem.data;
    const questions = selectedQuiz[difficultyLevel];
    if (!questions) {
        console.error("Invalid difficulty level.");
        return;
    }
    const totalQuestions = questions.length;
    // Add the new score with the current timestamp
    const timestamp = new Date().toLocaleString();
    const quizType = sessionStorage.getItem("quizType") || "Unknown Quiz";
    pastScores.push({
        score,
        total: totalQuestions,
        quiz: quizType,
        date: timestamp,
        difficultyLevel: difficultyLevel,
    });
    // Update localStorage with the new scores
    localStorage.setItem(userScoresKey, JSON.stringify(pastScores));
    // Update the score message with the most recent score
    const scoreMessageEl = document.getElementById("scoreMessage");
    if (scoreMessageEl) {
        scoreMessageEl.textContent = `You scored ${score} out of ${totalQuestions} on the ${quizType} at difficulty level ${difficultyLevel}.`;
    }
    // Reset quiz progress
    currentQuestion = 0;
    score = 0;
    saveProgress();
}
function checkProgressAtEnd(currentUserId) {
    // Retrieve current quiz progress
    const quizProgress = JSON.parse(localStorage.getItem(`quizProgress_${currentUserId}`));
    const currentQuiz = sessionStorage.getItem("quizId");
    const foundItem = quizProgress.some((item) => item.quizId === currentQuiz);
    if (foundItem) {
        if (currentQuestion === totalQuestions) {
            return true;
        }
    }
    return false;
}
// Initial load
window.addEventListener("load", () => {
    loadQuiz();
});
//# sourceMappingURL=index.js.map