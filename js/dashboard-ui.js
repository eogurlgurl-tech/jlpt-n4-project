
// Version 8.5.0 Quiz Analytics Dashboard
function renderDashboard() {
 const dayPercent=Math.min(100,Math.round((progress.currentDay/180)*100));
 const favoriteCount=getFavorites().length;
 const wrongCount=getWrongAnswers().length;
 const streakData=(typeof getStreakData==="function")?getStreakData():{streak:0,bestStreak:0};
 const quizStats=(typeof getQuizStats==="function")?getQuizStats():{total:0,correct:0};
 const quizRate=quizStats.total?Math.round((quizStats.correct/quizStats.total)*100):0;
 let level="JLPT N5 준비중", nextLevel="JLPT N5 합격권";
 if(progress.grammar>=30){level="JLPT N5 합격권"; nextLevel="JLPT N4 도전권";}
 if(progress.grammar>=60){level="JLPT N4 도전권"; nextLevel="JLPT N4 합격권";}
 if(progress.grammar>=85){level="JLPT N4 합격권"; nextLevel="완료";}
 document.getElementById("dayCounter").innerHTML=`<div class="hero-day">🔥 DAY ${progress.currentDay} / 180</div><div class="progress-bar"><div class="progress-fill" style="width:${dayPercent}%"></div></div><div class="progress-text">${dayPercent}% 완료</div>`;
 document.getElementById("jlptLevel").innerHTML=`
 <div class="stat-grid">
 <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-title">중요</div><div class="stat-value">${favoriteCount}</div></div>
 <div class="stat-card"><div class="stat-icon">❌</div><div class="stat-title">오답</div><div class="stat-value">${wrongCount}</div></div>
 <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-title">연속</div><div class="stat-value">${streakData.streak}</div></div>
 <div class="stat-card"><div class="stat-icon">🏆</div><div class="stat-title">최고</div><div class="stat-value">${streakData.bestStreak}</div></div>
 <div class="stat-card"><div class="stat-icon">📊</div><div class="stat-title">정답률</div><div class="stat-value">${quizRate}%</div></div>
 <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-title">${level}</div><div class="stat-next">${nextLevel}</div></div>
 </div>`;
 renderTodayStudy();
}
function renderTodayStudy(){
 document.getElementById("todayStudyArea").innerHTML=`<h3>🔥 오늘 학습 추천</h3><p>연속 학습을 이어가세요.</p>`;
}
