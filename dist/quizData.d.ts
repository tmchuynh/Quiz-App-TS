export interface Answer {
    text: string;
    correct: boolean;
}
export interface Question {
    question: string;
    answers: Answer[];
}
export interface QuizData {
    chemistryQuizData: Question[];
    physicsQuizData: Question[];
    biologyQuizData: Question[];
    mathQuizData: Question[];
    englishQuizData: Question[];
    historyQuizData: Question[];
    geographyQuizData: Question[];
    computerScienceQuizData: Question[];
    literatureQuizData: Question[];
    philosophyQuizData: Question[];
    socialStudiesQuizData: Question[];
    politicsQuizData: Question[];
    economicsQuizData: Question[];
    psychologyQuizData: Question[];
    artQuizData: Question[];
    musicQuizData: Question[];
    sportsQuizData: Question[];
    engineeringQuizData: Question[];
    realEstateQuizData: Question[];
    healthCareQuizData: Question[];
    astrologyQuizData: Question[];
    animalQuizData: Question[];
    financeQuizData: Question[];
}
export interface QuizItem {
    id: string;
    data: Quiz;
}
export interface Quiz {
    [difficultyLevel: number]: Question[];
}
export interface QuizOption {
    id: string;
    label: string;
    category: string;
}
export declare const quizOptions: QuizOption[];
export declare const chemistryData: Quiz;
export declare const historyData: Quiz;
export declare const mathData: Quiz;
export declare const quizDataMap: {
    [key: string]: Quiz;
};
export declare const quizData: QuizItem[];
export type QuizDataKey = typeof quizData[number]["id"];
export declare function isQuizDataKey(key: string): key is QuizDataKey;
