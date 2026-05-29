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

    renderTodayStudy();

}

function renderTodayStudy() {

    let html = `
        <h3>오늘 학습 추천</h3>

        <p>DAY ${progress.currentDay}</p>

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
        target.innerHTML = html;
    }

}

function renderGrammarCard() {

    const item =
    GRAMMAR_DATA[grammarIndex];

    document.getElementById(
        "grammarCard"
    ).innerHTML = `

    <div class="grammar-item">

        <h3>${item.title}</h3>

        <button
        class="reading-btn"
        onclick="toggleGrammarMeaning()">

        ${
            grammarMeaningVisible
            ?
            "뜻 숨기기"
            :
            "뜻 보기"
        }

        </button>

        ${
            grammarMeaningVisible
            ?
            `
            <div class="reading-box">
                <p>${item.meaning}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleGrammarExample()">

        ${
            grammarExampleVisible
            ?
            "예문 숨기기"
            :
            "예문 보기"
        }

        </button>

        ${
            grammarExampleVisible
            ?
            `
            <div class="reading-box">
                <p>${item.example}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleGrammarReading()">

        ${
            grammarReadingVisible
            ?
            "읽기 숨기기"
            :
            "읽기 보기"
        }

        </button>

        ${
            grammarReadingVisible
            ?
            `
            <div class="reading-box">
                <p>${item.reading}</p>
                <p>${item.koreanReading}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleGrammarKorean()">

        ${
            grammarKoreanVisible
            ?
            "해석 숨기기"
            :
            "해석 보기"
        }

        </button>

        ${
            grammarKoreanVisible
            ?
            `
            <div class="reading-box">
                <p>${item.korean}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="saveFavorite({

        id:'grammar-'+grammarIndex,

        type:'문법',

        title:item.title,

        meaning:item.meaning

        })">

        ⭐ 중요

        </button>


    </div>

    `;

}

function renderVocabCard() {

    const item =
    VOCAB_DATA[vocabIndex];

    document.getElementById(
        "vocabCard"
    ).innerHTML = `

    <div class="grammar-item">

        <h3>${item.word}</h3>

        <button
        class="reading-btn"
        onclick="toggleVocabReading()">

        ${
            vocabReadingVisible
            ?
            "읽기 숨기기"
            :
            "읽기 보기"
        }

        </button>

        ${
            vocabReadingVisible
            ?
            `
            <div class="reading-box">
                <p>${item.reading}</p>
                <p>${item.koreanReading}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleVocabMeaning()">

        ${
            vocabMeaningVisible
            ?
            "뜻 숨기기"
            :
            "뜻 보기"
        }

        </button>

        ${
            vocabMeaningVisible
            ?
            `
            <div class="reading-box">
                <p>${item.meaning}</p>
            </div>
            `
            :
            ""
        }

    </div>

    `;

}

function renderKanjiCard() {

    const item =
    KANJI_DATA[kanjiIndex];

    document.getElementById(
        "kanjiCard"
    ).innerHTML = `

    <div class="grammar-item">

        <h3>${item.kanji}</h3>

        <button
        class="reading-btn"
        onclick="toggleKanjiReading()">

        ${
            kanjiReadingVisible
            ?
            "읽기 숨기기"
            :
            "읽기 보기"
        }

        </button>

        ${
            kanjiReadingVisible
            ?
            `
            <div class="reading-box">
                <p>${item.reading}</p>
                <p>${item.koreanReading}</p>
            </div>
            `
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleKanjiMeaning()">

        ${
            kanjiMeaningVisible
            ?
            "뜻 숨기기"
            :
            "뜻 보기"
        }

        </button>

        ${
            kanjiMeaningVisible
            ?
            `
            <div class="reading-box">
                <p>${item.meaning}</p>
            </div>
            `
            :
            ""
        }

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

        const tab =
        btn.dataset.tab;

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

// ======================
// GRAMMAR
// ======================

document.getElementById("grammarPrev")
.addEventListener("click", () => {

    grammarIndex--;

    if(grammarIndex < 0){
        grammarIndex =
        GRAMMAR_DATA.length - 1;
    }

    resetGrammarStudy();
    renderGrammarCard();

});

document.getElementById("grammarNext")
.addEventListener("click", () => {

    grammarIndex++;

    if(grammarIndex >= GRAMMAR_DATA.length){
        grammarIndex = 0;
    }

    resetGrammarStudy();
    renderGrammarCard();

});

document.getElementById("grammarRandom")
.addEventListener("click", () => {

    grammarIndex =
    Math.floor(
        Math.random() *
        GRAMMAR_DATA.length
    );

    resetGrammarStudy();
    renderGrammarCard();

});

// ======================
// VOCAB
// ======================

document.getElementById("vocabPrev")
.addEventListener("click", () => {

    vocabIndex--;

    if(vocabIndex < 0){
        vocabIndex =
        VOCAB_DATA.length - 1;
    }
    resetVocabStudy();
    renderVocabCard();

});

document.getElementById("vocabNext")
.addEventListener("click", () => {

    vocabIndex++;

    if(vocabIndex >= VOCAB_DATA.length){
        vocabIndex = 0;
    }

    resetVocabStudy();
    renderVocabCard();

});

document.getElementById("vocabRandom")
.addEventListener("click", () => {

    vocabIndex =
    Math.floor(
        Math.random() *
        VOCAB_DATA.length
    );

    resetVocabStudy();
    renderVocabCard();

});

// ======================
// KANJI
// ======================

document.getElementById("kanjiPrev")
.addEventListener("click", () => {

    kanjiIndex--;

    if(kanjiIndex < 0){
        kanjiIndex =
        KANJI_DATA.length - 1;
    }

    resetVocabStudy();
    renderKanjiCard();

});

document.getElementById("kanjiNext")
.addEventListener("click", () => {

    kanjiIndex++;

    if(kanjiIndex >= KANJI_DATA.length){
        kanjiIndex = 0;
    }

    resetVocabStudy();
    renderKanjiCard();

});

document.getElementById("kanjiRandom")
.addEventListener("click", () => {

    kanjiIndex =
    Math.floor(
        Math.random() *
        KANJI_DATA.length
    );

    resetVocabStudy();
    renderKanjiCard();

});

renderDashboard();