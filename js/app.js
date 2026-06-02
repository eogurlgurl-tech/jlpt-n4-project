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

function toggleReading() {

    const box =
    document.getElementById(
        "grammarReading"
    );

    if(!box){
        return;
    }

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

        document.getElementById(
            "dashboardTab"
        ).style.display = "none";

        document.getElementById(
            "grammarTab"
        ).style.display = "none";

        document.getElementById(
            "vocabTab"
        ).style.display = "none";

        document.getElementById(
            "kanjiTab"
        ).style.display = "none";

        const favoriteTab =
        document.getElementById(
            "favoriteTab"
        );

        if(favoriteTab){
            favoriteTab.style.display =
            "none";
        }

        const quizTab =
        document.getElementById(
            "quizTab"
        );

        if(quizTab){
            quizTab.style.display =
            "none";
        }

        const tab =
        btn.dataset.tab;

        if(tab === "dashboard"){

            document
            .getElementById(
                "dashboardTab"
            )
            .style.display =
            "block";

        }

        if(tab === "grammar"){

            document
            .getElementById(
                "grammarTab"
            )
            .style.display =
            "block";

            renderGrammarCard();

        }

        if(tab === "vocab"){

            document
            .getElementById(
                "vocabTab"
            )
            .style.display =
            "block";

            renderVocabCard();

        }

        if(tab === "kanji"){

            document
            .getElementById(
                "kanjiTab"
            )
            .style.display =
            "block";

            renderKanjiCard();

        }

        if(tab === "favorite"){

            favoriteTab.style.display =
            "block";

            if(
                typeof renderFavoriteTab
                === "function"
            ){
                renderFavoriteTab();
            }

        }

        if(tab === "quiz"){

            quizTab.style.display =
            "block";

            if(
                typeof renderQuiz
                === "function"
            ){
                renderQuiz();
            }

        }

    });

});

// ======================
// GRAMMAR
// ======================

document
.getElementById("grammarPrev")
.addEventListener("click", () => {

    grammarIndex--;

    if(grammarIndex < 0){
        grammarIndex =
        GRAMMAR_DATA.length - 1;
    }

    resetGrammarStudy();
    renderGrammarCard();

});

document
.getElementById("grammarNext")
.addEventListener("click", () => {

    grammarIndex++;

    if(grammarIndex >= GRAMMAR_DATA.length){
        grammarIndex = 0;
    }

    resetGrammarStudy();
    renderGrammarCard();

});

document
.getElementById("grammarRandom")
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

document
.getElementById("vocabPrev")
.addEventListener("click", () => {

    vocabIndex--;

    if(vocabIndex < 0){
        vocabIndex =
        VOCAB_DATA.length - 1;
    }

    resetVocabStudy();
    renderVocabCard();

});

document
.getElementById("vocabNext")
.addEventListener("click", () => {

    vocabIndex++;

    if(vocabIndex >= VOCAB_DATA.length){
        vocabIndex = 0;
    }

    resetVocabStudy();
    renderVocabCard();

});

document
.getElementById("vocabRandom")
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

document
.getElementById("kanjiPrev")
.addEventListener("click", () => {

    kanjiIndex--;

    if(kanjiIndex < 0){
        kanjiIndex =
        KANJI_DATA.length - 1;
    }

    resetKanjiStudy();
    renderKanjiCard();

});

document
.getElementById("kanjiNext")
.addEventListener("click", () => {

    kanjiIndex++;

    if(kanjiIndex >= KANJI_DATA.length){
        kanjiIndex = 0;
    }

    resetKanjiStudy();
    renderKanjiCard();

});

document
.getElementById("kanjiRandom")
.addEventListener("click", () => {

    kanjiIndex =
    Math.floor(
        Math.random() *
        KANJI_DATA.length
    );

    resetKanjiStudy();
    renderKanjiCard();

});

renderDashboard();