import { createRegisterSection } from "./registration.js";
import { createLoginSection } from "./login.js";
import { createHeaderSection } from "./index.js";
export function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove(); // Remove the element from the DOM
    }
}
export function removeRegisterSection() {
    removeElementById("registerSection");
}
export function removeLoginSection() {
    removeElementById("loginSection");
}
export function removeQuizSection() {
    removeElementById("quizSection");
}
export function removeScoreSection() {
    removeElementById("scoreSection");
}
export function removePastScoresSection() {
    removeElementById("pastScoresSection");
}
export function removeQuizSelectionSection() {
    removeElementById("quizSelectionSection");
}
export function removeDifficultySelectionSection() {
    removeElementById("difficultySection");
}
export function removeLeaderboardSection() {
    removeElementById("leaderboardContainer");
}
export function removeLeaderboardSelection() {
    removeElementById("leaderboardSelection");
}
export function removeResetRequest() {
    removeElementById("resetRequestSection");
}
export function removeConfirmationCode() {
    removeElementById("confirmationCodeSection");
}
export function removeNewPasswordSection() {
    removeElementById("newPasswordSection");
}
export function removeProfileSection() {
    removeElementById("profileSection");
}
export function removeHeaderSection() {
    removeElementById("headerSection");
    console.log("Removed");
}
// function to remove all sections dynamically
export function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removeResetRequest();
    removeProfileSection();
    removeConfirmationCode();
    removeNewPasswordSection();
    removeLeaderboardSection();
    removeLeaderboardSelection();
    removeDifficultySelectionSection();
    removeQuizSelectionSection();
    removePastScoresSection();
    removeHeaderSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-default"); // Remove the dialog
}
// Helper export function to hash the password (SHA-256 example)
export async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}
export function showError(message, field) {
    const registerError = document.getElementById("registerError");
    registerError.textContent = message;
    registerError.style.display = "block";
    field.classList.add("text-md");
    field.classList.add("text-red-600");
    field.classList.add("dark:text-red-400");
}
/**
 * Initializes a popover for displaying password requirements.
 *
 * @param {HTMLElement} passwordInput - The input element for the password field.
 *
 * @returns {void}
 */
export function initializePasswordPopover(passwordInput) {
    const popover = document.getElementById("popover-password");
    // Initialize Popper.js
    const popperInstance = Popper.createPopper(passwordInput, popover, {
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });
    // Show popover when password field is focused
    passwordInput.addEventListener("focus", () => {
        popover.classList.remove("invisible", "opacity-0");
        popover.classList.add("visible", "opacity-100");
        popperInstance.update();
    });
    // Hide popover when password field loses focus
    passwordInput.addEventListener("blur", () => {
        popover.classList.remove("visible", "opacity-100");
        popover.classList.add("invisible", "opacity-0");
    });
}
export function isValidPassword(password) {
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
// Generic shuffle function using the Fisher-Yates algorithm
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
/**
 * Formats a date string to the hh:mm AM/PM format.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string in hh:mm AM/PM format.
 */
export function formatTime(dateString) {
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
export function formatDate(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11, so add 1
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year (yy)
    return `${month}/${day}/${year}`; // Return in mm/dd/yy format
}
export function logoutEventListener() {
    var _a;
    (_a = document.querySelector(".logout-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        localStorage.removeItem("quizProgress"); // Remove any quiz progress
        // Redirect to the login page
        removeAllSections();
        createHeaderSection();
        createRegisterSection();
        createLoginSection();
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = ""; // Clear welcome message
        }
        sessionStorage.clear();
    });
}
//# sourceMappingURL=utilities.js.map