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

    if (!key) {
      continue;
    }

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
    !confirm(
      "모든 학습 데이터를 삭제합니다.\n이 작업은 되돌릴 수 없습니다."
    )
  ) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem(QUIZ_STATS_KEY);

  progress = {
    ...defaultData,
  };

  saveData();

  if (typeof renderDashboard === "function") {
    renderDashboard();
  }

  alert("전체 학습 데이터가 초기화되었습니다.");
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
        <span>버전</span>
        <strong>${APP_VERSION}</strong>
      </div>

      <div class="progress-item">
        <span>Local Storage</span>
        <strong>${getStorageSize()} KB</strong>
      </div>

      <br>

      <button
        id="todayResetBtn"
        class="reading-btn"
        style="width:100%;margin-bottom:12px;"
      >
        Today Reset
      </button>

      <button
        id="progressResetBtn"
        class="reading-btn"
        style="width:100%;background:#dc2626;"
      >
        Progress Reset
      </button>

    </div>
  `;

  document
    .getElementById("todayResetBtn")
    .addEventListener("click", resetTodayStudy);

  document
    .getElementById("progressResetBtn")
    .addEventListener("click", resetAllProgress);
}