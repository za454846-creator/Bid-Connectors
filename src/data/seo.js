/**
 * Page SEO settings: meta title, meta description, social image and schema markup.
 *
 * How to use:
 * - Edit "title" and "description" per language. The title is used exactly as written.
 * - "image" is the social share (Open Graph) image. Leave "" to use none.
 * - "noindex: true" hides a page from Google.
 * - "schema" is extra JSON-LD for the page (both languages).
 *   Add language-only schema inside "en" or "ar" as "schema: [...]".
 * - To override a project, trade, sector or location page, add its path,
 *   e.g. "/construction-projects/austin-isd-elementary-school".
 *   Pages not listed here use the default text from Lang/en.json and ar.json.
 *
 * After editing, run "npm run build" and upload the new "out" folder.
 */

// Shared schema blocks (reused below)
const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bid Connectors",
  url: "https://bidconnectors.com",
  logo: "https://bidconnectors.com/images/brand/bidconnectors-logo.png",
  email: "info@bidconnectors.com",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+1-214-556-2605", contactType: "customer service", areaServed: "US", availableLanguage: ["English"] },
    { "@type": "ContactPoint", telephone: "+968-7900-5409", contactType: "customer service", areaServed: "OM", availableLanguage: ["Arabic"] },
  ],
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bid Connectors",
  url: "https://bidconnectors.com",
};

export const PAGE_SEO = {
  // Home
  "/": {
    image: "https://bidconnectors.com/og-image.jpg",
    schema: [ORGANIZATION, WEBSITE],
    en: {
      title: "Find Latest Construction Projects Faster And Win 95% Of Your Bids | Bid Connectors",
      description: "Explore one of the biggest repositories for construction projects in the US and start bidding before others. Get expert insights from Bid Connector experts now!",
    },
    ar: {
      title: "اعثر على أحدث مشاريع البناء بسرعة واربح 95% من عروضك | Bid Connectors",
      description: "استكشف واحدة من أكبر قواعد بيانات مشاريع البناء في الولايات المتحدة، وابدأ تقديم عروضك قبل الآخرين. احصل على رؤى خبراء Bid Connectors الآن!",
    },
  },

  // About
  "/about": {
    image: "https://bidconnectors.com/og/about.jpg",
    schema: [],
    en: {
      title: "About Us | Bid Connectors",
      description: "Bid Connectors is a leading platform to explore construction projects in the US and bid on them before your competitors. We help contractors find projects effortlessly.",
    },
    ar: {
      title: "من نحن | Bid Connectors",
      description: "Bid Connectors منصة رائدة لاستكشاف مشاريع البناء في الولايات المتحدة وتقديم العروض عليها قبل منافسيك. نساعد المقاولين على العثور على المشاريع بسهولة.",
    },
  },

  // Pricing
  "/pricing": {
    image: "https://bidconnectors.com/og/pricing.jpg",
    schema: [],
    en: {
      title: "Pricing Plans | Bid Connectors",
      description: "Simple, transparent pricing for Bid Connectors. Choose a flexible monthly or yearly plan for individuals, growing businesses, or enterprises.",
    },
    ar: {
      title: "باقات الأسعار | Bid Connectors",
      description: "أسعار بسيطة وشفافة لمنصة Bid Connectors. اختر باقة شهرية أو سنوية مرنة للأفراد أو الشركات النامية أو المؤسسات.",
    },
  },

  // Contact Us
  "/contact-us": {
    image: "https://bidconnectors.com/og/contact.jpg",
    schema: [],
    en: {
      title: "Contact Us | Bid Connectors",
      description: "Bid Connectors team is available 24/7 to support customers, answer their questions, and help them find the best trade-specific projects. Fill out the form and get insights from experts.",
    },
    ar: {
      title: "اتصل بنا | Bid Connectors",
      description: "فريق Bid Connectors متاح على مدار الساعة لدعم العملاء والإجابة عن أسئلتهم ومساعدتهم في العثور على أفضل المشاريع المناسبة لتخصصاتهم. املأ النموذج واحصل على رؤى الخبراء.",
    },
  },

  // FAQ
  "/faq": {
    image: "https://bidconnectors.com/og/faq.jpg",
    schema: [],
    en: {
      title: "Frequently Asked Questions | Bid Connectors",
      description: "Get answers to the most commonly asked questions in the construction estimating and bidding industry without paying big bucks!",
    },
    ar: {
      title: "الأسئلة الشائعة | Bid Connectors",
      description: "احصل على إجابات لأكثر الأسئلة شيوعًا في مجال تسعير مشاريع البناء وتقديم العطاءات دون أن تدفع مبالغ كبيرة!",
    },
  },

  // Construction projects (hub)
  "/construction-projects": {
    image: "",
    schema: [],
    en: {
      title: "Construction Projects Open for Bidding | Bid Connectors",
      description: "Find commercial and public construction projects across all 50 U.S. states by trade, location and sector. See bid dates, estimated values and stages; members get plans, specs and contacts.",
    },
    ar: {
      title: "مشاريع البناء المفتوحة للمناقصة | Bid Connectors",
      description: "اعثر على مشاريع البناء التجارية والحكومية حسب التخصص والموقع والقطاع. اطّلع على مواعيد العطاءات والقيم التقديرية ومراحل المشاريع، ثم سجّل الدخول للحصول على المخططات والمواصفات.",
    },
  },

  // Solutions: Subcontractors
  "/solutions/subcontractors": {
    image: "https://bidconnectors.com/og/subcontractors.jpg",
    schema: [],
    en: {
      title: "Subcontractors | Find Every Open Bid in Your Trade | Bid Connectors",
      description: "Stop jumping between sites to find work. Bid Connectors puts every active construction project in your trade in front of you, so you spend less time searching and more time bidding.",
    },
    ar: {
      title: "المقاولون من الباطن | اعثر على كل عطاء مفتوح في تخصصك | Bid Connectors",
      description: "توقف عن التنقل بين المواقع بحثًا عن العمل. تضع Bid Connectors كل مشروع بناء نشط في تخصصك أمامك، لتقضي وقتًا أقل في البحث ووقتًا أكثر في تقديم العروض.",
    },
  },

  // Solutions: General Contractors
  "/solutions/general-contractors": {
    image: "https://bidconnectors.com/og/general-contractors.jpg",
    schema: [],
    en: {
      title: "General Contractors | Build Your Bidder List Faster | Bid Connectors",
      description: "Bid Connectors helps general contractors build bidder lists, send bulk invitations to bid, and track subcontractor responses in real time. No sales calls, free to start.",
    },
    ar: {
      title: "المقاولون العامون | ابنِ قائمة مقدّمي العروض بشكل أسرع | Bid Connectors",
      description: "تساعد Bid Connectors المقاولين العامين على بناء قوائم مقدّمي العروض، وإرسال دعوات جماعية لتقديم العطاءات، ومتابعة ردود المقاولين من الباطن لحظة بلحظة. بدون مكالمات مبيعات، والبدء مجاني.",
    },
  },

  // Solutions: Building Product Manufacturers
  "/solutions/building-product-manufacturers": {
    image: "https://bidconnectors.com/og/building-product-manufacturers.jpg",
    schema: [],
    en: {
      title: "Building Product Manufacturers | Get Specified Before the Bid List Fills Up | Bid Connectors",
      description: "Bid Connectors surfaces commercial construction projects at the design and permitting stage, before a general contractor finalizes subcontractors or the specification is locked.",
    },
    ar: {
      title: "مصنّعو مواد البناء | احصل على اعتماد منتجك قبل امتلاء قائمة العطاءات | Bid Connectors",
      description: "تعرض Bid Connectors مشاريع البناء التجارية في مرحلة التصميم واستخراج التصاريح، قبل أن يحدد المقاول العام مقاوليه من الباطن أو تُعتمد المواصفات نهائيًا.",
    },
  },

  // Solutions: Suppliers & Distributors
  "/solutions/suppliers-and-distributors-solutions": {
    image: "https://bidconnectors.com/og/suppliers-distributors.jpg",
    schema: [],
    en: {
      title: "Suppliers & Distributors | Get Specified, Stay Specified | Bid Connectors",
      description: "Get specified, stay specified, and win more sales. Bid Connectors helps suppliers and distributors track projects and reach buyers early.",
    },
    ar: {
      title: "الموردون والموزعون | اعتمد منتجك في المواصفات وحافظ على مكانه | Bid Connectors",
      description: "اجعل منتجك معتمدًا في المواصفات، وحافظ على مكانه، واربح مبيعات أكثر. تساعد Bid Connectors الموردين والموزعين على متابعة المشاريع والوصول إلى المشترين مبكرًا.",
    },
  },

  // Solutions: Hospitality
  "/solutions/hospitality": {
    image: "https://bidconnectors.com/og/hospitality.jpg",
    schema: [],
    en: {
      title: "Hospitality | Fill Rooms With Nearby Construction Crews | Bid Connectors",
      description: "Construction crews need somewhere to stay for weeks, sometimes months. Bid Connectors shows you exactly what’s being built near your property, with contacts to reach out to first.",
    },
    ar: {
      title: "الضيافة | املأ غرفك بطواقم البناء القريبة | Bid Connectors",
      description: "تحتاج طواقم البناء إلى مكان للإقامة لأسابيع، وأحيانًا لأشهر. تُظهر لك Bid Connectors بالضبط ما يُبنى بالقرب من منشأتك، مع جهات الاتصال التي يمكنك التواصل معها أولًا.",
    },
  },

  // Solutions: Service Providers
  "/solutions/service-providers": {
    image: "https://bidconnectors.com/og/service-providers.jpg",
    schema: [],
    en: {
      title: "Service Providers | Find Profitable Construction Leads Early | Bid Connectors",
      description: "Stop chasing dead leads and secure profitable commercial contracts early. Automate takeoffs and win high-paying building projects before competitors know.",
    },
    ar: {
      title: "مزوّدو الخدمات | اعثر على فرص بناء مربحة مبكرًا | Bid Connectors",
      description: "توقف عن ملاحقة الفرص الميتة واحصل على عقود تجارية مربحة مبكرًا. أتمت حصر الكميات واربح مشاريع بناء عالية القيمة قبل أن يعلم بها منافسوك.",
    },
  },

  // Products: Project Intelligence
  "/products/project-intelligence": {
    image: "https://bidconnectors.com/og/project-intelligence.jpg",
    schema: [],
    en: {
      title: "Project Intelligence | Track Projects From Permit to Completion | Bid Connectors",
      description: "Bid Connectors turns scattered construction news, permits, and public records into one tracked pipeline, so you always know what’s being built, who’s building it, and when to reach out.",
    },
    ar: {
      title: "ذكاء المشاريع | تابع المشاريع من التصريح حتى الإنجاز | Bid Connectors",
      description: "تحوّل Bid Connectors أخبار البناء المتفرقة والتصاريح والسجلات العامة إلى قائمة مشاريع واحدة متابَعة، لتعرف دائمًا ما يُبنى، ومن يبنيه، ومتى تتواصل.",
    },
  },

  // Products: Intelligent Leads
  "/products/intelligent-leads": {
    image: "https://bidconnectors.com/og/intelligent-leads.jpg",
    schema: [],
    en: {
      title: "Intelligent Leads | Verified Leads Scored And Ranked For You | Bid Connectors",
      description: "Bid Connectors turns raw project data into scored, verified leads, so you always know which opportunities to chase first and who to call.",
    },
    ar: {
      title: "الفرص الذكية | فرص موثَّقة مُقيَّمة ومرتبة لك | Bid Connectors",
      description: "تحوّل Bid Connectors بيانات المشاريع الخام إلى فرص موثَّقة ومُقيَّمة، لتعرف دائمًا أي الفرص تستحق المتابعة أولًا وبمن تتصل.",
    },
  },

  // Example: override one project page (remove the // to use)
  // "/construction-projects/austin-isd-elementary-school": {
  //   en: { title: "Austin ISD Elementary School Bid | Bid Connectors", description: "..." },
  //   ar: { title: "...", description: "..." },
  // },
};
