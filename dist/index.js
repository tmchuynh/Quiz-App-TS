import { quizData, quizOptions, isQuizDataKey, } from "./quizData.js";
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
function removeLeaderboardSection() {
    removeElementById("leaderboardContainer");
}
function removeLeaderboardSelection() {
    removeElementById("leaderboardSelection");
}
// Function to remove all sections dynamically
function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removeLeaderboardSection();
    removeLeaderboardSelection();
    removeDifficultySelectionSection();
    removeQuizSelectionSection();
    removePastScoresSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-default"); // Remove the dialog
}
// Function to create and append the registration form dynamically
function createRegisterSection() {
    var _b;
    const registerSection = document.createElement("div");
    registerSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "registeration-section", "space-y-2");
    registerSection.id = "registerSection";
    registerSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white my-3">Register</h2>
		<div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
			<div>
				<label for="firstName" class="block text-md/6 font-medium text-gray-900 dark:text-white">First Name:</label>
				<input type="text" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter first name" />
			</div>
			
			<div>
				<label for="lastName" class="block text-md/6 font-medium text-gray-900 dark:text-white">Last Name:</label>
				<input type="text" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter last name" />
			</div>
		</div>

		<div>
			<label for="email" class="block text-md/6 font-medium text-gray-900 dark:text-white">Email:</label>
			<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" />
		</div>
		
		<div>
			<label for="registerUsername" class="block text-md/6 font-medium text-gray-900 dark:text-white">Username:</label>
			<input type="text" id="registerUsername" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" autocomplete="username"/>
		</div>

		<div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
			<div>
				<label for="registerPassword" class="block text-md/6 font-medium text-gray-900 dark:text-white" data-popover-target="popover-password" data-popover-placement="bottom">Password:</label>

				<div class="relative">
					<input type="password" id="registerPassword" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" autocomplete="new-password"/>
					<!-- Popover Content -->
					<div id="popover-password" role="tooltip" class="absolute z-10 invisible text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
						<div class="p-3 space-y-2">
							<h3 class="font-semibold text-gray-900 dark:text-white">Password Requirements</h3>
							<ul>
								<li id="requirement-length" class="flex items-center mb-1">
									<svg class="requirement-icon w-3.5 h-3.5 me-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 16 12">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
									</svg>
									At least 8 characters (max 15)
								</li>
								<li id="requirement-uppercase" class="flex items-center mb-1">
									<svg class="requirement-icon w-3.5 h-3.5 me-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 16 12">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
									</svg>
									Includes one uppercase letter
								</li>
								<li id="requirement-lowercase" class="flex items-center mb-1">
									<svg class="requirement-icon w-3.5 h-3.5 me-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 16 12">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
									</svg>
									Includes one lowercase letter
								</li>
								<li id="requirement-number" class="flex items-center mb-1">
									<svg class="requirement-icon w-3.5 h-3.5 me-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 16 12">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
									</svg>
									Includes one number
								</li>
								<li id="requirement-special" class="flex items-center">
									<svg class="requirement-icon w-3.5 h-3.5 me-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 16 12">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
									</svg>
									Includes one special character
								</li>
							</ul>
						</div>
						<div data-popper-arrow></div>
					</div>
				</div>
			</div>
			
			<div>
				<label for="confirmPassword" class="block text-md/6 font-medium text-gray-900 dark:text-white">Retype Password:</label>
				<input type="password" id="confirmPassword" class="bg-gray-50 border border-gray-300 text-gray-900  text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Retype password" autocomplete="current-password"/>
			</div>
		</div>

	
		<div class="flex items-center mb-4 px-3">
			<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" value="" id="registerPasswordView">
			<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white " for="registerPasswordView">
				Show Password
			</label>
		</div>

		<button id="registerButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Register</button>
		<p id="registerError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;"></p>
    `;
    // Append the dynamically created register section to the loginContainer
    (_b = document.querySelector(".loginContainer")) === null || _b === void 0 ? void 0 : _b.appendChild(registerSection);
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
    // Initialize Popover
    initializePasswordPopover();
    // Real-time password validation
    registerPassword.addEventListener("input", () => {
        updatePasswordRequirements(registerPassword.value);
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
function initializePasswordPopover() {
    const passwordInput = document.getElementById("registerPassword");
    const popover = document.getElementById("popover-password");
    // Initialize Popper.js
    const popperInstance = Popper.createPopper(passwordInput, popover, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });
    // Show popover when password field is focused
    passwordInput.addEventListener('focus', () => {
        popover.classList.remove('invisible', 'opacity-0');
        popover.classList.add('visible', 'opacity-100');
        popperInstance.update();
    });
    // Hide popover when password field loses focus
    passwordInput.addEventListener('blur', () => {
        popover.classList.remove('visible', 'opacity-100');
        popover.classList.add('invisible', 'opacity-0');
    });
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
        showError("Password does not meet all requirements.", registerPassword);
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
    // Checks if email is already registered
    if (isEmailTaken(userEmail, users)) {
        showError("Email address is already registered.", email);
        return;
    }
    // Register the new user
    await registerUser(fields);
}
function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("mt-2");
        field.element.classList.remove("text-md");
        field.element.classList.remove("border-red-500");
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
    field.classList.add("border-red-500");
    field.classList.add("text-red-600");
    field.classList.add("dark:text-red-400");
}
function isValidPassword(password) {
    const requirements = {
        length: password.length >= 8 && password.length <= 15,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    // Return true only if all requirements are met
    return Object.values(requirements).every((value) => value === true);
}
function isUsernameTaken(username, users) {
    return users.some((user) => user.username === username);
}
function isEmailTaken(email, users) {
    return users.some((user) => user.email === email);
}
// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
function updatePasswordRequirements(password) {
    const requirements = {
        length: password.length >= 8 && password.length <= 15,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    updateRequirementItem("requirement-length", requirements.length);
    updateRequirementItem("requirement-uppercase", requirements.uppercase);
    updateRequirementItem("requirement-lowercase", requirements.lowercase);
    updateRequirementItem("requirement-number", requirements.number);
    updateRequirementItem("requirement-special", requirements.special);
}
function updateRequirementItem(itemId, isValid) {
    const item = document.getElementById(itemId);
    if (item) {
        const icon = item.querySelector(".requirement-icon");
        if (icon) {
            if (isValid) {
                // Change icon to checkmark
                icon.innerHTML = `
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917L5.724 10.5 15 1.5" />
                `;
                icon.classList.remove("text-gray-300", "dark:text-gray-400");
                icon.classList.add("text-green-400", "dark:text-green-500");
            }
            else {
                // Change icon to cross
                icon.innerHTML = `
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                `;
                icon.classList.remove("text-green-400", "dark:text-green-500");
                icon.classList.add("text-gray-300", "dark:text-gray-400");
            }
        }
    }
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
        email: fields[2].element.value.trim(),
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
    var _b;
    const loginSection = document.createElement("div");
    loginSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "login-section", "space-y-2");
    loginSection.id = "loginSection";
    loginSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white my-3">Login</h2>
		<div>
			<label for="loginUsername" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Username:</label>
			<input type="text" id="loginUsername" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" autocomplete="username"/>
		</div>
		
		<div>
			<label for="loginPassword" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password:</label>
			<input type="password" id="loginPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" autocomplete="current-password"/>
		</div>
		
		<div class="flex items-center mb-4 px-3">
			<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="checkbox" type="checkbox" value="" id="loginPasswordView">
			<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white" for="loginPasswordView">
				Show Password
			</label>
		</div>
		
		<button id="loginButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Login</button>
		<p id="loginError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;">Incorrect username or password.</p>
		`;
    loginContainer.appendChild(loginSection);
    (_b = document
        .querySelector("#loginButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", validateLoginForm);
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
                field.classList.add("border-red-500");
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
        field.classList.add("border-red-500");
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
    var _b;
    (_b = document.querySelector("#logoutButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
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
/**
 * Sorts an array of QuizOption objects by their label in ascending order.
 *
 * @param {QuizOption[]} arr - The array of QuizOption objects to be sorted.
 *
 * @returns {void} - The function does not return a value, but it modifies the input array in place.
 */
function sortQuizArrayByName(arr) {
    arr.sort((a, b) => a.label.localeCompare(b.label));
}
function createQuizSelection() {
    checkScoreHistory();
    const quizSelectionSection = document.createElement("div");
    quizSelectionSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "quiz-selection-section");
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
                var _b;
                sessionStorage.setItem("quizId", button.id);
                let quizData = button.id.split("_")[0].concat("Data");
                console.log(quizData);
                sessionStorage.setItem("quizData", quizData);
                const tempArray = (_b = sessionStorage
                    .getItem("quizId")) === null || _b === void 0 ? void 0 : _b.split("_")[0].split(/(?=[A-Z])/);
                if (tempArray) {
                    tempArray[0] =
                        tempArray[0].charAt(0).toUpperCase() +
                            tempArray[0].slice(1);
                    const quiz_type = tempArray.join(" ");
                    sessionStorage.setItem("quizType", quiz_type);
                }
                sessionStorage.setItem("quizId", quiz.id);
                promptForDifficulty(quiz.id);
            });
            quizOptionsContainer.appendChild(button);
        });
    }
}
/**
 * Prompts the user to select a difficulty level for a given quiz.
 *
 * @param {string} quizId - The ID of the quiz.
 *
 * @returns {void}
 */
function promptForDifficulty(quizId) {
    // Remove the quiz selection section
    removeElementById("quizSelectionSection");
    const difficultySection = document.createElement("div");
    const quiz_type = sessionStorage.getItem("quizType");
    difficultySection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "login-section", "space-y-2");
    difficultySection.id = "difficultySection";
    difficultySection.innerHTML = `
	  <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Select Difficulty Level for <br/> ${quiz_type}</h2>
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
            // Check if the quiz is already in progress at any difficulty level
            const progressItems = currentProgress.find((item) => item.quizId === quizId &&
                item.currentQuestion > 0 &&
                item.difficultyLevel == level);
            if (progressItems) {
                button.className =
                    "button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
            }
            else {
                button.className =
                    "button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";
            }
            button.addEventListener("click", () => {
                sessionStorage.setItem("difficultyLevel", level.toString());
                // Now load the quiz questions based on the selected difficulty
                console.log("Loading quiz questions", quizId, level);
                setupQuizData(quizId, level);
            });
            difficultyOptionsContainer.appendChild(button);
        }
    }
}
/**
 * Sets up the quiz data for the given quiz ID and difficulty level.
 *
 * @param {string} quizId - The ID of the quiz.
 * @param {number} difficultyLevel - The difficulty level of the quiz.
 *
 * @returns {void}
 */
function setupQuizData(quizId, difficultyLevel) {
    var _b;
    removeAllSections();
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    if (localStorage.getItem(userScoresKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
    if (!isQuizDataKey(quizId)) {
        console.error("Invalid quiz ID.");
        return;
    }
    // Find the quiz in the quizData array
    const quizItem = quizData.find((quiz) => quiz.id === quizId);
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
    const quizType = ((_b = quizOptions.find((option) => option.id === quizId)) === null || _b === void 0 ? void 0 : _b.label) || "Quiz";
    sessionStorage.setItem("quizType", quizType);
    // Proceed to load the quiz
    displayQuestion();
}
// Function to create and append the quiz section dynamically
function createQuizSection() {
    const quizSection = document.createElement("div");
    quizSection.classList.add("min-h-full", "h-full", "px-6", "py-4", "lg:px-8", "grid", "gap-4", "grid-cols-1", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "quiz-section");
    quizSection.id = "quizSection";
    quizSection.innerHTML = `
        <div class="question-container">
            <p id="question" class="text-2xl"></p>
        </div>
        <div id="answers" class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5"></div>
        <div class="w-full bg-transparent rounded-full p-6">
			<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%" id="quizProgressBar"></div>
		</div>
    `;
    displayContainer.appendChild(quizSection);
}
// Function to create and append the score section dynamically
function createScoreSection() {
    var _b;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Quiz Completed!</h2>
        <p id="scoreMessage" class="py-4"></p>
        <button id="retryButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800  retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_b = document
        .querySelector("#retryButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => returnToBeginning());
}
// Function to create the past scores section dynamically
function createPastScoresSection() {
    var _b;
    removeLeaderboardSection();
    removeLeaderboardSelection();
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "view-score-history");
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
    (_b = document.querySelector("#backButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
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
    var _b;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 col-span-2 space-y-2 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max ";
    actionButtons.innerHTML = `
		<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
		<button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg order-3">Select a Different Quiz</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    (_b = document
        .querySelector("#backToSelectionButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
}
function createScoresButtons() {
    var _b, _c, _d;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-2 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
    actionButtons.innerHTML = `
		<button id="viewScoresButton" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">View Past Scores</button>
		<button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 order-last">Logout</button>
    `;
    displayContainer.appendChild(actionButtons);
    if (!displayContainer.querySelector(".leaderboardSelection")) {
        actionButtons.innerHTML += `
		<button id="viewLeaderboardsButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Leaderboards</button>
		`;
    }
    const children = actionButtons.children.length;
    actionButtons.classList.add(`grid-cols-${children}`);
    logoutEventListener();
    (_b = document
        .querySelector("#backToSelectionButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    (_c = document
        .getElementById("viewLeaderboardsButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        removeAllSections();
        displayLeaderboardSelection();
    });
    (_d = document
        .querySelector("#viewScoresButton")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        removeElementById("quizSelectionSection");
        createSortButtons();
    });
}
function createSortButtons() {
    var _b, _c, _d, _e, _f, _g, _h;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
    const buttonClass = "text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 space-y-2";
    function createButton(id, text) {
        const button = document.createElement("button");
        button.id = id;
        button.className = buttonClass;
        button.textContent = text;
        return button;
    }
    const sortByQuizButton = createButton("sortByQuizButton", "Sort by Quiz");
    const sortByDateButton = createButton("sortByDateButton", "Sort by Date");
    const sortByScoreButton = createButton("sortByScoreButton", "Sort by Score");
    actionButtons.innerHTML = `
		<div class="gap-1 text-center auto-cols-max grid grid-cols-2 order-last">
			<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
			<button id="resetScoresButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Reset All Scores</button>
		</div>
	
		<button id="backToSelectionButton" class="text-white order-3 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		<div class="buttonGroup gap-1 text-center auto-cols-max grid grid-cols-3 order-2" id="sortingButtons">

        </div>
		<button id="viewLeaderboardsButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 order-4">View Leaderboards</button>

    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
    const buttonContainer = document.getElementById("sortingButtons");
    if (buttonContainer) {
        buttonContainer.appendChild(sortByQuizButton);
        buttonContainer.appendChild(sortByDateButton);
        buttonContainer.appendChild(sortByScoreButton);
    }
    actionButtons.innerHTML += `<div>
			<select id="filterByQuizDropdown" class="bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option value="Filter by Quiz" selected>Filter by Quiz</option>
					<!-- Quiz options will be added here dynamically -->
			</select>
			<div class="dateFilterGroup gap-3 my-auto text-center auto-cols-max grid grid-cols-2 py-1.5">
				<div class="gap-1 my-auto text-center auto-cols-max grid lg:grid-cols-1 grid-cols-2">
					<label for="startDateInput" class="text-black items-center flex lg:justify-center justify-end">Start Date:</label>
					<input type="date" id="startDateInput" class="bg-gray-200 text-black rounded-lg px-3 py-2">
				</div>
				<div class="gap-1 my-auto text-center auto-cols-max grid lg:grid-cols-1 grid-cols-2">
					<label for="endDateInput" class="text-black items-center flex lg:justify-center justify-end">End Date:</label>
					<input type="date" id="endDateInput" class="bg-gray-200 text-black rounded-lg px-3 py-2">
				</div>
			</div>
			<div class="gap-1 my-auto text-center auto-cols-max grid grid-cols-2">
				<button id="applyDateFilterButton" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Apply Date Filter</button>
				<button id="clearFiltersButton" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear Filters</button>
			</div>
		</div>`;
    // Get the current user ID
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");
    // Store filtered scores
    let filteredScores = [...pastScores];
    // Populate the dropdown with quiz names
    const quizNames = [
        ...new Set(pastScores.map((score) => score.quiz)),
    ];
    const filterByQuizDropdown = document.getElementById("filterByQuizDropdown");
    quizNames.forEach((quizName) => {
        const option = document.createElement("option");
        option.value = quizName;
        option.text = quizName;
        filterByQuizDropdown.appendChild(option);
    });
    (_b = document
        .getElementById("viewLeaderboardsButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeAllSections();
        displayLeaderboardSelection();
    });
    renderScores(filteredScores);
    // Event listener for dropdown change
    filterByQuizDropdown.addEventListener("change", () => {
        const selectedQuiz = filterByQuizDropdown.value;
        if (selectedQuiz) {
            filteredScores = pastScores.filter((score) => score.quiz === selectedQuiz);
        }
        else {
            // If no quiz selected (empty value), show all scores
            filteredScores = [...pastScores];
        }
        renderScores(filteredScores);
    });
    // Event listener for Apply Date Filter button
    const applyDateFilterButton = document.getElementById("applyDateFilterButton");
    applyDateFilterButton.addEventListener("click", () => {
        const startDateInput = document.getElementById("startDateInput");
        const endDateInput = document.getElementById("endDateInput");
        const startDateStr = startDateInput.value;
        const endDateStr = endDateInput.value;
        if (startDateStr && endDateStr) {
            if (startDateStr > endDateStr) {
                alert("End date must be on or after the start date.");
                return;
            }
            const startDate = new Date(startDateStr);
            const endDate = new Date(endDateStr);
            if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
                // Filter based on existing filteredScores to chain filters
                filteredScores = filteredScores.filter((score) => {
                    const scoreDate = new Date(score.date);
                    return scoreDate >= startDate && scoreDate <= endDate;
                });
                renderScores(filteredScores);
            }
            else {
                alert("Invalid date format. Please use the date picker.");
            }
        }
        else {
            alert("Please select both start and end dates.");
        }
    });
    // Sort by Quiz (alphabetically)
    (_c = document
        .querySelector("#sortByQuizButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        const sortedByQuiz = [...filteredScores].sort((a, b) => a.quiz.localeCompare(b.quiz));
        renderScores(sortedByQuiz);
        filteredScores = sortedByQuiz;
    });
    // Sort by Date (newest to oldest)
    (_d = document
        .querySelector("#sortByDateButton")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        const sortedByDate = [...filteredScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        renderScores(sortedByDate);
        filteredScores = sortedByDate;
    });
    // Sort by Score (highest to lowest)
    (_e = document
        .querySelector("#sortByScoreButton")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        const sortedByPercentage = [...filteredScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });
        renderScores(sortedByPercentage);
        filteredScores = sortedByPercentage;
    });
    // Clear Filters
    (_f = document
        .querySelector("#clearFiltersButton")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
        filteredScores = [...pastScores];
        filterByQuizDropdown.value = "Filter by Quiz"; // Reset dropdown selection
        // Reset date inputs
        document.getElementById("startDateInput").value = "";
        document.getElementById("endDateInput").value = "";
        renderScores(filteredScores);
    });
    (_g = document
        .querySelector("#backToSelectionButton")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    (_h = document
        .querySelector("#resetScoresButton")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
/**
 * Renders the quiz scores in a table format.
 *
 * @param {any[]} pastScores - An array of objects containing quiz scores.
 * Each object has the following properties:
 * - score: The number of correct answers.
 * - total: The total number of questions in the quiz.
 * - quiz: The name of the quiz.
 * - date: The date and time when the quiz was taken.
 *
 * The function removes existing sections, creates a new past scores section,
 * and dynamically generates table headers and rows for the scores.
 * It then inserts the table into the `#pastScores` element.
 */
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
				<th class="text-center">Quiz</th>
				<th class="text-center">Score</th>
				<th class="text-center">Percentage</th>
				<th class="scoreDate text-center">Date</th>
				<th class="scoreTime text-center">Time</th>
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
						<td class="border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${quiz}</td>
						<td class="border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${score} / ${total}</td>
						<td class="scorePercentage border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${percentage}%</td>
						<td class="scoreDate border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${formattedDate}</td>
						<td class="scoreDate border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${formattedTime}</td>
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
/**
 * Formats a date string to the hh:mm AM/PM format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string in hh:mm AM/PM format.
 */
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
/**
 * Formats a date string to the mm/dd/yy format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string in mm/dd/yy format.
 */
function formatDate(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11, so add 1
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year (yy)
    return `${month}/${day}/${year}`; // Return in mm/dd/yy format
}
function createDialog() {
    var _b, _c;
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
    (_b = document.getElementById("resetConfirm")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const currentUserId = sessionStorage.getItem("currentUserId");
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem("quizData");
        sessionStorage.removeItem("quizId");
        removeElementById("dialog"); // Close the dialog
        removeAllSections();
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_c = document.querySelector("#cancel-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        removeElementById("dialog"); // Close the dialog
    });
}
/**
 * Resets the quiz variables and returns to the beginning of the quiz.
 *
 * @remarks
 * This function clears the current question, score, and progress for the current quiz.
 * It also removes the current quiz's progress from the user's progress storage.
 *
 * @returns {void}
 */
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
    currentProgress = currentProgress.filter((item) => !(item.quizId === quizId &&
        item.difficultyLevel === difficultyLevel));
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
/**
 * Loads the quiz based on the current user's login status.
 *
 * @remarks
 * This function checks if a user is logged in. If not, it displays the login and registration sections.
 * If a user is logged in, it retrieves the user's information and displays a welcome message.
 * It also removes any existing sections and creates new ones based on the user's progress.
 *
 * @returns {void}
 */
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
    createQuizSelection();
}
function checkScoreHistory() {
    const currentUserId = sessionStorage.getItem("currentUserId");
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");
    if (pastScores) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }
}
/**
 * Loads the quiz progress from local storage and updates the current question and score.
 * If no progress is found, it starts from the beginning.
 *
 * @remarks
 * This function checks if the quiz section exists. If not, it creates a new quiz section.
 * It retrieves the current user's ID and quiz ID from local storage.
 * It then retrieves the user's progress from local storage and finds the progress for the current quiz.
 * If progress is found, it updates the current question and score.
 * If no progress is found, it starts from the beginning by setting the current question and score to 0.
 *
 * @returns {void}
 */
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
        currentProgress.push({
            currentQuestion,
            score,
            quizId,
            difficultyLevel,
        });
        sortProgressArray(currentProgress);
        localStorage.setItem(userProgressKey, JSON.stringify(currentProgress));
    }
}
/**
 * Sorts the progress array based on the quizId in ascending order.
 *
 * @param {ProgressItem[]} progressArray - The array of progress items to be sorted.
 *
 * @returns {void} - The function does not return any value.
 *
 * @remarks
 * This function sorts the progress array in ascending order based on the quizId.
 * It uses the Array.sort() method with a custom comparison function.
 */
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
/**
 * Displays the current question to the user interface.
 *
 * @remarks
 * This function retrieves the quiz data and current question from session storage.
 * It then checks if the quiz data and current question are valid.
 * If they are, it creates a new question element and updates the progress bar.
 * If the current question is out of bounds, it shows the final score.
 *
 * @returns {void}
 */
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
/**
 * Updates the progress bar based on the current question and total questions.
 *
 * @remarks
 * This function retrieves the progress bar element from the DOM, calculates the progress percentage,
 * logs the progress percentage to the console, updates the width of the progress bar, and saves the progress.
 *
 * @returns {void} - The function does not return any value.
 */
function updateProgressBar() {
    const progressBar = document.getElementById("quizProgressBar");
    const progressValue = ((currentQuestion + 1) / totalQuestions) * 100; // Calculate percentage
    console.log(`Progress: ${progressValue}`);
    progressBar.style.width = String(`${progressValue}%`); // Update the value of the progress bar
    // Save current progress
    saveProgress();
}
/**
 * Saves the current progress of the user to local storage.
 *
 * @remarks
 * This function retrieves the user's ID, quiz ID, and difficulty level from session storage.
 * It then retrieves the current progress from local storage or creates a new array if none exists.
 * It finds the index of the current quiz in the progress array and updates the progress if found.
 * If not found, it adds a new progress item to the array.
 * The progress array is then sorted alphabetically by quiz ID and difficulty level.
 * Finally, the updated progress array is saved back to local storage.
 *
 * @returns {void} - The function does not return any value.
 */
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
        currentProgress.push({
            currentQuestion,
            score,
            quizId,
            difficultyLevel,
        });
    }
    // Sort the array alphabetically by quizId and difficultyLevel
    sortProgressArray(currentProgress);
    localStorage.setItem(userProgressKey, JSON.stringify(currentProgress));
}
/**
 * Checks the selected answer and updates the score and current question.
 *
 * @param {number} selectedAnswerIndex - The index of the selected answer in the question's answers array.
 *
 * @returns {void} - The function does not return any value.
 *
 * @remarks
 * This function retrieves the current quiz data from session storage.
 * It then checks if the current quiz data is available. If not, it logs an error message and returns.
 * It retrieves the question and selected answer from the current quiz data.
 * It logs the selected answer index and the selected answer for debugging purposes.
 * If the selected answer is correct, it increments the score.
 * It increments the current question.
 * It saves the updated progress.
 * Finally, it displays the next question.
 */
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
/**
 * Displays the final score and updates the user's scores.
 *
 * @remarks
 * This function retrieves the current quiz data from session storage.
 * It then checks if the current quiz data is available. If not, it logs an error message and returns.
 * It retrieves the question and selected answer from the current quiz data.
 * It logs the selected answer index and the selected answer for debugging purposes.
 * If the selected answer is correct, it increments the score.
 * It increments the current question.
 * It saves the updated progress.
 * Finally, it displays the score message with the most recent score.
 *
 * @returns {void} - The function does not return any value.
 */
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
    const quizItem = quizData.find((quiz) => quiz.id === quizId);
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
/**
 * Displays a selection of quizzes to view leaderboards.
 * Fetches all quiz names from the stored data and creates buttons for each quiz.
 * Adds a back button to return to the quiz selection.
 */
function displayLeaderboardSelection() {
    removeAllSections();
    checkScoreHistory();
    const selectionContainer = document.createElement('section');
    selectionContainer.id = 'leaderboardSelection';
    selectionContainer.classList.add("selectionContainer", "flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12");
    // Fetch all quiz names from the stored data
    const quizNames = getAllQuizNames();
    // Create a heading
    const heading = document.createElement('h2');
    heading.textContent = 'Select a Quiz to View Leaderboard';
    heading.className = 'text-center text-4xl py-5 font-extrabold dark:text-white';
    selectionContainer.appendChild(heading);
    const leaderboardOptions = document.createElement("div");
    leaderboardOptions.id = 'leaderboardOptions';
    leaderboardOptions.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3";
    selectionContainer.appendChild(leaderboardOptions);
    // Create buttons for each quiz
    quizNames.forEach((quizName) => {
        const button = document.createElement('button');
        button.textContent = quizName;
        button.className = 'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 m-2';
        button.addEventListener('click', () => {
            removeAllSections();
            displayLeaderboard(quizName);
        });
        leaderboardOptions.appendChild(button);
    });
    // Add a back button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.className = 'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 m-2';
    backButton.addEventListener('click', () => {
        removeAllSections();
        createQuizSelection();
    });
    selectionContainer.appendChild(backButton);
    displayContainer.appendChild(selectionContainer);
}
function displayLeaderboard(quizName) {
    removeAllSections();
    checkScoreHistory();
    const leaderboardContainer = document.createElement('section');
    leaderboardContainer.id = 'leaderboardContainer';
    leaderboardContainer.classList.add("flex", "min-h-full", "flex-col", "justify-center", "items-stretch", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "leaderboardContainer");
    // Create a heading
    const heading = document.createElement('h2');
    heading.textContent = `Leaderboard for ${quizName}`;
    heading.className = 'text-center text-4xl py-5 font-extrabold dark:text-white';
    leaderboardContainer.appendChild(heading);
    // Get leaderboard data organized by level
    const leaderboardDataByLevel = getLeaderboardDataByLevel(quizName);
    console.log(leaderboardDataByLevel);
    // Loop over each level and create a table
    const levels = Array.from(leaderboardDataByLevel.keys()).sort((a, b) => a - b);
    levels.forEach((level) => {
        const tableHeading = document.createElement('h3');
        tableHeading.textContent = `Level ${level}`;
        tableHeading.className = "text-xl pt-3";
        leaderboardContainer.appendChild(tableHeading);
        // Create a table to display the leaderboard
        const table = document.createElement('table');
        table.className = 'w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-100';
        // Table header
        const thead = document.createElement('thead');
        thead.className = "text-md text-white uppercase bg-gray-400 dark:bg-gray-700";
        const headerRow = document.createElement('tr');
        const rankHeader = document.createElement('th');
        rankHeader.textContent = 'Rank';
        rankHeader.className = 'py-1 text-center';
        const userHeader = document.createElement('th');
        userHeader.textContent = 'User';
        userHeader.className = 'py-1 text-center';
        const scoreHeader = document.createElement('th');
        scoreHeader.textContent = 'Score';
        scoreHeader.className = 'py-1 text-center';
        const dateHeader = document.createElement('th');
        dateHeader.textContent = 'Date';
        dateHeader.className = 'py-1 text-center';
        const dateTimeHeader = document.createElement('th');
        dateTimeHeader.textContent = 'Time';
        dateTimeHeader.className = 'py-1 text-center';
        headerRow.appendChild(rankHeader);
        headerRow.appendChild(userHeader);
        headerRow.appendChild(scoreHeader);
        headerRow.appendChild(dateHeader);
        headerRow.appendChild(dateTimeHeader);
        thead.appendChild(headerRow);
        table.appendChild(thead);
        // Table body
        const tbody = document.createElement('tbody');
        const entries = leaderboardDataByLevel.get(level);
        entries.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.className = "bg-white hover:bg-gray-200 dark:hover:bg-slate-700 border-b dark:bg-gray-800 dark:border-gray-700";
            const rankCell = document.createElement('td');
            rankCell.textContent = (index + 1).toString();
            rankCell.className = 'border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center';
            const userCell = document.createElement('td');
            userCell.textContent = entry.username;
            userCell.className = 'border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center';
            const scoreCell = document.createElement('td');
            scoreCell.textContent = `${entry.score}%`;
            scoreCell.className = 'border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center';
            const dateCell = document.createElement('td');
            dateCell.textContent = formatDate(entry.date);
            dateCell.className = 'border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center';
            const timeCell = document.createElement('td');
            timeCell.textContent = formatTime(entry.date);
            timeCell.className = 'border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center';
            row.appendChild(rankCell);
            row.appendChild(userCell);
            row.appendChild(scoreCell);
            row.appendChild(dateCell);
            row.append(timeCell);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        leaderboardContainer.appendChild(table);
    });
    // Add a back button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.className =
        'text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-4';
    backButton.addEventListener('click', () => {
        removeAllSections();
        displayLeaderboardSelection();
    });
    leaderboardContainer.appendChild(backButton);
    displayContainer.appendChild(leaderboardContainer);
}
function getAllQuizNames() {
    const quizNamesSet = new Set();
    // Iterate over localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('quizScores_')) {
            const scores = JSON.parse(localStorage.getItem(key) || '[]');
            scores.forEach((score) => {
                quizNamesSet.add(score.quiz);
            });
        }
    }
    return Array.from(quizNamesSet).sort();
}
/**
 * Retrieves leaderboard data for each difficulty level of a specific quiz.
 *
 * @param {string} quizName - The name of the quiz.
 *
 * @returns {Map<number, LeaderboardEntry[]>} - A map where the keys are difficulty levels and the values are arrays of leaderboard entries.
 * Each leaderboard entry contains the username, score, and date.
 *
 * @remarks
 * This function retrieves user scores from localStorage and organizes them by difficulty level.
 * It filters scores for the selected quiz and calculates the percentage score for each user.
 * It then sorts each level's leaderboard data by score in descending order.
 */
function getLeaderboardDataByLevel(quizName) {
    const leaderboardDataByLevel = new Map();
    // Retrieve users array from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // Create a map of user IDs to usernames for quick lookup
    const userIdToUsernameMap = new Map();
    users.forEach((user) => {
        userIdToUsernameMap.set(user.id, user.username);
    });
    // Iterate over localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('quizScores_')) {
            const userId = key.replace('quizScores_', '');
            const scores = JSON.parse(localStorage.getItem(key) || '[]');
            console.log("userId: ", userId);
            console.log("scores: ", scores);
            console.log("level:", scores[i].difficultyLevel);
            // Filter scores for the selected quiz
            const quizScores = scores.filter((score) => score.quiz === quizName);
            console.log("quizScores: ", quizScores);
            if (quizScores.length > 0) {
                // Organize scores by level for this user
                const scoresByLevel = new Map();
                quizScores.forEach((s) => {
                    const percentage = (s.score / s.total) * 100;
                    const existingEntry = scoresByLevel.get(s.difficultyLevel);
                    if (!existingEntry || percentage > existingEntry.score) {
                        scoresByLevel.set(s.difficultyLevel, {
                            score: percentage,
                            date: s.date,
                            level: s.difficultyLevel,
                        });
                    }
                });
                // Get the username from the users array
                const username = userIdToUsernameMap.get(userId) || 'Unknown User';
                // Update the leaderboard data by level
                scoresByLevel.forEach((value, level) => {
                    const entry = {
                        username,
                        score: Math.round(value.score),
                        date: value.date,
                        level: value.level
                    };
                    if (!leaderboardDataByLevel.has(level)) {
                        leaderboardDataByLevel.set(level, []);
                    }
                    leaderboardDataByLevel.get(level).push(entry);
                    const _a = leaderboardDataByLevel.get(level);
                    console.log(_a);
                });
            }
        }
    }
    // Sort each level's leaderboard data by score descending
    leaderboardDataByLevel.forEach((entries) => {
        entries.sort((a, b) => b.score - a.score);
    });
    return leaderboardDataByLevel;
}
/**
 * Checks if the user has completed the current quiz.
 *
 * @param {string} currentUserId - The ID of the current user.
 *
 * @returns {boolean} - Returns true if the user has completed the current quiz, false otherwise.
 *
 * @remarks
 * This function retrieves the current quiz progress from local storage.
 * It then checks if the current quiz ID exists in the progress array.
 * If the quiz ID is found, it further checks if the current question number is equal to the total number of questions.
 * If both conditions are met, it returns true, indicating that the user has completed the current quiz.
 * Otherwise, it returns false.
 */
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