const STORAGE_KEY = "jlpt_n4_progress";

const defaultData = {
    currentDay: 1,
    grammar: 0,
    vocab: 0,
    kanji: 0
};

let progress =
JSON.parse(
    localStorage.getItem(STORAGE_KEY)
) || defaultData;

let grammarIndex = 0;
let vocabIndex = 0;
let kanjiIndex = 0;

function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );

}

function renderDashboard() {

    document.getElementById("dayCounter").innerText =
    `DAY ${progress.currentDay} / 180`;

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

function renderGrammarCard() {

    const item = GRAMMAR_DATA[grammarIndex];

    document.getElementById("grammarCard").innerHTML = `

    <div class="grammar-item">

        <h3>${item.title}</h3>

        <p>${item.meaning}</p>

        <p>${item.example}</p>

        <button
        class="reading-btn"
        onclick="toggleReading()">

        읽는 방법 보기

        </button>

        <div
        id="grammarReading"
        class="reading-box"
        style="display:none;">

            <p>${item.reading}</p>

            <p>${item.koreanReading}</p>

            <p>${item.korean}</p>

        </div>

    </div>

    `;

}

function toggleReading() {

    const box =
    document.getElementById(
        "grammarReading"
    );

    if(box.style.display === "none"){

        box.style.display = "block";

    }else{

        box.style.display = "none";

    }

}

function renderVocabCard() {

    const item = VOCAB_DATA[vocabIndex];

    document.getElementById("vocabCard").innerHTML = `

    <div class="grammar-item">

        <h3>${item.word}</h3>

        <p>${item.reading}</p>

        <p>${item.koreanReading}</p>

        <p>${item.meaning}</p>

    </div>

    `;

}

function renderKanjiCard() {

    const item = KANJI_DATA[kanjiIndex];

    document.getElementById("kanjiCard").innerHTML = `

    <div class="grammar-item">

        <h3>${item.kanji}</h3>

        <p>${item.reading}</p>

        <p>${item.koreanReading}</p>

        <p>${item.meaning}</p>

    </div>

    `;

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

document
.querySelectorAll(".tab-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelectorAll(".tab-btn")
        .forEach(x =>
            x.classList.remove("active")
        );

        btn.classList.add("active");

        document.getElementById("dashboardTab").style.display = "none";
        document.getElementById("grammarTab").style.display = "none";
        document.getElementById("vocabTab").style.display = "none";
        document.getElementById("kanjiTab").style.display = "none";

        const tab = btn.dataset.tab;

        if(tab === "dashboard"){
            document.getElementById("dashboardTab").style.display = "block";
        }

        if(tab === "grammar"){
            document.getElementById("grammarTab").style.display = "block";
            renderGrammarCard();
        }

        if(tab === "vocab"){
            document.getElementById("vocabTab").style.display = "block";
            renderVocabCard();
        }

        if(tab === "kanji"){
            document.getElementById("kanjiTab").style.display = "block";
            renderKanjiCard();
        }

    });

});

renderDashboard();