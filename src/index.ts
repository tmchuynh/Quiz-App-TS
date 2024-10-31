import {
	Answer,
	Question,
	Quiz,
	QuizItem,
	quizData,
	quizOptions,
	QuizOption,
	isQuizDataKey,
	QuizDataKey,
} from "./quizData.js";

// Define interfaces
interface User {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
}

interface ProgressItem {
	currentQuestion: number;
	score: number;
	quizId: string;
	difficultyLevel: number;
}

interface Score {
	date: string;
	quiz: string;
	score: number;
	total: number;
}


let currentQuestion: number = 0;
let totalQuestions: number = 0; // Total number of questions
let score: number = 0;

// DOM Elements
const loginContainer = document.querySelector( ".loginContainer" ) as HTMLElement;
const displayContainer = document.querySelector(
	".displayContainer"
) as HTMLElement;

// Function to remove an element by its ID
function removeElementById( elementId: string ): void {
	const element = document.getElementById( elementId );
	if ( element ) {
		element.remove(); // Remove the element from the DOM
	}
}

// Function to remove the registration section
function removeRegisterSection(): void {
	removeElementById( "registerSection" );
}

// Function to remove the login section
function removeLoginSection(): void {
	removeElementById( "loginSection" );
}

// Function to remove the quiz section
function removeQuizSection(): void {
	removeElementById( "quizSection" );
}

// Function to remove the score section
function removeScoreSection(): void {
	removeElementById( "scoreSection" );
}

// Function to remove the past scores section
function removePastScoresSection(): void {
	removeElementById( "pastScoresSection" );
}

function removeQuizSelectionSection() {
	removeElementById( "quizSelectionSection" );
}

function removeDifficultySelectionSection() {
	removeElementById( "difficultySection" );
}

// Function to remove all sections dynamically
function removeAllSections(): void {
	removeRegisterSection();
	removeLoginSection();
	removeQuizSection();
	removeScoreSection();
	removeDifficultySelectionSection();
	removeQuizSelectionSection();
	removePastScoresSection();
	removeElementById( "actionButtons" ); // Remove the action buttons section
	removeElementById( "dialog-default" ); // Remove the dialog
}

// Function to create and append the registration form dynamically
function createRegisterSection(): void {
	const registerSection = document.createElement( "div" );
	registerSection.classList.add(
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
		"registeration-section",
		"space-y-2"
	);
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
	document.querySelector( ".loginContainer" )?.appendChild( registerSection );

	// Attach event listener to the register button
	const registerButton = document.getElementById(
		"registerButton"
	) as HTMLElement;
	registerButton.addEventListener( "click", validateRegistrationForm );

	// Attach event listener for the Enter key on the register section
	registerSection.addEventListener( "keydown", ( event: KeyboardEvent ) => {
		if ( event.key === "Enter" ) {
			validateRegistrationForm();
		}
	} );

	// Retrieve input elements by their IDs and attach event listeners to them
	const {
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	} = getRegisterFormFields();

	// Attach input event listeners to all input fields for clearing error styles
	[
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	].forEach( ( field ) => {
		field.addEventListener( "input", clearErrorStyles );
	} );

	const checkbox = loginContainer.querySelector(
		"#registerPasswordView"
	) as HTMLInputElement;
	const passwordElement = document.querySelector( "#registerPassword" );
	const confirmPasswordElement = document.querySelector( "#confirmPassword" );

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

// Validate email format
function validateEmail( email: string ): boolean {
	const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return re.test( email );
}

// Validate registration form
async function validateRegistrationForm(): Promise<void> {
	const {
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	} = getRegisterFormFields();

	const fields = [
		{ element: firstName, name: "First Name" },
		{ element: lastName, name: "Last Name" },
		{ element: email, name: "Email" },
		{ element: registerUsername, name: "Username" },
		{ element: registerPassword, name: "Password" },
		{ element: confirmPassword, name: "Confirm Password" },
	];

	// Reset previous error styles
	resetErrorStyles( fields );
	const registerError = document.getElementById(
		"registerError"
	) as HTMLElement;

	registerError.style.display = "none";

	// Basic validation
	for ( const field of fields ) {
		const value = field.element.value.trim();
		if ( !value ) {
			showError( `${ field.name } is required.`, field.element );
			return;
		}
	}

	const userEmail = email.value.trim();
	if ( !validateEmail( userEmail ) ) {
		showError( "Please enter a valid email address.", email );
		return;
	}

	const password = registerPassword.value.trim();
	const confirmPwd = confirmPassword.value.trim();
	if ( !isValidPassword( password ) ) {
		showError(
			"Password must be at least 8 characters long and contain at least one symbol.",
			registerPassword
		);
		return;
	}

	if ( password !== confirmPwd ) {
		showError( "Passwords do not match.", registerPassword );
		showError( "Passwords do not match.", confirmPassword );
		return;
	}

	// Check if user already exists
	const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );
	if ( isUsernameTaken( registerUsername.value.trim(), users ) ) {
		showError( "Username already exists.", registerUsername );
		return;
	}

	// Register the new user
	await registerUser( fields );
}

function resetErrorStyles( fields: { element: HTMLInputElement; }[] ): void {
	fields.forEach( ( field ) => {
		field.element.classList.remove( "mt-2" );
		field.element.classList.remove( "text-md" );
		field.element.classList.remove( "text-red-600" );
		field.element.classList.remove( "dark:text-red-400" );
	} );
}

function showError( message: string, field: HTMLElement ): void {
	const registerError = document.getElementById(
		"registerError"
	) as HTMLElement;

	registerError.textContent = message;
	registerError.style.display = "block";
	field.classList.add( "mt-2" );
	field.classList.add( "text-md" );
	field.classList.add( "text-red-600" );
	field.classList.add( "dark:text-red-400" );
}

function isValidPassword( password: string ): boolean {
	const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
	return passwordRegex.test( password );
}

function isUsernameTaken( username: string, users: User[] ): boolean {
	return users.some( ( user ) => user.username === username );
}

function getRegisterFormFields(): {
	firstName: HTMLInputElement;
	lastName: HTMLInputElement;
	email: HTMLInputElement;
	registerUsername: HTMLInputElement;
	registerPassword: HTMLInputElement;
	confirmPassword: HTMLInputElement;
} {
	const firstName = document.getElementById( "firstName" ) as HTMLInputElement;
	const lastName = document.getElementById( "lastName" ) as HTMLInputElement;
	const email = document.getElementById( "email" ) as HTMLInputElement;
	const registerUsername = document.getElementById(
		"registerUsername"
	) as HTMLInputElement;
	const registerPassword = document.getElementById(
		"registerPassword"
	) as HTMLInputElement;
	const confirmPassword = document.getElementById(
		"confirmPassword"
	) as HTMLInputElement;
	return {
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	};
}

async function registerUser(
	fields: { element: HTMLInputElement; }[]
): Promise<void> {
	// Hash the password before storing it
	const hashedPassword = await hashPassword( fields[4].element.value.trim() );

	const newUser: User = {
		id: generateUniqueId(),
		firstName: fields[0].element.value.trim(),
		lastName: fields[1].element.value.trim(),
		username: fields[3].element.value.trim(),
		password: hashedPassword, // Store the hashed password
	};

	// Retrieve existing users from localStorage or initialize an empty array
	const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );

	// Add the new user to the users array
	users.push( newUser );

	// Save the updated users array in localStorage
	localStorage.setItem( "users", JSON.stringify( users ) );

	// Update the UI to transition from registration to login
	const registerSection = document.getElementById(
		"registerSection"
	) as HTMLElement;
	const loginSection = document.getElementById( "loginSection" ) as HTMLElement;
	registerSection.style.display = "none";
	loginSection.style.display = "block"; // Go to login after registration
}

// Helper function to hash the password (SHA-256 example)
async function hashPassword( password: string ): Promise<string> {
	const encoder = new TextEncoder();
	const data = encoder.encode( password );
	const hashBuffer = await crypto.subtle.digest( "SHA-256", data );
	const hashArray = Array.from( new Uint8Array( hashBuffer ) );
	const hashHex = hashArray
		.map( ( b ) => b.toString( 16 ).padStart( 2, "0" ) )
		.join( "" );
	return hashHex;
}

// Function to generate a unique ID
function generateUniqueId(): string {
	return "user_" + ( Math.floor( Math.random() * 1650 ) + 256 ); // Simple unique ID
}

// Function to remove error classes and hide the error message
function clearErrorStyles(): void {
	const {
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	} = getRegisterFormFields();

	const fields = [
		firstName,
		lastName,
		email,
		registerUsername,
		registerPassword,
		confirmPassword,
	];

	fields.forEach( ( field ) => {
		field.classList.remove( "mt-2" );
		field.classList.remove( "text-md" );
		field.classList.remove( "text-red-600" );
		field.classList.remove( "dark:text-red-400" );
	} ); // Remove error class from all fields
	const registerError = document.getElementById(
		"registerError"
	) as HTMLElement;
	registerError.style.display = "none"; // Hide error message
}

// Function to create and append the login form dynamically
function createLoginSection(): void {
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
}

// Validate login form
async function validateLoginForm(): Promise<void> {
	const { loginUsername, loginPassword } = getLoginFormFields();
	const username = loginUsername.value.trim();
	const password = loginPassword.value.trim();

	// Reset error styles for both fields
	const fields = [loginUsername, loginPassword];
	fields.forEach( ( field ) => {
		field.classList.remove( "mt-2" );
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
				field.classList.add( "mt-2" );
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

// Helper function to handle login errors
function handleLoginError( message: string ): void {
	const loginError = document.getElementById( "loginError" ) as HTMLElement;
	loginError.textContent = message;
	loginError.style.display = "block";
	const { loginUsername, loginPassword } = getLoginFormFields();
	[loginUsername, loginPassword].forEach( ( field ) => {
		field.classList.add( "mt-2" );
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
	const loginError = document.getElementById( "loginError" ) as HTMLElement;
	loginError.style.display = "none"; // Hide any previous error

	// Load user data and proceed to the quiz
	loadQuiz(); // Proceed to quiz section
}

// Function to remove error classes and hide the login error message
function clearLoginErrorStyles(): void {
	const { loginUsername, loginPassword } = getLoginFormFields();
	const fields = [loginUsername, loginPassword];

	// Remove error class from both fields
	fields.forEach( ( field ) => {
		field.classList.remove( "mt-2" );
		field.classList.remove( "text-md" );
		field.classList.remove( "text-red-600" );
		field.classList.remove( "dark:text-red-400" );
	} );

	// Hide error message
	const loginError = document.getElementById( "loginError" ) as HTMLElement;
	loginError.style.display = "none";
}

function logoutEventListener() {
	document.querySelector( "#logoutButton" )?.addEventListener( "click", () => {
		localStorage.removeItem( "quizProgress" ); // Remove any quiz progress
		// Redirect to the login page
		removeAllSections();
		createRegisterSection();
		createLoginSection();
		const welcomeMessage = document.getElementById(
			"welcomeMessage"
		) as HTMLElement;
		if ( welcomeMessage ) {
			welcomeMessage.textContent = ""; // Clear welcome message
		}
		sessionStorage.clear();
	} );
}

/**
 * Sorts an array of QuizOption objects by their label in ascending order.
 *
 * @param {QuizOption[]} arr - The array of QuizOption objects to be sorted.
 *
 * @returns {void} - The function does not return a value, but it modifies the input array in place.
 */
function sortQuizArrayByName( arr: QuizOption[] ): void {
	arr.sort( ( a, b ) => a.label.localeCompare( b.label ) );
}

function createQuizSelection() {
	const quizSelectionSection = document.createElement( "div" );
	quizSelectionSection.classList.add(
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
		"quiz-selection-section"
	);
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
	displayContainer.appendChild( quizSelectionSection );

	// Retrieve current user's progress
	const currentUserId = sessionStorage.getItem( "currentUserId" );
	const userProgressKey = `quizProgress_${ currentUserId }`;
	const currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);

	const quizOptionsContainer = document.getElementById(
		"quizOptions"
	) as HTMLDivElement;
	if ( quizOptionsContainer ) {
		sortQuizArrayByName( quizOptions );
		quizOptions.forEach( ( quiz: any ) => {
			const button = document.createElement( "button" );
			button.id = quiz.id;
			button.textContent = quiz.label;
			button.className =
				"button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";

			// Check if the quiz is already in progress
			const progressItem = currentProgress.find(
				( item ) => item.quizId === quiz.id && item.currentQuestion > 0
			);

			if ( progressItem ) {
				// Quiz is in progress, change the button class
				button.className =
					"button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
			}

			button.addEventListener( "click", () => {
				sessionStorage.setItem( "quizId", button.id );
				let quizData = button.id.split( "_" )[0].concat( "Data" );
				console.log( quizData );
				sessionStorage.setItem( "quizData", quizData );

				const tempArray = sessionStorage
					.getItem( "quizId" )
					?.split( "_" )[0]
					.split( /(?=[A-Z])/ );
				if ( tempArray ) {
					tempArray[0] =
						tempArray[0].charAt( 0 ).toUpperCase() +
						tempArray[0].slice( 1 );
					const quiz_type = tempArray.join( " " );

					sessionStorage.setItem( "quizType", quiz_type );
				}

				addBackToSelectionSectionButton();

				sessionStorage.setItem( "quizId", quiz.id );
				promptForDifficulty( quiz.id );
			} );
			quizOptionsContainer.appendChild( button );
		} );
	}
}

/**
 * Prompts the user to select a difficulty level for a given quiz.
 *
 * @param {string} quizId - The ID of the quiz.
 *
 * @returns {void}
 */
function promptForDifficulty( quizId: string ): void {
	// Remove the quiz selection section
	removeElementById( "quizSelectionSection" );

	const difficultySection = document.createElement( "div" );
	const quiz_type = sessionStorage.getItem( "quizType" );
	difficultySection.classList.add(
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
	difficultySection.id = "difficultySection";
	difficultySection.innerHTML = `
	  <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Select Difficulty Level for <br/> ${ quiz_type }</h2>
	  <div id="difficultyOptions" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">

	  </div>
	`;
	displayContainer.appendChild( difficultySection );

	// Retrieve current user's progress
	const currentUserId = sessionStorage.getItem( "currentUserId" );
	const userProgressKey = `quizProgress_${ currentUserId }`;
	const currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);

	const difficultyOptionsContainer = document.getElementById(
		"difficultyOptions"
	) as HTMLDivElement;
	if ( difficultyOptionsContainer ) {
		for ( let level = 1; level <= 5; level++ ) {
			const button = document.createElement( "button" );
			button.textContent = `Level ${ level }`;
			// Check if the quiz is already in progress at any difficulty level
			const progressItems = currentProgress.find( ( item ) => item.quizId === quizId && item.currentQuestion > 0 && item.difficultyLevel == level );

			if ( progressItems ) {
				button.className =
					"button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
			}
			else {
				button.className =
					"button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";
			}

			button.addEventListener( "click", () => {
				sessionStorage.setItem( "difficultyLevel", level.toString() );
				// Now load the quiz questions based on the selected difficulty
				console.log( "Loading quiz questions", quizId, level );
				setupQuizData( quizId, level );
			} );

			difficultyOptionsContainer.appendChild( button );
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
function setupQuizData( quizId: string, difficultyLevel: number ): void {
	removeAllSections();
	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userScoresKey = `quizScores_${ currentUserId }`;
	if ( localStorage.getItem( userScoresKey ) ) {
		createScoresButtons();
	} else {
		createActionButtons();
	}

	addBackToSelectionSectionButton();

	if ( !isQuizDataKey( quizId ) ) {
		console.error( "Invalid quiz ID." );
		return;
	}

	// Find the quiz in the quizData array
	const quizItem = quizData.find(
		( quiz: { id: string; } ) => quiz.id === quizId
	);
	if ( !quizItem ) {
		console.error( "Quiz not found." );
		return;
	}

	const selectedQuiz = quizItem.data;
	const questions = selectedQuiz[difficultyLevel];
	if ( !questions ) {
		console.error( "Invalid difficulty level." );
		return;
	}

	// Shuffle the questions
	const shuffledQuestions = shuffle( questions );

	// Shuffle answers within each question
	shuffledQuestions.forEach( ( question: any ) => {
		question.answers = shuffle( question.answers );
	} );

	sessionStorage.setItem(
		"currentQuizData",
		JSON.stringify( shuffledQuestions )
	);
	sessionStorage.setItem( "totalQuestions", questions.length.toString() );

	// Update quizType for display purposes
	const quizType =
		quizOptions.find( ( option: { id: string; } ) => option.id === quizId )
			?.label || "Quiz";
	sessionStorage.setItem( "quizType", quizType );

	// Proceed to load the quiz
	displayQuestion();
}

// Function to create and append the quiz section dynamically
function createQuizSection(): void {
	const quizSection = document.createElement( "div" );
	quizSection.classList.add(
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
		"quiz-section"
	);
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
	displayContainer.appendChild( quizSection );
}

// Function to create and append the score section dynamically
function createScoreSection(): void {
	const scoreSection = document.createElement( "div" );
	scoreSection.classList.add(
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
		"view-last-score"
	);
	scoreSection.id = "scoreSection";
	scoreSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Quiz Completed!</h2>
        <p id="scoreMessage" class="py-4"></p>
        <button id="retryButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800  retry-button">Retry Quiz</button>
    `;
	displayContainer.appendChild( scoreSection );
	document
		.querySelector( "#retryButton" )
		?.addEventListener( "click", () => returnToBeginning() );
}

// Function to create the past scores section dynamically
function createPastScoresSection(): void {
	const pastScoresSection = document.createElement( "div" );
	pastScoresSection.classList.add(
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
		"view-score-history"
	);
	pastScoresSection.id = "pastScoresSection";
	pastScoresSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Past Scores</h2>
		<div class="overflow-x-auto">
        	<table id="pastScores" class="scores-table w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-100" style="width: 100%; border-collapse: collapse;"></table>
        </div>
		<button id="backButton" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mt-4">Back to Quiz</button>
    `;
	displayContainer.appendChild( pastScoresSection );
	const currentUserId = sessionStorage.getItem( "currentUserId" );

	document.querySelector( "#backButton" )?.addEventListener( "click", () => {
		removeElementById( "pastScoresSection" );
		if ( checkProgressAtEnd( currentUserId! ) ) {
			showScore();
		} else {
			loadQuiz();
		}
	} );
}

// Function to create and append the action buttons dynamically
function createActionButtons(): void {
	removeElementById( "actionButtons" );
	const actionButtons = document.createElement( "section" );
	actionButtons.id = "actionButtons";
	actionButtons.className =
		"buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 col-span-2 space-y-2 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max ";
	actionButtons.innerHTML = `
		<div class="grid grid-cols-1">
			<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
		</div>
    `;
	displayContainer.appendChild( actionButtons );
	logoutEventListener();
}

function createScoresButtons(): void {
	removeElementById( "actionButtons" );
	const actionButtons = document.createElement( "section" );
	actionButtons.id = "actionButtons";

	actionButtons.className =
		"buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-2 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
	actionButtons.innerHTML = `
		<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
		<button id="viewScoresButton" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">View Past Scores</button>
    `;
	displayContainer.appendChild( actionButtons );

	const children = actionButtons.children.length;
	actionButtons.classList.add( `grid-cols-${ children }` );

	logoutEventListener();

	document
		.querySelector( "#viewScoresButton" )
		?.addEventListener( "click", () => {
			removeElementById( "quizSelectionSection" );
			createSortButtons();
		} );
}

/**
 * Adds a button to the action buttons section that allows the user to select a different quiz.
 * When clicked, it removes all existing sections and loads the quiz selection section.
 * It also adds an event listener to the "viewScoresButton" to remove the quiz selection section
 * and create the sort buttons section when clicked.
 */
function addBackToSelectionSectionButton(): void {
	const actionButtons = document.querySelector( "#actionButtons" );
	if ( actionButtons ) {
		actionButtons.className =
			"buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-3 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";

		actionButtons.innerHTML += `
        <button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		`;
	}
	document
		.querySelector( "#backToSelectionButton" )
		?.addEventListener( "click", () => {
			removeAllSections();
			loadQuiz();
		} );

	logoutEventListener();

	document
		.querySelector( "#viewScoresButton" )
		?.addEventListener( "click", () => {
			removeElementById( "quizSelectionSection" );
			createSortButtons();
		} );
}

function createSortButtons(): void {
	removeElementById( "actionButtons" );
	const actionButtons = document.createElement( "section" );
	actionButtons.id = "actionButtons";
	actionButtons.className =
		"buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";

	const buttonClass = "text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800 space-y-2";

	function createButton( id: string, text: string ): HTMLButtonElement {
		const button = document.createElement( 'button' );
		button.id = id;
		button.className = buttonClass;
		button.textContent = text;
		return button;
	}

	const sortByQuizButton = createButton( "sortByQuizButton", "Sort by Quiz" );
	const sortByDateButton = createButton( "sortByDateButton", "Sort by Date" );
	const sortByScoreButton = createButton( "sortByScoreButton", "Sort by Score" );


	actionButtons.innerHTML = `
		<div class="gap-1 text-center auto-cols-max grid grid-cols-2 order-last">
			<button id="logoutButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
			<button id="resetScoresButton" class="text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Reset All Scores</button>
		</div>
	
        <button id="backToSelectionButton" class="text-white order-4 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
        <div class="buttonGroup gap-1 text-center auto-cols-max grid grid-cols-3 order-2" id="sortingButtons">

        </div>
    `;

	displayContainer.appendChild( actionButtons );
	logoutEventListener();

	const buttonContainer = document.getElementById( "sortingButtons" );
	if ( buttonContainer ) {
		buttonContainer.appendChild( sortByQuizButton );
		buttonContainer.appendChild( sortByDateButton );
		buttonContainer.appendChild( sortByScoreButton );
	}

	actionButtons.innerHTML +=
		`<div>
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
	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userScoresKey = `quizScores_${ currentUserId }`;
	const pastScores = JSON.parse( localStorage.getItem( userScoresKey ) || "[]" ) as Score[];

	// Store filtered scores
	let filteredScores = [...pastScores];

	// Populate the dropdown with quiz names
	const quizNames: string[] = [...new Set( pastScores.map( ( score ) => score.quiz ) )];
	const filterByQuizDropdown = document.getElementById( "filterByQuizDropdown" ) as HTMLSelectElement;
	quizNames.forEach( ( quizName: string ) => {
		const option = document.createElement( "option" );
		option.value = quizName;
		option.text = quizName;
		filterByQuizDropdown.appendChild( option );
	} );


	renderScores( filteredScores );

	// Event listener for dropdown change
	filterByQuizDropdown.addEventListener( "change", () => {
		const selectedQuiz = filterByQuizDropdown.value;
		if ( selectedQuiz ) {
			filteredScores = pastScores.filter(
				( score: any ) => score.quiz === selectedQuiz
			);
		} else {
			// If no quiz selected (empty value), show all scores
			filteredScores = [...pastScores];
		}
		renderScores( filteredScores );
	} );

	// Event listener for Apply Date Filter button
	const applyDateFilterButton = document.getElementById( "applyDateFilterButton" )!;
	applyDateFilterButton.addEventListener( "click", () => {
		const startDateInput = document.getElementById( "startDateInput" ) as HTMLInputElement;
		const endDateInput = document.getElementById( "endDateInput" ) as HTMLInputElement;
		const startDateStr = startDateInput.value;
		const endDateStr = endDateInput.value;

		if ( startDateStr && endDateStr ) {
			if ( startDateStr > endDateStr ) {
				alert( "End date must be on or after the start date." );
				return;
			}
			const startDate = new Date( startDateStr );
			const endDate = new Date( endDateStr );
			if ( !isNaN( startDate.getTime() ) && !isNaN( endDate.getTime() ) ) {
				// Filter based on existing filteredScores to chain filters
				filteredScores = filteredScores.filter( ( score: any ) => {
					const scoreDate = new Date( score.date );
					return scoreDate >= startDate && scoreDate <= endDate;
				} );
				renderScores( filteredScores );
			} else {
				alert( "Invalid date format. Please use the date picker." );
			}
		} else {
			alert( "Please select both start and end dates." );
		}
	} );

	// Sort by Quiz (alphabetically)
	document
		.querySelector( "#sortByQuizButton" )
		?.addEventListener( "click", () => {
			const sortedByQuiz = [...filteredScores].sort( ( a, b ) =>
				a.quiz.localeCompare( b.quiz )
			);
			renderScores( sortedByQuiz );
			filteredScores = sortedByQuiz;
		} );

	// Sort by Date (newest to oldest)
	document
		.querySelector( "#sortByDateButton" )
		?.addEventListener( "click", () => {
			const sortedByDate = [...filteredScores].sort(
				( a: any, b: any ) =>
					new Date( b.date ).getTime() - new Date( a.date ).getTime()
			);
			renderScores( sortedByDate );
			filteredScores = sortedByDate;
		} );

	// Sort by Score (highest to lowest)
	document
		.querySelector( "#sortByScoreButton" )
		?.addEventListener( "click", () => {
			const sortedByPercentage = [...filteredScores].sort(
				( a: any, b: any ) => {
					const percentageA = ( a.score / a.total ) * 100;
					const percentageB = ( b.score / b.total ) * 100;
					return percentageB - percentageA; // Sort by percentage (highest first)
				}
			);
			renderScores( sortedByPercentage );
			filteredScores = sortedByPercentage;
		} );

	// Clear Filters
	document
		.querySelector( "#clearFiltersButton" )
		?.addEventListener( "click", () => {
			filteredScores = [...pastScores];
			filterByQuizDropdown.value = "Filter by Quiz"; // Reset dropdown selection
			// Reset date inputs
			( document.getElementById( "startDateInput" ) as HTMLInputElement ).value = "";
			( document.getElementById( "endDateInput" ) as HTMLInputElement ).value = "";
			renderScores( filteredScores );
		} );

	document
		.querySelector( "#backToSelectionButton" )
		?.addEventListener( "click", () => {
			removeAllSections();
			loadQuiz();
		} );

	document
		.querySelector( "#resetScoresButton" )
		?.addEventListener( "click", () => {
			// Show the confirmation dialog
			createDialog();
		} );
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
function renderScores( pastScores: any[] ): void {
	// Remove existing sections
	removeElementById( "quizSection" );
	removeElementById( "scoreSection" );
	removeElementById( "pastScoresSection" );

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
		.map( ( { score, total, quiz, date } ) => {
			const percentage = ( ( score / total ) * 100 ).toFixed( 2 ); // Calculate percentage
			const formattedDate = formatDate( date );
			const formattedTime = formatTime( date );
			return `
				<tbody>
					<tr class="bg-white hover:bg-gray-200 dark:hover:bg-slate-700 border-b dark:bg-gray-800 dark:border-gray-700">
						<td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">${ quiz }</td>
						<td>${ score } / ${ total }</td>
						<td class="scorePercentage">${ percentage }%</td>
						<td class="scoreDate">${ formattedDate }</td>
						<td class="scoreDate">${ formattedTime }</td>
					</tr>
				</tbody>`;
		} )
		.join( "" );

	// Insert the table into the #pastScores element
	const pastScoresElement = document.querySelector(
		"#pastScores"
	) as HTMLElement;
	pastScoresElement.innerHTML = `
        ${ tableHeaders }
        ${ tableRows }
    `;
}

/**
 * Formats a date string to the hh:mm AM/PM format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string in hh:mm AM/PM format.
 */
function formatTime( dateString: string ): string {
	const date = new Date( dateString ); // Convert the string to a Date object
	let hours = date.getHours(); // Get hours from 0 to 23
	const minutes = date.getMinutes().toString().padStart( 2, "0" ); // Get minutes and pad with leading zero if necessary
	const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

	hours = hours % 12; // Convert to 12-hour format
	hours = hours ? hours : 12; // Adjust midnight hour from 0 to 12
	const formattedHours = hours.toString().padStart( 2, "0" ); // Pad hours with leading zero if necessary

	return `${ formattedHours }:${ minutes } ${ ampm }`; // Return in hh:mm AM/PM format
}

/**
 * Formats a date string to the mm/dd/yy format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string in mm/dd/yy format.
 */
function formatDate( dateString: string ): string {
	const date = new Date( dateString ); // Convert the string to a Date object
	const month = ( date.getMonth() + 1 ).toString().padStart( 2, "0" ); // getMonth() returns 0-11, so add 1
	const day = date.getDate().toString().padStart( 2, "0" ); // Add leading 0 if necessary
	const year = date.getFullYear().toString().slice( -2 ); // Get last 2 digits of the year (yy)

	return `${ month }/${ day }/${ year }`; // Return in mm/dd/yy format
}

function createDialog(): void {
	const dialog = document.createElement( "div" );
	dialog.setAttribute( "tabindex", "-1" );
	dialog.classList.add(
		"overflow-y-auto",
		"flex",
		"overflow-x-hidden",
		"inset-2/4",
		"z-50",
		"justify-center",
		"items-center",
		"w-full",
		"max-h-full",
		"col-span-12"
	);
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
	displayContainer.appendChild( dialog );

	// Add event listener for the Confirm button
	document.getElementById( "resetConfirm" )?.addEventListener( "click", () => {
		const currentUserId = sessionStorage.getItem( "currentUserId" )!;
		localStorage.removeItem( `quizScores_${ currentUserId }` ); // Clear the quiz scores
		sessionStorage.removeItem( "quizData" );
		sessionStorage.removeItem( "quizId" );
		removeElementById( "dialog" ); // Close the dialog
		removeAllSections();
		returnToBeginning();
	} );

	// Add event listener for the Cancel button
	document.querySelector( "#cancel-btn" )?.addEventListener( "click", () => {
		removeElementById( "dialog" ); // Close the dialog
	} );
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
function returnToBeginning(): void {
	// Reset quiz variables
	currentQuestion = 0;
	score = 0;

	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userProgressKey = `quizProgress_${ currentUserId }`;
	const difficultyLevel = parseInt(
		sessionStorage.getItem( "difficultyLevel" )!
	);
	const quizId = sessionStorage.getItem( "quizId" )!;

	// Retrieve current progress and remove the current quiz's progress
	let currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);
	currentProgress = currentProgress.filter(
		( item ) =>
			!(
				item.quizId === quizId &&
				item.difficultyLevel === difficultyLevel
			)
	);

	// Add new progress starting from the beginning
	currentProgress.push( { currentQuestion, score, quizId, difficultyLevel } );

	// Sort and save the updated progress
	sortProgressArray( currentProgress );
	localStorage.setItem( userProgressKey, JSON.stringify( currentProgress ) );

	// Update the UI
	removeElementById( "scoreSection" );
	createActionButtons();

	// Display the first question
	setupQuizData( quizId, difficultyLevel );
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
function loadQuiz(): void {
	const currentUserId = sessionStorage.getItem( "currentUserId" );

	if ( !currentUserId ) {
		// If no user is logged in, show the login and registration sections
		createRegisterSection();
		createLoginSection();
		return;
	}

	// Retrieve users and find the current user
	const users: User[] = JSON.parse( localStorage.getItem( "users" ) || "[]" );
	const foundUser = users.find( ( user ) => user.id === currentUserId );

	if ( !foundUser ) {
		createRegisterSection();
		createLoginSection();
		console.error( "User not found!" );
		return;
	}

	const { firstName } = foundUser;

	// Check if the user has logged in before
	const hasLoggedInBeforeKey = `hasLoggedInBefore_${ currentUserId }`;
	const hasLoggedInBefore = localStorage.getItem( hasLoggedInBeforeKey );

	// Display a welcome message based on the user's login history
	const welcomeMessage = document.getElementById( "welcomeMessage" );
	if ( welcomeMessage ) {
		if ( hasLoggedInBefore ) {
			welcomeMessage.textContent = `Welcome back, ${ firstName }!`;
		} else {
			welcomeMessage.textContent = `Welcome, ${ firstName }!`;
			localStorage.setItem( hasLoggedInBeforeKey, "true" ); // Mark user as logged in for future
		}
	}

	removeElementById( "registerSection" );
	removeElementById( "loginSection" );

	const userScoresKey = `quizScores_${ currentUserId }`;
	const pastScores = JSON.parse( localStorage.getItem( userScoresKey ) || "[]" ) as Score[];
	if ( pastScores ) {
		createScoresButtons();
	} else {
		createActionButtons();
	}

	createQuizSelection();
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
function loadProgress(): void {
	if ( !document.querySelector( "#quizSection" ) ) {
		createQuizSection();
	}

	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userProgressKey = `quizProgress_${ currentUserId }`;
	const quizId = sessionStorage.getItem( "quizId" )!;
	const currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);
	const difficultyLevel = parseInt(
		sessionStorage.getItem( "difficultyLevel" )!
	);
	const progressItem = currentProgress.find(
		( item ) =>
			item.quizId === quizId && item.difficultyLevel === difficultyLevel
	);
	if ( progressItem ) {
		currentQuestion = progressItem.currentQuestion;
		score = progressItem.score;
	} else {
		// Start from the beginning if no progress is saved
		currentQuestion = 0;
		score = 0;

		// Save initial progress
		currentProgress.push( {
			currentQuestion,
			score,
			quizId,
			difficultyLevel,
		} );
		sortProgressArray( currentProgress );
		localStorage.setItem( userProgressKey, JSON.stringify( currentProgress ) );
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
function sortProgressArray( progressArray: ProgressItem[] ): void {
	progressArray.sort( ( a, b ) => {
		if ( a.quizId < b.quizId ) return -1;
		if ( a.quizId > b.quizId ) return 1;
		return 0;
	} );
}

function createQuestionElement( question: Question ): void {
	// Get DOM elements
	const questionEl = document.getElementById( "question" );
	const answersEl = document.getElementById( "answers" );
	if ( !questionEl || !answersEl ) {
		return;
	}

	// Set the question text
	questionEl.textContent = question.question;

	// Efficient shuffling using Fisher-Yates
	const shuffledAnswers = shuffle( question.answers );

	// If there are more buttons than answers, remove the excess ones
	while ( answersEl.children.length > shuffledAnswers.length ) {
		answersEl.removeChild( answersEl.lastChild! );
	}

	// Add or update buttons
	shuffledAnswers.forEach( ( answer: any, index: any ) => {
		let button: HTMLElement;

		if ( answersEl.children[index] ) {
			// Reuse existing button
			button = answersEl.children[index] as HTMLElement;
		} else {
			// Create new button if necessary
			button = document.createElement( "button" );
			button.className =
				"answer-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"; // Use a CSS class for styling
			answersEl.appendChild( button );
		}

		// Update the button text
		button.textContent = answer.text;

		// Remove any previous event listeners and add a new one
		const newButton = button.cloneNode( true ) as HTMLElement;
		button.replaceWith( newButton );
		newButton.addEventListener( "click", () => checkAnswer( index ) );
	} );
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
function displayQuestion(): void {
	loadProgress();

	removeElementById( "quizSelectionSection" );

	// Get the selected quiz data from sessionStorage
	const selection = sessionStorage.getItem( "quizData" );
	if ( !selection ) {
		console.error( "Invalid quiz selection." );
		return;
	}

	const currentQuizDataStr = sessionStorage.getItem( "currentQuizData" );
	if ( !currentQuizDataStr ) {
		console.error( "No quiz data found." );
		return;
	}

	const currentQuiz: Question[] = JSON.parse( currentQuizDataStr );
	totalQuestions = currentQuiz.length;

	// Check if currentQuestion is within bounds
	if ( currentQuestion >= totalQuestions ) {
		showScore();
		return;
	}

	const currentQuizData = currentQuiz[currentQuestion];

	createQuestionElement( currentQuizData );

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
function updateProgressBar(): void {
	const progressBar = document.getElementById(
		"quizProgressBar"
	) as HTMLProgressElement;
	const progressValue = ( ( currentQuestion + 1 ) / totalQuestions ) * 100; // Calculate percentage
	console.log( `Progress: ${ progressValue }` );
	progressBar.style.width = String( `${ progressValue }%` ); // Update the value of the progress bar

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
function saveProgress(): void {
	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userProgressKey = `quizProgress_${ currentUserId }`;
	const quizId = sessionStorage.getItem( "quizId" )!;
	const difficultyLevel = parseInt(
		sessionStorage.getItem( "difficultyLevel" )!
	);

	const currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);

	const index = currentProgress.findIndex(
		( item ) =>
			item.quizId === quizId && item.difficultyLevel === difficultyLevel
	);

	if ( index !== -1 ) {
		// Update existing progress
		currentProgress[index].currentQuestion = currentQuestion;
		currentProgress[index].score = score;
	} else {
		// Add new progress
		currentProgress.push( {
			currentQuestion,
			score,
			quizId,
			difficultyLevel,
		} );
	}

	// Sort the array alphabetically by quizId and difficultyLevel
	sortProgressArray( currentProgress );
	localStorage.setItem( userProgressKey, JSON.stringify( currentProgress ) );
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
function checkAnswer( selectedAnswerIndex: number ): void {
	const currentQuizDataStr = sessionStorage.getItem( "currentQuizData" );
	if ( !currentQuizDataStr ) {
		console.error( "No quiz data available." );
		return;
	}

	const currentQuizData: Question[] = JSON.parse( currentQuizDataStr );

	const question = currentQuizData[currentQuestion];
	const selectedAnswer = question.answers[selectedAnswerIndex];
	const test = JSON.stringify( question.answers );
	console.log( "selectedAnswerIndex:", selectedAnswerIndex );
	console.log( `Selected answer: ${ test }` );

	if ( selectedAnswer.correct ) {
		score++;
	}

	currentQuestion++;
	saveProgress();

	// Display the next question
	displayQuestion();
}

// Generic shuffle function using the Fisher-Yates algorithm
const shuffle = ( array: any ) => {
	for ( let i = array.length - 1; i > 0; i-- ) {
		const j = Math.floor( Math.random() * ( i + 1 ) );
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
function showScore(): void {
	removeAllSections();

	// Display the score section
	createScoresButtons();
	createScoreSection();

	const currentUserId = sessionStorage.getItem( "currentUserId" )!;
	const userScoresKey = `quizScores_${ currentUserId }`;
	const pastScores = JSON.parse( localStorage.getItem( userScoresKey ) || "[]" );

	const quizId = sessionStorage.getItem( "quizId" );
	const difficultyLevelStr = sessionStorage.getItem( "difficultyLevel" );

	if ( !quizId || !difficultyLevelStr || !isQuizDataKey( quizId ) ) {
		console.error( "Invalid quiz selection." );
		return;
	}

	const difficultyLevel = parseInt( difficultyLevelStr, 10 );

	// Find the quiz in the quizData array
	const quizItem = quizData.find(
		( quiz: { id: string; } ) => quiz.id === quizId
	);
	if ( !quizItem ) {
		console.error( "Quiz not found." );
		return;
	}

	const selectedQuiz = quizItem.data;
	const questions = selectedQuiz[difficultyLevel];
	if ( !questions ) {
		console.error( "Invalid difficulty level." );
		return;
	}

	const totalQuestions = questions.length;

	// Add the new score with the current timestamp
	const timestamp = new Date().toLocaleString();
	const quizType = sessionStorage.getItem( "quizType" ) || "Unknown Quiz";

	pastScores.push( {
		score,
		total: totalQuestions,
		quiz: quizType,
		date: timestamp,
		difficultyLevel: difficultyLevel,
	} );

	// Update localStorage with the new scores
	localStorage.setItem( userScoresKey, JSON.stringify( pastScores ) );

	// Update the score message with the most recent score
	const scoreMessageEl = document.getElementById( "scoreMessage" );
	if ( scoreMessageEl ) {
		scoreMessageEl.textContent = `You scored ${ score } out of ${ totalQuestions } on the ${ quizType } at difficulty level ${ difficultyLevel }.`;
	}

	// Reset quiz progress
	currentQuestion = 0;
	score = 0;
	saveProgress();
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
function checkProgressAtEnd( currentUserId: string ): boolean {
	// Retrieve current quiz progress
	const quizProgress = JSON.parse(
		localStorage.getItem( `quizProgress_${ currentUserId }` )!
	);
	const currentQuiz = sessionStorage.getItem( "quizId" );
	const foundItem = quizProgress.some(
		( item: any ) => item.quizId === currentQuiz
	);
	if ( foundItem ) {
		if ( currentQuestion === totalQuestions ) {
			return true;
		}
	}
	return false;
}

// Initial load
window.addEventListener( "load", () => {
	loadQuiz();
} );
