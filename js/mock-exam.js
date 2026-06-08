const WEAKNESS_KEY = "jlpt_weakness_stats";
const ACCURACY_KEY = "jlpt_accuracy_stats";

function getWeaknessStats() {
  return JSON.parse(localStorage.getItem(WEAKNESS_KEY)) || {};
}

function saveWeaknessStats(data) {
  localStorage.setItem(WEAKNESS_KEY, JSON.stringify(data));
}

function getAccuracyStats() {
  return JSON.parse(localStorage.getItem(ACCURACY_KEY)) || {};
}

function saveAccuracyStats(data) {
  localStorage.setItem(ACCURACY_KEY, JSON.stringify(data));
}

// Version 9.2.1
// JLPT Mock Exam

let mockQuestions = [];
let mockAnswers = {};
let mockChoices = {};

let currentQuestion = 0;
let examTime = 1200;
let timerInterval = null;

function startMockExam() {
  mockQuestions = [...QUESTION_BANK_V2]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(20, QUESTION_BANK_V2.length));

  mockAnswers = {};
  mockChoices = {};

  mockQuestions.forEach((q, index) => {
    mockChoices[index] = q.choices;
  });

  currentQuestion = 0;
  examTime = 1200;

  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    examTime--;

    const timer = document.getElementById("examTimer");

    if (timer) {
      const min = Math.floor(examTime / 60);

      const sec = examTime % 60;

      timer.innerText = `⏰ ${min}:${String(sec).padStart(2, "0")}`;
    }

    if (examTime <= 0) {
      clearInterval(timerInterval);

      submitMockExam();
    }
  }, 1000);

  renderMockExam();
}

function renderMockExam() {
  const target = document.getElementById("mockExamArea");

  if (!target) {
    return;
  }

  if (mockQuestions.length === 0) {
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

  const q = mockQuestions[currentQuestion];

  const choices = mockChoices[currentQuestion];

  let html = `

    <div class="grammar-item">

        <h3 id="examTimer">

        ⏰ ${Math.floor(examTime / 60)}:${String(examTime % 60).padStart(2, "0")}

        </h3>

        <p>

        문제
        ${currentQuestion + 1}
        /
        ${mockQuestions.length}

        </p>

        <div
        style="
        height:12px;
        background:#ddd;
        border-radius:10px;
        overflow:hidden;
        "
        >

            <div
            style="
            width:${((currentQuestion + 1) / mockQuestions.length) * 100}%;
            height:100%;
            background:#2d63e2;
            "
            >

            </div>

        </div>

    </div>

    <div class="grammar-item">

        <h3>

        ${currentQuestion + 1}.
        ${q.question}

        </h3>

    `;

  choices.forEach((choice, idx) => {
    const selected = mockAnswers[currentQuestion] === choice;

    html += `

        <button
        class="quiz-option"
        style="
        width:100%;
        margin:8px 0;
        opacity:${selected ? "1" : "0.7"};
        border:${selected ? "3px solid #0f172a" : "1px solid transparent"};
        "
        onclick="
        selectMockAnswer(
            ${currentQuestion},
            '${choice.replace(/'/g, "\\'")}'
        )
        "
        >

        ${selected ? "✅ " : ""}
        ${idx + 1}. ${choice}

        </button>

        `;
  });

  html += `

    </div>

    <div
    style="
    display:flex;
    gap:10px;
    margin-top:20px;
    "
    >

        <button
        onclick="prevQuestion()"
        ${currentQuestion === 0 ? "disabled" : ""}
        >
        이전
        </button>

        <button
        onclick="nextQuestion()"
        ${currentQuestion === mockQuestions.length - 1 ? "disabled" : ""}
        >
        다음
        </button>

        <button
        onclick="submitMockExam()"
        >
        시험 제출
        </button>

    </div>

    `;

  target.innerHTML = html;
}

function selectMockAnswer(index, answer) {
  mockAnswers[index] = answer;

  renderMockExam();
}

function nextQuestion() {
  if (currentQuestion < mockQuestions.length - 1) {
    currentQuestion++;

    renderMockExam();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;

    renderMockExam();
  }
}

function submitMockExam() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  let score = 0;
  let wrongList = [];
  const weaknessData = getWeaknessStats();
  const accuracyData = getAccuracyStats();

  mockQuestions.forEach((q, index) => {
    const grammarInfo = GRAMMAR_DATA.find((x) => x.title === q.grammar);

    if (!accuracyData[q.grammar]) {
      accuracyData[q.grammar] = {
        total: 0,
        correct: 0,
      };
    }

    accuracyData[q.grammar].total++;

    if (mockAnswers[index] === q.answer) {
      score++;
      accuracyData[q.grammar].correct++;
    } else {
      weaknessData[q.grammar] = (weaknessData[q.grammar] || 0) + 1;

      wrongList.push({
        title: q.grammar,

        userAnswer: mockAnswers[index] || "미응답",

        correctAnswer: q.answer,

        example: grammarInfo?.example || q.question,

        reading: grammarInfo?.reading || "-",

        koreanReading: grammarInfo?.koreanReading || "-",

        korean: grammarInfo?.korean || q.korean,
      });
    }
    
  });

  saveAccuracyStats(accuracyData);
  saveWeaknessStats(weaknessData);

  const weaknessTop5 = Object.entries(weaknessData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const rate = Math.round((score / mockQuestions.length) * 100);

  let grade = "D";

  if (rate >= 90) {
    grade = "S";
  } else if (rate >= 80) {
    grade = "A";
  } else if (rate >= 70) {
    grade = "B";
  } else if (rate >= 60) {
    grade = "C";
  }

  const target = document.getElementById("mockExamArea");

  let wrongHtml = "";

  wrongList.forEach((item) => {
    wrongHtml += `

        <div
        style="
        margin-top:15px;
        padding:15px;
        border:1px solid #ddd;
        border-radius:10px;
        background:#fafafa;
        "
        >

        <h3>

        ❌ ${item.title}

        </h3>

        <p>

        <strong>내 답</strong>

        <br>

        ${item.userAnswer}

        </p>

        <p>

        <strong>정답</strong>

        <br>

        ${item.correctAnswer}

        </p>

        <hr>

        <p>

        <strong>예문</strong>

        <br>

        ${item.example}

        </p>

        <p>

        <strong>읽기</strong>

        <br>

        ${item.reading}

        </p>

        <p>

        <strong>한글 발음</strong>

        <br>

        ${item.koreanReading}

        </p>

        <p>

        <strong>해석</strong>

        <br>

        ${item.korean}

        </p>

        </div>

        `;
  });

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

        ${rate >= 60 ? "✅ 합격" : "❌ 불합격"}

        </p>
    
        <h3>

        📊 약점 TOP 5

        </h3>

        ${weaknessTop5
          .map(
            (item, index) => `

        <p>

        ${index + 1}위

        ${item[0]}

        (${item[1]}회)

        </p>

        `,
          )
          .join("")}

        <hr>

        <h3>
        오답 분석
        </h3>
        ${wrongHtml}

        <button
        onclick="startMockExam()"
        >
        다시 보기
        </button>

    </div>

    `;
}
