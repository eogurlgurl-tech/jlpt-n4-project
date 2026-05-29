// Version 5.1.0
// Kanji UI

function saveFavoriteKanji() {

    const item =
    KANJI_DATA[kanjiIndex];

    saveFavorite({

        id: 'kanji-' + kanjiIndex,
        type: '한자',
        title: item.kanji,
        meaning: item.meaning

    });

    alert("⭐ 오답노트 저장 완료");

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

        ${kanjiReadingVisible ? "읽기 숨기기" : "읽기 보기"}

        </button>

        ${
            kanjiReadingVisible
            ?
            `<div class="reading-box">
                <p>${item.reading}</p>
                <p>${item.koreanReading}</p>
            </div>`
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="toggleKanjiMeaning()">

        ${kanjiMeaningVisible ? "뜻 숨기기" : "뜻 보기"}

        </button>

        ${
            kanjiMeaningVisible
            ?
            `<div class="reading-box">
                <p>${item.meaning}</p>
            </div>`
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="saveFavoriteKanji()">

        ⭐ 중요

        </button>

    </div>

    `;

}