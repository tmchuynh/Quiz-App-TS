import {
    hashPassword,
    removeAllSections,
    showError,
    initializePasswordPopover,
    isValidPassword,
} from "./utilities.js";
import { createRegisterSection } from "./registration.js";
import { loginContainer, displayContainer, loadQuiz } from "./index.js";
import { User } from "./interfaces";

// Function to create and append the login form dynamically
export function createLoginSection(): void {
    const loginSection = document.createElement( "div" );
    loginSection.classList.add(
        "flex",
        "min-h-full",
        "flex-col",
        "justify-center",
        "px-6",
        "py-4",
        "lg:px-8",
        "container",
        "border-4",
        "border-gray-200",
        "dark:border-gray-100",
        "dark:bg-gray-800",
        "dark:text-white",
        "rounded-2xl",
        "mx-auto",
        "my-4",
        "col-span-12",
        "lg:col-span-6",
        "w-full",
        "lg:w-11/12",
        "login-section",
        "space-y-2"
    );
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
		
		<div class="flex justify-between items-center">
			<div class="flex items-center px-3">
				<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="checkbox" type="checkbox" value="" id="loginPasswordView">
				<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white" for="loginPasswordView">
					Show Password
				</label>
			</div>
			<a href="#" id="forgotPasswordLink" class="text-blue-500 hover:underline">Forgot Password?</a>
		</div>

		<button id="loginButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Login</button>
		<p id="loginError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;">Incorrect username or password.</p>
		`;
    loginContainer.appendChild( loginSection );
    document
        .querySelector( "#loginButton" )
        ?.addEventListener( "click", validateLoginForm );
    loginSection.addEventListener( "keydown", ( event: KeyboardEvent ) => {
        if ( event.key === "Enter" ) {
            validateLoginForm();
        }
    } );

    const loginUsername = document.getElementById(
        "loginUsername"
    ) as HTMLInputElement;
    const loginPassword = document.getElementById(
        "loginPassword"
    ) as HTMLInputElement;

    // Attach the same event listener to both login input fields
    [loginUsername, loginPassword].forEach( ( field ) => {
        field.addEventListener( "input", clearLoginErrorStyles );
    } );

    const checkbox = loginContainer.querySelector(
        "#loginPasswordView"
    ) as HTMLInputElement;

    const passwordElement = document.querySelector( "#loginPassword" );
    checkbox?.addEventListener( "change", function ( this: HTMLInputElement ) {
        if ( passwordElement ) {
            if ( this.checked ) {
                passwordElement.setAttribute( "type", "text" );
            } else {
                passwordElement.setAttribute( "type", "password" );
            }
        }
    } );

    document
        .getElementById( "forgotPasswordLink" )
        ?.addEventListener( "click", ( event ) => {
            event.preventDefault();
            displayPasswordResetRequestForm();
        } );
}

// Request password reset form
function displayPasswordResetRequestForm(): void {
    removeAllSections();

    const resetRequestSection = document.createElement( "div" );
    resetRequestSection.id = "resetRequestSection";
    resetRequestSection.classList.add(
        "flex",
        "min-h-full",
        "flex-col",
        "justify-center",
        "px-6",
        "py-4",
        "lg:px-8",
        "container",
        "border-4",
        "border-gray-200",
        "dark:border-gray-100",
        "dark:bg-gray-800",
        "dark:text-white",
        "rounded-2xl",
        "mx-auto",
        "my-4",
        "col-span-9",
        "w-full",
        "lg:w-11/12",
        "reset-password-form",
        "space-y-2"
    );

    resetRequestSection.innerHTML = `
		<h2 class="text-2xl font-bold mb-4">Reset Password</h2>
		<p class="mb-4">Please enter your username or email address. You will receive a confirmation code to reset your password.</p>
		<form id="resetRequestForm" class="space-y-4">
		<input type="text" id="usernameOrEmail" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username or Email" />
		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Confirmation Code</button>
		</form>
		<a href="#" id="returnToLogin" class="text-blue-500 hover:underline">Return to Registration/Login</a>
		<p id="resetRequestError" class="text-red-500 mt-2" style="display: none;"></p>
	`;

    displayContainer.appendChild( resetRequestSection );

    // Attach event listener to the form submission
    document
        .getElementById( "resetRequestForm" )
        ?.addEventListener( "submit", handleResetRequest );

    document
        .getElementById( "returnToLogin" )
        ?.addEventListener( "click", ( event ) => {
            event.preventDefault();
            removeAllSections();
            createRegisterSection();
            createLoginSection();
        } );
}

/**
 * Handles the submission of the reset request form.
 *
 * @param {Event} event - The event object representing the form submission.
 *
 * @returns {void}
 */
function handleResetRequest( event: Event ): void {
    event.preventDefault();

    // Get the username or email from the input field
    const usernameOrEmailInput = document.getElementById(
        "usernameOrEmail"
    ) as HTMLInputElement;
    const usernameOrEmail = usernameOrEmailInput.value.trim();

    // Get the error message element
    const resetRequestError = document.getElementById(
        "resetRequestError"
    ) as HTMLElement;

    // Hide the error message by default
    resetRequestError.style.display = "none";

    // Validate the username or email input
    if ( !usernameOrEmail ) {
        resetRequestError.textContent = "Please enter your username or email.";
        resetRequestError.style.display = "block";
        return;
    }

    // Retrieve users from localStorage
    const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );

    // Find the user with the provided username or email
    const user = users.find(
        ( u ) => u.username === usernameOrEmail || u.email === usernameOrEmail
    );

    // Validate the user
    if ( !user ) {
        resetRequestError.textContent = "User not found.";
        resetRequestError.style.display = "block";
        return;
    }

    // Generate a confirmation code
    const confirmationCode = generateConfirmationCode();

    // Store the confirmation code and expiration time in cookies (expires in 15 minutes)
    const resetData = {
        userId: user.id,
        confirmationCode,
        expiresAt: Date.now() + 900000, // 15 minutes from current time
    };
    setCookie( "passwordResetData", JSON.stringify( resetData ), 1 );

    // Display the confirmation code in a Tailwind CSS modal
    displayConfirmationCodeModal( confirmationCode );
}

// Generates a 6-digit code
function generateConfirmationCode(): string {
    return Math.floor( 100000 + Math.random() * 900000 ).toString();
}

function displayConfirmationCodeModal( confirmationCode: string ): void {
    // Create modal overlay
    const modalOverlay = document.createElement( "div" );
    modalOverlay.id = "modalOverlay";
    modalOverlay.className =
        "fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50";

    // Create modal content
    const modalContent = document.createElement( "div" );
    modalContent.className =
        "bg-white dark:bg-gray-800 rounded-lg p-6 mx-4 max-w-md w-full";

    modalContent.innerHTML = `
	  <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-white">Confirmation Code</h2>
	  <p class="mb-4 text-gray-600 dark:text-gray-300">A confirmation code has been "sent" to your email. Please use the code below to reset your password. (Note: In a real application, this code would be sent via email.)</p>
	  <div class="text-center mb-4">
		<span class="text-3xl font-semibold text-gray-800 dark:text-white">${ confirmationCode }</span>
	  </div>
	  <button id="closeModalButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
	`;

    // Append modal content to overlay
    modalOverlay.appendChild( modalContent );

    // Append overlay to body
    document.body.appendChild( modalOverlay );

    // Add event listener to close the modal
    document
        .getElementById( "closeModalButton" )
        ?.addEventListener( "click", () => {
            // Remove the modal from the DOM
            document.body.removeChild( modalOverlay );
            // Proceed to confirmation code entry form
            displayConfirmationCodeForm();
        } );
}

function displayConfirmationCodeForm(): void {
    removeAllSections();

    const confirmationCodeSection = document.createElement( "div" );
    confirmationCodeSection.id = "confirmationCodeSection";
    confirmationCodeSection.classList.add(
        "flex",
        "min-h-full",
        "flex-col",
        "justify-center",
        "px-6",
        "py-4",
        "lg:px-8",
        "container",
        "border-4",
        "border-gray-200",
        "dark:border-gray-100",
        "dark:bg-gray-800",
        "dark:text-white",
        "rounded-2xl",
        "mx-auto",
        "my-4",
        "col-span-9",
        "w-full",
        "lg:w-11/12",
        "confirmation-code-section",
        "space-y-2"
    );

    confirmationCodeSection.innerHTML = `
	  <h2 class="text-2xl font-bold mb-4">Enter Confirmation Code</h2>
	  <p class="mb-4">A confirmation code has been sent to your email. Please enter it below.</p>
	  <form id="confirmationCodeForm" class="space-y-4">
		<input type="text" id="confirmationCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirmation Code" />
		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify Code</button>
	  </form>
	  <p id="confirmationCodeError" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800" style="display: none;"></p>
	`;

    displayContainer.appendChild( confirmationCodeSection );

    // Attach event listener to the form submission
    document
        .getElementById( "confirmationCodeForm" )
        ?.addEventListener( "submit", handleConfirmationCodeSubmission );
}

/**
 * Handles the submission of the confirmation code for password reset.
 *
 * @param {Event} event - The event object representing the form submission.
 *
 * @returns {void}
 */
function handleConfirmationCodeSubmission( event: Event ): void {
    event.preventDefault();

    const confirmationCodeInput = document.getElementById(
        "confirmationCode"
    ) as HTMLInputElement;
    const confirmationCode = confirmationCodeInput.value.trim();
    const confirmationCodeError = document.getElementById(
        "confirmationCodeError"
    ) as HTMLElement;

    confirmationCodeError.style.display = "none";

    if ( !confirmationCode ) {
        confirmationCodeError.textContent =
            "Please enter the confirmation code.";
        confirmationCodeError.style.display = "block";
        return;
    }

    // Retrieve reset data from cookies
    const resetDataString = getCookie( "passwordResetData" );
    if ( !resetDataString ) {
        confirmationCodeError.textContent = "No password reset request found.";
        confirmationCodeError.style.display = "block";
        return;
    }

    const resetData = JSON.parse( resetDataString );

    // Check if the code matches and is not expired
    if ( confirmationCode !== resetData.confirmationCode ) {
        confirmationCodeError.textContent = "Invalid confirmation code.";
        confirmationCodeError.style.display = "block";
        return;
    }

    if ( Date.now() > resetData.expiresAt ) {
        confirmationCodeError.textContent = "Confirmation code has expired.";
        confirmationCodeError.style.display = "block";
        deleteCookie( "passwordResetData" );
        return;
    }

    // Proceed to new password form
    displayNewPasswordForm();
}

function displayNewPasswordForm(): void {
    removeAllSections();

    const newPasswordSection = document.createElement( "div" );
    newPasswordSection.id = "newPasswordSection";
    newPasswordSection.classList.add(
        "flex",
        "min-h-full",
        "flex-col",
        "justify-center",
        "px-6",
        "py-4",
        "lg:px-8",
        "container",
        "border-4",
        "border-gray-200",
        "dark:border-gray-100",
        "dark:bg-gray-800",
        "dark:text-white",
        "rounded-2xl",
        "mx-auto",
        "my-4",
        "col-span-9",
        "w-full",
        "lg:w-11/12",
        "new-password-section",
        "space-y-2"
    );

    newPasswordSection.innerHTML = `
	  <h2 class="text-2xl font-bold mb-4">Reset Password</h2>
	  <form id="newPasswordForm" class="space-y-4">
		<div class="relative">

			<input type="password" id="newPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" autocomplete="new-password"/>

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

		<input type="password" id="confirmNewPassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm New Password" autocomplete="new-password"/>
		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Reset Password</button>

		<div class="flex items-center mb-4 px-3">
			<input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" value="" id="newPasswordView">
			<label class="form-check-label ms-2 text-md font-medium text-gray-900 dark:text-white " for="newPasswordView">
				Show Password
			</label>
		</div>
	  </form>
	  <p id="newPasswordError" class="text-red-500 mt-2" style="display: none;"></p>
	`;

    displayContainer.appendChild( newPasswordSection );

    const newPassword = document.getElementById(
        "newPassword"
    ) as HTMLInputElement;

    // Initialize Popover
    initializePasswordPopover( newPassword );

    // Attach event listener to the form submission
    document
        .getElementById( "newPasswordForm" )
        ?.addEventListener( "submit", handleNewPasswordSubmission );

    const checkbox = newPasswordSection.querySelector(
        "#newPasswordView"
    ) as HTMLInputElement;
    const passwordElement = document.querySelector( "#newPassword" );
    const confirmPasswordElement = document.querySelector(
        "#confirmNewPassword"
    );

    console.log(
        "passwordElement:",
        passwordElement,
        "confirmPasswordElement:",
        confirmPasswordElement,
        "checkbox",
        checkbox
    );

    checkbox?.addEventListener( "change", function ( this: HTMLInputElement ) {
        if ( passwordElement && confirmPasswordElement ) {
            if ( this.checked ) {
                passwordElement.setAttribute( "type", "text" );
                confirmPasswordElement.setAttribute( "type", "text" );
            } else {
                passwordElement.setAttribute( "type", "password" );
                confirmPasswordElement.setAttribute( "type", "password" );
            }
        }
    } );
}

/**
 * Handles the submission of a new password. Validates the password, checks for password match,
 * validates password strength, and updates the user's password if all checks pass.
 *
 * @param {Event} event - The event object representing the form submission.
 *
 * @returns {Promise<void>} - A promise that resolves when the password reset is successful.
 *
 * @throws Will throw an error if the password does not meet the requirements or if the user is not found.
 */
async function handleNewPasswordSubmission( event: Event ): Promise<void> {
    event.preventDefault();

    const newPasswordInput = document.getElementById(
        "newPassword"
    ) as HTMLInputElement;
    const confirmNewPasswordInput = document.getElementById(
        "confirmNewPassword"
    ) as HTMLInputElement;
    const newPasswordError = document.getElementById(
        "newPasswordError"
    ) as HTMLElement;

    const newPassword = newPasswordInput.value.trim();
    const confirmNewPassword = confirmNewPasswordInput.value.trim();

    newPasswordError.style.display = "none";

    if ( !newPassword || !confirmNewPassword ) {
        showError(
            "Please enter and confirm your new password",
            newPasswordError
        );
        return;
    }

    if ( newPassword !== confirmNewPassword ) {
        showError( "Passwords do not match.", newPasswordInput );
        showError( "Passwords do not match.", confirmNewPasswordInput );
        return;
    }

    // Validate password strength
    if ( !isValidPassword( newPassword ) ) {
        newPasswordError.textContent =
            "Password does not meet the requirements.";
        newPasswordError.style.display = "block";
        return;
    }

    // Retrieve reset data from cookies
    const resetDataString = getCookie( "passwordResetData" );
    if ( !resetDataString ) {
        newPasswordError.textContent = "No password reset request found.";
        newPasswordError.style.display = "block";
        return;
    }

    const resetData = JSON.parse( resetDataString );

    // Retrieve users from localStorage
    const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );
    const userIndex = users.findIndex( ( u ) => u.id === resetData.userId );

    if ( userIndex === -1 ) {
        newPasswordError.textContent = "User not found.";
        newPasswordError.style.display = "block";
        return;
    }

    if ( ( await hashPassword( newPassword ) ) === users[userIndex].password ) {
        newPasswordError.textContent = "Cannot use an old password.";
        newPasswordError.style.display = "block";
        return;
    }

    // Update the user's password
    users[userIndex].password = await hashPassword( newPassword );

    // Save the updated users array to localStorage
    localStorage.setItem( "users", JSON.stringify( users ) );

    // Remove the reset data from cookies
    deleteCookie( "passwordResetData" );

    // Password reset successful
    alert(
        "Your password has been reset. Please log in with your new password."
    );
    removeAllSections();
    createLoginSection();
}

/**
 * Sets a cookie with the given name, value, and expiration time.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} expiresInHours - The number of hours until the cookie expires.
 *
 * @returns {void} - The function does not return a value.
 */
function setCookie( name: string, value: string, expiresInHours: number ): void {
    const date = new Date();
    date.setTime( date.getTime() + expiresInHours * 60 * 60 * 1000 );
    const expires = `expires=${ date.toUTCString() }`;
    document.cookie = `${ name }=${ encodeURIComponent(
        value
    ) }; ${ expires }; path=/`;
}

/**
 * Retrieves a cookie with the given name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 *
 * @returns {string | null} - The value of the cookie if it exists, or null if the cookie does not exist.
 */
function getCookie( name: string ): string | null {
    const cname = `${ name }=`;
    const decodedCookie = decodeURIComponent( document.cookie );
    const ca = decodedCookie.split( ";" );
    for ( let c of ca ) {
        c = c.trim();
        if ( c.indexOf( cname ) === 0 ) {
            return c.substring( cname.length, c.length );
        }
    }
    return null;
}

/**
 * Deletes a cookie with the given name.
 *
 * @param {string} name - The name of the cookie to delete.
 *
 * @returns {void} - The function does not return a value.
 */
function deleteCookie( name: string ): void {
    document.cookie = `${ name }=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to remove error classes and hide the login error message
function clearLoginErrorStyles(): void {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const fields = [loginUsername, loginPassword];

    // Remove error class from both fields
    fields.forEach( ( field ) => {
        field.classList.remove( "text-md" );
        field.classList.remove( "text-red-600" );
        field.classList.remove( "dark:text-red-400" );
    } );

    // Hide error message
    const loginError = document.getElementById( "loginError" ) as HTMLElement;
    loginError.style.display = "none";
}

function getLoginFormFields(): {
    loginUsername: HTMLInputElement;
    loginPassword: HTMLInputElement;
} {
    const loginUsername = document.getElementById(
        "loginUsername"
    ) as HTMLInputElement;
    const loginPassword = document.getElementById(
        "loginPassword"
    ) as HTMLInputElement;
    return { loginUsername, loginPassword };
}

// Validate login form
async function validateLoginForm(): Promise<void> {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    // Reset error styles for both fields
    const fields = [loginUsername, loginPassword];
    fields.forEach( ( field ) => {
        field.classList.remove( "text-md" );
        field.classList.remove( "text-red-600" );
        field.classList.remove( "dark:text-red-400" );
    } );
    const loginError = document.getElementById( "loginError" ) as HTMLElement;

    loginError.style.display = "none";

    // Check if either field is blank
    if ( !username || !password ) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";

        // Add '' class to empty fields
        fields.forEach( ( field ) => {
            if ( !field.value.trim() ) {
                field.classList.add( "text-md" );
                field.classList.add( "text-red-600" );
                field.classList.add( "dark:text-red-400" );
            }
        } );

        return;
    }

    // Retrieve users from localStorage
    const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );

    // Hash the entered password for comparison
    const hashedPassword = await hashPassword( password );

    // Find the user with matching username and hashed password
    const user = users.find(
        ( user ) => user.username === username && user.password === hashedPassword
    );

    // Login logic
    if ( user ) {
        handleLoginSuccess( user ); // On successful login
    } else {
        handleLoginError( "Incorrect username or password." ); // On login failure
    }
}

// Helper function to handle login errors
function handleLoginError( message: string ): void {
    const loginError = document.getElementById( "loginError" ) as HTMLElement;
    loginError.textContent = message;
    loginError.style.display = "block";
    const { loginUsername, loginPassword } = getLoginFormFields();
    [loginUsername, loginPassword].forEach( ( field ) => {
        field.classList.add( "text-md" );
        field.classList.add( "text-red-600" );
        field.classList.add( "dark:text-red-400" );
    } );
}

// Helper function to handle successful login
function handleLoginSuccess( user: User ): void {
    // Set current session user
    sessionStorage.setItem( "currentUserId", user.id );
    sessionStorage.setItem( "firstName", user.firstName );
    sessionStorage.setItem( "lastName", user.lastName );
    sessionStorage.setItem( "username", user.username );
    sessionStorage.setItem( "email", user.email );
    const loginError = document.getElementById( "loginError" ) as HTMLElement;
    loginError.style.display = "none"; // Hide any previous error

    // Load user data and proceed to the quiz
    loadQuiz(); // Proceed to quiz section
}
