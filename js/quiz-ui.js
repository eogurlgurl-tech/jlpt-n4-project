
let quizCurrent = null;
let quizScore = 0;

function renderQuiz(){

    const target = document.getElementById("quizArea");
    if(!target) return;

    const current = GRAMMAR_DATA[
        Math.floor(Math.random()*GRAMMAR_DATA.length)
    ];

    quizCurrent = current;

    const wrongs = GRAMMAR_DATA
        .filter(x => x.title !== current.title)
        .sort(() => Math.random()-0.5)
        .slice(0,3)
        .map(x => x.meaning);

    const choices = [
        current.meaning,
        ...wrongs
    ].sort(() => Math.random()-0.5);

    target.innerHTML = `
        <div class="quiz-card">
            <h3>${current.title}</h3>
            <p>의 의미는?</p>

            ${choices.map(choice => `
                <button class="quiz-option"
                onclick="checkQuizAnswer('${choice.replace(/'/g,"\\'")}')">
                    ${choice}
                </button>
            `).join("")}

            <div id="quizResult"></div>
        </div>
    `;
}

function checkQuizAnswer(answer){

    const result = document.getElementById("quizResult");

    if(answer === quizCurrent.meaning){

        quizScore++;

        result.innerHTML = `
        <p>⭕ 정답</p>
        <button class="reading-btn"
        onclick="renderQuiz()">
        다음 문제
        </button>`;

    }else{

        saveWrongAnswer({
            id:"wrong-"+Date.now(),
            type:"문법",
            title:quizCurrent.title,
            meaning:quizCurrent.meaning
        });

        result.innerHTML = `
        <p>❌ 오답</p>
        <p>정답 : ${quizCurrent.meaning}</p>
        <button class="reading-btn"
        onclick="renderQuiz()">
        다음 문제
        </button>`;
    }
}
