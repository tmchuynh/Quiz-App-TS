export const quizOptions = [
    { id: "artQuiz", label: "Art Quiz", category: "humanities" },
    { id: "astrologyQuiz", label: "Astrology Quiz", category: "humanities" },
    { id: "literatureQuiz", label: "Literature Quiz", category: "humanities" },
    { id: "englishQuiz", label: "English Quiz", category: "humanities" },
    { id: "historyQuiz", label: "History Quiz", category: "humanities" },
    { id: "geographyQuiz", label: "Geography Quiz", category: "humanities" },
    { id: "philosophyQuiz", label: "Philosophy Quiz", category: "humanities" },
    { id: "socialStudiesQuiz", label: "Social Studies Quiz", category: "humanities" },
    { id: "sportsQuiz", label: "Sports Quiz", category: "entertainment" },
    { id: "animalQuiz", label: "Animals Quiz", category: "entertainment" },
    { id: "musicQuiz", label: "Music Quiz", category: "entertainment" },
    { id: "chemistryQuiz", label: "Chemistry Quiz", category: "sciences" },
    { id: "psychologyQuiz", label: "Psychology Quiz", category: "sciences" },
    { id: "physicsQuiz", label: "Physics Quiz", category: "sciences" },
    { id: "biologyQuiz", label: "Biology Quiz", category: "sciences" },
    { id: "healthCareQuiz", label: "Health Care Quiz", category: "sciences" },
    { id: "mathQuiz", label: "Math Quiz", category: "technology" },
    { id: "computerScienceQuiz", label: "Computer Science Quiz", category: "technology" },
    { id: "engineeringQuiz", label: "Engineering Quiz", category: "technology" },
    { id: "politicsQuiz", label: "Politics Quiz", category: "social-studies" },
    { id: "economicsQuiz", label: "Economics Quiz", category: "social-studies" },
    { id: "financeQuiz", label: "Finance Quiz", category: "social-studies" },
    { id: "realEstateQuiz", label: "Real Estate Quiz", category: "social-studies" }
];
// Chemistry Quiz Data
export const chemistryData = {
    1: [
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Au", correct: true },
                { text: "Ag", correct: false },
                { text: "Pb", correct: false },
                { text: "Fe", correct: false },
            ],
        },
        {
            question: "Which of the following is a noble gas?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Argon", correct: true },
                { text: "Hydrogen", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the pH of pure water?",
            answers: [
                { text: "7", correct: true },
                { text: "5", correct: false },
                { text: "10", correct: false },
                { text: "3", correct: false },
            ],
        },
        {
            question: "Which acid is found in citrus fruits?",
            answers: [
                { text: "Acetic acid", correct: false },
                { text: "Citric acid", correct: true },
                { text: "Lactic acid", correct: false },
                { text: "Sulfuric acid", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the primary component of natural gas?",
            answers: [
                { text: "Ethane", correct: false },
                { text: "Propane", correct: false },
                { text: "Methane", correct: true },
                { text: "Butane", correct: false },
            ],
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Argon", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What type of bond involves the sharing of electron pairs between atoms?",
            answers: [
                { text: "Ionic bond", correct: false },
                { text: "Covalent bond", correct: true },
                { text: "Metallic bond", correct: false },
                { text: "Hydrogen bond", correct: false },
            ],
        },
        {
            question: "Which element has the atomic number 1?",
            answers: [
                { text: "Helium", correct: false },
                { text: "Hydrogen", correct: true },
                { text: "Lithium", correct: false },
                { text: "Oxygen", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is the process of a solid turning directly into a gas called?",
            answers: [
                { text: "Condensation", correct: false },
                { text: "Sublimation", correct: true },
                { text: "Evaporation", correct: false },
                { text: "Deposition", correct: false },
            ],
        },
        {
            question: "Which of the following is a base?",
            answers: [
                { text: "Hydrochloric acid", correct: false },
                { text: "Sodium hydroxide", correct: true },
                { text: "Acetic acid", correct: false },
                { text: "Sulfuric acid", correct: false },
            ],
        },
    ],
};
// History Quiz Data
export const historyData = {
    1: [
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "George Washington", correct: true },
                { text: "Abraham Lincoln", correct: false },
                { text: "John Adams", correct: false },
            ],
        },
        {
            question: "Which war was fought between the North and South regions in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Civil War", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "War of 1812", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1920", correct: false },
                { text: "1898", correct: false },
            ],
        },
        {
            question: "Who wrote the Declaration of Independence?",
            answers: [
                { text: "James Madison", correct: false },
                { text: "George Washington", correct: false },
                { text: "Thomas Jefferson", correct: true },
                { text: "Benjamin Franklin", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Which empire was known for its road system and postal service?",
            answers: [
                { text: "Roman Empire", correct: true },
                { text: "Ottoman Empire", correct: false },
                { text: "Mongol Empire", correct: false },
                { text: "Persian Empire", correct: false },
            ],
        },
        {
            question: "What ancient civilization is known for its pyramids?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Rome", correct: false },
                { text: "Egypt", correct: true },
                { text: "Mesopotamia", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Who was the famous queen of Egypt known for her relationships with Julius Caesar and Mark Antony?",
            answers: [
                { text: "Nefertiti", correct: false },
                { text: "Cleopatra", correct: true },
                { text: "Hatshepsut", correct: false },
                { text: "Tutankhamun", correct: false },
            ],
        },
        {
            question: "What event began the French Revolution?",
            answers: [
                { text: "Storming of the Bastille", correct: true },
                { text: "The Reign of Terror", correct: false },
                { text: "Napoleon's Rise to Power", correct: false },
                { text: "The Declaration of the Rights of Man", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What was the primary cause of World War I?",
            answers: [
                { text: "Economic Crisis", correct: false },
                { text: "Assassination of Archduke Franz Ferdinand", correct: true },
                { text: "Colonial Rivalries", correct: false },
                { text: "Treaty of Versailles", correct: false },
            ],
        },
        {
            question: "Which movement sought to end racial segregation in the United States?",
            answers: [
                { text: "Women's Suffrage Movement", correct: false },
                { text: "Civil Rights Movement", correct: true },
                { text: "Labor Movement", correct: false },
                { text: "Environmental Movement", correct: false },
            ],
        },
    ],
};
// Math Quiz Data
export const mathData = {
    1: [
        {
            question: "What is the square root of 144?",
            answers: [
                { text: "10", correct: false },
                { text: "12", correct: true },
                { text: "14", correct: false },
                { text: "16", correct: false },
            ],
        },
        {
            question: "If x + 5 = 10, what is x?",
            answers: [
                { text: "3", correct: false },
                { text: "5", correct: true },
                { text: "10", correct: false },
                { text: "15", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is 15% of 200?",
            answers: [
                { text: "20", correct: false },
                { text: "25", correct: false },
                { text: "30", correct: true },
                { text: "35", correct: false },
            ],
        },
        {
            question: "What is the value of π (Pi) to two decimal places?",
            answers: [
                { text: "3.14", correct: true },
                { text: "3.15", correct: false },
                { text: "3.13", correct: false },
                { text: "3.16", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the formula for the area of a circle?",
            answers: [
                { text: "πr^2", correct: true },
                { text: "2πr", correct: false },
                { text: "r^2", correct: false },
                { text: "πd", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the derivative of x^2?",
            answers: [
                { text: "2x", correct: true },
                { text: "x", correct: false },
                { text: "x^2", correct: false },
                { text: "1", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "Solve for x: 2x + 3 = 11",
            answers: [
                { text: "4", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "3", correct: false },
            ],
        },
    ],
};
export const quizDataMap = {
    chemistryQuiz: chemistryData,
    historyQuiz: historyData,
    mathQuiz: mathData,
};
export const quizData = [
    { id: "chemistryQuiz", data: chemistryData },
    { id: "historyQuiz", data: historyData },
    { id: "mathQuiz", data: mathData },
];
export function isQuizDataKey(key) {
    return quizData.some(quiz => quiz.id === key);
}
//# sourceMappingURL=quizData.js.map