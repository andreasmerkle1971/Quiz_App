let questions = [
    //ist wie ein riesiges Regal, wo alle Questions drin sind
    {
        question: "Wer hat HTML erfunden?",
        answer_1: "Robbi Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners Lee",
        answer_4: "Justin Biber",
        right_answer: 3,
    },
    {
        question: "Was bedeutet das HTML Tag &lt;a&gt;?",
        answer_1: "Text Fett",
        answer_2: "Containera",
        answer_3: "Ein Link",
        answer_4: "Kursiv",
        right_answer: 3,
    },
    {
        question: "Wie bindet man eine Website in eine Website ein?",
        answer_1: "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        answer_2: "&lt;iframe&gt",
        answer_3: "&lt;frame&gt",
        answer_4: "&lt;frameset&gt",
        right_answer: 2,
    },
    {
        question: "Wer hat HTML erfunden",
        answer_1: "Robbi Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners Lee",
        answer_4: "Justin Biber",
        right_answer: 3,
    },
    {
        question: "Welches Attribut kann man NICHT für Textarea verwenden?",
        answer_1: "readonly                                  ",
        answer_2: "max",
        answer_3: "from",
        answer_4: "spellscheck",
        right_answer: 1,
    },
    {
        question:
            "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        answer_1: "a[title]{...}",
        answer_2: "a > title {...}",
        answer_3: "a.title {...}",
        answer_4: "a=title {...}",
        right_answer: 1,
    },
    {
        question: "Wie definiert man in JavaScript eine Variable?",
        answer_1: "let 100 = rate;",
        answer_2: "100 = let rate;",
        answer_3: "rate = 100;",
        answer_4: "let rate = 100;",
        right_answer: 4,
    },
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        // TODO: Show End Screen
        document.getElementById("endScreen").style = ""; // endscreen wird nach questionBody angezeigt
        document.getElementById("questionBody").style = "display: none";
        document.getElementById("amount-of-questions").innerHTML = questions.length;
        document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
        document.getElementById('header-image').src = "./img/trophy.svg";
    } else {
        let question = questions[currentQuestion];
        document.getElementById("questionText").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
        document.getElementById("question-number").innerHTML =
            currentQuestion + 1; // Nummer der aktuellen Frage wird angezeigt
    }
}

function answer(selection) {
    // Parameter ist leer und wird erst befüllt, sobald die Funktion aufgerufen wird.
    let question = questions[currentQuestion]; //in questions ist die aktuelle Frage gespeichert
    console.log("Selected answer is", selection); // hier wird die ausgewählte Antwort angezeigt
    let selectedQuestionNumber = selection.slice(-1); // in selection ist ja answer_1 , answer_2,..., auf das bezieht es sich.
    console.log("selectedQuestionNumber is", selectedQuestionNumber);
    // console.log('Current question is', question); // hier werden alle Informationen der Frage angezeigt
    console.log("Current question is", question["right_answer"]); // hier greife ich auf das Feld right_answer zu.

    let idOfRightAndwer = `answer_${question["right_answer"]}`; // Eine Variable, wo  die richtigen Antwort steht

    if (selectedQuestionNumber == question["right_answer"]) {
        // wenn das der Fall ist, ...
        console.log("Richtige Antwort!!"); //dann sagen wir richtige Antwort.
        document.getElementById(selection).parentNode.classList.add("bg-success"); // CSS wird hinzugefügt, das richtige Feld wird grün. Mit parentNode wird es dem darüberliegenden Div zugeordnet.
        rightQuestions++;
    } else {
        // und wenn das ganze Falsch ist
        console.log("Falsche Antwort!!!"); // dann loggen wir aus: Falsche Antwort!!!
        document.getElementById(selection).parentNode.classList.add("bg-danger"); // CSS wird hinzugefügt, das falsche Feld wird rot. Mit parentNode wird es dem darüberliegenden Div zugeordnet.
        document.getElementById(idOfRightAndwer).parentNode.classList.add("bg-success"); // CSS wird hinzugefügt, das richtige Feld wird grün angezeigt.
    }
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++; // hier werden die nächsten 4 Fragen angefordert.
    document.getElementById("next-button").disabled = true;
    resetAnswerButtons();
    showQuestion(); // hier werden die nächsten Fragen angezeigt.
}

function resetAnswerButtons() {
    // @ts-ignore
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger"); // classList, um auf alle css Eigenschaften in bootstrap zuzugreifen, mit remove wird die Eigenschaft gelöscht.
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
