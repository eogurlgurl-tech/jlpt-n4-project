const currentDay =
Number(localStorage.getItem("currentDay")) || 1;

document.getElementById("dayCounter").innerText =
`DAY ${currentDay} / ${STUDY_CONFIG.totalDays}`;

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    alert(
        `DAY ${currentDay} 학습을 시작합니다`
    );

});
