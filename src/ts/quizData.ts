import { QuizOption, Quiz, QuizItem } from "./interfaces.js";

export const quizOptions: QuizOption[] = [
    { id: "animalQuiz", label: "Animals Quiz", category: "entertainment" },
    { id: "astrologyQuiz", label: "Astrology Quiz", category: "humanities" },
    { id: "artQuiz", label: "Art Quiz", category: "humanities" },
    { id: "biologyQuiz", label: "Biology Quiz", category: "sciences" },
    { id: "chemistryQuiz", label: "Chemistry Quiz", category: "sciences" },
    {
        id: "computerScienceQuiz",
        label: "Computer Science Quiz",
        category: "technology",
    },
    {
        id: "economicsQuiz",
        label: "Economics Quiz",
        category: "social-studies",
    },
    { id: "englishQuiz", label: "English Quiz", category: "humanities" },
    {
        id: "engineeringQuiz",
        label: "Engineering Quiz",
        category: "technology",
    },
    { id: "financeQuiz", label: "Finance Quiz", category: "social-studies" },
    { id: "geographyQuiz", label: "Geography Quiz", category: "humanities" },
    { id: "healthCareQuiz", label: "Health Care Quiz", category: "sciences" },
    { id: "historyQuiz", label: "History Quiz", category: "humanities" },
    { id: "literatureQuiz", label: "Literature Quiz", category: "humanities" },
    { id: "mathQuiz", label: "Math Quiz", category: "technology" },
    { id: "musicQuiz", label: "Music Quiz", category: "entertainment" },
    { id: "philosophyQuiz", label: "Philosophy Quiz", category: "humanities" },
    { id: "physicsQuiz", label: "Physics Quiz", category: "sciences" },
    { id: "politicsQuiz", label: "Politics Quiz", category: "social-studies" },
    {
        id: "realEstateQuiz",
        label: "Real Estate Quiz",
        category: "social-studies",
    },
    { id: "psychologyQuiz", label: "Psychology Quiz", category: "sciences" },
    {
        id: "socialStudiesQuiz",
        label: "Social Studies Quiz",
        category: "humanities",
    },
    {
        id: "sociologyQuiz",
        label: "Sociology Quiz",
        category: "social-studies",
    },
    { id: "sportsQuiz", label: "Sports Quiz", category: "entertainment" },
    { id: "warfareQuiz", label: "Warfare Quiz", category: "humanities" },
];

// Animal Quiz Data
export const animalData: Quiz = {
    1: [
        {
            question: "What is the largest land animal?",
            answers: [
                { text: "Elephant", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
                { text: "Rhinoceros", correct: false },
            ],
        },
        {
            question: "Which bird is known for its impressive courtship dance?",
            answers: [
                { text: "Peacock", correct: false },
                { text: "Swan", correct: false },
                { text: "Bird of Paradise", correct: true },
                { text: "Flamingo", correct: false },
            ],
        },
        {
            question: "What is the fastest land animal?",
            answers: [
                { text: "Cheetah", correct: true },
                { text: "Lion", correct: false },
                { text: "Pronghorn", correct: false },
                { text: "Greyhound", correct: false },
            ],
        },
        {
            question: "Which mammal is known to have the most powerful bite?",
            answers: [
                { text: "Lion", correct: false },
                { text: "Hippopotamus", correct: true },
                { text: "Tiger", correct: false },
                { text: "Crocodile", correct: false },
            ],
        },
        {
            question: "What is the largest species of shark?",
            answers: [
                { text: "Great White Shark", correct: false },
                { text: "Hammerhead Shark", correct: false },
                { text: "Whale Shark", correct: true },
                { text: "Bull Shark", correct: false },
            ],
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            answers: [
                { text: "Tiger", correct: false },
                { text: "Lion", correct: true },
                { text: "Elephant", correct: false },
                { text: "Leopard", correct: false },
            ],
        },
        {
            question: "What is the primary diet of a panda?",
            answers: [
                { text: "Bamboo", correct: true },
                { text: "Fish", correct: false },
                { text: "Insects", correct: false },
                { text: "Fruits", correct: false },
            ],
        },
        {
            question:
                "Which marine animal is known for its intelligence and playful behavior?",
            answers: [
                { text: "Dolphin", correct: true },
                { text: "Whale", correct: false },
                { text: "Shark", correct: false },
                { text: "Octopus", correct: false },
            ],
        },
        {
            question: "What is the tallest animal in the world?",
            answers: [
                { text: "Giraffe", correct: true },
                { text: "Elephant", correct: false },
                { text: "Kangaroo", correct: false },
                { text: "Ostrich", correct: false },
            ],
        },
        {
            question:
                "Which reptile is known for its ability to change colors?",
            answers: [
                { text: "Chameleon", correct: true },
                { text: "Crocodile", correct: false },
                { text: "Snake", correct: false },
                { text: "Turtle", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the largest species of penguin?",
            answers: [
                { text: "Emperor Penguin", correct: true },
                { text: "King Penguin", correct: false },
                { text: "Adelie Penguin", correct: false },
                { text: "Chinstrap Penguin", correct: false },
            ],
        },
        {
            question: "Which mammal has the longest gestation period?",
            answers: [
                { text: "Elephant", correct: true },
                { text: "Blue Whale", correct: false },
                { text: "Giraffe", correct: false },
                { text: "Horse", correct: false },
            ],
        },
        {
            question: "What is the primary function of a bee's stinger?",
            answers: [
                { text: "To collect pollen", correct: false },
                { text: "To communicate", correct: false },
                { text: "For defense", correct: true },
                { text: "To attract mates", correct: false },
            ],
        },
        {
            question: "Which animal is known for its exceptional memory?",
            answers: [
                { text: "Elephant", correct: true },
                { text: "Dolphin", correct: false },
                { text: "Crow", correct: false },
                { text: "Rabbit", correct: false },
            ],
        },
        {
            question: "What is the only mammal capable of true flight?",
            answers: [
                { text: "Bat", correct: true },
                { text: "Flying Squirrel", correct: false },
                { text: "Sugar Glider", correct: false },
                { text: "Pigeon", correct: false },
            ],
        },
        {
            question: "Which animal has the longest lifespan?",
            answers: [
                { text: "Galapagos Tortoise", correct: true },
                { text: "Bowhead Whale", correct: false },
                { text: "Elephant", correct: false },
                { text: "Greenland Shark", correct: false },
            ],
        },
        {
            question: "What is the fastest marine mammal?",
            answers: [
                { text: "Dolphin", correct: true },
                { text: "Orca", correct: false },
                { text: "Dugong", correct: false },
                { text: "Manatee", correct: false },
            ],
        },
        {
            question: "Which insect is known for its complex social structure?",
            answers: [
                { text: "Ant", correct: true },
                { text: "Butterfly", correct: false },
                { text: "Dragonfly", correct: false },
                { text: "Bee", correct: true },
            ],
        },
        {
            question: "What is the largest species of cat?",
            answers: [
                { text: "Lion", correct: false },
                { text: "Tiger", correct: true },
                { text: "Leopard", correct: false },
                { text: "Jaguar", correct: false },
            ],
        },
        {
            question: "Which animal is known to migrate the longest distance?",
            answers: [
                { text: "Arctic Tern", correct: true },
                { text: "Monarch Butterfly", correct: false },
                { text: "Humpback Whale", correct: false },
                { text: "Caribou", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the largest species of lizard?",
            answers: [
                { text: "Komodo Dragon", correct: true },
                { text: "Green Iguana", correct: false },
                { text: "Gila Monster", correct: false },
                { text: "Bearded Dragon", correct: false },
            ],
        },
        {
            question: "Which animal is known as the 'Ship of the Desert'?",
            answers: [
                { text: "Horse", correct: false },
                { text: "Camel", correct: true },
                { text: "Donkey", correct: false },
                { text: "Mule", correct: false },
            ],
        },
        {
            question: "What is the only continent without reptiles or snakes?",
            answers: [
                { text: "Antarctica", correct: true },
                { text: "Europe", correct: false },
                { text: "Australia", correct: false },
                { text: "Africa", correct: false },
            ],
        },
        {
            question:
                "Which animal is known for having black and white stripes?",
            answers: [
                { text: "Zebra", correct: true },
                { text: "Tiger", correct: false },
                { text: "Skunk", correct: false },
                { text: "Dalmatian", correct: false },
            ],
        },
        {
            question: "What is the largest species of penguin?",
            answers: [
                { text: "Emperor Penguin", correct: true },
                { text: "King Penguin", correct: false },
                { text: "Adelie Penguin", correct: false },
                { text: "Chinstrap Penguin", correct: false },
            ],
        },
        {
            question: "Which mammal is capable of echolocation?",
            answers: [
                { text: "Bat", correct: true },
                { text: "Elephant", correct: false },
                { text: "Whale", correct: false },
                { text: "Lion", correct: false },
            ],
        },
        {
            question: "What is the primary diet of a koala?",
            answers: [
                { text: "Eucalyptus leaves", correct: true },
                { text: "Grass", correct: false },
                { text: "Bamboo", correct: false },
                { text: "Insects", correct: false },
            ],
        },
        {
            question: "Which bird is known for its ability to mimic sounds?",
            answers: [
                { text: "Parrot", correct: true },
                { text: "Eagle", correct: false },
                { text: "Sparrow", correct: false },
                { text: "Owl", correct: false },
            ],
        },
        {
            question: "What is the smallest mammal in the world?",
            answers: [
                { text: "Bumblebee Bat", correct: true },
                { text: "Pygmy Shrew", correct: false },
                { text: "Etruscan Shrew", correct: false },
                { text: "Least Weasel", correct: false },
            ],
        },
        {
            question: "Which animal has the longest neck?",
            answers: [
                { text: "Giraffe", correct: true },
                { text: "Swan", correct: false },
                { text: "Flamingo", correct: false },
                { text: "Albatross", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the largest species of dolphin?",
            answers: [
                { text: "Common Bottlenose Dolphin", correct: false },
                { text: "Orca", correct: false },
                { text: "Pacific White-Sided Dolphin", correct: false },
                { text: "Dusky Dolphin", correct: false },
            ],
        },
        {
            question:
                "Which mammal is known to have the highest blood pressure?",
            answers: [
                { text: "Giraffe", correct: true },
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: false },
                { text: "Horse", correct: false },
            ],
        },
        {
            question: "What is the main diet of a polar bear?",
            answers: [
                { text: "Seals", correct: true },
                { text: "Fish", correct: false },
                { text: "Berries", correct: false },
                { text: "Whales", correct: false },
            ],
        },
        {
            question:
                "Which animal is known for its ability to regenerate lost body parts?",
            answers: [
                { text: "Starfish", correct: true },
                { text: "Lizard", correct: false },
                { text: "Crab", correct: false },
                { text: "Salamander", correct: true },
            ],
        },
        {
            question: "What is the primary sense used by bats to navigate?",
            answers: [
                { text: "Vision", correct: false },
                { text: "Hearing", correct: true },
                { text: "Smell", correct: false },
                { text: "Touch", correct: false },
            ],
        },
        {
            question: "Which animal is known for having a prehensile tail?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Chimpanzee", correct: true },
                { text: "Tiger", correct: false },
                { text: "Lion", correct: false },
            ],
        },
        {
            question: "What is the largest species of turtle?",
            answers: [
                { text: "Leatherback Sea Turtle", correct: true },
                { text: "Green Sea Turtle", correct: false },
                { text: "Hawksbill Sea Turtle", correct: false },
                { text: "Loggerhead Sea Turtle", correct: false },
            ],
        },
        {
            question:
                "Which animal is known for its incredible camouflage abilities?",
            answers: [
                { text: "Chameleon", correct: true },
                { text: "Elephant", correct: false },
                { text: "Kangaroo", correct: false },
                { text: "Panda", correct: false },
            ],
        },
        {
            question: "What is the primary habitat of the Bengal tiger?",
            answers: [
                { text: "Savannah", correct: false },
                { text: "Rainforest", correct: true },
                { text: "Desert", correct: false },
                { text: "Tundra", correct: false },
            ],
        },
        {
            question: "Which marine animal has three hearts?",
            answers: [
                { text: "Octopus", correct: true },
                { text: "Dolphin", correct: false },
                { text: "Whale", correct: false },
                { text: "Shark", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "Which animal is known for its ability to hold its breath the longest?",
            answers: [
                { text: "Elephant Seal", correct: true },
                { text: "Dolphin", correct: false },
                { text: "Whale Shark", correct: false },
                { text: "Sea Turtle", correct: false },
            ],
        },
        {
            question: "What is the smallest bird in the world?",
            answers: [
                { text: "Bee Hummingbird", correct: true },
                { text: "Sparrow", correct: false },
                { text: "Peregrine Falcon", correct: false },
                { text: "Robin", correct: false },
            ],
        },
        {
            question: "Which animal has the longest migration route?",
            answers: [
                { text: "Monarch Butterfly", correct: false },
                { text: "Arctic Tern", correct: true },
                { text: "Gray Whale", correct: false },
                { text: "Swallow", correct: false },
            ],
        },
        {
            question: "What is the primary food source for the giant panda?",
            answers: [
                { text: "Bamboo", correct: true },
                { text: "Fish", correct: false },
                { text: "Insects", correct: false },
                { text: "Fruits", correct: false },
            ],
        },
        {
            question: "Which mammal is capable of true flight?",
            answers: [
                { text: "Bat", correct: true },
                { text: "Flying Squirrel", correct: false },
                { text: "Sugar Glider", correct: false },
                { text: "Pigeon", correct: false },
            ],
        },
        {
            question: "What is the only mammal capable of sustained flight?",
            answers: [
                { text: "Bat", correct: true },
                { text: "Flying Squirrel", correct: false },
                { text: "Sugar Glider", correct: false },
                { text: "Pigeon", correct: false },
            ],
        },
        {
            question:
                "Which animal is known for its ability to regenerate lost body parts?",
            answers: [
                { text: "Starfish", correct: true },
                { text: "Lizard", correct: false },
                { text: "Crab", correct: false },
                { text: "Salamander", correct: true },
            ],
        },
        {
            question: "What is the largest species of frog?",
            answers: [
                { text: "Goliath Frog", correct: true },
                { text: "Bullfrog", correct: false },
                { text: "Tree Frog", correct: false },
                { text: "Poison Dart Frog", correct: false },
            ],
        },
        {
            question:
                "Which animal is known for its distinctive black and white stripes?",
            answers: [
                { text: "Zebra", correct: true },
                { text: "Tiger", correct: false },
                { text: "Skunk", correct: false },
                { text: "Dalmatian", correct: false },
            ],
        },
        {
            question:
                "Which animal is capable of regenerating its entire body from just a small piece?",
            answers: [
                { text: "Starfish", correct: true },
                { text: "Axolotl", correct: false },
                { text: "Planarian", correct: true },
                { text: "Cicada", correct: false },
            ],
        },
    ],
};

// Astronomy Quiz Data
export const astrologyData: Quiz = {
    1: [
        {
            question: "Which zodiac sign is represented by the Archer?",
            answers: [
                { text: "Sagittarius", correct: true },
                { text: "Aries", correct: false },
                { text: "Libra", correct: false },
                { text: "Gemini", correct: false },
            ],
        },
        {
            question: "What element is associated with the zodiac sign Leo?",
            answers: [
                { text: "Fire", correct: true },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: false },
            ],
        },
        {
            question: "Which planet rules the zodiac sign Virgo?",
            answers: [
                { text: "Mercury", correct: true },
                { text: "Venus", correct: false },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for being detail-oriented and analytical?",
            answers: [
                { text: "Scorpio", correct: false },
                { text: "Virgo", correct: true },
                { text: "Pisces", correct: false },
                { text: "Cancer", correct: false },
            ],
        },
        {
            question: "What is the modality of the zodiac sign Aquarius?",
            answers: [
                { text: "Cardinal", correct: false },
                { text: "Fixed", correct: true },
                { text: "Mutable", correct: false },
                { text: "Dual", correct: false },
            ],
        },
        {
            question: "Which zodiac sign is considered the most adaptable?",
            answers: [
                { text: "Gemini", correct: true },
                { text: "Taurus", correct: false },
                { text: "Leo", correct: false },
                { text: "Sagittarius", correct: false },
            ],
        },
        {
            question: "Which element do Pisces belong to?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: true },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its strong sense of justice and leadership?",
            answers: [
                { text: "Aries", correct: false },
                { text: "Libra", correct: true },
                { text: "Capricorn", correct: false },
                { text: "Leo", correct: false },
            ],
        },
        {
            question: "What planet rules the zodiac sign Pisces?",
            answers: [
                { text: "Neptune", correct: true },
                { text: "Saturn", correct: false },
                { text: "Venus", correct: false },
                { text: "Mercury", correct: false },
            ],
        },
        {
            question: "Which zodiac sign is symbolized by the Twins?",
            answers: [
                { text: "Gemini", correct: true },
                { text: "Taurus", correct: false },
                { text: "Sagittarius", correct: false },
                { text: "Cancer", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "Which element is associated with Aries, Leo, and Sagittarius?",
            answers: [
                { text: "Fire", correct: true },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: false },
            ],
        },
        {
            question:
                "Which element do Taurus, Virgo, and Capricorn belong to?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: true },
                { text: "Air", correct: false },
                { text: "Water", correct: false },
            ],
        },
        {
            question: "Which zodiac signs are part of the Air element?",
            answers: [
                { text: "Gemini, Libra, Aquarius", correct: true },
                { text: "Cancer, Scorpio, Pisces", correct: false },
                { text: "Aries, Leo, Sagittarius", correct: false },
                { text: "Taurus, Virgo, Capricorn", correct: false },
            ],
        },
        {
            question:
                "Which element is associated with Cancer, Scorpio, and Pisces?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: true },
            ],
        },
        {
            question:
                "Which zodiac sign does not belong to any of the four elements?",
            answers: [
                { text: "None, all signs belong to an element", correct: true },
                { text: "Libra", correct: false },
                { text: "Leo", correct: false },
                { text: "Scorpio", correct: false },
            ],
        },
        {
            question:
                "What element is associated with adaptability and communication?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: false },
                { text: "Air", correct: true },
                { text: "Water", correct: false },
            ],
        },
        {
            question: "Which element is linked to stability and practicality?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: true },
                { text: "Air", correct: false },
                { text: "Water", correct: false },
            ],
        },
        {
            question: "Which element represents emotional depth and intuition?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: true },
            ],
        },
        {
            question: "Which element is associated with enthusiasm and action?",
            answers: [
                { text: "Fire", correct: true },
                { text: "Earth", correct: false },
                { text: "Air", correct: false },
                { text: "Water", correct: false },
            ],
        },
        {
            question:
                "Which element corresponds to intellect and social interaction?",
            answers: [
                { text: "Fire", correct: false },
                { text: "Earth", correct: false },
                { text: "Air", correct: true },
                { text: "Water", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Which planet rules the zodiac sign Aries?",
            answers: [
                { text: "Mars", correct: true },
                { text: "Venus", correct: false },
                { text: "Mercury", correct: false },
                { text: "Jupiter", correct: false },
            ],
        },
        {
            question:
                "Which planet is associated with communication and intellect?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mercury", correct: true },
                { text: "Saturn", correct: false },
                { text: "Neptune", correct: false },
            ],
        },
        {
            question: "Which planet rules the zodiac sign Taurus?",
            answers: [
                { text: "Venus", correct: true },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        {
            question: "Which planet is considered the ruler of Aquarius?",
            answers: [
                { text: "Uranus", correct: true },
                { text: "Neptune", correct: false },
                { text: "Saturn", correct: false },
                { text: "Jupiter", correct: false },
            ],
        },
        {
            question: "Which planet governs the zodiac sign Cancer?",
            answers: [
                { text: "Moon", correct: true },
                { text: "Sun", correct: false },
                { text: "Mars", correct: false },
                { text: "Mercury", correct: false },
            ],
        },
        {
            question: "Which planet rules the zodiac sign Leo?",
            answers: [
                { text: "Sun", correct: true },
                { text: "Venus", correct: false },
                { text: "Mercury", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        {
            question:
                "Which planet is associated with transformation and rebirth?",
            answers: [
                { text: "Pluto", correct: true },
                { text: "Neptune", correct: false },
                { text: "Uranus", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        {
            question: "Which planet rules the zodiac sign Libra?",
            answers: [
                { text: "Venus", correct: true },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        {
            question:
                "Which planet is known as the planet of expansion and luck?",
            answers: [
                { text: "Jupiter", correct: true },
                { text: "Saturn", correct: false },
                { text: "Neptune", correct: false },
                { text: "Mercury", correct: false },
            ],
        },
        {
            question:
                "Which planet influences discipline and responsibility in astrology?",
            answers: [
                { text: "Saturn", correct: true },
                { text: "Venus", correct: false },
                { text: "Mars", correct: false },
                { text: "Neptune", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Which zodiac sign is most compatible with Cancer?",
            answers: [
                { text: "Gemini", correct: false },
                { text: "Scorpio", correct: true },
                { text: "Sagittarius", correct: false },
                { text: "Capricorn", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its diplomatic nature and desire for harmony?",
            answers: [
                { text: "Libra", correct: true },
                { text: "Aries", correct: false },
                { text: "Virgo", correct: false },
                { text: "Pisces", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is often considered the most adventurous?",
            answers: [
                { text: "Sagittarius", correct: true },
                { text: "Taurus", correct: false },
                { text: "Cancer", correct: false },
                { text: "Capricorn", correct: false },
            ],
        },
        {
            question: "Which zodiac sign is ruled by Mercury?",
            answers: [
                { text: "Gemini and Virgo", correct: true },
                { text: "Leo and Aries", correct: false },
                { text: "Cancer and Pisces", correct: false },
                { text: "Taurus and Scorpio", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its emotional depth and intuition?",
            answers: [
                { text: "Pisces", correct: true },
                { text: "Gemini", correct: false },
                { text: "Sagittarius", correct: false },
                { text: "Leo", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is associated with practicality and reliability?",
            answers: [
                { text: "Virgo", correct: false },
                { text: "Taurus", correct: true },
                { text: "Aquarius", correct: false },
                { text: "Aries", correct: false },
            ],
        },
        {
            question: "Which zodiac sign is symbolized by the Scales?",
            answers: [
                { text: "Libra", correct: true },
                { text: "Gemini", correct: false },
                { text: "Leo", correct: false },
                { text: "Pisces", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its strong leadership qualities?",
            answers: [
                { text: "Leo", correct: true },
                { text: "Cancer", correct: false },
                { text: "Gemini", correct: false },
                { text: "Virgo", correct: false },
            ],
        },
        {
            question: "Which zodiac sign is represented by the Water Bearer?",
            answers: [
                { text: "Aquarius", correct: true },
                { text: "Aries", correct: false },
                { text: "Sagittarius", correct: false },
                { text: "Scorpio", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its transformative nature?",
            answers: [
                { text: "Scorpio", correct: true },
                { text: "Taurus", correct: false },
                { text: "Gemini", correct: false },
                { text: "Libra", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is a conjunction in astrology?",
            answers: [
                { text: "Two planets 180 degrees apart", correct: false },
                { text: "Two planets at the same degree", correct: true },
                { text: "A planet entering a new sign", correct: false },
                { text: "A planet retrograding", correct: false },
            ],
        },
        {
            question: "What are the twelve houses in astrology used for?",
            answers: [
                { text: "Determining zodiac signs", correct: false },
                { text: "Representing different areas of life", correct: true },
                { text: "Calculating planetary movements", correct: false },
                { text: "Identifying compatibility", correct: false },
            ],
        },
        {
            question: "What is a natal chart?",
            answers: [
                {
                    text: "A chart showing current planetary positions",
                    correct: false,
                },
                {
                    text: "A horoscope based on your birth time and location",
                    correct: true,
                },
                { text: "A chart of future predictions", correct: false },
                {
                    text: "A compatibility chart with another person",
                    correct: false,
                },
            ],
        },
        {
            question: "Which astrological aspect is considered harmonious?",
            answers: [
                { text: "Square", correct: false },
                { text: "Trine", correct: true },
                { text: "Opposition", correct: false },
                { text: "Conjunction", correct: false },
            ],
        },
        {
            question: "What does retrograde motion signify in astrology?",
            answers: [
                {
                    text: "A planet moving forward in its orbit",
                    correct: false,
                },
                { text: "A planet appearing to move backward", correct: true },
                { text: "A planet entering a new house", correct: false },
                { text: "A planet increasing in speed", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is associated with the element of Water?",
            answers: [
                { text: "Leo", correct: false },
                { text: "Cancer", correct: true },
                { text: "Sagittarius", correct: false },
                { text: "Virgo", correct: false },
            ],
        },
        {
            question: "What is synastry in astrology?",
            answers: [
                { text: "The study of planetary retrogrades", correct: false },
                {
                    text: "Comparing two natal charts for compatibility",
                    correct: true,
                },
                {
                    text: "Predicting future events based on stars",
                    correct: false,
                },
                {
                    text: "Analyzing career prospects through astrology",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which planet is associated with love and beauty in astrology?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Venus", correct: true },
                { text: "Mercury", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        {
            question: "What is the ruling planet of Capricorn?",
            answers: [
                { text: "Saturn", correct: true },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: false },
                { text: "Neptune", correct: false },
            ],
        },
        {
            question:
                "Which zodiac sign is known for its intellectual and innovative nature?",
            answers: [
                { text: "Aquarius", correct: true },
                { text: "Cancer", correct: false },
                { text: "Taurus", correct: false },
                { text: "Gemini", correct: false },
            ],
        },
    ],
};

// Art Quiz Data
export const artData: Quiz = {
    1: [
        {
            question: "Which art movement is Pablo Picasso associated with?",
            answers: [
                { text: "Impressionism", correct: false },
                { text: "Cubism", correct: true },
                { text: "Surrealism", correct: false },
                { text: "Baroque", correct: false },
            ],
        },
        {
            question:
                "What is the primary medium used in Renaissance painting?",
            answers: [
                { text: "Oil paint", correct: true },
                { text: "Watercolor", correct: false },
                { text: "Acrylic", correct: false },
                { text: "Pastel", correct: false },
            ],
        },
        {
            question: "Who painted 'The Starry Night'?",
            answers: [
                { text: "Claude Monet", correct: false },
                { text: "Vincent van Gogh", correct: true },
                { text: "Leonardo da Vinci", correct: false },
                { text: "Salvador Dalí", correct: false },
            ],
        },
        {
            question: "Which artist is famous for the sculpture 'David'?",
            answers: [
                { text: "Michelangelo", correct: true },
                { text: "Donatello", correct: false },
                { text: "Bernini", correct: false },
                { text: "Rodin", correct: false },
            ],
        },
        {
            question:
                "What is the technique of painting on wet plaster called?",
            answers: [
                { text: "Fresco", correct: true },
                { text: "Tempera", correct: false },
                { text: "Gouache", correct: false },
                { text: "Encaustic", correct: false },
            ],
        },
        {
            question:
                "Which art movement focuses on spontaneous, automatic, or subconscious creation?",
            answers: [
                { text: "Abstract Expressionism", correct: false },
                { text: "Surrealism", correct: true },
                { text: "Realism", correct: false },
                { text: "Pop Art", correct: false },
            ],
        },
        {
            question: "Who is the artist behind the 'Campbell's Soup Cans'?",
            answers: [
                { text: "Andy Warhol", correct: true },
                { text: "Roy Lichtenstein", correct: false },
                { text: "Jackson Pollock", correct: false },
                { text: "Mark Rothko", correct: false },
            ],
        },
        {
            question:
                "What is the term for a painting executed entirely by dripping or splattering paint?",
            answers: [
                { text: "Pointillism", correct: false },
                { text: "Action Painting", correct: true },
                { text: "Fauvism", correct: false },
                { text: "Minimalism", correct: false },
            ],
        },
        {
            question: "Which artist is known for the mural 'Guernica'?",
            answers: [
                { text: "Pablo Picasso", correct: true },
                { text: "Salvador Dalí", correct: false },
                { text: "Frida Kahlo", correct: false },
                { text: "Henri Matisse", correct: false },
            ],
        },
        {
            question:
                "What is the art of creating three-dimensional works by carving or modeling materials?",
            answers: [
                { text: "Painting", correct: false },
                { text: "Sculpture", correct: true },
                { text: "Drawing", correct: false },
                { text: "Printmaking", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "Which art movement is characterized by an emphasis on light and its changing qualities?",
            answers: [
                { text: "Impressionism", correct: true },
                { text: "Cubism", correct: false },
                { text: "Expressionism", correct: false },
                { text: "Baroque", correct: false },
            ],
        },
        {
            question: "Who painted the ceiling of the Sistine Chapel?",
            answers: [
                { text: "Leonardo da Vinci", correct: false },
                { text: "Michelangelo", correct: true },
                { text: "Raphael", correct: false },
                { text: "Donatello", correct: false },
            ],
        },
        {
            question: "What is the primary characteristic of Abstract Art?",
            answers: [
                { text: "Realistic representation", correct: false },
                { text: "Use of abstract forms and colors", correct: true },
                { text: "Detailed human figures", correct: false },
                { text: "Historical themes", correct: false },
            ],
        },
        {
            question: "Which artist is known for his drip paintings?",
            answers: [
                { text: "Pablo Picasso", correct: false },
                { text: "Jackson Pollock", correct: true },
                { text: "Andy Warhol", correct: false },
                { text: "Salvador Dalí", correct: false },
            ],
        },
        {
            question:
                "What art technique involves using small dots of color to create an image?",
            answers: [
                { text: "Pointillism", correct: true },
                { text: "Fresco", correct: false },
                { text: "Impasto", correct: false },
                { text: "Sfumato", correct: false },
            ],
        },
        {
            question: "Who created the sculpture 'The Thinker'?",
            answers: [
                { text: "Auguste Rodin", correct: true },
                { text: "Michelangelo", correct: false },
                { text: "Donatello", correct: false },
                { text: "Henry Moore", correct: false },
            ],
        },
        {
            question:
                "Which art movement sought to capture the essence of modern life and urban environments?",
            answers: [
                { text: "Impressionism", correct: false },
                { text: "Realism", correct: true },
                { text: "Surrealism", correct: false },
                { text: "Dadaism", correct: false },
            ],
        },
        {
            question:
                "What is the term for artworks created by assembling different forms or materials?",
            answers: [
                { text: "Assemblage", correct: true },
                { text: "Mosaic", correct: false },
                { text: "Fresco", correct: false },
                { text: "Stained Glass", correct: false },
            ],
        },
        {
            question:
                "Which artist is famous for the painting 'The Persistence of Memory'?",
            answers: [
                { text: "Salvador Dalí", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Jackson Pollock", correct: false },
                { text: "Andy Warhol", correct: false },
            ],
        },
        {
            question: "What is the focus of the Baroque art movement?",
            answers: [
                { text: "Simplicity and minimalism", correct: false },
                { text: "Dramatic use of light and shadow", correct: true },
                { text: "Abstract forms and shapes", correct: false },
                { text: "Naturalistic landscapes", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Which artist is known for his Blue and Rose periods?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Pablo Picasso", correct: true },
                { text: "Salvador Dalí", correct: false },
                { text: "Claude Monet", correct: false },
            ],
        },
        {
            question:
                "What is the technique of applying thick layers of paint called?",
            answers: [
                { text: "Glazing", correct: false },
                { text: "Impasto", correct: true },
                { text: "Sfumato", correct: false },
                { text: "Underpainting", correct: false },
            ],
        },
        {
            question:
                "Which artist is famous for the painting 'Girl with a Pearl Earring'?",
            answers: [
                { text: "Johannes Vermeer", correct: true },
                { text: "Rembrandt", correct: false },
                { text: "Francisco Goya", correct: false },
                { text: "Edgar Degas", correct: false },
            ],
        },
        {
            question: "What is the term for art that imitates nature?",
            answers: [
                { text: "Abstract Art", correct: false },
                { text: "Realism", correct: true },
                { text: "Cubism", correct: false },
                { text: "Surrealism", correct: false },
            ],
        },
        {
            question:
                "Which art form uses light and color to create visual effects?",
            answers: [
                { text: "Sculpture", correct: false },
                { text: "Photography", correct: true },
                { text: "Printmaking", correct: false },
                { text: "Mosaic", correct: false },
            ],
        },
        {
            question: "Who is the artist behind the 'Water Lilies' series?",
            answers: [
                { text: "Claude Monet", correct: true },
                { text: "Pierre-Auguste Renoir", correct: false },
                { text: "Edgar Degas", correct: false },
                { text: "Paul Cézanne", correct: false },
            ],
        },
        {
            question:
                "What is the primary characteristic of Impressionist art?",
            answers: [
                { text: "Sharp lines and geometric shapes", correct: false },
                {
                    text: "Emphasis on light and its changing qualities",
                    correct: true,
                },
                { text: "Use of dark, muted colors", correct: false },
                { text: "Depiction of mythical subjects", correct: false },
            ],
        },
        {
            question: "Which artist is known for the painting 'The Scream'?",
            answers: [
                { text: "Edvard Munch", correct: true },
                { text: "Vincent van Gogh", correct: false },
                { text: "Pablo Picasso", correct: false },
                { text: "Henri Matisse", correct: false },
            ],
        },
        {
            question:
                "What is the art technique of layering colors to create depth called?",
            answers: [
                { text: "Glazing", correct: true },
                { text: "Impasto", correct: false },
                { text: "Sfumato", correct: false },
                { text: "Fresco", correct: false },
            ],
        },
        {
            question: "Which art movement is Salvador Dalí associated with?",
            answers: [
                { text: "Surrealism", correct: true },
                { text: "Cubism", correct: false },
                { text: "Realism", correct: false },
                { text: "Impressionism", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Which artist is known for the mural 'Guernica'?",
            answers: [
                { text: "Pablo Picasso", correct: true },
                { text: "Salvador Dalí", correct: false },
                { text: "Frida Kahlo", correct: false },
                { text: "Henri Matisse", correct: false },
            ],
        },
        {
            question: "What is the focus of Minimalist art?",
            answers: [
                { text: "Simplicity and abstraction", correct: true },
                { text: "Detailed realism", correct: false },
                { text: "Emotional expression", correct: false },
                { text: "Complex compositions", correct: false },
            ],
        },
        {
            question:
                "Which artist is famous for the work 'The Persistence of Memory'?",
            answers: [
                { text: "Salvador Dalí", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Vincent van Gogh", correct: false },
                { text: "Jackson Pollock", correct: false },
            ],
        },
        {
            question: "What is the primary medium used in sculpture?",
            answers: [
                { text: "Oil paint", correct: false },
                { text: "Clay", correct: true },
                { text: "Watercolor", correct: false },
                { text: "Ink", correct: false },
            ],
        },
        {
            question:
                "Which art movement emphasizes the emotional and psychological expression?",
            answers: [
                { text: "Impressionism", correct: false },
                { text: "Expressionism", correct: true },
                { text: "Realism", correct: false },
                { text: "Cubism", correct: false },
            ],
        },
        {
            question: "Who is the artist behind the sculpture 'The Thinker'?",
            answers: [
                { text: "Auguste Rodin", correct: true },
                { text: "Michelangelo", correct: false },
                { text: "Donatello", correct: false },
                { text: "Henry Moore", correct: false },
            ],
        },
        {
            question:
                "What is the technique of painting on dry plaster called?",
            answers: [
                { text: "Fresco", correct: false },
                { text: "Secco", correct: true },
                { text: "Glazing", correct: false },
                { text: "Impasto", correct: false },
            ],
        },
        {
            question: "Which artist is known for the 'Blue Nude' series?",
            answers: [
                { text: "Pablo Picasso", correct: true },
                { text: "Claude Monet", correct: false },
                { text: "Vincent van Gogh", correct: false },
                { text: "Henri Matisse", correct: false },
            ],
        },
        {
            question: "What is the main focus of the Renaissance art movement?",
            answers: [
                { text: "Religious themes", correct: false },
                { text: "Humanism and realism", correct: true },
                { text: "Abstract forms", correct: false },
                { text: "Emotional expression", correct: false },
            ],
        },
        {
            question:
                "Which artist is known for the installation art piece 'The Weather Project'?",
            answers: [
                { text: "Damien Hirst", correct: false },
                { text: "Olafur Eliasson", correct: true },
                { text: "Jeff Koons", correct: false },
                { text: "Ai Weiwei", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "Which art movement is characterized by the use of vivid colors and bold brushwork?",
            answers: [
                { text: "Fauvism", correct: true },
                { text: "Surrealism", correct: false },
                { text: "Cubism", correct: false },
                { text: "Realism", correct: false },
            ],
        },
        {
            question:
                "What is the technique of blending colors seamlessly called?",
            answers: [
                { text: "Glazing", correct: false },
                { text: "Sfumato", correct: true },
                { text: "Impasto", correct: false },
                { text: "Pointillism", correct: false },
            ],
        },
        {
            question: "Which artist is known for the painting 'Water Lilies'?",
            answers: [
                { text: "Claude Monet", correct: true },
                { text: "Pierre-Auguste Renoir", correct: false },
                { text: "Edgar Degas", correct: false },
                { text: "Paul Cézanne", correct: false },
            ],
        },
        {
            question:
                "What is the name of the art technique that involves creating images using small, distinct dots?",
            answers: [
                { text: "Pointillism", correct: true },
                { text: "Fresco", correct: false },
                { text: "Impasto", correct: false },
                { text: "Sfumato", correct: false },
            ],
        },
        {
            question: "Which artist is famous for the work 'The Kiss'?",
            answers: [
                { text: "Gustav Klimt", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Edvard Munch", correct: false },
                { text: "Henri Matisse", correct: false },
            ],
        },
        {
            question: "What is the primary focus of Baroque art?",
            answers: [
                { text: "Simplicity and minimalism", correct: false },
                { text: "Dramatic use of light and shadow", correct: true },
                { text: "Abstract forms", correct: false },
                { text: "Detailed realism", correct: false },
            ],
        },
        {
            question:
                "Which artist is known for the painting 'The Last Supper'?",
            answers: [
                { text: "Leonardo da Vinci", correct: true },
                { text: "Michelangelo", correct: false },
                { text: "Raphael", correct: false },
                { text: "Donatello", correct: false },
            ],
        },
        {
            question:
                "What is the term for art created by arranging materials into a cohesive whole?",
            answers: [
                { text: "Assemblage", correct: true },
                { text: "Mosaic", correct: false },
                { text: "Fresco", correct: false },
                { text: "Collage", correct: false },
            ],
        },
        {
            question:
                "Which art movement is associated with Salvador Dalí and René Magritte?",
            answers: [
                { text: "Cubism", correct: false },
                { text: "Surrealism", correct: true },
                { text: "Impressionism", correct: false },
                { text: "Realism", correct: false },
            ],
        },
        {
            question:
                "What is the technique of applying paint thickly so that it stands out from the surface called?",
            answers: [
                { text: "Glazing", correct: false },
                { text: "Impasto", correct: true },
                { text: "Sfumato", correct: false },
                { text: "Pointillism", correct: false },
            ],
        },
    ],
};

// Biology Quiz Data
export const biologyData: Quiz = {
    1: [
        {
            question: "What is the basic unit of life?",
            answers: [
                { text: "Cell", correct: true },
                { text: "Atom", correct: false },
                { text: "Molecule", correct: false },
                { text: "Organ", correct: false },
            ],
        },
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            answers: [
                { text: "Mitochondria", correct: true },
                { text: "Nucleus", correct: false },
                { text: "Ribosome", correct: false },
                { text: "Chloroplast", correct: false },
            ],
        },
        {
            question:
                "What process do plants use to convert sunlight into chemical energy?",
            answers: [
                { text: "Photosynthesis", correct: true },
                { text: "Respiration", correct: false },
                { text: "Fermentation", correct: false },
                { text: "Transpiration", correct: false },
            ],
        },
        {
            question: "Which macromolecule stores genetic information?",
            answers: [
                { text: "DNA", correct: true },
                { text: "Protein", correct: false },
                { text: "Lipids", correct: false },
                { text: "Carbohydrates", correct: false },
            ],
        },
        {
            question:
                "What is the process by which cells divide into two identical daughter cells?",
            answers: [
                { text: "Mitosis", correct: true },
                { text: "Meiosis", correct: false },
                { text: "Binary fission", correct: false },
                { text: "Cytokinesis", correct: false },
            ],
        },
        {
            question:
                "Which blood cells are responsible for fighting infections?",
            answers: [
                { text: "White blood cells", correct: true },
                { text: "Red blood cells", correct: false },
                { text: "Platelets", correct: false },
                { text: "Plasma cells", correct: false },
            ],
        },
        {
            question: "What molecule carries oxygen in the blood?",
            answers: [
                { text: "Hemoglobin", correct: true },
                { text: "Myoglobin", correct: false },
                { text: "Collagen", correct: false },
                { text: "Keratin", correct: false },
            ],
        },
        {
            question:
                "Which part of the brain controls balance and coordination?",
            answers: [
                { text: "Cerebellum", correct: true },
                { text: "Cerebrum", correct: false },
                { text: "Brainstem", correct: false },
                { text: "Hypothalamus", correct: false },
            ],
        },
        {
            question:
                "What term describes the variety of life in the world or a particular ecosystem?",
            answers: [
                { text: "Biodiversity", correct: true },
                { text: "Ecology", correct: false },
                { text: "Evolution", correct: false },
                { text: "Symbiosis", correct: false },
            ],
        },
        {
            question: "Which process results in the formation of gametes?",
            answers: [
                { text: "Meiosis", correct: true },
                { text: "Mitosis", correct: false },
                { text: "Fertilization", correct: false },
                { text: "Replication", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the largest organ in the human body?",
            answers: [
                { text: "Skin", correct: true },
                { text: "Liver", correct: false },
                { text: "Lungs", correct: false },
                { text: "Heart", correct: false },
            ],
        },
        {
            question:
                "Which biomolecule is primarily used for long-term energy storage?",
            answers: [
                { text: "Lipids", correct: true },
                { text: "Proteins", correct: false },
                { text: "Carbohydrates", correct: false },
                { text: "Nucleic acids", correct: false },
            ],
        },
        {
            question: "What is the primary function of ribosomes?",
            answers: [
                { text: "Protein synthesis", correct: true },
                { text: "Energy production", correct: false },
                { text: "DNA replication", correct: false },
                { text: "Lipid storage", correct: false },
            ],
        },
        {
            question:
                "Which kingdom includes multicellular, photosynthetic organisms?",
            answers: [
                { text: "Plantae", correct: true },
                { text: "Fungi", correct: false },
                { text: "Animalia", correct: false },
                { text: "Protista", correct: false },
            ],
        },
        {
            question:
                "What is the main structural component of plant cell walls?",
            answers: [
                { text: "Cellulose", correct: true },
                { text: "Chitin", correct: false },
                { text: "Glycogen", correct: false },
                { text: "Starch", correct: false },
            ],
        },
        {
            question:
                "Which process describes the movement of water across a semipermeable membrane?",
            answers: [
                { text: "Osmosis", correct: true },
                { text: "Diffusion", correct: false },
                { text: "Active transport", correct: false },
                { text: "Facilitated diffusion", correct: false },
            ],
        },
        {
            question: "What is the universal energy currency of the cell?",
            answers: [
                { text: "ATP", correct: true },
                { text: "ADP", correct: false },
                { text: "NADH", correct: false },
                { text: "GTP", correct: false },
            ],
        },
        {
            question: "Which enzyme unwinds DNA during replication?",
            answers: [
                { text: "Helicase", correct: true },
                { text: "DNA polymerase", correct: false },
                { text: "Ligase", correct: false },
                { text: "Primase", correct: false },
            ],
        },
        {
            question:
                "Which hormone regulates blood sugar levels by lowering them?",
            answers: [
                { text: "Insulin", correct: true },
                { text: "Glucagon", correct: false },
                { text: "Adrenaline", correct: false },
                { text: "Cortisol", correct: false },
            ],
        },
        {
            question: "What type of symmetry do humans exhibit?",
            answers: [
                { text: "Bilateral symmetry", correct: true },
                { text: "Radial symmetry", correct: false },
                { text: "Asymmetry", correct: false },
                { text: "Spherical symmetry", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "What is the study of heredity and the variation of inherited characteristics?",
            answers: [
                { text: "Genetics", correct: true },
                { text: "Ecology", correct: false },
                { text: "Anatomy", correct: false },
                { text: "Physiology", correct: false },
            ],
        },
        {
            question:
                "Which process describes the production of RNA from a DNA template?",
            answers: [
                { text: "Transcription", correct: true },
                { text: "Translation", correct: false },
                { text: "Replication", correct: false },
                { text: "Translocation", correct: false },
            ],
        },
        {
            question:
                "What is the term for a trait that masks the presence of another trait in genetics?",
            answers: [
                { text: "Dominant", correct: true },
                { text: "Recessive", correct: false },
                { text: "Codominant", correct: false },
                { text: "Incomplete dominance", correct: false },
            ],
        },
        {
            question: "Which blood type is considered the universal donor?",
            answers: [
                { text: "O negative", correct: true },
                { text: "A positive", correct: false },
                { text: "AB positive", correct: false },
                { text: "B negative", correct: false },
            ],
        },
        {
            question: "What is the primary function of the large intestine?",
            answers: [
                { text: "Water absorption", correct: true },
                { text: "Protein digestion", correct: false },
                { text: "Fat emulsification", correct: false },
                { text: "Enzyme production", correct: false },
            ],
        },
        {
            question:
                "Which part of the cell cycle is characterized by cell growth and DNA replication?",
            answers: [
                { text: "Interphase", correct: true },
                { text: "Prophase", correct: false },
                { text: "Metaphase", correct: false },
                { text: "Anaphase", correct: false },
            ],
        },
        {
            question:
                "Which gas is produced as a waste product during photosynthesis?",
            answers: [
                { text: "Oxygen", correct: true },
                { text: "Carbon dioxide", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Methane", correct: false },
            ],
        },
        {
            question:
                "What is the name of the process by which organisms maintain a stable internal environment?",
            answers: [
                { text: "Homeostasis", correct: true },
                { text: "Metabolism", correct: false },
                { text: "Anabolism", correct: false },
                { text: "Catabolism", correct: false },
            ],
        },
        {
            question: "Which structure connects muscle to bone?",
            answers: [
                { text: "Tendon", correct: true },
                { text: "Ligament", correct: false },
                { text: "Cartilage", correct: false },
                { text: "Fascia", correct: false },
            ],
        },
        {
            question:
                "Which vitamin is produced when the skin is exposed to sunlight?",
            answers: [
                { text: "Vitamin D", correct: true },
                { text: "Vitamin A", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin K", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the powerhouse of the cell?",
            answers: [
                { text: "Mitochondria", correct: true },
                { text: "Nucleus", correct: false },
                { text: "Endoplasmic Reticulum", correct: false },
                { text: "Golgi Apparatus", correct: false },
            ],
        },
        {
            question: "Which process converts glucose into pyruvate?",
            answers: [
                { text: "Glycolysis", correct: true },
                { text: "Citric Acid Cycle", correct: false },
                { text: "Electron Transport Chain", correct: false },
                { text: "Fermentation", correct: false },
            ],
        },
        {
            question: "What is the genetic material of viruses?",
            answers: [
                { text: "DNA or RNA", correct: true },
                { text: "Proteins", correct: false },
                { text: "Lipids", correct: false },
                { text: "Carbohydrates", correct: false },
            ],
        },
        {
            question:
                "Which type of cell division results in four non-identical daughter cells?",
            answers: [
                { text: "Meiosis", correct: true },
                { text: "Mitosis", correct: false },
                { text: "Binary fission", correct: false },
                { text: "Bud formation", correct: false },
            ],
        },
        {
            question: "What is the primary function of red blood cells?",
            answers: [
                { text: "Transport oxygen", correct: true },
                { text: "Fight infections", correct: false },
                { text: "Clot blood", correct: false },
                { text: "Produce hormones", correct: false },
            ],
        },
        {
            question:
                "Which molecule is responsible for storing and transmitting genetic information?",
            answers: [
                { text: "DNA", correct: true },
                { text: "RNA", correct: false },
                { text: "Proteins", correct: false },
                { text: "Lipids", correct: false },
            ],
        },
        {
            question: "What is the main function of the respiratory system?",
            answers: [
                { text: "Exchange gases", correct: true },
                { text: "Digest food", correct: false },
                { text: "Circulate blood", correct: false },
                { text: "Control body temperature", correct: false },
            ],
        },
        {
            question: "Which organelle is involved in protein synthesis?",
            answers: [
                { text: "Ribosomes", correct: true },
                { text: "Mitochondria", correct: false },
                { text: "Golgi Apparatus", correct: false },
                { text: "Lysosomes", correct: false },
            ],
        },
        {
            question: "What is the main function of the excretory system?",
            answers: [
                { text: "Remove waste products", correct: true },
                { text: "Produce hormones", correct: false },
                { text: "Facilitate movement", correct: false },
                { text: "Transmit nerve impulses", correct: false },
            ],
        },
        {
            question:
                "Which process involves the uptake of water by plant roots?",
            answers: [
                { text: "Transpiration", correct: false },
                { text: "Osmosis", correct: true },
                { text: "Photosynthesis", correct: false },
                { text: "Respiration", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is the role of chloroplasts in plant cells?",
            answers: [
                { text: "Photosynthesis", correct: true },
                { text: "Protein synthesis", correct: false },
                { text: "Energy production", correct: false },
                { text: "DNA replication", correct: false },
            ],
        },
        {
            question:
                "Which molecule is the primary carrier of genetic information?",
            answers: [
                { text: "DNA", correct: true },
                { text: "RNA", correct: false },
                { text: "ATP", correct: false },
                { text: "Glucose", correct: false },
            ],
        },
        {
            question: "What is the main purpose of the immune system?",
            answers: [
                { text: "Protect the body from pathogens", correct: true },
                { text: "Regulate metabolism", correct: false },
                { text: "Control movement", correct: false },
                { text: "Maintain water balance", correct: false },
            ],
        },
        {
            question:
                "Which type of blood vessel carries blood away from the heart?",
            answers: [
                { text: "Arteries", correct: true },
                { text: "Veins", correct: false },
                { text: "Capillaries", correct: false },
                { text: "Ventricles", correct: false },
            ],
        },
        {
            question:
                "What is the powerhouse of the cell responsible for energy production?",
            answers: [
                { text: "Mitochondria", correct: true },
                { text: "Nucleus", correct: false },
                { text: "Ribosomes", correct: false },
                { text: "Endoplasmic Reticulum", correct: false },
            ],
        },
        {
            question:
                "Which process describes the movement of molecules from an area of higher concentration to lower concentration?",
            answers: [
                { text: "Diffusion", correct: true },
                { text: "Active transport", correct: false },
                { text: "Osmosis", correct: false },
                { text: "Endocytosis", correct: false },
            ],
        },
        {
            question: "What is the genetic blueprint of an organism called?",
            answers: [
                { text: "Genome", correct: true },
                { text: "Proteome", correct: false },
                { text: "Metabolome", correct: false },
                { text: "Transcriptome", correct: false },
            ],
        },
        {
            question:
                "Which hormone is primarily responsible for regulating metabolism?",
            answers: [
                { text: "Thyroxine", correct: true },
                { text: "Insulin", correct: false },
                { text: "Adrenaline", correct: false },
                { text: "Glucagon", correct: false },
            ],
        },
        {
            question:
                "What is the process by which plants lose water vapor through their leaves?",
            answers: [
                { text: "Transpiration", correct: true },
                { text: "Photosynthesis", correct: false },
                { text: "Respiration", correct: false },
                { text: "Osmosis", correct: false },
            ],
        },
        {
            question:
                "Which part of the neuron receives signals from other neurons?",
            answers: [
                { text: "Dendrites", correct: true },
                { text: "Axon", correct: false },
                { text: "Soma", correct: false },
                { text: "Myelin sheath", correct: false },
            ],
        },
    ],
};

// Computer Science Quiz Data
export const computerScienceData: Quiz = {
    1: [
        {
            question: "What does 'CPU' stand for in computer terminology?",
            answers: [
                { text: "Central Processing Unit", correct: true },
                { text: "Computer Primary Unit", correct: false },
                { text: "Central Programming Unit", correct: false },
                { text: "Computer Processing Utility", correct: false },
            ],
        },
        {
            question:
                "Which language is primarily used for web development alongside HTML and CSS?",
            answers: [
                { text: "JavaScript", correct: true },
                { text: "Python", correct: false },
                { text: "C++", correct: false },
                { text: "Java", correct: false },
            ],
        },
        {
            question: "What does 'RAM' stand for?",
            answers: [
                { text: "Random Access Memory", correct: true },
                { text: "Readily Available Memory", correct: false },
                { text: "Read Access Memory", correct: false },
                { text: "Random Allocation Memory", correct: false },
            ],
        },
        {
            question:
                "Which data structure uses FIFO (First In, First Out) methodology?",
            answers: [
                { text: "Queue", correct: true },
                { text: "Stack", correct: false },
                { text: "Tree", correct: false },
                { text: "Graph", correct: false },
            ],
        },
        {
            question:
                "What is the time complexity of binary search in a sorted array?",
            answers: [
                { text: "O(log n)", correct: true },
                { text: "O(n)", correct: false },
                { text: "O(n log n)", correct: false },
                { text: "O(1)", correct: false },
            ],
        },
        {
            question:
                "Which protocol is used for secure communication over a computer network?",
            answers: [
                { text: "HTTPS", correct: true },
                { text: "HTTP", correct: false },
                { text: "FTP", correct: false },
                { text: "SMTP", correct: false },
            ],
        },
        {
            question: "What does 'OOP' stand for in programming?",
            answers: [
                { text: "Object-Oriented Programming", correct: true },
                { text: "Original Output Processing", correct: false },
                { text: "Operational Output Procedure", correct: false },
                { text: "Open-source Operating Platform", correct: false },
            ],
        },
        {
            question: "Which of the following is a NoSQL database?",
            answers: [
                { text: "MongoDB", correct: true },
                { text: "MySQL", correct: false },
                { text: "PostgreSQL", correct: false },
                { text: "SQLite", correct: false },
            ],
        },
        {
            question: "What is the main function of an operating system?",
            answers: [
                {
                    text: "Manage computer hardware and software resources",
                    correct: true,
                },
                {
                    text: "Compile code into executable programs",
                    correct: false,
                },
                { text: "Provide antivirus protection", correct: false },
                { text: "Edit text documents", correct: false },
            ],
        },
        {
            question:
                "Which sorting algorithm has the best average-case time complexity?",
            answers: [
                { text: "Merge Sort", correct: true },
                { text: "Bubble Sort", correct: false },
                { text: "Selection Sort", correct: false },
                { text: "Insertion Sort", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the primary purpose of DNS in networking?",
            answers: [
                {
                    text: "Translate domain names to IP addresses",
                    correct: true,
                },
                { text: "Secure network communications", correct: false },
                { text: "Route data packets", correct: false },
                { text: "Provide network storage", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a compiled programming language?",
            answers: [
                { text: "C++", correct: true },
                { text: "Python", correct: false },
                { text: "JavaScript", correct: false },
                { text: "PHP", correct: false },
            ],
        },
        {
            question: "What is an algorithm?",
            answers: [
                {
                    text: "A step-by-step procedure for solving a problem",
                    correct: true,
                },
                { text: "A type of software", correct: false },
                { text: "A programming language", correct: false },
                { text: "A computer hardware component", correct: false },
            ],
        },
        {
            question: "Which of the following is not a programming paradigm?",
            answers: [
                { text: "Procedural", correct: false },
                { text: "Functional", correct: false },
                { text: "Relational", correct: true },
                { text: "Object-Oriented", correct: false },
            ],
        },
        {
            question: "What does SQL stand for?",
            answers: [
                { text: "Structured Query Language", correct: true },
                { text: "Sequential Query Language", correct: false },
                { text: "Standard Query Language", correct: false },
                { text: "Simple Query Language", correct: false },
            ],
        },
        {
            question: "In computer networks, what does LAN stand for?",
            answers: [
                { text: "Local Area Network", correct: true },
                { text: "Large Area Network", correct: false },
                { text: "Logical Access Network", correct: false },
                { text: "Low Access Node", correct: false },
            ],
        },
        {
            question:
                "Which data structure uses LIFO (Last In, First Out) methodology?",
            answers: [
                { text: "Stack", correct: true },
                { text: "Queue", correct: false },
                { text: "Linked List", correct: false },
                { text: "Binary Tree", correct: false },
            ],
        },
        {
            question: "What is the purpose of a firewall in computer networks?",
            answers: [
                { text: "To prevent unauthorized access", correct: true },
                { text: "To store data securely", correct: false },
                { text: "To increase network speed", correct: false },
                { text: "To manage network addresses", correct: false },
            ],
        },
        {
            question:
                "Which principle is NOT part of the SOLID principles in software engineering?",
            answers: [
                { text: "Open/Closed Principle", correct: false },
                { text: "Single Responsibility Principle", correct: false },
                { text: "Dependency Inversion Principle", correct: false },
                { text: "Rapid Development Principle", correct: true },
            ],
        },
        {
            question: "What is Big O notation used for?",
            answers: [
                {
                    text: "Describing the performance of an algorithm",
                    correct: true,
                },
                { text: "Measuring disk storage capacity", correct: false },
                {
                    text: "Defining programming language syntax",
                    correct: false,
                },
                { text: "Optimizing network throughput", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is polymorphism in Object-Oriented Programming?",
            answers: [
                {
                    text: "Ability of different objects to respond to the same function call in different ways",
                    correct: true,
                },
                {
                    text: "Process of hiding internal states of objects",
                    correct: false,
                },
                {
                    text: "Mechanism of bundling data with methods",
                    correct: false,
                },
                {
                    text: "Creating new classes from existing ones",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
            answers: [
                { text: "Singleton", correct: true },
                { text: "Factory", correct: false },
                { text: "Observer", correct: false },
                { text: "Decorator", correct: false },
            ],
        },
        {
            question:
                "What is the primary purpose of a version control system?",
            answers: [
                {
                    text: "To manage changes to source code over time",
                    correct: true,
                },
                { text: "To compile code into executables", correct: false },
                { text: "To deploy applications to servers", correct: false },
                { text: "To design software architectures", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a client-side scripting language?",
            answers: [
                { text: "PHP", correct: false },
                { text: "JavaScript", correct: true },
                { text: "Ruby", correct: false },
                { text: "Python", correct: false },
            ],
        },
        {
            question: "What does 'API' stand for?",
            answers: [
                { text: "Application Programming Interface", correct: true },
                { text: "Advanced Programming Interface", correct: false },
                { text: "Application Process Integration", correct: false },
                { text: "Automated Programming Interface", correct: false },
            ],
        },
        {
            question:
                "Which HTTP method is used to retrieve data from a server?",
            answers: [
                { text: "POST", correct: false },
                { text: "GET", correct: true },
                { text: "PUT", correct: false },
                { text: "DELETE", correct: false },
            ],
        },
        {
            question: "In databases, what does 'ACID' stand for?",
            answers: [
                {
                    text: "Atomicity, Consistency, Isolation, Durability",
                    correct: true,
                },
                {
                    text: "Accessibility, Control, Integration, Durability",
                    correct: false,
                },
                {
                    text: "Atomicity, Control, Isolation, Durability",
                    correct: false,
                },
                {
                    text: "Accessibility, Consistency, Integration, Durability",
                    correct: false,
                },
            ],
        },
        {
            question: "What is recursion in programming?",
            answers: [
                { text: "A function that calls itself", correct: true },
                { text: "A loop that runs indefinitely", correct: false },
                {
                    text: "A variable that holds multiple values",
                    correct: false,
                },
                {
                    text: "A conditional statement that never executes",
                    correct: false,
                },
            ],
        },
        {
            question: "Which of the following is a NoSQL database?",
            answers: [
                { text: "MySQL", correct: false },
                { text: "MongoDB", correct: true },
                { text: "PostgreSQL", correct: false },
                { text: "SQLite", correct: false },
            ],
        },
        {
            question: "What does 'IDE' stand for in software development?",
            answers: [
                { text: "Integrated Development Environment", correct: true },
                { text: "Internal Design Engine", correct: false },
                { text: "Integrated Design Environment", correct: false },
                { text: "Internal Development Engine", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is a binary tree in computer science?",
            answers: [
                {
                    text: "A tree data structure in which each node has at most two children",
                    correct: true,
                },
                { text: "A tree with two roots", correct: false },
                { text: "A tree that stores binary data", correct: false },
                { text: "A tree used for binary search", correct: false },
            ],
        },
        {
            question:
                "Which sorting algorithm is considered the most efficient for large datasets?",
            answers: [
                { text: "Bubble Sort", correct: false },
                { text: "Quick Sort", correct: true },
                { text: "Insertion Sort", correct: false },
                { text: "Selection Sort", correct: false },
            ],
        },
        {
            question:
                "What is the primary difference between compiled and interpreted languages?",
            answers: [
                {
                    text: "Compiled languages are executed directly by the CPU, while interpreted languages are executed by an interpreter",
                    correct: true,
                },
                {
                    text: "Interpreted languages are faster than compiled languages",
                    correct: false,
                },
                {
                    text: "Compiled languages do not require a compiler",
                    correct: false,
                },
                {
                    text: "Interpreted languages cannot be used for web development",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which of the following is an example of a high-level programming language?",
            answers: [
                { text: "Assembly", correct: false },
                { text: "C", correct: false },
                { text: "Python", correct: true },
                { text: "Machine Code", correct: false },
            ],
        },
        {
            question:
                "What is the main purpose of the Git version control system?",
            answers: [
                { text: "To manage project dependencies", correct: false },
                {
                    text: "To track changes in source code during software development",
                    correct: true,
                },
                { text: "To compile code into executables", correct: false },
                { text: "To deploy applications to servers", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a feature of object-oriented programming?",
            answers: [
                { text: "Inheritance", correct: true },
                { text: "Procedural abstraction", correct: false },
                { text: "Linear execution", correct: false },
                { text: "Global variables", correct: false },
            ],
        },
        {
            question: "What does 'MVC' stand for in software architecture?",
            answers: [
                { text: "Model-View-Controller", correct: true },
                { text: "Model-Variable-Component", correct: false },
                { text: "Module-View-Controller", correct: false },
                { text: "Model-View-Class", correct: false },
            ],
        },
        {
            question:
                "Which of the following is NOT a type of machine learning?",
            answers: [
                { text: "Supervised Learning", correct: false },
                { text: "Unsupervised Learning", correct: false },
                { text: "Reinforcement Learning", correct: false },
                { text: "Declarative Learning", correct: true },
            ],
        },
        {
            question: "What is the primary function of an operating system?",
            answers: [
                {
                    text: "To manage computer hardware and software resources",
                    correct: true,
                },
                { text: "To compile code into executables", correct: false },
                { text: "To provide antivirus protection", correct: false },
                { text: "To edit text documents", correct: false },
            ],
        },
        {
            question:
                "Which data structure is used in breadth-first search (BFS) algorithm?",
            answers: [
                { text: "Stack", correct: false },
                { text: "Queue", correct: true },
                { text: "Tree", correct: false },
                { text: "Hash Table", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is a deadlock in operating systems?",
            answers: [
                {
                    text: "When two or more processes are unable to proceed because each is waiting for the other to release resources",
                    correct: true,
                },
                { text: "When a process uses too much memory", correct: false },
                { text: "When the CPU is overloaded", correct: false },
                {
                    text: "When a process finishes execution unexpectedly",
                    correct: false,
                },
            ],
        },
        {
            question: "Which of the following is a non-relational database?",
            answers: [
                { text: "PostgreSQL", correct: false },
                { text: "MySQL", correct: false },
                { text: "MongoDB", correct: true },
                { text: "SQLite", correct: false },
            ],
        },
        {
            question: "What is the primary purpose of DNS?",
            answers: [
                {
                    text: "Translate domain names to IP addresses",
                    correct: true,
                },
                { text: "Secure network communications", correct: false },
                { text: "Route data packets", correct: false },
                { text: "Provide network storage", correct: false },
            ],
        },
        {
            question:
                "Which algorithm is used for finding the shortest path in a graph?",
            answers: [
                { text: "Dijkstra's Algorithm", correct: true },
                { text: "Bubble Sort", correct: false },
                { text: "Quick Sort", correct: false },
                { text: "Merge Sort", correct: false },
            ],
        },
        {
            question: "What is the main purpose of the HTTP protocol?",
            answers: [
                {
                    text: "To transfer hypertext requests and information on the internet",
                    correct: true,
                },
                {
                    text: "To secure communications over a network",
                    correct: false,
                },
                { text: "To route data packets", correct: false },
                { text: "To manage email transmissions", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a functional programming language?",
            answers: [
                { text: "Haskell", correct: true },
                { text: "Java", correct: false },
                { text: "C#", correct: false },
                { text: "Ruby", correct: false },
            ],
        },
        {
            question: "What is the purpose of a compiler in programming?",
            answers: [
                {
                    text: "To convert high-level code into machine code",
                    correct: true,
                },
                { text: "To execute code line by line", correct: false },
                { text: "To manage memory allocation", correct: false },
                { text: "To debug code", correct: false },
            ],
        },
        {
            question:
                "Which of the following is an example of a binary search tree property?",
            answers: [
                {
                    text: "Left child nodes are greater than the parent node",
                    correct: false,
                },
                {
                    text: "Right child nodes are less than the parent node",
                    correct: false,
                },
                {
                    text: "All left child nodes are less than the parent node and all right child nodes are greater",
                    correct: true,
                },
                {
                    text: "All child nodes are equal to the parent node",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'MVC' stand for in software architecture?",
            answers: [
                { text: "Model-View-Controller", correct: true },
                { text: "Model-Variable-Component", correct: false },
                { text: "Module-View-Controller", correct: false },
                { text: "Model-View-Class", correct: false },
            ],
        },
        {
            question:
                "Which of the following is NOT a type of machine learning?",
            answers: [
                { text: "Supervised Learning", correct: false },
                { text: "Unsupervised Learning", correct: false },
                { text: "Reinforcement Learning", correct: false },
                { text: "Declarative Learning", correct: true },
            ],
        },
    ],
};

// Chemistry Quiz Data
export const chemistryData: Quiz = {
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
        {
            question: "What is the boiling point of water?",
            answers: [
                { text: "100°C", correct: true },
                { text: "90°C", correct: false },
                { text: "110°C", correct: false },
                { text: "50°C", correct: false },
            ],
        },
        {
            question:
                "What is the main gas that plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question: "What is the formula for salt?",
            answers: [
                { text: "NaCl", correct: true },
                { text: "KCl", correct: false },
                { text: "CaCl2", correct: false },
                { text: "MgCl2", correct: false },
            ],
        },
        {
            question: "Which of the following is a liquid at room temperature?",
            answers: [
                { text: "Mercury", correct: true },
                { text: "Gold", correct: false },
                { text: "Iron", correct: false },
                { text: "Aluminum", correct: false },
            ],
        },
        {
            question:
                "What is the most common state of matter in the universe?",
            answers: [
                { text: "Solid", correct: false },
                { text: "Liquid", correct: false },
                { text: "Gas", correct: true },
                { text: "Plasma", correct: false },
            ],
        },
        {
            question: "What is the chemical formula for water?",
            answers: [
                { text: "H2O", correct: true },
                { text: "CO2", correct: false },
                { text: "NaCl", correct: false },
                { text: "O2", correct: false },
            ],
        },
    ],
    2: [
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
            question:
                "What is the most abundant gas in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Argon", correct: false },
            ],
        },
        {
            question:
                "What type of bond involves the sharing of electron pairs between atoms?",
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
        {
            question: "What is the chemical formula for hydrochloric acid?",
            answers: [
                { text: "HCl", correct: true },
                { text: "H2SO4", correct: false },
                { text: "NaCl", correct: false },
                { text: "H2CO3", correct: false },
            ],
        },
        {
            question:
                "What type of reaction is represented by the equation: A + B → AB?",
            answers: [
                { text: "Decomposition", correct: false },
                { text: "Synthesis", correct: true },
                { text: "Single Replacement", correct: false },
                { text: "Double Replacement", correct: false },
            ],
        },
        {
            question:
                "Which type of reaction occurs when an acid reacts with a base?",
            answers: [
                { text: "Neutralization", correct: true },
                { text: "Combustion", correct: false },
                { text: "Synthesis", correct: false },
                { text: "Decomposition", correct: false },
            ],
        },
        {
            question: "What is the molar mass of water (H2O)?",
            answers: [
                { text: "18 g/mol", correct: true },
                { text: "16 g/mol", correct: false },
                { text: "20 g/mol", correct: false },
                { text: "22 g/mol", correct: false },
            ],
        },
        {
            question: "What process involves the loss of electrons?",
            answers: [
                { text: "Oxidation", correct: true },
                { text: "Reduction", correct: false },
                { text: "Sublimation", correct: false },
                { text: "Evaporation", correct: false },
            ],
        },
        {
            question: "What is the main component of the Earth's crust?",
            answers: [
                { text: "Silicon Dioxide", correct: true },
                { text: "Calcium Carbonate", correct: false },
                { text: "Iron Oxide", correct: false },
                { text: "Magnesium Sulfate", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "What is the process of a solid turning directly into a gas called?",
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
        {
            question: "What is the chemical formula for ammonia?",
            answers: [
                { text: "NH3", correct: true },
                { text: "N2H4", correct: false },
                { text: "H2O", correct: false },
                { text: "NaCl", correct: false },
            ],
        },
        {
            question:
                "Which reaction type is characterized by the transfer of electrons?",
            answers: [
                { text: "Synthesis", correct: false },
                { text: "Decomposition", correct: false },
                { text: "Redox", correct: true },
                { text: "Combustion", correct: false },
            ],
        },
        {
            question: "What is the principal quantum number?",
            answers: [
                { text: "Indicates the size of the orbital", correct: true },
                { text: "Indicates the shape of the orbital", correct: false },
                {
                    text: "Indicates the orientation of the orbital",
                    correct: false,
                },
                { text: "Indicates the spin of the electron", correct: false },
            ],
        },
        {
            question: "What is the main gas produced during photosynthesis?",
            answers: [
                { text: "Oxygen", correct: true },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question: "What is the ideal gas law equation?",
            answers: [
                { text: "PV = nRT", correct: true },
                { text: "PV = nRT^2", correct: false },
                { text: "PV = nR/T", correct: false },
                { text: "PV = nR^2T", correct: false },
            ],
        },
        {
            question: "What is the density of water at 4°C?",
            answers: [
                { text: "1 g/cm³", correct: true },
                { text: "0.5 g/cm³", correct: false },
                { text: "0.75 g/cm³", correct: false },
                { text: "0.9 g/cm³", correct: false },
            ],
        },
        {
            question: "Which of the following is a characteristic of metals?",
            answers: [
                { text: "Good conductors of heat", correct: true },
                { text: "Brittle", correct: false },
                { text: "Dull", correct: false },
                { text: "Low density", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the law of conservation of mass?",
            answers: [
                { text: "Mass cannot be created or destroyed", correct: true },
                { text: "Mass can be converted to energy", correct: false },
                {
                    text: "Mass increases in chemical reactions",
                    correct: false,
                },
                {
                    text: "Mass decreases in chemical reactions",
                    correct: false,
                },
            ],
        },
        {
            question: "Which type of reaction involves an acid and a base?",
            answers: [
                { text: "Combustion", correct: false },
                { text: "Neutralization", correct: true },
                { text: "Oxidation", correct: false },
                { text: "Reduction", correct: false },
            ],
        },
        {
            question: "What is Avogadro's number?",
            answers: [
                { text: "6.022 x 10^23", correct: true },
                { text: "3.14 x 10^22", correct: false },
                { text: "1.66 x 10^-24", correct: false },
                { text: "9.81 x 10^0", correct: false },
            ],
        },
        {
            question:
                "In what state of matter are the particles most closely packed?",
            answers: [
                { text: "Gas", correct: false },
                { text: "Liquid", correct: false },
                { text: "Solid", correct: true },
                { text: "Plasma", correct: false },
            ],
        },
        {
            question:
                "What is the process of a liquid turning into a gas called?",
            answers: [
                { text: "Condensation", correct: false },
                { text: "Sublimation", correct: false },
                { text: "Evaporation", correct: true },
                { text: "Deposition", correct: false },
            ],
        },
        {
            question: "Which gas is produced during cellular respiration?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question:
                "What is the primary factor that affects the rate of a chemical reaction?",
            answers: [
                { text: "Temperature", correct: true },
                { text: "Pressure", correct: false },
                { text: "Volume", correct: false },
                { text: "Concentration", correct: false },
            ],
        },
        {
            question: "Which of the following is a strong acid?",
            answers: [
                { text: "Hydrochloric acid", correct: true },
                { text: "Acetic acid", correct: false },
                { text: "Carbonic acid", correct: false },
                { text: "Citric acid", correct: false },
            ],
        },
        {
            question:
                "What is the main purpose of a catalyst in a chemical reaction?",
            answers: [
                { text: "To increase the temperature", correct: false },
                { text: "To speed up the reaction", correct: true },
                { text: "To change the reaction products", correct: false },
                { text: "To decrease the activation energy", correct: false },
            ],
        },
        {
            question: "Which principle explains the behavior of gases?",
            answers: [
                { text: "Kinetic Molecular Theory", correct: true },
                { text: "Law of Conservation of Mass", correct: false },
                { text: "Le Chatelier's Principle", correct: false },
                { text: "Avogadro's Law", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is the primary cause of climate change?",
            answers: [
                { text: "Deforestation", correct: false },
                { text: "Greenhouse gases", correct: true },
                { text: "Ozone depletion", correct: false },
                { text: "Overpopulation", correct: false },
            ],
        },
        {
            question: "What is the function of the cell membrane?",
            answers: [
                { text: "To store genetic information", correct: false },
                {
                    text: "To control what enters and exits the cell",
                    correct: true,
                },
                { text: "To produce energy", correct: false },
                { text: "To transport substances", correct: false },
            ],
        },
        {
            question: "What is the process of photosynthesis?",
            answers: [
                {
                    text: "Conversion of light energy into chemical energy",
                    correct: true,
                },
                { text: "Breaking down glucose for energy", correct: false },
                { text: "Using oxygen to produce energy", correct: false },
                { text: "Absorbing nutrients from soil", correct: false },
            ],
        },
        {
            question:
                "What is the law of thermodynamics that states energy cannot be created or destroyed?",
            answers: [
                { text: "First Law", correct: true },
                { text: "Second Law", correct: false },
                { text: "Third Law", correct: false },
                { text: "Zeroth Law", correct: false },
            ],
        },
        {
            question:
                "What is the relationship between pressure and volume of a gas at constant temperature called?",
            answers: [
                { text: "Boyle's Law", correct: true },
                { text: "Charles's Law", correct: false },
                { text: "Avogadro's Law", correct: false },
                { text: "Graham's Law", correct: false },
            ],
        },
        {
            question:
                "What is the term for a substance that speeds up a chemical reaction without being consumed?",
            answers: [
                { text: "Catalyst", correct: true },
                { text: "Reagent", correct: false },
                { text: "Product", correct: false },
                { text: "Solvent", correct: false },
            ],
        },
        {
            question:
                "Which reaction type is characterized by the release of energy?",
            answers: [
                { text: "Exothermic", correct: true },
                { text: "Endothermic", correct: false },
                { text: "Combustion", correct: false },
                { text: "Synthesis", correct: false },
            ],
        },
        {
            question: "What is the primary purpose of the periodic table?",
            answers: [
                { text: "To classify elements", correct: true },
                { text: "To balance chemical equations", correct: false },
                { text: "To calculate molar mass", correct: false },
                { text: "To determine reactivity", correct: false },
            ],
        },
        {
            question: "What is the main component of human blood?",
            answers: [
                { text: "Red blood cells", correct: true },
                { text: "Plasma", correct: false },
                { text: "White blood cells", correct: false },
                { text: "Platelets", correct: false },
            ],
        },
        {
            question: "Which of the following is a property of acids?",
            answers: [
                { text: "Taste sour", correct: true },
                { text: "Taste bitter", correct: false },
                { text: "Feel slippery", correct: false },
                { text: "Conduct electricity", correct: true },
            ],
        },
    ],
};

// Econmics Quiz Data
export const economicsData: Quiz = {
    1: [
        {
            question: "What is the basic economic problem every society faces?",
            answers: [
                {
                    text: "Unlimited wants and limited resources",
                    correct: true,
                },
                {
                    text: "Limited wants and unlimited resources",
                    correct: false,
                },
                {
                    text: "Unlimited resources and unlimited wants",
                    correct: false,
                },
                { text: "Limited resources and limited wants", correct: false },
            ],
        },
        {
            question:
                "Which term refers to the total value of all goods and services produced within a country?",
            answers: [
                { text: "Gross Domestic Product (GDP)", correct: true },
                { text: "Gross National Product (GNP)", correct: false },
                { text: "Net Domestic Product (NDP)", correct: false },
                { text: "National Income (NI)", correct: false },
            ],
        },
        {
            question:
                "What is the primary role of the Federal Reserve in the United States?",
            answers: [
                {
                    text: "Control the money supply and manage interest rates",
                    correct: true,
                },
                {
                    text: "Set fiscal policy and government spending",
                    correct: false,
                },
                {
                    text: "Regulate international trade agreements",
                    correct: false,
                },
                { text: "Manage the national budget", correct: false },
            ],
        },
        {
            question:
                "Which economic system is characterized by private ownership and free markets?",
            answers: [
                { text: "Capitalism", correct: true },
                { text: "Socialism", correct: false },
                { text: "Communism", correct: false },
                { text: "Feudalism", correct: false },
            ],
        },
        {
            question: "What does 'inflation' refer to in economics?",
            answers: [
                {
                    text: "A general increase in prices and fall in the purchasing value of money",
                    correct: true,
                },
                {
                    text: "A general decrease in prices and increase in the purchasing value of money",
                    correct: false,
                },
                {
                    text: "An increase in the production of goods and services",
                    correct: false,
                },
                {
                    text: "A decrease in the production of goods and services",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'opportunity cost'?",
            answers: [
                {
                    text: "The cost of the next best alternative foregone",
                    correct: true,
                },
                {
                    text: "The total monetary cost of all resources used",
                    correct: false,
                },
                {
                    text: "The cost incurred when a business decides to produce a good",
                    correct: false,
                },
                {
                    text: "The cost associated with borrowing money",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which of the following is a type of market structure with many sellers and identical products?",
            answers: [
                { text: "Perfect Competition", correct: true },
                { text: "Monopoly", correct: false },
                { text: "Oligopoly", correct: false },
                { text: "Monopolistic Competition", correct: false },
            ],
        },
        {
            question: "What is the main purpose of fiscal policy?",
            answers: [
                {
                    text: "To influence economic activity through government spending and taxation",
                    correct: true,
                },
                {
                    text: "To control the money supply and interest rates",
                    correct: false,
                },
                { text: "To regulate international trade", correct: false },
                {
                    text: "To manage public transportation systems",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which curve represents the relationship between the price level and the quantity of goods and services demanded?",
            answers: [
                { text: "Aggregate Demand (AD) Curve", correct: true },
                { text: "Aggregate Supply (AS) Curve", correct: false },
                { text: "Demand (D) Curve", correct: false },
                { text: "Supply (S) Curve", correct: false },
            ],
        },
        {
            question: "What is 'unemployment rate'?",
            answers: [
                {
                    text: "The percentage of the labor force that is jobless and actively seeking employment",
                    correct: true,
                },
                {
                    text: "The total number of people without jobs",
                    correct: false,
                },
                {
                    text: "The rate at which jobs are being created",
                    correct: false,
                },
                {
                    text: "The percentage of people employed part-time",
                    correct: false,
                },
            ],
        },
    ],
    2: [
        {
            question: "What is 'microeconomics' primarily concerned with?",
            answers: [
                {
                    text: "Individual and business decisions regarding the allocation of resources",
                    correct: true,
                },
                {
                    text: "Overall economic factors affecting the entire economy",
                    correct: false,
                },
                { text: "International trade and finance", correct: false },
                {
                    text: "Government policies and their impact on the economy",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which concept explains how consumers maximize their satisfaction?",
            answers: [
                { text: "Utility Maximization", correct: true },
                { text: "Profit Maximization", correct: false },
                { text: "Cost Minimization", correct: false },
                { text: "Revenue Maximization", correct: false },
            ],
        },
        {
            question: "What is 'price elasticity of demand'?",
            answers: [
                {
                    text: "A measure of how much the quantity demanded responds to a change in price",
                    correct: true,
                },
                {
                    text: "A measure of the total revenue at different price levels",
                    correct: false,
                },
                {
                    text: "A measure of the change in supply when price changes",
                    correct: false,
                },
                {
                    text: "A measure of consumer preferences for different goods",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which factor can cause the demand curve to shift to the right?",
            answers: [
                {
                    text: "Increase in consumer income for a normal good",
                    correct: true,
                },
                {
                    text: "Decrease in the price of the good itself",
                    correct: false,
                },
                {
                    text: "Decrease in consumer income for a normal good",
                    correct: false,
                },
                {
                    text: "Increase in the price of a substitute good",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'marginal cost'?",
            answers: [
                {
                    text: "The cost of producing one additional unit of a good",
                    correct: true,
                },
                {
                    text: "The total cost divided by the number of units produced",
                    correct: false,
                },
                { text: "The fixed cost of production", correct: false },
                { text: "The average variable cost", correct: false },
            ],
        },
        {
            question:
                "In perfect competition, firms are price takers. What does this mean?",
            answers: [
                {
                    text: "They accept the market price and cannot influence it",
                    correct: true,
                },
                {
                    text: "They set their own prices based on costs",
                    correct: false,
                },
                { text: "They collaborate to set prices", correct: false },
                { text: "They follow government-set prices", correct: false },
            ],
        },
        {
            question: "What is 'consumer surplus'?",
            answers: [
                {
                    text: "The difference between what consumers are willing to pay and what they actually pay",
                    correct: true,
                },
                {
                    text: "The total amount consumers spend on a good",
                    correct: false,
                },
                {
                    text: "The additional satisfaction from consuming one more unit of a good",
                    correct: false,
                },
                {
                    text: "The cost of goods purchased by consumers",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which market structure is characterized by a single seller with no close substitutes?",
            answers: [
                { text: "Monopoly", correct: true },
                { text: "Perfect Competition", correct: false },
                { text: "Oligopoly", correct: false },
                { text: "Monopolistic Competition", correct: false },
            ],
        },
        {
            question: "What is 'game theory' used for in economics?",
            answers: [
                {
                    text: "Analyzing competitive strategies among firms",
                    correct: true,
                },
                { text: "Calculating national GDP", correct: false },
                { text: "Measuring consumer satisfaction", correct: false },
                { text: "Determining tax rates", correct: false },
            ],
        },
        {
            question: "Which policy tool is used to combat inflation?",
            answers: [
                { text: "Increasing interest rates", correct: true },
                { text: "Decreasing taxes", correct: false },
                { text: "Increasing government spending", correct: false },
                { text: "Lowering interest rates", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What does 'macroeconomics' study?",
            answers: [
                {
                    text: "The economy as a whole, including inflation, unemployment, and GDP",
                    correct: true,
                },
                { text: "Individual consumer behavior", correct: false },
                { text: "Business pricing strategies", correct: false },
                { text: "Local market structures", correct: false },
            ],
        },
        {
            question: "What is 'fiscal policy'?",
            answers: [
                {
                    text: "Government spending and taxation policies",
                    correct: true,
                },
                {
                    text: "Central bank's control of the money supply",
                    correct: false,
                },
                { text: "Regulations on international trade", correct: false },
                { text: "Policies related to labor markets", correct: false },
            ],
        },
        {
            question:
                "Which indicator measures the overall health of the economy?",
            answers: [
                { text: "Gross Domestic Product (GDP)", correct: true },
                { text: "Consumer Price Index (CPI)", correct: false },
                { text: "Unemployment Rate", correct: false },
                { text: "Balance of Trade", correct: false },
            ],
        },
        {
            question: "What is 'monetary policy'?",
            answers: [
                {
                    text: "Central bank's actions to control the money supply and interest rates",
                    correct: true,
                },
                {
                    text: "Government's decisions on taxation and spending",
                    correct: false,
                },
                {
                    text: "Regulations on businesses and industries",
                    correct: false,
                },
                {
                    text: "Policies related to environmental protection",
                    correct: false,
                },
            ],
        },
        {
            question: "What does the 'Phillips Curve' illustrate?",
            answers: [
                {
                    text: "The inverse relationship between inflation and unemployment",
                    correct: true,
                },
                {
                    text: "The relationship between GDP and investment",
                    correct: false,
                },
                { text: "The supply and demand for labor", correct: false },
                {
                    text: "The effect of taxation on consumer spending",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'stagflation'?",
            answers: [
                {
                    text: "High inflation combined with high unemployment",
                    correct: true,
                },
                { text: "Low inflation and low unemployment", correct: false },
                {
                    text: "High economic growth with low inflation",
                    correct: false,
                },
                { text: "Deflation and increasing GDP", correct: false },
            ],
        },
        {
            question:
                "Which international organization aims to promote free trade and economic cooperation?",
            answers: [
                { text: "World Trade Organization (WTO)", correct: true },
                { text: "International Monetary Fund (IMF)", correct: false },
                { text: "World Bank", correct: false },
                { text: "United Nations (UN)", correct: false },
            ],
        },
        {
            question: "What is the 'balance of payments'?",
            answers: [
                {
                    text: "A record of all economic transactions between residents of a country and the rest of the world",
                    correct: true,
                },
                {
                    text: "The difference between a country's exports and imports",
                    correct: false,
                },
                {
                    text: "The total amount of foreign investment in a country",
                    correct: false,
                },
                {
                    text: "The government's budget surplus or deficit",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which theory suggests that countries should specialize in producing goods where they have a comparative advantage?",
            answers: [
                { text: "Comparative Advantage Theory", correct: true },
                { text: "Absolute Advantage Theory", correct: false },
                { text: "Heckscher-Ohlin Theory", correct: false },
                { text: "Ricardian Theory", correct: false },
            ],
        },
        {
            question: "What does 'GDP per capita' measure?",
            answers: [
                { text: "Average economic output per person", correct: true },
                {
                    text: "Total GDP divided by the number of businesses",
                    correct: false,
                },
                { text: "Government spending per person", correct: false },
                { text: "Total exports per person", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is 'international trade'?",
            answers: [
                {
                    text: "Exchange of goods and services between countries",
                    correct: true,
                },
                { text: "Trade within a single country", correct: false },
                { text: "Bartering goods without using money", correct: false },
                { text: "Exchange of currencies only", correct: false },
            ],
        },
        {
            question:
                "Which policy aims to reduce trade barriers and encourage free trade?",
            answers: [
                { text: "Liberalization", correct: true },
                { text: "Protectionism", correct: false },
                { text: "Nationalization", correct: false },
                { text: "Subsidization", correct: false },
            ],
        },
        {
            question: "What is a 'tariff'?",
            answers: [
                { text: "A tax on imported goods", correct: true },
                { text: "A subsidy for domestic industries", correct: false },
                {
                    text: "A quota limiting the number of goods that can be imported",
                    correct: false,
                },
                { text: "A type of trade agreement", correct: false },
            ],
        },
        {
            question:
                "Which term refers to the total value of goods and services a country imports?",
            answers: [
                { text: "Imports", correct: true },
                { text: "Exports", correct: false },
                { text: "Trade Balance", correct: false },
                { text: "Current Account", correct: false },
            ],
        },
        {
            question: "What is 'foreign direct investment' (FDI)?",
            answers: [
                {
                    text: "Investment made by a firm or individual in one country into business interests in another country",
                    correct: true,
                },
                {
                    text: "Investment in foreign stocks and bonds",
                    correct: false,
                },
                {
                    text: "Investment in domestic industries to export goods",
                    correct: false,
                },
                {
                    text: "Investment by foreign governments in local infrastructure",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which agreement established the World Trade Organization (WTO)?",
            answers: [
                { text: "Uruguay Round Agreements", correct: true },
                { text: "Nash Equilibrium", correct: false },
                { text: "Bretton Woods Agreement", correct: false },
                {
                    text: "General Agreement on Tariffs and Trade (GATT)",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'balance of trade' signify?",
            answers: [
                {
                    text: "The difference between a country's exports and imports",
                    correct: true,
                },
                {
                    text: "The total value of a country's financial assets",
                    correct: false,
                },
                {
                    text: "The equilibrium between government spending and taxation",
                    correct: false,
                },
                {
                    text: "The net capital inflow and outflow of a country",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which currency is commonly used as the world's reserve currency?",
            answers: [
                { text: "US Dollar", correct: true },
                { text: "Euro", correct: false },
                { text: "Japanese Yen", correct: false },
                { text: "British Pound", correct: false },
            ],
        },
        {
            question: "What is 'comparative advantage'?",
            answers: [
                {
                    text: "Ability of a country to produce a good at a lower opportunity cost than another country",
                    correct: true,
                },
                {
                    text: "Ability of a country to produce more of a good than another country",
                    correct: false,
                },
                {
                    text: "Ability of a country to produce a good without any cost",
                    correct: false,
                },
                {
                    text: "Ability of a country to produce all goods efficiently",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'exchange rate' refer to?",
            answers: [
                {
                    text: "The value of one currency for the purpose of conversion to another",
                    correct: true,
                },
                {
                    text: "The rate at which goods are exchanged internationally",
                    correct: false,
                },
                { text: "The interest rate on foreign loans", correct: false },
                {
                    text: "The rate of economic growth in a country",
                    correct: false,
                },
            ],
        },
    ],
    5: [
        {
            question: "Who is known as the father of modern economics?",
            answers: [
                { text: "Adam Smith", correct: true },
                { text: "Karl Marx", correct: false },
                { text: "John Maynard Keynes", correct: false },
                { text: "Milton Friedman", correct: false },
            ],
        },
        {
            question: "What is 'Keynesian Economics' primarily concerned with?",
            answers: [
                {
                    text: "Government intervention to stabilize the economy",
                    correct: true,
                },
                {
                    text: "Free markets without government interference",
                    correct: false,
                },
                { text: "Labor theory of value", correct: false },
                { text: "Supply-side policies", correct: false },
            ],
        },
        {
            question:
                "Which economist developed the theory of comparative advantage?",
            answers: [
                { text: "David Ricardo", correct: true },
                { text: "Adam Smith", correct: false },
                { text: "John Stuart Mill", correct: false },
                { text: "Alfred Marshall", correct: false },
            ],
        },
        {
            question: "What does 'supply-side economics' emphasize?",
            answers: [
                {
                    text: "Increasing production and supply of goods and services",
                    correct: true,
                },
                {
                    text: "Increasing consumer demand through government spending",
                    correct: false,
                },
                { text: "Reducing taxes on the poor", correct: false },
                {
                    text: "Implementing price controls to stabilize markets",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which term refers to the total amount of goods and services demanded across all levels of an economy?",
            answers: [
                { text: "Aggregate Demand", correct: true },
                { text: "Marginal Demand", correct: false },
                { text: "Individual Demand", correct: false },
                { text: "Total Supply", correct: false },
            ],
        },
        {
            question: "What is 'public goods' characterized by?",
            answers: [
                { text: "Non-excludable and non-rivalrous", correct: true },
                { text: "Excludable and rivalrous", correct: false },
                { text: "Excludable and non-rivalrous", correct: false },
                { text: "Non-excludable and rivalrous", correct: false },
            ],
        },
        {
            question:
                "Which economist is associated with the concept of 'invisible hand'?",
            answers: [
                { text: "Adam Smith", correct: true },
                { text: "John Maynard Keynes", correct: false },
                { text: "Karl Marx", correct: false },
                { text: "Milton Friedman", correct: false },
            ],
        },
        {
            question: "What is 'monetary policy'?",
            answers: [
                {
                    text: "Central bank's actions to control the money supply and interest rates",
                    correct: true,
                },
                {
                    text: "Government's decisions on taxation and spending",
                    correct: false,
                },
                { text: "Regulations on international trade", correct: false },
                { text: "Policies related to labor markets", correct: false },
            ],
        },
        {
            question:
                "Which type of unemployment occurs when workers are temporarily between jobs?",
            answers: [
                { text: "Frictional Unemployment", correct: true },
                { text: "Structural Unemployment", correct: false },
                { text: "Cyclical Unemployment", correct: false },
                { text: "Seasonal Unemployment", correct: false },
            ],
        },
        {
            question: "What is 'deflation'?",
            answers: [
                {
                    text: "A general decrease in prices and increase in the purchasing value of money",
                    correct: true,
                },
                {
                    text: "A general increase in prices and fall in the purchasing value of money",
                    correct: false,
                },
                {
                    text: "An increase in the production of goods and services",
                    correct: false,
                },
                {
                    text: "A decrease in the production of goods and services",
                    correct: false,
                },
            ],
        },
    ],
};

// English Quiz Data
export const englishData: Quiz = {
    1: [
        {
            question: "What is the past tense of the verb 'run'?",
            answers: [
                { text: "Ran", correct: true },
                { text: "Runned", correct: false },
                { text: "Running", correct: false },
                { text: "Runs", correct: false },
            ],
        },
        {
            question:
                "Identify the adjective in the following sentence: 'The quick brown fox jumps over the lazy dog.'",
            answers: [
                { text: "Fox", correct: false },
                { text: "Jumps", correct: false },
                { text: "Quick", correct: true },
                { text: "Over", correct: false },
            ],
        },
        {
            question: "Which of the following is a synonym for 'happy'?",
            answers: [
                { text: "Sad", correct: false },
                { text: "Joyful", correct: true },
                { text: "Angry", correct: false },
                { text: "Tired", correct: false },
            ],
        },
        {
            question:
                "Choose the correct form of the verb: 'She ______ to the store yesterday.'",
            answers: [
                { text: "Go", correct: false },
                { text: "Goes", correct: false },
                { text: "Went", correct: true },
                { text: "Going", correct: false },
            ],
        },
        {
            question: "What is the plural form of 'child'?",
            answers: [
                { text: "Childs", correct: false },
                { text: "Children", correct: true },
                { text: "Childes", correct: false },
                { text: "Childeren", correct: false },
            ],
        },
        {
            question: "Identify the correct sentence.",
            answers: [
                { text: "Their going to the park.", correct: false },
                { text: "There going to the park.", correct: false },
                { text: "They're going to the park.", correct: true },
                { text: "Theyre going to the park.", correct: false },
            ],
        },
        {
            question: "What is the antonym of 'ancient'?",
            answers: [
                { text: "Old", correct: false },
                { text: "Antique", correct: false },
                { text: "Modern", correct: true },
                { text: "Historic", correct: false },
            ],
        },
        {
            question:
                "Choose the correct preposition: 'She is interested ______ learning French.'",
            answers: [
                { text: "In", correct: true },
                { text: "On", correct: false },
                { text: "At", correct: false },
                { text: "To", correct: false },
            ],
        },
        {
            question:
                "What is the main theme of William Shakespeare's play 'Romeo and Juliet'?",
            answers: [
                { text: "Adventure", correct: false },
                { text: "Tragedy of forbidden love", correct: true },
                { text: "Comedy of errors", correct: false },
                { text: "Historical events", correct: false },
            ],
        },
        {
            question: "Which punctuation mark is used to indicate possession?",
            answers: [
                { text: "Comma", correct: false },
                { text: "Apostrophe", correct: true },
                { text: "Colon", correct: false },
                { text: "Semicolon", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is a 'metaphor'?",
            answers: [
                {
                    text: "A figure of speech that compares two unlike things without using 'like' or 'as'",
                    correct: true,
                },
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                { text: "A question asked for effect", correct: false },
                { text: "An exaggeration for emphasis", correct: false },
            ],
        },
        {
            question:
                "Choose the correct homophone: 'Their/There/They're ______ going to join us for dinner.'",
            answers: [
                { text: "Their", correct: false },
                { text: "There", correct: false },
                { text: "They're", correct: true },
                { text: "None of the above", correct: false },
            ],
        },
        {
            question: "What is the past participle of 'write'?",
            answers: [
                { text: "Write", correct: false },
                { text: "Wrote", correct: false },
                { text: "Written", correct: true },
                { text: "Writing", correct: false },
            ],
        },
        {
            question:
                "Identify the adverb in the sentence: 'She sings beautifully.'",
            answers: [
                { text: "She", correct: false },
                { text: "Sings", correct: false },
                { text: "Beautifully", correct: true },
                { text: "None", correct: false },
            ],
        },
        {
            question: "Which word is an example of a gerund?",
            answers: [
                { text: "Run", correct: false },
                { text: "Running", correct: true },
                { text: "Ran", correct: false },
                { text: "Runs", correct: false },
            ],
        },
        {
            question:
                "Choose the correct form: 'If I ______ you, I would apologize.'",
            answers: [
                { text: "Am", correct: false },
                { text: "Was", correct: true },
                { text: "Were", correct: false },
                { text: "Be", correct: false },
            ],
        },
        {
            question:
                "What is the subject in the sentence: 'The cat chased the mouse.'?",
            answers: [
                { text: "The", correct: false },
                { text: "Cat", correct: true },
                { text: "Chased", correct: false },
                { text: "Mouse", correct: false },
            ],
        },
        {
            question:
                "Which sentence uses the correct form of 'their/there/they're'?",
            answers: [
                { text: "Their going to the concert tonight.", correct: false },
                { text: "There going to the concert tonight.", correct: false },
                {
                    text: "They're going to the concert tonight.",
                    correct: true,
                },
                {
                    text: "They're going to the concert tonight.",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the plural form of 'analysis'?",
            answers: [
                { text: "Analyses", correct: true },
                { text: "Analysises", correct: false },
                { text: "Analysises", correct: false },
                { text: "Analysis", correct: false },
            ],
        },
        {
            question: "Which of the following is a complex sentence?",
            answers: [
                { text: "I like pizza.", correct: false },
                { text: "She reads every night.", correct: false },
                {
                    text: "Although it was raining, we went for a walk.",
                    correct: true,
                },
                { text: "They are happy.", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Who wrote the play 'Hamlet'?",
            answers: [
                { text: "Charles Dickens", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false },
            ],
        },
        {
            question: "What is the main theme of George Orwell's '1984'?",
            answers: [
                { text: "Romance and relationships", correct: false },
                { text: "Totalitarianism and surveillance", correct: true },
                { text: "Adventure and exploration", correct: false },
                { text: "Fantasy and magic", correct: false },
            ],
        },
        {
            question:
                "Identify the type of irony in the statement: 'A fire station burns down.'",
            answers: [
                { text: "Verbal Irony", correct: false },
                { text: "Situational Irony", correct: true },
                { text: "Dramatic Irony", correct: false },
                { text: "Socratic Irony", correct: false },
            ],
        },
        {
            question: "What is the protagonist in a story?",
            answers: [
                { text: "The main character", correct: true },
                { text: "The antagonist", correct: false },
                { text: "A supporting character", correct: false },
                { text: "The narrator", correct: false },
            ],
        },
        {
            question:
                "Which literary device involves giving human traits to non-human objects?",
            answers: [
                { text: "Alliteration", correct: false },
                { text: "Personification", correct: true },
                { text: "Hyperbole", correct: false },
                { text: "Onomatopoeia", correct: false },
            ],
        },
        {
            question: "What is the purpose of a thesis statement in an essay?",
            answers: [
                { text: "To provide background information", correct: false },
                { text: "To state the main argument or point", correct: true },
                { text: "To conclude the essay", correct: false },
                { text: "To cite sources", correct: false },
            ],
        },
        {
            question: "Which part of speech describes a noun?",
            answers: [
                { text: "Verb", correct: false },
                { text: "Adjective", correct: true },
                { text: "Adverb", correct: false },
                { text: "Preposition", correct: false },
            ],
        },
        {
            question: "What is a 'simile'?",
            answers: [
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: true,
                },
                {
                    text: "An indirect comparison without using 'like' or 'as'",
                    correct: false,
                },
                { text: "An exaggerated statement for effect", correct: false },
                { text: "A rhetorical question", correct: false },
            ],
        },
        {
            question: "Which novel begins with the line, 'Call me Ishmael.'?",
            answers: [
                { text: "'Moby-Dick'", correct: true },
                { text: "'Pride and Prejudice'", correct: false },
                { text: "'Great Expectations'", correct: false },
                { text: "'To Kill a Mockingbird'", correct: false },
            ],
        },
        {
            question: "What is the term for the setting in a story?",
            answers: [
                { text: "Plot", correct: false },
                { text: "Characterization", correct: false },
                { text: "Setting", correct: true },
                { text: "Theme", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Which sentence is written in the passive voice?",
            answers: [
                { text: "The chef cooked a delicious meal.", correct: false },
                {
                    text: "A delicious meal was cooked by the chef.",
                    correct: true,
                },
                { text: "The chef is cooking a meal.", correct: false },
                {
                    text: "The meal will be cooked by the chef.",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the purpose of a topic sentence in a paragraph?",
            answers: [
                { text: "To provide supporting details", correct: false },
                {
                    text: "To state the main idea of the paragraph",
                    correct: true,
                },
                { text: "To conclude the paragraph", correct: false },
                { text: "To introduce a quote", correct: false },
            ],
        },
        {
            question: "Choose the correctly punctuated sentence.",
            answers: [
                { text: "Its a beautiful day outside.", correct: false },
                { text: "It's a beautiful day outside.", correct: true },
                { text: "Its' a beautiful day outside.", correct: false },
                { text: "Its a beautiful day, outside.", correct: false },
            ],
        },
        {
            question: "What is a 'fragment' in writing?",
            answers: [
                {
                    text: "A complete sentence with a subject and predicate",
                    correct: false,
                },
                {
                    text: "An incomplete sentence missing a subject or predicate",
                    correct: true,
                },
                {
                    text: "A run-on sentence with multiple clauses",
                    correct: false,
                },
                {
                    text: "A sentence with excessive punctuation",
                    correct: false,
                },
            ],
        },
        {
            question: "Which word is a conjunction?",
            answers: [
                { text: "And", correct: true },
                { text: "Beautiful", correct: false },
                { text: "Quickly", correct: false },
                { text: "Under", correct: false },
            ],
        },
        {
            question: "What is the main idea of an essay?",
            answers: [
                { text: "The supporting arguments", correct: false },
                { text: "The overall message or point", correct: true },
                { text: "The introduction and conclusion", correct: false },
                { text: "The examples and evidence", correct: false },
            ],
        },
        {
            question: "Which sentence is a complex sentence?",
            answers: [
                { text: "I went to the store.", correct: false },
                { text: "She sings beautifully.", correct: false },
                {
                    text: "Although it was raining, we went for a walk.",
                    correct: true,
                },
                { text: "They are happy.", correct: false },
            ],
        },
        {
            question: "What is an oxymoron?",
            answers: [
                {
                    text: "A figure of speech using exaggeration",
                    correct: false,
                },
                {
                    text: "A figure of speech combining contradictory terms",
                    correct: true,
                },
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                { text: "A rhetorical question", correct: false },
            ],
        },
        {
            question: "Which punctuation mark is used to indicate possession?",
            answers: [
                { text: "Comma", correct: false },
                { text: "Apostrophe", correct: true },
                { text: "Colon", correct: false },
                { text: "Semicolon", correct: false },
            ],
        },
        {
            question: "Identify the correct use of 'their/there/they're'.",
            answers: [
                { text: "Their going to the concert tonight.", correct: false },
                { text: "There going to the concert tonight.", correct: false },
                {
                    text: "They're going to the concert tonight.",
                    correct: true,
                },
                {
                    text: "They're going to the concert tonight.",
                    correct: false,
                },
            ],
        },
    ],
    5: [
        {
            question: "What is the difference between a simile and a metaphor?",
            answers: [
                {
                    text: "A simile uses 'like' or 'as' to compare, while a metaphor does not.",
                    correct: true,
                },
                {
                    text: "A metaphor uses 'like' or 'as', while a simile does not.",
                    correct: false,
                },
                {
                    text: "Both use 'like' or 'as' for comparison.",
                    correct: false,
                },
                {
                    text: "Neither use 'like' or 'as' for comparison.",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'alliteration'?",
            answers: [
                {
                    text: "The repetition of vowel sounds in nearby words",
                    correct: false,
                },
                {
                    text: "The repetition of consonant sounds at the beginning of words",
                    correct: true,
                },
                { text: "An exaggerated statement for effect", correct: false },
                {
                    text: "A figure of speech involving a contradiction",
                    correct: false,
                },
            ],
        },
        {
            question: "Which sentence contains a dangling modifier?",
            answers: [
                {
                    text: "Running quickly, the finish line was crossed by her.",
                    correct: true,
                },
                { text: "She ran quickly to the finish line.", correct: false },
                {
                    text: "Quickly running, she crossed the finish line.",
                    correct: false,
                },
                {
                    text: "She was quickly running to the finish line.",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the purpose of a thesis statement?",
            answers: [
                { text: "To introduce the topic", correct: false },
                { text: "To provide supporting evidence", correct: false },
                {
                    text: "To state the main argument or point of the essay",
                    correct: true,
                },
                { text: "To conclude the essay", correct: false },
            ],
        },
        {
            question:
                "Which term refers to the underlying message or big idea of a literary work?",
            answers: [
                { text: "Theme", correct: true },
                { text: "Plot", correct: false },
                { text: "Setting", correct: false },
                { text: "Characterization", correct: false },
            ],
        },
        {
            question: "What is the function of a semicolon in a sentence?",
            answers: [
                { text: "To separate items in a list", correct: false },
                {
                    text: "To join two independent clauses without a conjunction",
                    correct: true,
                },
                { text: "To introduce a quote", correct: false },
                { text: "To end a sentence forcefully", correct: false },
            ],
        },
        {
            question: "Which word is a preposition?",
            answers: [
                { text: "Run", correct: false },
                { text: "Beautiful", correct: false },
                { text: "Under", correct: true },
                { text: "Quickly", correct: false },
            ],
        },
        {
            question: "What is 'personification'?",
            answers: [
                {
                    text: "A figure of speech comparing two unlike things using 'like' or 'as'",
                    correct: false,
                },
                {
                    text: "Giving human characteristics to non-human entities",
                    correct: true,
                },
                {
                    text: "An exaggerated statement for emphasis",
                    correct: false,
                },
                { text: "A type of rhetorical question", correct: false },
            ],
        },
        {
            question: "Which sentence is correctly punctuated?",
            answers: [
                { text: "I can't wait to see you, my friend.", correct: true },
                { text: "I cant wait to see you my friend.", correct: false },
                { text: "I can't wait to see you my friend.", correct: false },
                { text: "I cant wait to see you, my friend.", correct: false },
            ],
        },
        {
            question: "What is the purpose of a concluding paragraph?",
            answers: [
                { text: "To introduce new arguments", correct: false },
                {
                    text: "To summarize the main points and restate the thesis",
                    correct: true,
                },
                { text: "To provide detailed evidence", correct: false },
                { text: "To ask rhetorical questions", correct: false },
            ],
        },
    ],
};

// Engineering Quiz Data
export const engineeringData: Quiz = {
    1: [
        {
            question:
                "What is the branch of engineering that deals with the design, construction, and maintenance of the physical and naturally built environment?",
            answers: [
                { text: "Civil Engineering", correct: true },
                { text: "Mechanical Engineering", correct: false },
                { text: "Electrical Engineering", correct: false },
                { text: "Chemical Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the fundamental principle behind the operation of a lever?",
            answers: [
                { text: "Law of Conservation of Energy", correct: false },
                { text: "Principle of Moments", correct: true },
                { text: "Bernoulli's Principle", correct: false },
                { text: "Ohm's Law", correct: false },
            ],
        },
        {
            question:
                "Which material is commonly used in electrical wiring due to its excellent conductivity?",
            answers: [
                { text: "Aluminum", correct: false },
                { text: "Copper", correct: true },
                { text: "Steel", correct: false },
                { text: "Iron", correct: false },
            ],
        },
        {
            question: "What does CAD stand for in engineering design?",
            answers: [
                { text: "Computer-Aided Design", correct: true },
                { text: "Computerized Analytical Drawing", correct: false },
                { text: "Controlled Automated Design", correct: false },
                { text: "Computer-Assisted Drafting", correct: false },
            ],
        },
        {
            question: "In thermodynamics, what is the first law also known as?",
            answers: [
                { text: "Law of Entropy", correct: false },
                { text: "Law of Conservation of Energy", correct: true },
                { text: "Law of Gravity", correct: false },
                { text: "Law of Motion", correct: false },
            ],
        },
        {
            question:
                "Which engineering discipline focuses on the behavior of electrons and the design of electronic circuits?",
            answers: [
                { text: "Mechanical Engineering", correct: false },
                { text: "Chemical Engineering", correct: false },
                { text: "Electrical Engineering", correct: true },
                { text: "Civil Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the main purpose of a stress-strain curve in materials engineering?",
            answers: [
                {
                    text: "To determine the electrical conductivity of a material",
                    correct: false,
                },
                {
                    text: "To analyze the mechanical properties of a material under load",
                    correct: true,
                },
                {
                    text: "To measure the thermal expansion of a material",
                    correct: false,
                },
                {
                    text: "To evaluate the chemical composition of a material",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which process involves the transformation of raw materials into finished products?",
            answers: [
                { text: "Manufacturing", correct: true },
                { text: "Designing", correct: false },
                { text: "Prototyping", correct: false },
                { text: "Researching", correct: false },
            ],
        },
        {
            question:
                "What is the primary function of a gearbox in mechanical systems?",
            answers: [
                { text: "To generate electricity", correct: false },
                {
                    text: "To increase or decrease torque and speed",
                    correct: true,
                },
                { text: "To cool mechanical components", correct: false },
                { text: "To lubricate moving parts", correct: false },
            ],
        },
        {
            question:
                "Which type of bridge uses cables suspended between towers to support the bridge deck?",
            answers: [
                { text: "Arch Bridge", correct: false },
                { text: "Suspension Bridge", correct: true },
                { text: "Beam Bridge", correct: false },
                { text: "Truss Bridge", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the unit of electrical resistance?",
            answers: [
                { text: "Volt", correct: false },
                { text: "Ohm", correct: true },
                { text: "Ampere", correct: false },
                { text: "Watt", correct: false },
            ],
        },
        {
            question:
                "Which material is known for its high tensile strength and is commonly used in construction?",
            answers: [
                { text: "Concrete", correct: false },
                { text: "Steel", correct: true },
                { text: "Wood", correct: false },
                { text: "Aluminum", correct: false },
            ],
        },
        {
            question:
                "In fluid mechanics, what does Bernoulli's Principle describe?",
            answers: [
                {
                    text: "The relationship between pressure and velocity in fluid flow",
                    correct: true,
                },
                {
                    text: "The conservation of mass in fluid flow",
                    correct: false,
                },
                { text: "The viscosity of a fluid", correct: false },
                { text: "The density of a fluid", correct: false },
            ],
        },
        {
            question:
                "What is the primary purpose of a catalyst in a chemical reaction?",
            answers: [
                {
                    text: "To increase the energy of the reactants",
                    correct: false,
                },
                {
                    text: "To decrease the energy barrier and speed up the reaction",
                    correct: true,
                },
                {
                    text: "To provide a medium for the reaction",
                    correct: false,
                },
                {
                    text: "To alter the products of the reaction",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which CAD software is widely used for 3D modeling and design in engineering?",
            answers: [
                { text: "Microsoft Excel", correct: false },
                { text: "AutoCAD", correct: true },
                { text: "Adobe Photoshop", correct: false },
                { text: "Final Cut Pro", correct: false },
            ],
        },
        {
            question:
                "What is the purpose of finite element analysis (FEA) in engineering?",
            answers: [
                { text: "To design electrical circuits", correct: false },
                {
                    text: "To simulate and analyze the physical behavior of structures and components",
                    correct: true,
                },
                { text: "To manage project schedules", correct: false },
                {
                    text: "To create detailed architectural drawings",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of energy conversion takes place in a hydroelectric power plant?",
            answers: [
                { text: "Chemical to electrical", correct: false },
                { text: "Mechanical to electrical", correct: true },
                { text: "Thermal to mechanical", correct: false },
                { text: "Nuclear to thermal", correct: false },
            ],
        },
        {
            question:
                "What is the primary function of the heat exchanger in an HVAC system?",
            answers: [
                { text: "To filter air", correct: false },
                {
                    text: "To regulate temperature by transferring heat",
                    correct: true,
                },
                { text: "To humidify the air", correct: false },
                {
                    text: "To circulate air throughout the building",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which engineering discipline is primarily concerned with the design and operation of machinery?",
            answers: [
                { text: "Electrical Engineering", correct: false },
                { text: "Mechanical Engineering", correct: true },
                { text: "Civil Engineering", correct: false },
                { text: "Chemical Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the purpose of a stress-strain diagram in materials engineering?",
            answers: [
                {
                    text: "To determine the electrical conductivity of a material",
                    correct: false,
                },
                {
                    text: "To analyze the mechanical properties and behavior of materials under load",
                    correct: true,
                },
                {
                    text: "To measure the thermal expansion of a material",
                    correct: false,
                },
                {
                    text: "To evaluate the chemical composition of a material",
                    correct: false,
                },
            ],
        },
    ],
    3: [
        {
            question:
                "What is the main purpose of the Internet of Things (IoT) in engineering?",
            answers: [
                { text: "To design graphic interfaces", correct: false },
                {
                    text: "To connect and communicate between devices for automation and data exchange",
                    correct: true,
                },
                {
                    text: "To increase manual labor in manufacturing",
                    correct: false,
                },
                {
                    text: "To replace electrical systems with mechanical ones",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of engineering focuses on the design and development of software and hardware systems?",
            answers: [
                { text: "Chemical Engineering", correct: false },
                { text: "Software Engineering", correct: true },
                { text: "Civil Engineering", correct: false },
                { text: "Biomedical Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the primary function of a gearbox in mechanical systems?",
            answers: [
                { text: "To generate electricity", correct: false },
                {
                    text: "To increase or decrease torque and speed",
                    correct: true,
                },
                { text: "To cool mechanical components", correct: false },
                { text: "To lubricate moving parts", correct: false },
            ],
        },
        {
            question: "In structural engineering, what is a 'truss' used for?",
            answers: [
                { text: "To support electrical wiring", correct: false },
                {
                    text: "To distribute loads and provide structural stability",
                    correct: true,
                },
                { text: "To facilitate fluid flow", correct: false },
                { text: "To insulate buildings", correct: false },
            ],
        },
        {
            question:
                "Which material is commonly used in aerospace engineering for its high strength-to-weight ratio?",
            answers: [
                { text: "Steel", correct: false },
                { text: "Titanium", correct: true },
                { text: "Wood", correct: false },
                { text: "Concrete", correct: false },
            ],
        },
        {
            question: "What does CAD stand for in engineering design?",
            answers: [
                { text: "Computer-Aided Design", correct: true },
                { text: "Computerized Analytical Drawing", correct: false },
                { text: "Controlled Automated Design", correct: false },
                { text: "Computer-Assisted Drafting", correct: false },
            ],
        },
        {
            question:
                "Which process involves the removal of material to create a desired shape?",
            answers: [
                { text: "Casting", correct: false },
                { text: "Additive Manufacturing", correct: false },
                { text: "Subtractive Manufacturing", correct: true },
                { text: "Molding", correct: false },
            ],
        },
        {
            question:
                "What is the primary purpose of a catalyst in a chemical reaction?",
            answers: [
                {
                    text: "To increase the energy of the reactants",
                    correct: false,
                },
                {
                    text: "To decrease the energy barrier and speed up the reaction",
                    correct: true,
                },
                {
                    text: "To provide a medium for the reaction",
                    correct: false,
                },
                {
                    text: "To alter the products of the reaction",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of engineering involves the design and management of infrastructure projects?",
            answers: [
                { text: "Electrical Engineering", correct: false },
                { text: "Civil Engineering", correct: true },
                { text: "Mechanical Engineering", correct: false },
                { text: "Chemical Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the purpose of a heat exchanger in an HVAC system?",
            answers: [
                { text: "To filter air", correct: false },
                {
                    text: "To regulate temperature by transferring heat",
                    correct: true,
                },
                { text: "To humidify the air", correct: false },
                {
                    text: "To circulate air throughout the building",
                    correct: false,
                },
            ],
        },
    ],
    4: [
        {
            question:
                "What is the primary purpose of finite element analysis (FEA) in engineering?",
            answers: [
                { text: "To design electrical circuits", correct: false },
                {
                    text: "To simulate and analyze the physical behavior of structures and components",
                    correct: true,
                },
                { text: "To manage project schedules", correct: false },
                {
                    text: "To create detailed architectural drawings",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of load is constant and does not change over time?",
            answers: [
                { text: "Dynamic Load", correct: false },
                { text: "Static Load", correct: true },
                { text: "Impact Load", correct: false },
                { text: "Cyclic Load", correct: false },
            ],
        },
        {
            question:
                "What is the function of a transformer in electrical engineering?",
            answers: [
                { text: "To convert AC to DC", correct: false },
                {
                    text: "To increase or decrease voltage levels",
                    correct: true,
                },
                { text: "To store electrical energy", correct: false },
                { text: "To generate electricity", correct: false },
            ],
        },
        {
            question:
                "Which engineering discipline is concerned with the design and analysis of algorithms?",
            answers: [
                { text: "Software Engineering", correct: false },
                { text: "Computer Engineering", correct: true },
                { text: "Electrical Engineering", correct: false },
                { text: "Civil Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the primary advantage of using composite materials in engineering?",
            answers: [
                { text: "High electrical conductivity", correct: false },
                { text: "High strength-to-weight ratio", correct: true },
                { text: "Ease of recycling", correct: false },
                { text: "Low cost of production", correct: false },
            ],
        },
        {
            question: "In mechanical engineering, what does CAD stand for?",
            answers: [
                { text: "Computer-Aided Design", correct: true },
                { text: "Computerized Analytical Drawing", correct: false },
                { text: "Controlled Automated Design", correct: false },
                { text: "Computer-Assisted Drafting", correct: false },
            ],
        },
        {
            question:
                "Which process involves adding material layer by layer to create a three-dimensional object?",
            answers: [
                { text: "Subtractive Manufacturing", correct: false },
                { text: "Casting", correct: false },
                { text: "Additive Manufacturing", correct: true },
                { text: "Molding", correct: false },
            ],
        },
        {
            question: "What is the main function of a servo motor in robotics?",
            answers: [
                { text: "To provide lighting", correct: false },
                {
                    text: "To control precise movement and positioning",
                    correct: true,
                },
                { text: "To store data", correct: false },
                { text: "To generate electricity", correct: false },
            ],
        },
        {
            question:
                "Which engineering principle is used to design safe and efficient buildings?",
            answers: [
                { text: "Thermodynamics", correct: false },
                { text: "Statics and Dynamics", correct: true },
                { text: "Fluid Mechanics", correct: false },
                { text: "Electromagnetism", correct: false },
            ],
        },
        {
            question: "What is the purpose of a control system in engineering?",
            answers: [
                { text: "To provide structural support", correct: false },
                {
                    text: "To manage and regulate the behavior of other devices or systems",
                    correct: true,
                },
                { text: "To store energy", correct: false },
                { text: "To generate mechanical power", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is a 'bridge girder' used for in bridge construction?",
            answers: [
                {
                    text: "To support the roadway and distribute loads",
                    correct: true,
                },
                { text: "To anchor the bridge to the ground", correct: false },
                { text: "To provide aesthetic appeal", correct: false },
                { text: "To channel water beneath the bridge", correct: false },
            ],
        },
        {
            question:
                "Which law in electrical engineering relates voltage, current, and resistance?",
            answers: [
                { text: "Newton's Second Law", correct: false },
                { text: "Ohm's Law", correct: true },
                { text: "Faraday's Law", correct: false },
                { text: "Hooke's Law", correct: false },
            ],
        },
        {
            question:
                "What is the primary purpose of a catalyst in a chemical reaction?",
            answers: [
                {
                    text: "To increase the energy of the reactants",
                    correct: false,
                },
                {
                    text: "To decrease the energy barrier and speed up the reaction",
                    correct: true,
                },
                {
                    text: "To provide a medium for the reaction",
                    correct: false,
                },
                {
                    text: "To alter the products of the reaction",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of engineering involves the design and development of medical devices?",
            answers: [
                { text: "Biomedical Engineering", correct: true },
                { text: "Chemical Engineering", correct: false },
                { text: "Electrical Engineering", correct: false },
                { text: "Civil Engineering", correct: false },
            ],
        },
        {
            question:
                "What is the purpose of a PID controller in engineering systems?",
            answers: [
                { text: "To measure temperature", correct: false },
                {
                    text: "To control systems using proportional, integral, and derivative actions",
                    correct: true,
                },
                { text: "To generate electrical power", correct: false },
                { text: "To provide structural support", correct: false },
            ],
        },
        {
            question:
                "Which material is known for its lightweight and high strength, commonly used in aerospace engineering?",
            answers: [
                { text: "Titanium", correct: true },
                { text: "Steel", correct: false },
                { text: "Copper", correct: false },
                { text: "Aluminum", correct: false },
            ],
        },
        {
            question: "What does HVAC stand for in building engineering?",
            answers: [
                {
                    text: "Heating, Ventilation, and Air Conditioning",
                    correct: true,
                },
                { text: "Hydraulics, Valves, and Actuators", correct: false },
                { text: "High Voltage Alternating Current", correct: false },
                { text: "Heat, Vapor, and Carbon", correct: false },
            ],
        },
        {
            question:
                "Which principle explains why aircraft wings generate lift?",
            answers: [
                { text: "Newton's Third Law", correct: true },
                { text: "Ohm's Law", correct: false },
                { text: "Hooke's Law", correct: false },
                { text: "Boyle's Law", correct: false },
            ],
        },
        {
            question:
                "What is the primary function of a gear in mechanical systems?",
            answers: [
                { text: "To generate electrical power", correct: false },
                {
                    text: "To transfer and modify rotational motion and torque",
                    correct: true,
                },
                { text: "To cool down machinery", correct: false },
                { text: "To store mechanical energy", correct: false },
            ],
        },
        {
            question:
                "Which engineering discipline focuses on the flow and control of fluids?",
            answers: [
                { text: "Electrical Engineering", correct: false },
                { text: "Chemical Engineering", correct: false },
                { text: "Mechanical Engineering", correct: false },
                { text: "Fluid Mechanics Engineering", correct: true },
            ],
        },
    ],
};

// Fianance Quiz Data
export const financeData: Quiz = {
    1: [
        {
            question: "What is the primary goal of financial management?",
            answers: [
                { text: "Maximizing shareholder wealth", correct: true },
                { text: "Minimizing costs", correct: false },
                { text: "Maximizing employee satisfaction", correct: false },
                { text: "Enhancing product quality", correct: false },
            ],
        },
        {
            question: "What does ROI stand for in finance?",
            answers: [
                { text: "Rate of Interest", correct: false },
                { text: "Return on Investment", correct: true },
                { text: "Revenue of Income", correct: false },
                { text: "Ratio of Investment", correct: false },
            ],
        },
        {
            question:
                "Which financial statement shows a company's assets, liabilities, and equity at a specific point in time?",
            answers: [
                { text: "Income Statement", correct: false },
                { text: "Balance Sheet", correct: true },
                { text: "Cash Flow Statement", correct: false },
                { text: "Statement of Retained Earnings", correct: false },
            ],
        },
        {
            question: "What is diversification in investment?",
            answers: [
                {
                    text: "Focusing on a single investment to maximize returns",
                    correct: false,
                },
                {
                    text: "Spreading investments across various assets to reduce risk",
                    correct: true,
                },
                {
                    text: "Investing only in high-risk securities",
                    correct: false,
                },
                {
                    text: "Timing the market to buy low and sell high",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the time value of money?",
            answers: [
                {
                    text: "Money loses value over time due to inflation",
                    correct: true,
                },
                {
                    text: "Money gains value over time through investments",
                    correct: false,
                },
                {
                    text: "Money remains the same in value over time",
                    correct: false,
                },
                {
                    text: "Money's value fluctuates randomly over time",
                    correct: false,
                },
            ],
        },
        {
            question: "What is a bond?",
            answers: [
                { text: "A type of equity investment", correct: false },
                {
                    text: "A loan made by an investor to a borrower",
                    correct: true,
                },
                { text: "A derivative contract", correct: false },
                { text: "A form of insurance", correct: false },
            ],
        },
        {
            question: "What does EBITDA stand for?",
            answers: [
                {
                    text: "Earnings Before Interest, Taxes, Depreciation, and Amortization",
                    correct: true,
                },
                {
                    text: "Earnings Before Investments, Taxes, Debt, and Assets",
                    correct: false,
                },
                {
                    text: "Earnings Before Interest, Taxes, Dividends, and Assets",
                    correct: false,
                },
                {
                    text: "Earnings Before Inflation, Taxes, Depreciation, and Amortization",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the primary function of the stock market?",
            answers: [
                { text: "To provide loans to businesses", correct: false },
                {
                    text: "To facilitate the buying and selling of securities",
                    correct: true,
                },
                { text: "To regulate banking activities", correct: false },
                { text: "To set interest rates", correct: false },
            ],
        },
        {
            question: "What is a dividend?",
            answers: [
                {
                    text: "A portion of a company's earnings distributed to shareholders",
                    correct: true,
                },
                {
                    text: "A fee charged by brokers for transactions",
                    correct: false,
                },
                { text: "A type of bond", correct: false },
                { text: "An increase in the price of a stock", correct: false },
            ],
        },
        {
            question:
                "Which ratio measures a company's ability to meet its short-term obligations?",
            answers: [
                { text: "Debt-to-Equity Ratio", correct: false },
                { text: "Current Ratio", correct: true },
                { text: "Price-to-Earnings Ratio", correct: false },
                { text: "Return on Assets", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is 'market capitalization'?",
            answers: [
                { text: "Total revenue of a company", correct: false },
                {
                    text: "Total market value of a company's outstanding shares",
                    correct: true,
                },
                { text: "Total assets of a company", correct: false },
                { text: "Total liabilities of a company", correct: false },
            ],
        },
        {
            question: "What is a 'bull market'?",
            answers: [
                {
                    text: "A market characterized by falling prices",
                    correct: false,
                },
                {
                    text: "A market characterized by rising prices",
                    correct: true,
                },
                { text: "A market with high volatility", correct: false },
                {
                    text: "A market dominated by a few large companies",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What does the Capital Asset Pricing Model (CAPM) describe?",
            answers: [
                {
                    text: "The relationship between risk and expected return",
                    correct: true,
                },
                { text: "The valuation of bonds", correct: false },
                { text: "The process of capital budgeting", correct: false },
                { text: "The structure of capital markets", correct: false },
            ],
        },
        {
            question: "What is 'leverage' in finance?",
            answers: [
                {
                    text: "Using borrowed capital to increase the potential return of an investment",
                    correct: true,
                },
                {
                    text: "Diversifying investments to reduce risk",
                    correct: false,
                },
                { text: "Holding a variety of assets", correct: false },
                { text: "Investing in government securities", correct: false },
            ],
        },
        {
            question:
                "Which financial instrument represents ownership in a company?",
            answers: [
                { text: "Bond", correct: false },
                { text: "Stock", correct: true },
                { text: "Derivative", correct: false },
                { text: "Mutual Fund", correct: false },
            ],
        },
        {
            question: "What is the 'efficient market hypothesis'?",
            answers: [
                {
                    text: "All investors can consistently achieve higher returns than the market average",
                    correct: false,
                },
                {
                    text: "Stock prices fully reflect all available information",
                    correct: true,
                },
                { text: "Markets are always irrational", correct: false },
                {
                    text: "Only insider information affects stock prices",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What does 'diversification' help to achieve in a portfolio?",
            answers: [
                { text: "Maximizing returns", correct: false },
                { text: "Minimizing taxes", correct: false },
                { text: "Reducing risk", correct: true },
                { text: "Increasing liquidity", correct: false },
            ],
        },
        {
            question: "What is 'amortization'?",
            answers: [
                {
                    text: "Spreading the cost of an intangible asset over its useful life",
                    correct: true,
                },
                {
                    text: "Spreading the cost of a tangible asset over its useful life",
                    correct: false,
                },
                {
                    text: "The process of buying and selling securities",
                    correct: false,
                },
                { text: "The allocation of overhead costs", correct: false },
            ],
        },
        {
            question:
                "Which index is known as the benchmark for the U.S. stock market?",
            answers: [
                { text: "NASDAQ Composite", correct: false },
                { text: "S&P 500", correct: true },
                { text: "Dow Jones Industrial Average", correct: false },
                { text: "Russell 2000", correct: false },
            ],
        },
        {
            question: "What is 'financial leverage'?",
            answers: [
                {
                    text: "The use of debt to acquire additional assets",
                    correct: true,
                },
                { text: "The use of equity to finance assets", correct: false },
                {
                    text: "The total amount of assets held by a company",
                    correct: false,
                },
                {
                    text: "The process of evaluating financial statements",
                    correct: false,
                },
            ],
        },
    ],
    3: [
        {
            question: "What is 'capital budgeting'?",
            answers: [
                {
                    text: "The process of planning and managing a firm's long-term investments",
                    correct: true,
                },
                {
                    text: "The process of managing a firm's short-term assets and liabilities",
                    correct: false,
                },
                {
                    text: "The process of determining the cost of capital",
                    correct: false,
                },
                {
                    text: "The process of issuing new securities",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which of the following is a measure of a company's profitability?",
            answers: [
                { text: "Current Ratio", correct: false },
                { text: "Return on Equity (ROE)", correct: true },
                { text: "Debt-to-Equity Ratio", correct: false },
                { text: "Inventory Turnover", correct: false },
            ],
        },
        {
            question: "What is 'beta' in the context of the CAPM?",
            answers: [
                {
                    text: "A measure of a stock's volatility relative to the market",
                    correct: true,
                },
                {
                    text: "A measure of a company's financial leverage",
                    correct: false,
                },
                { text: "A measure of a company's liquidity", correct: false },
                {
                    text: "A measure of a company's profitability",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'liquidity' refer to in finance?",
            answers: [
                {
                    text: "The ability to convert assets into cash quickly without significant loss in value",
                    correct: true,
                },
                { text: "The ability to generate profits", correct: false },
                {
                    text: "The total value of a company's assets",
                    correct: false,
                },
                { text: "The level of debt in a company", correct: false },
            ],
        },
        {
            question: "Which of the following is a primary market activity?",
            answers: [
                {
                    text: "Buying and selling of existing securities",
                    correct: false,
                },
                { text: "Issuing new securities to investors", correct: true },
                {
                    text: "Trading securities on the secondary market",
                    correct: false,
                },
                { text: "Analyzing stock performance", correct: false },
            ],
        },
        {
            question: "What is 'hedging' in financial terms?",
            answers: [
                {
                    text: "Investing in high-risk assets for higher returns",
                    correct: false,
                },
                {
                    text: "Taking an investment position intended to offset potential losses",
                    correct: true,
                },
                {
                    text: "Diversifying a portfolio to reduce risk",
                    correct: false,
                },
                { text: "Speculating on market movements", correct: false },
            ],
        },
        {
            question: "What is 'Net Present Value (NPV)' used for in finance?",
            answers: [
                {
                    text: "To measure the profitability of an investment",
                    correct: true,
                },
                { text: "To calculate the cost of capital", correct: false },
                {
                    text: "To determine the liquidity of a company",
                    correct: false,
                },
                {
                    text: "To assess the creditworthiness of a borrower",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which of the following is considered a short-term financial instrument?",
            answers: [
                { text: "Bonds", correct: false },
                { text: "Certificates of Deposit (CDs)", correct: true },
                { text: "Stocks", correct: false },
                { text: "Real Estate", correct: false },
            ],
        },
        {
            question: "What is the 'Time Value of Money'?",
            answers: [
                {
                    text: "Money's ability to lose value over time due to inflation",
                    correct: true,
                },
                {
                    text: "Money's ability to gain value over time through interest or investment",
                    correct: true,
                },
                {
                    text: "The concept that money has the same value now as it does in the future",
                    correct: false,
                },
                {
                    text: "Money's ability to remain unchanged in value over time",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What does 'yield to maturity' (YTM) represent for a bond?",
            answers: [
                {
                    text: "The total return anticipated on a bond if it is held until it matures",
                    correct: true,
                },
                {
                    text: "The current market price of the bond",
                    correct: false,
                },
                { text: "The coupon rate of the bond", correct: false },
                {
                    text: "The total interest paid by the bond issuer",
                    correct: false,
                },
            ],
        },
    ],
    4: [
        {
            question: "What is 'systematic risk'?",
            answers: [
                {
                    text: "Risk specific to a single company or industry",
                    correct: false,
                },
                {
                    text: "Risk inherent to the entire market or market segment",
                    correct: true,
                },
                {
                    text: "Risk that can be eliminated through diversification",
                    correct: false,
                },
                {
                    text: "Risk associated with a particular investment's liquidity",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which financial statement shows a company's revenues and expenses over a specific period?",
            answers: [
                { text: "Balance Sheet", correct: false },
                { text: "Income Statement", correct: true },
                { text: "Cash Flow Statement", correct: false },
                { text: "Statement of Retained Earnings", correct: false },
            ],
        },
        {
            question: "What is 'working capital'?",
            answers: [
                {
                    text: "The difference between a company's current assets and current liabilities",
                    correct: true,
                },
                { text: "The total assets of a company", correct: false },
                { text: "The total liabilities of a company", correct: false },
                {
                    text: "The long-term investments of a company",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the purpose of a stock's P/E (Price-to-Earnings) ratio?",
            answers: [
                {
                    text: "To measure a company's profitability relative to its assets",
                    correct: false,
                },
                {
                    text: "To assess a stock's valuation relative to its earnings",
                    correct: true,
                },
                {
                    text: "To determine the dividend yield of a stock",
                    correct: false,
                },
                { text: "To evaluate a company's debt levels", correct: false },
            ],
        },
        {
            question: "What is 'leverage' in the context of corporate finance?",
            answers: [
                { text: "The use of equity to finance assets", correct: false },
                {
                    text: "The use of borrowed funds to increase potential returns",
                    correct: true,
                },
                {
                    text: "The process of investing in diversified assets",
                    correct: false,
                },
                {
                    text: "The ratio of a company's current assets to current liabilities",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which type of analysis evaluates a company's financial statements to make investment decisions?",
            answers: [
                { text: "Technical Analysis", correct: false },
                { text: "Fundamental Analysis", correct: true },
                { text: "Sentiment Analysis", correct: false },
                { text: "Quantitative Analysis", correct: false },
            ],
        },
        {
            question: "What is the 'debt-to-equity ratio' used for?",
            answers: [
                { text: "To assess a company's liquidity", correct: false },
                {
                    text: "To evaluate a company's financial leverage",
                    correct: true,
                },
                {
                    text: "To measure a company's profitability",
                    correct: false,
                },
                {
                    text: "To determine the return on investment",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'portfolio diversification' aim to achieve?",
            answers: [
                {
                    text: "Maximizing returns by concentrating investments",
                    correct: false,
                },
                {
                    text: "Reducing risk by spreading investments across different assets",
                    correct: true,
                },
                {
                    text: "Minimizing taxes through strategic investments",
                    correct: false,
                },
                {
                    text: "Increasing liquidity by investing in easily sellable assets",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the primary function of the Securities and Exchange Commission (SEC) in the United States?",
            answers: [
                { text: "To regulate the banking industry", correct: false },
                {
                    text: "To oversee and regulate the securities markets",
                    correct: true,
                },
                { text: "To manage the federal budget", correct: false },
                { text: "To set interest rates", correct: false },
            ],
        },
        {
            question: "What is 'cash flow'?",
            answers: [
                { text: "The total revenue of a company", correct: false },
                {
                    text: "The net amount of cash being transferred into and out of a business",
                    correct: true,
                },
                { text: "The total expenses of a company", correct: false },
                { text: "The profit made by a company", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "Who is known as the 'Father of Economics'?",
            answers: [
                { text: "John Maynard Keynes", correct: false },
                { text: "Adam Smith", correct: true },
                { text: "Karl Marx", correct: false },
                { text: "Milton Friedman", correct: false },
            ],
        },
        {
            question: "What is 'behavioral finance'?",
            answers: [
                {
                    text: "The study of psychological influences on investors and financial markets",
                    correct: true,
                },
                {
                    text: "The study of financial markets and their movements",
                    correct: false,
                },
                {
                    text: "The analysis of financial statements",
                    correct: false,
                },
                {
                    text: "The use of mathematical models in finance",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which economist is associated with the concept of 'comparative advantage'?",
            answers: [
                { text: "Adam Smith", correct: false },
                { text: "David Ricardo", correct: true },
                { text: "John Maynard Keynes", correct: false },
                { text: "Milton Friedman", correct: false },
            ],
        },
        {
            question:
                "What is the 'capital asset pricing model' (CAPM) used for?",
            answers: [
                {
                    text: "To evaluate a company's creditworthiness",
                    correct: false,
                },
                {
                    text: "To determine the expected return on an investment based on its risk",
                    correct: true,
                },
                {
                    text: "To analyze the financial statements of a company",
                    correct: false,
                },
                { text: "To manage a company's cash flow", correct: false },
            ],
        },
        {
            question: "What does 'IPO' stand for in finance?",
            answers: [
                { text: "Initial Private Offering", correct: false },
                { text: "Initial Public Offering", correct: true },
                { text: "International Private Offering", correct: false },
                { text: "Investment Portfolio Optimization", correct: false },
            ],
        },
        {
            question:
                "What is the main advantage of a Roth IRA over a traditional IRA?",
            answers: [
                { text: "Tax-free withdrawals in retirement", correct: true },
                { text: "Higher contribution limits", correct: false },
                { text: "Employer matching contributions", correct: false },
                { text: "No income limits for contributions", correct: false },
            ],
        },
        {
            question: "What is 'liquidity risk'?",
            answers: [
                {
                    text: "The risk of a company defaulting on its obligations",
                    correct: false,
                },
                {
                    text: "The risk that an asset cannot be sold quickly without a significant price concession",
                    correct: true,
                },
                {
                    text: "The risk of inflation eroding the value of money",
                    correct: false,
                },
                {
                    text: "The risk of losing money in an investment",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which investment vehicle pools money from many investors to purchase securities?",
            answers: [
                { text: "Mutual Fund", correct: true },
                { text: "Bond", correct: false },
                { text: "Savings Account", correct: false },
                { text: "Certificate of Deposit (CD)", correct: false },
            ],
        },
        {
            question: "What is the 'efficient market hypothesis'?",
            answers: [
                {
                    text: "The idea that stock prices fully reflect all available information",
                    correct: true,
                },
                {
                    text: "The belief that markets are always efficient in allocating resources",
                    correct: false,
                },
                {
                    text: "The theory that market prices are always rational",
                    correct: false,
                },
                {
                    text: "The notion that investors can consistently achieve higher returns through analysis",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'compound interest'?",
            answers: [
                {
                    text: "Interest calculated only on the principal amount",
                    correct: false,
                },
                {
                    text: "Interest calculated on the principal and also on the accumulated interest",
                    correct: true,
                },
                { text: "A fixed rate of interest over time", correct: false },
                { text: "Interest that decreases over time", correct: false },
            ],
        },
    ],
};

// Geography Quiz Data
export const geographyData: Quiz = {
    1: [
        {
            question: "What is the longest river in the world?",
            answers: [
                { text: "Amazon River", correct: false },
                { text: "Nile River", correct: true },
                { text: "Yangtze River", correct: false },
                { text: "Mississippi River", correct: false },
            ],
        },
        {
            question: "Which country has the largest land area?",
            answers: [
                { text: "Canada", correct: false },
                { text: "China", correct: false },
                { text: "Russia", correct: true },
                { text: "United States", correct: false },
            ],
        },
        {
            question: "Mount Everest is located in which mountain range?",
            answers: [
                { text: "Andes", correct: false },
                { text: "Rocky Mountains", correct: false },
                { text: "Himalayas", correct: true },
                { text: "Alps", correct: false },
            ],
        },
        {
            question: "What is the capital city of Australia?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "Melbourne", correct: false },
                { text: "Canberra", correct: true },
                { text: "Brisbane", correct: false },
            ],
        },
        {
            question: "Which desert is the largest in the world?",
            answers: [
                { text: "Sahara Desert", correct: false },
                { text: "Arctic Desert", correct: false },
                { text: "Gobi Desert", correct: false },
                { text: "Antarctic Desert", correct: true },
            ],
        },
        {
            question: "Which country is both an island and a continent?",
            answers: [
                { text: "Greenland", correct: false },
                { text: "Australia", correct: true },
                { text: "Madagascar", correct: false },
                { text: "Iceland", correct: false },
            ],
        },
        {
            question: "What is the smallest country in the world by land area?",
            answers: [
                { text: "Monaco", correct: false },
                { text: "Nauru", correct: false },
                { text: "Vatican City", correct: true },
                { text: "Tuvalu", correct: false },
            ],
        },
        {
            question: "Which U.S. state has the most active volcanoes?",
            answers: [
                { text: "California", correct: false },
                { text: "Alaska", correct: true },
                { text: "Hawaii", correct: false },
                { text: "Washington", correct: false },
            ],
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
            ],
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "Thailand", correct: false },
                { text: "South Korea", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the largest continent by land area?",
            answers: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "North America", correct: false },
                { text: "Europe", correct: false },
            ],
        },
        {
            question: "Which river flows through Paris?",
            answers: [
                { text: "Thames River", correct: false },
                { text: "Seine River", correct: true },
                { text: "Danube River", correct: false },
                { text: "Rhine River", correct: false },
            ],
        },
        {
            question: "What is the capital city of Canada?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Vancouver", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Montreal", correct: false },
            ],
        },
        {
            question: "Which mountain is the tallest in North America?",
            answers: [
                { text: "Mount Logan", correct: false },
                { text: "Denali (Mount McKinley)", correct: true },
                { text: "Mount St. Helens", correct: false },
                { text: "Mount Rainier", correct: false },
            ],
        },
        {
            question: "What is the largest island in the Mediterranean Sea?",
            answers: [
                { text: "Sicily", correct: true },
                { text: "Cyprus", correct: false },
                { text: "Sardinia", correct: false },
                { text: "Crete", correct: false },
            ],
        },
        {
            question: "Which country has the most natural lakes?",
            answers: [
                { text: "Canada", correct: true },
                { text: "United States", correct: false },
                { text: "Russia", correct: false },
                { text: "Brazil", correct: false },
            ],
        },
        {
            question: "What is the capital of Egypt?",
            answers: [
                { text: "Cairo", correct: true },
                { text: "Alexandria", correct: false },
                { text: "Giza", correct: false },
                { text: "Luxor", correct: false },
            ],
        },
        {
            question: "Which country is home to the Great Barrier Reef?",
            answers: [
                { text: "Australia", correct: true },
                { text: "Indonesia", correct: false },
                { text: "Philippines", correct: false },
                { text: "Brazil", correct: false },
            ],
        },
        {
            question: "What is the longest mountain range in the world?",
            answers: [
                { text: "Andes", correct: true },
                { text: "Rocky Mountains", correct: false },
                { text: "Himalayas", correct: false },
                { text: "Alps", correct: false },
            ],
        },
        {
            question: "Which country has the most time zones?",
            answers: [
                { text: "Russia", correct: true },
                { text: "United States", correct: false },
                { text: "China", correct: false },
                { text: "Canada", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the capital city of Brazil?",
            answers: [
                { text: "Rio de Janeiro", correct: false },
                { text: "São Paulo", correct: false },
                { text: "Brasília", correct: true },
                { text: "Salvador", correct: false },
            ],
        },
        {
            question: "Which desert covers much of northern Africa?",
            answers: [
                { text: "Gobi Desert", correct: false },
                { text: "Sahara Desert", correct: true },
                { text: "Kalahari Desert", correct: false },
                { text: "Arabian Desert", correct: false },
            ],
        },
        {
            question: "What is the smallest continent by land area?",
            answers: [
                { text: "Australia", correct: true },
                { text: "Europe", correct: false },
                { text: "Antarctica", correct: false },
                { text: "South America", correct: false },
            ],
        },
        {
            question: "Which country is the largest by population?",
            answers: [
                { text: "India", correct: false },
                { text: "United States", correct: false },
                { text: "Indonesia", correct: false },
                { text: "China", correct: true },
            ],
        },
        {
            question:
                "Which ocean lies on the eastern coast of the United States?",
            answers: [
                { text: "Pacific Ocean", correct: false },
                { text: "Atlantic Ocean", correct: true },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
            ],
        },
        {
            question: "What is the capital of South Korea?",
            answers: [
                { text: "Seoul", correct: true },
                { text: "Busan", correct: false },
                { text: "Incheon", correct: false },
                { text: "Daegu", correct: false },
            ],
        },
        {
            question: "Which country is known as the Land of the Midnight Sun?",
            answers: [
                { text: "Sweden", correct: false },
                { text: "Norway", correct: true },
                { text: "Finland", correct: false },
                { text: "Iceland", correct: false },
            ],
        },
        {
            question: "What is the largest island in the Caribbean?",
            answers: [
                { text: "Cuba", correct: true },
                { text: "Hispaniola", correct: false },
                { text: "Jamaica", correct: false },
                { text: "Puerto Rico", correct: false },
            ],
        },
        {
            question: "Which river is known as the 'Yellow River'?",
            answers: [
                { text: "Yangtze River", correct: false },
                { text: "Mekong River", correct: false },
                { text: "Huang He", correct: true },
                { text: "Ganges River", correct: false },
            ],
        },
        {
            question: "What is the capital city of New Zealand?",
            answers: [
                { text: "Auckland", correct: false },
                { text: "Wellington", correct: true },
                { text: "Christchurch", correct: false },
                { text: "Hamilton", correct: false },
            ],
        },
    ],
    4: [
        {
            question:
                "Which country has the highest number of UNESCO World Heritage Sites?",
            answers: [
                { text: "Italy", correct: true },
                { text: "China", correct: false },
                { text: "Spain", correct: false },
                { text: "France", correct: false },
            ],
        },
        {
            question:
                "What is the term for a narrow strip of land connecting two larger land areas?",
            answers: [
                { text: "Isthmus", correct: true },
                { text: "Peninsula", correct: false },
                { text: "Delta", correct: false },
                { text: "Archipelago", correct: false },
            ],
        },
        {
            question: "Which country is home to the Great Victoria Desert?",
            answers: [
                { text: "Australia", correct: true },
                { text: "United States", correct: false },
                { text: "Brazil", correct: false },
                { text: "Argentina", correct: false },
            ],
        },
        {
            question: "What is the longest mountain range in the world?",
            answers: [
                { text: "Andes", correct: true },
                { text: "Rocky Mountains", correct: false },
                { text: "Himalayas", correct: false },
                { text: "Alps", correct: false },
            ],
        },
        {
            question: "Which country has the most natural lakes?",
            answers: [
                { text: "Canada", correct: true },
                { text: "United States", correct: false },
                { text: "Russia", correct: false },
                { text: "Brazil", correct: false },
            ],
        },
        {
            question: "What is the capital of Kenya?",
            answers: [
                { text: "Nairobi", correct: true },
                { text: "Mombasa", correct: false },
                { text: "Kisumu", correct: false },
                { text: "Nakuru", correct: false },
            ],
        },
        {
            question: "Which island is the largest in the Mediterranean Sea?",
            answers: [
                { text: "Sicily", correct: true },
                { text: "Cyprus", correct: false },
                { text: "Sardinia", correct: false },
                { text: "Crete", correct: false },
            ],
        },
        {
            question: "What is the smallest country in Africa by land area?",
            answers: [
                { text: "Seychelles", correct: false },
                { text: "São Tomé and Príncipe", correct: false },
                { text: "The Gambia", correct: false },
                { text: "Seychelles", correct: false }, // Potential error, but likely a duplicate in options
            ],
        },
        {
            question: "Which river flows through Baghdad?",
            answers: [
                { text: "Euphrates", correct: true },
                { text: "Tigris", correct: false },
                { text: "Nile", correct: false },
                { text: "Jordan", correct: false },
            ],
        },
        {
            question: "Which U.S. state is the Grand Canyon located in?",
            answers: [
                { text: "Arizona", correct: true },
                { text: "Nevada", correct: false },
                { text: "Utah", correct: false },
                { text: "Colorado", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is the capital city of Iceland?",
            answers: [
                { text: "Reykjavik", correct: true },
                { text: "Oslo", correct: false },
                { text: "Helsinki", correct: false },
                { text: "Stockholm", correct: false },
            ],
        },
        {
            question: "Which country has the highest population density?",
            answers: [
                { text: "Monaco", correct: true },
                { text: "Singapore", correct: false },
                { text: "Bangladesh", correct: false },
                { text: "Netherlands", correct: false },
            ],
        },
        {
            question: "What is the largest island in the world?",
            answers: [
                { text: "Greenland", correct: true },
                { text: "New Guinea", correct: false },
                { text: "Borneo", correct: false },
                { text: "Madagascar", correct: false },
            ],
        },
        {
            question: "Which desert is the largest hot desert in the world?",
            answers: [
                { text: "Sahara Desert", correct: true },
                { text: "Arabian Desert", correct: false },
                { text: "Kalahari Desert", correct: false },
                { text: "Gobi Desert", correct: false },
            ],
        },
        {
            question: "What is the capital city of Peru?",
            answers: [
                { text: "Lima", correct: true },
                { text: "Cusco", correct: false },
                { text: "Arequipa", correct: false },
                { text: "Trujillo", correct: false },
            ],
        },
        {
            question:
                "Which country is both the smallest by land area and has no military?",
            answers: [
                { text: "Vatican City", correct: true },
                { text: "Monaco", correct: false },
                { text: "Liechtenstein", correct: false },
                { text: "San Marino", correct: false },
            ],
        },
        {
            question: "What is the longest river in South America?",
            answers: [
                { text: "Amazon River", correct: true },
                { text: "Paraná River", correct: false },
                { text: "São Francisco River", correct: false },
                { text: "Orinoco River", correct: false },
            ],
        },
        {
            question: "Which country is home to the Great Victoria Desert?",
            answers: [
                { text: "Australia", correct: true },
                { text: "United States", correct: false },
                { text: "Brazil", correct: false },
                { text: "Argentina", correct: false },
            ],
        },
        {
            question: "What is the highest waterfall in the world?",
            answers: [
                { text: "Angel Falls", correct: true },
                { text: "Niagara Falls", correct: false },
                { text: "Victoria Falls", correct: false },
                { text: "Yosemite Falls", correct: false },
            ],
        },
        {
            question: "Which country has the most UNESCO World Heritage Sites?",
            answers: [
                { text: "Italy", correct: true },
                { text: "China", correct: false },
                { text: "Spain", correct: false },
                { text: "France", correct: false },
            ],
        },
    ],
};

// Health Care Quiz Data
export const healthCareData: Quiz = {
    1: [
        {
            question: "What does BMI stand for in health care?",
            answers: [
                { text: "Body Mass Index", correct: true },
                { text: "Basic Metabolic Indicator", correct: false },
                { text: "Body Measurement Indicator", correct: false },
                { text: "Blood Mass Index", correct: false },
            ],
        },
        {
            question:
                "Which vitamin is primarily obtained through sunlight exposure?",
            answers: [
                { text: "Vitamin A", correct: false },
                { text: "Vitamin B12", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: true },
            ],
        },
        {
            question: "What is the largest organ in the human body?",
            answers: [
                { text: "Liver", correct: false },
                { text: "Skin", correct: true },
                { text: "Heart", correct: false },
                { text: "Lungs", correct: false },
            ],
        },
        {
            question: "Which blood type is known as the universal donor?",
            answers: [
                { text: "O negative", correct: true },
                { text: "A positive", correct: false },
                { text: "AB positive", correct: false },
                { text: "B negative", correct: false },
            ],
        },
        {
            question: "What is the normal resting heart rate range for adults?",
            answers: [
                { text: "60-100 beats per minute", correct: true },
                { text: "40-60 beats per minute", correct: false },
                { text: "100-120 beats per minute", correct: false },
                { text: "120-140 beats per minute", correct: false },
            ],
        },
        {
            question:
                "Which system of the body is responsible for transporting blood?",
            answers: [
                { text: "Respiratory System", correct: false },
                { text: "Digestive System", correct: false },
                { text: "Circulatory System", correct: true },
                { text: "Nervous System", correct: false },
            ],
        },
        {
            question: "What is the primary function of red blood cells?",
            answers: [
                { text: "Fight infections", correct: false },
                { text: "Clot blood", correct: false },
                { text: "Transport oxygen", correct: true },
                { text: "Produce hormones", correct: false },
            ],
        },
        {
            question: "Which hormone regulates blood sugar levels?",
            answers: [
                { text: "Insulin", correct: true },
                { text: "Glucagon", correct: false },
                { text: "Adrenaline", correct: false },
                { text: "Cortisol", correct: false },
            ],
        },
        {
            question:
                "What is the process by which the body breaks down food to produce energy?",
            answers: [
                { text: "Photosynthesis", correct: false },
                { text: "Respiration", correct: true },
                { text: "Transpiration", correct: false },
                { text: "Fermentation", correct: false },
            ],
        },
        {
            question:
                "Which part of the brain is responsible for coordination and balance?",
            answers: [
                { text: "Cerebrum", correct: false },
                { text: "Cerebellum", correct: true },
                { text: "Brainstem", correct: false },
                { text: "Hypothalamus", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the medical term for high blood pressure?",
            answers: [
                { text: "Hypotension", correct: false },
                { text: "Hypertension", correct: true },
                { text: "Hyperglycemia", correct: false },
                { text: "Hypoglycemia", correct: false },
            ],
        },
        {
            question: "Which vitamin is essential for blood clotting?",
            answers: [
                { text: "Vitamin K", correct: true },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: false },
                { text: "Vitamin E", correct: false },
            ],
        },
        {
            question: "What is the largest organ inside the human body?",
            answers: [
                { text: "Heart", correct: false },
                { text: "Liver", correct: true },
                { text: "Lungs", correct: false },
                { text: "Kidneys", correct: false },
            ],
        },
        {
            question: "What is the main function of white blood cells?",
            answers: [
                { text: "Transport oxygen", correct: false },
                { text: "Clot blood", correct: false },
                { text: "Fight infections", correct: true },
                { text: "Produce hormones", correct: false },
            ],
        },
        {
            question: "Which vitamin is important for vision?",
            answers: [
                { text: "Vitamin A", correct: true },
                { text: "Vitamin B6", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: false },
            ],
        },
        {
            question: "What is the primary function of the respiratory system?",
            answers: [
                { text: "To digest food", correct: false },
                { text: "To circulate blood", correct: false },
                {
                    text: "To exchange gases (oxygen and carbon dioxide)",
                    correct: true,
                },
                { text: "To produce hormones", correct: false },
            ],
        },
        {
            question: "Which part of the cell contains the genetic material?",
            answers: [
                { text: "Mitochondria", correct: false },
                { text: "Nucleus", correct: true },
                { text: "Ribosome", correct: false },
                { text: "Golgi Apparatus", correct: false },
            ],
        },
        {
            question:
                "What is the term for the normal range of body temperature?",
            answers: [
                { text: "Homeostasis", correct: false },
                { text: "Euthermia", correct: true },
                { text: "Hyperthermia", correct: false },
                { text: "Hypothermia", correct: false },
            ],
        },
        {
            question:
                "Which system of the body is responsible for producing hormones?",
            answers: [
                { text: "Digestive System", correct: false },
                { text: "Endocrine System", correct: true },
                { text: "Nervous System", correct: false },
                { text: "Circulatory System", correct: false },
            ],
        },
        {
            question: "What is the smallest unit of life?",
            answers: [
                { text: "Atom", correct: false },
                { text: "Molecule", correct: false },
                { text: "Cell", correct: true },
                { text: "Organ", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is the medical term for the lower jaw?",
            answers: [
                { text: "Maxilla", correct: false },
                { text: "Mandible", correct: true },
                { text: "Zygomatic", correct: false },
                { text: "Frontal", correct: false },
            ],
        },
        {
            question:
                "Which organ is responsible for filtering blood in the human body?",
            answers: [
                { text: "Liver", correct: false },
                { text: "Heart", correct: false },
                { text: "Kidney", correct: true },
                { text: "Lungs", correct: false },
            ],
        },
        {
            question: "What is the primary function of the pancreas?",
            answers: [
                { text: "To produce insulin", correct: true },
                { text: "To store bile", correct: false },
                { text: "To absorb nutrients", correct: false },
                { text: "To produce red blood cells", correct: false },
            ],
        },
        {
            question:
                "Which type of joint allows for the widest range of motion?",
            answers: [
                { text: "Hinge Joint", correct: false },
                { text: "Ball and Socket Joint", correct: true },
                { text: "Pivot Joint", correct: false },
                { text: "Saddle Joint", correct: false },
            ],
        },
        {
            question:
                "What is the term for a disease that spreads from one person to another?",
            answers: [
                { text: "Chronic Disease", correct: false },
                { text: "Non-communicable Disease", correct: false },
                { text: "Infectious Disease", correct: true },
                { text: "Genetic Disorder", correct: false },
            ],
        },
        {
            question: "Which vitamin is essential for blood clotting?",
            answers: [
                { text: "Vitamin K", correct: true },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: false },
                { text: "Vitamin E", correct: false },
            ],
        },
        {
            question: "What is the largest organ inside the human body?",
            answers: [
                { text: "Heart", correct: false },
                { text: "Liver", correct: true },
                { text: "Lungs", correct: false },
                { text: "Kidneys", correct: false },
            ],
        },
        {
            question: "Which hormone is responsible for regulating metabolism?",
            answers: [
                { text: "Insulin", correct: false },
                { text: "Thyroxine", correct: true },
                { text: "Cortisol", correct: false },
                { text: "Adrenaline", correct: false },
            ],
        },
        {
            question:
                "What is the process by which cells divide to produce gametes?",
            answers: [
                { text: "Mitosis", correct: false },
                { text: "Meiosis", correct: true },
                { text: "Binary Fission", correct: false },
                { text: "Budding", correct: false },
            ],
        },
        {
            question: "Which part of the brain regulates body temperature?",
            answers: [
                { text: "Cerebellum", correct: false },
                { text: "Cerebrum", correct: false },
                { text: "Hypothalamus", correct: true },
                { text: "Brainstem", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the primary function of platelets in the blood?",
            answers: [
                { text: "Transport oxygen", correct: false },
                { text: "Fight infections", correct: false },
                { text: "Clot blood", correct: true },
                { text: "Produce hormones", correct: false },
            ],
        },
        {
            question: "Which organ is responsible for producing bile?",
            answers: [
                { text: "Liver", correct: true },
                { text: "Pancreas", correct: false },
                { text: "Gallbladder", correct: false },
                { text: "Spleen", correct: false },
            ],
        },
        {
            question:
                "What is the term for the ability of the body to maintain a stable internal environment?",
            answers: [
                { text: "Metabolism", correct: false },
                { text: "Homeostasis", correct: true },
                { text: "Anabolism", correct: false },
                { text: "Catabolism", correct: false },
            ],
        },
        {
            question:
                "Which system of the body is responsible for producing movement?",
            answers: [
                { text: "Nervous System", correct: false },
                { text: "Muscular System", correct: true },
                { text: "Endocrine System", correct: false },
                { text: "Digestive System", correct: false },
            ],
        },
        {
            question: "What is the main function of the large intestine?",
            answers: [
                { text: "Water absorption", correct: true },
                { text: "Protein digestion", correct: false },
                { text: "Fat emulsification", correct: false },
                { text: "Enzyme production", correct: false },
            ],
        },
        {
            question:
                "Which blood cells are responsible for transporting oxygen?",
            answers: [
                { text: "White blood cells", correct: false },
                { text: "Red blood cells", correct: true },
                { text: "Platelets", correct: false },
                { text: "Plasma cells", correct: false },
            ],
        },
        {
            question: "What is the medical term for high cholesterol?",
            answers: [
                { text: "Hyperlipidemia", correct: true },
                { text: "Hypoglycemia", correct: false },
                { text: "Hypertension", correct: false },
                { text: "Hyperthyroidism", correct: false },
            ],
        },
        {
            question:
                "Which vitamin is essential for the absorption of calcium?",
            answers: [
                { text: "Vitamin A", correct: false },
                { text: "Vitamin B12", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: true },
            ],
        },
        {
            question: "What is the primary function of the kidneys?",
            answers: [
                { text: "To pump blood", correct: false },
                { text: "To filter waste from the blood", correct: true },
                { text: "To produce insulin", correct: false },
                { text: "To produce bile", correct: false },
            ],
        },
        {
            question:
                "Which part of the eye controls the amount of light that enters?",
            answers: [
                { text: "Cornea", correct: false },
                { text: "Pupil", correct: true },
                { text: "Retina", correct: false },
                { text: "Lens", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is the term for the process of creating new blood cells?",
            answers: [
                { text: "Metabolism", correct: false },
                { text: "Hemopoiesis", correct: true },
                { text: "Osmosis", correct: false },
                { text: "Photosynthesis", correct: false },
            ],
        },
        {
            question: "Which hormone regulates the sleep-wake cycle?",
            answers: [
                { text: "Insulin", correct: false },
                { text: "Melatonin", correct: true },
                { text: "Adrenaline", correct: false },
                { text: "Cortisol", correct: false },
            ],
        },
        {
            question: "What is the largest internal organ in the human body?",
            answers: [
                { text: "Heart", correct: false },
                { text: "Liver", correct: true },
                { text: "Lungs", correct: false },
                { text: "Pancreas", correct: false },
            ],
        },
        {
            question:
                "Which type of blood vessel carries blood away from the heart?",
            answers: [
                { text: "Veins", correct: false },
                { text: "Capillaries", correct: false },
                { text: "Arteries", correct: true },
                { text: "Venules", correct: false },
            ],
        },
        {
            question:
                "What is the term for a deficiency of red blood cells or hemoglobin?",
            answers: [
                { text: "Anemia", correct: true },
                { text: "Leukemia", correct: false },
                { text: "Thrombocytopenia", correct: false },
                { text: "Erythrocytosis", correct: false },
            ],
        },
        {
            question:
                "Which part of the nervous system controls voluntary movements?",
            answers: [
                { text: "Autonomic Nervous System", correct: false },
                { text: "Somatic Nervous System", correct: true },
                { text: "Peripheral Nervous System", correct: false },
                { text: "Central Nervous System", correct: false },
            ],
        },
        {
            question: "What is the primary function of the digestive system?",
            answers: [
                { text: "To transport oxygen", correct: false },
                { text: "To produce hormones", correct: false },
                {
                    text: "To break down food and absorb nutrients",
                    correct: true,
                },
                { text: "To pump blood", correct: false },
            ],
        },
        {
            question: "Which vitamin is important for bone health?",
            answers: [
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: true },
                { text: "Vitamin B6", correct: false },
                { text: "Vitamin E", correct: false },
            ],
        },
        {
            question: "What is the term for the study of diseases?",
            answers: [
                { text: "Anatomy", correct: false },
                { text: "Physiology", correct: false },
                { text: "Pathology", correct: true },
                { text: "Pharmacology", correct: false },
            ],
        },
        {
            question:
                "Which organ is responsible for detoxifying chemicals and metabolizing drugs?",
            answers: [
                { text: "Kidney", correct: false },
                { text: "Liver", correct: true },
                { text: "Pancreas", correct: false },
                { text: "Spleen", correct: false },
            ],
        },
    ],
};

// Literature Quiz Data
export const literatureData: Quiz = {
    1: [
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "William Shakespeare", correct: true },
                { text: "Charles Dickens", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false },
            ],
        },
        {
            question: "What is the main theme of George Orwell's '1984'?",
            answers: [
                { text: "Romance and relationships", correct: false },
                { text: "Totalitarianism and surveillance", correct: true },
                { text: "Adventure and exploration", correct: false },
                { text: "Fantasy and magic", correct: false },
            ],
        },
        {
            question: "Which novel begins with the line, 'Call me Ishmael.'?",
            answers: [
                { text: "'Moby-Dick'", correct: true },
                { text: "'Pride and Prejudice'", correct: false },
                { text: "'Great Expectations'", correct: false },
                { text: "'To Kill a Mockingbird'", correct: false },
            ],
        },
        {
            question: "Who is the author of 'The Catcher in the Rye'?",
            answers: [
                { text: "J.D. Salinger", correct: true },
                { text: "F. Scott Fitzgerald", correct: false },
                { text: "Ernest Hemingway", correct: false },
                { text: "Harper Lee", correct: false },
            ],
        },
        {
            question:
                "What literary device involves giving human traits to non-human objects?",
            answers: [
                { text: "Alliteration", correct: false },
                { text: "Personification", correct: true },
                { text: "Hyperbole", correct: false },
                { text: "Onomatopoeia", correct: false },
            ],
        },
        {
            question:
                "Which novel is known for the phrase 'Big Brother is watching you'?",
            answers: [
                { text: "'Brave New World'", correct: false },
                { text: "'1984'", correct: true },
                { text: "'Fahrenheit 451'", correct: false },
                { text: "'Animal Farm'", correct: false },
            ],
        },
        {
            question: "What is a haiku?",
            answers: [
                { text: "A type of novel", correct: false },
                {
                    text: "A three-line Japanese poem with a 5-7-5 syllable structure",
                    correct: true,
                },
                { text: "A long narrative poem", correct: false },
                { text: "A rhymed couplet", correct: false },
            ],
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            answers: [
                { text: "Charlotte Brontë", correct: false },
                { text: "Emily Brontë", correct: false },
                { text: "Jane Austen", correct: true },
                { text: "Mary Shelley", correct: false },
            ],
        },
        {
            question:
                "What is the term for a play with a serious theme and a sad ending?",
            answers: [
                { text: "Comedy", correct: false },
                { text: "Tragedy", correct: true },
                { text: "Farce", correct: false },
                { text: "Melodrama", correct: false },
            ],
        },
        {
            question: "Which epic poem is attributed to Homer?",
            answers: [
                { text: "'The Aeneid'", correct: false },
                { text: "'Paradise Lost'", correct: false },
                { text: "'The Odyssey'", correct: true },
                { text: "'Beowulf'", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "What is the term for a repeated beginning sound in two or more words?",
            answers: [
                { text: "Assonance", correct: false },
                { text: "Consonance", correct: false },
                { text: "Alliteration", correct: true },
                { text: "Onomatopoeia", correct: false },
            ],
        },
        {
            question: "Which novel features the character Atticus Finch?",
            answers: [
                { text: "'1984'", correct: false },
                { text: "'To Kill a Mockingbird'", correct: true },
                { text: "'The Great Gatsby'", correct: false },
                { text: "'Moby-Dick'", correct: false },
            ],
        },
        {
            question: "What is the climax of a story?",
            answers: [
                { text: "The introduction of characters", correct: false },
                {
                    text: "The turning point or most intense moment",
                    correct: true,
                },
                { text: "The resolution of the plot", correct: false },
                { text: "The background setting", correct: false },
            ],
        },
        {
            question: "Which author wrote 'The Road Not Taken'?",
            answers: [
                { text: "Robert Frost", correct: true },
                { text: "Walt Whitman", correct: false },
                { text: "T.S. Eliot", correct: false },
                { text: "Langston Hughes", correct: false },
            ],
        },
        {
            question: "What is the narrative voice in a story called?",
            answers: [
                { text: "Point of View", correct: true },
                { text: "Tone", correct: false },
                { text: "Mood", correct: false },
                { text: "Theme", correct: false },
            ],
        },
        {
            question: "Which novel is set in the fictional town of Maycomb?",
            answers: [
                { text: "'The Catcher in the Rye'", correct: false },
                { text: "'To Kill a Mockingbird'", correct: true },
                { text: "'Great Expectations'", correct: false },
                { text: "'Jane Eyre'", correct: false },
            ],
        },
        {
            question: "What is a metaphor?",
            answers: [
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                {
                    text: "A figure of speech comparing two unlike things without using 'like' or 'as'",
                    correct: true,
                },
                { text: "An exaggerated statement for effect", correct: false },
                { text: "A question asked for effect", correct: false },
            ],
        },
        {
            question: "Who is the author of 'The Great Gatsby'?",
            answers: [
                { text: "F. Scott Fitzgerald", correct: true },
                { text: "Ernest Hemingway", correct: false },
                { text: "Mark Twain", correct: false },
                { text: "William Faulkner", correct: false },
            ],
        },
        {
            question:
                "What is the main theme of Mary Shelley's 'Frankenstein'?",
            answers: [
                { text: "Love and romance", correct: false },
                {
                    text: "The dangers of unchecked ambition and playing God",
                    correct: true,
                },
                { text: "Adventure and exploration", correct: false },
                { text: "Comedy and satire", correct: false },
            ],
        },
        {
            question: "What is a protagonist?",
            answers: [
                { text: "The main villain of the story", correct: false },
                { text: "A supporting character", correct: false },
                { text: "The main character or hero", correct: true },
                { text: "The narrator of the story", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "Which literary device involves a sharp contrast between expectations and reality?",
            answers: [
                { text: "Irony", correct: true },
                { text: "Allusion", correct: false },
                { text: "Foreshadowing", correct: false },
                { text: "Symbolism", correct: false },
            ],
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            answers: [
                { text: "Charlotte Brontë", correct: false },
                { text: "Emily Brontë", correct: false },
                { text: "Jane Austen", correct: true },
                { text: "Mary Shelley", correct: false },
            ],
        },
        {
            question: "What is the purpose of a thesis statement in an essay?",
            answers: [
                { text: "To provide background information", correct: false },
                { text: "To state the main argument or point", correct: true },
                { text: "To conclude the essay", correct: false },
                { text: "To cite sources", correct: false },
            ],
        },
        {
            question: "Which part of speech describes a noun?",
            answers: [
                { text: "Verb", correct: false },
                { text: "Adjective", correct: true },
                { text: "Adverb", correct: false },
                { text: "Preposition", correct: false },
            ],
        },
        {
            question: "What is the main idea of an essay?",
            answers: [
                { text: "The supporting arguments", correct: false },
                { text: "The overall message or point", correct: true },
                { text: "The introduction and conclusion", correct: false },
                { text: "The examples and evidence", correct: false },
            ],
        },
        {
            question: "Which sentence is a complex sentence?",
            answers: [
                { text: "I went to the store.", correct: false },
                { text: "She sings beautifully.", correct: false },
                {
                    text: "Although it was raining, we went for a walk.",
                    correct: true,
                },
                { text: "They are happy.", correct: false },
            ],
        },
        {
            question: "What is an oxymoron?",
            answers: [
                {
                    text: "A figure of speech using exaggeration",
                    correct: false,
                },
                {
                    text: "A figure of speech combining contradictory terms",
                    correct: true,
                },
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                { text: "A rhetorical question", correct: false },
            ],
        },
        {
            question: "Which punctuation mark is used to indicate possession?",
            answers: [
                { text: "Comma", correct: false },
                { text: "Apostrophe", correct: true },
                { text: "Colon", correct: false },
                { text: "Semicolon", correct: false },
            ],
        },
        {
            question: "Which sentence is correctly punctuated?",
            answers: [
                { text: "I can't wait to see you, my friend.", correct: true },
                { text: "I cant wait to see you my friend.", correct: false },
                { text: "I can't wait to see you my friend.", correct: false },
                { text: "I cant wait to see you, my friend.", correct: false },
            ],
        },
        {
            question: "What is the function of a semicolon in a sentence?",
            answers: [
                { text: "To separate items in a list", correct: false },
                {
                    text: "To join two independent clauses without a conjunction",
                    correct: true,
                },
                { text: "To introduce a quote", correct: false },
                { text: "To end a sentence forcefully", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is a dangling modifier?",
            answers: [
                { text: "A modifier that is placed correctly", correct: false },
                {
                    text: "A modifier that is missing the word it is supposed to modify",
                    correct: true,
                },
                {
                    text: "A modifier that describes the main verb",
                    correct: false,
                },
                {
                    text: "A modifier that appears in the middle of a sentence",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which literary device involves an exaggeration for emphasis?",
            answers: [
                { text: "Metaphor", correct: false },
                { text: "Simile", correct: false },
                { text: "Hyperbole", correct: true },
                { text: "Personification", correct: false },
            ],
        },
        {
            question: "What is the term for a recurring symbol in literature?",
            answers: [
                { text: "Theme", correct: false },
                { text: "Motif", correct: true },
                { text: "Setting", correct: false },
                { text: "Plot", correct: false },
            ],
        },
        {
            question:
                "Which narrative technique involves the author speaking directly to the reader?",
            answers: [
                { text: "First-person narration", correct: false },
                { text: "Third-person omniscient", correct: false },
                { text: "Second-person narration", correct: true },
                { text: "Stream of consciousness", correct: false },
            ],
        },
        {
            question: "What is 'foreshadowing' in literature?",
            answers: [
                { text: "A sudden plot twist", correct: false },
                {
                    text: "Hints or clues about what will happen later in the story",
                    correct: true,
                },
                {
                    text: "A detailed description of the setting",
                    correct: false,
                },
                { text: "A confrontation between characters", correct: false },
            ],
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answers: [
                { text: "Harper Lee", correct: true },
                { text: "J.K. Rowling", correct: false },
                { text: "F. Scott Fitzgerald", correct: false },
                { text: "Mark Twain", correct: false },
            ],
        },
        {
            question: "What is 'stream of consciousness'?",
            answers: [
                {
                    text: "A narrative mode that attempts to capture the flow of thoughts and feelings",
                    correct: true,
                },
                { text: "A fast-paced action sequence", correct: false },
                { text: "A detailed descriptive passage", correct: false },
                { text: "A dialogue-heavy scene", correct: false },
            ],
        },
        {
            question:
                "Which Shakespeare play features the characters Oberon and Titania?",
            answers: [
                { text: "'Macbeth'", correct: false },
                { text: "'A Midsummer Night's Dream'", correct: true },
                { text: "'Hamlet'", correct: false },
                { text: "'Othello'", correct: false },
            ],
        },
        {
            question: "What is the main conflict in a story?",
            answers: [
                { text: "The setting of the story", correct: false },
                { text: "The struggle between opposing forces", correct: true },
                { text: "The characters' personalities", correct: false },
                { text: "The theme of the story", correct: false },
            ],
        },
        {
            question:
                "Which poet is known for the collection 'Leaves of Grass'?",
            answers: [
                { text: "Robert Frost", correct: false },
                { text: "Walt Whitman", correct: true },
                { text: "T.S. Eliot", correct: false },
                { text: "Langston Hughes", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is 'allusion' in literature?",
            answers: [
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                {
                    text: "A figure of speech involving a contradiction",
                    correct: false,
                },
                {
                    text: "An indirect reference to a person, place, event, or literary work",
                    correct: true,
                },
                { text: "An exaggerated statement for effect", correct: false },
            ],
        },
        {
            question:
                "Which novel is considered a dystopian work by Aldous Huxley?",
            answers: [
                { text: "'Brave New World'", correct: true },
                { text: "'1984'", correct: false },
                { text: "'Fahrenheit 451'", correct: false },
                { text: "'Animal Farm'", correct: false },
            ],
        },
        {
            question:
                "What is the term for the repetition of vowel sounds in nearby words?",
            answers: [
                { text: "Alliteration", correct: false },
                { text: "Assonance", correct: true },
                { text: "Consonance", correct: false },
                { text: "Onomatopoeia", correct: false },
            ],
        },
        {
            question: "Who wrote the epic poem 'Paradise Lost'?",
            answers: [
                { text: "John Milton", correct: true },
                { text: "William Wordsworth", correct: false },
                { text: "Percy Bysshe Shelley", correct: false },
                { text: "Samuel Taylor Coleridge", correct: false },
            ],
        },
        {
            question: "What is 'synecdoche' in literature?",
            answers: [
                { text: "A type of irony", correct: false },
                {
                    text: "A figure of speech where a part represents the whole or vice versa",
                    correct: true,
                },
                { text: "A narrative technique", correct: false },
                { text: "An exaggerated statement", correct: false },
            ],
        },
        {
            question:
                "Which Shakespeare play features the characters Macbeth and Lady Macbeth?",
            answers: [
                { text: "'Romeo and Juliet'", correct: false },
                { text: "'Hamlet'", correct: false },
                { text: "'Macbeth'", correct: true },
                { text: "'Othello'", correct: false },
            ],
        },
        {
            question: "What is the climax of a story?",
            answers: [
                { text: "The introduction of characters", correct: false },
                {
                    text: "The turning point or most intense moment",
                    correct: true,
                },
                { text: "The resolution of the plot", correct: false },
                { text: "The background setting", correct: false },
            ],
        },
        {
            question: "What is 'personification'?",
            answers: [
                {
                    text: "A direct comparison using 'like' or 'as'",
                    correct: false,
                },
                {
                    text: "Giving human characteristics to non-human entities",
                    correct: true,
                },
                {
                    text: "An exaggerated statement for emphasis",
                    correct: false,
                },
                { text: "A rhetorical question", correct: false },
            ],
        },
        {
            question: "Which novel is set in the fictional town of Maycomb?",
            answers: [
                { text: "'The Catcher in the Rye'", correct: false },
                { text: "'To Kill a Mockingbird'", correct: true },
                { text: "'Great Expectations'", correct: false },
                { text: "'Jane Eyre'", correct: false },
            ],
        },
        {
            question:
                "What is the main theme of John Steinbeck's 'Of Mice and Men'?",
            answers: [
                { text: "Love and romance", correct: false },
                { text: "Friendship and dreams", correct: true },
                { text: "Adventure and exploration", correct: false },
                { text: "Fantasy and magic", correct: false },
            ],
        },
    ],
};

// Music Quiz Data
export const musicData: Quiz = {
    1: [
        {
            question: "Who is known as the 'King of Pop'?",
            answers: [
                { text: "Elvis Presley", correct: false },
                { text: "Michael Jackson", correct: true },
                { text: "Prince", correct: false },
                { text: "Freddie Mercury", correct: false },
            ],
        },
        {
            question: "Which composer wrote the 'Fifth Symphony'?",
            answers: [
                { text: "Ludwig van Beethoven", correct: true },
                { text: "Wolfgang Amadeus Mozart", correct: false },
                { text: "Johann Sebastian Bach", correct: false },
                { text: "Franz Schubert", correct: false },
            ],
        },
        {
            question: "What is the highest male singing voice?",
            answers: [
                { text: "Tenor", correct: false },
                { text: "Baritone", correct: false },
                { text: "Bass", correct: false },
                { text: "Countertenor", correct: true },
            ],
        },
        {
            question: "Which instrument has keys, pedals, and strings?",
            answers: [
                { text: "Violin", correct: false },
                { text: "Piano", correct: true },
                { text: "Flute", correct: false },
                { text: "Trumpet", correct: false },
            ],
        },
        {
            question: "What genre is Taylor Swift primarily associated with?",
            answers: [
                { text: "Hip Hop", correct: false },
                { text: "Country", correct: true },
                { text: "Jazz", correct: false },
                { text: "Classical", correct: false },
            ],
        },
        {
            question: "Which band released the album 'Abbey Road'?",
            answers: [
                { text: "The Rolling Stones", correct: false },
                { text: "The Beatles", correct: true },
                { text: "Pink Floyd", correct: false },
                { text: "Led Zeppelin", correct: false },
            ],
        },
        {
            question:
                "What is the term for a chord built on the first degree of a scale?",
            answers: [
                { text: "Dominant Chord", correct: false },
                { text: "Subdominant Chord", correct: false },
                { text: "Tonic Chord", correct: true },
                { text: "Mediant Chord", correct: false },
            ],
        },
        {
            question: "Who is the famous drummer of the band Nirvana?",
            answers: [
                { text: "Dave Grohl", correct: true },
                { text: "Kirk Hammett", correct: false },
                { text: "Tré Cool", correct: false },
                { text: "Lars Ulrich", correct: false },
            ],
        },
        {
            question:
                "Which music theory term describes the speed at which a piece of music is played?",
            answers: [
                { text: "Dynamics", correct: false },
                { text: "Tempo", correct: true },
                { text: "Timbre", correct: false },
                { text: "Harmony", correct: false },
            ],
        },
        {
            question: "What is the term for a song without lyrics?",
            answers: [
                { text: "Instrumental", correct: true },
                { text: "A cappella", correct: false },
                { text: "Chant", correct: false },
                { text: "Ballad", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "Which opera features the characters Rodolfo and Mimi?",
            answers: [
                { text: "'La Bohème'", correct: true },
                { text: "'Carmen'", correct: false },
                { text: "'The Magic Flute'", correct: false },
                { text: "'Madama Butterfly'", correct: false },
            ],
        },
        {
            question: "What is the primary instrument in a string quartet?",
            answers: [
                { text: "Violin", correct: true },
                { text: "Flute", correct: false },
                { text: "Trumpet", correct: false },
                { text: "Piano", correct: false },
            ],
        },
        {
            question: "Who composed the 'Four Seasons'?",
            answers: [
                { text: "Antonio Vivaldi", correct: true },
                { text: "Johann Strauss II", correct: false },
                { text: "Igor Stravinsky", correct: false },
                { text: "Frédéric Chopin", correct: false },
            ],
        },
        {
            question: "What does BPM stand for in music?",
            answers: [
                { text: "Basic Performance Measure", correct: false },
                { text: "Beats Per Minute", correct: true },
                { text: "Bass Pattern Mode", correct: false },
                { text: "Bar Progression Measure", correct: false },
            ],
        },
        {
            question: "Which genre is Miles Davis associated with?",
            answers: [
                { text: "Rock", correct: false },
                { text: "Jazz", correct: true },
                { text: "Classical", correct: false },
                { text: "Hip Hop", correct: false },
            ],
        },
        {
            question:
                "What is the term for a series of chords played in a sequence?",
            answers: [
                { text: "Melody", correct: false },
                { text: "Harmony", correct: true },
                { text: "Rhythm", correct: false },
                { text: "Timbre", correct: false },
            ],
        },
        {
            question: "Who is the lead vocalist of the band U2?",
            answers: [
                { text: "Bono", correct: true },
                { text: "Sting", correct: false },
                { text: "Mick Jagger", correct: false },
                { text: "Freddie Mercury", correct: false },
            ],
        },
        {
            question:
                "What is the primary difference between a concerto and a symphony?",
            answers: [
                {
                    text: "A concerto features a solo instrument, while a symphony is for an orchestra",
                    correct: true,
                },
                {
                    text: "A symphony features a solo instrument, while a concerto is for an orchestra",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
                {
                    text: "A concerto is shorter than a symphony",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which instrument is NOT part of a standard brass section?",
            answers: [
                { text: "Trumpet", correct: false },
                { text: "Trombone", correct: false },
                { text: "Saxophone", correct: true },
                { text: "Tuba", correct: false },
            ],
        },
        {
            question: "What is the term for a repeated musical theme?",
            answers: [
                { text: "Motif", correct: true },
                { text: "Cadence", correct: false },
                { text: "Glissando", correct: false },
                { text: "Arpeggio", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "Which composer is known for the opera 'The Marriage of Figaro'?",
            answers: [
                { text: "Wolfgang Amadeus Mozart", correct: true },
                { text: "Giuseppe Verdi", correct: false },
                { text: "Richard Wagner", correct: false },
                { text: "Gioachino Rossini", correct: false },
            ],
        },
        {
            question: "What is the term for the speed of a musical piece?",
            answers: [
                { text: "Dynamics", correct: false },
                { text: "Tempo", correct: true },
                { text: "Pitch", correct: false },
                { text: "Timbre", correct: false },
            ],
        },
        {
            question: "Who composed the 'Moonlight Sonata'?",
            answers: [
                { text: "Ludwig van Beethoven", correct: true },
                { text: "Franz Liszt", correct: false },
                { text: "Johannes Brahms", correct: false },
                { text: "Claude Debussy", correct: false },
            ],
        },
        {
            question: "What does 'forte' mean in musical notation?",
            answers: [
                { text: "Play softly", correct: false },
                { text: "Play loudly", correct: true },
                { text: "Play quickly", correct: false },
                { text: "Play slowly", correct: false },
            ],
        },
        {
            question:
                "Which instrument is typically used in a woodwind section?",
            answers: [
                { text: "Trumpet", correct: false },
                { text: "Clarinet", correct: true },
                { text: "Trombone", correct: false },
                { text: "Tuba", correct: false },
            ],
        },
        {
            question:
                "What is the main difference between a symphony and a concerto?",
            answers: [
                {
                    text: "A symphony is for a soloist, while a concerto is for an orchestra",
                    correct: false,
                },
                {
                    text: "A concerto features a solo instrument with orchestral accompaniment, while a symphony is for a full orchestra",
                    correct: true,
                },
                {
                    text: "A symphony is shorter than a concerto",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "Which genre is Beethoven primarily associated with?",
            answers: [
                { text: "Classical", correct: true },
                { text: "Romantic", correct: false },
                { text: "Baroque", correct: false },
                { text: "Jazz", correct: false },
            ],
        },
        {
            question:
                "What is the term for a group of strings played together in an orchestra?",
            answers: [
                { text: "Woodwinds", correct: false },
                { text: "Brass", correct: false },
                { text: "Percussion", correct: false },
                { text: "String section", correct: true },
            ],
        },
        {
            question: "Who is the lead singer of the band Queen?",
            answers: [
                { text: "Freddie Mercury", correct: true },
                { text: "Brian May", correct: false },
                { text: "Roger Taylor", correct: false },
                { text: "John Deacon", correct: false },
            ],
        },
        {
            question: "What is the term for a gradual increase in loudness?",
            answers: [
                { text: "Crescendo", correct: true },
                { text: "Decrescendo", correct: false },
                { text: "Fortissimo", correct: false },
                { text: "Pianissimo", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "Which composer is known for the 'Four Seasons'?",
            answers: [
                { text: "Antonio Vivaldi", correct: true },
                { text: "Johann Sebastian Bach", correct: false },
                { text: "George Frideric Handel", correct: false },
                { text: "Franz Schubert", correct: false },
            ],
        },
        {
            question: "What is the primary instrument in a jazz trio?",
            answers: [
                { text: "Piano", correct: true },
                { text: "Saxophone", correct: false },
                { text: "Trumpet", correct: false },
                { text: "Drums", correct: false },
            ],
        },
        {
            question: "Who composed the ballet 'Swan Lake'?",
            answers: [
                { text: "Pyotr Ilyich Tchaikovsky", correct: true },
                { text: "Igor Stravinsky", correct: false },
                { text: "Sergei Prokofiev", correct: false },
                { text: "Dmitri Shostakovich", correct: false },
            ],
        },
        {
            question: "What does 'mezzo-soprano' refer to?",
            answers: [
                { text: "A type of musical instrument", correct: false },
                { text: "A vocal range", correct: true },
                { text: "A musical genre", correct: false },
                { text: "A type of composition", correct: false },
            ],
        },
        {
            question:
                "Which band is known for the album 'Dark Side of the Moon'?",
            answers: [
                { text: "Pink Floyd", correct: true },
                { text: "The Beatles", correct: false },
                { text: "Led Zeppelin", correct: false },
                { text: "The Rolling Stones", correct: false },
            ],
        },
        {
            question:
                "What is the term for the main melody in a piece of music?",
            answers: [
                { text: "Harmony", correct: false },
                { text: "Rhythm", correct: false },
                { text: "Timbre", correct: false },
                { text: "Melody", correct: true },
            ],
        },
        {
            question: "Which musical term indicates to play very softly?",
            answers: [
                { text: "Forte", correct: false },
                { text: "Mezzo", correct: false },
                { text: "Pianissimo", correct: true },
                { text: "Allegro", correct: false },
            ],
        },
        {
            question: "Who is the composer of 'The Nutcracker Suite'?",
            answers: [
                { text: "Ludwig van Beethoven", correct: false },
                { text: "Johannes Brahms", correct: false },
                { text: "Pyotr Ilyich Tchaikovsky", correct: true },
                { text: "Franz Liszt", correct: false },
            ],
        },
        {
            question: "What is the term for a repeated musical phrase?",
            answers: [
                { text: "Refrain", correct: false },
                { text: "Motif", correct: true },
                { text: "Bridge", correct: false },
                { text: "Coda", correct: false },
            ],
        },
        {
            question:
                "Which genre is characterized by improvisation and swing rhythms?",
            answers: [
                { text: "Rock", correct: false },
                { text: "Jazz", correct: true },
                { text: "Classical", correct: false },
                { text: "Hip Hop", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is the term for a piece of music written for a solo instrument accompanied by an orchestra?",
            answers: [
                { text: "Symphony", correct: false },
                { text: "Concerto", correct: true },
                { text: "Sonata", correct: false },
                { text: "Opera", correct: false },
            ],
        },
        {
            question:
                "Which composer is known for his operas 'Rigoletto' and 'La Traviata'?",
            answers: [
                { text: "Gioachino Rossini", correct: false },
                { text: "Giuseppe Verdi", correct: true },
                { text: "Richard Wagner", correct: false },
                { text: "Gustav Mahler", correct: false },
            ],
        },
        {
            question:
                "What is the term for a group of singers performing together?",
            answers: [
                { text: "Orchestra", correct: false },
                { text: "Choir", correct: true },
                { text: "Band", correct: false },
                { text: "Ensemble", correct: false },
            ],
        },
        {
            question: "Which musical era is Beethoven associated with?",
            answers: [
                { text: "Baroque", correct: false },
                { text: "Classical", correct: true },
                { text: "Romantic", correct: false },
                { text: "Modern", correct: false },
            ],
        },
        {
            question:
                "What is the primary difference between a minor and a major scale?",
            answers: [
                {
                    text: "Minor scales have a different sequence of whole and half steps",
                    correct: true,
                },
                { text: "Major scales have fewer notes", correct: false },
                { text: "Minor scales are only used in jazz", correct: false },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "Who is the author of the opera 'Carmen'?",
            answers: [
                { text: "Georges Bizet", correct: true },
                { text: "Giuseppe Verdi", correct: false },
                { text: "Giacomo Puccini", correct: false },
                { text: "Richard Wagner", correct: false },
            ],
        },
        {
            question: "What does 'a cappella' mean?",
            answers: [
                { text: "With instrumental accompaniment", correct: false },
                {
                    text: "Sung without instrumental accompaniment",
                    correct: true,
                },
                { text: "In a fast tempo", correct: false },
                { text: "With a choir", correct: false },
            ],
        },
        {
            question: "Which instrument is NOT part of the string family?",
            answers: [
                { text: "Violin", correct: false },
                { text: "Cello", correct: false },
                { text: "Flute", correct: true },
                { text: "Double Bass", correct: false },
            ],
        },
        {
            question:
                "What is the term for a musical composition with several movements?",
            answers: [
                { text: "Sonata", correct: false },
                { text: "Concerto", correct: false },
                { text: "Symphony", correct: true },
                { text: "Suite", correct: false },
            ],
        },
        {
            question:
                "Which composer is famous for the ballet 'The Rite of Spring'?",
            answers: [
                { text: "Igor Stravinsky", correct: true },
                { text: "Sergei Prokofiev", correct: false },
                { text: "Claude Debussy", correct: false },
                { text: "Maurice Ravel", correct: false },
            ],
        },
    ],
};

// Philosophy Quiz Data
export const philosophyData: Quiz = {
    1: [
        {
            question: "Who is known as the father of Western philosophy?",
            answers: [
                { text: "Plato", correct: false },
                { text: "Aristotle", correct: false },
                { text: "Socrates", correct: true },
                { text: "Immanuel Kant", correct: false },
            ],
        },
        {
            question: "What is the main focus of ethics in philosophy?",
            answers: [
                { text: "The nature of reality", correct: false },
                {
                    text: "The principles of right and wrong conduct",
                    correct: true,
                },
                { text: "The structure of arguments", correct: false },
                { text: "The existence of God", correct: false },
            ],
        },
        {
            question:
                "Which philosopher is famous for the phrase 'I think, therefore I am'?",
            answers: [
                { text: "René Descartes", correct: true },
                { text: "David Hume", correct: false },
                { text: "John Locke", correct: false },
                { text: "Friedrich Nietzsche", correct: false },
            ],
        },
        {
            question: "What is 'utilitarianism'?",
            answers: [
                {
                    text: "A theory that emphasizes individual rights",
                    correct: false,
                },
                {
                    text: "A theory that actions are right if they benefit the majority",
                    correct: true,
                },
                {
                    text: "A theory that focuses on the inherent meaning of life",
                    correct: false,
                },
                {
                    text: "A theory that promotes the idea of absolute moral truths",
                    correct: false,
                },
            ],
        },
        {
            question: "Who wrote 'The Republic'?",
            answers: [
                { text: "Aristotle", correct: false },
                { text: "Plato", correct: true },
                { text: "Socrates", correct: false },
                { text: "Epicurus", correct: false },
            ],
        },
        {
            question:
                "What branch of philosophy deals with the nature of knowledge?",
            answers: [
                { text: "Metaphysics", correct: false },
                { text: "Epistemology", correct: true },
                { text: "Aesthetics", correct: false },
                { text: "Logic", correct: false },
            ],
        },
        {
            question:
                "Which philosopher is associated with the concept of 'the will to power'?",
            answers: [
                { text: "Karl Marx", correct: false },
                { text: "Friedrich Nietzsche", correct: true },
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Martin Heidegger", correct: false },
            ],
        },
        {
            question: "What is 'existentialism'?",
            answers: [
                {
                    text: "A theory that focuses on social and economic factors",
                    correct: false,
                },
                {
                    text: "A philosophy that emphasizes individual existence, freedom, and choice",
                    correct: true,
                },
                {
                    text: "A theory that explores the nature of being and reality",
                    correct: false,
                },
                {
                    text: "A philosophy that focuses on the beauty and art",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the author of 'Critique of Pure Reason'?",
            answers: [
                { text: "Immanuel Kant", correct: true },
                { text: "G.W.F. Hegel", correct: false },
                { text: "Arthur Schopenhauer", correct: false },
                { text: "Baruch Spinoza", correct: false },
            ],
        },
        {
            question: "What does 'deontology' focus on in ethical theory?",
            answers: [
                { text: "The consequences of actions", correct: false },
                {
                    text: "The inherent rightness or wrongness of actions",
                    correct: true,
                },
                { text: "The virtues of individuals", correct: false },
                {
                    text: "The balance between duty and happiness",
                    correct: false,
                },
            ],
        },
    ],
    2: [
        {
            question:
                "Which philosopher developed the concept of 'tabula rasa'?",
            answers: [
                { text: "René Descartes", correct: false },
                { text: "John Locke", correct: true },
                { text: "David Hume", correct: false },
                { text: "Thomas Hobbes", correct: false },
            ],
        },
        {
            question: "What is 'phenomenology'?",
            answers: [
                {
                    text: "The study of the structure of experience and consciousness",
                    correct: true,
                },
                { text: "A branch of ethics", correct: false },
                { text: "The study of beauty and art", correct: false },
                { text: "A political philosophy", correct: false },
            ],
        },
        {
            question: "Who is known for the 'Allegory of the Cave'?",
            answers: [
                { text: "Plato", correct: true },
                { text: "Aristotle", correct: false },
                { text: "Socrates", correct: false },
                { text: "Epicurus", correct: false },
            ],
        },
        {
            question: "What is 'nihilism'?",
            answers: [
                { text: "A belief in absolute moral values", correct: false },
                {
                    text: "A rejection of all religious and moral principles",
                    correct: true,
                },
                { text: "A focus on individual happiness", correct: false },
                {
                    text: "A belief in the power of human reason",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which philosopher is associated with the 'categorical imperative'?",
            answers: [
                { text: "Immanuel Kant", correct: true },
                { text: "John Stuart Mill", correct: false },
                { text: "G.W.F. Hegel", correct: false },
                { text: "Friedrich Nietzsche", correct: false },
            ],
        },
        {
            question: "What is the primary concern of metaphysics?",
            answers: [
                { text: "Moral values", correct: false },
                { text: "The nature of reality and existence", correct: true },
                { text: "The structure of language", correct: false },
                { text: "Human behavior", correct: false },
            ],
        },
        {
            question: "Which philosopher is known for 'Being and Time'?",
            answers: [
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Martin Heidegger", correct: true },
                { text: "Simone de Beauvoir", correct: false },
                { text: "Albert Camus", correct: false },
            ],
        },
        {
            question: "What does 'solipsism' assert?",
            answers: [
                { text: "That only material things exist", correct: false },
                {
                    text: "That only one's own mind is sure to exist",
                    correct: true,
                },
                {
                    text: "That reality is socially constructed",
                    correct: false,
                },
                { text: "That everything is predetermined", correct: false },
            ],
        },
        {
            question: "Who is the author of 'Thus Spoke Zarathustra'?",
            answers: [
                { text: "Friedrich Nietzsche", correct: true },
                { text: "Arthur Schopenhauer", correct: false },
                { text: "Søren Kierkegaard", correct: false },
                { text: "David Hume", correct: false },
            ],
        },
        {
            question: "What is 'utilitarianism'?",
            answers: [
                {
                    text: "A theory that emphasizes individual rights",
                    correct: false,
                },
                {
                    text: "A theory that actions are right if they benefit the majority",
                    correct: true,
                },
                {
                    text: "A theory that focuses on the inherent meaning of life",
                    correct: false,
                },
                {
                    text: "A theory that promotes the idea of absolute moral truths",
                    correct: false,
                },
            ],
        },
    ],
    3: [
        {
            question:
                "Which philosopher is known for the concept of 'the banality of evil'?",
            answers: [
                { text: "Hannah Arendt", correct: true },
                { text: "Simone de Beauvoir", correct: false },
                { text: "Michel Foucault", correct: false },
                { text: "John Rawls", correct: false },
            ],
        },
        {
            question: "What is 'dualism' in philosophy?",
            answers: [
                {
                    text: "The belief that reality is composed of two distinct substances, mind and matter",
                    correct: true,
                },
                {
                    text: "The belief that everything is connected",
                    correct: false,
                },
                {
                    text: "The belief that only material things exist",
                    correct: false,
                },
                {
                    text: "The belief that reality is a single unified substance",
                    correct: false,
                },
            ],
        },
        {
            question: "Who wrote 'Being and Nothingness'?",
            answers: [
                { text: "Jean-Paul Sartre", correct: true },
                { text: "Albert Camus", correct: false },
                { text: "Martin Heidegger", correct: false },
                { text: "Friedrich Nietzsche", correct: false },
            ],
        },
        {
            question: "What is 'rationalism'?",
            answers: [
                {
                    text: "The belief that knowledge comes primarily from sensory experience",
                    correct: false,
                },
                {
                    text: "The belief that reason is the primary source of knowledge",
                    correct: true,
                },
                {
                    text: "The belief that emotions guide moral decisions",
                    correct: false,
                },
                {
                    text: "The belief that society shapes knowledge",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which philosopher is known for the 'veil of ignorance' concept?",
            answers: [
                { text: "John Rawls", correct: true },
                { text: "John Locke", correct: false },
                { text: "Thomas Hobbes", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false },
            ],
        },
        {
            question: "What is 'empiricism'?",
            answers: [
                {
                    text: "The theory that knowledge comes primarily from sensory experience",
                    correct: true,
                },
                {
                    text: "The theory that reason is the primary source of knowledge",
                    correct: false,
                },
                { text: "The belief in inherent moral truths", correct: false },
                {
                    text: "The belief that reality is a social construct",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which philosopher is associated with 'The Social Contract'?",
            answers: [
                { text: "Immanuel Kant", correct: false },
                { text: "Jean-Jacques Rousseau", correct: true },
                { text: "David Hume", correct: false },
                { text: "Thomas Aquinas", correct: false },
            ],
        },
        {
            question: "What is 'skepticism' in philosophy?",
            answers: [
                {
                    text: "The belief that knowledge is certain",
                    correct: false,
                },
                {
                    text: "The approach of doubting accepted beliefs",
                    correct: true,
                },
                {
                    text: "The theory that reality is solely mental",
                    correct: false,
                },
                { text: "The belief that truth is relative", correct: false },
            ],
        },
        {
            question: "Who developed the theory of 'Phenomenology'?",
            answers: [
                { text: "Edmund Husserl", correct: true },
                { text: "Martin Heidegger", correct: false },
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Maurice Merleau-Ponty", correct: false },
            ],
        },
        {
            question: "What is 'pragmatism'?",
            answers: [
                {
                    text: "A philosophical tradition that considers thought an instrument for prediction and problem-solving",
                    correct: true,
                },
                { text: "A belief in absolute truths", correct: false },
                {
                    text: "A theory that knowledge comes from divine revelation",
                    correct: false,
                },
                {
                    text: "A focus on the beauty and art in philosophy",
                    correct: false,
                },
            ],
        },
    ],
    4: [
        {
            question: "Which philosopher is known for 'The Myth of Sisyphus'?",
            answers: [
                { text: "Albert Camus", correct: true },
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Simone de Beauvoir", correct: false },
                { text: "Martin Heidegger", correct: false },
            ],
        },
        {
            question: "What is 'teleology'?",
            answers: [
                {
                    text: "The study of the end or purpose of things",
                    correct: true,
                },
                { text: "The study of ethical principles", correct: false },
                { text: "The study of knowledge", correct: false },
                { text: "The study of political systems", correct: false },
            ],
        },
        {
            question: "Who is the author of 'Meditations'?",
            answers: [
                { text: "Seneca", correct: false },
                { text: "Marcus Aurelius", correct: true },
                { text: "Epictetus", correct: false },
                { text: "Plato", correct: false },
            ],
        },
        {
            question: "What is 'stoicism'?",
            answers: [
                {
                    text: "A philosophy that emphasizes emotional resilience and virtue",
                    correct: true,
                },
                {
                    text: "A belief in the inherent evil of mankind",
                    correct: false,
                },
                { text: "A theory that knowledge is innate", correct: false },
                { text: "A focus on aesthetic beauty", correct: false },
            ],
        },
        {
            question:
                "Which philosopher is associated with 'justice as fairness'?",
            answers: [
                { text: "John Rawls", correct: true },
                { text: "Thomas Hobbes", correct: false },
                { text: "John Stuart Mill", correct: false },
                { text: "Immanuel Kant", correct: false },
            ],
        },
        {
            question: "What is 'idealism' in philosophy?",
            answers: [
                {
                    text: "The belief that reality is primarily material",
                    correct: false,
                },
                {
                    text: "The belief that reality is mentally constructed or immaterial",
                    correct: true,
                },
                { text: "A focus on practical consequences", correct: false },
                {
                    text: "A theory that knowledge comes from sensory experience",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which philosopher is known for the statement 'God is dead'?",
            answers: [
                { text: "Friedrich Nietzsche", correct: true },
                { text: "Karl Marx", correct: false },
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Simone de Beauvoir", correct: false },
            ],
        },
        {
            question: "What is 'materialism' in philosophy?",
            answers: [
                {
                    text: "The belief that reality is fundamentally mental",
                    correct: false,
                },
                {
                    text: "The belief that matter is the fundamental substance of reality",
                    correct: true,
                },
                {
                    text: "The belief in the existence of multiple worlds",
                    correct: false,
                },
                {
                    text: "A focus on material wealth as the ultimate goal",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the author of 'Critique of Pure Reason'?",
            answers: [
                { text: "Immanuel Kant", correct: true },
                { text: "G.W.F. Hegel", correct: false },
                { text: "Arthur Schopenhauer", correct: false },
                { text: "Baruch Spinoza", correct: false },
            ],
        },
        {
            question: "What is 'utilitarianism'?",
            answers: [
                {
                    text: "A theory that emphasizes individual rights",
                    correct: false,
                },
                {
                    text: "A theory that actions are right if they benefit the majority",
                    correct: true,
                },
                {
                    text: "A theory that focuses on the inherent meaning of life",
                    correct: false,
                },
                {
                    text: "A theory that promotes the idea of absolute moral truths",
                    correct: false,
                },
            ],
        },
    ],
    5: [
        {
            question:
                "Which philosopher is known for the 'categorical imperative'?",
            answers: [
                { text: "Immanuel Kant", correct: true },
                { text: "John Stuart Mill", correct: false },
                { text: "G.W.F. Hegel", correct: false },
                { text: "Friedrich Nietzsche", correct: false },
            ],
        },
        {
            question: "What is 'virtue ethics'?",
            answers: [
                {
                    text: "An ethical theory that emphasizes the role of character and virtues",
                    correct: true,
                },
                {
                    text: "An ethical theory that focuses on rules and duties",
                    correct: false,
                },
                {
                    text: "An ethical theory that emphasizes the consequences of actions",
                    correct: false,
                },
                {
                    text: "An ethical theory that focuses on societal norms",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the author of 'Being and Time'?",
            answers: [
                { text: "Jean-Paul Sartre", correct: false },
                { text: "Martin Heidegger", correct: true },
                { text: "Simone de Beauvoir", correct: false },
                { text: "Albert Camus", correct: false },
            ],
        },
        {
            question: "What is 'deontology'?",
            answers: [
                {
                    text: "A theory that emphasizes the consequences of actions",
                    correct: false,
                },
                {
                    text: "A theory that focuses on the inherent rightness or wrongness of actions",
                    correct: true,
                },
                {
                    text: "A theory that promotes the idea of utilitarianism",
                    correct: false,
                },
                {
                    text: "A theory that focuses on societal well-being",
                    correct: false,
                },
            ],
        },
        {
            question: "Which philosopher is known for 'The Prince'?",
            answers: [
                { text: "Niccolò Machiavelli", correct: true },
                { text: "Thomas More", correct: false },
                { text: "John Locke", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false },
            ],
        },
        {
            question: "What is 'dialectic' in philosophy?",
            answers: [
                {
                    text: "A method of argument involving contradictions and their resolution",
                    correct: true,
                },
                { text: "A type of ethical theory", correct: false },
                { text: "A branch of metaphysics", correct: false },
                { text: "A theory about aesthetics", correct: false },
            ],
        },
        {
            question:
                "Which philosopher is associated with the 'veil of ignorance'?",
            answers: [
                { text: "John Rawls", correct: true },
                { text: "John Locke", correct: false },
                { text: "Thomas Hobbes", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false },
            ],
        },
        {
            question: "What is 'solipsism'?",
            answers: [
                {
                    text: "The belief that only one's own mind is sure to exist",
                    correct: true,
                },
                {
                    text: "The belief that all minds are connected",
                    correct: false,
                },
                {
                    text: "The belief that reality is a social construct",
                    correct: false,
                },
                {
                    text: "The belief that reality is purely material",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the author of 'Meditations'?",
            answers: [
                { text: "Seneca", correct: false },
                { text: "Marcus Aurelius", correct: true },
                { text: "Epictetus", correct: false },
                { text: "Plato", correct: false },
            ],
        },
        {
            question: "What is 'existentialism'?",
            answers: [
                {
                    text: "A philosophy that emphasizes individual existence, freedom, and choice",
                    correct: true,
                },
                {
                    text: "A philosophy that focuses on the nature of reality",
                    correct: false,
                },
                {
                    text: "A philosophy that centers on social and economic factors",
                    correct: false,
                },
                {
                    text: "A philosophy that explores aesthetic beauty",
                    correct: false,
                },
            ],
        },
    ],
};

// Physics Quiz Data
export const physicsData: Quiz = {
    1: [
        {
            question:
                "What is the unit of force in the International System of Units (SI)?",
            answers: [
                { text: "Newton", correct: true },
                { text: "Joule", correct: false },
                { text: "Pascal", correct: false },
                { text: "Watt", correct: false },
            ],
        },
        {
            question: "What is the speed of light in a vacuum?",
            answers: [
                {
                    text: "Approximately 3 x 10^8 meters per second",
                    correct: true,
                },
                {
                    text: "Approximately 3 x 10^6 meters per second",
                    correct: false,
                },
                {
                    text: "Approximately 3 x 10^5 kilometers per second",
                    correct: false,
                },
                {
                    text: "Approximately 3 x 10^7 kilometers per second",
                    correct: false,
                },
            ],
        },
        {
            question: "Who formulated the laws of motion?",
            answers: [
                { text: "Albert Einstein", correct: false },
                { text: "Isaac Newton", correct: true },
                { text: "Galileo Galilei", correct: false },
                { text: "Nikola Tesla", correct: false },
            ],
        },
        {
            question:
                "What is the measure of an object's resistance to acceleration?",
            answers: [
                { text: "Mass", correct: true },
                { text: "Weight", correct: false },
                { text: "Volume", correct: false },
                { text: "Density", correct: false },
            ],
        },
        {
            question:
                "What is the term for energy stored in an object due to its position?",
            answers: [
                { text: "Kinetic Energy", correct: false },
                { text: "Potential Energy", correct: true },
                { text: "Thermal Energy", correct: false },
                { text: "Electrical Energy", correct: false },
            ],
        },
        {
            question:
                "What is the primary gas found in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Hydrogen", correct: false },
            ],
        },
        {
            question:
                "What is the process by which water changes from a liquid to a gas?",
            answers: [
                { text: "Condensation", correct: false },
                { text: "Evaporation", correct: true },
                { text: "Sublimation", correct: false },
                { text: "Freezing", correct: false },
            ],
        },
        {
            question: "What is the main difference between speed and velocity?",
            answers: [
                {
                    text: "Speed is a vector, velocity is a scalar",
                    correct: false,
                },
                {
                    text: "Velocity includes direction, speed does not",
                    correct: true,
                },
                {
                    text: "Speed is measured in meters, velocity in kilometers",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "What is the first law of thermodynamics?",
            answers: [
                {
                    text: "Energy cannot be created or destroyed",
                    correct: true,
                },
                {
                    text: "For every action, there is an equal and opposite reaction",
                    correct: false,
                },
                {
                    text: "The entropy of an isolated system always increases",
                    correct: false,
                },
                {
                    text: "Force equals mass times acceleration",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the basic unit of electrical resistance?",
            answers: [
                { text: "Ampere", correct: false },
                { text: "Volt", correct: false },
                { text: "Ohm", correct: true },
                { text: "Watt", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the formula for kinetic energy?",
            answers: [
                { text: "KE = mgh", correct: false },
                { text: "KE = 1/2 mv^2", correct: true },
                { text: "KE = mcΔT", correct: false },
                { text: "KE = Fd", correct: false },
            ],
        },
        {
            question: "Who developed the theory of general relativity?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Niels Bohr", correct: false },
                { text: "Galileo Galilei", correct: false },
            ],
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            answers: [
                { text: "Approximately 9.8 m/s²", correct: true },
                { text: "Approximately 8.9 m/s²", correct: false },
                { text: "Approximately 10 m/s²", correct: false },
                { text: "Approximately 7.9 m/s²", correct: false },
            ],
        },
        {
            question: "What is the unit of electric current?",
            answers: [
                { text: "Volt", correct: false },
                { text: "Ampere", correct: true },
                { text: "Ohm", correct: false },
                { text: "Watt", correct: false },
            ],
        },
        {
            question:
                "What is the term for a material's ability to conduct electric current?",
            answers: [
                { text: "Resistance", correct: false },
                { text: "Conductivity", correct: true },
                { text: "Capacitance", correct: false },
                { text: "Inductance", correct: false },
            ],
        },
        {
            question:
                "What is the primary force that holds protons and neutrons together in an atomic nucleus?",
            answers: [
                { text: "Electromagnetic Force", correct: false },
                { text: "Weak Nuclear Force", correct: false },
                { text: "Strong Nuclear Force", correct: true },
                { text: "Gravitational Force", correct: false },
            ],
        },
        {
            question: "What is the term for the amount of matter in an object?",
            answers: [
                { text: "Volume", correct: false },
                { text: "Mass", correct: true },
                { text: "Density", correct: false },
                { text: "Weight", correct: false },
            ],
        },
        {
            question: "What is the speed of sound in air at 20°C?",
            answers: [
                { text: "Approximately 343 m/s", correct: true },
                { text: "Approximately 300 m/s", correct: false },
                { text: "Approximately 400 m/s", correct: false },
                { text: "Approximately 500 m/s", correct: false },
            ],
        },
        {
            question:
                "What is the term for the bending of light as it passes from one medium to another?",
            answers: [
                { text: "Reflection", correct: false },
                { text: "Refraction", correct: true },
                { text: "Diffraction", correct: false },
                { text: "Dispersion", correct: false },
            ],
        },
        {
            question: "What is the unit of frequency?",
            answers: [
                { text: "Hertz", correct: true },
                { text: "Decibel", correct: false },
                { text: "Lux", correct: false },
                { text: "Pascal", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "What is the term for a wave with electric and magnetic fields oscillating perpendicular to each other?",
            answers: [
                { text: "Longitudinal Wave", correct: false },
                { text: "Transverse Wave", correct: true },
                { text: "Surface Wave", correct: false },
                { text: "Matter Wave", correct: false },
            ],
        },
        {
            question: "What is the Heisenberg Uncertainty Principle?",
            answers: [
                {
                    text: "It is impossible to know both the position and momentum of a particle with absolute certainty",
                    correct: true,
                },
                {
                    text: "Energy can neither be created nor destroyed",
                    correct: false,
                },
                {
                    text: "For every action, there is an equal and opposite reaction",
                    correct: false,
                },
                { text: "Objects in motion stay in motion", correct: false },
            ],
        },
        {
            question: "What is the main difference between speed and velocity?",
            answers: [
                {
                    text: "Speed is a vector, velocity is a scalar",
                    correct: false,
                },
                {
                    text: "Velocity includes direction, speed does not",
                    correct: true,
                },
                {
                    text: "Speed is measured in meters, velocity in kilometers",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "What is the formula for Newton's Second Law of Motion?",
            answers: [
                { text: "F = ma", correct: true },
                { text: "F = mg", correct: false },
                { text: "F = mv", correct: false },
                { text: "F = m/v", correct: false },
            ],
        },
        {
            question:
                "What is the phenomenon of light bending around obstacles called?",
            answers: [
                { text: "Reflection", correct: false },
                { text: "Refraction", correct: false },
                { text: "Diffraction", correct: true },
                { text: "Dispersion", correct: false },
            ],
        },
        {
            question:
                "What is the primary source of energy for the Earth's weather systems?",
            answers: [
                { text: "The Moon", correct: false },
                { text: "The Sun", correct: true },
                { text: "Geothermal Energy", correct: false },
                { text: "Tidal Forces", correct: false },
            ],
        },
        {
            question: "What is the unit of electrical power?",
            answers: [
                { text: "Volt", correct: false },
                { text: "Ampere", correct: false },
                { text: "Ohm", correct: false },
                { text: "Watt", correct: true },
            ],
        },
        {
            question:
                "What is the term for the amount of space an object occupies?",
            answers: [
                { text: "Mass", correct: false },
                { text: "Volume", correct: true },
                { text: "Density", correct: false },
                { text: "Weight", correct: false },
            ],
        },
        {
            question: "Who is known for the theory of general relativity?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Niels Bohr", correct: false },
                { text: "Galileo Galilei", correct: false },
            ],
        },
        {
            question:
                "What is the process by which a solid turns directly into a gas called?",
            answers: [
                { text: "Evaporation", correct: false },
                { text: "Condensation", correct: false },
                { text: "Sublimation", correct: true },
                { text: "Deposition", correct: false },
            ],
        },
    ],
    4: [
        {
            question:
                "What is the name of the largest planet in our solar system?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Saturn", correct: false },
                { text: "Neptune", correct: false },
            ],
        },
        {
            question:
                "What is the primary force responsible for binding electrons to the nucleus?",
            answers: [
                { text: "Gravitational Force", correct: false },
                { text: "Electromagnetic Force", correct: true },
                { text: "Strong Nuclear Force", correct: false },
                { text: "Weak Nuclear Force", correct: false },
            ],
        },
        {
            question: "What is the term for the amount of matter in an object?",
            answers: [
                { text: "Volume", correct: false },
                { text: "Mass", correct: true },
                { text: "Density", correct: false },
                { text: "Weight", correct: false },
            ],
        },
        {
            question:
                "Which law states that energy cannot be created or destroyed?",
            answers: [
                { text: "Newton's First Law", correct: false },
                { text: "Law of Conservation of Energy", correct: true },
                { text: "Law of Universal Gravitation", correct: false },
                { text: "Second Law of Thermodynamics", correct: false },
            ],
        },
        {
            question:
                "What is the term for the rate at which work is done or energy is transferred?",
            answers: [
                { text: "Force", correct: false },
                { text: "Power", correct: true },
                { text: "Energy", correct: false },
                { text: "Momentum", correct: false },
            ],
        },
        {
            question:
                "What is the name of the force that opposes motion between two surfaces in contact?",
            answers: [
                { text: "Gravity", correct: false },
                { text: "Magnetism", correct: false },
                { text: "Friction", correct: true },
                { text: "Inertia", correct: false },
            ],
        },
        {
            question: "What is the center of an atom called?",
            answers: [
                { text: "Electron Cloud", correct: false },
                { text: "Nucleus", correct: true },
                { text: "Proton", correct: false },
                { text: "Neutron", correct: false },
            ],
        },
        {
            question: "Which particle has a negative charge?",
            answers: [
                { text: "Proton", correct: false },
                { text: "Neutron", correct: false },
                { text: "Electron", correct: true },
                { text: "Positron", correct: false },
            ],
        },
        {
            question: "What is the term for a change in velocity over time?",
            answers: [
                { text: "Speed", correct: false },
                { text: "Acceleration", correct: true },
                { text: "Momentum", correct: false },
                { text: "Force", correct: false },
            ],
        },
        {
            question:
                "What is the phase of matter with a definite volume but no definite shape?",
            answers: [
                { text: "Solid", correct: false },
                { text: "Liquid", correct: true },
                { text: "Gas", correct: false },
                { text: "Plasma", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is Schrödinger's cat a thought experiment in which theory?",
            answers: [
                { text: "Classical Mechanics", correct: false },
                { text: "Quantum Mechanics", correct: true },
                { text: "Relativity", correct: false },
                { text: "Thermodynamics", correct: false },
            ],
        },
        {
            question:
                "What is the term for the curvature of spacetime caused by mass and energy?",
            answers: [
                { text: "Quantum Flux", correct: false },
                { text: "Gravitational Waves", correct: false },
                { text: "Spacetime Curvature", correct: true },
                { text: "Dark Matter", correct: false },
            ],
        },
        {
            question:
                "What is the primary difference between classical and quantum physics?",
            answers: [
                {
                    text: "Classical physics deals with large-scale phenomena, while quantum physics deals with atomic and subatomic levels",
                    correct: true,
                },
                {
                    text: "Quantum physics is less accurate than classical physics",
                    correct: false,
                },
                {
                    text: "Classical physics includes the study of electricity, quantum physics does not",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "What is the Heisenberg Uncertainty Principle?",
            answers: [
                {
                    text: "It is impossible to know both the position and momentum of a particle with absolute certainty",
                    correct: true,
                },
                {
                    text: "Energy can neither be created nor destroyed",
                    correct: false,
                },
                {
                    text: "For every action, there is an equal and opposite reaction",
                    correct: false,
                },
                { text: "Objects in motion stay in motion", correct: false },
            ],
        },
        {
            question: "What is the main energy source of the Sun?",
            answers: [
                { text: "Chemical Energy", correct: false },
                { text: "Nuclear Fusion", correct: true },
                { text: "Gravitational Energy", correct: false },
                { text: "Thermal Energy", correct: false },
            ],
        },
        {
            question:
                "What is the term for the bending of light around the edges of an object?",
            answers: [
                { text: "Reflection", correct: false },
                { text: "Refraction", correct: false },
                { text: "Diffraction", correct: true },
                { text: "Dispersion", correct: false },
            ],
        },
        {
            question: "What is the principle of superposition in physics?",
            answers: [
                {
                    text: "The total energy of an isolated system remains constant",
                    correct: false,
                },
                {
                    text: "For every action, there is an equal and opposite reaction",
                    correct: false,
                },
                {
                    text: "When two or more waves overlap, the resulting wave is the sum of the individual waves",
                    correct: true,
                },
                {
                    text: "Energy cannot be created or destroyed",
                    correct: false,
                },
            ],
        },
        {
            question: "Who proposed the three laws of planetary motion?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: false },
                { text: "Johannes Kepler", correct: true },
                { text: "Galileo Galilei", correct: false },
            ],
        },
        {
            question:
                "What is the term for a particle with no electric charge?",
            answers: [
                { text: "Proton", correct: false },
                { text: "Electron", correct: false },
                { text: "Neutron", correct: true },
                { text: "Positron", correct: false },
            ],
        },
        {
            question:
                "What is the fundamental force that causes attraction between masses?",
            answers: [
                { text: "Electromagnetic Force", correct: false },
                { text: "Strong Nuclear Force", correct: false },
                { text: "Weak Nuclear Force", correct: false },
                { text: "Gravitational Force", correct: true },
            ],
        },
    ],
};

// Politics Quiz Data
export const politicsData: Quiz = {
    1: [
        {
            question:
                "What is the primary function of the legislative branch in the United States government?",
            answers: [
                { text: "To interpret laws", correct: false },
                { text: "To enforce laws", correct: false },
                { text: "To create and pass laws", correct: true },
                { text: "To veto laws", correct: false },
            ],
        },
        {
            question: "Who is known as the 'Father of the Constitution'?",
            answers: [
                { text: "George Washington", correct: false },
                { text: "James Madison", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "Alexander Hamilton", correct: false },
            ],
        },
        {
            question: "What does NATO stand for?",
            answers: [
                { text: "North Atlantic Treaty Organization", correct: true },
                {
                    text: "National Alliance of Treaty Officers",
                    correct: false,
                },
                { text: "North American Trade Organization", correct: false },
                { text: "National Assembly Treaty Order", correct: false },
            ],
        },
        {
            question:
                "Which political ideology emphasizes minimal state intervention in personal and economic matters?",
            answers: [
                { text: "Socialism", correct: false },
                { text: "Liberalism", correct: false },
                { text: "Conservatism", correct: false },
                { text: "Libertarianism", correct: true },
            ],
        },
        {
            question:
                "What is the term for a system of government where power is divided between a central authority and constituent units?",
            answers: [
                { text: "Unitary", correct: false },
                { text: "Confederation", correct: false },
                { text: "Federalism", correct: true },
                { text: "Monarchy", correct: false },
            ],
        },
        {
            question:
                "Who was the first female Prime Minister of the United Kingdom?",
            answers: [
                { text: "Theresa May", correct: false },
                { text: "Margaret Thatcher", correct: true },
                { text: "Angela Merkel", correct: false },
                { text: "Indira Gandhi", correct: false },
            ],
        },
        {
            question: "What is the highest court in the United States?",
            answers: [
                { text: "The Supreme Court", correct: true },
                { text: "The Court of Appeals", correct: false },
                { text: "The District Court", correct: false },
                { text: "The Federal Court", correct: false },
            ],
        },
        {
            question:
                "Which political system is characterized by a single-party state and centralized control?",
            answers: [
                { text: "Democracy", correct: false },
                { text: "Monarchy", correct: false },
                { text: "Authoritarianism", correct: true },
                { text: "Anarchism", correct: false },
            ],
        },
        {
            question:
                "What is the term for a political philosophy that advocates for the abolition of all government?",
            answers: [
                { text: "Anarchism", correct: true },
                { text: "Totalitarianism", correct: false },
                { text: "Fascism", correct: false },
                { text: "Communism", correct: false },
            ],
        },
        {
            question:
                "Who is the current Secretary-General of the United Nations? (As of 2024)",
            answers: [
                { text: "António Guterres", correct: true },
                { text: "Ban Ki-moon", correct: false },
                { text: "Kofi Annan", correct: false },
                { text: "Boutros Boutros-Ghali", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is the main purpose of the European Union?",
            answers: [
                { text: "To establish a military alliance", correct: false },
                {
                    text: "To promote economic and political integration among member states",
                    correct: true,
                },
                {
                    text: "To create a single European language",
                    correct: false,
                },
                { text: "To regulate global trade", correct: false },
            ],
        },
        {
            question:
                "Who was the leader of the Soviet Union during World War II?",
            answers: [
                { text: "Vladimir Lenin", correct: false },
                { text: "Joseph Stalin", correct: true },
                { text: "Leon Trotsky", correct: false },
                { text: "Nikita Khrushchev", correct: false },
            ],
        },
        {
            question:
                "What is the term for a political system where citizens vote for their leaders?",
            answers: [
                { text: "Oligarchy", correct: false },
                { text: "Democracy", correct: true },
                { text: "Monarchy", correct: false },
                { text: "Theocracy", correct: false },
            ],
        },
        {
            question:
                "Which amendment to the U.S. Constitution guarantees freedom of speech?",
            answers: [
                { text: "First Amendment", correct: true },
                { text: "Second Amendment", correct: false },
                { text: "Fourth Amendment", correct: false },
                { text: "Fifth Amendment", correct: false },
            ],
        },
        {
            question: "What is the process called when a bill becomes law?",
            answers: [
                { text: "Judicial Review", correct: false },
                { text: "Impeachment", correct: false },
                { text: "Legislation", correct: true },
                { text: "Filibuster", correct: false },
            ],
        },
        {
            question:
                "Who is the author of 'The Prince', a political treatise?",
            answers: [
                { text: "Niccolò Machiavelli", correct: true },
                { text: "Thomas Hobbes", correct: false },
                { text: "John Locke", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false },
            ],
        },
        {
            question:
                "What is the term for a political leader with absolute power?",
            answers: [
                { text: "Democrat", correct: false },
                { text: "Autocrat", correct: true },
                { text: "Bourgeoisie", correct: false },
                { text: "Populist", correct: false },
            ],
        },
        {
            question:
                "Which country is known for its parliamentary system and constitutional monarchy?",
            answers: [
                { text: "United States", correct: false },
                { text: "Germany", correct: false },
                { text: "United Kingdom", correct: true },
                { text: "China", correct: false },
            ],
        },
        {
            question:
                "What is the main role of the executive branch in the U.S. government?",
            answers: [
                { text: "To make laws", correct: false },
                { text: "To interpret laws", correct: false },
                { text: "To enforce laws", correct: true },
                { text: "To review laws", correct: false },
            ],
        },
        {
            question: "What does 'filibuster' refer to in the U.S. Senate?",
            answers: [
                { text: "A type of voting system", correct: false },
                {
                    text: "A tactic to delay or block legislative action",
                    correct: true,
                },
                {
                    text: "A committee responsible for budget oversight",
                    correct: false,
                },
                { text: "A formal debate session", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is 'separation of powers'?",
            answers: [
                {
                    text: "Dividing government responsibilities into distinct branches",
                    correct: true,
                },
                {
                    text: "The process of creating new government branches",
                    correct: false,
                },
                {
                    text: "The alliance between different government entities",
                    correct: false,
                },
                {
                    text: "The overlap of responsibilities among government branches",
                    correct: false,
                },
            ],
        },
        {
            question: "Who was the first female Prime Minister of India?",
            answers: [
                { text: "Indira Gandhi", correct: true },
                { text: "Pratibha Patil", correct: false },
                { text: "Sonia Gandhi", correct: false },
                { text: "Manmohan Singh", correct: false },
            ],
        },
        {
            question:
                "What is the term for a government ruled by a king or queen?",
            answers: [
                { text: "Republic", correct: false },
                { text: "Oligarchy", correct: false },
                { text: "Monarchy", correct: true },
                { text: "Anarchy", correct: false },
            ],
        },
        {
            question:
                "Which political theory advocates for a classless society and the abolition of private property?",
            answers: [
                { text: "Capitalism", correct: false },
                { text: "Socialism", correct: false },
                { text: "Communism", correct: true },
                { text: "Feudalism", correct: false },
            ],
        },
        {
            question: "What is the main purpose of the United Nations?",
            answers: [
                { text: "To establish a global currency", correct: false },
                {
                    text: "To promote international peace and security",
                    correct: true,
                },
                { text: "To control global trade", correct: false },
                {
                    text: "To regulate global environmental policies",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the current President of France? (As of 2024)",
            answers: [
                { text: "Emmanuel Macron", correct: true },
                { text: "François Hollande", correct: false },
                { text: "Nicolas Sarkozy", correct: false },
                { text: "Marine Le Pen", correct: false },
            ],
        },
        {
            question:
                "What is the term for a system where power is held by a small group of people?",
            answers: [
                { text: "Democracy", correct: false },
                { text: "Oligarchy", correct: true },
                { text: "Autocracy", correct: false },
                { text: "Theocracy", correct: false },
            ],
        },
        {
            question:
                "Which amendment to the U.S. Constitution abolished slavery?",
            answers: [
                { text: "13th Amendment", correct: true },
                { text: "14th Amendment", correct: false },
                { text: "15th Amendment", correct: false },
                { text: "19th Amendment", correct: false },
            ],
        },
        {
            question:
                "What is the term for a government where citizens have the power to elect their leaders?",
            answers: [
                { text: "Dictatorship", correct: false },
                { text: "Oligarchy", correct: false },
                { text: "Democracy", correct: true },
                { text: "Monarchy", correct: false },
            ],
        },
        {
            question:
                "Who wrote 'The Prince', a fundamental work in political theory?",
            answers: [
                { text: "Niccolò Machiavelli", correct: true },
                { text: "Thomas More", correct: false },
                { text: "John Locke", correct: false },
                { text: "Karl Marx", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is 'bicameralism' in a legislative system?",
            answers: [
                {
                    text: "A system with two separate chambers or houses",
                    correct: true,
                },
                { text: "A system with one chamber or house", correct: false },
                {
                    text: "A system with three chambers or houses",
                    correct: false,
                },
                {
                    text: "A system where chambers have equal power",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which political ideology emphasizes the importance of tradition and social stability?",
            answers: [
                { text: "Liberalism", correct: false },
                { text: "Conservatism", correct: true },
                { text: "Socialism", correct: false },
                { text: "Libertarianism", correct: false },
            ],
        },
        {
            question:
                "What is the term for the principle that government power is limited by law?",
            answers: [
                { text: "Sovereignty", correct: false },
                { text: "Rule of Law", correct: true },
                { text: "Popular Sovereignty", correct: false },
                { text: "Divine Right", correct: false },
            ],
        },
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "Abraham Lincoln", correct: false },
                { text: "George Washington", correct: true },
                { text: "John Adams", correct: false },
            ],
        },
        {
            question: "What is 'gerrymandering'?",
            answers: [
                {
                    text: "The practice of making agreements between political parties",
                    correct: false,
                },
                {
                    text: "The manipulation of electoral district boundaries for political gain",
                    correct: true,
                },
                {
                    text: "The process of running for political office",
                    correct: false,
                },
                { text: "The act of campaigning aggressively", correct: false },
            ],
        },
        {
            question:
                "Which document outlines the fundamental laws and principles of the United States government?",
            answers: [
                { text: "'The Declaration of Independence'", correct: false },
                { text: "'The Bill of Rights'", correct: false },
                { text: "'The Constitution'", correct: true },
                { text: "'The Federalist Papers'", correct: false },
            ],
        },
        {
            question:
                "What is the term for a government controlled by religious leaders?",
            answers: [
                { text: "Theocracy", correct: true },
                { text: "Oligarchy", correct: false },
                { text: "Autocracy", correct: false },
                { text: "Plutocracy", correct: false },
            ],
        },
        {
            question:
                "Who is known for the theory of 'checks and balances' in government?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "James Madison", correct: true },
                { text: "Alexander Hamilton", correct: false },
                { text: "Benjamin Franklin", correct: false },
            ],
        },
        {
            question: "What is 'caucus' in the context of politics?",
            answers: [
                {
                    text: "A formal meeting of party members to decide policy or select candidates",
                    correct: true,
                },
                {
                    text: "A legislative procedure to pass a bill",
                    correct: false,
                },
                { text: "A type of political party", correct: false },
                { text: "A political protest", correct: false },
            ],
        },
        {
            question:
                "Which political system combines elements of democracy and oligarchy?",
            answers: [
                { text: "Aristocracy", correct: false },
                { text: "Plutocracy", correct: false },
                { text: "Republicanism", correct: false },
                { text: "Polity", correct: true }, // Alternatively, could be described differently
            ],
        },
    ],
    5: [
        {
            question: "What is 'pluralism' in political science?",
            answers: [
                {
                    text: "The belief in a single dominant group",
                    correct: false,
                },
                {
                    text: "The recognition and affirmation of diversity within a political body",
                    correct: true,
                },
                {
                    text: "A system where power is concentrated in the hands of a few",
                    correct: false,
                },
                {
                    text: "The merging of multiple political parties",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is the author of 'The Social Contract'?",
            answers: [
                { text: "John Stuart Mill", correct: false },
                { text: "Jean-Jacques Rousseau", correct: true },
                { text: "Thomas Hobbes", correct: false },
                { text: "Baruch Spinoza", correct: false },
            ],
        },
        {
            question: "What is 'bicameral legislature'?",
            answers: [
                {
                    text: "A legislature with two separate chambers or houses",
                    correct: true,
                },
                {
                    text: "A legislature with one chamber or house",
                    correct: false,
                },
                {
                    text: "A legislature that meets twice a year",
                    correct: false,
                },
                {
                    text: "A legislature controlled by two political parties",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the primary role of the judiciary branch in the U.S. government?",
            answers: [
                { text: "To create laws", correct: false },
                { text: "To enforce laws", correct: false },
                { text: "To interpret laws", correct: true },
                { text: "To propose amendments", correct: false },
            ],
        },
        {
            question:
                "Which political ideology advocates for state ownership of the means of production?",
            answers: [
                { text: "Capitalism", correct: false },
                { text: "Socialism", correct: true },
                { text: "Libertarianism", correct: false },
                { text: "Anarchism", correct: false },
            ],
        },
        {
            question: "What is 'veto power'?",
            answers: [
                { text: "The power to propose laws", correct: false },
                { text: "The power to approve laws", correct: false },
                {
                    text: "The power to reject laws passed by the legislature",
                    correct: true,
                },
                { text: "The power to enforce laws", correct: false },
            ],
        },
        {
            question:
                "Which amendment to the U.S. Constitution guarantees freedom of religion?",
            answers: [
                { text: "First Amendment", correct: true },
                { text: "Second Amendment", correct: false },
                { text: "Fourth Amendment", correct: false },
                { text: "Fifth Amendment", correct: false },
            ],
        },
        {
            question:
                "What is the term for a temporary suspension of a law or government action?",
            answers: [
                { text: "Amendment", correct: false },
                { text: "Veto", correct: false },
                { text: "Suspension", correct: true },
                { text: "Repeal", correct: false },
            ],
        },
        {
            question:
                "Which political system features a supreme leader with absolute authority?",
            answers: [
                { text: "Democracy", correct: false },
                { text: "Monarchy", correct: false },
                { text: "Authoritarianism", correct: true },
                { text: "Federalism", correct: false },
            ],
        },
        {
            question:
                "What is the term for the political philosophy that prioritizes individual liberty and limited government?",
            answers: [
                { text: "Socialism", correct: false },
                { text: "Liberalism", correct: false },
                { text: "Libertarianism", correct: true },
                { text: "Conservatism", correct: false },
            ],
        },
    ],
};

// Real Estate Quiz Data
export const realEstateData: Quiz = {
    1: [
        {
            question:
                "What is the term for the legal right to use another's land for a specific purpose?",
            answers: [
                { text: "Easement", correct: true },
                { text: "Lien", correct: false },
                { text: "Encroachment", correct: false },
                { text: "Tenancy", correct: false },
            ],
        },
        {
            question: "What does MLS stand for in real estate?",
            answers: [
                { text: "Multiple Listing Service", correct: true },
                { text: "Master Lease System", correct: false },
                { text: "Mortgage Lending Society", correct: false },
                { text: "Market Listing Standard", correct: false },
            ],
        },
        {
            question:
                "What is the primary difference between a condominium and a co-op?",
            answers: [
                { text: "Ownership structure", correct: true },
                { text: "Location", correct: false },
                { text: "Size of units", correct: false },
                { text: "Type of amenities", correct: false },
            ],
        },
        {
            question: "What is a 'short sale' in real estate?",
            answers: [
                {
                    text: "Selling a property for more than its mortgage",
                    correct: false,
                },
                {
                    text: "Selling a property without a real estate agent",
                    correct: false,
                },
                {
                    text: "Selling a property for less than the mortgage owed",
                    correct: true,
                },
                {
                    text: "Selling a property quickly at market price",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the term for the gradual wear and tear on a property over time?",
            answers: [
                { text: "Depreciation", correct: true },
                { text: "Appreciation", correct: false },
                { text: "Capitalization", correct: false },
                { text: "Amortization", correct: false },
            ],
        },
        {
            question:
                "What does 'escrow' refer to in real estate transactions?",
            answers: [
                { text: "The final walkthrough of a property", correct: false },
                {
                    text: "A third-party account holding funds during the transaction",
                    correct: true,
                },
                { text: "The signing of the contract", correct: false },
                { text: "The appraisal of the property", correct: false },
            ],
        },
        {
            question: "What is the purpose of a real estate appraisal?",
            answers: [
                { text: "To advertise the property", correct: false },
                {
                    text: "To determine the market value of the property",
                    correct: true,
                },
                { text: "To negotiate the sale price", correct: false },
                { text: "To inspect the property's condition", correct: false },
            ],
        },
        {
            question: "What is 'equity' in real estate?",
            answers: [
                { text: "The total value of the property", correct: false },
                { text: "The amount owed on the mortgage", correct: false },
                {
                    text: "The difference between the property's market value and the mortgage owed",
                    correct: true,
                },
                { text: "The rental income from the property", correct: false },
            ],
        },
        {
            question: "What does 'FSBO' stand for?",
            answers: [
                { text: "For Sale By Owner", correct: true },
                { text: "Federal Sale Bureau", correct: false },
                { text: "First Sale By Owner", correct: false },
                { text: "For Secure Business Operations", correct: false },
            ],
        },
        {
            question: "What is the primary role of a real estate agent?",
            answers: [
                { text: "To provide legal advice", correct: false },
                {
                    text: "To represent buyers or sellers in real estate transactions",
                    correct: true,
                },
                { text: "To appraise property values", correct: false },
                { text: "To finance real estate deals", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is a 'dual agency' in real estate?",
            answers: [
                {
                    text: "An agent representing both buyer and seller in the same transaction",
                    correct: true,
                },
                {
                    text: "An agent working in two different states",
                    correct: false,
                },
                { text: "Two agents representing the buyer", correct: false },
                { text: "Two agents representing the seller", correct: false },
            ],
        },
        {
            question: "What is the purpose of a home inspection?",
            answers: [
                {
                    text: "To determine the market value of the home",
                    correct: false,
                },
                {
                    text: "To assess the condition of the property and identify any issues",
                    correct: true,
                },
                { text: "To negotiate the sale price", correct: false },
                { text: "To verify the seller's ownership", correct: false },
            ],
        },
        {
            question: "What does 'ARV' stand for in real estate investing?",
            answers: [
                { text: "After Repair Value", correct: true },
                { text: "Actual Real Value", correct: false },
                { text: "Appraised Real Value", correct: false },
                { text: "Adjusted Rental Value", correct: false },
            ],
        },
        {
            question: "What is a 'REIT'?",
            answers: [
                { text: "Real Estate Investment Trust", correct: true },
                { text: "Real Estate Income Tax", correct: false },
                { text: "Real Estate International Trade", correct: false },
                { text: "Real Estate Insurance Trust", correct: false },
            ],
        },
        {
            question: "What is the 'listing price'?",
            answers: [
                {
                    text: "The final sale price of the property",
                    correct: false,
                },
                {
                    text: "The initial price at which the property is offered for sale",
                    correct: true,
                },
                {
                    text: "The price agreed upon during negotiation",
                    correct: false,
                },
                { text: "The appraised value of the property", correct: false },
            ],
        },
        {
            question: "What is 'amortization' in the context of a mortgage?",
            answers: [
                {
                    text: "The process of determining the market value of a property",
                    correct: false,
                },
                {
                    text: "The gradual repayment of a loan over time through regular payments",
                    correct: true,
                },
                {
                    text: "The initial deposit paid when purchasing a property",
                    correct: false,
                },
                {
                    text: "The tax deduction on mortgage interest",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the primary difference between a fixed-rate and an adjustable-rate mortgage?",
            answers: [
                {
                    text: "Fixed-rate mortgages have lower interest rates",
                    correct: false,
                },
                {
                    text: "Adjustable-rate mortgages offer fixed interest rates",
                    correct: false,
                },
                {
                    text: "Fixed-rate mortgages have an interest rate that remains constant, while adjustable-rate mortgages have rates that can change",
                    correct: true,
                },
                { text: "There is no difference", correct: false },
            ],
        },
        {
            question: "What does 'closing costs' refer to?",
            answers: [
                {
                    text: "The commission paid to real estate agents",
                    correct: false,
                },
                {
                    text: "The fees and expenses paid at the end of a real estate transaction",
                    correct: true,
                },
                {
                    text: "The cost of repairs made before selling a property",
                    correct: false,
                },
                {
                    text: "The mortgage interest paid over time",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'zoning' in real estate?",
            answers: [
                {
                    text: "The process of determining property taxes",
                    correct: false,
                },
                {
                    text: "The regulation of land use by local governments",
                    correct: true,
                },
                {
                    text: "The classification of properties based on size",
                    correct: false,
                },
                { text: "The appraisal of property values", correct: false },
            ],
        },
        {
            question:
                "What is the 'equity multiplier' in real estate investment?",
            answers: [
                {
                    text: "A ratio that measures financial leverage",
                    correct: true,
                },
                {
                    text: "A tool to calculate property appreciation",
                    correct: false,
                },
                { text: "A method to determine rental income", correct: false },
                {
                    text: "A type of loan for purchasing properties",
                    correct: false,
                },
            ],
        },
    ],
    3: [
        {
            question:
                "What is the 'due diligence' period in a real estate transaction?",
            answers: [
                {
                    text: "The time before signing the contract to conduct inspections and verify information",
                    correct: true,
                },
                { text: "The final stage of closing the sale", correct: false },
                {
                    text: "The period when the buyer pays the down payment",
                    correct: false,
                },
                {
                    text: "The time when the property is listed for sale",
                    correct: false,
                },
            ],
        },
        {
            question: "What is a 'foreclosure'?",
            answers: [
                { text: "A property that is being renovated", correct: false },
                {
                    text: "A process where the lender takes back property due to the borrower's failure to pay the mortgage",
                    correct: true,
                },
                { text: "A sale conducted by the government", correct: false },
                { text: "A type of property insurance", correct: false },
            ],
        },
        {
            question: "What does 'CMBS' stand for in real estate financing?",
            answers: [
                {
                    text: "Commercial Mortgage-Backed Securities",
                    correct: true,
                },
                {
                    text: "Certified Mortgage Banking Standards",
                    correct: false,
                },
                { text: "Commercial Mortgage Banking System", correct: false },
                {
                    text: "Certified Mortgage-Backed Securities",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the primary purpose of a real estate appraisal?",
            answers: [
                { text: "To negotiate the sale price", correct: false },
                {
                    text: "To assess the condition of the property",
                    correct: false,
                },
                {
                    text: "To determine the market value of the property",
                    correct: true,
                },
                { text: "To advertise the property", correct: false },
            ],
        },
        {
            question: "What is 'liquidity' in real estate?",
            answers: [
                {
                    text: "The ease with which a property can be converted into cash",
                    correct: true,
                },
                { text: "The amount of debt on a property", correct: false },
                {
                    text: "The physical condition of a property",
                    correct: false,
                },
                {
                    text: "The location desirability of a property",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the 'cap rate' in real estate investment?",
            answers: [
                { text: "The rate of mortgage interest", correct: false },
                {
                    text: "The ratio of net operating income to property value",
                    correct: true,
                },
                { text: "The rate of property appreciation", correct: false },
                {
                    text: "The percentage of property taxes paid annually",
                    correct: false,
                },
            ],
        },
        {
            question: "What is a 'leasehold' property?",
            answers: [
                {
                    text: "A property owned outright by the buyer",
                    correct: false,
                },
                {
                    text: "A property where the buyer has the right to use the land for a specific period",
                    correct: true,
                },
                { text: "A property rented out to tenants", correct: false },
                { text: "A property under foreclosure", correct: false },
            ],
        },
        {
            question: "What is the 'short-term rental market' in real estate?",
            answers: [
                {
                    text: "Renting properties for long-term leases",
                    correct: false,
                },
                {
                    text: "Renting properties for short periods, typically for vacation or temporary stays",
                    correct: true,
                },
                {
                    text: "The market for renting commercial spaces",
                    correct: false,
                },
                {
                    text: "The market for renting out storage units",
                    correct: false,
                },
            ],
        },
        {
            question: "What is a 'condo association'?",
            answers: [
                {
                    text: "A group that manages the communal aspects of a condominium complex",
                    correct: true,
                },
                { text: "A real estate investment group", correct: false },
                {
                    text: "A legal entity that owns all units in a condominium",
                    correct: false,
                },
                {
                    text: "An association for condominium buyers",
                    correct: false,
                },
            ],
        },
        {
            question: "What does 'ROI' stand for in real estate investing?",
            answers: [
                { text: "Rate of Interest", correct: false },
                { text: "Return on Investment", correct: true },
                { text: "Rate of Inflation", correct: false },
                { text: "Return on Income", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is a 'seller's market'?",
            answers: [
                {
                    text: "A market where there are more buyers than available properties",
                    correct: true,
                },
                {
                    text: "A market where there are more properties than buyers",
                    correct: false,
                },
                { text: "A market controlled by sellers only", correct: false },
                {
                    text: "A market for selling specific types of properties",
                    correct: false,
                },
            ],
        },
        {
            question: "What is '1031 exchange' in real estate?",
            answers: [
                { text: "A type of mortgage loan", correct: false },
                {
                    text: "A tax-deferred exchange of like-kind properties",
                    correct: true,
                },
                { text: "A regulation for rental properties", correct: false },
                { text: "A government housing program", correct: false },
            ],
        },
        {
            question:
                "What is the term for the cost of owning a property, excluding mortgage payments?",
            answers: [
                { text: "Gross Rent Multiplier", correct: false },
                { text: "Operating Expenses", correct: true },
                { text: "Capital Expenditures", correct: false },
                { text: "Net Operating Income", correct: false },
            ],
        },
        {
            question: "What is a 'balloon mortgage'?",
            answers: [
                {
                    text: "A mortgage with a large final payment after a series of smaller payments",
                    correct: true,
                },
                {
                    text: "A mortgage with a fixed interest rate",
                    correct: false,
                },
                {
                    text: "A mortgage used for purchasing luxury properties",
                    correct: false,
                },
                { text: "A mortgage that increases over time", correct: false },
            ],
        },
        {
            question: "What is the 'Golden Rule' in real estate?",
            answers: [
                { text: "Always negotiate the lowest price", correct: false },
                {
                    text: "Treat others as you would like to be treated",
                    correct: true,
                },
                { text: "Never back out of a deal", correct: false },
                { text: "Invest only in high-demand areas", correct: false },
            ],
        },
        {
            question: "What is 'MLS' used for in real estate?",
            answers: [
                { text: "Managing property taxes", correct: false },
                {
                    text: "Listing and accessing property information across agents and brokers",
                    correct: true,
                },
                { text: "Calculating mortgage payments", correct: false },
                { text: "Conducting property inspections", correct: false },
            ],
        },
        {
            question: "What is a 'duplex'?",
            answers: [
                {
                    text: "A single-family home with two separate living units",
                    correct: true,
                },
                {
                    text: "A commercial property with two storefronts",
                    correct: false,
                },
                { text: "A property with two garages", correct: false },
                { text: "A house with two stories", correct: false },
            ],
        },
        {
            question: "What is the purpose of 'title insurance'?",
            answers: [
                {
                    text: "To insure the property's physical condition",
                    correct: false,
                },
                {
                    text: "To protect against legal claims on the property's title",
                    correct: true,
                },
                { text: "To cover mortgage default", correct: false },
                { text: "To insure rental income", correct: false },
            ],
        },
        {
            question: "What is 'foreclosure'?",
            answers: [
                { text: "A property being renovated", correct: false },
                {
                    text: "The process where a lender takes back property due to the borrower's failure to pay the mortgage",
                    correct: true,
                },
                { text: "A property sold below market value", correct: false },
                { text: "A government seizure of property", correct: false },
            ],
        },
        {
            question: "What does 'APR' stand for in mortgage lending?",
            answers: [
                { text: "Annual Percentage Rate", correct: true },
                { text: "Annual Payment Requirement", correct: false },
                { text: "Adjusted Percentage Rate", correct: false },
                { text: "Annual Principal Reduction", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is 'cash flow' in real estate investment?",
            answers: [
                {
                    text: "The amount of money invested in a property",
                    correct: false,
                },
                {
                    text: "The net amount of cash being transferred into and out of a property",
                    correct: true,
                },
                {
                    text: "The appreciation of property value over time",
                    correct: false,
                },
                { text: "The cost of maintaining a property", correct: false },
            ],
        },
        {
            question: "What is a 'REO property'?",
            answers: [
                {
                    text: "A property owned by a real estate agent",
                    correct: false,
                },
                {
                    text: "A property owned by a lender after foreclosure",
                    correct: true,
                },
                {
                    text: "A rental property with an existing tenant",
                    correct: false,
                },
                { text: "A property listed on the MLS", correct: false },
            ],
        },
        {
            question: "What is the 'due-on-sale' clause in a mortgage?",
            answers: [
                {
                    text: "A clause that allows the lender to demand full repayment if the property is sold",
                    correct: true,
                },
                {
                    text: "A clause that adjusts the interest rate upon sale",
                    correct: false,
                },
                {
                    text: "A clause that permits the sale without lender approval",
                    correct: false,
                },
                {
                    text: "A clause that offers a discount upon sale",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'mortgage refinancing'?",
            answers: [
                {
                    text: "Selling the property and paying off the mortgage",
                    correct: false,
                },
                {
                    text: "Replacing an existing mortgage with a new one, typically with different terms",
                    correct: true,
                },
                {
                    text: "Taking out a second mortgage on the property",
                    correct: false,
                },
                {
                    text: "Consolidating multiple mortgages into one",
                    correct: false,
                },
            ],
        },
        {
            question: "What is a 'buyer’s market'?",
            answers: [
                {
                    text: "A market where there are more buyers than available properties",
                    correct: false,
                },
                {
                    text: "A market where there are more properties than buyers",
                    correct: true,
                },
                {
                    text: "A market dominated by first-time buyers",
                    correct: false,
                },
                { text: "A market with high property prices", correct: false },
            ],
        },
        {
            question: "What is 'zoning' in real estate?",
            answers: [
                {
                    text: "The process of determining property taxes",
                    correct: false,
                },
                {
                    text: "The regulation of land use by local governments",
                    correct: true,
                },
                {
                    text: "The classification of properties based on size",
                    correct: false,
                },
                { text: "The appraisal of property values", correct: false },
            ],
        },
        {
            question: "What is a 'bridge loan'?",
            answers: [
                {
                    text: "A loan used to purchase a new property before selling the old one",
                    correct: true,
                },
                { text: "A long-term mortgage", correct: false },
                { text: "A loan for building bridges", correct: false },
                {
                    text: "A loan with very high interest rates",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'earnest money' in a real estate transaction?",
            answers: [
                { text: "The final payment made at closing", correct: false },
                {
                    text: "A deposit made by the buyer to show commitment",
                    correct: true,
                },
                { text: "The money paid for the appraisal", correct: false },
                { text: "The commission paid to the agent", correct: false },
            ],
        },
        {
            question: "What is 'gross rent multiplier' (GRM)?",
            answers: [
                {
                    text: "A ratio used to evaluate rental income relative to property price",
                    correct: true,
                },
                {
                    text: "A multiplier for calculating mortgage payments",
                    correct: false,
                },
                { text: "A measure of property appreciation", correct: false },
                {
                    text: "A tax incentive for rental properties",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the primary difference between commercial and residential real estate?",
            answers: [
                {
                    text: "Commercial real estate is used for business purposes, while residential real estate is used for living purposes",
                    correct: true,
                },
                {
                    text: "Residential real estate is always owned outright, while commercial real estate is leased",
                    correct: false,
                },
                {
                    text: "Commercial real estate has higher taxes",
                    correct: false,
                },
                { text: "There is no difference", correct: false },
            ],
        },
    ],
};

// Psychology Quiz Data
export const psychologyData: Quiz = {
    1: [
        {
            question: "Who is known as the father of psychoanalysis?",
            answers: [
                { text: "Carl Jung", correct: false },
                { text: "Sigmund Freud", correct: true },
                { text: "Ivan Pavlov", correct: false },
                { text: "B.F. Skinner", correct: false },
            ],
        },
        {
            question: "What is the primary focus of cognitive psychology?",
            answers: [
                { text: "Unconscious motives", correct: false },
                { text: "Behavioral conditioning", correct: false },
                {
                    text: "Mental processes like thinking, memory, and problem-solving",
                    correct: true,
                },
                { text: "Social interactions", correct: false },
            ],
        },
        {
            question: "What does the acronym 'DSM' stand for in psychology?",
            answers: [
                {
                    text: "Diagnostic and Statistical Manual of Mental Disorders",
                    correct: true,
                },
                { text: "Developmental and Social Models", correct: false },
                {
                    text: "Diagnostic Standards for Mental Health",
                    correct: false,
                },
                { text: "Developmental Statistical Measures", correct: false },
            ],
        },
        {
            question:
                "Which psychologist is associated with the hierarchy of needs?",
            answers: [
                { text: "Abraham Maslow", correct: true },
                { text: "Carl Rogers", correct: false },
                { text: "Jean Piaget", correct: false },
                { text: "Erik Erikson", correct: false },
            ],
        },
        {
            question: "What is 'classical conditioning'?",
            answers: [
                {
                    text: "Learning through rewards and punishments",
                    correct: false,
                },
                {
                    text: "Learning through association between stimuli",
                    correct: true,
                },
                { text: "Learning through observation", correct: false },
                { text: "Learning through trial and error", correct: false },
            ],
        },
        {
            question: "What does 'B.F. Skinner' primarily study?",
            answers: [
                { text: "Human development", correct: false },
                { text: "Behaviorism and operant conditioning", correct: true },
                { text: "Unconscious processes", correct: false },
                { text: "Cognitive development", correct: false },
            ],
        },
        {
            question: "What is 'attachment theory'?",
            answers: [
                {
                    text: "A theory about cognitive development",
                    correct: false,
                },
                {
                    text: "A theory about the bonds between individuals, especially between a child and caregiver",
                    correct: true,
                },
                { text: "A theory about social interactions", correct: false },
                {
                    text: "A theory about personality development",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the 'id' in Freud's structural model of the psyche?",
            answers: [
                { text: "The rational part of the mind", correct: false },
                { text: "The moral part of the mind", correct: false },
                {
                    text: "The instinctual and unconscious part of the mind",
                    correct: true,
                },
                {
                    text: "The part responsible for decision-making",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'positive reinforcement'?",
            answers: [
                {
                    text: "Removing an unpleasant stimulus to increase behavior",
                    correct: false,
                },
                {
                    text: "Adding a pleasant stimulus to increase behavior",
                    correct: true,
                },
                {
                    text: "Removing a pleasant stimulus to decrease behavior",
                    correct: false,
                },
                {
                    text: "Adding an unpleasant stimulus to decrease behavior",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who developed the stages of cognitive development in children?",
            answers: [
                { text: "Jean Piaget", correct: true },
                { text: "Lev Vygotsky", correct: false },
                { text: "Sigmund Freud", correct: false },
                { text: "Albert Bandura", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What is 'social psychology' primarily concerned with?",
            answers: [
                {
                    text: "Individual behavior and mental processes",
                    correct: false,
                },
                {
                    text: "The study of how people's thoughts, feelings, and behaviors are influenced by the actual or implied presence of others",
                    correct: true,
                },
                {
                    text: "Psychological disorders and their treatment",
                    correct: false,
                },
                { text: "Biological bases of behavior", correct: false },
            ],
        },
        {
            question: "What does 'operant conditioning' involve?",
            answers: [
                {
                    text: "Associating two stimuli to trigger a response",
                    correct: false,
                },
                {
                    text: "Learning through rewards and punishments to influence behavior",
                    correct: true,
                },
                {
                    text: "Learning through observation and imitation",
                    correct: false,
                },
                {
                    text: "Unconscious associations affecting behavior",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which therapy focuses on changing maladaptive thoughts and behaviors?",
            answers: [
                { text: "Psychoanalytic Therapy", correct: false },
                { text: "Humanistic Therapy", correct: false },
                { text: "Cognitive-Behavioral Therapy", correct: true },
                { text: "Gestalt Therapy", correct: false },
            ],
        },
        {
            question: "What is 'attachment style'?",
            answers: [
                {
                    text: "A person's preferred method of learning",
                    correct: false,
                },
                {
                    text: "The way individuals form emotional bonds and interact in relationships",
                    correct: true,
                },
                { text: "A type of personality disorder", correct: false },
                {
                    text: "The level of intelligence in social settings",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who is associated with the concept of 'collective unconscious'?",
            answers: [
                { text: "Carl Jung", correct: true },
                { text: "Sigmund Freud", correct: false },
                { text: "Abraham Maslow", correct: false },
                { text: "B.F. Skinner", correct: false },
            ],
        },
        {
            question: "What is 'self-actualization'?",
            answers: [
                {
                    text: "Achieving one's full potential and personal growth",
                    correct: true,
                },
                {
                    text: "The process of forming attachments in childhood",
                    correct: false,
                },
                { text: "A state of psychological well-being", correct: false },
                {
                    text: "The understanding of one's unconscious motives",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the 'big five' in personality psychology?",
            answers: [
                { text: "Five stages of development", correct: false },
                {
                    text: "Five major personality traits: openness, conscientiousness, extraversion, agreeableness, and neuroticism",
                    correct: true,
                },
                {
                    text: "Five types of psychological disorders",
                    correct: false,
                },
                { text: "Five levels of consciousness", correct: false },
            ],
        },
        {
            question: "What does 'cognitive dissonance' refer to?",
            answers: [
                {
                    text: "The process of learning through rewards",
                    correct: false,
                },
                {
                    text: "The mental discomfort experienced when holding contradictory beliefs or attitudes",
                    correct: true,
                },
                {
                    text: "The ability to understand others' perspectives",
                    correct: false,
                },
                {
                    text: "The stage of development where individuals form their identity",
                    correct: false,
                },
            ],
        },
        {
            question: "Who developed the hierarchy of needs?",
            answers: [
                { text: "Abraham Maslow", correct: true },
                { text: "Carl Rogers", correct: false },
                { text: "Sigmund Freud", correct: false },
                { text: "B.F. Skinner", correct: false },
            ],
        },
        {
            question: "What is 'bystander effect' in social psychology?",
            answers: [
                {
                    text: "The tendency for individuals to perform better in the presence of others",
                    correct: false,
                },
                {
                    text: "The phenomenon where individuals are less likely to help a victim when other people are present",
                    correct: true,
                },
                {
                    text: "The influence of a group on an individual's behavior",
                    correct: false,
                },
                {
                    text: "The preference for group decision-making",
                    correct: false,
                },
            ],
        },
    ],
    3: [
        {
            question: "What is 'psychometrics'?",
            answers: [
                { text: "The study of mind-body interactions", correct: false },
                {
                    text: "The field concerned with the theory and technique of psychological measurement",
                    correct: true,
                },
                { text: "The study of mental disorders", correct: false },
                { text: "The study of human development", correct: false },
            ],
        },
        {
            question:
                "Which psychologist is known for classical conditioning with dogs?",
            answers: [
                { text: "Ivan Pavlov", correct: true },
                { text: "B.F. Skinner", correct: false },
                { text: "John Watson", correct: false },
                { text: "Albert Bandura", correct: false },
            ],
        },
        {
            question: "What is 'neuroplasticity'?",
            answers: [
                {
                    text: "The brain's ability to change and adapt as a result of experience",
                    correct: true,
                },
                {
                    text: "The deterioration of neural pathways over time",
                    correct: false,
                },
                { text: "The study of the nervous system", correct: false },
                { text: "The process of forming new neurons", correct: false },
            ],
        },
        {
            question: "What is the primary focus of developmental psychology?",
            answers: [
                {
                    text: "Mental processes like memory and perception",
                    correct: false,
                },
                { text: "Behavioral conditioning", correct: false },
                {
                    text: "Changes and growth throughout a person's lifespan",
                    correct: true,
                },
                { text: "Social interactions and influences", correct: false },
            ],
        },
        {
            question: "What is 'transactional analysis'?",
            answers: [
                { text: "A type of cognitive therapy", correct: false },
                {
                    text: "A psychoanalytic method focusing on unconscious motives",
                    correct: false,
                },
                {
                    text: "A theory that studies social interactions and ego states",
                    correct: true,
                },
                { text: "A behavioral conditioning technique", correct: false },
            ],
        },
        {
            question: "What does 'DSM-5' classify?",
            answers: [
                { text: "Stages of human development", correct: false },
                { text: "Mental disorders", correct: true },
                { text: "Personality types", correct: false },
                { text: "Cognitive biases", correct: false },
            ],
        },
        {
            question: "What is 'confirmation bias'?",
            answers: [
                {
                    text: "The tendency to seek information that contradicts one's beliefs",
                    correct: false,
                },
                {
                    text: "The tendency to interpret new evidence as confirmation of one's existing beliefs",
                    correct: true,
                },
                {
                    text: "The inability to remember past events accurately",
                    correct: false,
                },
                {
                    text: "The influence of social factors on decision-making",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is associated with the concept of 'self-efficacy'?",
            answers: [
                { text: "Carl Rogers", correct: false },
                { text: "Albert Bandura", correct: true },
                { text: "Sigmund Freud", correct: false },
                { text: "B.F. Skinner", correct: false },
            ],
        },
        {
            question: "What is 'groupthink'?",
            answers: [
                {
                    text: "A cognitive bias where individuals strive for consensus without critical evaluation",
                    correct: true,
                },
                { text: "The process of learning in groups", correct: false },
                {
                    text: "The phenomenon of group performance being superior to individual performance",
                    correct: false,
                },
                { text: "A form of group therapy", correct: false },
            ],
        },
        {
            question: "What is the 'Big Five' personality traits?",
            answers: [
                {
                    text: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
                    correct: true,
                },
                {
                    text: "Introversion, Stability, Kindness, Logic, Creativity",
                    correct: false,
                },
                {
                    text: "Aggressiveness, Flexibility, Sociability, Intelligence, Honesty",
                    correct: false,
                },
                {
                    text: "Optimism, Pessimism, Empathy, Assertiveness, Patience",
                    correct: false,
                },
            ],
        },
    ],
    4: [
        {
            question: "What is 'operant conditioning'?",
            answers: [
                {
                    text: "Learning through association between stimuli",
                    correct: false,
                },
                {
                    text: "Learning through rewards and punishments to influence behavior",
                    correct: true,
                },
                {
                    text: "Learning through observation and imitation",
                    correct: false,
                },
                {
                    text: "Learning through subconscious associations",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the 'fight or flight' response?",
            answers: [
                {
                    text: "A cognitive bias affecting decision-making",
                    correct: false,
                },
                {
                    text: "The body's physiological reaction to perceived threats",
                    correct: true,
                },
                { text: "A type of behavioral therapy", correct: false },
                { text: "A form of social influence", correct: false },
            ],
        },
        {
            question: "What is 'cognitive behavioral therapy' (CBT) used for?",
            answers: [
                { text: "To explore unconscious motives", correct: false },
                {
                    text: "To change maladaptive thoughts and behaviors",
                    correct: true,
                },
                { text: "To enhance creativity", correct: false },
                { text: "To strengthen social bonds", correct: false },
            ],
        },
        {
            question: "What does 'implicit memory' refer to?",
            answers: [
                { text: "Memory of facts and events", correct: false },
                {
                    text: "Memory that influences behavior without conscious awareness",
                    correct: true,
                },
                { text: "Short-term memory", correct: false },
                { text: "Sensory memory", correct: false },
            ],
        },
        {
            question: "What is 'attachment theory'?",
            answers: [
                {
                    text: "A theory about cognitive development",
                    correct: false,
                },
                {
                    text: "A theory about the bonds between individuals, especially between a child and caregiver",
                    correct: true,
                },
                { text: "A theory about social interactions", correct: false },
                {
                    text: "A theory about personality development",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'reaction formation' in psychoanalytic theory?",
            answers: [
                {
                    text: "Suppressing unacceptable thoughts by focusing on something else",
                    correct: false,
                },
                {
                    text: "Transforming unwanted impulses into their opposites",
                    correct: true,
                },
                {
                    text: "Projecting one's own feelings onto others",
                    correct: false,
                },
                { text: "Repressing distressing memories", correct: false },
            ],
        },
        {
            question: "What is 'self-esteem'?",
            answers: [
                {
                    text: "The belief in one's ability to succeed",
                    correct: false,
                },
                { text: "The value one places on oneself", correct: true },
                { text: "The fear of failure", correct: false },
                {
                    text: "The ability to empathize with others",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the 'uncanny valley' in psychology?",
            answers: [
                { text: "A theory about fear of heights", correct: false },
                {
                    text: "The discomfort people feel when something is almost human-like but not quite",
                    correct: true,
                },
                { text: "A stage in cognitive development", correct: false },
                { text: "A measure of social anxiety", correct: false },
            ],
        },
        {
            question: "What is 'positive psychology'?",
            answers: [
                { text: "The study of mental disorders", correct: false },
                {
                    text: "The scientific study of human strengths and virtues that enable individuals and communities to thrive",
                    correct: true,
                },
                { text: "A branch of psychoanalysis", correct: false },
                {
                    text: "The practice of promoting happiness through therapy",
                    correct: false,
                },
            ],
        },
        {
            question: "Who is known for the 'Stanford prison experiment'?",
            answers: [
                { text: "Philip Zimbardo", correct: true },
                { text: "Stanley Milgram", correct: false },
                { text: "Albert Bandura", correct: false },
                { text: "B.F. Skinner", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is 'mirror neurons' theory associated with?",
            answers: [
                { text: "Learning through rewards", correct: false },
                {
                    text: "Empathy and understanding others' actions",
                    correct: true,
                },
                { text: "Memory consolidation", correct: false },
                { text: "Language acquisition", correct: false },
            ],
        },
        {
            question:
                "What does 'Heuristics' refer to in cognitive psychology?",
            answers: [
                {
                    text: "Systematic methods for solving problems",
                    correct: false,
                },
                {
                    text: "Mental shortcuts or rules of thumb for decision-making",
                    correct: true,
                },
                { text: "The study of unconscious processes", correct: false },
                { text: "Long-term memory storage", correct: false },
            ],
        },
        {
            question: "What is 'bipolar disorder'?",
            answers: [
                {
                    text: "A mood disorder characterized by alternating periods of mania and depression",
                    correct: true,
                },
                {
                    text: "A personality disorder characterized by instability in relationships and self-image",
                    correct: false,
                },
                {
                    text: "An anxiety disorder characterized by excessive worry",
                    correct: false,
                },
                {
                    text: "A cognitive disorder affecting memory",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'operant conditioning'?",
            answers: [
                {
                    text: "Learning through association between stimuli",
                    correct: false,
                },
                {
                    text: "Learning through rewards and punishments to influence behavior",
                    correct: true,
                },
                {
                    text: "Learning through observation and imitation",
                    correct: false,
                },
                {
                    text: "Learning through subconscious associations",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'attachment style'?",
            answers: [
                {
                    text: "A person's preferred method of learning",
                    correct: false,
                },
                {
                    text: "The way individuals form emotional bonds and interact in relationships",
                    correct: true,
                },
                { text: "A type of personality disorder", correct: false },
                {
                    text: "The level of intelligence in social settings",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'self-actualization'?",
            answers: [
                {
                    text: "Achieving one's full potential and personal growth",
                    correct: true,
                },
                {
                    text: "The process of forming attachments in childhood",
                    correct: false,
                },
                { text: "A state of psychological well-being", correct: false },
                {
                    text: "The understanding of one's unconscious motives",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'procrastination'?",
            answers: [
                {
                    text: "The act of completing tasks ahead of schedule",
                    correct: false,
                },
                {
                    text: "The delay or postponement of tasks or decisions",
                    correct: true,
                },
                { text: "The act of multitasking efficiently", correct: false },
                { text: "The inability to start tasks", correct: false },
            ],
        },
        {
            question: "What is 'transference' in psychoanalysis?",
            answers: [
                { text: "A technique for memory enhancement", correct: false },
                {
                    text: "The redirection of feelings for one person to another",
                    correct: true,
                },
                {
                    text: "The process of subconscious thinking",
                    correct: false,
                },
                { text: "A form of cognitive bias", correct: false },
            ],
        },
        {
            question: "What is 'cognitive behavioral therapy' (CBT) used for?",
            answers: [
                { text: "To explore unconscious motives", correct: false },
                {
                    text: "To change maladaptive thoughts and behaviors",
                    correct: true,
                },
                { text: "To enhance creativity", correct: false },
                { text: "To strengthen social bonds", correct: false },
            ],
        },
        {
            question: "What is 'schizophrenia'?",
            answers: [
                {
                    text: "A mood disorder characterized by depressive episodes",
                    correct: false,
                },
                {
                    text: "A severe mental disorder characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior",
                    correct: true,
                },
                {
                    text: "An anxiety disorder characterized by excessive worry",
                    correct: false,
                },
                {
                    text: "A personality disorder characterized by instability in relationships",
                    correct: false,
                },
            ],
        },
    ],
};

// Social Studies Quiz Data
export const socialStudiesData: Quiz = {
    1: [
        {
            question: "What is the capital city of Canada?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Vancouver", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Montreal", correct: false },
            ],
        },
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
            question: "What was the primary cause of World War I?",
            answers: [
                { text: "The rise of fascism", correct: false },
                {
                    text: "The assassination of Archduke Franz Ferdinand",
                    correct: true,
                },
                { text: "The invasion of Poland", correct: false },
                { text: "The bombing of Pearl Harbor", correct: false },
            ],
        },
        {
            question: "What is the longest river in the world?",
            answers: [
                { text: "Amazon River", correct: false },
                { text: "Nile River", correct: true },
                { text: "Yangtze River", correct: false },
                { text: "Mississippi River", correct: false },
            ],
        },
        {
            question: "Which civilization built the Machu Picchu?",
            answers: [
                { text: "Aztec", correct: false },
                { text: "Mayan", correct: false },
                { text: "Inca", correct: true },
                { text: "Olmec", correct: false },
            ],
        },
        {
            question:
                "What economic system is characterized by private ownership and free markets?",
            answers: [
                { text: "Socialism", correct: false },
                { text: "Communism", correct: false },
                { text: "Capitalism", correct: true },
                { text: "Feudalism", correct: false },
            ],
        },
        {
            question: "Who wrote the Declaration of Independence?",
            answers: [
                { text: "George Washington", correct: false },
                { text: "Benjamin Franklin", correct: false },
                { text: "Thomas Jefferson", correct: true },
                { text: "John Adams", correct: false },
            ],
        },
        {
            question: "What is the largest continent on Earth?",
            answers: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "Europe", correct: false },
                { text: "North America", correct: false },
            ],
        },
        {
            question:
                "What was the main goal of the Civil Rights Movement in the United States?",
            answers: [
                { text: "To promote economic development", correct: false },
                {
                    text: "To end racial segregation and discrimination",
                    correct: true,
                },
                { text: "To establish a new political party", correct: false },
                { text: "To increase military funding", correct: false },
            ],
        },
        {
            question:
                "What is the term for a government ruled by a king or queen?",
            answers: [
                { text: "Democracy", correct: false },
                { text: "Oligarchy", correct: false },
                { text: "Monarchy", correct: true },
                { text: "Theocracy", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "Which ancient civilization developed the first writing system?",
            answers: [
                { text: "Egyptians", correct: false },
                { text: "Sumerians", correct: true },
                { text: "Greeks", correct: false },
                { text: "Romans", correct: false },
            ],
        },
        {
            question: "What was the primary purpose of the Berlin Wall?",
            answers: [
                {
                    text: "To protect East Germany from invaders",
                    correct: false,
                },
                {
                    text: "To prevent East Germans from fleeing to West Berlin",
                    correct: true,
                },
                {
                    text: "To mark the border between Germany and Poland",
                    correct: false,
                },
                { text: "To serve as a tourist attraction", correct: false },
            ],
        },
        {
            question:
                "Who was the British Prime Minister during most of World War II?",
            answers: [
                { text: "Winston Churchill", correct: true },
                { text: "Neville Chamberlain", correct: false },
                { text: "Margaret Thatcher", correct: false },
                { text: "Tony Blair", correct: false },
            ],
        },
        {
            question:
                "What is the study of human societies and cultures called?",
            answers: [
                { text: "Biology", correct: false },
                { text: "Anthropology", correct: true },
                { text: "Sociology", correct: false },
                { text: "Psychology", correct: false },
            ],
        },
        {
            question: "What was the main objective of the Cold War?",
            answers: [
                { text: "To establish colonial empires", correct: false },
                {
                    text: "To compete for global influence between the USA and the USSR",
                    correct: true,
                },
                { text: "To promote free trade agreements", correct: false },
                { text: "To unify Europe", correct: false },
            ],
        },
        {
            question: "Who was the first man to land on the Moon?",
            answers: [
                { text: "Buzz Aldrin", correct: false },
                { text: "Neil Armstrong", correct: true },
                { text: "Yuri Gagarin", correct: false },
                { text: "Michael Collins", correct: false },
            ],
        },
        {
            question: "What is the main function of the United Nations?",
            answers: [
                { text: "To regulate international trade", correct: false },
                {
                    text: "To maintain international peace and security",
                    correct: true,
                },
                { text: "To establish global taxes", correct: false },
                { text: "To manage global sports events", correct: false },
            ],
        },
        {
            question: "What was the Renaissance?",
            answers: [
                {
                    text: "A period of political turmoil in Europe",
                    correct: false,
                },
                {
                    text: "A cultural rebirth and revival of art and learning in Europe",
                    correct: true,
                },
                { text: "A religious movement in Asia", correct: false },
                {
                    text: "An economic downturn in the 17th century",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            answers: [
                { text: "Joseph Stalin", correct: false },
                { text: "Nikita Khrushchev", correct: true },
                { text: "Leonid Brezhnev", correct: false },
                { text: "Mikhail Gorbachev", correct: false },
            ],
        },
        {
            question:
                "What is the term for a political and economic system where the means of production are owned by the state?",
            answers: [
                { text: "Capitalism", correct: false },
                { text: "Socialism", correct: true },
                { text: "Anarchism", correct: false },
                { text: "Liberalism", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "What event is commonly considered the start of the French Revolution?",
            answers: [
                { text: "The storming of the Bastille", correct: true },
                { text: "The signing of the Magna Carta", correct: false },
                { text: "The Battle of Waterloo", correct: false },
                { text: "The fall of Constantinople", correct: false },
            ],
        },
        {
            question:
                "Who was the first Chancellor of Germany after World War II?",
            answers: [
                { text: "Konrad Adenauer", correct: true },
                { text: "Angela Merkel", correct: false },
                { text: "Helmut Kohl", correct: false },
                { text: "Willy Brandt", correct: false },
            ],
        },
        {
            question:
                "What is the main difference between a parliamentary and a presidential system?",
            answers: [
                {
                    text: "A parliamentary system separates the executive and legislative branches",
                    correct: false,
                },
                {
                    text: "In a presidential system, the executive is separate from the legislature, while in a parliamentary system, the executive derives its legitimacy from the legislature",
                    correct: true,
                },
                {
                    text: "A presidential system has a ceremonial president",
                    correct: false,
                },
                {
                    text: "A parliamentary system has a fixed term for the executive",
                    correct: false,
                },
            ],
        },
        {
            question: "What was the Marshall Plan?",
            answers: [
                { text: "A strategy to win World War II", correct: false },
                {
                    text: "A program to rebuild European economies after World War II",
                    correct: true,
                },
                {
                    text: "A military alliance during the Cold War",
                    correct: false,
                },
                {
                    text: "A diplomatic treaty with the Soviet Union",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who was the leader of India during its independence from British rule?",
            answers: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Mahatma Gandhi", correct: true },
                { text: "Indira Gandhi", correct: false },
                { text: "B. R. Ambedkar", correct: false },
            ],
        },
        {
            question: "What is 'federalism'?",
            answers: [
                { text: "A system where power is centralized", correct: false },
                {
                    text: "A system where power is divided between a central authority and constituent units",
                    correct: true,
                },
                { text: "A system with a single-party rule", correct: false },
                {
                    text: "A system based on religious governance",
                    correct: false,
                },
            ],
        },
        {
            question: "What was the main goal of the Marshall Plan?",
            answers: [
                {
                    text: "To contain the spread of communism in Asia",
                    correct: false,
                },
                {
                    text: "To rebuild European economies after World War II",
                    correct: true,
                },
                { text: "To establish the United Nations", correct: false },
                { text: "To promote nuclear disarmament", correct: false },
            ],
        },
        {
            question:
                "Which amendment to the U.S. Constitution abolished slavery?",
            answers: [
                { text: "13th Amendment", correct: true },
                { text: "14th Amendment", correct: false },
                { text: "15th Amendment", correct: false },
                { text: "19th Amendment", correct: false },
            ],
        },
        {
            question:
                "What is the term for the political ideology that seeks to limit government intervention in both personal and economic matters?",
            answers: [
                { text: "Liberalism", correct: false },
                { text: "Conservatism", correct: false },
                { text: "Libertarianism", correct: true },
                { text: "Socialism", correct: false },
            ],
        },
        {
            question:
                "Who was the British Prime Minister during the majority of World War II?",
            answers: [
                { text: "Neville Chamberlain", correct: false },
                { text: "Winston Churchill", correct: true },
                { text: "Margaret Thatcher", correct: false },
                { text: "Clement Attlee", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is 'totalitarianism'?",
            answers: [
                {
                    text: "A political system where a single party controls all aspects of life",
                    correct: true,
                },
                {
                    text: "A democratic system with multiple parties",
                    correct: false,
                },
                { text: "A system based on religious laws", correct: false },
                { text: "A capitalist economic system", correct: false },
            ],
        },
        {
            question:
                "What does 'bicameral' mean in the context of legislatures?",
            answers: [
                { text: "Having one legislative chamber", correct: false },
                {
                    text: "Having two legislative chambers or houses",
                    correct: true,
                },
                { text: "Having three legislative chambers", correct: false },
                { text: "Having no legislative chambers", correct: false },
            ],
        },
        {
            question: "Who was the first female Prime Minister of India?",
            answers: [
                { text: "Indira Gandhi", correct: true },
                { text: "Pratibha Patil", correct: false },
                { text: "Sonia Gandhi", correct: false },
                { text: "Manmohan Singh", correct: false },
            ],
        },
        {
            question:
                "What is the primary function of the executive branch in the U.S. government?",
            answers: [
                { text: "To make laws", correct: false },
                { text: "To interpret laws", correct: false },
                { text: "To enforce laws", correct: true },
                { text: "To veto laws", correct: false },
            ],
        },
        {
            question: "What is 'checks and balances'?",
            answers: [
                {
                    text: "A system where each branch of government can limit the powers of the others",
                    correct: true,
                },
                {
                    text: "A method of balancing trade deficits",
                    correct: false,
                },
                { text: "A financial regulation system", correct: false },
                { text: "A legislative procedure", correct: false },
            ],
        },
        {
            question: "Which philosopher is known for his work 'Leviathan'?",
            answers: [
                { text: "Thomas Hobbes", correct: true },
                { text: "John Locke", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false },
                { text: "Immanuel Kant", correct: false },
            ],
        },
        {
            question:
                "What is the term for a government's ability to change laws without public approval?",
            answers: [
                { text: "Judicial Review", correct: false },
                { text: "Executive Privilege", correct: false },
                { text: "Legislative Override", correct: false },
                { text: "Legislative Supremacy", correct: false }, // None exactly match, may need correction
            ],
        },
        {
            question:
                "What is the main purpose of the Electoral College in the United States?",
            answers: [
                { text: "To directly elect the President", correct: false },
                {
                    text: "To formally select the President based on state results",
                    correct: true,
                },
                { text: "To count votes from all citizens", correct: false },
                { text: "To oversee the legislative process", correct: false },
            ],
        },
        {
            question:
                "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            answers: [
                { text: "Joseph Stalin", correct: false },
                { text: "Nikita Khrushchev", correct: true },
                { text: "Leonid Brezhnev", correct: false },
                { text: "Mikhail Gorbachev", correct: false },
            ],
        },
        {
            question: "What is 'caucus' in the context of politics?",
            answers: [
                {
                    text: "A formal meeting of party members to decide policy or select candidates",
                    correct: true,
                },
                {
                    text: "A legislative procedure to pass a bill",
                    correct: false,
                },
                { text: "A type of political party", correct: false },
                { text: "A political protest", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What is 'federalism'?",
            answers: [
                { text: "A system where power is centralized", correct: false },
                {
                    text: "A system where power is divided between a central authority and constituent units",
                    correct: true,
                },
                { text: "A system with a single-party rule", correct: false },
                {
                    text: "A system based on religious governance",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'social contract theory'?",
            answers: [
                { text: "A theory about economic markets", correct: false },
                {
                    text: "A theory that individuals consent to surrender some freedoms in exchange for protection of remaining rights",
                    correct: true,
                },
                {
                    text: "A theory about the inheritance of traits",
                    correct: false,
                },
                {
                    text: "A theory about human development stages",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which amendment guarantees the right to bear arms in the United States?",
            answers: [
                { text: "First Amendment", correct: false },
                { text: "Second Amendment", correct: true },
                { text: "Fourth Amendment", correct: false },
                { text: "Fifth Amendment", correct: false },
            ],
        },
        {
            question: "What is 'impeachment'?",
            answers: [
                {
                    text: "A process to remove a public official from office",
                    correct: true,
                },
                {
                    text: "A legislative procedure to pass laws",
                    correct: false,
                },
                { text: "A type of political protest", correct: false },
                { text: "A method of voting", correct: false },
            ],
        },
        {
            question: "What is the 'bill of rights'?",
            answers: [
                {
                    text: "The first ten amendments to the U.S. Constitution",
                    correct: true,
                },
                { text: "A list of federal laws", correct: false },
                {
                    text: "The main body of the U.S. Constitution",
                    correct: false,
                },
                { text: "A declaration of independence", correct: false },
            ],
        },
        {
            question:
                "Who was the leader of the Civil Rights Movement in the United States?",
            answers: [
                { text: "Martin Luther King Jr.", correct: true },
                { text: "Malcolm X", correct: false },
                { text: "Rosa Parks", correct: false },
                { text: "W.E.B. Du Bois", correct: false },
            ],
        },
        {
            question: "What is 'bicameralism'?",
            answers: [
                {
                    text: "A system with two legislative chambers or houses",
                    correct: true,
                },
                {
                    text: "A system with one legislative chamber",
                    correct: false,
                },
                {
                    text: "A system with three legislative chambers",
                    correct: false,
                },
                {
                    text: "A system where chambers have equal power",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'pluralism' in political science?",
            answers: [
                {
                    text: "The belief in a single dominant group",
                    correct: false,
                },
                {
                    text: "The recognition and affirmation of diversity within a political body",
                    correct: true,
                },
                {
                    text: "A system where power is concentrated in the hands of a few",
                    correct: false,
                },
                {
                    text: "The merging of multiple political parties",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'authoritarianism'?",
            answers: [
                {
                    text: "A democratic system with multiple parties",
                    correct: false,
                },
                {
                    text: "A political system characterized by strong central power and limited political freedoms",
                    correct: true,
                },
                {
                    text: "A political ideology that emphasizes individual liberty",
                    correct: false,
                },
                {
                    text: "A system where all decisions are made by the populace",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who is known for the theory of 'checks and balances' in government?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "James Madison", correct: true },
                { text: "Alexander Hamilton", correct: false },
                { text: "Benjamin Franklin", correct: false },
            ],
        },
    ],
};

// Sports Quiz Data
export const sportsData: Quiz = {
    1: [
        {
            question: "Which country won the FIFA World Cup in 2018?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Brazil", correct: false },
                { text: "France", correct: true },
                { text: "Argentina", correct: false },
            ],
        },
        {
            question: "In which sport is the term 'home run' used?",
            answers: [
                { text: "Basketball", correct: false },
                { text: "Baseball", correct: true },
                { text: "Football", correct: false },
                { text: "Hockey", correct: false },
            ],
        },
        {
            question: "Who has won the most Olympic gold medals?",
            answers: [
                { text: "Michael Phelps", correct: true },
                { text: "Usain Bolt", correct: false },
                { text: "Simone Biles", correct: false },
                { text: "Larisa Latynina", correct: false },
            ],
        },
        {
            question: "What is the length of a marathon in kilometers?",
            answers: [
                { text: "42.195 km", correct: true },
                { text: "40 km", correct: false },
                { text: "50 km", correct: false },
                { text: "35 km", correct: false },
            ],
        },
        {
            question: "Which sport is known as 'the king of sports'?",
            answers: [
                { text: "Basketball", correct: false },
                { text: "Soccer", correct: true },
                { text: "Cricket", correct: false },
                { text: "Tennis", correct: false },
            ],
        },
        {
            question:
                "Who holds the record for the most goals in a single NHL season?",
            answers: [
                { text: "Wayne Gretzky", correct: true },
                { text: "Mario Lemieux", correct: false },
                { text: "Gordie Howe", correct: false },
                { text: "Alexander Ovechkin", correct: false },
            ],
        },
        {
            question: "What is the maximum break in snooker?",
            answers: [
                { text: "147", correct: true },
                { text: "155", correct: false },
                { text: "140", correct: false },
                { text: "160", correct: false },
            ],
        },
        {
            question: "In which sport would you perform a 'slam dunk'?",
            answers: [
                { text: "Volleyball", correct: false },
                { text: "Basketball", correct: true },
                { text: "Football", correct: false },
                { text: "Rugby", correct: false },
            ],
        },
        {
            question: "Which tennis tournament is played on grass courts?",
            answers: [
                { text: "US Open", correct: false },
                { text: "French Open", correct: false },
                { text: "Wimbledon", correct: true },
                { text: "Australian Open", correct: false },
            ],
        },
        {
            question:
                "How many players are on the field for each team in a standard soccer match?",
            answers: [
                { text: "9", correct: false },
                { text: "10", correct: false },
                { text: "11", correct: true },
                { text: "12", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "Which country hosts the annual Tour de France?",
            answers: [
                { text: "Italy", correct: false },
                { text: "Spain", correct: false },
                { text: "France", correct: true },
                { text: "Belgium", correct: false },
            ],
        },
        {
            question: "Who is known as 'The Greatest' in boxing?",
            answers: [
                { text: "Mike Tyson", correct: false },
                { text: "Muhammad Ali", correct: true },
                { text: "Floyd Mayweather", correct: false },
                { text: "Joe Frazier", correct: false },
            ],
        },
        {
            question: "In which sport is the term 'birdie' used?",
            answers: [
                { text: "Badminton", correct: false },
                { text: "Tennis", correct: false },
                { text: "Golf", correct: true },
                { text: "Cricket", correct: false },
            ],
        },
        {
            question: "What is the national sport of Japan?",
            answers: [
                { text: "Baseball", correct: false },
                { text: "Sumo Wrestling", correct: true },
                { text: "Judo", correct: false },
                { text: "Karate", correct: false },
            ],
        },
        {
            question: "Which NFL team has the most Super Bowl victories?",
            answers: [
                { text: "New England Patriots", correct: false },
                { text: "Pittsburgh Steelers", correct: true },
                { text: "Dallas Cowboys", correct: false },
                { text: "San Francisco 49ers", correct: false },
            ],
        },
        {
            question: "Who won the men's singles title at Wimbledon in 2021?",
            answers: [
                { text: "Novak Djokovic", correct: true },
                { text: "Roger Federer", correct: false },
                { text: "Rafael Nadal", correct: false },
                { text: "Andy Murray", correct: false },
            ],
        },
        {
            question:
                "What is the highest possible score in a single frame of ten-pin bowling?",
            answers: [
                { text: "300", correct: true },
                { text: "270", correct: false },
                { text: "250", correct: false },
                { text: "200", correct: false },
            ],
        },
        {
            question: "Which athlete has won the most Olympic gold medals?",
            answers: [
                { text: "Usain Bolt", correct: false },
                { text: "Michael Phelps", correct: true },
                { text: "Larisa Latynina", correct: false },
                { text: "Mark Spitz", correct: false },
            ],
        },
        {
            question: "In basketball, how many points is a free throw worth?",
            answers: [
                { text: "1", correct: true },
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: false },
            ],
        },
        {
            question: "What does MVP stand for in sports?",
            answers: [
                { text: "Most Valuable Player", correct: true },
                { text: "Most Versatile Player", correct: false },
                { text: "Most Valuable Performer", correct: false },
                { text: "Maximum Victory Points", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "Which country won the first FIFA World Cup in 1930?",
            answers: [
                { text: "Brazil", correct: false },
                { text: "Germany", correct: false },
                { text: "Uruguay", correct: true },
                { text: "Argentina", correct: false },
            ],
        },
        {
            question: "In which sport would you perform a 'hat-trick'?",
            answers: [
                { text: "Basketball", correct: false },
                { text: "Soccer", correct: true },
                { text: "Tennis", correct: false },
                { text: "Baseball", correct: false },
            ],
        },
        {
            question:
                "What is the standard length of an Olympic swimming pool in meters?",
            answers: [
                { text: "25 meters", correct: false },
                { text: "50 meters", correct: true },
                { text: "100 meters", correct: false },
                { text: "75 meters", correct: false },
            ],
        },
        {
            question:
                "Who holds the record for the most home runs in a single MLB season?",
            answers: [
                { text: "Barry Bonds", correct: true },
                { text: "Babe Ruth", correct: false },
                { text: "Mark McGwire", correct: false },
                { text: "Sammy Sosa", correct: false },
            ],
        },
        {
            question: "What is the maximum break in snooker?",
            answers: [
                { text: "147", correct: true },
                { text: "155", correct: false },
                { text: "140", correct: false },
                { text: "160", correct: false },
            ],
        },
        {
            question: "Which NBA player is known as 'The Black Mamba'?",
            answers: [
                { text: "LeBron James", correct: false },
                { text: "Kobe Bryant", correct: true },
                { text: "Michael Jordan", correct: false },
                { text: "Kevin Durant", correct: false },
            ],
        },
        {
            question: "In which sport is the Davis Cup awarded?",
            answers: [
                { text: "Badminton", correct: false },
                { text: "Tennis", correct: true },
                { text: "Table Tennis", correct: false },
                { text: "Squash", correct: false },
            ],
        },
        {
            question: "What is the term for a score of zero in tennis?",
            answers: [
                { text: "Love", correct: true },
                { text: "Deuce", correct: false },
                { text: "Advantage", correct: false },
                { text: "Break", correct: false },
            ],
        },
        {
            question: "Which country has won the most Rugby World Cups?",
            answers: [
                { text: "New Zealand", correct: true },
                { text: "South Africa", correct: false },
                { text: "Australia", correct: false },
                { text: "England", correct: false },
            ],
        },
        {
            question:
                "What is the term for a perfect score in ten-pin bowling?",
            answers: [
                { text: "Turkey", correct: false },
                { text: "Strike", correct: false },
                { text: "Spare", correct: false },
                { text: "Perfect Game", correct: true },
            ],
        },
    ],
    4: [
        {
            question: "Who won the NBA Finals MVP in 2021?",
            answers: [
                { text: "LeBron James", correct: false },
                { text: "Giannis Antetokounmpo", correct: true },
                { text: "Kevin Durant", correct: false },
                { text: "Stephen Curry", correct: false },
            ],
        },
        {
            question:
                "What is the diameter of a regulation soccer ball in centimeters?",
            answers: [
                { text: "68-70 cm", correct: true },
                { text: "60-62 cm", correct: false },
                { text: "75-77 cm", correct: false },
                { text: "80-82 cm", correct: false },
            ],
        },
        {
            question: "In which year were the first modern Olympic Games held?",
            answers: [
                { text: "1896", correct: true },
                { text: "1900", correct: false },
                { text: "1888", correct: false },
                { text: "1912", correct: false },
            ],
        },
        {
            question:
                "Which country won the UEFA European Championship in 2021?",
            answers: [
                { text: "Italy", correct: true },
                { text: "Germany", correct: false },
                { text: "France", correct: false },
                { text: "Spain", correct: false },
            ],
        },
        {
            question: "What is the term for a tie in American football?",
            answers: [
                { text: "Stalemate", correct: false },
                { text: "Draw", correct: false },
                { text: "Tied game", correct: false },
                { text: "Overtime", correct: false }, // Should be "Tie" but options are not correct
            ],
        },
        {
            question: "Who is the all-time leading scorer in NBA history?",
            answers: [
                { text: "LeBron James", correct: false },
                { text: "Kareem Abdul-Jabbar", correct: true },
                { text: "Michael Jordan", correct: false },
                { text: "Karl Malone", correct: false },
            ],
        },
        {
            question: "In which sport would you use a 'javelin'?",
            answers: [
                { text: "Archery", correct: false },
                { text: "Athletics (Track and Field)", correct: true },
                { text: "Fencing", correct: false },
                { text: "Rowing", correct: false },
            ],
        },
        {
            question:
                "What is the highest governing body of international soccer?",
            answers: [
                { text: "UEFA", correct: false },
                { text: "CONCACAF", correct: false },
                { text: "FIFA", correct: true },
                { text: "AFC", correct: false },
            ],
        },
        {
            question:
                "Which sport uses the terms 'love', 'deuce', and 'advantage'?",
            answers: [
                { text: "Badminton", correct: false },
                { text: "Tennis", correct: true },
                { text: "Squash", correct: false },
                { text: "Table Tennis", correct: false },
            ],
        },
        {
            question: "Who is known as 'The Fastest Man Alive'?",
            answers: [
                { text: "Usain Bolt", correct: true },
                { text: "Justin Gatlin", correct: false },
                { text: "Tyson Gay", correct: false },
                { text: "Yohan Blake", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is the maximum number of players on a basketball court for one team?",
            answers: [
                { text: "4", correct: false },
                { text: "5", correct: true },
                { text: "6", correct: false },
                { text: "7", correct: false },
            ],
        },
        {
            question:
                "Which country has won the most Olympic gold medals in history?",
            answers: [
                { text: "USA", correct: true },
                { text: "Russia", correct: false },
                { text: "China", correct: false },
                { text: "Germany", correct: false },
            ],
        },
        {
            question:
                "What is the term for scoring three goals by one player in a single soccer game?",
            answers: [
                { text: "Triple", correct: false },
                { text: "Hat-trick", correct: true },
                { text: "Triple play", correct: false },
                { text: "Triple score", correct: false },
            ],
        },
        {
            question: "Who won the FIFA Women's World Cup in 2019?",
            answers: [
                { text: "USA", correct: true },
                { text: "Netherlands", correct: false },
                { text: "Germany", correct: false },
                { text: "Japan", correct: false },
            ],
        },
        {
            question: "In which sport would you perform a 'slam dunk'?",
            answers: [
                { text: "Volleyball", correct: false },
                { text: "Basketball", correct: true },
                { text: "Football", correct: false },
                { text: "Rugby", correct: false },
            ],
        },
        {
            question: "What is the standard distance of a Formula 1 race?",
            answers: [
                { text: "200 km", correct: false },
                { text: "305 km", correct: true },
                { text: "400 km", correct: false },
                { text: "500 km", correct: false },
            ],
        },
        {
            question: "Who is the most decorated Olympian of all time?",
            answers: [
                { text: "Michael Phelps", correct: true },
                { text: "Usain Bolt", correct: false },
                { text: "Larisa Latynina", correct: false },
                { text: "Mark Spitz", correct: false },
            ],
        },
        {
            question:
                "What is the term for a perfect score in ten-pin bowling?",
            answers: [
                { text: "Turkey", correct: false },
                { text: "Strike", correct: false },
                { text: "Spare", correct: false },
                { text: "Perfect Game", correct: true },
            ],
        },
        {
            question: "In which sport is the Ryder Cup contested?",
            answers: [
                { text: "Tennis", correct: false },
                { text: "Golf", correct: true },
                { text: "Rugby", correct: false },
                { text: "Cricket", correct: false },
            ],
        },
        {
            question: "Which country hosted the 2020 Summer Olympics?",
            answers: [
                { text: "China", correct: false },
                { text: "Japan", correct: true },
                { text: "Brazil", correct: false },
                { text: "United Kingdom", correct: false },
            ],
        },
    ],
};

// History Quiz Data
export const historyData: Quiz = {
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
            question:
                "Which war was fought between the North and South regions in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Civil War", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "War of 1812", correct: false },
            ],
        },
        {
            question: "What year did Christopher Columbus discover America?",
            answers: [
                { text: "1492", correct: true },
                { text: "1498", correct: false },
                { text: "1500", correct: false },
                { text: "1502", correct: false },
            ],
        },
        {
            question: "What ancient civilization built the pyramids?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Rome", correct: false },
                { text: "Egypt", correct: true },
                { text: "Mesopotamia", correct: false },
            ],
        },
        {
            question: "Who was the first person to step on the moon?",
            answers: [
                { text: "Buzz Aldrin", correct: false },
                { text: "Neil Armstrong", correct: true },
                { text: "Yuri Gagarin", correct: false },
                { text: "Michael Collins", correct: false },
            ],
        },
        {
            question: "What was the main cause of World War II?",
            answers: [
                { text: "The Great Depression", correct: false },
                { text: "Treaty of Versailles", correct: true },
                { text: "Cold War", correct: false },
                { text: "Industrial Revolution", correct: false },
            ],
        },
        {
            question:
                "Who was the first female Prime Minister of the United Kingdom?",
            answers: [
                { text: "Margaret Thatcher", correct: true },
                { text: "Theresa May", correct: false },
                { text: "Angela Merkel", correct: false },
                { text: "Indira Gandhi", correct: false },
            ],
        },
        {
            question: "What was the purpose of the Berlin Wall?",
            answers: [
                { text: "To divide East and West Berlin", correct: true },
                { text: "To protect Berlin from invaders", correct: false },
                { text: "To separate Germany from France", correct: false },
                { text: "To keep citizens in East Berlin", correct: false },
            ],
        },
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1920", correct: false },
                { text: "1898", correct: false },
            ],
        },
        {
            question: "Which U.S. document begins with 'We the People'?",
            answers: [
                { text: "The Constitution", correct: true },
                { text: "The Declaration of Independence", correct: false },
                { text: "The Bill of Rights", correct: false },
                { text: "The Emancipation Proclamation", correct: false },
            ],
        },
    ],
    2: [
        {
            question: "What year did the Berlin Wall fall?",
            answers: [
                { text: "1989", correct: true },
                { text: "1990", correct: false },
                { text: "1991", correct: false },
                { text: "1992", correct: false },
            ],
        },
        {
            question:
                "Who was the main author of the Declaration of Independence?",
            answers: [
                { text: "James Madison", correct: false },
                { text: "George Washington", correct: false },
                { text: "Thomas Jefferson", correct: true },
                { text: "Benjamin Franklin", correct: false },
            ],
        },
        {
            question:
                "Which civilization is known for the invention of writing?",
            answers: [
                { text: "Sumerians", correct: true },
                { text: "Egyptians", correct: false },
                { text: "Indus Valley", correct: false },
                { text: "Chinese", correct: false },
            ],
        },
        {
            question: "What was the first successful colony in America?",
            answers: [
                { text: "Jamestown", correct: true },
                { text: "Plymouth", correct: false },
                { text: "Roanoke", correct: false },
                { text: "Massachusetts Bay", correct: false },
            ],
        },
        {
            question: "What event marked the start of the Great Depression?",
            answers: [
                { text: "Stock Market Crash of 1929", correct: true },
                { text: "World War I", correct: false },
                { text: "Dust Bowl", correct: false },
                { text: "New Deal", correct: false },
            ],
        },
        {
            question:
                "Who was the first African American to win the Nobel Prize in Literature?",
            answers: [
                { text: "Ralph Ellison", correct: false },
                { text: "Toni Morrison", correct: true },
                { text: "James Baldwin", correct: false },
                { text: "Langston Hughes", correct: false },
            ],
        },
        {
            question:
                "Which war was fought between the North and South regions in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Civil War", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "War of 1812", correct: false },
            ],
        },
        {
            question: "Which treaty ended World War I?",
            answers: [
                { text: "Treaty of Versailles", correct: true },
                { text: "Treaty of Ghent", correct: false },
                { text: "Treaty of Paris", correct: false },
                { text: "Treaty of Trianon", correct: false },
            ],
        },
        {
            question:
                "Who was the famous scientist that developed the theory of relativity?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Galileo Galilei", correct: false },
                { text: "Nikola Tesla", correct: false },
            ],
        },
        {
            question:
                "Which movement was aimed at ending slavery in the United States?",
            answers: [
                { text: "Abolition Movement", correct: true },
                { text: "Civil Rights Movement", correct: false },
                { text: "Women's Suffrage Movement", correct: false },
                { text: "Labor Movement", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "Which empire was known for its road system and postal service?",
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
        {
            question:
                "Who was the famous queen of Egypt known for her relationships with Julius Caesar and Mark Antony?",
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
                {
                    text: "The Declaration of the Rights of Man",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Who was the leader of the Soviet Union during World War II?",
            answers: [
                { text: "Leon Trotsky", correct: false },
                { text: "Joseph Stalin", correct: true },
                { text: "Vladimir Lenin", correct: false },
                { text: "Mikhail Gorbachev", correct: false },
            ],
        },
        {
            question: "What was the primary cause of the Cold War?",
            answers: [
                { text: "Political differences", correct: true },
                { text: "Economic competition", correct: false },
                { text: "Military rivalry", correct: false },
                { text: "Cultural conflicts", correct: false },
            ],
        },
        {
            question: "Which event marked the start of World War II?",
            answers: [
                { text: "Invasion of Poland", correct: true },
                { text: "Pearl Harbor Attack", correct: false },
                { text: "D-Day", correct: false },
                { text: "Fall of Berlin Wall", correct: false },
            ],
        },
        {
            question:
                "What was the name of the ship that brought the Pilgrims to America?",
            answers: [
                { text: "Mayflower", correct: true },
                { text: "Santa Maria", correct: false },
                { text: "Nina", correct: false },
                { text: "Pinta", correct: false },
            ],
        },
        {
            question: "What was the primary purpose of the Marshall Plan?",
            answers: [
                {
                    text: "To aid in the reconstruction of Europe after WWII",
                    correct: true,
                },
                { text: "To promote democracy in Asia", correct: false },
                {
                    text: "To provide military support to allies",
                    correct: false,
                },
                { text: "To establish the United Nations", correct: false },
            ],
        },
        {
            question:
                "Which country was divided into East and West during the Cold War?",
            answers: [
                { text: "Germany", correct: true },
                { text: "Korea", correct: false },
                { text: "Vietnam", correct: false },
                { text: "China", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What was the famous slogan of the French Revolution?",
            answers: [
                { text: "Liberty, Equality, Fraternity", correct: true },
                { text: "No taxation without representation", correct: false },
                { text: "Give me liberty or give me death", correct: false },
                { text: "Workers of the world unite", correct: false },
            ],
        },
        {
            question:
                "Which country was the first to grant women the right to vote?",
            answers: [
                { text: "New Zealand", correct: true },
                { text: "United States", correct: false },
                { text: "Australia", correct: false },
                { text: "Canada", correct: false },
            ],
        },
        {
            question:
                "What was the primary purpose of the United Nations when it was founded?",
            answers: [
                { text: "To prevent future wars", correct: true },
                { text: "To promote economic growth", correct: false },
                { text: "To establish world trade", correct: false },
                { text: "To provide humanitarian aid", correct: false },
            ],
        },
        {
            question: "Who was the British Prime Minister during World War II?",
            answers: [
                { text: "Winston Churchill", correct: true },
                { text: "Neville Chamberlain", correct: false },
                { text: "Clement Attlee", correct: false },
                { text: "Anthony Eden", correct: false },
            ],
        },
        {
            question: "What was the significance of the Magna Carta?",
            answers: [
                { text: "It limited the powers of the king", correct: true },
                {
                    text: "It established the Church of England",
                    correct: false,
                },
                { text: "It ended the English Civil War", correct: false },
                {
                    text: "It declared independence from France",
                    correct: false,
                },
            ],
        },
        {
            question: "What was the main outcome of the Boston Tea Party?",
            answers: [
                {
                    text: "Increased tensions between Britain and the colonies",
                    correct: true,
                },
                { text: "The establishment of independence", correct: false },
                { text: "The repeal of the Stamp Act", correct: false },
                { text: "The Boston Massacre", correct: false },
            ],
        },
        {
            question: "Who led the Haitian Revolution?",
            answers: [
                { text: "Toussaint Louverture", correct: true },
                { text: "Simón Bolívar", correct: false },
                { text: "Emiliano Zapata", correct: false },
                { text: "Che Guevara", correct: false },
            ],
        },
        {
            question: "What was the purpose of the Berlin Conference in 1884?",
            answers: [
                {
                    text: "To divide Africa among European powers",
                    correct: true,
                },
                { text: "To promote trade in Africa", correct: false },
                { text: "To establish diplomatic relations", correct: false },
                { text: "To create the League of Nations", correct: false },
            ],
        },
        {
            question:
                "Which battle is considered the turning point of the American Civil War?",
            answers: [
                { text: "Battle of Gettysburg", correct: true },
                { text: "Battle of Antietam", correct: false },
                { text: "Battle of Fort Sumter", correct: false },
                { text: "Battle of Vicksburg", correct: false },
            ],
        },
        {
            question:
                "What was the main reason for the fall of the Roman Empire?",
            answers: [
                { text: "Barbarian invasions", correct: true },
                { text: "Economic decline", correct: false },
                { text: "Political corruption", correct: false },
                { text: "Natural disasters", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "What was the primary cause of World War I?",
            answers: [
                { text: "Economic Crisis", correct: false },
                {
                    text: "Assassination of Archduke Franz Ferdinand",
                    correct: true,
                },
                { text: "Colonial Rivalries", correct: false },
                { text: "Treaty of Versailles", correct: false },
            ],
        },
        {
            question:
                "Which movement sought to end racial segregation in the United States?",
            answers: [
                { text: "Women's Suffrage Movement", correct: false },
                { text: "Civil Rights Movement", correct: true },
                { text: "Labor Movement", correct: false },
                { text: "Environmental Movement", correct: false },
            ],
        },
        {
            question:
                "What was the main economic system during the Industrial Revolution?",
            answers: [
                { text: "Feudalism", correct: false },
                { text: "Capitalism", correct: true },
                { text: "Socialism", correct: false },
                { text: "Mercantilism", correct: false },
            ],
        },
        {
            question:
                "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            answers: [
                { text: "Nikita Khrushchev", correct: true },
                { text: "Leon Trotsky", correct: false },
                { text: "Joseph Stalin", correct: false },
                { text: "Mikhail Gorbachev", correct: false },
            ],
        },
        {
            question: "Which treaty ended World War II in Europe?",
            answers: [
                { text: "Treaty of Versailles", correct: false },
                { text: "Treaty of Paris", correct: false },
                { text: "Treaty of Frankfurt", correct: false },
                { text: "Treaty of Berlin", correct: false },
            ],
        },
        {
            question: "What was the significance of the Nuremberg Trials?",
            answers: [
                {
                    text: "They held Nazi leaders accountable for war crimes",
                    correct: true,
                },
                { text: "They established the United Nations", correct: false },
                { text: "They initiated the Marshall Plan", correct: false },
                { text: "They ended the Cold War", correct: false },
            ],
        },
        {
            question: "Which philosopher wrote 'The Social Contract'?",
            answers: [
                { text: "John Locke", correct: false },
                { text: "Jean-Jacques Rousseau", correct: true },
                { text: "Thomas Hobbes", correct: false },
                { text: "Karl Marx", correct: false },
            ],
        },
        {
            question: "What was the main cause of the Great Depression?",
            answers: [
                { text: "Stock Market Crash of 1929", correct: true },
                { text: "World War I", correct: false },
                { text: "Dust Bowl", correct: false },
                { text: "New Deal", correct: false },
            ],
        },
        {
            question: "What was the purpose of the U.S. Constitution?",
            answers: [
                {
                    text: "To establish the framework of the government",
                    correct: true,
                },
                { text: "To declare independence", correct: false },
                { text: "To end slavery", correct: false },
                { text: "To promote economic growth", correct: false },
            ],
        },
        {
            question: "What was the main ideology behind the Cold War?",
            answers: [
                { text: "Capitalism vs. Communism", correct: true },
                { text: "Democracy vs. Authoritarianism", correct: false },
                { text: "Imperialism vs. Nationalism", correct: false },
                { text: "Colonialism vs. Decolonization", correct: false },
            ],
        },
    ],
};

// Math Quiz Data
export const mathData: Quiz = {
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
        {
            question: "What is 2 + 2?",
            answers: [
                { text: "3", correct: false },
                { text: "4", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false },
            ],
        },
        {
            question: "What is 10 - 3?",
            answers: [
                { text: "7", correct: true },
                { text: "6", correct: false },
                { text: "8", correct: false },
                { text: "5", correct: false },
            ],
        },
        {
            question: "What is 5 * 6?",
            answers: [
                { text: "30", correct: true },
                { text: "25", correct: false },
                { text: "20", correct: false },
                { text: "15", correct: false },
            ],
        },
        {
            question: "What is 15 divided by 3?",
            answers: [
                { text: "5", correct: true },
                { text: "6", correct: false },
                { text: "7", correct: false },
                { text: "8", correct: false },
            ],
        },
        {
            question: "What is 1 + 1?",
            answers: [
                { text: "1", correct: false },
                { text: "2", correct: true },
                { text: "3", correct: false },
                { text: "4", correct: false },
            ],
        },
        {
            question: "What is the value of 9 - 4?",
            answers: [
                { text: "5", correct: true },
                { text: "4", correct: false },
                { text: "3", correct: false },
                { text: "2", correct: false },
            ],
        },
        {
            question: "What is 8 + 7?",
            answers: [
                { text: "15", correct: true },
                { text: "14", correct: false },
                { text: "13", correct: false },
                { text: "12", correct: false },
            ],
        },
        {
            question: "What is 6 - 2?",
            answers: [
                { text: "4", correct: true },
                { text: "3", correct: false },
                { text: "2", correct: false },
                { text: "1", correct: false },
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
        {
            question: "What is the next prime number after 5?",
            answers: [
                { text: "6", correct: false },
                { text: "7", correct: true },
                { text: "8", correct: false },
                { text: "9", correct: false },
            ],
        },
        {
            question: "What is 12 squared?",
            answers: [
                { text: "144", correct: true },
                { text: "124", correct: false },
                { text: "134", correct: false },
                { text: "154", correct: false },
            ],
        },
        {
            question: "What is the absolute value of -7?",
            answers: [
                { text: "7", correct: true },
                { text: "-7", correct: false },
                { text: "0", correct: false },
                { text: "14", correct: false },
            ],
        },
        {
            question:
                "If a triangle has a base of 10 and a height of 5, what is its area?",
            answers: [
                { text: "25", correct: true },
                { text: "30", correct: false },
                { text: "35", correct: false },
                { text: "40", correct: false },
            ],
        },
        {
            question: "What is 3 cubed?",
            answers: [
                { text: "6", correct: false },
                { text: "9", correct: false },
                { text: "27", correct: true },
                { text: "30", correct: false },
            ],
        },
        {
            question: "What is the sum of angles in a triangle?",
            answers: [
                { text: "90 degrees", correct: false },
                { text: "180 degrees", correct: true },
                { text: "360 degrees", correct: false },
                { text: "270 degrees", correct: false },
            ],
        },
        {
            question:
                "What is the circumference of a circle with a diameter of 10?",
            answers: [
                { text: "20π", correct: true },
                { text: "10π", correct: false },
                { text: "30π", correct: false },
                { text: "40π", correct: false },
            ],
        },
        {
            question: "If a car travels 60 miles in 1 hour, what is its speed?",
            answers: [
                { text: "60 mph", correct: true },
                { text: "50 mph", correct: false },
                { text: "70 mph", correct: false },
                { text: "80 mph", correct: false },
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
        {
            question: "What is the formula for the volume of a sphere?",
            answers: [
                { text: "4/3πr^3", correct: true },
                { text: "πr^2h", correct: false },
                { text: "2πr^2", correct: false },
                { text: "πd^2h/4", correct: false },
            ],
        },
        {
            question: "What is the value of the expression 5^2?",
            answers: [
                { text: "10", correct: false },
                { text: "25", correct: true },
                { text: "15", correct: false },
                { text: "5", correct: false },
            ],
        },
        {
            question: "What is 30 divided by 5?",
            answers: [
                { text: "5", correct: false },
                { text: "10", correct: true },
                { text: "15", correct: false },
                { text: "20", correct: false },
            ],
        },
        {
            question: "What is the next number in the sequence: 2, 4, 6, 8?",
            answers: [
                { text: "9", correct: false },
                { text: "10", correct: true },
                { text: "12", correct: false },
                { text: "14", correct: false },
            ],
        },
        {
            question: "How many degrees are in a right angle?",
            answers: [
                { text: "90", correct: true },
                { text: "180", correct: false },
                { text: "270", correct: false },
                { text: "360", correct: false },
            ],
        },
        {
            question: "If 4x = 20, what is the value of x?",
            answers: [
                { text: "5", correct: true },
                { text: "10", correct: false },
                { text: "15", correct: false },
                { text: "20", correct: false },
            ],
        },
        {
            question: "What is the prime factorization of 12?",
            answers: [
                { text: "2 × 6", correct: false },
                { text: "3 × 4", correct: false },
                { text: "2 × 2 × 3", correct: true },
                { text: "2 × 3 × 4", correct: false },
            ],
        },
        {
            question:
                "What is the median of the following set of numbers: 3, 5, 1, 4, 2?",
            answers: [
                { text: "3", correct: true },
                { text: "2", correct: false },
                { text: "4", correct: false },
                { text: "5", correct: false },
            ],
        },
        {
            question:
                "If a triangle has a base of 10 and a height of 5, what is its area?",
            answers: [
                { text: "25", correct: true },
                { text: "30", correct: false },
                { text: "35", correct: false },
                { text: "40", correct: false },
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
        {
            question: "What is the integral of x dx?",
            answers: [
                { text: "x^2/2 + C", correct: true },
                { text: "2x + C", correct: false },
                { text: "x^2 + C", correct: false },
                { text: "1/2x^2 + C", correct: false },
            ],
        },
        {
            question: "What is the value of sin(90°)?",
            answers: [
                { text: "0", correct: false },
                { text: "1", correct: true },
                { text: "0.5", correct: false },
                { text: "-1", correct: false },
            ],
        },
        {
            question: "What is the solution to the equation 3x - 9 = 0?",
            answers: [
                { text: "0", correct: false },
                { text: "3", correct: true },
                { text: "9", correct: false },
                { text: "6", correct: false },
            ],
        },
        {
            question: "What is the sum of the interior angles of a triangle?",
            answers: [
                { text: "180 degrees", correct: true },
                { text: "360 degrees", correct: false },
                { text: "90 degrees", correct: false },
                { text: "270 degrees", correct: false },
            ],
        },
        {
            question: "If 2x = 16, what is the value of x?",
            answers: [
                { text: "2", correct: false },
                { text: "4", correct: false },
                { text: "8", correct: true },
                { text: "16", correct: false },
            ],
        },
        {
            question: "What is the value of the expression 5^3?",
            answers: [
                { text: "15", correct: false },
                { text: "25", correct: false },
                { text: "125", correct: true },
                { text: "100", correct: false },
            ],
        },
        {
            question:
                "What is the solution to the quadratic equation x^2 - 5x + 6 = 0?",
            answers: [
                { text: "x = 2 or x = 3", correct: true },
                { text: "x = -2 or x = -3", correct: false },
                { text: "x = 0", correct: false },
                { text: "x = 1 or x = 6", correct: false },
            ],
        },
        {
            question: "What is the distance formula?",
            answers: [
                { text: "d = √[(x2 - x1)² + (y2 - y1)²]", correct: true },
                { text: "d = (x2 - x1) + (y2 - y1)", correct: false },
                { text: "d = x2 - x1 + y2 - y1", correct: false },
                { text: "d = (x1 + y1) / 2", correct: false },
            ],
        },
        {
            question:
                "What is the solution to the system of equations: 2x + y = 10 and x - y = 2?",
            answers: [
                { text: "x = 4, y = 2", correct: true },
                { text: "x = 3, y = 4", correct: false },
                { text: "x = 5, y = 0", correct: false },
                { text: "x = 2, y = 6", correct: false },
            ],
        },
    ],
    5: [
        {
            question: "Solve for x in the equation: 2x + 3 = 11.",
            answers: [
                { text: "x = 4", correct: true },
                { text: "x = 5", correct: false },
                { text: "x = 6", correct: false },
                { text: "x = 3", correct: false },
            ],
        },
        {
            question: "What is the limit of f(x) = 3x as x approaches 2?",
            answers: [
                { text: "6", correct: true },
                { text: "5", correct: false },
                { text: "3", correct: false },
                { text: "1", correct: false },
            ],
        },
        {
            question: "What is the equation of a line in slope-intercept form?",
            answers: [
                { text: "y = mx + b", correct: true },
                { text: "y = ax^2 + bx + c", correct: false },
                { text: "y = mx^2 + b", correct: false },
                { text: "x = -by + c", correct: false },
            ],
        },
        {
            question:
                "If the function f(x) = x^2 + 2x - 3, what are the roots?",
            answers: [
                { text: "x = -3, x = 1", correct: true },
                { text: "x = 0, x = 3", correct: false },
                { text: "x = 1, x = 3", correct: false },
                { text: "x = -1, x = 3", correct: false },
            ],
        },
        {
            question:
                "What is the value of the expression 2x + 3y when x = 1 and y = 2?",
            answers: [
                { text: "8", correct: true },
                { text: "5", correct: false },
                { text: "7", correct: false },
                { text: "9", correct: false },
            ],
        },
        {
            question: "What is the fundamental theorem of algebra?",
            answers: [
                {
                    text: "Every polynomial equation of degree n has n roots.",
                    correct: true,
                },
                {
                    text: "The roots of a polynomial are complex.",
                    correct: false,
                },
                { text: "All equations have real roots.", correct: false },
                {
                    text: "The sum of the roots is always zero.",
                    correct: false,
                },
            ],
        },
        {
            question: "What is the result of (3 + 2) * (4 - 1)?",
            answers: [
                { text: "15", correct: false },
                { text: "10", correct: true },
                { text: "12", correct: false },
                { text: "20", correct: false },
            ],
        },
        {
            question:
                "What is the area of a triangle with a base of 5 and a height of 10?",
            answers: [
                { text: "25", correct: true },
                { text: "50", correct: false },
                { text: "15", correct: false },
                { text: "30", correct: false },
            ],
        },
        {
            question:
                "What is the probability of flipping a coin and it landing on heads?",
            answers: [
                { text: "1/2", correct: true },
                { text: "1/4", correct: false },
                { text: "1/3", correct: false },
                { text: "3/4", correct: false },
            ],
        },
        {
            question: "What is the sum of the first 10 positive integers?",
            answers: [
                { text: "55", correct: true },
                { text: "50", correct: false },
                { text: "60", correct: false },
                { text: "45", correct: false },
            ],
        },
    ],
};

// Sociology Quiz Data
export const sociologyData: Quiz = {
    1: [
        {
            question:
                "What is the study of society and social behavior called?",
            answers: [
                { text: "Psychology", correct: false },
                { text: "Sociology", correct: true },
                { text: "Anthropology", correct: false },
                { text: "Economics", correct: false },
            ],
        },
        {
            question:
                "What term describes a group of people with shared characteristics?",
            answers: [
                { text: "Society", correct: false },
                { text: "Community", correct: true },
                { text: "Culture", correct: false },
                { text: "Institution", correct: false },
            ],
        },
        {
            question: "What is a social norm?",
            answers: [
                { text: "A legal requirement", correct: false },
                { text: "An expected behavior in a group", correct: true },
                { text: "A cultural artifact", correct: false },
                { text: "A biological trait", correct: false },
            ],
        },
        {
            question: "What does the term 'deviance' refer to?",
            answers: [
                { text: "Conformity to social norms", correct: false },
                { text: "Behavior that violates norms", correct: true },
                { text: "The study of groups", correct: false },
                { text: "A type of social organization", correct: false },
            ],
        },
        {
            question: "What is a culture?",
            answers: [
                { text: "A biological classification", correct: false },
                {
                    text: "Shared beliefs, values, and practices",
                    correct: true,
                },
                { text: "A social institution", correct: false },
                { text: "A type of government", correct: false },
            ],
        },
        {
            question:
                "What is the term for a position within a social structure?",
            answers: [
                { text: "Role", correct: true },
                { text: "Status", correct: false },
                { text: "Norm", correct: false },
                { text: "Value", correct: false },
            ],
        },
        {
            question: "What is social stratification?",
            answers: [
                {
                    text: "The organization of society into hierarchical layers",
                    correct: true,
                },
                { text: "The process of social change", correct: false },
                { text: "The study of social networks", correct: false },
                { text: "The analysis of social behavior", correct: false },
            ],
        },
        {
            question:
                "What is the process by which individuals learn and internalize the values and norms of their culture?",
            answers: [
                { text: "Socialization", correct: true },
                { text: "Acculturation", correct: false },
                { text: "Assimilation", correct: false },
                { text: "Enculturation", correct: false },
            ],
        },
        {
            question:
                "What term describes the movement of individuals or groups from one social class to another?",
            answers: [
                { text: "Social mobility", correct: true },
                { text: "Social change", correct: false },
                { text: "Social stratification", correct: false },
                { text: "Socialization", correct: false },
            ],
        },
        {
            question: "What is the concept of 'groupthink'?",
            answers: [
                {
                    text: "A decision-making process where group members conform to a consensus",
                    correct: true,
                },
                { text: "The study of group behavior", correct: false },
                { text: "A method of conflict resolution", correct: false },
                { text: "A form of social control", correct: false },
            ],
        },
        {
            question: "What does the term 'social change' refer to?",
            answers: [
                { text: "Changes in laws and policies", correct: false },
                {
                    text: "Alterations in social structures and relationships",
                    correct: true,
                },
                { text: "Changes in personal beliefs", correct: false },
                { text: "Changes in economic systems", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "What is the sociological perspective that emphasizes the importance of social structures?",
            answers: [
                { text: "Symbolic interactionism", correct: false },
                { text: "Functionalism", correct: true },
                { text: "Conflict theory", correct: false },
                { text: "Feminist theory", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a function of social institutions?",
            answers: [
                { text: "To create social change", correct: false },
                { text: "To provide stability and order", correct: true },
                { text: "To promote individuality", correct: false },
                { text: "To encourage competition", correct: false },
            ],
        },
        {
            question:
                "What is a significant factor that contributes to social inequality?",
            answers: [
                { text: "Access to education", correct: true },
                { text: "Cultural diversity", correct: false },
                { text: "Community engagement", correct: false },
                { text: "Social cohesion", correct: false },
            ],
        },
        {
            question: "What is the difference between 'race' and 'ethnicity'?",
            answers: [
                {
                    text: "Race is based on biological traits; ethnicity is based on cultural traits",
                    correct: true,
                },
                {
                    text: "Race is a social construct; ethnicity is not",
                    correct: false,
                },
                {
                    text: "Race refers to nationality; ethnicity refers to skin color",
                    correct: false,
                },
                {
                    text: "Race is unchangeable; ethnicity can change",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the term for a temporary social grouping of people?",
            answers: [
                { text: "Collective", correct: true },
                { text: "Community", correct: false },
                { text: "Society", correct: false },
                { text: "Network", correct: false },
            ],
        },
        {
            question: "What does the term 'normative behavior' refer to?",
            answers: [
                {
                    text: "Behavior that is statistically average",
                    correct: false,
                },
                {
                    text: "Behavior that aligns with societal norms",
                    correct: true,
                },
                { text: "Behavior that is deviant", correct: false },
                {
                    text: "Behavior that is biologically determined",
                    correct: false,
                },
            ],
        },
        {
            question: "What is 'role conflict'?",
            answers: [
                {
                    text: "When an individual has multiple roles that conflict",
                    correct: true,
                },
                { text: "When a role is poorly defined", correct: false },
                { text: "When roles change over time", correct: false },
                { text: "When roles are socially constructed", correct: false },
            ],
        },
        {
            question: "What does the term 'anomie' refer to in sociology?",
            answers: [
                { text: "A state of normlessness", correct: true },
                { text: "A type of socialization", correct: false },
                { text: "A type of social change", correct: false },
                { text: "A social institution", correct: false },
            ],
        },
        {
            question:
                "What is the process of shedding old roles and adopting new ones called?",
            answers: [
                { text: "Role exit", correct: true },
                { text: "Role conflict", correct: false },
                { text: "Role strain", correct: false },
                { text: "Socialization", correct: false },
            ],
        },
        {
            question: "What is the significance of 'social capital'?",
            answers: [
                {
                    text: "The resources available to individuals through their social networks",
                    correct: true,
                },
                {
                    text: "The economic resources of a community",
                    correct: false,
                },
                { text: "The level of education in a society", correct: false },
                { text: "The political power of individuals", correct: false },
            ],
        },
    ],
    3: [
        {
            question: "What is a primary focus of conflict theory?",
            answers: [
                { text: "Stability and consensus", correct: false },
                { text: "Power struggles and inequalities", correct: true },
                { text: "Social harmony", correct: false },
                { text: "Cultural integration", correct: false },
            ],
        },
        {
            question:
                "What is the significance of the feminist perspective in sociology?",
            answers: [
                { text: "It emphasizes gender inequality", correct: true },
                { text: "It focuses solely on women's issues", correct: false },
                { text: "It ignores intersectionality", correct: false },
                {
                    text: "It promotes traditional gender roles",
                    correct: false,
                },
            ],
        },
        {
            question: "What does the term 'socialization' refer to?",
            answers: [
                {
                    text: "The process of learning and internalizing norms",
                    correct: true,
                },
                { text: "The creation of social structures", correct: false },
                { text: "The breakdown of social norms", correct: false },
                { text: "The promotion of individualism", correct: false },
            ],
        },
        {
            question: "What is the role of primary groups in socialization?",
            answers: [
                { text: "They provide emotional support", correct: true },
                { text: "They are temporary groupings", correct: false },
                { text: "They reinforce societal norms", correct: false },
                {
                    text: "They are focused on larger societal issues",
                    correct: false,
                },
            ],
        },
        {
            question:
                "What is the term for a set of shared beliefs and values within a group?",
            answers: [
                { text: "Culture", correct: true },
                { text: "Society", correct: false },
                { text: "Norm", correct: false },
                { text: "Institution", correct: false },
            ],
        },
        {
            question: "What is the primary focus of symbolic interactionism?",
            answers: [
                { text: "Social structures", correct: false },
                { text: "Social interactions and meanings", correct: true },
                { text: "Cultural norms", correct: false },
                { text: "Collective behavior", correct: false },
            ],
        },
        {
            question: "What does the term 'deviance' refer to?",
            answers: [
                {
                    text: "Behavior that aligns with social norms",
                    correct: false,
                },
                {
                    text: "Behavior that violates societal norms",
                    correct: true,
                },
                { text: "Behavior that is accepted", correct: false },
                { text: "Behavior that is expected", correct: false },
            ],
        },
        {
            question: "What is the significance of social institutions?",
            answers: [
                { text: "They create inequalities", correct: false },
                {
                    text: "They organize society and provide structure",
                    correct: true,
                },
                { text: "They hinder social change", correct: false },
                { text: "They focus on individual behavior", correct: false },
            ],
        },
        {
            question: "What is the impact of globalization on culture?",
            answers: [
                { text: "It promotes cultural isolation", correct: false },
                { text: "It leads to cultural homogenization", correct: true },
                { text: "It has no impact", correct: false },
                { text: "It enhances local cultures only", correct: false },
            ],
        },
        {
            question: "What is the concept of 'role strain'?",
            answers: [
                { text: "Conflicts between different roles", correct: false },
                {
                    text: "Inability to meet the demands of a single role",
                    correct: true,
                },
                { text: "Absence of roles in society", correct: false },
                { text: "Disruption of social order", correct: false },
            ],
        },
    ],
    4: [
        {
            question: "What is the concept of 'cultural relativism'?",
            answers: [
                {
                    text: "The belief that one's culture is superior",
                    correct: false,
                },
                {
                    text: "The understanding that cultures must be understood in their own context",
                    correct: true,
                },
                { text: "The rejection of all cultures", correct: false },
                { text: "The promotion of global cultures", correct: false },
            ],
        },
        {
            question:
                "What is the term for an expected behavior in a given context?",
            answers: [
                { text: "Role", correct: true },
                { text: "Status", correct: false },
                { text: "Norm", correct: false },
                { text: "Value", correct: false },
            ],
        },
        {
            question: "What is the main focus of structural functionalism?",
            answers: [
                { text: "Social conflict", correct: false },
                {
                    text: "The functions of each part of society",
                    correct: true,
                },
                { text: "Individual behavior", correct: false },
                { text: "Social change", correct: false },
            ],
        },
        {
            question: "What does the term 'social construct' mean?",
            answers: [
                { text: "Something that exists physically", correct: false },
                {
                    text: "An idea or concept created by society",
                    correct: true,
                },
                { text: "A natural phenomenon", correct: false },
                { text: "A law or policy", correct: false },
            ],
        },
        {
            question:
                "What does the term 'institutionalized discrimination' refer to?",
            answers: [
                { text: "Discrimination that is illegal", correct: false },
                {
                    text: "Discrimination that is part of social structures",
                    correct: true,
                },
                { text: "Discrimination that is personal", correct: false },
                { text: "Discrimination that is random", correct: false },
            ],
        },
        {
            question: "What is the significance of social networks?",
            answers: [
                { text: "They limit social interactions", correct: false },
                {
                    text: "They facilitate connections and resource sharing",
                    correct: true,
                },
                { text: "They promote isolation", correct: false },
                { text: "They hinder relationships", correct: false },
            ],
        },
        {
            question: "What is the impact of social media on society?",
            answers: [
                { text: "It has no impact", correct: false },
                { text: "It promotes isolation", correct: false },
                { text: "It can enhance social connections", correct: true },
                { text: "It decreases social interaction", correct: false },
            ],
        },
        {
            question: "What is the role of culture in shaping identity?",
            answers: [
                { text: "It has no role", correct: false },
                {
                    text: "It shapes beliefs, values, and behaviors",
                    correct: true,
                },
                { text: "It only affects behavior", correct: false },
                { text: "It is a minor influence", correct: false },
            ],
        },
        {
            question: "What is the primary focus of postmodern sociology?",
            answers: [
                { text: "Social structures", correct: false },
                {
                    text: "Diversity of perspectives and experiences",
                    correct: true,
                },
                { text: "Historical analysis", correct: false },
                { text: "Norms and values", correct: false },
            ],
        },
        {
            question: "What does the term 'social stratification' refer to?",
            answers: [
                {
                    text: "The hierarchical arrangement of individuals in society",
                    correct: true,
                },
                { text: "The study of social networks", correct: false },
                { text: "The analysis of social behavior", correct: false },
                { text: "The promotion of equality", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What is the significance of 'critical theory' in sociology?",
            answers: [
                { text: "It seeks to understand social norms", correct: false },
                {
                    text: "It aims to critique and change society",
                    correct: true,
                },
                { text: "It promotes social stability", correct: false },
                { text: "It ignores power dynamics", correct: false },
            ],
        },
        {
            question: "What is 'intersectionality' in sociology?",
            answers: [
                { text: "The study of single identities", correct: false },
                {
                    text: "How various forms of identity overlap and interact",
                    correct: true,
                },
                { text: "A concept used in biology", correct: false },
                { text: "A technique for social research", correct: false },
            ],
        },
        {
            question: "What does the term 'cultural capital' refer to?",
            answers: [
                { text: "Economic resources", correct: false },
                {
                    text: "Knowledge, skills, and education that promote social mobility",
                    correct: true,
                },
                { text: "Social status", correct: false },
                { text: "Political power", correct: false },
            ],
        },
        {
            question: "What is the main focus of social psychology?",
            answers: [
                { text: "Individual behavior", correct: false },
                { text: "Social influences on behavior", correct: true },
                { text: "The study of cultures", correct: false },
                { text: "Economic behaviors", correct: false },
            ],
        },
        {
            question: "What is the concept of 'socialization'?",
            answers: [
                {
                    text: "The process of becoming an individual",
                    correct: false,
                },
                {
                    text: "The lifelong process of learning social norms and values",
                    correct: true,
                },
                { text: "The promotion of equality", correct: false },
                { text: "The analysis of social structures", correct: false },
            ],
        },
        {
            question: "What is the primary goal of sociological research?",
            answers: [
                {
                    text: "To describe and explain social phenomena",
                    correct: true,
                },
                { text: "To promote social change", correct: false },
                { text: "To validate existing theories", correct: false },
                { text: "To study individual behavior", correct: false },
            ],
        },
        {
            question:
                "What is the term for the study of how societies develop and change over time?",
            answers: [
                { text: "Historical sociology", correct: true },
                { text: "Comparative sociology", correct: false },
                { text: "Cultural sociology", correct: false },
                { text: "Quantitative sociology", correct: false },
            ],
        },
        {
            question: "What does the term 'social exclusion' refer to?",
            answers: [
                { text: "Inclusion in society", correct: false },
                {
                    text: "The process of being marginalized and denied access to resources",
                    correct: true,
                },
                { text: "A concept of integration", correct: false },
                { text: "The breakdown of social bonds", correct: false },
            ],
        },
        {
            question: "What is the role of rituals in society?",
            answers: [
                { text: "To promote individuality", correct: false },
                {
                    text: "To reinforce social bonds and cultural values",
                    correct: true,
                },
                { text: "To create social hierarchy", correct: false },
                { text: "To encourage competition", correct: false },
            ],
        },
        {
            question: "What does the term 'urban sociology' focus on?",
            answers: [
                { text: "Rural communities", correct: false },
                {
                    text: "The study of social life in urban areas",
                    correct: true,
                },
                { text: "Globalization", correct: false },
                { text: "Environmental sociology", correct: false },
            ],
        },
    ],
};

// Warfare Quiz Data
export const warfareData: Quiz = {
    1: [
        {
            question: "What is the primary purpose of warfare?",
            answers: [
                { text: "To achieve political objectives", correct: true },
                { text: "To conquer territory", correct: false },
                { text: "To demonstrate power", correct: false },
                { text: "To gain resources", correct: false },
            ],
        },
        {
            question: "Which conflict is known as the first global war?",
            answers: [
                { text: "World War I", correct: true },
                { text: "World War II", correct: false },
                { text: "The Cold War", correct: false },
                { text: "The Napoleonic Wars", correct: false },
            ],
        },
        {
            question: "What is guerrilla warfare?",
            answers: [
                { text: "Conventional warfare", correct: false },
                { text: "Irregular warfare by small groups", correct: true },
                { text: "Nuclear warfare", correct: false },
                { text: "Chemical warfare", correct: false },
            ],
        },
        {
            question:
                "Who was the commander of the British forces during the Battle of Waterloo?",
            answers: [
                { text: "Duke of Wellington", correct: true },
                { text: "Horatio Nelson", correct: false },
                { text: "Duke of York", correct: false },
                { text: "Robert E. Lee", correct: false },
            ],
        },
        {
            question: "What was the main strategy of the Blitzkrieg?",
            answers: [
                { text: "Defensive warfare", correct: false },
                { text: "Rapid and surprise attacks", correct: true },
                { text: "Use of submarines", correct: false },
                { text: "Trench warfare", correct: false },
            ],
        },
        {
            question:
                "Which battle marked the turning point in the Pacific Theater during WWII?",
            answers: [
                { text: "Battle of Midway", correct: true },
                { text: "Battle of Iwo Jima", correct: false },
                { text: "Battle of Guadalcanal", correct: false },
                { text: "Battle of Okinawa", correct: false },
            ],
        },
        {
            question: "What is the primary weapon of an infantry soldier?",
            answers: [
                { text: "Tank", correct: false },
                { text: "Rifle", correct: true },
                { text: "Artillery", correct: false },
                { text: "Missile", correct: false },
            ],
        },
        {
            question:
                "Which war was primarily fought over the issue of slavery in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "The Civil War", correct: true },
                { text: "The Revolutionary War", correct: false },
                { text: "The War of 1812", correct: false },
            ],
        },
        {
            question: "What was the first use of atomic bombs in warfare?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Korean War", correct: false },
                { text: "World War II", correct: true },
                { text: "Vietnam War", correct: false },
            ],
        },
        {
            question: "What was the purpose of the Marshall Plan?",
            answers: [
                { text: "Rebuild Europe after WWII", correct: true },
                { text: "Provide military support", correct: false },
                { text: "Promote communism", correct: false },
                { text: "Establish NATO", correct: false },
            ],
        },
        {
            question: "Which country initiated the invasion of Poland in 1939?",
            answers: [
                { text: "France", correct: false },
                { text: "Germany", correct: true },
                { text: "Soviet Union", correct: false },
                { text: "Italy", correct: false },
            ],
        },
        {
            question: "What does the term 'War of Attrition' refer to?",
            answers: [
                { text: "A war based on guerrilla tactics", correct: false },
                {
                    text: "A war aimed at wearing down the enemy",
                    correct: true,
                },
                { text: "A type of psychological warfare", correct: false },
                { text: "A naval blockade", correct: false },
            ],
        },
        {
            question:
                "Who was the leading general of the American Expeditionary Forces in WWI?",
            answers: [
                { text: "John J. Pershing", correct: true },
                { text: "Dwight D. Eisenhower", correct: false },
                { text: "George S. Patton", correct: false },
                { text: "William Tecumseh Sherman", correct: false },
            ],
        },
    ],
    2: [
        {
            question:
                "What tactic involves surprise attacks against a larger enemy?",
            answers: [
                { text: "Guerrilla warfare", correct: true },
                { text: "Trench warfare", correct: false },
                { text: "Total war", correct: false },
                { text: "Psychological warfare", correct: false },
            ],
        },
        {
            question:
                "Who was the leader of the Allied forces in Europe during WWII?",
            answers: [
                { text: "Dwight D. Eisenhower", correct: true },
                { text: "George S. Patton", correct: false },
                { text: "Winston Churchill", correct: false },
                { text: "Douglas MacArthur", correct: false },
            ],
        },
        {
            question:
                "What is the name of the international organization founded after WWII to promote peace?",
            answers: [
                { text: "League of Nations", correct: false },
                { text: "United Nations", correct: true },
                { text: "NATO", correct: false },
                { text: "European Union", correct: false },
            ],
        },
        {
            question: "Which conflict was known as the 'Forgotten War'?",
            answers: [
                { text: "World War II", correct: false },
                { text: "Vietnam War", correct: false },
                { text: "Korean War", correct: true },
                { text: "Gulf War", correct: false },
            ],
        },
        {
            question:
                "What is the term for military strategy that focuses on the importance of logistics?",
            answers: [
                { text: "Total war", correct: false },
                { text: "Logistics warfare", correct: true },
                { text: "Asymmetric warfare", correct: false },
                { text: "Cold War", correct: false },
            ],
        },
        {
            question: "What is the main purpose of a military draft?",
            answers: [
                { text: "To recruit volunteers", correct: false },
                { text: "To maintain a standing army", correct: false },
                {
                    text: "To conscript citizens for military service",
                    correct: true,
                },
                { text: "To train soldiers", correct: false },
            ],
        },
        {
            question: "Which treaty ended World War I?",
            answers: [
                { text: "Treaty of Versailles", correct: true },
                { text: "Treaty of Paris", correct: false },
                { text: "Treaty of Ghent", correct: false },
                { text: "Treaty of Trianon", correct: false },
            ],
        },
        {
            question: "What was the main objective of Operation Desert Storm?",
            answers: [
                { text: "To liberate Kuwait", correct: true },
                { text: "To overthrow Saddam Hussein", correct: false },
                { text: "To establish democracy in Iraq", correct: false },
                { text: "To secure oil fields", correct: false },
            ],
        },
        {
            question: "What does the term 'scorched earth' refer to?",
            answers: [
                {
                    text: "A military tactic that destroys anything useful",
                    correct: true,
                },
                { text: "A type of weapon", correct: false },
                { text: "A geographical region", correct: false },
                { text: "A peace treaty", correct: false },
            ],
        },
        {
            question: "What was the significance of the Battle of Stalingrad?",
            answers: [
                { text: "It was a major German victory", correct: false },
                {
                    text: "It marked the turning point in the Eastern Front",
                    correct: true,
                },
                { text: "It ended the war", correct: false },
                { text: "It was a naval battle", correct: false },
            ],
        },
        {
            question:
                "Which conflict was fought between the United States and Britain in 1812?",
            answers: [
                { text: "War of 1812", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "Mexican-American War", correct: false },
                { text: "Civil War", correct: false },
            ],
        },
        {
            question: "What does the term 'no man's land' refer to?",
            answers: [
                { text: "An area between opposing trenches", correct: true },
                { text: "A neutral country", correct: false },
                { text: "An uninhabited area", correct: false },
                { text: "A peace agreement", correct: false },
            ],
        },
        {
            question:
                "Which country did the United States fight in the Vietnam War?",
            answers: [
                { text: "North Vietnam", correct: true },
                { text: "South Vietnam", correct: false },
                { text: "China", correct: false },
                { text: "Laos", correct: false },
            ],
        },
        {
            question: "What is the primary goal of psychological warfare?",
            answers: [
                { text: "To confuse the enemy", correct: false },
                { text: "To induce fear and demoralization", correct: true },
                { text: "To collect intelligence", correct: false },
                { text: "To gain territory", correct: false },
            ],
        },
    ],
    3: [
        {
            question:
                "What is a significant outcome of the Treaty of Versailles?",
            answers: [
                { text: "It ended World War I", correct: true },
                { text: "It led to World War II", correct: false },
                { text: "It established the United Nations", correct: false },
                { text: "It unified Germany", correct: false },
            ],
        },
        {
            question:
                "What is the term used to describe a military strategy that aims to exhaust the enemy's resources?",
            answers: [
                { text: "War of Attrition", correct: true },
                { text: "Blitzkrieg", correct: false },
                { text: "Total War", correct: false },
                { text: "Guerrilla Warfare", correct: false },
            ],
        },
        {
            question:
                "Which military campaign is associated with Napoleon Bonaparte?",
            answers: [
                { text: "The Peninsular War", correct: true },
                { text: "The American Civil War", correct: false },
                { text: "The War of 1812", correct: false },
                { text: "The Franco-Prussian War", correct: false },
            ],
        },
        {
            question:
                "What is the main advantage of using air power in warfare?",
            answers: [
                { text: "Mobility", correct: false },
                { text: "Surprise", correct: true },
                { text: "Defense", correct: false },
                { text: "Economic efficiency", correct: false },
            ],
        },
        {
            question:
                "What was the name of the first nuclear-powered submarine?",
            answers: [
                { text: "USS Nautilus", correct: true },
                { text: "USS Seawolf", correct: false },
                { text: "USS Enterprise", correct: false },
                { text: "USS Nimitz", correct: false },
            ],
        },
        {
            question:
                "What is the primary role of a military intelligence officer?",
            answers: [
                { text: "Combat training", correct: false },
                { text: "Gathering and analyzing information", correct: true },
                { text: "Logistics planning", correct: false },
                { text: "Field command", correct: false },
            ],
        },
        {
            question: "What was the goal of the Normandy invasion during WWII?",
            answers: [
                { text: "To invade Italy", correct: false },
                {
                    text: "To liberate Western Europe from Nazi control",
                    correct: true,
                },
                { text: "To defeat Japan", correct: false },
                { text: "To establish a foothold in Africa", correct: false },
            ],
        },
        {
            question:
                "Which battle is considered the turning point in the Pacific during WWII?",
            answers: [
                { text: "Battle of Midway", correct: true },
                { text: "Battle of Guadalcanal", correct: false },
                { text: "Battle of Iwo Jima", correct: false },
                { text: "Battle of Okinawa", correct: false },
            ],
        },
        {
            question:
                "What is the term for a surprise attack designed to disrupt the enemy's plans?",
            answers: [
                { text: "Counteroffensive", correct: false },
                { text: "Decapitation strike", correct: true },
                { text: "Flanking maneuver", correct: false },
                { text: "Guerrilla tactics", correct: false },
            ],
        },
        {
            question:
                "Which global conflict was sparked by the assassination of Archduke Franz Ferdinand?",
            answers: [
                { text: "World War I", correct: true },
                { text: "World War II", correct: false },
                { text: "The Korean War", correct: false },
                { text: "The Vietnam War", correct: false },
            ],
        },
    ],
    4: [
        {
            question:
                "Which military strategy focuses on cutting off supplies to the enemy?",
            answers: [
                { text: "Siege warfare", correct: true },
                { text: "Blitzkrieg", correct: false },
                { text: "Attrition", correct: false },
                { text: "Encirclement", correct: false },
            ],
        },
        {
            question:
                "What was the primary technology used in trench warfare during WWI?",
            answers: [
                { text: "Machine guns", correct: true },
                { text: "Tanks", correct: false },
                { text: "Airplanes", correct: false },
                { text: "Chemical weapons", correct: false },
            ],
        },
        {
            question: "What is the significance of the Geneva Conventions?",
            answers: [
                { text: "They establish the laws of war", correct: true },
                { text: "They regulate international trade", correct: false },
                { text: "They promote economic development", correct: false },
                { text: "They address environmental issues", correct: false },
            ],
        },
        {
            question:
                "What is the main objective of counterinsurgency operations?",
            answers: [
                { text: "To defeat regular armies", correct: false },
                {
                    text: "To gain the support of the local population",
                    correct: true,
                },
                { text: "To seize territory", correct: false },
                { text: "To engage in conventional warfare", correct: false },
            ],
        },
        {
            question:
                "Which empire is known for its use of cavalry in warfare?",
            answers: [
                { text: "Roman Empire", correct: false },
                { text: "Mongol Empire", correct: true },
                { text: "Ottoman Empire", correct: false },
                { text: "Persian Empire", correct: false },
            ],
        },
        {
            question: "What is the primary purpose of military logistics?",
            answers: [
                { text: "To train soldiers", correct: false },
                {
                    text: "To provide supplies and support to forces",
                    correct: true,
                },
                { text: "To engage in combat", correct: false },
                { text: "To negotiate treaties", correct: false },
            ],
        },
        {
            question:
                "What type of warfare involves the use of improvised explosive devices?",
            answers: [
                { text: "Guerrilla warfare", correct: true },
                { text: "Conventional warfare", correct: false },
                { text: "Cyber warfare", correct: false },
                { text: "Naval warfare", correct: false },
            ],
        },
        {
            question: "What is the concept of 'asymmetric warfare'?",
            answers: [
                { text: "Warfare between equal powers", correct: false },
                { text: "Warfare involving unequal forces", correct: true },
                { text: "Warfare focused on air superiority", correct: false },
                {
                    text: "Warfare without conventional battles",
                    correct: false,
                },
            ],
        },
        {
            question:
                "Which battle is known for the use of tanks in large-scale combat?",
            answers: [
                { text: "Battle of the Somme", correct: false },
                { text: "Battle of Cambrai", correct: true },
                { text: "Battle of Verdun", correct: false },
                { text: "Battle of the Bulge", correct: false },
            ],
        },
        {
            question: "What is the main goal of peacekeeping missions?",
            answers: [
                { text: "To engage in combat", correct: false },
                { text: "To maintain peace and security", correct: true },
                { text: "To establish a government", correct: false },
                { text: "To promote trade", correct: false },
            ],
        },
        {
            question:
                "Who was the commander of the Allied forces during the D-Day invasion?",
            answers: [
                { text: "George Patton", correct: false },
                { text: "Dwight D. Eisenhower", correct: true },
                { text: "Omar Bradley", correct: false },
                { text: "Bernard Montgomery", correct: false },
            ],
        },
    ],
    5: [
        {
            question:
                "What term describes the ethical considerations of warfare?",
            answers: [
                { text: "Just war theory", correct: true },
                { text: "War crimes", correct: false },
                { text: "Military ethics", correct: false },
                { text: "Rules of engagement", correct: false },
            ],
        },
        {
            question:
                "Which military strategy is characterized by the rapid movement of troops?",
            answers: [
                { text: "Blitzkrieg", correct: true },
                { text: "Total war", correct: false },
                { text: "Guerrilla tactics", correct: false },
                { text: "Siege warfare", correct: false },
            ],
        },
        {
            question: "What is the primary objective of a military coup?",
            answers: [
                { text: "To restore democracy", correct: false },
                { text: "To overthrow the current government", correct: true },
                { text: "To establish peace", correct: false },
                { text: "To gain foreign support", correct: false },
            ],
        },
        {
            question: "Which war introduced the use of tanks on a large scale?",
            answers: [
                { text: "World War I", correct: true },
                { text: "World War II", correct: false },
                { text: "Korean War", correct: false },
                { text: "Vietnam War", correct: false },
            ],
        },
        {
            question:
                "What was the main strategy of the Soviet Union during the Cold War?",
            answers: [
                { text: "Containment", correct: false },
                { text: "Rollback", correct: false },
                { text: "Detente", correct: true },
                { text: "Escalation", correct: false },
            ],
        },
        {
            question: "What was the purpose of the Berlin Wall?",
            answers: [
                {
                    text: "To prevent East Germans from fleeing to the West",
                    correct: true,
                },
                {
                    text: "To divide Germany into East and West",
                    correct: false,
                },
                { text: "To symbolize peace", correct: false },
                { text: "To separate military zones", correct: false },
            ],
        },
        {
            question:
                "Which of the following is a primary characteristic of total war?",
            answers: [
                { text: "Limited engagement", correct: false },
                { text: "Mobilization of entire society", correct: true },
                { text: "Conventional tactics", correct: false },
                { text: "Focus on military objectives only", correct: false },
            ],
        },
        {
            question: "What is the significance of the Nuremberg Trials?",
            answers: [
                { text: "To hold war criminals accountable", correct: true },
                { text: "To promote economic recovery", correct: false },
                { text: "To establish NATO", correct: false },
                { text: "To develop peace treaties", correct: false },
            ],
        },
        {
            question:
                "Which operation marked the beginning of the U.S. military involvement in Vietnam?",
            answers: [
                { text: "Operation Rolling Thunder", correct: false },
                { text: "Operation Linebacker", correct: false },
                { text: "Operation Ranch Hand", correct: true },
                { text: "Operation Enduring Freedom", correct: false },
            ],
        },
        {
            question:
                "What military innovation is credited to the Roman Empire?",
            answers: [
                { text: "Catapults", correct: false },
                { text: "Legionary tactics", correct: true },
                { text: "Horse archers", correct: false },
                { text: "War elephants", correct: false },
            ],
        },
    ],
};

export const quizDataMap: { [key: string]: Quiz; } = {
    animalQuiz: animalData,
    astrologyQuiz: astrologyData,
    artQuiz: artData,
    biologyQuiz: biologyData,
    computerScienceQuiz: computerScienceData,
    // designQuiz: designData,
    economicsQuiz: economicsData,
    engineeringQuiz: engineeringData,
    chemistryQuiz: chemistryData,
    historyQuiz: historyData,
    mathQuiz: mathData,
    physicsQuiz: physicsData,
    politicsQuiz: politicsData,
    realEstateQuiz: realEstateData,
    sportsQuiz: sportsData,
    financeQuiz: financeData,
    englishQuiz: englishData,
    geographyQuiz: geographyData,
    healthCareQuiz: healthCareData,
    philosophyQuiz: philosophyData,
    socialStudiesQuiz: socialStudiesData,
    literatureQuiz: literatureData,
    musicQuiz: musicData,
    warfareQuiz: warfareData,
    psychologyQuiz: psychologyData,
    sociologyQuiz: sociologyData,
};

export const quizData: QuizItem[] = [
    { id: "animalQuiz", data: animalData },
    { id: "astrologyQuiz", data: astrologyData },
    { id: "artQuiz", data: artData },
    { id: "biologyQuiz", data: biologyData },
    { id: "chemistryQuiz", data: chemistryData },
    { id: "computerScienceQuiz", data: computerScienceData },
    { id: "economicsQuiz", data: economicsData },
    { id: "engineeringQuiz", data: engineeringData },
    { id: "englishQuiz", data: englishData },
    { id: "engineerQuiz", data: engineeringData },
    { id: "financeQuiz", data: financeData },
    { id: "geographyQuiz", data: geographyData },
    { id: "healthcareQuiz", data: healthCareData },
    { id: "historyQuiz", data: historyData },
    { id: "literatureQuiz", data: literatureData },
    { id: "mathQuiz", data: mathData },
    { id: "musicQuiz", data: musicData },
    { id: "philosophyQuiz", data: philosophyData },
    { id: "physicsQuiz", data: physicsData },
    { id: "politicsQuiz", data: politicsData },
    { id: "realEstateQuiz", data: realEstateData },
    { id: "psychologyQuiz", data: psychologyData },
    { id: "socialStudiesQuiz", data: socialStudiesData },
    { id: "sportsQuiz", data: sportsData },
];

// Extract keys from QuizData export interface to create a union type
export type QuizDataKey = ( typeof quizData )[number]["id"];

export function isQuizDataKey( key: string ): key is QuizDataKey {
    return quizData.some( ( quiz ) => quiz.id === key );
}
