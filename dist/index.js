"use strict";
const quizData = [
    {
        question: "What is the largest planet in our Solar System?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false },
        ],
    },
    // ... (rest of the quiz data can be transformed similarly)
];
let currentQuestion = 0;
const totalQuestions = quizData.length; // Total number of questions
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
// Function to remove all sections dynamically
function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removePastScoresSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-default"); // Remove the dialog
}
// Function to create and append the registration form dynamically
function createRegisterSection() {
    var _a;
    const registerSection = document.createElement("div");
    registerSection.classList.add("nes-container", "is-rounded", "registeration-section");
    registerSection.id = "registerSection";
    registerSection.innerHTML = `
        <h2 class="nes-text">Register</h2>
        <label for="firstName" class="nes-text">First Name:</label>
        <input type="text" id="firstName" class="nes-input" placeholder="Enter first name" />
        <label for="lastName" class="nes-text">Last Name:</label>
        <input type="text" id="lastName" class="nes-input" placeholder="Enter last name" />
        <label for="email" class="nes-text">Email:</label>
        <input type="email" id="email" class="nes-input" placeholder="Enter email" />
        <label for="registerUsername" class="nes-text">Username:</label>
        <input type="text" id="registerUsername" class="nes-input" placeholder="Enter username" />
        <label for="registerPassword" class="nes-text">Password:</label>
        <input type="password" id="registerPassword" class="nes-input" placeholder="Enter password" />
        <label for="confirmPassword" class="nes-text">Retype Password:</label>
        <input type="password" id="confirmPassword" class="nes-input" placeholder="Retype password" />
        <button id="registerButton" class="nes-btn is-success">Register</button>
        <p id="registerError" class="nes-text is-error" style="display:none;"></p>
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
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    // Attach input event listeners to all input fields for clearing error styles
    [firstName, lastName, email, registerUsername, registerPassword, confirmPassword].forEach((field) => {
        field.addEventListener("input", clearErrorStyles);
    });
}
// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
// Validate registration form
async function validateRegistrationForm() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
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
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    if (isUsernameTaken(registerUsername.value.trim(), users)) {
        showError("Username already exists.", registerUsername);
        return;
    }
    // Register the new user
    await registerUser(fields);
}
function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("is-error");
    });
}
function showError(message, field) {
    const registerError = document.getElementById("registerError");
    registerError.textContent = message;
    registerError.style.display = "block";
    field.classList.add("is-error");
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
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    // Add the new user to the users array
    users.push(newUser);
    // Save the updated users array in localStorage
    sessionStorage.setItem("users", JSON.stringify(users));
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
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}
// Function to generate a unique ID
function generateUniqueId() {
    return "user_" + (Math.floor(Math.random() * 1650) + 256); // Simple unique ID
}
// Function to remove error classes and hide the error message
function clearErrorStyles() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    const fields = [firstName, lastName, email, registerUsername, registerPassword, confirmPassword];
    fields.forEach((field) => field.classList.remove("is-error")); // Remove error class from all fields
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none"; // Hide error message
}
// Function to create and append the login form dynamically
function createLoginSection() {
    var _a;
    const loginSection = document.createElement("div");
    loginSection.classList.add("nes-container", "is-rounded", "login-section");
    loginSection.id = "loginSection";
    loginSection.innerHTML = `
        <h2 class="nes-text">Login</h2>
        <label for="loginUsername" class="nes-text">Username:</label>
        <input type="text" id="loginUsername" class="nes-input" placeholder="Enter username" />
        <label for="loginPassword" class="nes-text">Password:</label>
        <input type="password" id="loginPassword" class="nes-input" placeholder="Enter password" />
        <button id="loginButton" class="nes-btn is-primary">Login</button>
        <p id="loginError" class="nes-text is-error" style="display:none;">Incorrect username or password.</p>
    `;
    loginContainer.appendChild(loginSection);
    (_a = document.querySelector("#loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateLoginForm);
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
}
// Validate login form
async function validateLoginForm() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    // Reset error styles for both fields
    const fields = [loginUsername, loginPassword];
    fields.forEach((field) => field.classList.remove("is-error"));
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
    // Check if either field is blank
    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";
        // Add 'is-error' class to empty fields
        fields.forEach((field) => {
            if (!field.value.trim()) {
                field.classList.add("is-error");
            }
        });
        return;
    }
    // Retrieve users from localStorage
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
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
    [loginUsername, loginPassword].forEach((field) => field.classList.add("is-error"));
}
// Helper function to handle successful login
function handleLoginSuccess(user) {
    // Set current session user
    localStorage.setItem("currentUserId", user.id);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("username", user.username);
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
    fields.forEach((field) => field.classList.remove("is-error"));
    // Hide error message
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
}
function logoutEventListener() {
    var _a;
    (_a = document.querySelector("#logoutButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        sessionStorage.removeItem("quizProgress"); // Remove any quiz progress
        // Redirect to the login page
        removeAllSections();
        createRegisterSection();
        createLoginSection();
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = ""; // Clear welcome message
        }
        localStorage.clear();
    });
}
// Function to create and append the quiz section dynamically
function createQuizSection() {
    const quizSection = document.createElement("div");
    quizSection.classList.add("nes-container", "is-rounded", "quiz-section");
    quizSection.id = "quizSection";
    quizSection.innerHTML = `
        <div class="question-container">
            <p id="question"></p>
        </div>
        <div id="answers"></div>
        <progress class="nes-progress is-pattern" value="50" max="100" id="quizProgressBar"></progress>
    `;
    displayContainer.appendChild(quizSection);
}
// Function to create and append the score section dynamically
function createScoreSection() {
    var _a;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("nes-container", "is-rounded", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="nes-text">Quiz Completed!</h2>
        <p id="scoreMessage"></p>
        <button id="retryButton" class="nes-btn is-warning retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_a = document.querySelector("#retryButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => returnToBeginning());
}
// Function to create the past scores section dynamically
function createPastScoresSection() {
    var _a;
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("nes-container", "is-rounded", "view-score-history");
    pastScoresSection.id = "pastScoresSection";
    pastScoresSection.innerHTML = `
        <h2 class="nes-text">Past Scores</h2>
        <table id="pastScores" class="scores-table" style="width: 100%; border-collapse: collapse;"></table>
        <button id="backButton" class="nes-btn">Back to Quiz</button>
    `;
    displayContainer.appendChild(pastScoresSection);
    const currentUserId = localStorage.getItem("currentUserId");
    (_a = document.querySelector("#backButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("pastScoresSection");
        if (checkProgressAtEnd(currentUserId)) {
            showScore();
        }
        else {
            !loadQuiz();
        }
    });
}
// Function to create and append the action buttons dynamically
function createActionButtons() {
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
}
function createScoresButtons() {
    var _a, _b;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="viewScoresButton" class="nes-btn is-success">View Past Scores</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    (_a = document.querySelector("#viewScoresButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        createSortButtons();
    });
    (_b = document.querySelector("#resetScoresButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
function createSortButtons() {
    var _a, _b, _c;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
        <button id="sortByDateButton" class="nes-btn is-primary">Sort by Date</button>
        <button id="sortByScoreButton" class="nes-btn is-primary">Sort by Score</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    // Get the current user ID
    const currentUserId = localStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(sessionStorage.getItem(userScoresKey) || "[]");
    renderScores(pastScores);
    // Sort by Date (newest to oldest)
    (_a = document.querySelector("#sortByDateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const sortedByDate = [...pastScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        renderScores(sortedByDate);
    });
    // Sort by Score (highest to lowest)
    (_b = document.querySelector("#sortByScoreButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const sortedByPercentage = [...pastScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });
        renderScores(sortedByPercentage);
    });
    (_c = document.querySelector("#resetScoresButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
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
        <tr>
            <th>Score</th>
            <th>Percentage</th>
            <th class="scoreDate">Date</th>
        </tr>`;
    const tableRows = pastScores
        .map(({ score, total, date }) => {
        const percentage = ((score / total) * 100).toFixed(2); // Calculate percentage
        const formattedDate = formatDate(date);
        return `
                <tr>
                    <td>${score} / ${total}</td>
                    <td class="scorePercentage">${percentage}%</td>
                    <td class="scoreDate">${formattedDate}</td>
                </tr>`;
    })
        .join("");
    // Insert the table into the #pastScores element
    const pastScoresElement = document.querySelector("#pastScores");
    pastScoresElement.innerHTML = `
        ${tableHeaders}
        ${tableRows}
    `;
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
    const dialog = document.createElement("dialog");
    dialog.classList.add("nes-dialog", "nes-container", "is-rounded", "is-dark");
    dialog.id = "dialog-dark-rounded";
    dialog.innerHTML = `
        <form method="dialog">
            <p class="title">Confirmation</p>
            <p>Are you sure you want to reset all past scores?</p>
            <menu class="dialog-menu">
                <button class="nes-btn" id="cancel-btn" type="button">Cancel</button>
                <button class="nes-btn is-primary" id="resetConfirm" type="button">Confirm</button>
            </menu>
        </form>
    `;
    displayContainer.appendChild(dialog);
    // Register the dialog with the polyfill if necessary
    if (typeof dialog.showModal !== "function") {
        dialogPolyfill.registerDialog(dialog);
    }
    // Show the dialog
    dialog.showModal();
    // Add event listener for the Confirm button
    (_a = document.getElementById("resetConfirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const currentUserId = localStorage.getItem("currentUserId");
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem(`quizScores_${currentUserId}`);
        dialog.close(); // Close the dialog
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_b = document.querySelector("#cancel-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById("dialog-dark-rounded"); // Close the dialog
    });
}
function returnToBeginning() {
    // Reset quiz variables
    currentQuestion = 0;
    score = 0;
    const currentUserId = localStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    sessionStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score }));
    sessionStorage.setItem("quizProgress", String(0));
    // Update the UI
    removeElementById("scoreSection");
    createActionButtons();
    // Display the first question
    loadQuiz();
}
// Load Quiz
function loadQuiz() {
    const currentUserId = localStorage.getItem("currentUserId");
    if (!currentUserId) {
        // If no user is logged in, show the login section
        createRegisterSection();
        createLoginSection();
        return true;
    }
    // Retrieve users and find the current user
    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    const foundUser = users.find((user) => user.id === currentUserId);
    if (!foundUser) {
        console.error("User not found!");
        return false;
    }
    const { firstName } = foundUser;
    // Check if the user has logged in before
    const hasLoggedInBefore = sessionStorage.getItem("hasLoggedInBefore");
    // Display a welcome message based on the user's login history
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        if (hasLoggedInBefore) {
            welcomeMessage.textContent = `Welcome back, ${firstName}!`;
        }
        else {
            welcomeMessage.textContent = `Welcome, ${firstName}!`;
            sessionStorage.setItem("hasLoggedInBefore", "true"); // Mark user as logged in for future
        }
    }
    removeElementById("registerSection");
    removeElementById("loginSection");
    const userProgressKey = `quizScores_${currentUserId}`;
    // sessionStorage.getItem( userProgressKey ) ? createScoresButtons() : createActionButtons();
    if (sessionStorage.getItem(userProgressKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
    if (!document.querySelector("#quizSection")) {
        createQuizSection();
    }
    // Load user progress in the quiz
    loadProgress();
    return true;
}
// Function to load progress on quiz start
function loadProgress() {
    const currentUserId = localStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    const progressData = sessionStorage.getItem(userProgressKey);
    if (progressData) {
        const { currentQuestion: savedQuestion, score: savedScore } = JSON.parse(progressData);
        currentQuestion = savedQuestion;
        score = savedScore;
        console.log(currentQuestion, score);
    }
    else {
        currentQuestion = 0; // Start from the beginning if no progress is saved
        score = 0;
    }
    displayQuestion();
}
// Display Question
function displayQuestion() {
    // Display the action buttons and show the logout button
    const currentQuizData = quizData[currentQuestion];
    console.log(currentQuestion);
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    // Set the question text
    questionEl.textContent = currentQuizData.question;
    // Efficient shuffling using Fisher-Yates
    const shuffledAnswers = shuffle(currentQuizData.answers);
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
            button.classList.add("nes-btn");
            answersEl.appendChild(button);
        }
        // Update the button text
        button.textContent = answer.text;
        // Remove any previous event listeners and add a new one
        const newButton = button.cloneNode(true); // Clean up old event listeners
        button.replaceWith(newButton); // Replace old button with new one
        newButton.addEventListener("click", () => checkAnswer(answer));
    });
    // Update the progress bar
    updateProgressBar();
}
// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("quizProgressBar");
    const progressValue = ((currentQuestion + 1) / totalQuestions) * 100; // Calculate percentage
    progressBar.value = progressValue; // Update the value of the progress bar
    // Save current progress in session storage
    const currentUserId = localStorage.getItem("currentUserId");
    const userProgressKey = `quizProgress_${currentUserId}`;
    sessionStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score })); // Store progress
}
// Check Answer
function checkAnswer(selected) {
    // Increment score if the selected answer is correct
    if (true === selected.correct) {
        score++;
    }
    // Update the current question index
    currentQuestion++;
    // Store progress only at the end of the quiz
    if (currentQuestion < quizData.length) {
        displayQuestion(); // Show the next question
    }
    else {
        showScore(); // Display final score
        if (currentQuestion == quizData.length) {
            currentQuestion = 0;
            score = 0;
        }
        sessionStorage.setItem("quizProgress", String(currentQuestion));
    }
}
const shuffle = (array) => {
    // Step 1: Fisher-Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Step 2: Random sort shuffle
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};
// Show Score
function showScore() {
    removeAllSections();
    // Display the score section
    createScoresButtons();
    createScoreSection();
    // Get the current user ID
    const currentUserId = localStorage.getItem("currentUserId");
    if (!currentUserId) {
        console.error("No current user ID found.");
        return;
    }
    // Retrieve and update past scores for the current user
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(sessionStorage.getItem(userScoresKey) || "[]");
    if (checkProgressAtEnd(currentUserId)) {
        // Add the new score with the current timestamp
        const timestamp = new Date().toLocaleString();
        pastScores.push({ score: score, total: quizData.length, date: timestamp });
        console.log(pastScores);
        // Update localStorage with the new scores
        sessionStorage.setItem(userScoresKey, JSON.stringify(pastScores));
    }
    // Sort the past scores by date (most recent first)
    pastScores.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    // Get the most recent score (which will be the first after sorting)
    const mostRecentScore = pastScores[0];
    // Update the score message with the most recent score
    const scoreMessageEl = document.getElementById("scoreMessage");
    if (scoreMessageEl) {
        scoreMessageEl.textContent = `Most Recent Score: ${mostRecentScore.score} out of ${mostRecentScore.total} on ${mostRecentScore.date}`;
    }
}
function checkProgressAtEnd(currentUserId) {
    // Retrieve current quiz progress
    const quizProgress = sessionStorage.getItem(`quizProgress_${currentUserId}`);
    if (quizProgress && JSON.parse(quizProgress).currentQuestion == totalQuestions - 1) {
        return true;
    }
    return false;
}
// Initial load
window.addEventListener("load", () => {
    loadQuiz();
});
//# sourceMappingURL=index.js.map