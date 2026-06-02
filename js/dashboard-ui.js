// Version 8.2.0 Premium Dashboard
function renderDashboard() {
 const dayPercent=Math.min(100,Math.round((progress.currentDay/180)*100));
 const totalStudy=progress.grammar+progress.vocab+progress.kanji;
 const favoriteCount=getFavorites().length;
 const wrongCount=getWrongAnswers().length;
 let level="JLPT N5 준비중", nextLevel="JLPT N5 합격권";
 if(progress.grammar>=30){level="JLPT N5 합격권"; nextLevel="JLPT N4 도전권";}
 if(progress.grammar>=60){level="JLPT N4 도전권"; nextLevel="JLPT N4 합격권";}
 if(progress.grammar>=85){level="JLPT N4 합격권"; nextLevel="완료";}
 document.getElementById("dayCounter").innerHTML=`
 <div class="hero-day">🔥 DAY ${progress.currentDay} / 180</div>
 <div class="progress-bar"><div class="progress-fill" style="width:${dayPercent}%"></div></div>
 <div class="progress-text">${dayPercent}% 완료</div>`;
 document.getElementById("jlptLevel").innerHTML=`
 <div class="stat-grid">
 <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-title">중요</div><div class="stat-value">${favoriteCount}</div><div class="stat-desc">저장 항목</div></div>
 <div class="stat-card"><div class="stat-icon">❌</div><div class="stat-title">오답</div><div class="stat-value">${wrongCount}</div><div class="stat-desc">누적 항목</div></div>
 <div class="stat-card"><div class="stat-icon">📚</div><div class="stat-title">학습</div><div class="stat-value">${totalStudy}</div><div class="stat-desc">완료 수</div></div>
 <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-title">${level}</div><div class="stat-desc">다음 목표</div><div class="stat-next">${nextLevel}</div></div>
 </div>`;
 document.getElementById("grammarProgress").innerText=progress.grammar+"%";
 document.getElementById("vocabProgress").innerText=progress.vocab+"%";
 document.getElementById("kanjiProgress").innerText=progress.kanji+"%";
 renderTodayStudy();
}
function renderTodayStudy(){
 document.getElementById("todayStudyArea").innerHTML=`<h3>🔥 오늘 학습 추천</h3><p>문법 3개</p><p>단어 20개</p><p>한자 5개</p>`;
}
