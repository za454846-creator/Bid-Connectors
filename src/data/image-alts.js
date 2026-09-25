/**
 * Image alt text, per page and per language.
 *
 * How to use:
 * - Find the page path, then the image file, and edit "en" / "ar".
 * - Leave "" to use the default alt text from the page (Lang/en.json and ar.json).
 * - "*" applies to every page (header and footer logos).
 * - A note "used N times" means the same file appears more than once on that page;
 *   text set here is used for all of them.
 *
 * After editing, run "npm run build" and upload the new "out" folder.
 */

export const IMAGE_ALTS = {
  // Every page (header and footer)
  "*": {
    "/images/brand/bidconnectors-logo.png": { en: "Bid Connectors", ar: "Bid Connectors" },
    "/images/brand/bidconnectors-logo-light.png": { en: "Bid Connectors", ar: "Bid Connectors" },
  },

  "/": {
    "/images/workflow1.webp": { en: "BidConnectors construction professionals discussing project opportunities and bids", ar: "متخصصو البناء في BidConnectors يناقشون فرص المشاريع والعطاءات" },
    "/images/workflow2.webp": { en: "BidConnectors bid management system organizing construction documents and tracking deadlines", ar: "نظام إدارة العطاءات في BidConnectors ينظّم مستندات البناء ويتابع المواعيد النهائية" },
    "/images/workflow3.webp": { en: "BidConnectors construction estimator measuring digital plans and calculating material quantities and costs", ar: "مقدّر تكاليف في BidConnectors يقيس المخططات الرقمية ويحسب كميات المواد وتكاليفها" },
    "/images/workflow4.webp": { en: "BidConnectors pipeline analytics showing construction project opportunities, win rates, and bid performance", ar: "تحليلات الفرص في BidConnectors تعرض مشاريع البناء ونسب الفوز وأداء العطاءات" },
    "/images/avatar1.webp": { en: "Danielle Ruiz", ar: "دانييل رويز" },
    "/images/avatar2.webp": { en: "Tom Okafor", ar: "توم أوكافور" },
    "/images/44.jpg": { en: "Priya Nandan", ar: "بريا ناندان" },
  },

  "/about": {
    "/images/about_pageimage.webp": { en: "BidConnectors founder story showing a construction estimator researching multiple project opportunities", ar: "قصة تأسيس BidConnectors: مقدّر تكاليف في البناء يبحث عن فرص مشاريع متعددة" },
    "/images/marcus.webp": { en: "Marcus Webb", ar: "ماركوس ويب" },
    "/images/elena.webp": { en: "Elena Torres", ar: "إيلينا توريس" },
    "/images/jordan.webp": { en: "Jordan Pike", ar: "جوردان بايك" },
    "/images/nicholas.webp": { en: "Nicholas A. Davis", ar: "نيكولاس أ. ديفيس" },
    "/images/avatar1.webp": { en: "", ar: "" },  // used 3 times
  },

  "/construction-projects": {
    "/images/building2.webp": { en: "Steel frame of a building under construction", ar: "هيكل فولاذي لمبنى قيد الإنشاء" },
    "/images/brand/bidconnectors-mark.png": { en: "", ar: "" },
  },

  "/products/intelligent-leads": {
    "/images/bpm_banner.webp": { en: "Ranked feed of scored leads", ar: "موجز مرتب للفرص المُقيَّمة" },
    "/images/bpm1.webp": { en: "Verified decision-maker contact card", ar: "بطاقة بيانات صانع قرار موثَّقة" },
    "/images/bpm2.webp": { en: "Lead scoring dashboard", ar: "لوحة تقييم الفرص" },
    "/images/testimonial.webp": { en: "Customer Testimonial", ar: "رأي عميل" },
  },

  "/products/project-intelligence": {
    "/images/bpm_banner.webp": { en: "Live feed of newly detected construction projects", ar: "موجز مباشر لمشاريع البناء المكتشفة حديثًا" },
    "/images/bpm1.webp": { en: "Verified project and contact record", ar: "سجل مشروع وجهة اتصال موثَّق" },
    "/images/bpm2.webp": { en: "Project pipeline dashboard", ar: "لوحة قائمة المشاريع" },
    "/images/testimonial.webp": { en: "Customer Testimonial", ar: "رأي عميل" },
  },

  "/solutions/building-product-manufacturers": {
    "/images/bpm_banner.webp": { en: "BidConnectors building product manufacturers", ar: "BidConnectors لمصنّعي مواد البناء" },
    "/images/bpm1.webp": { en: "BidConnectors building product specification projects", ar: "مشاريع اعتماد منتجات البناء في المواصفات على BidConnectors" },
    "/images/bpm2.webp": { en: "BidConnectors competitor specification share analysis", ar: "تحليل حصة المنافسين في المواصفات على BidConnectors" },
    "/images/bpm3.webp": { en: "BidConnectors construction sector growth forecast", ar: "توقعات نمو قطاعات البناء على BidConnectors" },
    "/images/bpm4.webp": { en: "BidConnectors helping manufacturers discover construction projects before public bidding", ar: "BidConnectors تساعد المصنّعين على اكتشاف مشاريع البناء قبل طرحها في مناقصة عامة" },
    "/images/building5.webp": { en: "BidConnectors syncing construction project records into a CRM opportunity", ar: "BidConnectors تزامن سجلات مشاريع البناء مع فرصة في نظام CRM" },
    "/images/sub_testimonial.webp": { en: "BidConnectors customer testimonial featuring a building product manufacturer", ar: "رأي عميل BidConnectors من أحد مصنّعي مواد البناء" },
  },

  "/solutions/general-contractors": {
    "/images/Hero_gen-contractors.webp": { en: "", ar: "" },  // used 2 times
    "/images/General_Contractor_find.webp": { en: "Fast onboarding for general contractors", ar: "بدء سريع للمقاولين العامين" },
    "/images/buiding.webp": { en: "Growing network of verified subcontractors", ar: "شبكة متنامية من المقاولين من الباطن الموثَّقين" },
    "/images/building4.webp": { en: "Three-step process from posting a project to receiving bids", ar: "ثلاث خطوات من نشر المشروع إلى استلام العروض" },
    "/images/testimonial.webp": { en: "General Contractors Customer Testimonial", ar: "رأي عميل من المقاولين العامين" },
  },

  "/solutions/hospitality": {
    "/images/hospitality_banner.webp": { en: "Hotel property located near an active commercial construction site", ar: "فندق يقع بالقرب من موقع بناء تجاري نشط" },
    "/images/hospImage1.webp": { en: "Extended-stay reservation calendar showing weekday occupancy", ar: "تقويم حجوزات الإقامة الطويلة يُظهر الإشغال في أيام الأسبوع" },
    "/images/hospImage2.webp": { en: "Repeat general contractor activity tracked across multiple projects", ar: "نشاط مقاول عام متكرر عبر عدة مشاريع" },
    "/images/hospImage3.webp": { en: "Live feed of newly added construction projects near a hotel property", ar: "موجز مباشر لمشاريع البناء المضافة حديثًا بالقرب من فندق" },
    "/images/hospTest.webp": { en: "Maria Torres, General Manager at Riverside Inn and Suites", ar: "ماريا توريس، المديرة العامة في Riverside Inn and Suites" },
  },

  "/solutions/service-providers": {
    "/images/bpm_banner.webp": { en: "", ar: "" },  // used 2 times
    "/images/bpm1.webp": { en: "Service Providers share comparison", ar: "مقارنة الحصص لمزوّدي الخدمات" },
    "/images/bpm2.webp": { en: "Service Providers construction sector forecast", ar: "توقعات قطاعات البناء لمزوّدي الخدمات" },
    "/images/bpm3.webp": { en: "Service Providers project stage tracker", ar: "متتبع مراحل المشاريع لمزوّدي الخدمات" },
    "/images/bpm4.webp": { en: "Service Providers CRM integration", ar: "تكامل CRM لمزوّدي الخدمات" },
    "/images/testimonial.webp": { en: "Service Providers Customer Testimonial", ar: "رأي عميل من مزوّدي الخدمات" },
  },

  "/solutions/subcontractors": {
    "/images/subimg1.webp": { en: "BidConnectors helping subcontractors discover relevant construction job opportunities and bid faster", ar: "BidConnectors تساعد المقاولين من الباطن على اكتشاف فرص البناء المناسبة وتقديم العروض بشكل أسرع" },
    "/images/subimg2.webp": { en: "BidConnectors matching subcontractors with qualified construction projects and tracking bid opportunities", ar: "BidConnectors تطابق المقاولين من الباطن مع مشاريع بناء مؤهلة وتتابع فرص العطاءات" },
    "/images/subimg3.webp": { en: "BidConnectors smart filters helping subcontractors find relevant construction projects by trade, budget, location, and timeline", ar: "فلاتر BidConnectors الذكية تساعد المقاولين من الباطن على العثور على المشاريع حسب التخصص والميزانية والموقع والجدول الزمني" },
    "/images/subimg4.webp": { en: "BidConnectors helping contractors discover a steady stream of qualified construction project opportunities", ar: "BidConnectors تساعد المقاولين على اكتشاف تدفق مستمر من فرص مشاريع البناء المؤهلة" },
  },

  "/solutions/suppliers-and-distributors-solutions": {
    "/images/bpm_banner.webp": { en: "", ar: "" },  // used 2 times
    "/images/bpm1.webp": { en: "Suppliers and Distributors order share comparison", ar: "مقارنة حصة الطلبات للموردين والموزعين" },
    "/images/bpm2.webp": { en: "Suppliers and Distributors construction sector forecast", ar: "توقعات قطاعات البناء للموردين والموزعين" },
    "/images/bpm3.webp": { en: "Suppliers and Distributors project stage tracker", ar: "متتبع مراحل المشاريع للموردين والموزعين" },
    "/images/bpm4.webp": { en: "Suppliers and Distributors CRM integration", ar: "تكامل CRM للموردين والموزعين" },
    "/images/testimonial.webp": { en: "Suppliers and Distributors Customer Testimonial", ar: "رأي عميل من الموردين والموزعين" },
  },

};
