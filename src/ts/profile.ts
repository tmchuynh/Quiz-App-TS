import { hashPassword, removeAllSections, showError } from "./utilities.js";
import { checkScoreHistory } from "./index.js";

export function createProfileSection(): void {
    removeAllSections(); // Remove other sections if needed
    checkScoreHistory();
    const profileSection = document.createElement( "div" );
    profileSection.classList.add(
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
        "col-span-6",
        "lg:col-span-6",
        "w-full",
        "lg:w-11/12",
        "profile-section",
        "space-y-2"
    );
    profileSection.id = "profileSection";
    profileSection.innerHTML = `
        <div class="profilePhoto-fields grid grid-cols-10 items-center">
            <img id="profilePhoto" class="object-cover col-span-4 w-14 h-14 rounded-full" src="dist/images/avatars/social.png" alt="Profile Photo" />
            <div class="col-span-6 w-full">
                <h2 class="text-left text-4xl py-5 font-extrabold dark:text-white my-3">User Profile</h2>
            </div>
        </div>
        <div class="relative first-name-fields">
            <label for="userId" class="text-xl text-gray-900 dark:text-white">ID:</label>
            <p id="userIdDisplay" class="text-gray-900 dark:text-white"></p>
        </div>
        <div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="relative first-name-fields">
                <label for="firstName" class="text-xl text-gray-900 dark:text-white">First name:</label>
                <p id="firstNameDisplay" class="text-gray-900 dark:text-white"></p>
            </div>
            <div class="relative last-name-fields">
                <label for="lastName" class="text-xl text-gray-900 dark:text-white">Last name:</label>
                <p id="lastNameDisplay" class="text-gray-900 dark:text-white"></p>
            </div>
        </div>
        <div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="relative username-fields">
                <label for="username" class="text-xl text-gray-900 dark:text-white">Username:</label>
                <p id="usernameDisplay" class="text-gray-900 dark:text-white"></p>
            </div>
            <div class="relative email-fields">
                <label for="email" class="text-xl text-gray-900 dark:text-white">Email:</label>
                <p id="emailDisplay" class="text-gray-900 dark:text-white"></p>
            </div>
        </div>

        <button id="saveProfileButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Profile</button>
        <p id="profileError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;"></p>
    `;

    // Append the dynamically created profile section to the container
    document.querySelector( ".displayContainer" )?.appendChild( profileSection );

    // Attach event listener to the save profile button
    const saveProfileButton = document.getElementById( "saveProfileButton" ) as HTMLElement;
    saveProfileButton.addEventListener( "click", validateProfileForm );

    // Load user data when the section is created
    loadUserProfile();

    // Attach event listeners to edit buttons
    // attachEditEventListeners();
}

async function loadUserProfile(): Promise<void> {
    const username = sessionStorage.getItem( "username" );
    const email = sessionStorage.getItem( "email" );
    const firstName = sessionStorage.getItem( "firstName" );
    const lastName = sessionStorage.getItem( "lastName" );
    const currentUserId = sessionStorage.getItem( "currentUserId" );

    // Display user data
    if ( firstName ) {
        document.getElementById( "firstNameDisplay" )!.textContent = firstName;
    } else {
        console.error( "First Name not found in sessionStorage" );
    }
    if ( lastName ) {
        document.getElementById( "lastNameDisplay" )!.textContent = lastName;
    } else {
        console.error( "Last Name not found in sessionStorage" );
    }
    if ( email ) {
        document.getElementById( "emailDisplay" )!.textContent = email;
    } else {
        console.error( "Email not found in sessionStorage" );
    }
    if ( username ) {
        document.getElementById( "usernameDisplay" )!.textContent = username;
    } else {
        console.error( "Username not found in sessionStorage" );
    }
    if ( currentUserId ) {
        document.getElementById( "userIdDisplay" )!.textContent = currentUserId;
    } else {
        console.error( "User ID not found in sessionStorage" );
    }
}

function attachEditEventListeners(): void {
    const editUsernameButton = document.getElementById( "editUsernameButton" ) as HTMLElement;
    const editEmailButton = document.getElementById( "editEmailButton" ) as HTMLElement;
    const editPasswordButton = document.getElementById( "editPasswordButton" ) as HTMLElement;

    editUsernameButton.addEventListener( "click", () => toggleEditField( 'username' ) );
    editEmailButton.addEventListener( "click", () => toggleEditField( 'email' ) );
    editPasswordButton.addEventListener( "click", () => toggleEditField( 'password' ) );
}

function toggleEditField( field: string ): void {
    const displayElement = document.getElementById( `${ field }Display` ) as HTMLSpanElement;
    const inputElement = document.getElementById( field ) as HTMLInputElement;

    const isEditing = inputElement.classList.contains( "hidden" );
    if ( isEditing ) {
        // Show the input field and hide the display
        inputElement.classList.remove( "hidden" );
        displayElement.classList.add( "hidden" );
        inputElement.value = displayElement.textContent || '';
        inputElement.focus();
    } else {
        // Hide the input field and show the display
        inputElement.classList.add( "hidden" );
        displayElement.classList.remove( "hidden" );
    }
}

async function validateProfileForm(): Promise<void> {
    const {
        username,
        email,
        password,
        confirmPassword,
    } = getProfileFormFields();

    const fields = [
        { element: username, name: "Username" },
        { element: email, name: "Email" },
        { element: password, name: "Password" },
        { element: confirmPassword, name: "Confirm Password" },
    ];

    // Basic validation
    for ( const field of fields ) {
        const value = field.element.value.trim();
        if ( !value ) {
            showError( `${ field.name } is required.`, field.element );
            return;
        }
    }

    if ( password !== confirmPassword ) {
        showError( "Passwords do not match.", password );
        showError( "Passwords do not match.", confirmPassword );
        return;
    }

    const passwordField = hashPassword( password.value );

    // Save profile to localStorage
    const userProfile = {
        username,
        email,
        password: await passwordField,

    };
    localStorage.setItem( 'currentUser', JSON.stringify( userProfile ) );
    alert( "Profile updated successfully!" );
}

function getProfileFormFields(): {
    username: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    confirmPassword: HTMLInputElement;
} {
    const username = document.getElementById( 'username' ) as HTMLInputElement;
    const email = document.getElementById( 'email' ) as HTMLInputElement;
    const password = document.getElementById( 'password' ) as HTMLInputElement;
    const confirmPassword = document.getElementById( 'confirmPassword' ) as HTMLInputElement;

    return { username, email, password, confirmPassword };
}

