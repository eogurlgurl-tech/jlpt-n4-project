"use strict";

/**
 * ============================================================
 * Japanese Master Road
 * Settings UI
 * Version : 3.0.0
 * ============================================================
 */

const APP_VERSION = "3.0.0";

function getStorageSize() {
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (!key) continue;

    const value = localStorage.getItem(key) || "";

    total += key.length + value.length;
  }

  return (total / 1024).toFixed(2);
}

function resetTodayStudy() {
  if (!confirm("오늘 학습 진행 상태를 초기화하시겠습니까?")) {
    return;
  }

  progress.grammar = 0;
  progress.vocab = 0;
  progress.kanji = 0;

  saveData();

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }

  alert("오늘 학습이 초기화되었습니다.");
}

function resetAllProgress() {
  if (
    !confirm("모든 학습 데이터를 삭제합니다.\n이 작업은 되돌릴 수 없습니다.")
  ) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem(QUIZ_STATS_KEY);

  // 오답노트 초기화
  if (typeof clearWrongAnswers === "function") {
    clearWrongAnswers();
  }

  // 즐겨찾기 초기화
  localStorage.removeItem(FAVORITE_KEY);

  progress = {
    ...defaultData,
  };

  saveData();

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }

  alert("전체 학습 데이터가 초기화되었습니다.");
}

function exportStudyData() {
  const backup = {
    version: APP_VERSION,
    createdAt: new Date().toISOString(),

    progress: JSON.parse(localStorage.getItem(STORAGE_KEY)),

    streak: JSON.parse(localStorage.getItem(STREAK_KEY)),

    quizStats: JSON.parse(localStorage.getItem(QUIZ_STATS_KEY)),
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: "application/json",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download =
    "JapaneseMasterRoad_Backup_" +
    new Date().toISOString().substring(0, 10) +
    ".json";

  link.click();

  URL.revokeObjectURL(link.href);
}

function importStudyData(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const backup = JSON.parse(e.target.result);

      if (backup.progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(backup.progress));
      }

      if (backup.streak) {
        localStorage.setItem(STREAK_KEY, JSON.stringify(backup.streak));
      }

      if (backup.quizStats) {
        localStorage.setItem(QUIZ_STATS_KEY, JSON.stringify(backup.quizStats));
      }

      progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultData;

      if (typeof renderDashboard === "function") {
        renderDashboard();
      }

      alert("복원이 완료되었습니다.");
    } catch (error) {
      alert("올바른 백업 파일이 아닙니다.");
    }
  };

  reader.readAsText(file);

  event.target.value = "";
}

function renderSettings() {
  const target = document.getElementById("settingsArea");

  if (!target) {
    return;
  }

  target.innerHTML = `
    <div class="dashboard-card">

      <h2>⚙️ Settings</h2>

      <div class="progress-item">
        <span>Version</span>
        <strong>${APP_VERSION}</strong>
      </div>

      <div class="progress-item">
        <span>Storage</span>
        <strong>${getStorageSize()} KB</strong>
      </div>

      <br>

      <button
        id="todayResetBtn"
        class="reading-btn"
        style="width:100%;margin-bottom:10px;"
      >
        Today Reset
      </button>

      <button
        id="progressResetBtn"
        class="reading-btn"
        style="width:100%;background:#dc2626;margin-bottom:10px;"
      >
        Progress Reset
      </button>

      <button
        id="exportBtn"
        class="reading-btn"
        style="width:100%;margin-bottom:10px;"
      >
        📤 Export Data
      </button>

      <button
        id="importBtn"
        class="reading-btn"
        style="width:100%;"
      >
        📥 Import Data
      </button>

      <input
        id="importFile"
        type="file"
        accept=".json"
        style="display:none"
      />

    </div>
  `;

  document
    .getElementById("todayResetBtn")
    .addEventListener("click", resetTodayStudy);

  document
    .getElementById("progressResetBtn")
    .addEventListener("click", resetAllProgress);

  document
    .getElementById("exportBtn")
    .addEventListener("click", exportStudyData);

  document.getElementById("importBtn").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });

  document
    .getElementById("importFile")
    .addEventListener("change", importStudyData);
}
