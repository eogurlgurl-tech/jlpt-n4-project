// Version 5.0.0
// Dashboard UI

function renderDashboard() {

    document.getElementById(
        "dayCounter"
    ).innerText =
    `DAY ${progress.currentDay} / 180`;

    document.getElementById(
        "grammarProgress"
    ).innerText =
    progress.grammar + "%";

    document.getElementById(
        "vocabProgress"
    ).innerText =
    progress.vocab + "%";

    document.getElementById(
        "kanjiProgress"
    ).innerText =
    progress.kanji + "%";

    let level =
    "JLPT N5 준비중";

    if(progress.grammar >= 30){
        level =
        "JLPT N5 합격권";
    }

    if(progress.grammar >= 60){
        level =
        "JLPT N4 도전권";
    }

    if(progress.grammar >= 85){
        level =
        "JLPT N4 합격권";
    }

    document.getElementById(
        "jlptLevel"
    ).innerText =
    level;

    renderTodayStudy();

}

function renderTodayStudy() {

    let html = `

        <h3>
        오늘 학습 추천
        </h3>

        <p>
        DAY ${progress.currentDay}
        </p>

        <hr>

        <p>문법 3개</p>

        <p>단어 20개</p>

        <p>한자 5개</p>

    `;

    const target =
    document.getElementById(
        "todayStudyArea"
    );

    if(target){

        target.innerHTML =
        html;

    }

}