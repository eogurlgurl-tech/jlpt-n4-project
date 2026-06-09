// Version 10.7.0
// Weakness Quiz (JLPT Style)

let weaknessQuizQuestions = [];
let weaknessQuizIndex = 0;
let weaknessQuizScore = 0;

function startWeaknessQuiz(grammarTitle) {

    weaknessQuizQuestions =
    QUESTION_BANK
    .filter(
        q => q.grammar === grammarTitle
    )
    .sort(
        () => Math.random() - 0.5
    )
    .slice(0, 5);

    if (
        weaknessQuizQuestions.length === 0
    ) {
        alert(
            "등록된 문제가 없습니다."
        );
        return;
    }

    weaknessQuizIndex = 0;
    weaknessQuizScore = 0;

    renderWeaknessQuiz();

}

function renderWeaknessQuiz() {

    const target =
    document.getElementById(
        "weaknessArea"
    );

    if (!target) {
        return;
    }

    const question =
    weaknessQuizQuestions[
        weaknessQuizIndex
    ];

    if (!question) {
        return;
    }

    const choices =
    [
        question.answer,

        ...GRAMMAR_DATA
        .filter(
            x =>
            x.meaning !==
            question.answer
        )
        .sort(
            () => Math.random() - 0.5
        )
        .slice(0, 3)
        .map(
            x => x.title
        )

    ]
    .sort(
        () => Math.random() - 0.5
    );

    target.innerHTML = `

    <div class="grammar-item">

        <h2>

        📚 약점 집중 퀴즈

        </h2>

        <p>

        ${weaknessQuizIndex + 1}
        / 5

        </p>

        <h3>

        ${question.question}

        </h3>

        ${choices.map(
            (choice,index)=>`

            <button
            class="quiz-option"
            style="
            width:100%;
            margin:8px 0;
            "
            onclick="
            answerWeaknessQuiz(
            '${choice.replace(/'/g,"\\'")}'
            )
            "
            >

            ${index+1}.
            ${choice}

            </button>

            `
        ).join("")}

    </div>

    `;

}

function answerWeaknessQuiz(answer) {

    const question =
    weaknessQuizQuestions[
        weaknessQuizIndex
    ];

    if (
        answer ===
        question.grammar
    ) {
        weaknessQuizScore++;
    }

    weaknessQuizIndex++;

    if (
        weaknessQuizIndex >=
        weaknessQuizQuestions.length
    ) {

        finishWeaknessQuiz();
        return;

    }

    renderWeaknessQuiz();

}

function finishWeaknessQuiz() {

    const target =
    document.getElementById(
        "weaknessArea"
    );

    const rate =
    Math.round(
        weaknessQuizScore
        /
        weaknessQuizQuestions.length
        * 100
    );

    target.innerHTML = `

    <div class="grammar-item">

        <h2>

        📚 약점 퀴즈 결과

        </h2>

        <p>

        점수

        ${weaknessQuizScore}
        /
        ${weaknessQuizQuestions.length}

        </p>

        <p>

        정답률

        ${rate}%

        </p>

        <button
        onclick="
        renderWeaknessTab()
        "
        >

        약점 목록으로

        </button>

    </div>

    `;

}