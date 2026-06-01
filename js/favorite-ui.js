// Version 6.1.0
// Favorite UI

let favoriteFilter = "all";

function renderFavoriteTab() {

    const favorites = getFavorites();

    const target =
    document.getElementById(
        "favoriteArea"
    );

    if (!target) return;

    const filtered =
    favoriteFilter === "all"
    ? favorites
    : favorites.filter(
        item =>
        item.type === favoriteFilter
    );

    target.innerHTML = `

    <div class="favorite-header">

        <h3>
        ⭐ 오답노트 (${favorites.length})
        </h3>

        ${
            favorites.length > 0
            ?
            `
            <button
            class="delete-all-btn"
            onclick="clearAllFavorites()">

            전체 삭제

            </button>
            `
            :
            ""
        }

    </div>

    <div class="favorite-filter">

        <button
        class="${
            favoriteFilter === "all"
            ? "active-filter"
            : ""
        }"
        onclick="setFavoriteFilter('all')">

        전체

        </button>

        <button
        class="${
            favoriteFilter === "문법"
            ? "active-filter"
            : ""
        }"
        onclick="setFavoriteFilter('문법')">

        문법

        </button>

        <button
        class="${
            favoriteFilter === "단어"
            ? "active-filter"
            : ""
        }"
        onclick="setFavoriteFilter('단어')">

        단어

        </button>

        <button
        class="${
            favoriteFilter === "한자"
            ? "active-filter"
            : ""
        }"
        onclick="setFavoriteFilter('한자')">

        한자

        </button>

    </div>

    `;

    if (filtered.length === 0) {

        target.innerHTML += `

        <div class="grammar-item">

            <p>
            저장된 항목이 없습니다.
            </p>

        </div>

        `;

        return;

    }

    filtered.forEach(item => {

        target.innerHTML += `

        <div class="grammar-item">

            <h3>
            ${item.type}
            </h3>

            <p>
            <strong>
            ${item.title}
            </strong>
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

        `;

    });

}

function setFavoriteFilter(type){

    favoriteFilter = type;

    renderFavoriteTab();

}

function deleteFavorite(id){

    removeFavorite(id);

    renderFavoriteTab();

}

function clearAllFavorites(){

    const ok = confirm(
        "오답노트를 모두 삭제하시겠습니까?"
    );

    if(!ok){
        return;
    }

    localStorage.removeItem(
        "jlpt_favorites"
    );

    favoriteFilter = "all";

    renderFavoriteTab();

}