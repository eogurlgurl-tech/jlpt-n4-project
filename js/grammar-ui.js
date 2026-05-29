// Version 5.1.0
// Grammar UI

function saveFavoriteGrammar() {

    const item =
    GRAMMAR_DATA[grammarIndex];

    saveFavorite({

        id: 'grammar-' + grammarIndex,
        type: '문법',
        title: item.title,
        meaning: item.meaning

    });

    alert("⭐ 오답노트 저장 완료");

}

function renderGrammarCard() {

    const item =
    GRAMMAR_DATA[grammarIndex];

    document.getElementById(
        "grammarCard"
    ).innerHTML = `

    <div class="grammar-item">

        <h3>${item.title}</h3>

        <button class="reading-btn"
        onclick="toggleGrammarMeaning()">

        ${grammarMeaningVisible ? "뜻 숨기기" : "뜻 보기"}

        </button>

        ${grammarMeaningVisible
            ? `<div class="reading-box">
                <p>${item.meaning}</p>
               </div>`
            : ""}

        <button class="reading-btn"
        onclick="toggleGrammarExample()">

        ${grammarExampleVisible ? "예문 숨기기" : "예문 보기"}

        </button>

        ${grammarExampleVisible
            ? `<div class="reading-box">
                <p>${item.example}</p>
               </div>`
            : ""}

        <button class="reading-btn"
        onclick="toggleGrammarReading()">

        ${grammarReadingVisible ? "읽기 숨기기" : "읽기 보기"}

        </button>

        ${grammarReadingVisible
            ? `<div class="reading-box">
                <p>${item.reading}</p>
                <p>${item.koreanReading}</p>
               </div>`
            : ""}

        <button class="reading-btn"
        onclick="toggleGrammarKorean()">

        ${grammarKoreanVisible ? "해석 숨기기" : "해석 보기"}

        </button>

        ${grammarKoreanVisible
            ? `<div class="reading-box">
                <p>${item.korean}</p>
               </div>`
            : ""}

        <button class="reading-btn"
        onclick="saveFavoriteGrammar()">

        ⭐ 중요

        </button>

    </div>

    `;

}