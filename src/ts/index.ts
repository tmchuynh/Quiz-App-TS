import { quizData, quizOptions, isQuizDataKey } from "./quizData.js";
import {
	QuizOption,
	User,
	ProgressItem,
	Score,
	Question,
	LeaderboardEntry,
} from "./interfaces";
import { createRegisterSection } from "./registration.js";
import {
	removeAllSections,
	removeElementById,
	removeLeaderboardSection,
	removeLeaderboardSelection,
	shuffle,
	formatDate,
	logoutEventListener,
	formatTime,
	removeProfileSection,
	removeHeaderSection
} from "./utilities.js";
import { createLoginSection } from "./login.js";
import { createProfileSection } from "./profile.js";
import { getHighestScoreForLevel, createScoreSection, createScoresButtons } from "./scores.js";

let currentQuestion: number = 0;
let totalQuestions: number = 0; // Total number of questions
let score: number = 0;

// DOM Elements
export const loginContainer = document.querySelector(
	".loginContainer"
) as HTMLElement;
export const displayContainer = document.querySelector(
	".displayContainer"
) as HTMLElement;

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

export function createQuizSelection() {
	removeAllSections();
	createHeaderSection();
	checkScoreHistory();
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
	let currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);
	let progressItem: ProgressItem | undefined;

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

			if ( currentProgress && currentProgress.length > 0 ) {
				// Check if the quiz is already in progress
				progressItem = currentProgress.find(
					( item ) => item.quizId === quiz.id && item.currentQuestion > 0
				);
			}

			if ( progressItem ) {
				// Quiz is in progress, change the button class
				button.className =
					"button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
			}

			button.addEventListener( "click", () => {
				sessionStorage.setItem( "quizId", button.id );
				let quizData = button.id.split( "_" )[0].concat( "Data" );
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

				sessionStorage.setItem( "quizId", quiz.id );
				createDifficultySection( quiz.id );
			} );
			quizOptionsContainer.appendChild( button );
		} );
	}
}

export function checkScoreHistory() {
	const currentUserId = sessionStorage.getItem( "currentUserId" );
	const userScoresKey = `quizScores_${ currentUserId }`;
	const pastScores = JSON.parse(
		localStorage.getItem( userScoresKey ) || "[]"
	) as Score[];
	if ( pastScores ) {
		createScoresButtons();
	} else {
		createActionButtons();
	}
}

/**
 * Prompts the user to select a difficulty level for a given quiz.
 *
 * @param {string} quizId - The ID of the quiz.
 *
 * @returns {void}
 */
function createDifficultySection( quizId: string ): void {
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
	const userScores = JSON.parse( localStorage.getItem( `quizScores_${ currentUserId }` )! );
	const userProgressKey = `quizProgress_${ currentUserId }`;
	let currentProgress: ProgressItem[] = JSON.parse(
		localStorage.getItem( userProgressKey ) || "[]"
	);
	let progressItem: ProgressItem | undefined;

	const difficultyOptionsContainer = document.getElementById(
		"difficultyOptions"
	) as HTMLDivElement;
	if ( difficultyOptionsContainer ) {
		for ( let level = 1; level <= 5; level++ ) {
			const button = document.createElement( "button" );

			if ( userScores ) {
				const highestScore = getHighestScoreForLevel( level, userScores );
				// Get the highest score for the current level
				button.innerHTML = `
				Level ${ level }
				<div class="text-sm mt-1">${ highestScore !== null ? `High Score: ${ highestScore }` : '' }</div>
				`;
			} else {
				button.innerHTML = `Level ${ level }`;
			}

			if ( currentProgress && currentProgress.length > 0 ) {
				// Check if the quiz is already in progress at any difficulty level
				progressItem = currentProgress.find(
					( item ) =>
						item.quizId === quizId &&
						item.currentQuestion > 0 &&
						item.difficultyLevel == level
				);
			}

			if ( progressItem ) {
				button.className =
					"button text-white bg-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800";
			} else {
				button.className =
					"button text-white bg-zinc-700 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800";
			}

			button.addEventListener( "click", () => {
				sessionStorage.setItem( "difficultyLevel", level.toString() );
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
	checkScoreHistory();

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
	createHeaderSection();
	const quizSection = document.createElement( "div" );
	quizSection.classList.add(
		"min-h-full",
		"h-full",
		"px-6",
		"py-4",
		"lg:px-8",
		"grid",
		"gap-4",
		"grid-cols-1",
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
        <div class="w-full bg-transparent rounded-full p-6">
			<div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%" id="quizProgressBar"></div>
		</div>
    `;
	displayContainer.appendChild( quizSection );
}


// Function to create and append the action buttons dynamically
export function createActionButtons(): void {
	removeElementById( "actionButtons" );
	const actionButtons = document.createElement( "section" );
	actionButtons.id = "actionButtons";
	actionButtons.className =
		"buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-2 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
	actionButtons.innerHTML = `
		<button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg order-3">Select a Different Quiz</button>
		<button id="logoutButton" class="logout-button text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 order-last">Logout</button>
    `;
	displayContainer.appendChild( actionButtons );
	logoutEventListener();
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
export function returnToBeginning(): void {
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
export function loadQuiz(): void {
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
	let progressItem;
	if ( currentProgress ) {
		progressItem = currentProgress.find(
			( item ) =>
				item.quizId === quizId && item.difficultyLevel === difficultyLevel
		);
	}
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
	progressBar.style.width = String( `${ progressValue }%` ); // Update the value of the progress bar

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

	if ( selectedAnswer.correct ) {
		score++;
	}

	currentQuestion++;
	saveProgress();

	// Display the next question
	displayQuestion();
}

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
 * Displays a selection of quizzes to view leaderboards.
 * Fetches all quiz names from the stored data and creates buttons for each quiz.
 * Adds a back button to return to the quiz selection.
 */
export function displayLeaderboardSelection(): void {
	removeAllSections();
	checkScoreHistory();
	createHeaderSection();

	const selectionContainer = document.createElement( "section" );
	selectionContainer.id = "leaderboardSelection";
	selectionContainer.classList.add(
		"selectionContainer",
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
		"lg:w-11/12"
	);

	// Fetch all quiz names from the stored data
	const quizNames = getAllQuizNames();

	// Create a heading
	const heading = document.createElement( "h2" );
	heading.textContent = "Select a Quiz to View Leaderboard";
	heading.className =
		"text-center text-4xl py-5 font-extrabold dark:text-white";
	selectionContainer.appendChild( heading );

	const leaderboardOptions = document.createElement( "div" );
	leaderboardOptions.id = "leaderboardOptions";
	leaderboardOptions.className =
		"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3";
	selectionContainer.appendChild( leaderboardOptions );

	// Create buttons for each quiz
	quizNames.forEach( ( quizName: string ) => {
		const button = document.createElement( "button" );
		button.textContent = quizName;
		button.className =
			"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 m-2";
		button.addEventListener( "click", () => {
			removeAllSections();
			displayLeaderboard( quizName );
		} );
		leaderboardOptions.appendChild( button );
	} );

	displayContainer.appendChild( selectionContainer );
}

function displayLeaderboard( quizName: string ): void {
	removeAllSections();
	checkScoreHistory();

	const leaderboardContainer = document.createElement( "section" );
	leaderboardContainer.id = "leaderboardContainer";
	leaderboardContainer.classList.add(
		"flex",
		"min-h-full",
		"flex-col",
		"justify-center",
		"items-stretch",
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
		"leaderboardContainer"
	);

	// Create a heading
	const heading = document.createElement( "h2" );
	heading.textContent = `Leaderboard for ${ quizName }`;
	heading.className =
		"text-center text-4xl py-5 font-extrabold dark:text-white";
	leaderboardContainer.appendChild( heading );

	// Get leaderboard data organized by level
	const leaderboardDataByLevel = getLeaderboardDataByLevel( quizName );

	// Loop over each level and create a table
	const levels = Array.from( leaderboardDataByLevel.keys() ).sort(
		( a, b ) => a - b
	);

	levels.forEach( ( level ) => {
		const tableHeading = document.createElement( "h3" );
		tableHeading.textContent = `Level ${ level }`;
		tableHeading.className = "text-xl pt-3";
		leaderboardContainer.appendChild( tableHeading );

		// Create a table to display the leaderboard
		const table = document.createElement( "table" );
		table.className =
			"w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-100";

		// Table header
		const thead = document.createElement( "thead" );
		thead.className =
			"text-md text-white uppercase bg-gray-400 dark:bg-gray-700";
		const headerRow = document.createElement( "tr" );

		const rankHeader = document.createElement( "th" );
		rankHeader.textContent = "Rank";
		rankHeader.className = "py-1 text-center";

		const userHeader = document.createElement( "th" );
		userHeader.textContent = "User";
		userHeader.className = "py-1 text-center";

		const scoreHeader = document.createElement( "th" );
		scoreHeader.textContent = "Score";
		scoreHeader.className = "py-1 text-center";

		const dateHeader = document.createElement( "th" );
		dateHeader.textContent = "Date";
		dateHeader.className = "py-1 text-center";

		const dateTimeHeader = document.createElement( "th" );
		dateTimeHeader.textContent = "Time";
		dateTimeHeader.className = "py-1 text-center";

		headerRow.appendChild( rankHeader );
		headerRow.appendChild( userHeader );
		headerRow.appendChild( scoreHeader );
		headerRow.appendChild( dateHeader );
		headerRow.appendChild( dateTimeHeader );
		thead.appendChild( headerRow );
		table.appendChild( thead );

		// Table body
		const tbody = document.createElement( "tbody" );
		const entries = leaderboardDataByLevel.get( level )!;

		entries.forEach(
			(
				entry: { username: string; score: any; date: Date; },
				index: number
			) => {
				const row = document.createElement( "tr" );
				row.className =
					"bg-white hover:bg-gray-200 dark:hover:bg-slate-700 border-b dark:bg-gray-800 dark:border-gray-700";

				const rankCell = document.createElement( "td" );
				rankCell.textContent = ( index + 1 ).toString();
				rankCell.className =
					"border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center";

				const userCell = document.createElement( "td" );
				userCell.textContent = entry.username;
				userCell.className =
					"border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center";

				const scoreCell = document.createElement( "td" );
				scoreCell.textContent = `${ entry.score }%`;
				scoreCell.className =
					"border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center";

				const dateCell = document.createElement( "td" );
				dateCell.textContent = JSON.stringify( formatDate( entry.date ) );
				dateCell.className =
					"border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center";

				const timeCell = document.createElement( "td" );
				timeCell.textContent = JSON.stringify( formatTime( entry.date ) );
				timeCell.className =
					"border-b font-medium text-gray-900 whitespace-nowrap dark:text-white text-center";

				row.appendChild( rankCell );
				row.appendChild( userCell );
				row.appendChild( scoreCell );
				row.appendChild( dateCell );
				row.append( timeCell );
				tbody.appendChild( row );
			}
		);

		table.appendChild( tbody );
		leaderboardContainer.appendChild( table );
	} );

	displayContainer.appendChild( leaderboardContainer );
}

function getAllQuizNames(): string[] {
	const quizNamesSet = new Set<string>();

	// Iterate over localStorage keys
	for ( let i = 0; i < localStorage.length; i++ ) {
		const key = localStorage.key( i );
		if ( key && key.startsWith( "quizScores_" ) ) {
			const scores = JSON.parse( localStorage.getItem( key ) || "[]" );
			scores.forEach( ( score: Score ) => {
				quizNamesSet.add( score.quiz );
			} );
		}
	}

	return Array.from( quizNamesSet ).sort();
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
function getLeaderboardDataByLevel(
	quizName: string
): Map<number, LeaderboardEntry[]> {
	const leaderboardDataByLevel = new Map<number, LeaderboardEntry[]>();

	// Retrieve users array from localStorage
	const users = JSON.parse( localStorage.getItem( "users" ) || "[]" ) as User[];

	// Create a map of user IDs to usernames for quick lookup
	const userIdToUsernameMap = new Map<string, string>();
	users.forEach( ( user ) => {
		userIdToUsernameMap.set( user.id, user.username );
	} );

	// Iterate over localStorage keys
	for ( let i = 0; i < localStorage.length; i++ ) {
		const key = localStorage.key( i );
		if ( key && key.startsWith( "quizScores_" ) ) {
			const userId = key.replace( "quizScores_", "" );
			const scores = JSON.parse(
				localStorage.getItem( key ) || "[]"
			) as Score[];

			// Filter scores for the selected quiz
			const quizScores = scores.filter(
				( score ) => score.quiz === quizName
			);

			if ( quizScores.length > 0 ) {
				// Organize scores by level for this user
				const scoresByLevel = new Map<
					number,
					{ score: number; date: Date; level: number; }
				>();

				quizScores.forEach( ( s ) => {
					const percentage = ( s.score / s.total ) * 100;
					const existingEntry = scoresByLevel.get( s.difficultyLevel );

					if ( !existingEntry || percentage > existingEntry.score ) {
						scoresByLevel.set( s.difficultyLevel, {
							score: percentage,
							date: s.date,
							level: s.difficultyLevel,
						} );
					}
				} );

				// Get the username from the users array
				const username =
					userIdToUsernameMap.get( userId ) || "Unknown User";

				// Update the leaderboard data by level
				scoresByLevel.forEach( ( value, level ) => {
					const entry: LeaderboardEntry = {
						username,
						score: Math.round( value.score ),
						date: value.date,
						level: value.level,
					};

					if ( !leaderboardDataByLevel.has( level ) ) {
						leaderboardDataByLevel.set( level, [] );
					}
					leaderboardDataByLevel.get( level )!.push( entry );
				} );
			}
		}
	}

	// Sort each level's leaderboard data by score descending
	leaderboardDataByLevel.forEach( ( entries ) => {
		entries.sort( ( a, b ) => b.score - a.score );
	} );

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

function setupNavigationListeners(): void {
	const quizzesLink = document.querySelector( 'a[href="#quizzes"]' );
	const leaderboardLink = document.querySelector( 'a[href="#leaderboard"]' );
	const profileLink = document.querySelector( 'a[href="#profile"]' );
	const logoutButton = document.querySelector( '.logout-button' );


	if ( quizzesLink ) {
		quizzesLink.addEventListener( 'click', () => {
			removeAllSections();
			createQuizSelection(); // Function to create the quiz selection section
		} );
	}

	if ( leaderboardLink ) {
		leaderboardLink.addEventListener( 'click', () => {
			removeAllSections();
			displayLeaderboardSelection(); // Function to create the leaderboard section
		} );
	}

	if ( profileLink ) {
		profileLink.addEventListener( 'click', () => {
			removeAllSections();
			createProfileSection(); // Function to create the user profile section
		} );
	}

	if ( logoutButton ) {
		logoutEventListener();
	}
}

export function createHeaderSection() {
	console.log( "Creating header section..." );
	// Create header section
	const headerSection = document.createElement( "header" );
	headerSection.className = "bg-gray-200 dark:bg-gray-900 shadow-lg order-1";
	headerSection.id = "headerSection";

	headerSection.innerHTML = `
		<div class="items-center p-5 flex justify-between">
            <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white cols-span-4">
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-br to-emerald-900 from-blue-100">Expanding</span>
                Your Knowledge.
            </h1>
            <nav class="space-x-4 navigation-bar flex items-center">
                <a href="#quizzes" class="text-gray-800 dark:text-white hover:underline">Quizzes</a>
                <a id="leaderboardLink" href="#leaderboard" class="text-gray-800 dark:text-white hover:underline">Leaderboard</a>
                <button id="logoutButton"
                    class="logout-button bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 focus:outline-none order-last">Logout</button>
            </nav>
        </div>
	`;

	const body = document.querySelector( "body" );
	const titleSection = document.querySelector( ".title-section" );
	body?.insertBefore( headerSection, titleSection! );
	const leaderboardLink = document.querySelector( ".leaderboardLink" );

	const currentUserId = sessionStorage.getItem( "currentUserId" );

	if ( currentUserId ) {
		const navigationBar = document.querySelector( ".navigation-bar" );
		const profileLink = document.createElement( "a" );
		profileLink.href = "#profile";
		profileLink.textContent = "Profile";
		profileLink.className = "text-gray-800 dark:text-white hover:underline";
		navigationBar?.insertBefore( profileLink, leaderboardLink );
	}

	setupNavigationListeners();
}

// Initial load
window.addEventListener( "load", () => {
	loadQuiz();
	setupNavigationListeners();
} );
