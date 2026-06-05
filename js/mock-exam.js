// Version 9.0.0
// JLPT Mock Exam

let mockQuestions = [];
let mockAnswers = {};

function startMockExam(){

    mockQuestions =
    [...GRAMMAR_DATA]
    .sort(()=>Math.random()-0.5)
    .slice(0,20);

    mockAnswers = {};

    renderMockExam();

}

function renderMockExam(){

    const target =
    document.getElementById(
        "mockExamArea"
    );

    if(!target){
        return;
    }

    if(mockQuestions.length===0){

        target.innerHTML = `

        <div class="grammar-item">

            <h3>
            📝 JLPT N4 모의고사
            </h3>

            <p>
            20문제 랜덤 출제
            </p>

            <button
            onclick="startMockExam()"
            >

            시험 시작

            </button>

        </div>

        `;

        return;

    }

    let html = "";

    mockQuestions.forEach(
    (q,index)=>{

    const wrongs =
    GRAMMAR_DATA
    .filter(
    x=>x.title!==q.title
    )
    .sort(
    ()=>Math.random()-0.5
    )
    .slice(0,3)
    .map(
    x=>x.meaning
    );

    const choices =
    [
    q.meaning,
    ...wrongs
    ]
    .sort(
    ()=>Math.random()-0.5
    );

    html += `

    <div class="grammar-item">

    <h3>

    ${index+1}. ${q.title}

    </h3>

    ${choices.map(choice=>`

    <button
    class="quiz-option"
    onclick="
    mockAnswers[${index}]
    ='${choice.replace(/'/g,"\\'")}';

    this.parentNode
    .querySelectorAll(
    '.quiz-option'
    )
    .forEach(
    b=>b.style.opacity='0.5'
    );

    this.style.opacity='1';
    "
    >

    ${choice}

    </button>

    `).join("")}

    </div>

    `;

    });

    html += `

    <button
    onclick="submitMockExam()"
    >

    시험 제출

    </button>

    `;

    target.innerHTML =
    html;

}

function submitMockExam(){

    let score = 0;

    mockQuestions.forEach(
        (q,index)=>{

        if(
            mockAnswers[index]
            === q.meaning
        ){

            score++;

        }

    });

    const rate =
    Math.round(
        score /
        mockQuestions.length
        * 100
    );

    let grade = "D";

    if(rate>=90){
        grade="S";
    }else if(rate>=80){
        grade="A";
    }else if(rate>=70){
        grade="B";
    }else if(rate>=60){
        grade="C";
    }

    const target =
    document.getElementById(
        "mockExamArea"
    );

    target.innerHTML = `

    <div class="grammar-item">

        <h2>
        시험 결과
        </h2>

        <p>
        점수 :
        ${score}
        /
        ${mockQuestions.length}
        </p>

        <p>
        정답률 :
        ${rate}%
        </p>

        <p>
        등급 :
        ${grade}
        </p>

        <p>

        ${
            rate>=60
            ?
            "✅ 합격"
            :
            "❌ 불합격"
        }

        </p>

        <button
        onclick="
        startMockExam()
        "
        >

        다시 보기

        </button>

    </div>

    `;

}