// Quiz Data
const quizData = [
    { question: "What is the capital of France?", answers: ["Paris", "Rome", "London", "Berlin"], correct: 0 },
    { question: "Who wrote 'Harry Potter'?", answers: ["J.K. Rowling", "J.R.R. Tolkien", "Stephen King", "George R.R. Martin"], correct: 0 },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

// DOM Elements
const registerSection = document.getElementById("registerSection");
const loginSection = document.getElementById("loginSection");
const quizSection = document.getElementById("quizSection");
const scoreSection = document.getElementById("scoreSection");
const pastScoresSection = document.getElementById("pastScoresSection");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const registerUsername = document.getElementById("registerUsername");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");
const registerButton = document.getElementById("registerButton");
const registerError = document.getElementById("registerError");

const loginContainer = document.querySelector(".loginContainer");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("loginButton");
const actionButtons = document.getElementById("actionButtons");
const logoutButton = document.getElementById("logoutButton");
const loginError = document.getElementById("loginError");

const nextButton = document.getElementById("nextButton");
const retryButton = document.getElementById("retryButton");
const viewScoresButton = document.getElementById("viewScoresButton");
const backButton = document.getElementById("backButton");
const pastScoresEl = document.getElementById("pastScores");

// Cookie Helpers 
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

logoutButton.addEventListener("click", () => {
    // Clear the login cookie
    setCookie("username", "", -1); // Setting the cookie expiration in the past to remove it
    sessionStorage.removeItem("quizProgress"); // Remove any quiz progress
    // Redirect to the login page
    loginContainer.style.display = "flex";
    loginSection.style.display = "block";
    quizSection.style.display = "none";
    actionButtons.style.display = "none";
    document.getElementById("welcomeMessage").textContent = ""; // Clear welcome message
});

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}

// Handle Registration with Validation and Enter Key
registerButton.addEventListener("click", validateRegistrationForm);
document.getElementById("registerSection").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateRegistrationForm();
    }
});

// Validate registration form
function validateRegistrationForm() {
    const userFirstName = firstName.value.trim();
    const userLastName = lastName.value.trim();
    const userEmail = email.value.trim();
    const username = registerUsername.value.trim();
    const password = registerPassword.value.trim();
    const confirmPwd = confirmPassword.value.trim();

    // Basic validation
    if (!userFirstName || !userLastName || !username || !password || !confirmPwd || !userEmail) {
        registerError.textContent = "All fields are required.";
        registerError.style.display = "block";
        return;
    }

    if (!validateEmail(userEmail)) {
        registerError.textContent = "Please enter a valid email address.";
        registerError.style.display = "block";
        return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        registerError.textContent = "Password must be at least 8 characters long and contain at least one symbol.";
        registerError.style.display = "block";
        return;
    }

    if (password !== confirmPwd) {
        registerError.textContent = "Passwords do not match.";
        registerError.style.display = "block";
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        registerError.textContent = "Username already exists.";
        registerError.style.display = "block";
    } else {
        // Register the new user and store the first name
        users.push({ firstName: userFirstName, lastName: userLastName, email: userEmail, username, password });
        localStorage.setItem("users", JSON.stringify(users));

        // Store first name in localStorage for welcome message
        localStorage.setItem("firstName", userFirstName);

        registerError.style.display = "none";
        registerSection.style.display = "none";
        loginSection.style.display = "block"; // Go to login after registration
    }
}

// Handle Login with Enter Key and Validation
loginButton.addEventListener("click", validateLoginForm);
document.getElementById("loginSection").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        validateLoginForm();
    }
});

// Validate login form
function validateLoginForm() {
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Set login cookie
        setCookie("username", username, 1);
        loginError.style.display = "none";

        // Store first name in localStorage for future reference
        localStorage.setItem("firstName", validUser.firstName);
        loadQuiz(); // Proceed to quiz section
    } else {
        loginError.textContent = "Incorrect username or password.";
        loginError.style.display = "block";
    }
}

// Load Quiz
function loadQuiz() {
    const username = getCookie("username");
    if (username) {
        const firstName = localStorage.getItem("firstName");

        // Check if user is returning or logging in for the first time
        const hasLoggedInBefore = sessionStorage.getItem("hasLoggedInBefore");

        if (hasLoggedInBefore) {
            // Show "Welcome back" message for returning users
            document.getElementById("welcomeMessage").textContent = `Welcome back, ${firstName}!`;
        } else {
            // Show a simple "Welcome" message for first-time login
            document.getElementById("welcomeMessage").textContent = `Welcome, ${firstName}!`;
            sessionStorage.setItem("hasLoggedInBefore", true); // Set flag for future logins
        }

        loginContainer.style.display = "none";
        actionButtons.style.display = "flex";
        viewScoresButton.style.display = "block";
        logoutButton.style.display = "block";

        quizSection.style.display = "flex";
        quizSection.style.flexDirection = "column";

        currentQuestion = parseInt(sessionStorage.getItem("quizProgress")) || 0;
        score = 0;
        displayQuestion();
    } else {
        actionButtons.style.display = "none";
        loginSection.style.display = "block";
        quizSection.style.display = "none";
    }
}

// Display Question
function displayQuestion() {
    actionButtons.style.display = "flex";
    viewScoresButton.style.display = "block";
    logoutButton.style.display = "block";
    const currentQuizData = quizData[currentQuestion];
    document.getElementById("question").textContent = currentQuizData.question;
    const answersEl = document.getElementById("answers");
    answersEl.innerHTML = "";

    currentQuizData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("nes-btn");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(button);
    });

    document.getElementById("nextButton").style.display = "none";
}

// Check Answer
function checkAnswer(selected) {
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) {
        score++;
    }

    currentQuestion++;
    sessionStorage.setItem("quizProgress", currentQuestion);

    if (currentQuestion < quizData.length) {
        displayQuestion(); // Call displayQuestion again to show the next question
    } else {
        showScore();
    }
}

// Show Score
function showScore() {
    viewScoresButton.style.display = "none";
    quizSection.style.display = "none";
    scoreSection.style.display = "flex";
    scoreSection.style.flexDirection = "column";
    scoreSection.style.flexWrap = "wrap";

    // Show score after quiz completion
    document.getElementById("scoreMessage").textContent = `You scored ${score} out of ${quizData.length}!`;

    // Store the score and total in localStorage
    const pastScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    pastScores.push({ score: score, total: quizData.length }); // Store as an object
    localStorage.setItem("quizScores", JSON.stringify(pastScores)); // Update localStorage

    viewScoresButton.style.display = "block";
    localStorage.setItem("quizScores", JSON.stringify(pastScores));
}

// Retry quiz
retryButton.addEventListener("click", () => {
    sessionStorage.removeItem("quizProgress");
    currentQuestion = 0;
    score = 0;
    viewScoresButton.style.display = "none";
    quizSection.style.display = "flex";
    quizSection.style.flexDirection = "column";
    scoreSection.style.display = "none";
    displayQuestion();
});

// View past scores
viewScoresButton.addEventListener("click", () => {
    scoreSection.style.display = "none";
    quizSection.style.display = "none";

    viewScoresButton.style.display = "none";
    pastScoresSection.style.display = "flex";
    pastScoresSection.style.flexDirection = "column";
    const pastScores = JSON.parse(localStorage.getItem("quizScores")) || [];

    pastScoresEl.innerHTML = pastScores.map(scoreObj => {
        return `<li>You scored ${scoreObj.score} out of ${scoreObj.total}</li>`;
    }).join('');

});

// Back to quiz
backButton.addEventListener("click", () => {
    pastScoresSection.style.display = "none";
    scoreSection.style.display = "flex";
    scoreSection.style.flexDirection = "column";
});

// Initial load
window.onload = loadQuiz;
