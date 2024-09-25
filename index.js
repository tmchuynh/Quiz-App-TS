// Quiz Data
const quizData = [
    {
        question: "What does IDE stand for in web development?",
        answers: ["Integrated Development Environment", "Internet Development Editor", "Interactive Design Environment", "Integrated Debugging Engine"],
        correct: 0
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hypertext Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language", "Hypertext Multi Language"],
        correct: 0
    },
    {
        question: "What is the purpose of semantic HTML?",
        answers: ["To create visually appealing websites", "To enhance SEO and accessibility", "To speed up website loading times", "To allow users to input data"],
        correct: 1
    },
    {
        question: "What is the DRY principle in programming?",
        answers: ["Don't Repeat Yourself", "Don't Render Your code", "Do Run Your tests", "Don't Run Your scripts"],
        correct: 0
    },
    {
        question: "Which of the following is a version control system?",
        answers: ["Git", "npm", "HTML", "CSS"],
        correct: 0
    },
    {
        question: "What is Markdown primarily used for?",
        answers: ["Styling websites", "Writing formatted text", "Creating interactive web apps", "Managing packages"],
        correct: 1
    },
    {
        question: "What command is used to install a package using npm?",
        answers: ["npm install [package_name]", "npm get [package_name]", "npm download [package_name]", "npm setup [package_name]"],
        correct: 0
    },
    {
        question: "What is wireframing in web design?",
        answers: ["Creating a visual representation of a webpage", "Writing the code for a website", "Deploying a website to a server", "Designing graphics for a website"],
        correct: 0
    },
    {
        question: "What is the purpose of ARIA labels in HTML?",
        answers: ["To improve aesthetics", "To provide accessibility information", "To structure the HTML document", "To enhance loading times"],
        correct: 1
    },
    {
        question: "Which of the following is a void element in HTML?",
        answers: ["<div>", "<img>", "<p>", "<span>"],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style System", "Cascading Sheet Styles"],
        correct: 0
    },
    {
        question: "Which CSS rule is used to select an element with a specific class?",
        answers: [".classname", "#classname", "classname", "*classname"],
        correct: 0
    },
    {
        question: "What are pseudo-classes in CSS?",
        answers: ["Classes that cannot be reused", "Classes that are defined in a style block", "Special states of elements", "Classes that require JavaScript"],
        correct: 2
    },
    {
        question: "What is the DOM?",
        answers: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Outline Model"],
        correct: 0
    },
    {
        question: "What is an object literal in JavaScript?",
        answers: ["A way to define objects using curly braces", "A built-in object in JavaScript", "A function that returns an object", "An object created with the Object constructor"],
        correct: 0
    },
    {
        question: "Which CSS framework is known for its utility-first approach?",
        answers: ["Bootstrap", "Tailwind CSS", "Foundation", "Materialize"],
        correct: 1
    },
    {
        question: "What is a key feature of Bootstrap?",
        answers: ["Custom animations", "Responsive design grid system", "Markdown support", "JavaScript libraries"],
        correct: 1
    },
    {
        question: "What are @rules in CSS?",
        answers: ["Commands for compiling CSS", "CSS syntax rules", "Special directives like @import and @media", "Rules for styling pseudo-elements"],
        correct: 2
    },
    {
        question: "What is element hierarchy in HTML?",
        answers: ["The order of elements based on CSS styles", "The nested structure of HTML elements", "The relationship between different HTML documents", "The hierarchy of JavaScript objects"],
        correct: 1
    }
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
const loginError = document.getElementById("loginError");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const pastScoresEl = document.getElementById("pastScores");
const retryButton = document.getElementById("retryButton");

const actionButtons = document.getElementById("actionButtons");
const logoutButton = document.getElementById("logoutButton");
const viewScoresButton = document.getElementById("viewScoresButton");
const resetScoresButton = document.getElementById("resetScoresButton");
const sortByDateButton = document.getElementById("sortByDateButton");
const sortByScoreButton = document.getElementById("sortByScoreButton");

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
    pastScoresSection.style.display = "none";
    scoreSection.style.display = "none";
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

    // Reset any previous error styling
    firstName.classList.remove("is-error");
    lastName.classList.remove("is-error");
    email.classList.remove("is-error");
    registerUsername.classList.remove("is-error");
    registerPassword.classList.remove("is-error");
    confirmPassword.classList.remove("is-error");
    registerError.style.display = "none";

    // Basic validation
    if (!userFirstName || !userLastName || !username || !password || !confirmPwd || !userEmail) {
        registerError.textContent = "All fields are required.";
        registerError.style.display = "block";

        // Add 'is-error' class to empty fields
        if (!userFirstName) firstName.classList.add("is-error");
        if (!userLastName) lastName.classList.add("is-error");
        if (!userEmail) email.classList.add("is-error");
        if (!username) registerUsername.classList.add("is-error");
        if (!password) registerPassword.classList.add("is-error");
        if (!confirmPwd) confirmPassword.classList.add("is-error");

        return;
    }

    if (!validateEmail(userEmail)) {
        registerError.textContent = "Please enter a valid email address.";
        registerError.style.display = "block";
        email.classList.add("is-error");
        return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        registerError.textContent = "Password must be at least 8 characters long and contain at least one symbol.";
        registerError.style.display = "block";
        registerPassword.classList.add("is-error");
        return;
    }

    if (password !== confirmPwd) {
        registerError.textContent = "Passwords do not match.";
        registerError.style.display = "block";
        registerPassword.classList.add("is-error");
        confirmPassword.classList.add("is-error");
        return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        registerError.textContent = "Username already exists.";
        registerError.style.display = "block";
        registerUsername.classList.add("is-error");
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

// Function to remove error classes and hide the error message
function clearErrorStyles() {
    firstName.classList.remove("is-error");
    lastName.classList.remove("is-error");
    email.classList.remove("is-error");
    registerUsername.classList.remove("is-error");
    registerPassword.classList.remove("is-error");
    confirmPassword.classList.remove("is-error");
    registerError.style.display = "none";
}

// Attach the same event listener to all relevant input fields
[firstName, lastName, email, registerUsername, registerPassword, confirmPassword].forEach(field => {
    field.addEventListener("input", clearErrorStyles);
});


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

    // Reset any previous error styling
    loginUsername.classList.remove("is-error");
    loginPassword.classList.remove("is-error");

    // Check if either field is blank
    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";

        // Add 'is-error' class to empty fields
        if (!username) loginUsername.classList.add("is-error");
        if (!password) loginPassword.classList.add("is-error");

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

        // Add 'is-error' class to both fields if credentials are wrong
        loginUsername.classList.add("is-error");
        loginPassword.classList.add("is-error");
    }
}

// Function to remove error styles and hide the error message
function clearLoginErrorStyles() {
    loginUsername.classList.remove("is-error");
    loginPassword.classList.remove("is-error");
    loginError.style.display = "none";
}

// Attach the same event listener to both login input fields
[loginUsername, loginPassword].forEach(field => {
    field.addEventListener("input", clearLoginErrorStyles);
});

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

        // Show the action buttons
        loginContainer.style.display = "none";
        actionButtons.style.display = "flex";
        resetScoresButton.style.display = "block";
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
    viewScoresButton.style.display = "block";
    quizSection.style.display = "none";
    scoreSection.style.display = "flex";
    scoreSection.style.flexWrap = "wrap";

    document.getElementById("scoreMessage").textContent = `You scored ${score} out of ${quizData.length}!`;

    const pastScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    const timestamp = new Date().toLocaleString(); // Get the current date and time
    pastScores.push({ score: score, total: quizData.length, date: timestamp });
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

function renderScores(pastScores) {
    pastScoresEl.innerHTML = pastScores.map(({ score, total, date }) => {
        return `<li>${score}/${total} - ${date}</li>`;
    }).join('');
}

// View past scores and enable sorting
viewScoresButton.addEventListener("click", () => {
    scoreSection.style.display = "none";
    quizSection.style.display = "none";

    viewScoresButton.style.display = "none";
    sortByDateButton.style.display = "block";
    sortByScoreButton.style.display = "block";
    pastScoresSection.style.display = "flex";
    pastScoresSection.style.flexDirection = "column";

    const pastScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    renderScores(pastScores);

    // Sort by Date (newest to oldest)
    sortByDateButton.addEventListener("click", () => {
        const sortedByDate = [...pastScores].sort((a, b) => new Date(b.date) - new Date(a.date));
        renderScores(sortedByDate);
    });

    // Sort by Score (highest to lowest)
    sortByScoreButton.addEventListener("click", () => {
        const sortedByScore = [...pastScores].sort((a, b) => b.score - a.score);
        renderScores(sortedByScore);
    });
});


resetScoresButton.addEventListener("click", () => {
    localStorage.removeItem("quizScores");

    alert("All past scores have been reset.");

    resetScoresButton.style.display = "none"; // Hide the reset button after action
});

// Back to quiz
backButton.addEventListener("click", () => {
    pastScoresSection.style.display = "none";
    scoreSection.style.display = "flex";
    scoreSection.style.flexDirection = "column";
});

// Initial load
window.onload = loadQuiz;