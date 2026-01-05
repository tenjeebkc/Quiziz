
var questions = [
    {
        question: "1) What is the full form of HTML?",
        options: [" Hypertext Table Management List",
            " Hyper Terminal Markup Language",
            " HyperText Markup Language",
            " Hydra Terminal Markup Language"],
        answer: "HyperText Markup Language"
    },
    {
        question: "2) Inside which HTML element do we put the JavaScript?",
        options: ["<script>",
            "<scripting>",
            "<javascript>",
            "d) <js>"],
        answer: "<script>"
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
        if(e.target.tagName === "LI"){
            selectedAnswer = e.target.textContent.trim();

            // highlight the selected answer
            document.querySelectorAll("li").forEach(li =>
                li.style.backgroundColor = "")
                e.target.style.backgroundColor = "lightgreen"
            }
    });




