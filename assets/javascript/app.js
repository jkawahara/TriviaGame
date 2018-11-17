// Ensure document is ready
$(document).ready(function(){

  // VARIABLES - GLOBAL 
  // ==================

  // Declare object with question, answers, correct answer and any explanations
  var wineQuestions = [
    {
      question: "What is the difference between red wine and white wine?",
      choices: {
        a: "White wine is made from different grapes",
        b: "Red wine is harvested later",
        c: "When making red wine, the skins of the grapes are left in the wine during fermentation",
        d: "The skins of red wine grapes are darker in color"
      },
      answer: "c",
      imagePath: "assets/images/q1_diff_red_white.jpg"
    },
    {
      question: "What is the difference between looking at a French wine and an American, in terms of how it's labeled?",
      choices: {
        a: "French wine is more expensive",
        b: "￼American wine marked with alcohol content",
        c: "￼American wine is more regulated in terms of what it can be called",
        d: "French wine is labeled by where it is made"
      },
      answer: "d",
      imagePath: "assets/images/q2_french_label.jpg"
    },
    {
      question: "Sangiovese is the type of grape used to make...",
      choices: {
        a: "Bordeaux style wine",
        b: "White table wine",
        c: "Chianti style wine",
        d: "Rose wine"
      },
      answer: "c",
      imagePath: "assets/images/q3_chianti.jpg"
    },
    {
      question: "Which of these white wines is usually a little sweet?",
      choices: {
        a: "Riesling",
        b: "Sauvignon Blanc",
        c: "Chardonnay",
        d: "Pinot Grigio"
      },
      answer: "a",
      imagePath: "assets/images/q4_riesling.jpg"
    },
    {
      question: "Which of these red wines is usually (most commonly) a little spicy or peppery?",
      choices: {
        a: "Cabernet Sauvignon",
        b: "Shiraz",
        c: "Merlot",
        d: "Pinot Noir"
      },
      answer: "b",
      imagePath: "assets/images/q5_shiraz.jpg"
    },
    {
      question: "Why is champagne bubbly?",
      choices: {
        a: "The wine is aged less",
        b: "The wine undergoes a secondary fermentation, usually yeast and sugar is added",
        c: "The wine is aged in steel",
        d: "The wine is shaken"
      },
      answer: "b",
      imagePath: "assets/images/q6_champagne.jpg"
    },
    {
      question: "What is the traditional way to pour wine during a wine service",
      choices: {
        a: "The person who ordered the wine is first, then clockwise around the table",
        b: "Counterclockwise",
        c: "￼Ladies first, then men, finishing with whomever ordered the bottle",
        d: "Ladies first, then men, no matter who ordered the bottle"
      },
      answer: "c",
      imagePath: "assets/images/q7_wineservice.jpg"
    },
    {
      question: "What is a stelvin?",
      choices: {
        a: "A wine opener",
        b: "A special glass for port wine",
        c: "A type of wine cap, commonly known as a screw cap",
        d: "An expert on wine, like a sommelier"
      },
      answer: "c",
      imagePath: "assets/images/q8_stelvin.jpg"
    },
    {
      question: "Why do people smell the cork during a wine service?",
      choices: {
        a: "To see if the wine has gone bad",
        b: "To see if the wine has been aged properly",
        c: "To get a sense of the wine",
        d: "None of the above"
      },
      answer: "d",
      imagePath: "assets/images/q9_corkwetness.jpg",
      explanation: "During a wine service, you don't need to smell the cork. You inspect the cork to see if it's wet, which means the wine has been stored properly."
    },
    {
      question: "What are the grapes in a Bordeaux style wine?",
      choices: {
        a: "Cabernet sauvignon, pinot noir, cabernet franc",
        b: "Merlot, carmenere, petit verdot and cabernet sauvignon",
        c: "Merlot, malbec and pinot noir",
        d: "Merlot, cabernet sauvignon, cabernet franc, petit verdot, carmenere and malbec"
      },
      answer: "d",
      imagePath: "assets/images/q10_bordeaux.jpg"
    }
  ];
  var currentObject; // Current object of wineQuestions array
  var currentAnswer; // Current answer of current object
  var timer; // Timer in seconds


  // FUNCTIONS
  // =========

  // Start (or Start Over)
  function start() {
    // Remove start button
    $("#start-btn-section, time-remain-section, question-result-section, result-msg-section").empty();

    // Initialize questions, correct answers, incorrect answers, unanswered, timer
    currentObject = 0;

    // Ask questions
    displayQuestion();
  }

  // Render start button
  function displayStartBtn() {
    $("#start-btn-section").append("<button id='start-btn'>Start</button>");
  }

  // Render question with answers
  function displayQuestion() {
    $("#question-result-section, #choices-section, #result-msg-section, #result-pic-section").empty();

    // Display question and choices
    $("#question-result-section").append(`<p>${wineQuestions[currentObject].question}</p>`);
    $("#choices-section").append(`<button data-letter="a">${wineQuestions[currentObject].choices.a}</button>`);
    $("#choices-section").append(`<button data-letter="b">${wineQuestions[currentObject].choices.b}</button>`);
    $("#choices-section").append(`<button data-letter="c">${wineQuestions[currentObject].choices.c}</button>`);
    $("#choices-section").append(`<button data-letter="d">${wineQuestions[currentObject].choices.d}</button>`);
    
    timer = 5;
    timeStart();
  }

  // Render timer
  function displayTimer() {
    // Display timer counting down
    $("#time-remain-section").text(`Time Remaining:  ${timer} Seconds`);
  }

  // If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
  
  // Render congrats
  function displayCongrats() {
    // Display Correct!, image, explanation
    // Display next question
    currentObject++;
  }
  
  // If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

  // Render Out of Time
  function displayOutOfTime() {
    $("#question-result-section, #choices-section").empty();
    $("#question-result-section").append("<p>Out of Time!</p>");

    // Set current answer
    currentAnswer = wineQuestions[currentObject].answer;
    $("#question-result-section").append(`<p>The Correct Answer was:  ${wineQuestions[currentObject].choices[currentAnswer]}`);

    // Display object image
    $("#result-pic-section").append(`<img src="${wineQuestions[currentObject].imagePath}" alt="${wineQuestions[currentObject].imagePath}">`);

    currentObject++;
    setTimeout(displayQuestion, 5000);
  }
  
  // If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

  // Render wrong
  function displayWrong() {
    // Display Nope!, correct answer, image, explanation
    // Display next question
    currentObject++;
  }

  // Render stats
  function displayStats() {
    // Display timer from last question
    // Display correct answers, incorrect answers, unanswered
    // Display Start Over? button

  }

  // MAIN CONTROLLER

  // Execute displayStartBtn function after page loads
  displayStartBtn();

  // Listen for Start button for new game 
  $(document).on("click", "#start-btn", "start-over-btn", start);

  // Timer start
  function timeStart() {
    intervalId = setInterval(timeCount, 1000);
  }
  
  // Timer count
  function timeCount() {
    timer--;
    displayTimer();
    
    // Check if timer is <= 0
    if (timer <= 0) {
      timeStop();
      displayOutOfTime();
    }
  }

  // Timer stop
  function timeStop() {
    clearInterval(intervalId);
  }
  
  // Timer reset
  function timeReset() {
    timer = 0;
  }

});
