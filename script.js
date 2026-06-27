// Meaningful keywords for AI Product Manager / Global GTM roles (longer phrases first)
const ROLE_KEYWORDS = [
  "cross-functional collaboration",
  "cross-functional",
  "go-to-market strategy",
  "go-to-market",
  "gtm strategy",
  "product development",
  "prompt engineering",
  "market research",
  "user research",
  "data analysis",
  "ai product manager",
  "ai product",
  "generative ai",
  "machine learning",
  "product-market fit",
  "competitive analysis",
  "stakeholder management",
  "international expansion",
  "global market",
  "product launch",
  "product roadmap",
  "roadmap prioritization",
  "growth strategy",
  "growth",
  "localization",
  "localization strategy",
  "pricing strategy",
  "customer discovery",
  "product metrics",
  "a/b testing",
  "ux research",
  "user experience",
  "llm",
  "saas",
  "b2b",
  "b2c",
  "okrs",
  "kpis",
  "analytics",
  "sql",
  "figma",
  "agile",
  "scrum"
];

// Generic words that should NOT appear as missing keywords
const GENERIC_WORDS = new Set([
  "manager", "minded", "conduct", "support", "teams", "user", "team", "work",
  "working", "experience", "skills", "skill", "ability", "strong", "excellent",
  "good", "great", "high", "level", "years", "year", "role", "company", "job",
  "position", "candidate", "looking", "required", "preferred", "including",
  "include", "includes", "using", "used", "well", "responsibilities",
  "responsibility", "help", "ensure", "drive", "build", "lead", "manage",
  "management", "develop", "development", "create", "collaborate", "partner",
  "partners", "internal", "external", "across", "within", "global", "local",
  "new", "best", "top", "key", "main", "primary", "related", "relevant",
  "successful", "success", "effective", "efficient", "fast", "quick", "large",
  "small", "multiple", "various", "different", "similar", "based", "focus",
  "focused", "passion", "passionate", "motivated", "dynamic", "innovative",
  "creative", "detail", "oriented", "self", "starter", "environment", "culture",
  "people", "person", "individual", "group", "organization", "business",
  "products", "product", "services", "service", "clients", "client",
  "customers", "customer", "stakeholders", "stakeholder", "projects", "project",
  "initiatives", "initiative", "goals", "goal", "objectives", "objective",
  "results", "result", "impact", "value", "quality", "performance", "process",
  "processes", "tools", "tool", "platform", "platforms", "solutions", "solution",
  "technology", "technologies", "technical", "digital", "online", "data",
  "market", "markets", "industry", "industries", "sector", "world", "worldwide",
  "international", "regional", "country", "countries", "language", "languages"
]);

// Natural resume bullets tailored to each keyword theme
const BULLET_TEMPLATES = {
  "ai product": "Owned the roadmap for an AI-powered product feature, aligning engineering, design, and GTM on launch goals and adoption metrics.",
  "ai product manager": "Defined product vision and quarterly OKRs for an AI product line, prioritizing features based on user feedback and business impact.",
  "generative ai": "Shipped a generative AI capability from concept to launch, running beta tests with target users and iterating on prompt quality and safety guardrails.",
  "prompt engineering": "Improved model output quality through structured prompt design and evaluation, reducing user-reported errors by [X]% in pilot releases.",
  "gtm strategy": "Developed a go-to-market plan for a new market segment, including positioning, launch timeline, and channel strategy that reached [X] accounts in the first quarter.",
  "go-to-market": "Partnered with sales and marketing to execute a go-to-market launch, coordinating messaging, enablement materials, and success metrics across regions.",
  "go-to-market strategy": "Led go-to-market strategy for a product expansion, defining ICP, pricing, and launch sequencing that contributed to [X]% revenue growth.",
  "growth": "Identified and tested growth levers through experiments and funnel analysis, improving activation or retention by [X]% over [time period].",
  "growth strategy": "Built a growth strategy grounded in cohort analysis and user segmentation, prioritizing initiatives with the highest projected LTV impact.",
  "localization": "Led localization efforts for [product/market], adapting UX, messaging, and go-to-market plans to meet regional user needs and compliance requirements.",
  "localization strategy": "Defined a localization strategy across [N] markets, coordinating with legal, marketing, and product teams to ensure consistent brand experience.",
  "market research": "Conducted market research—including competitor benchmarking and customer interviews—to inform product positioning and roadmap priorities.",
  "user research": "Ran user research sessions (interviews, usability tests) to validate problem statements and inform feature prioritization for [product area].",
  "data analysis": "Used data analysis to track product KPIs, surface trends in user behavior, and recommend roadmap changes backed by quantitative evidence.",
  "cross-functional collaboration": "Led cross-functional initiatives with engineering, design, sales, and marketing to deliver [product/initiative] on schedule.",
  "cross-functional": "Facilitated cross-functional alignment through weekly syncs and shared OKRs, unblocking dependencies across [N] teams.",
  "product development": "Drove product development from discovery through launch, writing PRDs, defining acceptance criteria, and monitoring post-launch performance.",
  "product launch": "Managed end-to-end product launch planning, including beta rollout, sales enablement, and post-launch metric reviews.",
  "product roadmap": "Maintained and communicated a product roadmap tied to company goals, reprioritizing based on user data and market shifts.",
  "international expansion": "Supported international expansion by localizing product requirements and coordinating launch plans with regional GTM leads.",
  "global market": "Adapted product and GTM plans for global markets, balancing centralized strategy with regional customization needs.",
  "machine learning": "Partnered with ML engineers to define product requirements for model-powered features, including success metrics and rollout criteria.",
  "llm": "Defined product requirements for LLM-powered experiences, including evaluation criteria, fallback behavior, and user-facing value propositions.",
  "product-market fit": "Validated product-market fit through early adopter programs and iterative feedback loops before scaling GTM investment.",
  "competitive analysis": "Produced competitive analysis that informed differentiation strategy and informed executive decisions on roadmap investment.",
  "stakeholder management": "Managed stakeholder expectations across leadership and functional teams, providing clear updates on trade-offs, risks, and milestones.",
  "customer discovery": "Led customer discovery with [N] prospects to validate pain points and shape MVP scope before development kickoff.",
  "pricing strategy": "Contributed to pricing and packaging decisions using willingness-to-pay research and competitive benchmarking.",
  "a/b testing": "Designed and analyzed A/B tests to optimize onboarding and feature adoption, applying statistically meaningful learnings to the roadmap.",
  "ux research": "Collaborated with UX research to translate insights into actionable product requirements and measurable UX improvements.",
  "analytics": "Built dashboards tracking core product metrics (activation, retention, engagement) and presented insights to leadership monthly.",
  "sql": "Used SQL to query product usage data, supporting roadmap decisions with self-serve analysis of user cohorts and feature adoption."
};

// Skills to suggest when gaps are detected
const SKILL_CATALOG = [
  {
    id: "prompt-engineering",
    label: "Prompt engineering & LLM evaluation",
    triggers: ["prompt engineering", "generative ai", "llm", "ai product"],
    reason: "AI PM roles expect you to shape model behavior, not just write specs."
  },
  {
    id: "gtm-strategy",
    label: "Go-to-market strategy & launch planning",
    triggers: ["gtm strategy", "go-to-market", "product launch", "growth strategy"],
    reason: "Global GTM roles require structured launch plans, not just feature delivery."
  },
  {
    id: "market-research",
    label: "Market & competitive research",
    triggers: ["market research", "competitive analysis", "customer discovery"],
    reason: "Strong PMs ground decisions in market signals, not assumptions."
  },
  {
    id: "user-research",
    label: "User research & customer interviews",
    triggers: ["user research", "ux research", "customer discovery"],
    reason: "Interview skills help you validate problems before building."
  },
  {
    id: "data-analysis",
    label: "Product analytics & SQL",
    triggers: ["data analysis", "analytics", "sql", "product metrics", "a/b testing"],
    reason: "Data fluency lets you prioritize with evidence and measure impact."
  },
  {
    id: "localization",
    label: "Localization & international product strategy",
    triggers: ["localization", "international expansion", "global market"],
    reason: "Global roles need experience adapting products and GTM for local markets."
  },
  {
    id: "cross-functional",
    label: "Cross-functional leadership",
    triggers: ["cross-functional collaboration", "cross-functional", "stakeholder management"],
    reason: "PM work depends on aligning engineering, design, sales, and marketing."
  },
  {
    id: "product-development",
    label: "Product discovery & PRD writing",
    triggers: ["product development", "product roadmap", "roadmap prioritization"],
    reason: "Clear discovery and specs accelerate delivery and reduce rework."
  },
  {
    id: "growth",
    label: "Growth experimentation",
    triggers: ["growth strategy", "growth", "a/b testing", "product metrics"],
    reason: "Growth-minded PMs connect product changes to measurable business outcomes."
  }
];

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function extractRoleKeywords(text) {
  const lowerText = normalizeText(text);
  const found = [];
  const usedRanges = [];

  const sortedKeywords = ROLE_KEYWORDS.slice().sort(function (a, b) {
    return b.length - a.length;
  });

  sortedKeywords.forEach(function (keyword) {
    if (GENERIC_WORDS.has(keyword)) {
      return;
    }

    let searchFrom = 0;
    let index = lowerText.indexOf(keyword, searchFrom);

    while (index !== -1) {
      const end = index + keyword.length;
      const overlaps = usedRanges.some(function (range) {
        return index < range.end && end > range.start;
      });

      if (!overlaps && !found.includes(keyword)) {
        found.push(keyword);
        usedRanges.push({ start: index, end: end });
      }

      searchFrom = index + 1;
      index = lowerText.indexOf(keyword, searchFrom);
    }
  });

  return found;
}

function filterMissingKeywords(keywords, resumeText) {
  const resumeLower = normalizeText(resumeText);

  return keywords.filter(function (keyword) {
    if (GENERIC_WORDS.has(keyword)) {
      return false;
    }
    return !resumeLower.includes(keyword);
  });
}

function getMatchedKeywords(jdKeywords, resumeText) {
  const resumeLower = normalizeText(resumeText);
  return jdKeywords.filter(function (keyword) {
    return resumeLower.includes(keyword);
  });
}

function calculateScore(jdKeywords, missingKeywords) {
  if (jdKeywords.length === 0) {
    return 55;
  }
  const matched = jdKeywords.length - missingKeywords.length;
  const ratio = matched / jdKeywords.length;
  return Math.round(45 + ratio * 50);
}

function getScoreSummary(score, missingCount) {
  if (score >= 80) {
    return "Strong alignment for an AI Product / Global GTM role. Fine-tune bullets with metrics and regional examples.";
  }
  if (score >= 65) {
    return "Solid foundation. Adding a few role-specific keywords and quantified outcomes would strengthen your profile.";
  }
  if (score >= 50) {
    return "Partial fit. Your background has relevant pieces—reframe experience using the job's language and GTM context.";
  }
  if (missingCount > 6) {
    return "Significant gaps in role-specific language. Focus on AI product, GTM, and research keywords in your next draft.";
  }
  return "Low overlap with this JD. Tailor your resume to highlight product, AI, and go-to-market experience.";
}

function buildRecommendedBullets(missingKeywords, matchedKeywords, jdText) {
  const bullets = [];
  const usedTemplates = new Set();

  function addBulletForKeyword(keyword) {
    const template = BULLET_TEMPLATES[keyword];
    if (template && !usedTemplates.has(template)) {
      bullets.push(template);
      usedTemplates.add(template);
    }
  }

  missingKeywords.forEach(addBulletForKeyword);

  if (bullets.length < 3) {
    matchedKeywords.forEach(addBulletForKeyword);
  }

  const jdLower = normalizeText(jdText);

  if (bullets.length < 4 && (jdLower.includes("global") || jdLower.includes("international"))) {
    bullets.push(
      "Partnered with regional leads to adapt product and GTM plans for international markets, balancing global consistency with local user needs."
    );
  }

  if (bullets.length < 4 && (jdLower.includes("ai") || jdLower.includes("ml") || jdLower.includes("llm"))) {
    bullets.push(
      "Translated user problems into AI product requirements, partnering with engineering on model capabilities, guardrails, and success metrics."
    );
  }

  if (bullets.length < 4) {
    bullets.push(
      "Defined and tracked product OKRs tied to adoption and revenue, presenting progress and trade-offs to leadership on a regular cadence."
    );
  }

  return bullets.slice(0, 5);
}

function buildInterviewQuestions(jdText, missingKeywords, matchedKeywords) {
  const questions = [];
  const jdLower = normalizeText(jdText);

  const topicQuestions = {
    "gtm strategy": "Walk me through a go-to-market plan you built. How did you choose segments, channels, and success metrics?",
    "go-to-market": "Describe a product launch you supported. What was your role across product, marketing, and sales?",
    "ai product": "Tell me about an AI-powered product or feature you owned. How did you define requirements and measure success?",
    "generative ai": "How do you approach building trust and quality guardrails for generative AI features?",
    "prompt engineering": "Give an example of how you improved model output quality through prompts, evaluation, or user feedback loops.",
    "localization": "How have you adapted a product or GTM plan for a specific region or language market?",
    "market research": "Describe market research you led. What did you learn, and how did it change your roadmap or positioning?",
    "user research": "Tell me about a time user research changed your prioritization. What would you have shipped without that insight?",
    "data analysis": "Share an example where data changed your product decision. What metrics did you track and what did you conclude?",
    "cross-functional collaboration": "Describe a cross-functional project with competing priorities. How did you align stakeholders and ship?",
    "growth strategy": "What growth experiment or initiative are you most proud of? What was the hypothesis and result?",
    "product development": "How do you take a vague idea from discovery to a shipped MVP? Walk me through your process.",
    "international expansion": "What challenges have you seen when expanding a product globally, and how would you address them?"
  };

  missingKeywords.slice(0, 3).forEach(function (keyword) {
    if (topicQuestions[keyword]) {
      questions.push(topicQuestions[keyword]);
    }
  });

  if (questions.length < 3) {
    matchedKeywords.slice(0, 2).forEach(function (keyword) {
      if (topicQuestions[keyword] && !questions.includes(topicQuestions[keyword])) {
        questions.push(topicQuestions[keyword]);
      }
    });
  }

  questions.push("Why this AI Product / Global GTM role, and how does your background prepare you for it?");

  if (jdLower.includes("priorit") || jdLower.includes("roadmap")) {
    questions.push("How do you prioritize roadmap items when engineering capacity is limited and stakeholders disagree?");
  }

  if (jdLower.includes("metric") || jdLower.includes("kpi") || jdLower.includes("okr")) {
    questions.push("Which product metrics matter most at each stage—discovery, launch, and scale—and why?");
  }

  if (questions.length < 5) {
    questions.push("Tell me about a product decision you made with incomplete data. How did you de-risk it?");
  }

  return questions.slice(0, 6);
}

function buildPositioningAdvice(jdText, resumeText, missingKeywords, matchedKeywords) {
  const jdLower = normalizeText(jdText);
  const resumeLower = normalizeText(resumeText);
  const advice = [];

  const hasAi = jdLower.includes("ai") || jdLower.includes("llm") || jdLower.includes("generative");
  const hasGtm = jdLower.includes("gtm") || jdLower.includes("go-to-market") || jdLower.includes("go to market");
  const hasGlobal = jdLower.includes("global") || jdLower.includes("international") || jdLower.includes("localization");
  const resumeHasProduct = resumeLower.includes("product") || resumeLower.includes("roadmap") || resumeLower.includes("prd");
  const resumeHasResearch = resumeLower.includes("research") || resumeLower.includes("interview") || resumeLower.includes("user");
  const resumeHasData = resumeLower.includes("data") || resumeLower.includes("analytics") || resumeLower.includes("metric");

  if (hasAi && hasGtm) {
    advice.push(
      "Position yourself as a product leader who connects AI capabilities to business outcomes—not just a technologist. Lead with launches, adoption metrics, and GTM impact."
    );
  } else if (hasAi) {
    advice.push(
      "Frame your experience around AI product judgment: problem selection, user value, model limitations, and how you partner with engineering on shipping responsibly."
    );
  } else if (hasGtm) {
    advice.push(
      "Emphasize launch ownership, market segmentation, and cross-functional coordination. Show how product decisions supported revenue, pipeline, or regional growth."
    );
  }

  if (hasGlobal) {
    advice.push(
      "Highlight any international, multilingual, or regional work—even coursework, side projects, or travel. Global GTM roles value cultural awareness and localization mindset."
    );
  }

  if (matchedKeywords.length > 0) {
    const strengths = matchedKeywords.slice(0, 3).join(", ");
    advice.push(
      "Your resume already signals strength in: " + strengths + ". Make these themes visible in your summary and top three bullets so recruiters see them in the first 10 seconds."
    );
  }

  if (missingKeywords.length > 0) {
    const gaps = missingKeywords.slice(0, 3).join(", ");
    advice.push(
      "The job emphasizes " + gaps + ", which are not clearly reflected in your resume yet. Add one concrete project example for each—what you did, who you worked with, and the result."
    );
  }

  if (resumeHasResearch && hasAi) {
    advice.push(
      "Bridge user research and AI: describe how you validated user problems before investing in model-powered solutions."
    );
  } else if (resumeHasData && !resumeHasProduct) {
    advice.push(
      "You show analytical strength—reframe it in product terms: what decision did the data inform, what did you recommend, and what changed?"
    );
  } else if (resumeHasProduct && missingKeywords.includes("gtm strategy")) {
    advice.push(
      "Add GTM context to product bullets: who the launch served, which channels you supported, and how you measured success beyond feature delivery."
    );
  }

  if (advice.length === 0) {
    advice.push(
      "Lead with a one-line summary tailored to AI Product / Global GTM: your domain (AI, SaaS, consumer), scope (0→1 vs scale), and one quantified win."
    );
  }

  return advice.slice(0, 4);
}

function buildNextSkillGaps(missingKeywords, jdText) {
  const jdLower = normalizeText(jdText);
  const scored = [];

  SKILL_CATALOG.forEach(function (skill) {
    let score = 0;

    skill.triggers.forEach(function (trigger) {
      if (missingKeywords.includes(trigger)) {
        score += 3;
      }
      if (jdLower.includes(trigger)) {
        score += 2;
      }
    });

    if (score > 0) {
      scored.push({ skill: skill, score: score });
    }
  });

  scored.sort(function (a, b) {
    return b.score - a.score;
  });

  let results = scored.slice(0, 3).map(function (entry) {
    return {
      label: entry.skill.label,
      reason: entry.skill.reason
    };
  });

  if (results.length < 3) {
    const defaults = [
      {
        label: "Go-to-market strategy & launch planning",
        reason: "Global GTM roles require structured launch plans, not just feature delivery."
      },
      {
        label: "Product analytics & SQL",
        reason: "Data fluency lets you prioritize with evidence and measure impact."
      },
      {
        label: "User research & customer interviews",
        reason: "Interview skills help you validate problems before building."
      }
    ];

    defaults.forEach(function (item) {
      if (results.length < 3 && !results.some(function (r) { return r.label === item.label; })) {
        results.push(item);
      }
    });
  }

  return results.slice(0, 3);
}

function renderList(listElement, items, emptyMessage) {
  listElement.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = emptyMessage;
    listElement.appendChild(li);
    return;
  }

  items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function renderAdvice(adviceItems) {
  const container = document.getElementById("positioning-advice");
  container.innerHTML = "";

  adviceItems.forEach(function (paragraph) {
    const p = document.createElement("p");
    p.className = "advice-paragraph";
    p.textContent = paragraph;
    container.appendChild(p);
  });
}

function renderSkillGaps(skills) {
  const list = document.getElementById("next-skill-gaps");
  list.innerHTML = "";

  skills.forEach(function (skill, index) {
    const li = document.createElement("li");
    li.innerHTML =
      "<span class=\"skill-number\">" + (index + 1) + "</span>" +
      "<div class=\"skill-content\">" +
      "<strong>" + skill.label + "</strong>" +
      "<span class=\"skill-reason\">" + skill.reason + "</span>" +
      "</div>";
    list.appendChild(li);
  });
}

function showResults(data) {
  document.getElementById("match-score").textContent = data.score;
  document.getElementById("score-summary").textContent = data.scoreSummary;

  const keywordsList = document.getElementById("missing-keywords");
  keywordsList.innerHTML = "";

  if (data.missingKeywords.length === 0) {
    const li = document.createElement("li");
    li.className = "tag-success";
    li.textContent = "No major role-specific gaps detected";
    keywordsList.appendChild(li);
  } else {
    data.missingKeywords.slice(0, 10).forEach(function (keyword) {
      const li = document.createElement("li");
      li.textContent = keyword;
      keywordsList.appendChild(li);
    });
  }

  renderList(document.getElementById("recommended-bullets"), data.bullets, "Add role-specific examples to your resume.");
  renderList(document.getElementById("interview-questions"), data.questions, "Review common PM interview questions.");
  renderAdvice(data.positioningAdvice);
  renderSkillGaps(data.skillGaps);

  const resultsSection = document.getElementById("results");
  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function analyzeMatch() {
  const jdText = document.getElementById("job-description").value.trim();
  const resumeText = document.getElementById("resume").value.trim();

  if (!jdText || !resumeText) {
    alert("Please paste both a Job Description and your Resume / Experience before analyzing.");
    return;
  }

  const jdKeywords = extractRoleKeywords(jdText);
  const missingKeywords = filterMissingKeywords(jdKeywords, resumeText);
  const matchedKeywords = getMatchedKeywords(jdKeywords, resumeText);
  const score = calculateScore(jdKeywords, missingKeywords);

  showResults({
    score: score,
    scoreSummary: getScoreSummary(score, missingKeywords.length),
    missingKeywords: missingKeywords,
    bullets: buildRecommendedBullets(missingKeywords, matchedKeywords, jdText),
    questions: buildInterviewQuestions(jdText, missingKeywords, matchedKeywords),
    positioningAdvice: buildPositioningAdvice(jdText, resumeText, missingKeywords, matchedKeywords),
    skillGaps: buildNextSkillGaps(missingKeywords, jdText)
  });
}

document.getElementById("analyze-btn").addEventListener("click", analyzeMatch);
