// Version 9.9.1
// Weakness Study

function renderWeaknessTab() {
  const target = document.getElementById("weaknessArea");

  if (!target) {
    return;
  }

  const weaknessData = getWeaknessStats();

  const accuracyData = getAccuracyStats();

  const weaknessList = Object.entries(weaknessData)
    .sort((a, b) => {
      const aAcc = accuracyData[a[0]];

      const bAcc = accuracyData[b[0]];

      const aRate = aAcc ? aAcc.correct / aAcc.total : 0;

      const bRate = bAcc ? bAcc.correct / bAcc.total : 0;

      return aRate - bRate;
    })
    .slice(0, 5);

  if (weaknessList.length === 0) {
    target.innerHTML = `

        <div class="grammar-item">

            <h3>
            🎉 약점 데이터 없음
            </h3>

            <p>
            모의고사를 먼저 풀어주세요.
            </p>

        </div>

        `;

    return;
  }

  let html = "";

  weaknessList.forEach((item, index) => {
    const grammar = GRAMMAR_DATA.find((x) => x.title === item[0]);

    if (!grammar) {
      return;
    }

    const compareInfo = GRAMMAR_COMPARE[grammar.title];
    const accuracy = accuracyData[grammar.title];

    const rate = accuracy
      ? Math.round((accuracy.correct / accuracy.total) * 100)
      : 0;

    const level =
      item[1] >= 10
        ? "★★★★★"
        : item[1] >= 7
          ? "★★★★"
          : item[1] >= 5
            ? "★★★"
            : item[1] >= 3
              ? "★★"
              : "★";

    html += `

        <div class="grammar-item">

            <h3>

            ${index + 1}위
            ${grammar.title}

            (${item[1]}회)

            </h3>
            <p>

            <strong>
            정답률
            </strong>

            <br>

            ${rate}%

            </p>

            <p>

            <strong>
            누적 기록
            </strong>

            <br>

            ${accuracy?.correct || 0}
            /
            ${accuracy?.total || 0}

            </p>

            <p>

            <strong>
            위험도
            </strong>

            <br>

            ${level}

            </p>

            <p>

            <strong>
            의미
            </strong>

            <br>

            ${grammar.meaning}

            </p>

            <p>

            <strong>
            예문
            </strong>

            <br>

            ${grammar.example}

            </p>

            <p>

            <strong>
            읽기
            </strong>

            <br>

            ${grammar.reading}

            </p>

            <p>

            <strong>
            한글 발음
            </strong>

            <br>

            ${grammar.koreanReading}

            </p>

            <p>

            <strong>
            해석
            </strong>

            <br>

            ${grammar.korean}

            </p>

            <p>

            <button
            onclick="
            startWeaknessQuiz(
            '${grammar.title}'
            )
            "
            >

            약점 퀴즈 시작

            </button>

            </p>

            ${
              compareInfo
                ? `

            <hr>

            <p>

            <strong>
            헷갈리는 문법
            </strong>

            <br>

            ${compareInfo.compare}

            </p>

            <p>

            <strong>
            차이점
            </strong>

            <br>

            ${compareInfo.difference}

            </p>

            `
                : ""
            }

        </div>

        `;
  });

  target.innerHTML = html;
}
