
function valueName(question) {
  const radioButtons = document.getElementsByName(question);
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }
}

function calculateScore() {
  let score = 0;

  score += parseInt(valueName("q1"));
  score += parseInt(valueName("q2"));
  score += parseInt(valueName("q3"));
  score += parseInt(valueName("q4-a"));
  score += parseInt(valueName("q4-b"));
  score += parseInt(valueName("q5-a"));
  score += parseInt(valueName("q5-b"));
  score += parseInt(valueName("q6"));
  score += parseInt(valueName("q7"));
  score += parseInt(valueName("q8"));

  const scoreElement = document.getElementById("score");
  scoreElement.textContent = score
}

