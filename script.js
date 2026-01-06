
var questions = [
    {
        question: "1) What is the full form of HTML?",
        options: [" Hypertext Table Management List.",
            " Hyper Terminal Markup Language.",
            " HyperText Markup Language.",
            " Hydra Terminal Markup Language."],
        answer: "HyperText Markup Language."
    },
    {
        question: "2) Inside which HTML element do we put the JavaScript?",
        options: ["<script>",
            "<scripting>",
            "<javascript>",
            "<js>"],
        answer: "<script>"
    },
    {
        question: "3) Which built-in method calls a function for each element in the array?",
        options: ["while()",
            "loop()",
            "forEach()",
            "None of the above."],
        answer: "forEach()"
    },
    {
        question: "4)Which of the following is true about variable naming conventions in JavaScript? ",
        options: ["JS variable names must begin with a letter or the underscore character.",
            "JS variable names are case sensitive.",
            "Both of the above.",
            "None of the above."],
        answer: "Both of the above."
    },
    {
        question: "5) Which built-in method returns the string representaion of number's value?",
        options: ["toValue()",
            "toString()",
            "toNumber()",
            "tostring"],
        answer: "toString()"
    }
];

let quiz = document.getElementById("quiz");
let div = document.createElement("div")
div.setAttribute("class", "created")
quiz.before(div)

let currentIndex = 0;

function loadQuestion() {
    let questionEl = document.querySelector(".created")
    let optionsEl = document.querySelector("ul")

    questionEl.innerHTML = `<h2>${questions[currentIndex].question}</h2>`

    optionsEl.innerHTML = ""  // When we move to the next questions, we dont want old options to stay

    questions[currentIndex].options.forEach(option => {
        let li = document.createElement("li")
        li.textContent = option;
        optionsEl.append(li);
    });
}

loadQuestion()

// Selecting an answer

let selectedAnswer = "";

document.querySelector("ul").addEventListener("click",
    function (e) {
        if (e.target.tagName === "LI") {
            selectedAnswer = e.target.textContent.trim();

            // highlight the selected answer
            document.querySelectorAll("li").forEach(li =>
                li.style.backgroundColor = "")
            e.target.style.backgroundColor = "lightgreen"
        }
    });

// Check answer
document.getElementById("submit").addEventListener("click", () => {
    if (selectedAnswer === questions[currentIndex].answer) {
        alert("Correct")
    }
    else {
        alert("Wrong!")
    }
    
    currentIndex ++;
    if(currentIndex < questions.length){
        loadQuestion()
    }
    else{
        alert("Quiz Completed");
    }
})





