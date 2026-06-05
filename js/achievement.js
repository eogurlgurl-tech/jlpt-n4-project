// Version 8.6.1
// Achievement Progress System

const ACHIEVEMENT_KEY =
"jlpt_achievements";

const ACHIEVEMENT_NOTICE_KEY =
"jlpt_achievement_notice";

const ACHIEVEMENTS = [

    {
        id:"beginner",
        icon:"🥉",
        title:"초보 학습자",
        description:"문법 진행률 10 달성",
        target:10,
        getCurrent:()=>progress.grammar
    },

    {
        id:"streak7",
        icon:"🔥",
        title:"꾸준한 학습자",
        description:"연속 학습 7일",
        target:7,
        getCurrent:()=>getStreakData().streak
    },

    {
        id:"quiz50",
        icon:"🎯",
        title:"퀴즈 마스터",
        description:"정답 50회 달성",
        target:50,
        getCurrent:()=>getQuizStats().correct
    },

    {
        id:"wrong20",
        icon:"📚",
        title:"오답 정복자",
        description:"오답노트 20개 저장",
        target:20,
        getCurrent:()=>getWrongAnswers().length
    },

    {
        id:"n4",
        icon:"👑",
        title:"N4 도전자",
        description:"문법 진행률 60 달성",
        target:60,
        getCurrent:()=>progress.grammar
    }

];

function getAchievements(){

    return JSON.parse(
        localStorage.getItem(
            ACHIEVEMENT_KEY
        )
    ) || [];

}

function getAchievementNotices(){

    return JSON.parse(
        localStorage.getItem(
            ACHIEVEMENT_NOTICE_KEY
        )
    ) || [];

}

function saveAchievement(id){

    const achievements =
    getAchievements();

    if(
        achievements.includes(id)
    ){
        return;
    }

    achievements.push(id);

    localStorage.setItem(
        ACHIEVEMENT_KEY,
        JSON.stringify(
            achievements
        )
    );

}

function showAchievementPopup(item){

    const notices =
    getAchievementNotices();

    if(
        notices.includes(item.id)
    ){
        return;
    }

    alert(
`🏆 업적 달성!

${item.icon} ${item.title}

${item.description}`
    );

    notices.push(item.id);

    localStorage.setItem(
        ACHIEVEMENT_NOTICE_KEY,
        JSON.stringify(notices)
    );

}

function checkAchievements(){

    ACHIEVEMENTS.forEach(item=>{

        const current =
        item.getCurrent();

        if(current >= item.target){

            const unlocked =
            getAchievements();

            if(
                !unlocked.includes(
                    item.id
                )
            ){

                saveAchievement(
                    item.id
                );

                showAchievementPopup(
                    item
                );

            }

        }

    });

}

function renderAchievementTab(){

    checkAchievements();

    const target =
    document.getElementById(
        "achievementArea"
    );

    if(!target){
        return;
    }

    const unlocked =
    getAchievements();

    target.innerHTML = "";

    ACHIEVEMENTS.forEach(item=>{

        const current =
        item.getCurrent();

        const percent =
        Math.min(
            100,
            Math.round(
                (current/item.target)*100
            )
        );

        const completed =
        unlocked.includes(
            item.id
        );

        target.innerHTML += `

        <div class="grammar-item">

            <h3>
                ${item.icon}
                ${item.title}
            </h3>

            <p>
                ${item.description}
            </p>

            <div
                style="
                width:100%;
                height:10px;
                background:#ddd;
                border-radius:20px;
                overflow:hidden;
                margin-top:8px;
                "
            >

                <div
                    style="
                    width:${percent}%;
                    height:100%;
                    background:#4caf50;
                    "
                ></div>

            </div>

            <p style="margin-top:8px;">

                ${current} / ${item.target}

                (${percent}%)

            </p>

            <p>

                ${
                    completed
                    ?
                    "✅ 획득 완료"
                    :
                    "🔒 진행 중"
                }

            </p>

        </div>

        `;

    });

}