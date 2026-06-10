// Version 8.6.1 Dashboard + Achievement

function renderDashboard() {
  const dayPercent = Math.min(
    100,
    Math.round((progress.currentDay / 180) * 100),
  );

  const favoriteCount = getFavorites().length;

  const wrongCount = getWrongAnswers().length;

  const streakData =
    typeof getStreakData === "function"
      ? getStreakData()
      : {
          streak: 0,
          bestStreak: 0,
        };

  const quizStats =
    typeof getQuizStats === "function"
      ? getQuizStats()
      : {
          total: 0,
          correct: 0,
        };

  const quizRate = quizStats.total
    ? Math.round((quizStats.correct / quizStats.total) * 100)
    : 0;

  const achievementCount =
    typeof getAchievements === "function" ? getAchievements().length : 0;

  let level = "JLPT N5 준비중";

  let nextLevel = "JLPT N5 합격권";

  if (progress.grammar >= 30) {
    level = "JLPT N5 합격권";

    nextLevel = "JLPT N4 도전권";
  }

  if (progress.grammar >= 60) {
    level = "JLPT N4 도전권";

    nextLevel = "JLPT N4 합격권";
  }

  if (progress.grammar >= 85) {
    level = "JLPT N4 합격권";

    nextLevel = "완료";
  }

  document.getElementById("dayCounter").innerHTML = `

<div class="premium-hero">

    <div class="hero-badge">
        JLPT N4 MASTER ROAD
    </div>

    <div class="hero-day">

        🔥 DAY ${progress.currentDay}

    </div>

    <div class="hero-sub">

        🔥 ${streakData.streak}일 연속 학습

    </div>

    <div class="hero-sub">

        180일 중
        ${progress.currentDay}일 진행

    </div>

    <div class="progress-bar">

        <div
        class="progress-fill"
        style="width:${dayPercent}%">
        </div>

    </div>

    <div class="progress-text">

        전체 진행률
        ${dayPercent}%

    </div>

</div>

`;

  const quickStartArea = document.getElementById("quickStartArea");

  if (quickStartArea) {
    quickStartArea.innerHTML = `

<div class="quick-start-card">

<h3>⚡ 빠른 학습 시작</h3>

<div class="quick-grid">

<button
class="quick-btn"
onclick="showTab('vocab')">

📘 단어

</button>

<button
class="quick-btn"
onclick="showTab('grammar')">

📗 문법

</button>

<button
class="quick-btn"
onclick="showTab('kanji')">

🈶 한자

</button>

<button
class="quick-btn"
onclick="showTab('mock')">

📝 모의고사

</button>

</div>

</div>

`;
  }

  document.getElementById("jlptLevel").innerHTML = `

 <div class="stat-grid">

 <div class="stat-card">
 <div class="stat-icon">⭐</div>
 <div class="stat-title">중요</div>
 <div class="stat-value">${favoriteCount}</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">❌</div>
 <div class="stat-title">오답</div>
 <div class="stat-value">${wrongCount}</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">🔥</div>
 <div class="stat-title">연속</div>
 <div class="stat-value">${streakData.streak}</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">🏆</div>
 <div class="stat-title">최고</div>
 <div class="stat-value">${streakData.bestStreak}</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">📊</div>
 <div class="stat-title">정답률</div>
 <div class="stat-value">${quizRate}%</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">🏅</div>
 <div class="stat-title">업적</div>
 <div class="stat-value">${achievementCount}/5</div>
 </div>

 <div class="stat-card">
 <div class="stat-icon">🎯</div>
 <div class="stat-title">${level}</div>
 <div class="stat-next">${nextLevel}</div>
 </div>

 </div>

 `;

  const todayArea = document.getElementById("todayStudyArea");

  if (todayArea) {
    todayArea.innerHTML = `

<div class="mission-card">

    <h3>
    📚 오늘의 미션
    </h3>

    <div class="mission-item">

        <span>📗 문법</span>

        <strong>
        3개
        </strong>

    </div>

    <div class="mission-item">

        <span>📘 단어</span>

        <strong>
        20개
        </strong>

    </div>

    <div class="mission-item">

        <span>🈶 한자</span>

        <strong>
        10개
        </strong>

    </div>

</div>

`;
  }

  // =========================
  // Progress Update
  // =========================

  const grammarPercent = Math.min(
    100,
    Math.round((progress.grammar / 100) * 100),
  );

  const vocabPercent = Math.min(100, Math.round((progress.vocab / 150) * 100));

  const kanjiPercent = Math.min(100, Math.round((progress.kanji / 100) * 100));

  const grammarEl = document.getElementById("grammarProgress");

  const vocabEl = document.getElementById("vocabProgress");

  const kanjiEl = document.getElementById("kanjiProgress");

  if (grammarEl) grammarEl.textContent = `${grammarPercent}%`;

  if (vocabEl) vocabEl.textContent = `${vocabPercent}%`;

  if (kanjiEl) kanjiEl.textContent = `${kanjiPercent}%`;

  // V12.1.5 Hero Mission Card 적용
}
