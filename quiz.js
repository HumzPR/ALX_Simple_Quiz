function checkAnswer() {
    const correctAnswer = "4"; // Correct answer to the quiz question
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Get checked radio button

    const feedback = document.getElementById("feedback"); // Feedback element

    if (userAnswer) { // Ensure an answer is selected
        if (userAnswer.value === correctAnswer) { // Compare values
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
