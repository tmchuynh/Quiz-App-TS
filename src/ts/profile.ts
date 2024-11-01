import { hashPassword, removeAllSections, showError } from "./utilities.js";

export function createProfileSection(): void {
    removeAllSections(); // Remove other sections if needed
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
        "col-span-12",
        "lg:col-span-6",
        "w-full",
        "lg:w-11/12",
        "profile-section",
        "space-y-2"
    );
    profileSection.id = "profileSection";
    profileSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white my-3">User Profile</h2>
        <div class="mb-4 profilePhoto-fields">
            <label for="profilePhoto" class="block text-md/6 font-medium text-gray-900 dark:text-white">Profile Photo:</label>
            <input type="file" id="profilePhoto" class="bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
        </div>
        <div class="relative first-name-fields">
            <label for="userId" class="block text-md/6 font-medium text-gray-900 dark:text-white">ID:</label>
            <span id="userIdDisplay" class="text-gray-900 dark:text-white"></span>
        </div>
        <div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="relative first-name-fields">
                <label for="firstName" class="block text-md/6 font-medium text-gray-900 dark:text-white">First name:</label>
            <span id="firstNameDisplay" class="text-gray-900 dark:text-white"></span>
            </div>
            <div class="relative last-name-fields">
                <label for="lastName" class="block text-md/6 font-medium text-gray-900 dark:text-white">Last name:</label>
                <span id="lastNameDisplay" class="text-gray-900 dark:text-white"></span>
            </div>
        </div>
        <div class="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="relative username-fields">
                <label for="username" class="block text-md/6 font-medium text-gray-900 dark:text-white">Username:</label>
                <span id="usernameDisplay" class="text-gray-900 dark:text-white"></span>
            </div>
            <div class="relative email-fields">
                <label for="email" class="block text-md/6 font-medium text-gray-900 dark:text-white">Email:</label>
                <span id="emailDisplay" class="text-gray-900 dark:text-white"></span>
            </div>
        </div>

        <button id="saveProfileButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Save Profile</button>
        <p id="profileError" class="mt-2 text-md text-red-600 dark:text-red-400" style="display:none;"></p>
    `;

    // Append the dynamically created profile section to the container
    document.querySelector( ".loginContainer" )?.appendChild( profileSection );

    const username = sessionStorage.getItem( "username" );
    const email = sessionStorage.getItem( "email" );
    const firstName = sessionStorage.getItem( "firstName" );
    const lastName = sessionStorage.getItem( "lastName" );
    const currentUserId = sessionStorage.getItem( "currentUserId" );

    console.log( "Username:", username, "Email:", email, "First Name:", firstName, "Last Name:", lastName, "Current User ID:", currentUserId );

    console.log( "User Profile Data:", {
        username,
        email,
        firstName,
        lastName,
        currentUserId
    } );

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

    // Attach event listener to the save profile button
    const saveProfileButton = document.getElementById( "saveProfileButton" ) as HTMLElement;
    saveProfileButton.addEventListener( "click", validateProfileForm );


    // Load user data when the section is created

    // Attach event listeners to edit buttons
}

async function loadUserProfile(): Promise<void> {
    const userProfile = JSON.parse( localStorage.getItem( 'currentUser' ) || '{}' );
    if ( userProfile ) {
        ( document.getElementById( 'usernameDisplay' ) as HTMLSpanElement ).textContent = userProfile.username || '';
        ( document.getElementById( 'emailDisplay' ) as HTMLSpanElement ).textContent = userProfile.email || '';
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