// VARIABLES
// =========

// Declare object with question, answers, correct answer and any explanations
var wineQuestions = [
  {
    question: "What is the difference between red wine and white wine?",
    answers: {
      a: "White wine is made from different grapes",
      b: "Red wine is harvested later",
      c: "When making red wine, the skins of the grapes are left in the wine during fermentation",
      d: "The skins of red wine grapes are darker in color"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the difference between looking at a French wine and an American, in terms of how it's labeled?",
    answers: {
      a: "French wine is more expensive",
      b: "￼American wine marked with alcohol content",
      c: "￼American wine is more regulated in terms of what it can be called",
      d: "French wine is labeled by where it is made"
    },
    correctAnswer: "d"
  },
  {
    question: "Sangiovese is the type of grape used to make...",
    answers: {
      a: "Bordeaux style wine",
      b: "White table wine",
      c: "Chianti style wine",
      d: "Rose wine"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these white wines is usually a little sweet?",
    answers: {
      a: "Riesling",
      b: "Sauvignon Blanc",
      c: "Chardonnay",
      d: "Pinot Grigio"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of these red wines is usually (most commonly) a little spicy or peppery?",
    answers: {
      a: "Cabernet Sauvignon",
      b: "Shiraz",
      c: "Merlot",
      d: "Pinot Noir"
    },
    correctAnswer: "b"
  },
  {
    question: "Why is champagne bubbly?",
    answers: {
      a: "The wine is aged less",
      b: "The wine undergoes a secondary fermentation, usually yeast and sugar is added",
      c: "The wine is aged in steel",
      d: "The wine is shaken"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the traditional way to pour wine during a wine service",
    answers: {
      a: "The person who ordered the wine is first, then clockwise around the table",
      b: "Counterclockwise",
      c: "￼Ladies first, then men, finishing with whomever ordered the bottle",
      d: "Ladies first, then men, no matter who ordered the bottle"
    },
    correctAnswer: "c"
  },
  {
    question: "What is a stelvin?",
    answers: {
      a: "A wine opener",
      b: "A special glass for port wine",
      c: "A type of wine cap, commonly known as a screw cap",
      d: "An expert on wine, like a sommelier"
    },
    correctAnswer: "c"
  },
  {
    question: "Why do people smell the cork during a wine service?",
    answers: {
      a: "To see if the wine has gone bad",
      b: "To see if the wine has been aged properly",
      c: "To get a sense of the wine",
      d: "None of the above"
    },
    correctAnswer: "d",
    explanation: "During a wine service, you don't need to smell the cork. You inspect the cork to see if it's wet, which means the wine has been stored properly."
  },
  {
    question: "What are the grapes in a Bordeaux style wine?",
    answers: {
      a: "Cabernet sauvignon, pinot noir, cabernet franc",
      b: "Merlot, carmenere, petit verdot and cabernet sauvignon",
      c: "Merlot, malbec and pinot noir",
      d: "Merlot, cabernet sauvignon, cabernet franc, petit verdot, carmenere and malbec"
    },
    correctAnswer: "d"
  }
]





// FUNCTIONS
// =========

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

