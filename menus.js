
/* 오늘 뭐 먹지? 전체 음식 메뉴 60개 */
/* 가격과 맵기는 식당별 차이가 있는 참고용 분류입니다. */

const menus = [
  // ===== 한식 15개 =====
  {
    name: "김치찌개",
    emoji: "🍲",
    description: "얼큰한 국물이 생각나는 날!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "된장찌개",
    emoji: "🍲",
    description: "구수한 국물에 밥 한 공기!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker"]
  },
  {
    name: "순두부찌개",
    emoji: "🍲",
    description: "보들보들 순두부에 얼큰한 국물!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "제육볶음",
    emoji: "🍚",
    description: "매콤달콤! 밥 한 공기 뚝딱!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "비빔밥",
    emoji: "🥗",
    description: "알록달록 맛있는 한 그릇!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "불고기",
    emoji: "🥩",
    description: "달콤짭짤한 고기의 매력!",
    category: "korean",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["coworker", "date"]
  },
  {
    name: "갈비탕",
    emoji: "🍲",
    description: "뜨끈하고 든든한 한 그릇!",
    category: "korean",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["alone", "coworker"]
  },
  {
    name: "설렁탕",
    emoji: "🍲",
    description: "진한 국물로 속까지 든든하게!",
    category: "korean",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker"]
  },
  {
    name: "육개장",
    emoji: "🍲",
    description: "칼칼한 국물로 기운 충전!",
    category: "korean",
    budget: ["medium"],
    spicy: ["hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "삼겹살",
    emoji: "🥓",
    description: "지글지글! 오늘은 고기 먹는 날!",
    category: "korean",
    budget: ["high"],
    spicy: ["mild"],
    situation: ["coworker", "date"]
  },
  {
    name: "냉면",
    emoji: "🍜",
    description: "시원하고 쫄깃한 한 그릇!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["mild", "hot"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "칼국수",
    emoji: "🍜",
    description: "쫄깃한 면발과 따뜻한 국물!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker"]
  },
  {
    name: "국밥",
    emoji: "🍚",
    description: "든든한 한 끼가 필요할 때!",
    category: "korean",
    budget: ["low", "medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "닭갈비",
    emoji: "🍗",
    description: "매콤한 닭갈비에 볶음밥까지!",
    category: "korean",
    budget: ["medium", "high"],
    spicy: ["normal", "hot"],
    situation: ["coworker", "date"]
  },
  {
    name: "보쌈",
    emoji: "🥬",
    description: "촉촉한 고기에 아삭한 김치 한 입!",
    category: "korean",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["coworker", "date"]
  },

  // ===== 중식 8개 =====
  {
    name: "짜장면",
    emoji: "🍜",
    description: "오늘은 짜장면에 한 표!",
    category: "chinese",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "짬뽕",
    emoji: "🍜",
    description: "칼칼하고 시원한 국물 한 입!",
    category: "chinese",
    budget: ["low", "medium"],
    spicy: ["hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "볶음밥",
    emoji: "🍚",
    description: "고슬고슬 볶음밥으로 든든하게!",
    category: "chinese",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "탕수육",
    emoji: "🥩",
    description: "바삭한 탕수육! 부먹? 찍먹?",
    category: "chinese",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["coworker", "date"]
  },
  {
    name: "마라탕",
    emoji: "🍲",
    description: "얼얼하고 중독적인 마라의 매력!",
    category: "chinese",
    budget: ["medium"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker"]
  },
  {
    name: "마라샹궈",
    emoji: "🌶️",
    description: "화끈하게 볶아낸 마라의 진수!",
    category: "chinese",
    budget: ["medium", "high"],
    spicy: ["normal", "hot"],
    situation: ["coworker", "date"]
  },
  {
    name: "우육면",
    emoji: "🍜",
    description: "진한 고기 육수에 쫄깃한 면발!",
    category: "chinese",
    budget: ["medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker"]
  },
  {
    name: "마파두부덮밥",
    emoji: "🍛",
    description: "매콤한 두부와 밥의 환상 조합!",
    category: "chinese",
    budget: ["low", "medium"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker", "quick"]
  },

  // ===== 일식 10개 =====
  {
    name: "초밥",
    emoji: "🍣",
    description: "한 점 한 점 행복해지는 시간!",
    category: "japanese",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "돈카츠",
    emoji: "🍱",
    description: "바삭한 한 입이 필요한 순간!",
    category: "japanese",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "라멘",
    emoji: "🍜",
    description: "진한 국물에 면발 한 입!",
    category: "japanese",
    budget: ["medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "우동",
    emoji: "🍜",
    description: "탱글탱글 면발과 따뜻한 국물!",
    category: "japanese",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "규동",
    emoji: "🍚",
    description: "달콤짭짤한 소고기 덮밥!",
    category: "japanese",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "가츠동",
    emoji: "🍱",
    description: "촉촉한 돈카츠와 밥의 만남!",
    category: "japanese",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker"]
  },
  {
    name: "오므라이스",
    emoji: "🍳",
    description: "폭신한 달걀 속 맛있는 한 끼!",
    category: "japanese",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "소바",
    emoji: "🍜",
    description: "깔끔하고 시원한 메밀면 한 그릇!",
    category: "japanese",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "카레라이스",
    emoji: "🍛",
    description: "향긋한 카레에 밥 한 숟갈!",
    category: "japanese",
    budget: ["low", "medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "연어덮밥",
    emoji: "🍣",
    description: "부드러운 연어가 가득한 한 그릇!",
    category: "japanese",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },

  // ===== 양식 10개 =====
  {
    name: "토마토 파스타",
    emoji: "🍝",
    description: "상큼한 토마토 소스로 기분 전환!",
    category: "western",
    budget: ["medium", "high"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "크림 파스타",
    emoji: "🍝",
    description: "고소하고 부드러운 크림의 매력!",
    category: "western",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "리조또",
    emoji: "🍚",
    description: "부드럽고 고소한 한 접시!",
    category: "western",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["alone", "date"]
  },
  {
    name: "피자",
    emoji: "🍕",
    description: "치즈가 쭉~ 행복도 쭉!",
    category: "western",
    budget: ["medium", "high"],
    spicy: ["mild"],
    situation: ["coworker", "date"]
  },
  {
    name: "햄버거",
    emoji: "🍔",
    description: "한 입 가득 맛있는 행복!",
    category: "western",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "스테이크",
    emoji: "🥩",
    description: "오늘은 근사하게 고기 한 접시!",
    category: "western",
    budget: ["high"],
    spicy: ["mild"],
    situation: ["date", "coworker"]
  },
  {
    name: "샌드위치",
    emoji: "🥪",
    description: "가볍지만 맛있게 한 끼!",
    category: "western",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "quick"]
  },
  {
    name: "샐러드",
    emoji: "🥗",
    description: "신선하고 산뜻하게 즐기는 한 끼!",
    category: "western",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "quick", "coworker"]
  },
  {
    name: "그라탱",
    emoji: "🧀",
    description: "노릇노릇 치즈가 듬뿍!",
    category: "western",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "date"]
  },
  {
    name: "수프와 빵",
    emoji: "🥖",
    description: "따뜻한 수프에 빵을 콕!",
    category: "western",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "quick", "date"]
  },

  // ===== 분식 9개 =====
  {
    name: "떡볶이",
    emoji: "🌶️",
    description: "매콤달콤한 유혹은 못 참지!",
    category: "snack",
    budget: ["low"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "김밥",
    emoji: "🍙",
    description: "간편하고 든든한 국민 메뉴!",
    category: "snack",
    budget: ["low"],
    spicy: ["mild"],
    situation: ["alone", "quick", "coworker"]
  },
  {
    name: "라볶이",
    emoji: "🍜",
    description: "떡볶이와 라면의 완벽한 조합!",
    category: "snack",
    budget: ["low"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "순대",
    emoji: "🍢",
    description: "쫄깃쫄깃! 소금에 콕 찍어 한 입!",
    category: "snack",
    budget: ["low"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "튀김",
    emoji: "🍤",
    description: "바삭바삭한 소리가 행복해!",
    category: "snack",
    budget: ["low"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "어묵",
    emoji: "🍢",
    description: "따뜻한 어묵 국물 한 모금!",
    category: "snack",
    budget: ["low"],
    spicy: ["mild"],
    situation: ["alone", "quick"]
  },
  {
    name: "쫄면",
    emoji: "🍜",
    description: "새콤매콤 쫄깃한 면발!",
    category: "snack",
    budget: ["low"],
    spicy: ["normal", "hot"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "잔치국수",
    emoji: "🍜",
    description: "따뜻하고 깔끔한 국물의 매력!",
    category: "snack",
    budget: ["low"],
    spicy: ["mild"],
    situation: ["alone", "quick"]
  },
  {
    name: "비빔국수",
    emoji: "🍜",
    description: "새콤달콤 입맛 살리는 한 그릇!",
    category: "snack",
    budget: ["low"],
    spicy: ["normal", "hot"],
    situation: ["alone", "quick"]
  },

  // ===== 기타 8개 =====
  {
    name: "쌀국수",
    emoji: "🍜",
    description: "향긋한 국물에 부드러운 쌀면!",
    category: "other",
    budget: ["low", "medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "quick"]
  },
  {
    name: "팟타이",
    emoji: "🍜",
    description: "달콤새콤 태국식 볶음면!",
    category: "other",
    budget: ["medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "반미",
    emoji: "🥖",
    description: "바삭한 빵 속 풍성한 재료!",
    category: "other",
    budget: ["low", "medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "quick"]
  },
  {
    name: "분짜",
    emoji: "🍜",
    description: "상큼한 소스에 면과 고기를 함께!",
    category: "other",
    budget: ["medium"],
    spicy: ["mild"],
    situation: ["alone", "coworker", "date"]
  },
  {
    name: "인도 커리",
    emoji: "🍛",
    description: "향신료 가득한 커리에 난을 콕!",
    category: "other",
    budget: ["medium", "high"],
    spicy: ["mild", "normal", "hot"],
    situation: ["coworker", "date"]
  },
  {
    name: "케밥",
    emoji: "🥙",
    description: "고기와 채소가 가득한 한 입!",
    category: "other",
    budget: ["low", "medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "quick"]
  },
  {
    name: "타코",
    emoji: "🌮",
    description: "작지만 알찬 멕시코의 맛!",
    category: "other",
    budget: ["medium"],
    spicy: ["mild", "normal", "hot"],
    situation: ["coworker", "date", "quick"]
  },
  {
    name: "포케",
    emoji: "🥗",
    description: "신선한 재료로 가득한 한 그릇!",
    category: "other",
    budget: ["medium"],
    spicy: ["mild", "normal"],
    situation: ["alone", "quick", "coworker"]
  }
];

