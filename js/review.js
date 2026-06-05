// Version 8.8.0
// Smart Review System

const REVIEW_KEY =
"jlpt_review_data";

function getReviewData(){

    return JSON.parse(
        localStorage.getItem(
            REVIEW_KEY
        )
    ) || [];

}

function saveReviewData(data){

    localStorage.setItem(
        REVIEW_KEY,
        JSON.stringify(data)
    );

}

function addReviewItem(
    id,
    title
){

    const data =
    getReviewData();

    const exists =
    data.find(
        item =>
        item.id === id
    );

    if(exists){
        return;
    }

    const nextDate =
    new Date();

    nextDate.setDate(
        nextDate.getDate() + 3 
    );

    data.push({

        id:id,

        title:title,

        level:1,

        nextReview:
        nextDate
        .toISOString()
        .split("T")[0]

    });

    saveReviewData(
        data
    );

}

function getTodayReviews(){

    const today =
    new Date()
    .toISOString()
    .split("T")[0];

    return getReviewData()
    .filter(
        item =>
        item.nextReview <= today
    );

}

function completeReview(id){

    const data =
    getReviewData();

    const target =
    data.find(
        item =>
        item.id === id
    );

    if(!target){
        return;
    }

    const periods = {
        1:7,
        2:14,
        3:30
    };

    const next =
    periods[
        target.level
    ] || 30;

    target.level++;

    const nextDate =
    new Date();

    nextDate.setDate(
        nextDate.getDate()
        + next
    );

    target.nextReview =
    nextDate
    .toISOString()
    .split("T")[0];

    saveReviewData(
        data
    );

    renderReviewTab();

}

function renderReviewTab(){

    const target =
    document.getElementById(
        "reviewArea"
    );

    if(!target){
        return;
    }

    const reviews =
    getTodayReviews();

    if(
        reviews.length === 0
    ){

        target.innerHTML = `

        <div class="grammar-item">

            <h3>
            🎉 오늘 복습 없음
            </h3>

            <p>
            오늘은 복습 대상이 없습니다.
            </p>

        </div>

        `;

        return;

    }

    let html = `
    <div class="grammar-item">

    <h3>
    🔄 오늘 복습
    </h3>

    <p>
    총 ${reviews.length}건
    </p>

    </div>
    `;

    reviews.forEach(item=>{

        html += `

        <div class="grammar-item">

            <h3>
            ${item.title}
            </h3>

            <p>
            복습 단계 :
            ${item.level}
            </p>

            <p>
            예정일 :
            ${item.nextReview}
            </p>

            <button
            onclick="
            completeReview(
            '${item.id}'
            )"
            >

            ✅ 복습 완료

            </button>

        </div>

        `;

    });

    target.innerHTML =
    html;

}