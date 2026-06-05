// Version 8.7.0
// Weekly Report System

function getWeeklyGrade(rate){

    if(rate >= 90){
        return "S";
    }

    if(rate >= 80){
        return "A";
    }

    if(rate >= 70){
        return "B";
    }

    if(rate >= 60){
        return "C";
    }

    return "D";
}

function renderReportTab(){

    const streak =
    getStreakData();

    const quiz =
    getQuizStats();

    const achievements =
    typeof getAchievements === "function"
    ? getAchievements().length
    : 0;

    const quizRate =
    quiz.total > 0
    ? Math.round(
        (quiz.correct / quiz.total) * 100
      )
    : 0;

    const grade =
    getWeeklyGrade(
        quizRate
    );

    let comment =
    "학습을 시작해보세요.";

    if(grade === "S"){
        comment =
        "매우 우수한 학습 상태입니다.";
    }

    if(grade === "A"){
        comment =
        "좋은 학습 흐름을 유지하고 있습니다.";
    }

    if(grade === "B"){
        comment =
        "조금만 더 집중하면 됩니다.";
    }

    if(grade === "C"){
        comment =
        "복습 비중을 늘려보세요.";
    }

    if(grade === "D"){
        comment =
        "학습 루틴 정착이 필요합니다.";
    }

    const target =
    document.getElementById(
        "reportArea"
    );

    if(!target){
        return;
    }

    target.innerHTML = `

    <div class="grammar-item">

        <h3>📅 이번 주 학습 현황</h3>

        <p>문법 진행 : ${progress.grammar}</p>
        <p>단어 진행 : ${progress.vocab}</p>
        <p>한자 진행 : ${progress.kanji}</p>

        <hr>

        <p>🔥 연속 학습 : ${streak.streak}일</p>

        <p>📝 퀴즈 풀이 : ${quiz.total}문제</p>

        <p>📊 정답률 : ${quizRate}%</p>

        <p>🏅 업적 : ${achievements}/5</p>

    </div>

    <div class="grammar-item">

        <h3>🏆 이번 주 등급</h3>

        <h2>${grade}</h2>

        <p>${comment}</p>

    </div>

    <div class="grammar-item">

        <h3>🎯 다음 목표</h3>

        <p>문법 10 달성</p>
        <p>연속 학습 7일</p>
        <p>퀴즈 정답 50회</p>

    </div>

    `;
}