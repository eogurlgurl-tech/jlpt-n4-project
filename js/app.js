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

function renderGrammar(){

    const target =
    document.getElementById("grammarCard");

    target.innerHTML =
    GRAMMAR_DATA.map((item,index) => `

    <div class="grammar-item">

        <h3>${item.title}</h3>

        <p><strong>뜻</strong></p>
        <p>${item.meaning}</p>

        <p><strong>예문</strong></p>
        <p>${item.example}</p>

        <p><strong>해석</strong></p>
        <p>${item.korean}</p>

        <button
            class="reading-btn"
            onclick="toggleReading(${index})">

            읽는 방법 보기

        </button>

        <div
            id="reading-${index}"
            class="reading-box"
            style="display:none;">

            <p>
            <strong>히라가나 읽기</strong>
            </p>

            <p>${item.reading}</p>

            <p>
            <strong>한글식 발음</strong>
            </p>

            <p>${item.koreanReading}</p>

        </div>

    </div>

    `).join("");

}

function toggleReading(index){

    const box =
    document.getElementById(
        `reading-${index}`
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

        const target = btn.dataset.tab;

        if(target === "dashboard"){
            document.getElementById("dashboardTab").style.display = "block";
        }

        if(target === "grammar"){
            document.getElementById("grammarTab").style.display = "block";
            renderGrammar();
        }

    });

});

renderDashboard();
