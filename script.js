const questions = [
  {
    question: "What is the date of our first concert date?, Complete date like this (Month-Day-Year)",
    images: ["q1.1.jpg", "q1.2.jpg", "q1.3.jpg"],
    answer: "October-14-2023"
  },
  {
    question: "If you really love me, what date is we date in SM PAMPANGA?, Complete date like this (Month-Day-Year)",
    images: ["q2.1.jpg", "q2.2.jpg", "q2.3.jpg"],
    answer: "december-26-2023"
  },
  {
    question: "How many Year and Month na baby?, like this your format anser (number Year and number Monts)",
    images: ["3.1.jpg", "3.2.webp", "3.3.jpg"],
    answer: "1 Year and 4 Moths"
  }
];

let currentQuestion = 0;

const questionText = document.getElementById("question-text");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const answerBox = document.getElementById("answer-box");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  img1.src = q.images[0];
  img2.src = q.images[1];
  img3.src = q.images[2];
  answerBox.value = "";
  feedback.textContent = "";
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerBox.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.style.color = "green";
    feedback.textContent = "✅ I LOVE YOU BABY!";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      feedback.textContent = "🎉 Congratulations! You finished all questions!";
      questionText.textContent = "";
      document.querySelector(".image-grid").style.display = "none";
      answerBox.style.display = "none";
      submitBtn.style.display = "none";
    }
  } else {
    feedback.style.color = "red";
    feedback.textContent = "❌ WRONG!! DI MOKO LOVE.";
  }
});

loadQuestion();
