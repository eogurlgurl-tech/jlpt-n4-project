// Version 5.1.0
// Vocab UI

function saveFavoriteVocab() {

    const item =
    VOCAB_DATA[vocabIndex];

    saveFavorite({

        id: 'vocab-' + vocabIndex,
        type: '단어',
        title: item.word,
        meaning: item.meaning

    });

    alert("⭐ 오답노트 저장 완료");

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

        ${vocabReadingVisible ? "읽기 숨기기" : "읽기 보기"}

        </button>

        ${
            vocabReadingVisible
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
        onclick="toggleVocabMeaning()">

        ${vocabMeaningVisible ? "뜻 숨기기" : "뜻 보기"}

        </button>

        ${
            vocabMeaningVisible
            ?
            `<div class="reading-box">
                <p>${item.meaning}</p>
            </div>`
            :
            ""
        }

        <button
        class="reading-btn"
        onclick="saveFavoriteVocab()">

        ⭐ 중요

        </button>

    </div>

    `;

}