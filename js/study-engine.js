// Version 4.5.0
// JLPT Study Engine

let vocabReadingVisible = false;
let vocabMeaningVisible = false;

let kanjiReadingVisible = false;
let kanjiMeaningVisible = false;

let grammarMeaningVisible = false;
let grammarExampleVisible = false;
let grammarReadingVisible = false;
let grammarKoreanVisible = false;

function resetVocabStudy() {

    vocabReadingVisible = false;
    vocabMeaningVisible = false;

}

function resetKanjiStudy() {

    kanjiReadingVisible = false;
    kanjiMeaningVisible = false;

}

function resetGrammarStudy() {

    grammarMeaningVisible = false;
    grammarExampleVisible = false;
    grammarReadingVisible = false;
    grammarKoreanVisible = false;

}

function toggleVocabReading() {

    vocabReadingVisible =
    !vocabReadingVisible;

    renderVocabCard();

}

function toggleVocabMeaning() {

    vocabMeaningVisible =
    !vocabMeaningVisible;

    renderVocabCard();

}

function toggleKanjiReading() {

    kanjiReadingVisible =
    !kanjiReadingVisible;

    renderKanjiCard();

}

function toggleKanjiMeaning() {

    kanjiMeaningVisible =
    !kanjiMeaningVisible;

    renderKanjiCard();

}

function toggleGrammarMeaning() {

    grammarMeaningVisible =
    !grammarMeaningVisible;

    renderGrammarCard();

}

function toggleGrammarExample() {

    grammarExampleVisible =
    !grammarExampleVisible;

    renderGrammarCard();

}

function toggleGrammarReading() {

    grammarReadingVisible =
    !grammarReadingVisible;

    renderGrammarCard();

}

function toggleGrammarKorean() {

    grammarKoreanVisible =
    !grammarKoreanVisible;

    renderGrammarCard();

}

const FAVORITE_KEY = "jlpt_favorites";

function getFavorites() {

    return JSON.parse(
        localStorage.getItem(FAVORITE_KEY)
    ) || [];

}

function saveFavorite(item) {

    const favorites =
    getFavorites();

    const exists =
    favorites.some(
        x => x.id === item.id
    );

    if(exists){
        return;
    }

    favorites.push(item);

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(favorites)
    );

}

function removeFavorite(id){

    const favorites =
    getFavorites();

    const filtered =
    favorites.filter(
        x => x.id !== id
    );

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(filtered)
    );

}