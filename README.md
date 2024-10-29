# Web App Features

-   **User Registration and Login:**

    -   Users can register with first name, last name, email, username, and password.
    -   Validation to ensure all fields are filled and meet specific criteria (e.g., email format, password strength).
    -   Ability to handle multiple users on the same computer, ensuring unique usernames.

-   **Quiz Functionality:**
    -   Users can take quizzes with a series of questions.
    -   Dynamic question display based on the current quiz state.
    -   Progress tracking through a visual progress bar.
-   **Score Tracking:**

    -   Scores are calculated and displayed at the end of each quiz.
    -   Users can view their past scores, including the score, total questions, and timestamp.
    -   Scores are stored in `localStorage` for persistence across sessions.

-   **Score Management:**

    -   Ability to sort past scores by date or score.
    -   Reset functionality for clearing past scores.

-   **User Progress Handling:**

    -   Save and resume quiz progress using `sessionStorage` to enhance user experience.
    -   Option to retry the quiz, resetting the current question and score.

-   **Responsive UI:**

    -   Flexibly designed sections for quizzes, scores, and registration/login.
    -   Clear error messages and visual indicators for form validation.

-   **Accessibility Features:**

    -   Error highlighting on input fields when validation fails.
    -   User-friendly messages displayed for success or error states.

-   **Data Management:**

    -   Efficient storage and retrieval of user scores and quiz progress using `localStorage` and `sessionStorage`.
    -   JSON-based data handling for ease of parsing and serialization.

-   **Confirmation Dialogs:**

    -   User confirmation prompts for critical actions, such as resetting scores.

-   **Real-time Feedback:**
    -   Instant feedback on user actions, such as successful registrations or validation errors.
