import { hashPassword, removeAllSections, showError, initializePasswordPopover, isValidPassword, } from "./utilities.js";
// export function to create and append the registration form dynamically
export function createRegisterSection() {
    var _a;
    removeAllSections();
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
    const passwordInput = document.getElementById("registerPassword");
    // Initialize Popover
    initializePasswordPopover(passwordInput);
    // Real-time password validation
    registerPassword.addEventListener("input", () => {
        updatePasswordRequirements(registerPassword.value);
    });
    const checkbox = registerSection.querySelector("#registerPasswordView");
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
// export function to remove error classes and hide the error message
export function clearErrorStyles() {
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
        field.classList.remove("text-md");
        field.classList.remove("text-red-600");
        field.classList.remove("dark:text-red-400");
    }); // Remove error class from all fields
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none"; // Hide error message
}
export function getRegisterFormFields() {
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
// Validate registration form
export async function validateRegistrationForm() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword, } = getRegisterFormFields();
    const fields = [
        { element: firstName, name: "First name" },
        { element: lastName, name: "Last name" },
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
export function toTitleCase(str) {
    return str.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}
// export function to generate a unique ID
export function generateUniqueId() {
    return getRandomLetter() + getRandomLetter() + "_" + uuidv4();
}
// Generates a random uppercase letter from the English alphabet.
export function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet.charAt(randomIndex);
}
/**
 * Generates a universally unique identifier (UUID) version 4.
 *
 * The UUID is generated using a cryptographically secure pseudorandom number generator.
 * The generated UUID is a 36-character string consisting of hexadecimal digits.
 *
 * @returns {string} - A UUID version 4.
 */
export function uuidv4() {
    return "1002000300".replace(/[0168]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(20));
}
export async function registerUser(fields) {
    // Hash the password before storing it
    const hashedPassword = await hashPassword(fields[4].element.value.trim());
    const newUser = {
        id: generateUniqueId(),
        firstName: toTitleCase(fields[0].element.value.trim()),
        lastName: toTitleCase(fields[1].element.value.trim()),
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
export function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("text-md");
        field.element.classList.remove("text-red-600");
        field.element.classList.remove("dark:text-red-400");
    });
}
export function isUsernameTaken(username, users) {
    return users.some((user) => user.username === username);
}
export function isEmailTaken(email, users) {
    return users.some((user) => user.email === email);
}
// Validate email format
export function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
export function updatePasswordRequirements(password) {
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
/**
 * Updates the requirement item's icon based on the validity of the password requirement.
 *
 * @param itemId - The ID of the requirement item.
 * @param isValid - A boolean indicating whether the password requirement is valid.
 */
export function updateRequirementItem(itemId, isValid) {
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
//# sourceMappingURL=registration.js.map