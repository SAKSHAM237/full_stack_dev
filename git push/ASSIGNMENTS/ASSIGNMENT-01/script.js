javascript
function showBox(number) {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "none";
    document.getElementById("box" + number).style.display = "block";
}
function checkAnswers() {
    var score = 0;
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var result = "";
    if (q1 && q1.value == "A") {
        score++;
        result += "Question 1: Correct<br>";
    } else {
        result += "Question 1: Wrong<br>";
    }
    if (q2 && q2.value == "B") {
        score++;
        result += "Question 2: Correct<br>";
    } else {
        result += "Question 2: Wrong<br>";
    }
    if (q3 && q3.value == "B") {
        score++;
        result += "Question 3: Correct<br>";
    } else {
        result += "Question 3: Wrong<br>";
    }
    if (q4 && q4.value == "A") {
        score++;
        result += "Question 4: Correct<br>";
    } else {
        result += "Question 4: Wrong<br>";
    }
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "none";
    document.getElementById("boxResult").style.display = "block";
    document.getElementById("totalScore").innerHTML =
        "Your Score: " + score + " / 4";
    document.getElementById("resultDetails").innerHTML = result;
}