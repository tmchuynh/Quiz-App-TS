import { removeLeaderboardSection, removeLeaderboardSelection, removeProfileSection, removeElementById, formatDate, formatTime, logoutEventListener, removeAllSections, removeDifficultySelectionSection } from "./utilities.js";
import { displayContainer, returnToBeginning, loadQuiz, displayLeaderboardSelection } from "./index.js";
// Function to create the past scores section dynamically
export function createPastScoresSection() {
    removeLeaderboardSection();
    removeLeaderboardSelection();
    removeProfileSection();
    removeDifficultySelectionSection();
    // createHeaderSection();
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "view-score-history");
    pastScoresSection.id = "pastScoresSection";
    pastScoresSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Past Scores</h2>
		<div class="overflow-x-auto">
        	<table id="pastScores" class="scores-table w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-100" style="width: 100%; border-collapse: collapse;"></table>
        </div>
    `;
    displayContainer.appendChild(pastScoresSection);
}
// Function to get the highest score for a specific level
export function getHighestScoreForLevel(level, score) {
    const levelScores = score
        .filter(item => item.difficultyLevel === level)
        .filter(item => item.quiz == sessionStorage.getItem("quizType"))
        .map(item => item.score); // Assuming 'score' is the property that holds the score value
    console.log("Level scores:", levelScores);
    return levelScores.length > 0 ? Math.max(...levelScores) : null;
}
export // Function to create and append the score section dynamically
 function createScoreSection() {
    var _a;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("flex", "min-h-full", "flex-col", "justify-center", "px-6", "py-4", "lg:px-8", "container", "border-4", "border-gray-200", "dark:border-gray-100", "dark:bg-gray-800", "dark:text-white", "rounded-2xl", "mx-auto", "my-4", "col-span-12", "lg:col-span-6", "w-full", "lg:w-11/12", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="text-center text-4xl py-5 font-extrabold dark:text-white">Quiz Completed!</h2>
        <p id="scoreMessage" class="py-4"></p>
        <button id="retryButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800  retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_a = document
        .querySelector("#retryButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => returnToBeginning());
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
export function createScoresButtons() {
    var _a, _b, _c;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-2 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
    actionButtons.innerHTML = `
		<button id="viewScoresButton" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">View Past Scores</button>
		<button id="backToSelectionButton" class="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg">Select a Different Quiz</button>
		<button id="logoutButton" class="logout-button text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 order-last">Logout</button>
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
    (_a = document
        .querySelector("#backToSelectionButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    (_b = document
        .getElementById("viewLeaderboardsButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeAllSections();
        displayLeaderboardSelection();
    });
    (_c = document
        .querySelector("#viewScoresButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        removeElementById("quizSelectionSection");
        createSortButtons();
    });
}
export function createSortButtons() {
    var _a, _b, _c, _d, _e, _f, _g;
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className =
        "buttonGroup md:grid grid-cols-1 gap-1 mx-auto my-auto w-3/4 lg:col-span-3 lg:grid-cols-1 grid-cols-2 col-span-9 text-center md:grid-flow-row md:auto-rows-max grid-flow-col auto-cols-max lg:order-first order-last py-8";
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
			<button id="logoutButton" class="logout-button text-white bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Logout</button>
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
    (_a = document
        .getElementById("viewLeaderboardsButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
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
    (_b = document
        .querySelector("#sortByQuizButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const sortedByQuiz = [...filteredScores].sort((a, b) => a.quiz.localeCompare(b.quiz));
        renderScores(sortedByQuiz);
        filteredScores = sortedByQuiz;
    });
    // Sort by Date (newest to oldest)
    (_c = document
        .querySelector("#sortByDateButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        const sortedByDate = [...filteredScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        renderScores(sortedByDate);
        filteredScores = sortedByDate;
    });
    // Sort by Score (highest to lowest)
    (_d = document
        .querySelector("#sortByScoreButton")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
        const sortedByPercentage = [...filteredScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });
        renderScores(sortedByPercentage);
        filteredScores = sortedByPercentage;
    });
    // Clear Filters
    (_e = document
        .querySelector("#clearFiltersButton")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
        filteredScores = [...pastScores];
        filterByQuizDropdown.value = "Filter by Quiz"; // Reset dropdown selection
        // Reset date inputs
        document.getElementById("startDateInput").value = "";
        document.getElementById("endDateInput").value = "";
        renderScores(filteredScores);
    });
    (_f = document
        .querySelector("#backToSelectionButton")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
        removeAllSections();
        loadQuiz();
    });
    (_g = document
        .querySelector("#resetScoresButton")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
function createDialog() {
    var _a, _b;
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
    (_a = document.getElementById("resetConfirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const currentUserId = sessionStorage.getItem("currentUserId");
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem("quizData");
        sessionStorage.removeItem("quizId");
        removeElementById("dialog"); // Close the dialog
        removeAllSections();
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_b = document.querySelector("#cancel-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById("dialog"); // Close the dialog
    });
}
//# sourceMappingURL=scores.js.map