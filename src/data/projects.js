/**
 * Construction projects data + taxonomies.
 *
 * SAMPLE DATA: replace PROJECTS with your real projects (same fields).
 * Every page under /construction-projects is generated from this file at build time.
 * Only fields listed here are public. Plans, specs, contacts, bidder lists,
 * addenda and takeoff are NEVER stored here, so they can't leak into the HTML.
 */

// ---------- Taxonomies (slug is used in the URL) ----------
export const TRADES = [
  { slug: "electrical",      icon: "bi-lightning-charge", en: "Electrical",      ar: "الكهرباء" },
  { slug: "concrete",        icon: "bi-bricks",           en: "Concrete",        ar: "الخرسانة" },
  { slug: "plumbing",        icon: "bi-droplet",          en: "Plumbing",        ar: "السباكة" },
  { slug: "hvac",            icon: "bi-fan",              en: "HVAC",            ar: "التكييف والتهوية" },
  { slug: "roofing",         icon: "bi-house-up",         en: "Roofing",         ar: "الأسقف" },
  { slug: "drywall",         icon: "bi-grid-3x3",         en: "Drywall",         ar: "الجدران الجافة" },
  { slug: "structural-steel",icon: "bi-building-gear",    en: "Structural Steel",ar: "الهياكل الفولاذية" },
  { slug: "painting",        icon: "bi-paint-bucket",     en: "Painting",        ar: "الدهانات" },
];

export const SECTORS = [
  { slug: "healthcare",  icon: "bi-hospital",       en: "Healthcare",  ar: "الرعاية الصحية" },
  { slug: "commercial",  icon: "bi-buildings",      en: "Commercial",  ar: "تجاري" },
  { slug: "multifamily", icon: "bi-house-door",     en: "Multifamily", ar: "سكني متعدد الوحدات" },
  { slug: "education",   icon: "bi-mortarboard",    en: "Education",   ar: "التعليم" },
  { slug: "industrial",  icon: "bi-gear-wide-connected", en: "Industrial", ar: "صناعي" },
  { slug: "retail",      icon: "bi-shop",           en: "Retail",      ar: "تجزئة" },
  { slug: "hospitality", icon: "bi-cup-hot",        en: "Hospitality", ar: "الضيافة" },
  { slug: "government",  icon: "bi-bank",           en: "Government",  ar: "حكومي" },
];

export const STATES = [
  { slug: "texas", en: "Texas", ar: "تكساس", code: "TX", cities: [
    { slug: "dallas", en: "Dallas", ar: "دالاس" },
    { slug: "houston", en: "Houston", ar: "هيوستن" },
    { slug: "austin", en: "Austin", ar: "أوستن" },
  ]},
  { slug: "california", en: "California", ar: "كاليفورنيا", code: "CA", cities: [
    { slug: "los-angeles", en: "Los Angeles", ar: "لوس أنجلوس" },
    { slug: "san-diego", en: "San Diego", ar: "سان دييغو" },
  ]},
  { slug: "florida", en: "Florida", ar: "فلوريدا", code: "FL", cities: [
    { slug: "miami", en: "Miami", ar: "ميامي" },
    { slug: "tampa", en: "Tampa", ar: "تامبا" },
  ]},
  { slug: "new-york", en: "New York", ar: "نيويورك", code: "NY", cities: [
    { slug: "new-york-city", en: "New York City", ar: "مدينة نيويورك" },
    { slug: "buffalo", en: "Buffalo", ar: "بافالو" },
  ]},
  { slug: "arizona", en: "Arizona", ar: "أريزونا", code: "AZ", cities: [
    { slug: "phoenix", en: "Phoenix", ar: "فينيكس" },
  ]},
  { slug: "ohio", en: "Ohio", ar: "أوهايو", code: "OH", cities: [
    { slug: "columbus", en: "Columbus", ar: "كولومبوس" },
  ]},
];

export const PROJECT_TYPES = {
  "new-construction":   { en: "New Construction",   ar: "إنشاء جديد" },
  "renovation":         { en: "Renovation",         ar: "تجديد" },
  "expansion":          { en: "Expansion",          ar: "توسعة" },
  "tenant-improvement": { en: "Tenant Improvement", ar: "تحسينات للمستأجر" },
};

export const STAGES = {
  "design":       { en: "Design",           ar: "التصميم" },
  "pre-bid":      { en: "Pre-Bid",          ar: "ما قبل العطاء" },
  "bidding":      { en: "Bidding",          ar: "مرحلة العطاء" },
  "construction": { en: "Under Construction", ar: "قيد الإنشاء" },
};

// Status shown as a colored badge
export const STATUSES = {
  "active":         { en: "Active",          ar: "نشط",           tone: "green" },
  "bidding-soon":   { en: "Bidding Soon",    ar: "العطاء قريبًا",   tone: "amber" },
  "recently-added": { en: "Recently Added",  ar: "أُضيف حديثًا",   tone: "blue" },
  "awarded":        { en: "Closed / Awarded",ar: "مغلق / تمت الترسية", tone: "gray" },
};

export const OWNERSHIP = {
  public:  { en: "Public",  ar: "عام" },
  private: { en: "Private", ar: "خاص" },
};

// ---------- Projects (SAMPLE) ----------
// value: USD. Dates: YYYY-MM-DD. owner: GC or agency (only if public information).
export const PROJECTS = [
  {
    slug: "dallas-medical-center-expansion",
    name: "Dallas Medical Center Expansion",
    state: "texas", city: "dallas", sector: "healthcare", type: "expansion", ownership: "private",
    value: 48200000, bidDate: "2026-10-28", stage: "bidding", status: "active",
    trades: ["electrical", "hvac", "plumbing", "drywall"],
    owner: "Turner Construction",
    scope: {
      en: "Four-story patient tower addition with 120 beds, new imaging suite and central plant upgrades.",
      ar: "إضافة برج مرضى من أربعة طوابق بسعة 120 سريرًا، مع جناح تصوير جديد وتحديث المحطة المركزية.",
    },
    lastUpdated: "2026-09-18",
  },
  {
    slug: "houston-logistics-distribution-hub",
    name: "Houston Logistics Distribution Hub",
    state: "texas", city: "houston", sector: "industrial", type: "new-construction", ownership: "private",
    value: 31500000, bidDate: "2026-11-12", stage: "pre-bid", status: "bidding-soon",
    trades: ["concrete", "structural-steel", "electrical", "roofing"],
    owner: "",
    scope: {
      en: "620,000 sq ft tilt-wall distribution center with 90 dock doors and office build-out.",
      ar: "مركز توزيع بجدران مسبقة الصب بمساحة 620,000 قدم مربع مع 90 بوابة تحميل ومكاتب.",
    },
    lastUpdated: "2026-09-17",
  },
  {
    slug: "austin-isd-elementary-school",
    name: "Austin ISD Elementary School",
    state: "texas", city: "austin", sector: "education", type: "new-construction", ownership: "public",
    value: 38700000, bidDate: "2026-10-21", stage: "bidding", status: "active",
    trades: ["concrete", "electrical", "plumbing", "hvac", "painting"],
    owner: "Austin Independent School District",
    scope: {
      en: "New two-story elementary campus for 850 students with gym, cafeteria and outdoor learning areas.",
      ar: "حرم مدرسي ابتدائي جديد من طابقين يتسع لـ 850 طالبًا مع صالة رياضية ومقصف ومساحات تعلم خارجية.",
    },
    lastUpdated: "2026-09-19",
  },
  {
    slug: "dallas-uptown-mixed-use-tower",
    name: "Uptown Mixed-Use Tower",
    state: "texas", city: "dallas", sector: "multifamily", type: "new-construction", ownership: "private",
    value: 92000000, bidDate: "2026-12-04", stage: "design", status: "recently-added",
    trades: ["concrete", "structural-steel", "electrical", "plumbing", "drywall"],
    owner: "",
    scope: {
      en: "28-story tower with 310 apartments, ground-floor retail and a five-level parking podium.",
      ar: "برج من 28 طابقًا يضم 310 شقق ومحلات تجارية في الطابق الأرضي ومواقف سيارات من خمسة مستويات.",
    },
    lastUpdated: "2026-09-20",
  },
  {
    slug: "los-angeles-county-courthouse-renovation",
    name: "LA County Courthouse Renovation",
    state: "california", city: "los-angeles", sector: "government", type: "renovation", ownership: "public",
    value: 27400000, bidDate: "2026-10-30", stage: "bidding", status: "active",
    trades: ["electrical", "hvac", "drywall", "painting"],
    owner: "Los Angeles County Public Works",
    scope: {
      en: "Seismic retrofit, full MEP replacement and interior modernization of a 1960s courthouse.",
      ar: "تدعيم ضد الزلازل واستبدال كامل للأعمال الكهروميكانيكية وتحديث داخلي لمبنى محكمة من الستينيات.",
    },
    lastUpdated: "2026-09-16",
  },
  {
    slug: "san-diego-biotech-research-campus",
    name: "San Diego Biotech Research Campus",
    state: "california", city: "san-diego", sector: "commercial", type: "new-construction", ownership: "private",
    value: 64800000, bidDate: "2026-11-20", stage: "pre-bid", status: "bidding-soon",
    trades: ["concrete", "structural-steel", "hvac", "electrical", "plumbing"],
    owner: "",
    scope: {
      en: "Two lab buildings totaling 240,000 sq ft with clean rooms, vivarium and rooftop mechanical.",
      ar: "مبنيان مختبريان بإجمالي 240,000 قدم مربع مع غرف نظيفة ومرافق أبحاث ومعدات ميكانيكية على السطح.",
    },
    lastUpdated: "2026-09-15",
  },
  {
    slug: "miami-beachfront-hotel-renovation",
    name: "Miami Beachfront Hotel Renovation",
    state: "florida", city: "miami", sector: "hospitality", type: "renovation", ownership: "private",
    value: 19600000, bidDate: "2026-10-24", stage: "bidding", status: "active",
    trades: ["drywall", "painting", "plumbing", "electrical"],
    owner: "Suffolk Construction",
    scope: {
      en: "Renovation of 240 guest rooms, lobby, pool deck and restaurant with a phased, occupied schedule.",
      ar: "تجديد 240 غرفة فندقية والردهة وسطح المسبح والمطعم وفق جدول مرحلي أثناء تشغيل الفندق.",
    },
    lastUpdated: "2026-09-18",
  },
  {
    slug: "tampa-retail-plaza",
    name: "Tampa Westshore Retail Plaza",
    state: "florida", city: "tampa", sector: "retail", type: "new-construction", ownership: "private",
    value: 12300000, bidDate: "2026-11-05", stage: "pre-bid", status: "bidding-soon",
    trades: ["concrete", "roofing", "electrical", "painting"],
    owner: "",
    scope: {
      en: "Single-story 85,000 sq ft retail center with anchor grocery, six shop spaces and site work.",
      ar: "مركز تجاري من طابق واحد بمساحة 85,000 قدم مربع مع متجر بقالة رئيسي وستة محلات وأعمال موقع.",
    },
    lastUpdated: "2026-09-14",
  },
  {
    slug: "miami-dade-public-library",
    name: "Miami-Dade Public Library Branch",
    state: "florida", city: "miami", sector: "government", type: "new-construction", ownership: "public",
    value: 9800000, bidDate: "2026-08-14", stage: "construction", status: "awarded",
    trades: ["concrete", "roofing", "hvac", "electrical"],
    owner: "Miami-Dade County",
    scope: {
      en: "New 22,000 sq ft library branch with community rooms, maker space and hurricane-rated envelope.",
      ar: "فرع مكتبة جديد بمساحة 22,000 قدم مربع مع قاعات مجتمعية ومساحة ابتكار وغلاف مقاوم للأعاصير.",
    },
    lastUpdated: "2026-09-02",
  },
  {
    slug: "brooklyn-affordable-housing",
    name: "Brooklyn Affordable Housing Development",
    state: "new-york", city: "new-york-city", sector: "multifamily", type: "new-construction", ownership: "public",
    value: 74500000, bidDate: "2026-11-18", stage: "bidding", status: "active",
    trades: ["concrete", "plumbing", "electrical", "drywall", "painting"],
    owner: "NYC Housing Preservation & Development",
    scope: {
      en: "12-story building with 180 affordable units, community facility and green roof.",
      ar: "مبنى من 12 طابقًا يضم 180 وحدة سكنية ميسورة التكلفة ومرفقًا مجتمعيًا وسطحًا أخضر.",
    },
    lastUpdated: "2026-09-19",
  },
  {
    slug: "manhattan-office-tenant-improvement",
    name: "Midtown Office Tenant Improvement",
    state: "new-york", city: "new-york-city", sector: "commercial", type: "tenant-improvement", ownership: "private",
    value: 6400000, bidDate: "2026-10-16", stage: "bidding", status: "recently-added",
    trades: ["drywall", "electrical", "hvac", "painting"],
    owner: "",
    scope: {
      en: "Full-floor 48,000 sq ft office fit-out with open workspace, conference center and pantry.",
      ar: "تجهيز طابق مكاتب كامل بمساحة 48,000 قدم مربع مع مساحة عمل مفتوحة ومركز اجتماعات ومطبخ.",
    },
    lastUpdated: "2026-09-20",
  },
  {
    slug: "buffalo-manufacturing-plant",
    name: "Buffalo Advanced Manufacturing Plant",
    state: "new-york", city: "buffalo", sector: "industrial", type: "expansion", ownership: "private",
    value: 41000000, bidDate: "2026-12-10", stage: "design", status: "recently-added",
    trades: ["structural-steel", "concrete", "electrical", "roofing"],
    owner: "",
    scope: {
      en: "180,000 sq ft production hall expansion with 40-ton cranes and new electrical substation.",
      ar: "توسعة صالة إنتاج بمساحة 180,000 قدم مربع مع رافعات بقدرة 40 طنًا ومحطة كهرباء فرعية جديدة.",
    },
    lastUpdated: "2026-09-17",
  },
  {
    slug: "phoenix-childrens-clinic",
    name: "Phoenix Children's Outpatient Clinic",
    state: "arizona", city: "phoenix", sector: "healthcare", type: "new-construction", ownership: "private",
    value: 22700000, bidDate: "2026-11-02", stage: "bidding", status: "active",
    trades: ["hvac", "electrical", "plumbing", "drywall", "painting"],
    owner: "McCarthy Building Companies",
    scope: {
      en: "Two-story 60,000 sq ft pediatric clinic with imaging, lab and rooftop solar array.",
      ar: "عيادة أطفال من طابقين بمساحة 60,000 قدم مربع مع قسم تصوير ومختبر وألواح شمسية على السطح.",
    },
    lastUpdated: "2026-09-18",
  },
  {
    slug: "phoenix-data-center",
    name: "Phoenix Hyperscale Data Center",
    state: "arizona", city: "phoenix", sector: "industrial", type: "new-construction", ownership: "private",
    value: 185000000, bidDate: "2026-12-15", stage: "pre-bid", status: "bidding-soon",
    trades: ["electrical", "hvac", "concrete", "structural-steel"],
    owner: "",
    scope: {
      en: "Two-building 96 MW data center campus with redundant power, chilled-water plant and security.",
      ar: "حرم مراكز بيانات من مبنيين بقدرة 96 ميغاواط مع طاقة احتياطية ومحطة مياه مبردة وأنظمة أمنية.",
    },
    lastUpdated: "2026-09-16",
  },
  {
    slug: "columbus-state-university-science-hall",
    name: "Columbus University Science Hall",
    state: "ohio", city: "columbus", sector: "education", type: "renovation", ownership: "public",
    value: 33900000, bidDate: "2026-07-22", stage: "construction", status: "awarded",
    trades: ["hvac", "electrical", "plumbing", "drywall"],
    owner: "Ohio Facilities Construction Commission",
    scope: {
      en: "Gut renovation of a 110,000 sq ft science building with new teaching labs and fume hoods.",
      ar: "تجديد شامل لمبنى علوم بمساحة 110,000 قدم مربع مع مختبرات تعليمية جديدة وخزائن طرد الأبخرة.",
    },
    lastUpdated: "2026-08-30",
  },
  {
    slug: "columbus-downtown-hotel",
    name: "Columbus Downtown Select-Service Hotel",
    state: "ohio", city: "columbus", sector: "hospitality", type: "new-construction", ownership: "private",
    value: 28400000, bidDate: "2026-11-09", stage: "bidding", status: "active",
    trades: ["concrete", "plumbing", "hvac", "roofing", "painting"],
    owner: "",
    scope: {
      en: "Eight-story 176-key hotel with rooftop bar, fitness center and structured parking.",
      ar: "فندق من ثمانية طوابق يضم 176 غرفة مع مطعم على السطح ومركز لياقة وموقف سيارات متعدد الطوابق.",
    },
    lastUpdated: "2026-09-19",
  },
];
