// Version 5.0.0
// Favorite UI

function renderFavoriteTab() {

    const favorites =
    getFavorites();

    const target =
    document.getElementById(
        "favoriteArea"
    );

    if (!target) {
        return;
    }

    if (favorites.length === 0) {

        target.innerHTML = `

        <div class="grammar-item">

            <h3>⭐ 오답노트</h3>

            <p>
            저장된 항목이 없습니다.
            </p>

        </div>

        `;

        return;
    }

    target.innerHTML =
    favorites.map(item => `

    <div class="grammar-item">

        <h3>${item.type}</h3>

        <p>
        <strong>${item.title}</strong>
        </p>

        <p>
        ${item.meaning}
        </p>

        <button
        class="reading-btn"
        onclick="deleteFavorite('${item.id}')">

        삭제

        </button>

    </div>

    `).join("");

}

function deleteFavorite(id) {

    removeFavorite(id);

    renderFavoriteTab();

}