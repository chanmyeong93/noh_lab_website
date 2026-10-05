/* ==========================================================================
   js/i18n.js - Multi-Language Translation System (Full Page Support)
   ========================================================================== */

const translations = {
  ko: {
    // ----------------------------------------------------------------------
    // 1. 공통 및 네비게이션 (Common & Navigation)
    // ----------------------------------------------------------------------
    site_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    site_brand_name: "노윤하 교수 Lab",
    brand_name: "노윤하 교수 Lab",
    brand_affil: "전남대학교 약학대학",
    nav_home: "Home",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_members: "Members",
    nav_news: "News",
    nav_contact: "Contact",
    see_all: "전체 보기 →",

    // ----------------------------------------------------------------------
    // 2. 홈 페이지 (Home Page)
    // ----------------------------------------------------------------------
    hero_tagline: "HEALTHCARE BIG DATA & REAL-WORLD EVIDENCE",
    hero_title: "사회약학 & 약물역학 연구실",
    hero_sub: "Real-World Data 기반 임상적 근거 창출 및 보건의료 정책 연구",
    hero_btn1: "연구 분야",
    hero_btn2: "Contact Us",
    stat_1: "출간 논문 수",
    stat_2: "진행 연구 과제",
    stat_3: "구성원",
    res_title: "연구 분야 (Research)",
    res_sub: "빅데이터와 다학제적 접근법을 통한 보건의료 문제 해결",
    res_c1_t: "약물역학 및 RWD 빅데이터 분석",
    res_c1_d: "전국민 보건의료 빅데이터를 분석하여 약물의 실마리정보 탐지, 안전성 및 효능 평가 연구를 수행합니다.",
    res_c2_t: "사회약학 및 보건의료 정책",
    res_c2_d: "의약품 접근성, DUE, 경제성 평가 및 의약품 규제 과학 정책을 정량적으로 평가하고 제언합니다.",
    res_c3_t: "AI 기반 임상 예측 모델링",
    res_c3_d: "머신러닝 기법을 임상데이터에 적용하여 부작용 고위험군을 예측하고 맞춤형 정밀약학 모델을 개발합니다.",
    home_pub_tag: "Publications",
    home_pub_title: "최근 출간 논문",
    home_pub_sub: "JAMA, Gut, Diabetes Care 등 저명 학술지에 게재된 최신 연구 성과입니다.",
    home_member_tag: "Members",
    home_member_title: "연구실 구성원",
    home_member_sub: "함께 연구를 이끌어가는 대학원생 및 학부연구생을 소개합니다.",
    home_news_tag: "News",
    home_news_title: "최근 소식",
    home_news_sub: "연구실의 학회 발표, 논문 게재, 수상 등의 소식을 확인하세요.",

    // ----------------------------------------------------------------------
    // 3. 구성원 페이지 (Members Page)
    // ----------------------------------------------------------------------
    mem_site_title: "Members - Noh Lab",
    mem_page_title: "Members",
    mem_page_sub: "사회약학 및 약물역학 빅데이터 연구실 연구진 소개입니다.",
    mem_prof_name: "노윤하 교수",
    mem_prof_role: "교수",
    pi_name: "노윤하 교수",
    pi_fullname: "노윤하 교수 (Yunha Noh, PharmD, PhD)",
    role_pi: "전남대학교 약학대학 사회약학/약물역학 조교수",
    pi_profile_label: "연구자 프로필:",
    pi_career_title: "경력 (Career)",
    pi_edu_title: "학력 (Education)",
    pi_etc_title: "기타 경력",
    pi_etc_1: "한국사회약학회 이사",
    pi_etc_2: "대한약물역학위해관리학회 편집간행위원",
    pi_pub_title: "대표 논문 (Selected Publications)",
    role_phd: "박사과정 (Ph.D. Student)",
    role_ms: "석사과정 (M.S. Student)",
    role_ug_pharm: "학부연구생 (BS Pharm)",
    role_ug_stat: "학부연구생 (BS in Stat)",
    desc_add_info: "설명 추가",

    // Member Names (한국어)
    mem_s1_name: "민지우",
    mem_s1_role: "석사과정",
    mem_s2_name: "김민정",
    mem_s2_role: "학부연구생",
    mem_s3_name: "류은수",
    mem_s3_role: "학부연구생",
    mem_mjw_name: "민지우",
    mem_kmj_name: "김민정",
    mem_es_name: "류은수",
    mem_ldm_name: "이다민",
    mem_lcm_name: "이찬명",
    mem_lje_name: "이지언",
    mem_lsh_name: "임승현",
    mem_jjw_name: "전재원",

    // ----------------------------------------------------------------------
    // 4. 소식 페이지 & 관리자 (News Page & Admin)
    // ----------------------------------------------------------------------
    news_site_title: "News - Noh Lab",
    news_page_title: "News & Activity",
    news_btn_write: "+ 소식 작성하기",
    news_empty: "등록된 소식이 없습니다.",
    news_btn_delete: "삭제",
    prompt_delete_pass: "삭제 비밀번호를 입력하세요:",
    alert_pass_incorrect: "비밀번호가 일치하지 않습니다.",
    modal_title: "새 소식 등록",
    modal_ph_title: "제목을 입력하세요",
    modal_ph_body: "내용을 입력하세요",
    modal_label_img: "사진 첨부 (선택):",
    modal_ph_pass: "관리자 비밀번호",
    modal_btn_submit: "등록하기",
    modal_btn_cancel: "취소",

    // ----------------------------------------------------------------------
    // 5. 논문 페이지 (Publications Page)
    // ----------------------------------------------------------------------
    pub_site_title: "Publications - Noh Lab",
    pub_page_title: "Publications",
    pub_section_desc: "주요 출간 논문 및 연구 성과 목록입니다.",

    // ----------------------------------------------------------------------
    // 6. 연구 분야 페이지 (Research Page)
    // ----------------------------------------------------------------------
    res_diagram_title: "Research Overview",
    res_diagram_sub: "사회약학 및 약물역학 빅데이터 연구실은 Real-World Data(RWD) 기반의 고도화된 역학 연구 기법을 통해 의약품의 안전성과 유효성을 규명하고, 보건의료 정책 및 규제 의사결정에 필요한 임상적 근거(RWE)를 창출합니다.",
    res_diagram_hub: "Noh Lab",

    // 연구 네트워크 중앙
    core_sub: "RWD · RWE · CAUSAL",

    // 연구 네트워크 Topic 01
    topic1_short: "약물역학 & RWD/RWE",
    topic1_subtitle: "PHARMACOEPIDEMIOLOGY",
    topic1_hint: "RWD · RWE",

    topic1_full: "약물역학 및 RWD/RWE (Pharmacoepidemiology & Real-World Evidence)",
    topic1_d: "국민건강보험공단(NHIS), 건강보험심사평가원(HIRA)의 전구민 청구데이터, 그리고 영국의 CPRD(Clinical Practice Research Datalink) 등 국내외 대규모 실사용 데이터(RWD)를 구축 및 연계하여 분석합니다. Target Trial Emulation 기법 등 정교한 방법론과 인과추론(Causal Inference) 분석을 적용하여, 시판 후 의약품의 장기적 유효성과 실제 임상 환경에서의 치료 효과를 다각도로 심층 평가합니다.",
    topic1_kw1: "NHIS / HIRA 빅데이터",
    topic1_kw2: "UK CPRD",
    topic1_kw3: "Target Trial Emulation",
    topic1_kw4: "인과추론 (Causal Inference)",

    // 연구 네트워크 Topic 02
    topic2_short: "약물감시 & 신호탐지",
    topic2_subtitle: "PHARMACOVIGILANCE",
    topic2_hint: "SAFETY SIGNALS",

    topic2_full: "약물감시 및 안전성 신호 탐지 (Pharmacovigilance & Safety Signals)",
    topic2_d: "GLP-1 수용체 작용제, 양성자펌프억제제(PPI) 등 임상 현장에서 범용적으로 처방되는 주요 의약품의 잠재적·미알려진 이상반응(Adverse Drug Events)을 조기에 탐지합니다. 자발적 부작용 보고 데이터 및 의료 빅데이터 기반의 신호탐지(Signal Detection) 알고리즘을 활용해 의약품 사용과 부작용 간의 연관성을 규명하고, 시판 후 약물 안전성 관리를 체계화합니다.",
    topic2_kw1: "GLP-1 RA / PPI",
    topic2_kw2: "이상반응 신호탐지",
    topic2_kw3: "자발적 부작용 보고 데이터",
    topic2_kw4: "약물 이상반응 평가",

    // 연구 네트워크 Topic 03
    topic3_short: "주산기 · 소아 약물안전성",
    topic3_subtitle: "PERINATAL & PEDIATRICS",
    topic3_hint: "MEDICATION SAFETY",

    topic3_full: "주산기 및 소아 약물 안전성 (Perinatal & Pediatric Pharmacoepidemiology)",
    topic3_d: "임상시험 대상에서 제외되기 쉬운 취약 계층인 임산부 및 소아·청소년을 대상으로 맞춤형 역학 연구를 수행합니다. 임신 중 흡입성 코르티코스테로이드(ICS) 등 천식 약물 노출이 임신 결과 및 출생아 안전성에 미치는 영향을 평가하며, 유전적·환경적 교란요인을 통제하기 위해 형제자매 대조 연구(Sibling-matched Analysis) 등 고도화된 역학 디자인을 적용하여 신뢰도 높은 안전성 근거를 구축합니다.",
    topic3_kw1: "임신 중 의약품 안전성",
    topic3_kw2: "소아·청소년 약물역학",
    topic3_kw3: "Sibling-matched Design",
    topic3_kw4: "산모-태아 코호트",

    // 연구 네트워크 Topic 04
    topic4_short: "규제과학 & 보건정책",
    topic4_subtitle: "REGULATORY & POLICY",
    topic4_hint: "HEALTHCARE POLICY",

    topic4_full: "규제과학 및 보건의료 정책 (Regulatory Science & Healthcare Policy)",
    topic4_d: "식품의약품안전처 및 보건당국의 의약품 규제 의사결정과 의약품 보건 정책 수립에 정량적 과학적 근거를 제공합니다. 의약품 적정사용(DUE), 사용량-약가 연동제, 급여 기준 설정 등 의약품의 접근성 제고와 보건의료 재정 절감을 동시에 달성할 수 있는 합리적인 RWE(Real-World Evidence) 기반 규제과학 표준을 정립합니다.",
    topic4_kw1: "의약품 규제과학",
    topic4_kw2: "보건의료 정책 및 평가",
    topic4_kw3: "의약품 적정사용 (DUE)",
    topic4_kw4: "RWE 기반 의사결정",

    // ----------------------------------------------------------------------
    // 7. 연락처 페이지 (Contact Page)
    // ----------------------------------------------------------------------
    contact_site_title: "Contact - Noh Lab",
    contact_title: "Location & Contact",
    contact_sub: "연구실 위치 및 연락처 정보입니다.",
    contact_office: "연구실 위치",
    contact_addr: "광주광역시 북구 용봉로 77 전남대학교 약학대학 2호관",
    contact_email: "이메일 문의",
    map_kakao_btn: "Kakao Map 길찾기 ↗",
    map_naver_btn: "Naver Map 길찾기 ↗"
  },

  en: {
    // ----------------------------------------------------------------------
    // 1. Common & Navigation
    // ----------------------------------------------------------------------
    site_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    site_brand_name: "Prof. Yunha Noh Lab",
    brand_name: "Prof. Yunha Noh Lab",
    brand_affil: "Chonnam National University College of Pharmacy",
    nav_home: "Home",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_members: "Members",
    nav_news: "News",
    nav_contact: "Contact",
    see_all: "View All →",

    // ----------------------------------------------------------------------
    // 2. Home Page
    // ----------------------------------------------------------------------
    hero_tagline: "HEALTHCARE BIG DATA & REAL-WORLD EVIDENCE",
    hero_title: "Social Pharmacy & Pharmacoepidemiology Lab",
    hero_sub: "Generating Clinical Evidence and Healthcare Policy Studies Based on Real-World Data",
    hero_btn1: "Research Areas",
    hero_btn2: "Contact Us",
    stat_1: "Publications",
    stat_2: "Active Projects",
    stat_3: "Members",
    res_title: "Research Areas",
    res_sub: "Solving Healthcare Problems through Big Data and Multidisciplinary Approaches",
    res_c1_t: "Pharmacoepidemiology & RWD Analysis",
    res_c1_d: "We conduct research on signal detection, safety, and effectiveness of drugs by analyzing nationwide healthcare big data.",
    res_c2_t: "Social Pharmacy & Health Policy",
    res_c2_d: "We quantitatively evaluate drug accessibility, drug use evaluation (DUE), economic evaluation, and regulatory science policy.",
    res_c3_t: "AI-based Clinical Prediction Modeling",
    res_c3_d: "We apply machine learning techniques to clinical data to predict high-risk groups for adverse events and develop personalized precision pharmacy models.",
    home_pub_tag: "Publications",
    home_pub_title: "Recent Publications",
    home_pub_sub: "Latest research published in prominent journals such as JAMA, Gut, and Diabetes Care.",
    home_member_tag: "Members",
    home_member_title: "Lab Members",
    home_member_sub: "Introducing graduate and undergraduate researchers leading the research together.",
    home_news_tag: "News",
    home_news_title: "Recent News",
    home_news_sub: "Check out the latest news including conference presentations, paper publications, and awards.",

    // ----------------------------------------------------------------------
    // 3. Members Page
    // ----------------------------------------------------------------------
    mem_site_title: "Members - Noh Lab",
    mem_page_title: "Members",
    mem_page_sub: "Meet the team of Social Pharmacy & Pharmacoepidemiology Lab.",
    mem_prof_name: "Prof. Yunha Noh",
    mem_prof_role: "Professor",
    pi_name: "Prof. Yunha Noh",
    pi_fullname: "Prof. Yunha Noh, PharmD, PhD",
    role_pi: "Assistant Professor, College of Pharmacy, Chonnam National University",
    pi_profile_label: "Researcher Profiles:",
    pi_career_title: "Career",
    pi_edu_title: "Education",
    pi_etc_title: "Affiliations & Services",
    pi_etc_1: "Board Member, Korean Society of Social and Administrative Pharmacy",
    pi_etc_2: "Editorial Board Member, Korean Society of Pharmacoepidemiology and Risk Management",
    pi_pub_title: "Selected Publications",
    role_phd: "Ph.D. Student",
    role_ms: "M.S. Student",
    role_ug_pharm: "Undergraduate Researcher (BS Pharm)",
    role_ug_stat: "Undergraduate Researcher (BS in Stat)",
    desc_add_info: "Description to be added",

    // Member Names (English)
    mem_s1_name: "Jiwoo Min",
    mem_s1_role: "Master's Student",
    mem_s2_name: "Minjung Kim",
    mem_s2_role: "Undergraduate Researcher",
    mem_s3_name: "Eunsoo Lew",
    mem_s3_role: "Undergraduate Researcher",
    mem_mjw_name: "Jiwoo Min",
    mem_kmj_name: "Minjung Kim",
    mem_es_name: "Eunsoo Lew",
    mem_ldm_name: "Damin Lee",
    mem_lcm_name: "Chanmyeong Lee",
    mem_lje_name: "Jieon Lee",
    mem_lsh_name: "Seunghyun Lim",
    mem_jjw_name: "Jaewon Jeon",

    // ----------------------------------------------------------------------
    // 4. News Page & Admin
    // ----------------------------------------------------------------------
    news_site_title: "News - Noh Lab",
    news_page_title: "News & Activity",
    news_btn_write: "+ Write Post",
    news_empty: "No news registered.",
    news_btn_delete: "Delete",
    prompt_delete_pass: "Enter deletion password:",
    alert_pass_incorrect: "Password does not match.",
    modal_title: "Post New Update",
    modal_ph_title: "Enter title",
    modal_ph_body: "Enter content",
    modal_label_img: "Attach Image (Optional):",
    modal_ph_pass: "Admin Password",
    modal_btn_submit: "Submit",
    modal_btn_cancel: "Cancel",

    // ----------------------------------------------------------------------
    // 5. Publications Page
    // ----------------------------------------------------------------------
    pub_site_title: "Publications - Noh Lab",
    pub_page_title: "Publications",
    pub_section_desc: "Selected publications and research accomplishments.",

    // ----------------------------------------------------------------------
    // 6. Research Page
    // ----------------------------------------------------------------------
    res_diagram_title: "Research Overview",
    res_diagram_sub: "The Social Pharmacy & Big Data Pharmacoepidemiology Laboratory investigates drug safety and effectiveness using advanced epidemiological methods on Real-World Data (RWD), generating Real-World Evidence (RWE) to inform healthcare decisions and regulatory policy.",
    res_diagram_hub: "Noh Lab",

    // Research Network Central
    core_sub: "RWD · RWE · CAUSAL",

    // Research Network Topic 01
    topic1_short: "Pharmacoepidemiology & RWD/RWE",
    topic1_subtitle: "PHARMACOEPIDEMIOLOGY",
    topic1_hint: "RWD · RWE",

    topic1_full: "Pharmacoepidemiology & Real-World Evidence (RWD/RWE)",
    topic1_d: "We construct and analyze large-scale real-world data (RWD), including nationwide claims databases from NHIS and HIRA in Korea, as well as international databases such as UK CPRD. By applying rigorous causal inference frameworks and advanced methodologies like Target Trial Emulation, we generate robust evidence on the long-term effectiveness and comparative safety of pharmaceuticals.",
    topic1_kw1: "NHIS / HIRA Big Data",
    topic1_kw2: "UK CPRD",
    topic1_kw3: "Target Trial Emulation",
    topic1_kw4: "Causal Inference",

    // Research Network Topic 02
    topic2_short: "Pharmacovigilance & Signal Detection",
    topic2_subtitle: "PHARMACOVIGILANCE",
    topic2_hint: "SAFETY SIGNALS",

    topic2_full: "Pharmacovigilance & Safety Signals",
    topic2_d: "We conduct early detection of potential adverse drug events for widely prescribed therapeutic agents such as GLP-1 receptor agonists and proton pump inhibitors (PPIs). Utilizing spontaneous reporting systems and healthcare big data signal detection algorithms, we evaluate causal associations between drug exposure and adverse outcomes to strengthen post-marketing safety monitoring.",
    topic2_kw1: "GLP-1 RA / PPI",
    topic2_kw2: "Signal Detection",
    topic2_kw3: "Spontaneous Reporting Data",
    topic2_kw4: "Adverse Drug Reaction Evaluation",

    // Research Network Topic 03
    topic3_short: "Perinatal & Pediatric Safety",
    topic3_subtitle: "PERINATAL & PEDIATRICS",
    topic3_hint: "MEDICATION SAFETY",

    topic3_full: "Perinatal & Pediatric Pharmacoepidemiology",
    topic3_d: "We design tailored pharmacoepidemiological studies for vulnerable populations, such as pregnant women and pediatric patients, who are typically excluded from randomized clinical trials. For example, we evaluate maternal asthma medication safety during pregnancy using advanced designs like sibling-matched analysis to control for unmeasured genetic and environmental confounding.",
    topic3_kw1: "Medication Safety in Pregnancy",
    topic3_kw2: "Pediatric Pharmacoepidemiology",
    topic3_kw3: "Sibling-matched Design",
    topic3_kw4: "Mother-Infant Cohort",

    // Research Network Topic 04
    topic4_short: "Regulatory Science & Healthcare Policy",
    topic4_subtitle: "REGULATORY & POLICY",
    topic4_hint: "HEALTHCARE POLICY",

    topic4_full: "Regulatory Science & Healthcare Policy",
    topic4_d: "We generate quantitative evidence to support regulatory decision-making by the Ministry of Food and Drug Safety (MFDS) and global health authorities. Our research focuses on Drug Utilization Evaluation (DUE), pharmaceutical pricing and reimbursement policies, and setting RWE-based regulatory standards that enhance patient access while optimizing healthcare expenditure.",
    topic4_kw1: "Regulatory Science",
    topic4_kw2: "Healthcare Policy Evaluation",
    topic4_kw3: "Drug Utilization Evaluation (DUE)",
    topic4_kw4: "RWE-based Decision Making",

    // ----------------------------------------------------------------------
    // 7. Contact Page
    // ----------------------------------------------------------------------
    contact_site_title: "Contact - Noh Lab",
    contact_title: "Location & Contact",
    contact_sub: "Location and contact details for the laboratory.",
    contact_office: "Laboratory Location",
    contact_addr: "College of Pharmacy Building 2, Chonnam National University, 77 Yongbong-ro, Buk-gu, Gwangju, Republic of Korea",
    contact_email: "Email Inquiry",
    map_kakao_btn: "Kakao Map Directions ↗",
    map_naver_btn: "Naver Map Directions ↗"
  }
};


// ==========================================================================
// JS 스크립트에서 번역 텍스트를 직접 가져오는 헬퍼 함수
// ==========================================================================

function getTrans(key) {

  const lang =
    localStorage.getItem("site_lang") || "ko";

  return (
    translations[lang]?.[key] ||
    translations["ko"]?.[key] ||
    key
  );
}


// ==========================================================================
// 페이지 로딩
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

  const currentLang =
    localStorage.getItem("site_lang") || "ko";

  setLanguage(currentLang);


  const langBtn =
    document.getElementById("lang-toggle-btn");

  if (langBtn) {

    langBtn.addEventListener("click", () => {

      const nextLang =
        localStorage.getItem("site_lang") === "en"
          ? "ko"
          : "en";

      setLanguage(nextLang);

    });

  }

});


// ==========================================================================
// 언어 변경 함수
// ==========================================================================

function setLanguage(lang) {

  localStorage.setItem("site_lang", lang);

  document.documentElement.lang = lang;


  // ------------------------------------------------------------------------
  // 일반 텍스트 변경 ([data-i18n])
  // ------------------------------------------------------------------------

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key =
      el.getAttribute("data-i18n");

    if (
      translations[lang] &&
      translations[lang][key]
    ) {

      el.textContent =
        translations[lang][key];

    }

  });


  // ------------------------------------------------------------------------
  // Placeholder 변경 ([data-i18n-placeholder])
  // ------------------------------------------------------------------------

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(el => {

      const key =
        el.getAttribute("data-i18n-placeholder");

      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        el.setAttribute(
          "placeholder",
          translations[lang][key]
        );

      }

    });


  // ------------------------------------------------------------------------
  // 토글 버튼 텍스트 변경
  // ------------------------------------------------------------------------

  const langBtn =
    document.getElementById("lang-toggle-btn");

  if (langBtn) {

    langBtn.textContent =
      lang === "ko"
        ? "EN"
        : "KO";

  }


  // ------------------------------------------------------------------------
  // 언어 변경 이벤트 발행
  // ------------------------------------------------------------------------

  window.dispatchEvent(
    new CustomEvent(
      "languageChanged",
      {
        detail: {
          lang: lang
        }
      }
    )
  );
}
