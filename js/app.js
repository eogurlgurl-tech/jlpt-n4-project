const STORAGE_KEY = "jlpt_n4_progress";

const defaultData = {
    currentDay: 1,
    grammar: 0,
    vocab: 0,
    kanji: 0,
    streak: 0
};

let progress =
JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || defaultData;

function saveData() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}

function renderDashboard() {

    document.getElementById("dayCounter").innerText =
        `DAY ${progress.currentDay} / ${STUDY_CONFIG.totalDays}`;

    document.getElementById("grammarProgress").innerText =
        progress.grammar + "%";

    document.getElementById("vocabProgress").innerText =
        progress.vocab + "%";

    document.getElementById("kanjiProgress").innerText =
        progress.kanji + "%";

    let level = "JLPT N5 준비중";

    if(progress.grammar >= 30){
        level = "JLPT N5 합격권";
    }

    if(progress.grammar >= 60){
        level = "JLPT N4 도전권";
    }

    if(progress.grammar >= 85){
        level = "JLPT N4 합격권";
    }

    document.getElementById("jlptLevel").innerText =
        level;
}

document
.getElementById("startBtn")
.addEventListener("click", () => {

    progress.currentDay++;

    if(progress.currentDay > 180){
        progress.currentDay = 180;
    }

    progress.grammar += 1;
    progress.vocab += 1;
    progress.kanji += 1;

    saveData();
    renderDashboard();

    alert(
        `DAY ${progress.currentDay} 완료!`
    );

});

renderDashboard();
