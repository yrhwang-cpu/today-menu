/* HTML 요소 */
const randomButton = document.querySelector(".btn-primary");
const customButton = document.querySelector(".btn-secondary");
const filterSection = document.querySelector("#filter-section");
const filterOptions = document.querySelectorAll(".filter-option");
const filterSubmit = document.querySelector("#filter-submit");

const resultCard = document.querySelector("#result-card");
const menuName = document.querySelector("#menu-name");
const menuDescription = document.querySelector("#menu-description");
const menuTags = document.querySelector("#menu-tags");
const foodEmoji = document.querySelector(".food-emoji");
const retryButton = document.querySelector("#retry-button");
const shareButton = document.querySelector("#share-button");


/* 현재 추천 조건과 직전 메뉴 */
let currentFilters = null;
let previousMenu = null;

/* 선택한 조건 읽기 */
function getSelectedFilters() {
  const filters = {};

  document.querySelectorAll(".filter-option.selected").forEach(function (option) {
    filters[option.dataset.filter] = option.dataset.value;
  });

  return filters;
}

/* 조건에 맞는 음식 찾기 */
function getMatchingMenus(filters) {
  if (filters === null) {
    return menus;
  }

  return menus.filter(function (menu) {
    const categoryMatch =
      filters.category === "all" ||
      menu.category === filters.category;

    const budgetMatch =
      filters.budget === "all" ||
      menu.budget.includes(filters.budget);

    const spicyMatch =
      filters.spicy === "all" ||
      menu.spicy.includes(filters.spicy);

    const situationMatch =
      filters.situation === "all" ||
      menu.situation.includes(filters.situation);

    return categoryMatch &&
           budgetMatch &&
           spicyMatch &&
           situationMatch;
  });
}

/* 결과 카드 등장 모션 */
function showResultAnimation() {
  resultCard.classList.remove("show-animation");
  void resultCard.offsetWidth;
  resultCard.classList.add("show-animation");
}

/* 음식 추천 */
function recommendMenu() {
  const matchingMenus = getMatchingMenus(currentFilters);

  /* 조건에 맞는 음식이 없을 때 */
  if (matchingMenus.length === 0) {
    menuName.textContent = "추천 메뉴가 없어요 😢";
    menuDescription.textContent = "조건을 조금 바꿔서 다시 추천받아 봐!";
    foodEmoji.textContent = "🤔";

    retryButton.hidden = true;
    resultCard.hidden = false;
    filterSection.hidden = true;

    showResultAnimation();
    resultCard.scrollIntoView({ behavior: "smooth" });
    return;
  }

  /* 직전 메뉴 제외 */
  let candidates = matchingMenus.filter(function (menu) {
    return menu.name !== previousMenu;
  });

  if (candidates.length === 0) {
    candidates = matchingMenus;
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const selectedMenu = candidates[randomIndex];

  previousMenu = selectedMenu.name;

  /* 추천 결과 표시 */
  menuName.textContent = selectedMenu.name;
  menuDescription.textContent = selectedMenu.description;
  foodEmoji.textContent = selectedMenu.emoji;

const categoryLabels = {
  korean: "🍚 한식",
  chinese: "🥟 중식",
  japanese: "🍣 일식",
  western: "🍝 양식",
  snack: "🍢 분식",
  other: "🥗 기타"
};

const budgetLabels = {
  low: "저렴한 가격",
  medium: "보통 가격",
  high: "높은 가격"
};

const spicyLabels = {
  mild: "순한맛",
  normal: "보통맛",
  hot: "매운맛"
};

const categoryTag = categoryLabels[selectedMenu.category];

const budgetTag = selectedMenu.budget
  .map(value => budgetLabels[value])
  .join(" · ");

const spicyTag = selectedMenu.spicy
  .map(value => spicyLabels[value])
  .join(" · ");

menuTags.textContent = "";

[categoryTag, "💰 " + budgetTag, "🌶️ " + spicyTag].forEach(function(label) {
  const tag = document.createElement("span");
  tag.className = "menu-tag";
  tag.textContent = label;
  menuTags.appendChild(tag);
});


  retryButton.hidden = matchingMenus.length === 1;
  resultCard.hidden = false;
  filterSection.hidden = true;

  showResultAnimation();
  resultCard.scrollIntoView({ behavior: "smooth" });
}

/* 빠른 추천 버튼 */
randomButton.addEventListener("click", function () {
  currentFilters = null;
  previousMenu = null;
  recommendMenu();
});

/* 취향 선택 화면 열기 */
customButton.addEventListener("click", function () {
  resultCard.hidden = true;
  filterSection.hidden = false;

  filterSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* 조건 선택 버튼 */
filterOptions.forEach(function (option) {
  option.setAttribute(
    "aria-pressed",
    option.classList.contains("selected") ? "true" : "false"
  );

  option.addEventListener("click", function () {
    const filterType = option.dataset.filter;

    document.querySelectorAll(
      '.filter-option[data-filter="' + filterType + '"]'
    ).forEach(function (button) {
      button.classList.remove("selected");
      button.setAttribute("aria-pressed", "false");
    });

    option.classList.add("selected");
    option.setAttribute("aria-pressed", "true");
  });
});

/* 맞춤 추천 실행 */
filterSubmit.addEventListener("click", function () {
  currentFilters = getSelectedFilters();
  previousMenu = null;
  recommendMenu();
});

/* 다른 메뉴 뽑기 */
retryButton.addEventListener("click", recommendMenu);

/* 추천 결과 공유하기 */

shareButton.addEventListener("click", async function () {
  const name = menuName.textContent;

  const shareText =
    "🍽️ 오늘 뭐 먹지?\n\n" +
    "오늘 추천받은 메뉴는 " + name + "!\n" +
    menuDescription.textContent;

  const shareData = {
    title: "오늘 뭐 먹지?",
    text: shareText
  };

  try {
    // 모바일 등 공유 기능을 지원하는 브라우저
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // 공유 기능이 없는 브라우저에서는 텍스트 복사
      await navigator.clipboard.writeText(shareText);
      alert("추천 결과가 복사됐어! 친구에게 붙여넣어 봐 😊");
    }
  } catch (error) {
    // 사용자가 공유 창을 닫은 경우
    if (error.name === "AbortError") return;

    alert("공유하지 못했어. 브라우저 설정을 확인해 줘.");
    console.error(error);
  }
});

