export type Locale = "el" | "en";

export type ProjectAssetKind =
  | "website"
  | "mobile"
  | "dashboard"
  | "brand"
  | "social"
  | "photo"
  | "video"
  | "booking"
  | "app";

export type ProjectAsset = {
  src: string;
  alt: string;
  label?: string;
  kind: ProjectAssetKind;
};

export type CaseSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  flow?: string;
};

export type Collaborator = {
  role: string;
  description: string;
};

export type ProjectCase = {
  id: string;
  title: string;
  tagline: string;
  period: string;
  status: string;
  categories: string[];
  cardCategories: string;
  cardBackground: string;
  logo: string;
  role: string;
  intro: string[];
  sections: CaseSection[];
  personalWork: string[];
  collaborators: Collaborator[];
  tools: string[];
  result: string[];
  closing: string;
  liveUrl: string;
  assets: ProjectAsset[];
};

const driveImage = (id: string, width = 1800) =>
  "https://drive.google.com/thumbnail?id=" + id + "&sz=w" + width;

export const siteCopy = {
  el: {
    nav: {
      work: "Έργα",
      capabilities: "Δυνατότητες",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      talk: "Ας συζητήσουμε →",
    },
    hero: {
      eyebrow: "DIGITAL STRATEGY · CONTENT · WEB · AI",
      title: "Στρατηγική, περιεχόμενο και τεχνολογία.",
      accent: "Σε ένα ενιαίο digital project.",
      description:
        "Συνδέω στρατηγική, δημιουργικότητα, τεχνολογία και τους κατάλληλους ανθρώπους γύρω από κάθε project, για να δημιουργούμε ουσιαστικά αποτελέσματα.",
      primary: "Δείτε τα έργα μου →",
      secondary: "Ας συζητήσουμε",
      location: "⌖ Καλαμάτα, Ελλάδα · Συνεργασίες στην Ελλάδα & εξ αποστάσεως",
      noteA: "Better brands.",
      noteB: "Real results.",
      noteC: "Build What's Next.",
      noteD: "Digital product",
      metric: "+40%",
      metricLabel: "Leads growth",
      words: ["Ideas", "Strategy", "Content", "Technology", "People"],
      greekWords: ["Στρατηγική", "Συνεργασία.", "Αποτελέσματα."],
    },
    selected: {
      eyebrow: "SELECTED WORK",
      title: "Η δουλειά πριν από τις περιγραφές.",
      thinkingEyebrow: "HOW I THINK",
      thinkingTitle: "Δεν ξεκινώ από την υπηρεσία. Ξεκινώ από το πρόβλημα.",
      thinkingBody:
        "Δεν χρειάζεται κάθε project περισσότερες υπηρεσίες. Χρειάζεται τις σωστές.",
      thinkingClosing: "Better Problems. Better Solutions.",
      thinkingOpen: "Πώς δουλεύω →",
    },
    capabilities: {
      eyebrow: "CAPABILITIES",
      title: "Όσα χρειάζονται, όταν χρειάζονται.",
      link: "Δείτε αναλυτικά →",
      items: [
        ["Strategy & Project Leadership", "Από τη μεγάλη εικόνα έως την υλοποίηση."],
        ["Websites & Digital Products", "Ιστοσελίδες και ψηφιακά προϊόντα που δουλεύουν."],
        ["Content & Social", "Περιεχόμενο με σκοπό και συνέπεια."],
        ["AI & Automation", "Αυτοματοποίηση που εξοικονομεί χρόνο και δημιουργεί ευκαιρίες."],
        ["Brand & Creative Direction", "Ταυτότητα με νόημα και διάρκεια."],
        ["Advertising & Campaigns", "Στοχευμένες καμπάνιες με μετρήσιμα αποτελέσματα."],
      ],
    },
    process: {
      eyebrow: "PROCESS",
      title: "Ένας απλός, καθαρός τρόπος δουλειάς.",
      items: [
        ["01", "Κατανόηση", "Τι χρειάζεται πραγματικά;"],
        ["02", "Έρευνα", "Δεδομένα, ανταγωνισμός, ευκαιρίες."],
        ["03", "Στρατηγική", "Ξεκάθαρη κατεύθυνση και πλάνο."],
        ["04", "Σχεδιασμός", "Ιδέες που γίνονται πράξη."],
        ["05", "Υλοποίηση", "Με συνέπεια και ποιότητα."],
        ["06", "Βελτίωση", "Μετράμε, μαθαίνουμε, εξελίσσουμε."],
      ],
      statement:
        "Δεν ξεκινώ από το ποιο εργαλείο θα χρησιμοποιήσουμε, αλλά από το τι πρέπει να λειτουργήσει καλύτερα.",
    },
    ai: {
      eyebrow: "AI & AUTOMATION",
      title: "AI ως εργαλείο. Όχι ως μοναδική πηγή αλήθειας.",
      paragraphs: [
        "Χρησιμοποιώ την τεχνητή νοημοσύνη καθημερινά στην έρευνα, το content, το development και την αυτοματοποίηση διαδικασιών.",
        "Δεν αντιμετωπίζω όμως το AI output ως τελικό αποτέλεσμα ή ως δεδομένο που πρέπει να γίνει αποδεκτό χωρίς έλεγχο. Οι πληροφορίες διασταυρώνονται, τα outputs αξιολογούνται και η τελική απόφαση παραμένει ανθρώπινη.",
      ],
      items: [
        {
          title: "Advanced Prompting",
          body: "Σχεδιασμός prompts και πολυσταδιακών workflows για research, analysis, content, development και operations.",
        },
        {
          title: "Custom GPTs",
          body: "Δημιουργία custom GPTs για συγκεκριμένες επιχειρηματικές ανάγκες, με tailored instructions, knowledge bases και συγκεκριμένες διαδικασίες εργασίας.",
        },
        {
          title: "AI-Assisted Development",
          body: "Χρήση AI για τη δημιουργία websites, web applications, interfaces, backends και εσωτερικών εργαλείων.",
        },
        {
          title: "AI & Automation",
          body: "Σύνδεση AI με APIs, CMS, Google services και marketing platforms για πραγματικές επιχειρησιακές διαδικασίες.",
        },
      ],
      highlight: "Η αξία δεν βρίσκεται στο να «ρωτήσεις το AI». Βρίσκεται στο να ξέρεις τι να του ζητήσεις, τι να ελέγξεις και πώς να χρησιμοποιήσεις το αποτέλεσμα.",
    },
    production: {
      eyebrow: "CONTENT & PRODUCTION",
      title: "Από ένα κινητό μέχρι ολοκληρωμένη παραγωγή.",
      body: "Ιδέες που γίνονται περιεχόμενο, σε κάθε μορφή και κλίμακα.",
      flow: ["Concept", "Script", "Production", "Edit", "Distribution"],
    },
    collaboration: {
      eyebrow: "COLLABORATION",
      title: "Προσωπική ευθύνη, χωρίς να παριστάνω ολόκληρη ομάδα.",
      body: "Τι έκανα προσωπικά. Τι συντόνισα. Ποιοι άλλοι συμμετείχαν.",
      roles: ["Designer", "Translator", "Editor", "Photographer", "Videographer", "Creator", "Performance Specialist"],
      closing: "Good People. Better Projects.",
    },
    about: {
      eyebrow: "ABOUT",
      title: "Marketing ήταν η αρχή. Όχι το όριο.",
      body:
        "Ξεκίνησα από το marketing και το περιεχόμενο, και σταδιακά εξελίχθηκα μέσα από ιστοσελίδες, analytics, integrations, custom εφαρμογές, automation και project leadership.",
      cvPrompt: "Θέλετε μια πιο συνοπτική εικόνα της εμπειρίας και των δεξιοτήτων μου;",
      button: "Λήψη βιογραφικού ↓",
      storyButton: "Η διαδρομή μου →",
    },
    tools: {
      eyebrow: "TOOLS & TECHNOLOGY",
      title: "Τα εργαλεία αλλάζουν. Η λογική προηγείται.",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Elementor", "Vercel", "Figma", "Canva", "Final Cut Pro", "Meta Ads", "GA4", "GTM", "Search Console", "Google Workspace", "Asana", "Klaviyo", "APIs", "AI Tools"],
    },
    moreWork: {
      eyebrow: "MORE WORK",
      title: "Και μερικά ακόμη projects.",
      items: [
        ["Pralina Pastry", "Social & content"],
        ["CrazyBloom", "Seasonal Social & Website"],
        ["Ipsipetis Travel", "Travel strategy & consulting"],
        ["PHAOS", "Digital consulting & content"],
        ["ES Beauty Studio", "Web · UX/UI · SEO"],
        ["Eleni Stathopoulou", "Branding · Web · SEO"],
        ["Kiosque", "Web · Local SEO · Social"],
        ["Ketobox", "Marketing Strategy · Content · SEO"],
      ],
    },
    results: {
      eyebrow: "SELECTED RESULTS",
      title: "Μετρήσιμα αποτελέσματα από πραγματικά projects.",
      items: [
        ["+270%", "Instagram growth · Pralina"],
        ["1.5M+", "Short-form video views"],
        ["+75%", "Ticket sales · Local campaign"],
        ["+40%", "Leads · Promoters"],
      ],
    },
    cta: {
      eyebrow: "LET'S BUILD TOGETHER",
      title: "Έχετε ένα project που χρειάζεται να συνδεθούν περισσότερα από ένα κομμάτια;",
      body:
        "Ας μιλήσουμε για στρατηγική, ιστοσελίδα, περιεχόμενο και αυτοματοποίηση — και για το πώς όλα αυτά μπορούν να δουλεύουν μαζί.",
      button: "Ας συζητήσουμε →",
      closing: "Σωστές ιδέες. Πραγματικά αποτελέσματα.",
    },
    footer: {
      name: "Διονύσης Ηλιόπουλος",
      descriptor: "Digital Strategy · Content · Web · AI",
      location: "Καλαμάτα, Ελλάδα",
      links: "LinkedIn · Upwork",
    },
    modal: {
      close: "Κλείσιμο",
      role: "Ο ρόλος μου",
      personally: "Υλοποίησα προσωπικά",
      collaborators: "Συνεργάστηκα με",
      tools: "Technology & Tools",
      result: "Το αποτέλεσμα",
      gallery: "Visual evidence",
      visitWebsite: "Δείτε το live website ↗",
      visitProject: "Επισκεφθείτε το project ↗",
    },
  },
  en: {
    nav: {
      work: "Work",
      capabilities: "Capabilities",
      about: "About",
      contact: "Contact",
      talk: "Let's talk →",
    },
    hero: {
      eyebrow: "DIGITAL STRATEGY · CONTENT · WEB · AI",
      title: "Strategy, content and technology.",
      accent: "In one connected digital project.",
      description:
        "I connect strategy, creativity, technology and the right people around each project to create meaningful results.",
      primary: "View my work →",
      secondary: "Let's talk",
      location: "⌖ Kalamata, Greece · Collaborations across Greece & remotely",
      noteA: "Better brands.",
      noteB: "Real results.",
      noteC: "Build What's Next.",
      noteD: "Digital product",
      metric: "+40%",
      metricLabel: "Leads growth",
      words: ["Ideas", "Strategy", "Content", "Technology", "People"],
      greekWords: ["Strategy", "Collaboration.", "Results."],
    },
    selected: {
      eyebrow: "SELECTED WORK",
      title: "The work before the descriptions.",
      thinkingEyebrow: "HOW I THINK",
      thinkingTitle: "I do not start with the service. I start with the problem.",
      thinkingBody:
        "Not every project needs more services. It needs the right ones.",
      thinkingClosing: "Better Problems. Better Solutions.",
      thinkingOpen: "How I work →",
    },
    capabilities: {
      eyebrow: "CAPABILITIES",
      title: "What is needed, when it is needed.",
      link: "Explore capabilities →",
      items: [
        ["Strategy & Project Leadership", "From the big picture to delivery."],
        ["Websites & Digital Products", "Websites and digital products built to work."],
        ["Content & Social", "Content with purpose and consistency."],
        ["AI & Automation", "Automation that saves time and creates opportunities."],
        ["Brand & Creative Direction", "Identity with meaning and longevity."],
        ["Advertising & Campaigns", "Targeted campaigns with measurable outcomes."],
      ],
    },
    process: {
      eyebrow: "PROCESS",
      title: "A simple, clear way of working.",
      items: [
        ["01", "Understand", "What is actually needed?"],
        ["02", "Research", "Data, competition, opportunities."],
        ["03", "Strategy", "A clear direction and plan."],
        ["04", "Design", "Ideas turned into action."],
        ["05", "Deliver", "With consistency and quality."],
        ["06", "Improve", "Measure, learn, evolve."],
      ],
      statement:
        "I do not start with which tool we will use. I start with what needs to work better.",
    },
    ai: {
      eyebrow: "AI & AUTOMATION",
      title: "AI as a tool. Not as the single source of truth.",
      paragraphs: [
        "I use artificial intelligence every day across research, content, development and process automation.",
        "I do not treat AI output as a finished result or as information that should be accepted without review. Sources are cross-checked, outputs are evaluated and the final decision remains human.",
      ],
      items: [
        {
          title: "Advanced Prompting",
          body: "Prompt design and multi-step workflows for research, analysis, content, development and operations.",
        },
        {
          title: "Custom GPTs",
          body: "Custom GPTs for specific business needs, with tailored instructions, knowledge bases and defined working processes.",
        },
        {
          title: "AI-Assisted Development",
          body: "Using AI to build websites, web applications, interfaces, backends and internal tools.",
        },
        {
          title: "AI & Automation",
          body: "Connecting AI with APIs, CMS platforms, Google services and marketing platforms for real business workflows.",
        },
      ],
      highlight: "The value is not in simply asking AI. It is in knowing what to ask, what to verify and how to use the result.",
    },
    production: {
      eyebrow: "CONTENT & PRODUCTION",
      title: "From a phone to a full production.",
      body: "Ideas turned into content, in every format and at every scale.",
      flow: ["Concept", "Script", "Production", "Edit", "Distribution"],
    },
    collaboration: {
      eyebrow: "COLLABORATION",
      title: "Personal responsibility, without pretending to be an entire team.",
      body: "What I did personally. What I coordinated. Who else contributed.",
      roles: ["Designer", "Translator", "Editor", "Photographer", "Videographer", "Creator", "Performance Specialist"],
      closing: "Good People. Better Projects.",
    },
    about: {
      eyebrow: "ABOUT",
      title: "Marketing was the starting point. Not the limit.",
      body:
        "I started in marketing and content, then expanded through websites, analytics, integrations, custom applications, automation and project leadership.",
      cvPrompt: "Prefer a concise overview of my experience and skills?",
      button: "Download CV ↓",
      storyButton: "My journey →",
    },
    tools: {
      eyebrow: "TOOLS & TECHNOLOGY",
      title: "Tools change. The thinking comes first.",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Elementor", "Vercel", "Figma", "Canva", "Final Cut Pro", "Meta Ads", "GA4", "GTM", "Search Console", "Google Workspace", "Asana", "Klaviyo", "APIs", "AI Tools"],
    },
    moreWork: {
      eyebrow: "MORE WORK",
      title: "A few more projects.",
      items: [
        ["Pralina Pastry", "Social & content"],
        ["CrazyBloom", "Seasonal Social & Website"],
        ["Ipsipetis Travel", "Travel strategy & consulting"],
        ["PHAOS", "Digital consulting & content"],
        ["ES Beauty Studio", "Web · UX/UI · SEO"],
        ["Eleni Stathopoulou", "Branding · Web · SEO"],
        ["Kiosque", "Web · Local SEO · Social"],
        ["Ketobox", "Marketing Strategy · Content · SEO"],
      ],
    },
    results: {
      eyebrow: "SELECTED RESULTS",
      title: "Measurable outcomes from real projects.",
      items: [
        ["+270%", "Instagram growth · Pralina"],
        ["1.5M+", "Short-form video views"],
        ["+75%", "Ticket sales · Local campaign"],
        ["+40%", "Leads · Promoters"],
      ],
    },
    cta: {
      eyebrow: "LET'S BUILD TOGETHER",
      title: "Have a project that needs more than one piece to work together?",
      body:
        "Let's talk about strategy, websites, content and automation — and how they can work as one connected system.",
      button: "Let's talk →",
      closing: "Right ideas. Real results.",
    },
    footer: {
      name: "Dionisios Iliopoulos",
      descriptor: "Digital Strategy · Content · Web · AI",
      location: "Kalamata, Greece",
      links: "LinkedIn · Upwork",
    },
    modal: {
      close: "Close",
      role: "My role",
      personally: "Delivered personally",
      collaborators: "Collaborated with",
      tools: "Technology & Tools",
      result: "The outcome",
      gallery: "Visual evidence",
      visitWebsite: "Visit live website ↗",
      visitProject: "Visit project ↗",
    },
  },
} as const;

const greekProjects: ProjectCase[] = [
  {
    id: "promoters",
    title: "Promoters",
    tagline: "Μια ιστοσελίδα που εξελίχθηκε σε digital platform.",
    period: "2025–2026",
    status: "Ongoing",
    categories: ["Strategy", "Website", "Web Application", "AI", "Automation", "Analytics", "Integrations", "Content"],
    cardCategories: "Strategy · Web · Digital Systems",
    cardBackground: "#ffffff",
    logo: "/assets/logos/promoters.svg",
    role: "Strategy · UX & Architecture · Copy & Content · Full-stack Development · AI & Automation · Analytics · Project Lead",
    liveUrl: "https://promoters.gr",
    intro: [
      "Η Promoters χρειαζόταν αρχικά μια νέα εταιρική παρουσία που να αποτυπώνει καλύτερα τον τρόπο με τον οποίο δουλεύουμε και τις υπηρεσίες που μπορούμε να προσφέρουμε.",
      "Το project ξεκίνησε το 2025 ως ένα σύγχρονο website σε Next.js. Στην πορεία, οι ανάγκες της επιχείρησης ξεπέρασαν τα όρια ενός απλού εταιρικού site και το website απέκτησε backend, εξελισσόμενο σε ενιαία πλατφόρμα για marketing, content, analytics και operations.",
    ],
    sections: [
      {
        title: "Η πρόκληση",
        paragraphs: [
          "Το αρχικό ζητούμενο ήταν μια καλύτερη ψηφιακή παρουσία. Σύντομα όμως η καθημερινή λειτουργία απαιτούσε συνεχή μετακίνηση ανάμεσα σε CRM, email marketing, Meta, Google Analytics, Search Console, Drive, Calendar, CMS και AI platforms.",
          "Το ερώτημα έγινε: πώς μπορούμε να συγκεντρώσουμε όσο το δυνατόν περισσότερες από αυτές τις διαδικασίες σε ένα ενιαίο περιβάλλον;",
        ],
      },
      {
        title: "Η προσέγγιση",
        paragraphs: [
          "Η πλατφόρμα εξελίχθηκε σταδιακά, με βάση πραγματικές ανάγκες. Κάθε νέα δυνατότητα προστέθηκε όταν υπήρχε συγκεκριμένο πρόβλημα που έπρεπε να λυθεί.",
          "Αν μια επαναλαμβανόμενη διαδικασία μπορούσε να γίνει μέσα από ένα κοινό interface, να αυτοματοποιηθεί ή να απαιτεί λιγότερη χειροκίνητη εργασία, τότε άξιζε να ενσωματωθεί.",
        ],
        flow: "Website → Backend → Integrations → CRM → Content System → AI → Automations",
      },
      {
        title: "Από website σε operational platform",
        paragraphs: [
          "Σήμερα η πλατφόρμα περιλαμβάνει CRM για πελάτες και leads, ενσωματωμένο email marketing, Google integrations για Drive, Calendar, Analytics και Search Console, Meta integration για Inbox, Insights και Ads, καθώς και Sanity CMS για blog και news.",
        ],
      },
      {
        title: "AI Content System",
        paragraphs: [
          "Gemini και OpenAI χρησιμοποιούνται για δημιουργία άρθρων, κειμένου και εικόνων, ενώ το HeyGen για video content. Το περιεχόμενο μπορεί να δημιουργηθεί μέσα στην πλατφόρμα, να περάσει από ανθρώπινο έλεγχο και στη συνέχεια να δημοσιευτεί.",
          "Υπάρχει επίσης workflow προτάσεων άρθρων με έγκριση μέσω magic link στο email και δυνατότητα δημοσίευσης στη Meta μετά την έγκριση.",
        ],
        flow: "AI για παραγωγή και επιτάχυνση → Άνθρωπος για έλεγχο και τελική απόφαση",
      },
    ],
    personalWork: [
      "Strategy & product direction",
      "Information architecture & UX",
      "Website design implementation",
      "Copywriting & content architecture",
      "Frontend & backend development",
      "CMS & CRM architecture",
      "Google & Meta integrations",
      "Analytics & tracking",
      "AI integrations & content workflows",
      "Automations & email approval flows",
      "Deployment και συνεχή εξέλιξη",
    ],
    collaborators: [
      {
        role: "Πάνος Μαραβάς — Graphic Designer",
        description: "Δημιούργησε την εταιρική ταυτότητα της Promoters, πάνω στην οποία βασίστηκε το visual direction του digital ecosystem.",
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Sanity", "GA4", "GTM", "Google APIs", "Meta APIs", "Gemini", "OpenAI", "HeyGen"],
    result: [
      "Ένα σημαντικό μέρος των leads, content, analytics, email, Meta και Google workflows συγκεντρώθηκε σε μία πλατφόρμα, μειώνοντας τη χειροκίνητη μεταφορά πληροφοριών και δημιουργώντας καθαρότερα workflows.",
      "Κατά την εξέλιξη του project καταγράφηκε +40% αύξηση στα leads. Η πλατφόρμα παραμένει ενεργό προϊόν και συνεχίζει να εξελίσσεται.",
    ],
    closing: "Ξεκίνησε ως website. Εξελίχθηκε μαζί με τις πραγματικές ανάγκες της επιχείρησης.",
    assets: [
      { src: driveImage("1sbEAsTMkRd0xLesFNRZRJSOXLB1b16Da"), alt: "Promoters website homepage", label: "Public website", kind: "website" },
      { src: driveImage("1t7TR_WssWX4rDcWYaY6vw6NQIy9u5Lfk"), alt: "Promoters admin dashboard", label: "Admin platform", kind: "dashboard" },
      { src: driveImage("1tL8n2TSlhPAZ_kWqRQFk4ETPPEJU9IaV"), alt: "Promoters AI content dashboard", label: "AI content system", kind: "dashboard" },
      { src: driveImage("1S7rtvMPVFXc-6yvqm31J2X3qXrHj9KFF"), alt: "Promoters Meta integration", label: "Meta integration", kind: "dashboard" },
    ],
  },
  {
    id: "tma",
    title: "T.M.A. — Travel Medical Assistance",
    tagline: "Από διάσπαρτες ιδέες σε ενιαίο customer journey.",
    period: "2025–2026",
    status: "Ongoing",
    categories: ["Strategy", "Content", "Social Media", "Website", "UI/UX", "Email Marketing", "Automation"],
    cardCategories: "Strategy · Web · Automation",
    cardBackground: "#ffffff",
    logo: "/assets/logos/tma.png",
    role: "Strategy · Content Strategy · Copywriting · UI/UX Consulting · Funnel Architecture · Klaviyo Setup & Automation · Project Coordination",
    liveUrl: "https://travelmedicalassist.com",
    intro: [
      "Η T.M.A. παρέχει σε ταξιδιώτες πρόσβαση σε πραγματικούς γιατρούς, τηλεϊατρική και ιατρική υποστήριξη στο εξωτερικό, λειτουργώντας συμπληρωματικά στην ταξιδιωτική ασφάλιση.",
      "Η συνεργασία ξεκίνησε με content για social media και ads. Γρήγορα έγινε σαφές ότι το content ήταν μόνο ένα μέρος του προβλήματος: το website, ιδιαίτερα στο mobile, δεν υποστήριζε αρκετά καθαρά τη διαδρομή από το πρώτο touchpoint μέχρι το επόμενο βήμα.",
    ],
    sections: [
      {
        title: "Η πρόκληση",
        paragraphs: [
          "Ο χρήστης έπρεπε να καταλάβει γρήγορα τι είναι η υπηρεσία, γιατί δεν αντικαθιστά την ταξιδιωτική ασφάλιση και τι πρέπει να κάνει πριν το ταξίδι.",
          "Παράλληλα, η άμεση πίεση για αγορά δημιουργούσε friction για έναν ταξιδιώτη που μπορεί να βρίσκεται μήνες μακριά από την αναχώρησή του.",
        ],
      },
      {
        title: "Website & Mobile UX",
        paragraphs: [
          "Έκανα UI/UX consulting και, σε συνεργασία με τον developer της T.M.A., προχωρήσαμε σε ουσιαστική ανακατασκευή του WordPress / Elementor / WooCommerce website με πιο καθαρή πληροφοριακή ιεραρχία και mobile εμπειρία.",
        ],
      },
      {
        title: "Travel Reminder Funnel",
        paragraphs: [
          "Δημιουργήθηκε το Free Travel Reminder με στόχο lead generation αντί για άμεση πώληση. Ο χρήστης δηλώνει την ημερομηνία ταξιδιού του χωρίς payment information και η επικοινωνία συνεχίζεται στην κατάλληλη χρονική στιγμή.",
          "Το messaging σχεδιάστηκε ειδικά για U.S. audience με μετάβαση από την ανησυχία προς την ανακούφιση και την εμπιστοσύνη.",
        ],
        flow: "Fear → Relief → Trust",
      },
      {
        title: "Klaviyo & Date-Based Automation",
        paragraphs: [
          "Έγινε Klaviyo setup και WooCommerce integration, onsite tracking, mapping του custom property travel_date, single opt-in και automated flows που ενεργοποιούνται σε σχέση με την ημερομηνία ταξιδιού.",
          "Το email marketing έγινε μέρος του πραγματικού customer journey και όχι μια σειρά γενικών newsletters.",
        ],
        flow: "Content → Website → Landing Page → Lead → Travel Date → Email Automation → Purchase Opportunity",
      },
      {
        title: "Content System",
        paragraphs: [
          "Παράλληλα οργανώθηκαν content calendar, static creatives, advertising content, VSL video και 15 FAQ videos ώστε το περιεχόμενο να υπηρετεί διαφορετικά στάδια του journey.",
        ],
      },
    ],
    personalWork: [
      "Strategy & content strategy",
      "Copywriting & social/ad concepts",
      "VSL concept και video scripts",
      "15 FAQ video scripts",
      "UI/UX consulting & website restructuring direction",
      "Travel Reminder funnel strategy",
      "Landing-page architecture & copy",
      "Klaviyo setup & WooCommerce integration",
      "Date-based email automation",
      "Project coordination & quality control",
    ],
    collaborators: [
      { role: "Πάνος Μαραβάς — Graphic Design", description: "Static visual content με βάση το content plan και τα briefs." },
      { role: "Άννα — Video Editing", description: "Editing του video content και των FAQ videos." },
      { role: "Client-side Developer", description: "Τεχνική υλοποίηση της ανακατασκευής του website σε συνεργασία με τη δική μου UI/UX και structural κατεύθυνση." },
    ],
    tools: ["WordPress", "Elementor", "WooCommerce", "Klaviyo", "Google Drive"],
    result: [
      "Η T.M.A. πέρασε από μεμονωμένες ενέργειες content και promotion σε ένα πιο συνεκτικό customer journey.",
      "Δημιουργήθηκε μηχανισμός lead generation και nurture που χρησιμοποιεί την ημερομηνία ταξιδιού ως βασικό trigger. Δεν δημοσιεύονται performance metrics που δεν μπορούν να τεκμηριωθούν.",
    ],
    closing: "Ξεκίνησε ως content project. Εξελίχθηκε σε redesign ολόκληρης της διαδρομής του ταξιδιώτη.",
    assets: [
      { src: driveImage("1ForPyl-ulu7fKgRP5nJGi_G2Br5k1HUV"), alt: "TMA static content", label: "Static content", kind: "social" },
      { src: driveImage("1C0fYDcRrOkdCAv34LadV4bV_h-r-uAer"), alt: "TMA social content", label: "Social content", kind: "social" },
      { src: driveImage("1U-ZkkTCCY55x0733pYQlBWg01NQA9rmt"), alt: "TMA video frame", label: "Video content", kind: "video" },
    ],
  },
  {
    id: "dora-nikolaidou",
    title: "Δώρα Νικολαΐδου",
    tagline: "Από 50 ερωτήσεις σε ένα ανώνυμο digital self-assessment.",
    period: "2026",
    status: "Live",
    categories: ["Strategy", "Website", "Custom Tool", "UX/UI", "Privacy", "Integrations", "Consulting"],
    cardCategories: "Web · Custom Tool · UX",
    cardBackground: "#f3f5f2",
    logo: "https://www.doranikolaidou.gr/logo-main.png",
    role: "Research · Strategy · Information Architecture · UX/UI · Next.js Development · Questionnaire Digitization · Scoring Logic · Privacy-by-design · instaDoctor Consulting · Social Setup",
    liveUrl: "https://www.doranikolaidou.gr",
    intro: [
      "Η νέα ψηφιακή παρουσία της Δώρας Νικολαΐδου δεν αντιμετωπίστηκε ως απλή αντικατάσταση ενός παλιού website. Το project έπρεπε να οργανώσει μεγάλο όγκο εξειδικευμένης πληροφορίας, να δημιουργήσει πιο ασφαλή εμπειρία για ένα ευαίσθητο κοινό και να μετατρέψει ένα επιστημονικό ερωτηματολόγιο σε πραγματικό digital asset.",
      "Το αποτέλεσμα ήταν multipage website σε Next.js / React, νέο visual identity και ένα ανώνυμο εργαλείο αυτοαξιολόγησης με scoring, χωρίς αποθήκευση προσωπικών στοιχείων.",
    ],
    sections: [
      {
        title: "Η πρόκληση",
        paragraphs: [
          "Το προηγούμενο site είχε μεγάλη ποσότητα κειμένου, δύσκολη πληροφοριακή ιεραρχία και ένα εκτενές ερωτηματολόγιο κακοποίησης που απαιτούσε σημαντική προσπάθεια από τον επισκέπτη.",
          "Σε ένα τόσο ευαίσθητο θέμα, το friction, η αίσθηση έκθεσης και η αβεβαιότητα γύρω από τα προσωπικά δεδομένα μπορούσαν να εμποδίσουν τον χρήστη να ολοκληρώσει τη διαδικασία.",
        ],
      },
      {
        title: "Website & Visual Identity",
        paragraphs: [
          "Σχεδιάστηκε νέα πληροφοριακή αρχιτεκτονική και υλοποιήθηκε multipage website σε Next.js / React, με σαφή διάκριση υπηρεσιών, θεραπευτικών προσεγγίσεων, περιεχομένου και ενεργειών επικοινωνίας.",
          "Ο Πάνος Μαραβάς δημιούργησε το logo, την παλέτα και τη βασική οπτική ταυτότητα. Ανέλαβα την έρευνα, το UX, το content architecture και την ψηφιακή υλοποίηση του συστήματος.",
        ],
        flow: "Research → Information Architecture → Visual Identity → Development",
      },
      {
        title: "50 ερωτήσεις → Digital Self-Assessment",
        paragraphs: [
          "Το επιστημονικό ερωτηματολόγιο μετατράπηκε σε διαδραστικό εργαλείο περίπου 50 ερωτήσεων με scoring. Ο χρήστης μπορεί να ολοκληρώσει τη διαδικασία ανώνυμα μέσα στο website και να λάβει αποτέλεσμα βάσει των απαντήσεών του.",
          "Δεν αποθηκεύονται προσωπικά στοιχεία. Το αποτέλεσμα λειτουργεί ως εργαλείο αυτοαξιολόγησης και όχι ως κλινική διάγνωση, μειώνοντας το friction χωρίς να αλλοιώνεται ο ευαίσθητος χαρακτήρας της διαδικασίας.",
        ],
        flow: "Anonymous answers → Scoring → Self-assessment result → Next-step guidance",
      },
      {
        title: "instaDoctor, Google & Social Infrastructure",
        paragraphs: [
          "Επιλέχθηκε το instaDoctor ως εξωτερικό εργαλείο για online booking και πρόσθετη προβολή στη Google. Δημιουργήθηκε η σχετική καταχώρηση και έγινε συμβουλευτική στην πελάτισσα για την πρακτική χρήση της πλατφόρμας και την ηλεκτρονική καταχώρηση πελατών.",
          "Παράλληλα δημιουργήθηκαν τα απαραίτητα social media accounts και η βασική υποδομή. Η παραγωγή και συστηματική λειτουργία social content δεν ενεργοποιήθηκε, καθώς μέχρι σήμερα η πελάτισσα δεν έχει επιλέξει να προχωρήσει σε αυτό το στάδιο.",
        ],
      },
    ],
    personalWork: [
      "Research & competitive review",
      "Digital strategy",
      "Information architecture",
      "UX/UI direction",
      "Content architecture",
      "Next.js / React development",
      "Responsive implementation",
      "Questionnaire digitization",
      "Scoring logic",
      "Privacy-by-design flow",
      "instaDoctor selection & consulting",
      "Google / booking integration direction",
      "Social account setup",
      "Testing & launch",
    ],
    collaborators: [
      {
        role: "Πάνος Μαραβάς — Brand & Graphic Design",
        description: "Logo, χρωματική παλέτα και βασικό visual identity για τη νέα ψηφιακή παρουσία.",
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Custom Scoring Logic", "instaDoctor", "Meta Business Suite"],
    result: [
      "Η ανώνυμη ψηφιακή διαδικασία οδήγησε σε περίπου +70% περισσότερες υποβολές του ερωτηματολογίου.",
      "Το project μετέτρεψε ένα στατικό website και ένα δύσχρηστο ερωτηματολόγιο σε ενιαία digital παρουσία με self-assessment, booking και σαφέστερα επόμενα βήματα.",
    ],
    closing: "Όταν το σωστό UX μειώνει την έκθεση και το friction, ένα επιστημονικό εργαλείο μπορεί να γίνει πραγματικά προσβάσιμο.",
    assets: [
      { src: "https://www.doranikolaidou.gr/logo-main.png", alt: "Ψυχής Διδασκαλείον visual identity", label: "Visual identity", kind: "brand" },
    ],
  },
  {
    id: "leclat-beaute",
    title: "L'Éclat Beauté",
    tagline: "Από νέα ταυτότητα σε ολοκληρωμένο digital acquisition ecosystem.",
    period: "2026",
    status: "Live",
    categories: ["Research", "Branding", "Website", "Fresha", "Meta Ads", "Analytics", "LLM Optimization"],
    cardCategories: "Branding · Web · Paid Media",
    cardBackground: "#246130",
    logo: "https://www.leclatbeaute.gr/images/logo-gold.png",
    role: "Research · Digital Strategy · Information Architecture · Website Design & Development · Fresha Integration · Meta Business Setup · Paid Media · LLM Optimization",
    liveUrl: "https://www.leclatbeaute.gr/",
    intro: [
      "Το L'Éclat Beauté χρειαζόταν από την αρχή μια συνεπή ψηφιακή παρουσία που να συνδέει brand identity, υπηρεσίες, online booking και paid media.",
      "Το project οργανώθηκε ως ενιαίο ecosystem: έρευνα και positioning, visual identity, multipage Next.js / React website, Fresha integration, Meta Business Portfolio, advertising και μεταγενέστερη βελτιστοποίηση του site για καλύτερη κατανόηση από LLMs και AI search systems.",
    ],
    sections: [
      {
        title: "Research → Identity → Digital Presence",
        paragraphs: [
          "Η δουλειά ξεκίνησε με έρευνα γύρω από το κοινό, το ανταγωνιστικό περιβάλλον και τον τρόπο με τον οποίο το studio έπρεπε να τοποθετηθεί ψηφιακά.",
          "Ο Πάνος Μαραβάς δημιούργησε το visual identity, logo και χρωματική παλέτα. Πάνω σε αυτή τη βάση ανέλαβα τη δομή, το digital strategy και την υλοποίηση της online εμπειρίας.",
        ],
        flow: "Research → Visual Identity → Website → Booking → Paid Media",
      },
      {
        title: "Multipage Website & Fresha",
        paragraphs: [
          "Κατασκευάστηκε multipage website σε Next.js / React με ξεχωριστές ενότητες υπηρεσιών, responsive UX και σαφή διαδρομή προς το booking.",
          "Το Fresha ενσωματώθηκε ως appointment layer, ώστε το website να λειτουργεί για discovery, positioning και consideration, ενώ η κράτηση ολοκληρώνεται μέσα από ένα εξειδικευμένο booking environment.",
        ],
      },
      {
        title: "Meta Business Portfolio & Paid Media",
        paragraphs: [
          "Στήθηκε Meta Business Portfolio και η απαραίτητη advertising infrastructure και οργανώθηκαν καμπάνιες για την προώθηση υπηρεσιών και περιεχομένου.",
          "Στο διάστημα 1 Μαΐου–31 Ιουλίου 2026 το export του Meta Ads κατέγραψε 106K reach, 297.8K impressions και €447.18 spend, με 2.53% link CTR, €0.059 CPC ανά link click και €1.50 CPM.",
        ],
      },
      {
        title: "LLM & AI Search Readiness",
        paragraphs: [
          "Το site ανανεώθηκε ώστε το περιεχόμενο, η δομή και τα βασικά entities να είναι πιο καθαρά και machine-readable για LLMs και AI search systems.",
          "Η προσέγγιση δεν αντιμετωπίζει το AI visibility ως υπόσχεση κατάταξης, αλλά ως μέρος της σύγχρονης τεχνικής και περιεχομενικής ετοιμότητας ενός brand.",
        ],
      },
    ],
    personalWork: [
      "Research & positioning input",
      "Digital strategy",
      "Information architecture",
      "UX/UI implementation",
      "Next.js / React development",
      "Responsive implementation",
      "Content architecture",
      "Fresha integration",
      "Meta Business Portfolio setup",
      "Advertising setup & management",
      "Campaign reporting",
      "LLM / AI search optimization",
      "Testing & deployment",
    ],
    collaborators: [
      {
        role: "Πάνος Μαραβάς — Brand & Graphic Design",
        description: "Δημιουργία logo, visual identity και χρωματικής παλέτας του L'Éclat Beauté.",
      },
    ],
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Fresha", "Meta Business Portfolio", "Meta Ads", "Analytics"],
    result: [
      "Το L'Éclat Beauté απέκτησε ενιαία διαδρομή από το brand και την ανακάλυψη υπηρεσιών μέχρι το online booking και την πληρωμένη προβολή.",
      "Meta Ads · 01/05–31/07/2026: 106K reach · 297.8K impressions · 2.53% link CTR · €0.059 CPC · €1.50 CPM · €447.18 spend.",
    ],
    closing: "Ένα beauty brand δεν χρειάζεται απλώς website. Χρειάζεται ένα συνεπές σύστημα από την πρώτη εντύπωση μέχρι το επόμενο βήμα.",
    assets: [
      { src: "https://www.leclatbeaute.gr/images/logo-gold.png", alt: "L'Éclat Beauté visual identity", label: "Brand identity", kind: "brand" },
    ],
  },
  {
    id: "pinkberry",
    title: "Pinkberry",
    tagline: "Πριν από τα ads, χρειαζόταν να υπάρχει brand.",
    period: "2024",
    status: "Live",
    categories: ["Brand Strategy", "Positioning", "E-commerce", "UX/UI", "Content Strategy", "Consulting"],
    cardCategories: "Strategy · Branding · E-commerce",
    cardBackground: "#fff4fb",
    logo: "/assets/logos/pinkberry.png",
    role: "Research · Positioning · Brand Strategy · Buyer Persona · Messaging · UX/UI Direction · E-commerce Design · Consulting",
    liveUrl: "https://pinkberry.gr",
    intro: [
      "Όταν ξεκίνησε η συνεργασία, υπήρχε ήδη ένα e-shop, αλλά χωρίς ξεκάθαρη εταιρική ταυτότητα, positioning ή σαφή στρατηγική για το ποιο κοινό προσπαθούσε να προσεγγίσει.",
      "Η συνεργασία ξεκίνησε μέσα από συμβουλευτικές συνεδρίες με στόχο να χτιστεί πρώτα η στρατηγική βάση του brand πριν επενδυθεί χρόνος και χρήμα στην προώθηση.",
    ],
    sections: [
      {
        title: "Research & Competitive Analysis",
        paragraphs: [
          "Αναλύθηκε η ελληνική αγορά καλλυντικών και προσωπικής φροντίδας σε επίπεδο positioning, website, social media, product experience και digital παρουσίας.",
          "Η ευκαιρία διαφοροποίησης ήταν ένα οικείο, value-for-money brand καθημερινής αυτοφροντίδας και όχι ακόμη ένα discount ή aspirational luxury brand.",
        ],
      },
      {
        title: "Buyer Persona & Positioning",
        paragraphs: [
          "Ορίστηκε κοινό κυρίως γυναίκες 30–45 ετών που αγοράζουν online, διαβάζουν reviews και θέλουν ποιότητα και φροντίδα χωρίς premium κόστος.",
          "Η στρατηγική κατεύθυνση συνοψίστηκε ως Value-for-Money + Self-Care + Everyday Beauty και πάνω σε αυτή χτίστηκαν brand statement, messaging και tone of voice.",
        ],
      },
      {
        title: "Brand Identity",
        paragraphs: [
          "Ο Πάνος Μαραβάς μετέφρασε τη στρατηγική κατεύθυνση σε visual identity, σχεδιάζοντας logo και χρωματικό σύστημα. Η σειρά ήταν συνειδητά Research → Positioning → Messaging → Visual Identity.",
        ],
        flow: "Research → Positioning → Messaging → Visual Identity",
      },
      {
        title: "E-commerce Experience",
        paragraphs: [
          "Μετά το brand framework, περιέγραψα τη δομή, τη λειτουργία και το visual direction του e-shop και το σχεδιάσαμε με v0 μέσα από AI-assisted workflow.",
          "Το τελικό design παραδόθηκε σε εξωτερικό agency, το οποίο ανέλαβε το development και το launch.",
        ],
        flow: "Strategy → Identity → Experience",
      },
      {
        title: "Marketing Consulting",
        paragraphs: [
          "Οι συμβουλευτικές συνεδρίες κάλυψαν social media ως εργαλείο brand building, content consistency, paid media audiences και τον ρόλο του email marketing στη δημιουργία πιστών πελατών. Δεν ανέλαβα τη μετέπειτα διαχείριση των καμπανιών.",
        ],
      },
    ],
    personalWork: ["Competitor research", "Buyer persona", "Brand positioning", "Brand statement", "Messaging strategy", "Tone of voice", "Campaign messaging direction", "Audience strategy", "Social media consulting", "Email marketing consulting", "E-commerce architecture", "UX/UI direction", "v0-assisted e-shop design", "Handoff προς development agency"],
    collaborators: [
      { role: "Πάνος Μαραβάς — Brand & Graphic Design", description: "Σχεδιασμός εταιρικής ταυτότητας, logo και visual system." },
      { role: "External Agency — Development", description: "Υλοποίηση του e-shop πάνω στο design που παραδόθηκε." },
    ],
    tools: ["v0", "E-commerce UX/UI", "Meta Ads Strategy", "Google Ads Strategy", "Email Marketing Strategy"],
    result: [
      "Το Pinkberry πέρασε από ένα e-shop χωρίς ξεκάθαρη ταυτότητα σε ένα brand με συγκεκριμένο κοινό, positioning, φωνή, visual identity και e-commerce experience σχεδιασμένο πάνω στη στρατηγική του.",
      "Το σημαντικότερο αποτέλεσμα ήταν ένα brand framework πάνω στο οποίο μπορούσαν να βασιστούν όλες οι επόμενες marketing ενέργειες.",
    ],
    closing: "Πριν ζητήσεις από ένα e-shop να πουλήσει, πρέπει πρώτα να ξέρει ποιο brand είναι.",
    assets: [
      { src: driveImage("1VTSFURQUIK1n02VL6Rx2KFgnT-PisAuv"), alt: "Pinkberry brand guide", label: "Brand identity", kind: "brand" },
      { src: driveImage("1JjWf8V2FZNL3QdnqQyrlF7JNfXsUX_6X"), alt: "Pinkberry mobile e-commerce design", label: "E-commerce design", kind: "mobile" },
      { src: driveImage("1CXBU6LZ8tbk4UqTgTIN2hQDdQ2e0e4o0"), alt: "Pinkberry live e-shop", label: "Live e-shop", kind: "website" },
    ],
  },
  {
    id: "notias",
    title: "Νοτιάς Restaurant",
    tagline: "Το κατάλληλο εργαλείο για κάθε φάση του ίδιου project.",
    period: "2019–2025",
    status: "Live",
    categories: ["Social Media", "Website", "Content", "Web Application", "Digital Systems"],
    cardCategories: "Web · Digital Systems · Content",
    cardBackground: "#10141a",
    logo: "/assets/logos/notias.png",
    role: "Strategy · Social Media Management · Content Planning · Website Design & Development · Photography Direction · Web App Development · Backend & Content Management",
    liveUrl: "https://notiaskalamata.gr",
    intro: [
      "Η συνεργασία με τον Νοτιά ξεκίνησε το 2019 από μηδενική ψηφιακή βάση. Η επιχείρηση είχε εταιρική ταυτότητα από εξωτερικό γραφίστα, αλλά δεν υπήρχε website ή οργανωμένη digital παρουσία.",
      "Μέσα σε έξι χρόνια οι ανάγκες εξελίχθηκαν από social media και website σε custom εφαρμογή για τη δυναμική διαχείριση του menu.",
    ],
    sections: [
      {
        title: "Social Media & Content Production",
        paragraphs: [
          "Ανέλαβα content planning, calendar, copywriting, δημοσιεύσεις, community management, video content και διαφημιστικές ενέργειες σε βάθος χρόνου.",
          "Οργανώθηκαν δύο επαγγελματικές φωτογραφήσεις υπό τη δική μου επίβλεψη ώστε το υλικό να μπορεί να αξιοποιηθεί σε website και social media.",
        ],
      },
      {
        title: "Website",
        paragraphs: [
          "Σχεδίασα και κατασκεύασα προσωπικά το website σε WordPress + Elementor, αναλαμβάνοντας δομή, content και τεχνική υλοποίηση πάνω στην ήδη υπάρχουσα εταιρική ταυτότητα.",
        ],
      },
      {
        title: "Όταν το website δεν ήταν πλέον αρκετό",
        paragraphs: [
          "Το εστιατόριο χρειαζόταν να αλλάζει συχνά τιμές, πιάτα, πιάτα ημέρας, περιγραφές, φωτογραφίες και διαθεσιμότητα. Η υπάρχουσα λογική του WordPress δεν έκανε αυτή τη διαδικασία αρκετά πρακτική.",
          "Αντί να αντικατασταθεί κάτι που λειτουργούσε, δημιουργήθηκε ξεχωριστή εφαρμογή ακριβώς για αυτή την operational ανάγκη.",
        ],
      },
      {
        title: "Menu Web Application",
        paragraphs: [
          "Αναπτύχθηκε custom εφαρμογή σε Next.js σε subdomain και ενσωματώθηκε στο βασικό website. Δεν είναι QR menu: ο επισκέπτης βλέπει το menu ως μέρος της κανονικής εμπειρίας του site.",
          "Το backend επιτρέπει στην επιχείρηση να διαχειρίζεται μόνη της πιάτα, κατηγορίες, τιμές, περιγραφές, φωτογραφίες, διαθεσιμότητα και πιάτα ημέρας.",
        ],
        flow: "Public Website → Menu App → Management Backend",
      },
    ],
    personalWork: ["Digital & social strategy", "Content planning & copywriting", "Social media management", "Community management", "Advertising activities", "Website architecture & design", "WordPress / Elementor development", "Photography planning & direction", "Menu application architecture", "Next.js development", "Backend & admin interface", "Menu/content management functionality", "Integration με το βασικό website", "Testing & deployment"],
    collaborators: [
      { role: "External Brand Designer", description: "Η εταιρική ταυτότητα είχε δημιουργηθεί πριν από τη δική μου συμμετοχή." },
      { role: "Professional Photographer", description: "Δύο οργανωμένες παραγωγές φωτογραφικού υλικού υπό τη δική μου επίβλεψη και κατεύθυνση." },
    ],
    tools: ["WordPress", "Elementor", "Next.js", "React", "Custom Backend"],
    result: [
      "Ο Νοτιάς απέκτησε συνεπή social παρουσία, οργανωμένο επαγγελματικό content, δικό του website και custom σύστημα διαχείρισης menu.",
      "Το website και το menu application παραμένουν live. Η ψηφιακή υποδομή εξελίχθηκε μαζί με την επιχείρηση, αντί να χτιστεί εξαρχής πάνω σε υποθετικές ανάγκες.",
    ],
    closing: "Έξι χρόνια συνεργασίας, με την ψηφιακή υποδομή να εξελίσσεται κάθε φορά που εμφανιζόταν μια πραγματική νέα ανάγκη.",
    assets: [
      { src: driveImage("1UIZpyCw-5p-sebGEV9SCzh7_7e-eqssZ"), alt: "Notias restaurant website", label: "Public website", kind: "website" },
      { src: driveImage("1UtBnMOLfxlWe95QcXwJZk4HNvUa5U2sw"), alt: "Notias menu application", label: "Menu experience", kind: "app" },
      { src: driveImage("1BO1hAX7mNYYz6YCVcvcN_6c0rxBa2wKB"), alt: "Notias menu administration", label: "Management backend", kind: "dashboard" },
      { src: driveImage("15jC51gG13Lz5g9qmBuwH7WIDLEB_rKR5"), alt: "Notias professional food photography", label: "Content production", kind: "photo" },
      { src: driveImage("1hh3dR_D1IdahUk-k3Zrl5ShA03LAwlpR"), alt: "Notias mobile website", label: "Mobile experience", kind: "mobile" },
    ],
  },
];

const englishProjects: ProjectCase[] = [
  {
    ...greekProjects[0],
    tagline: "A website that evolved into a digital platform.",
    cardCategories: "Strategy · Web · Digital Systems",
    role: "Strategy · UX & Architecture · Copy & Content · Full-stack Development · AI & Automation · Analytics · Project Lead",
    intro: [
      "Promoters initially needed a new company presence that could better express how we work and the services we can deliver.",
      "The project started in 2025 as a modern Next.js website. As the business evolved, its needs went beyond a corporate site, so a backend was added and the website gradually became a unified platform for marketing, content, analytics and operations.",
    ],
    sections: [
      { title: "The challenge", paragraphs: ["The original brief was a better digital presence. Soon, day-to-day work required constant switching between CRM, email marketing, Meta, Google Analytics, Search Console, Drive, Calendar, CMS and AI platforms.", "The question became: how can we bring as many of these processes as possible into one environment?"] },
      { title: "The approach", paragraphs: ["The platform evolved incrementally around real operational needs. Each new capability was added only when there was a specific problem to solve.", "If a repeated process could happen inside one interface, be automated or require less manual work, it was a candidate for integration."], flow: "Website → Backend → Integrations → CRM → Content System → AI → Automations" },
      { title: "From website to operational platform", paragraphs: ["Today the platform includes a CRM for clients and leads, integrated email marketing, Google integrations for Drive, Calendar, Analytics and Search Console, Meta integration for Inbox, Insights and Ads, and Sanity CMS for blog and news."] },
      { title: "AI Content System", paragraphs: ["Gemini and OpenAI support article, text and image creation, while HeyGen supports video generation. Content can be produced inside the platform, reviewed by a human and then published.", "Article suggestions can be approved through an email magic link, and approved content can also be published to Meta."], flow: "AI for speed and production → Human review and final decision" },
    ],
    personalWork: ["Strategy & product direction", "Information architecture & UX", "Website design implementation", "Copywriting & content architecture", "Frontend & backend development", "CMS & CRM architecture", "Google & Meta integrations", "Analytics & tracking", "AI integrations & content workflows", "Automations & email approval flows", "Deployment and continuous evolution"],
    collaborators: [{ role: "Panos Maravas — Graphic Designer", description: "Created the Promoters brand identity that became the visual foundation of the digital ecosystem." }],
    result: ["A significant part of lead management, content, analytics, email, Meta and Google workflows now lives in one platform, reducing manual information transfer and creating clearer processes.", "Lead volume increased by 40% during the evolution of the project. The platform remains an active product and continues to evolve."],
    closing: "It started as a website. It evolved with the real needs of the business.",
    assets: greekProjects[0].assets.map((a) => ({ ...a, label: a.label })),
  },
  {
    ...greekProjects[1],
    tagline: "From scattered ideas to one connected customer journey.",
    role: "Strategy · Content Strategy · Copywriting · UI/UX Consulting · Funnel Architecture · Klaviyo Setup & Automation · Project Coordination",
    intro: [
      "T.M.A. gives travellers access to real doctors, telemedicine and medical support abroad, complementing rather than replacing travel insurance.",
      "The collaboration started with content for social media and ads. It quickly became clear that content was only one part of the problem: the website, especially on mobile, was not supporting a clear journey from first touchpoint to next action.",
    ],
    sections: [
      { title: "The challenge", paragraphs: ["Users needed to understand quickly what the service is, why it complements travel insurance and what they should do before travelling.", "At the same time, asking for an immediate purchase created friction for travellers who might be months away from departure."] },
      { title: "Website & Mobile UX", paragraphs: ["I provided UI/UX consulting and worked with T.M.A.'s developer on a substantial rebuild of the WordPress / Elementor / WooCommerce website, with clearer information hierarchy and a stronger mobile experience."] },
      { title: "Travel Reminder Funnel", paragraphs: ["We created the Free Travel Reminder to generate leads instead of forcing an immediate sale. Users provide their travel date without payment information, allowing communication to continue at the right moment.", "Messaging for the U.S. audience was structured to move from concern to relief and trust."], flow: "Fear → Relief → Trust" },
      { title: "Klaviyo & Date-Based Automation", paragraphs: ["I set up Klaviyo and its WooCommerce integration, onsite tracking, the travel_date custom property, single opt-in and automated flows triggered relative to the travel date.", "Email marketing became part of the customer journey rather than a series of generic newsletters."], flow: "Content → Website → Landing Page → Lead → Travel Date → Email Automation → Purchase Opportunity" },
      { title: "Content System", paragraphs: ["Alongside the funnel, we organised a content calendar, static creatives, ad content, a VSL and 15 FAQ videos so content could serve different stages of the journey."] },
    ],
    personalWork: ["Strategy & content strategy", "Copywriting & social/ad concepts", "VSL concept and video scripts", "15 FAQ video scripts", "UI/UX consulting & website restructuring direction", "Travel Reminder funnel strategy", "Landing-page architecture & copy", "Klaviyo setup & WooCommerce integration", "Date-based email automation", "Project coordination & quality control"],
    collaborators: [
      { role: "Panos Maravas — Graphic Design", description: "Static visual content based on the content plan and briefs." },
      { role: "Anna — Video Editing", description: "Editing of the video content and FAQ videos." },
      { role: "Client-side Developer", description: "Technical implementation of the website rebuild following my UI/UX and structural direction." },
    ],
    result: ["T.M.A. moved from isolated content and promotion activities to a more coherent customer journey.", "A lead-generation and nurture mechanism was created around the most important variable for the product: the traveller's departure date. No unverified performance metrics are published."],
    closing: "It started as a content project. It evolved into a redesign of the traveller's entire digital journey.",
    assets: greekProjects[1].assets,
  },
  {
    ...greekProjects[2],
    title: "Dora Nikolaidou",
    tagline: "From 50 questions to an anonymous digital self-assessment.",
    cardCategories: "Web · Custom Tool · UX",
    role: "Research · Strategy · Information Architecture · UX/UI · Next.js Development · Questionnaire Digitization · Scoring Logic · Privacy-by-design · instaDoctor Consulting · Social Setup",
    intro: [
      "Dora Nikolaidou's new digital presence was not treated as a simple replacement for an older website. The project needed to organize a large amount of specialist information, create a safer experience for a sensitive audience and turn a scientific questionnaire into a real digital asset.",
      "The result was a multipage Next.js / React website, a new visual identity and an anonymous self-assessment tool with scoring, without storing personal data.",
    ],
    sections: [
      { title: "The challenge", paragraphs: ["The previous site contained dense information, difficult hierarchy and a long abuse questionnaire that required significant effort from visitors.", "For such a sensitive topic, friction, exposure and uncertainty around personal data could prevent users from completing the process."] },
      { title: "Website & Visual Identity", paragraphs: ["A new information architecture was designed and implemented as a multipage Next.js / React website, clearly separating services, therapeutic approaches, content and contact actions.", "Panos Maravas created the logo, palette and core visual identity. I handled the research, UX, content architecture and digital implementation."], flow: "Research → Information Architecture → Visual Identity → Development" },
      { title: "50 questions → Digital Self-Assessment", paragraphs: ["The scientific questionnaire was transformed into an interactive tool of roughly 50 questions with scoring. Visitors can complete it anonymously inside the website and receive a result based on their answers.", "No personal data is stored. The result functions as a self-assessment rather than a clinical diagnosis, reducing friction without compromising the sensitivity of the process."], flow: "Anonymous answers → Scoring → Self-assessment result → Next-step guidance" },
      { title: "instaDoctor, Google & Social Infrastructure", paragraphs: ["instaDoctor was selected as an external tool for online booking and additional Google visibility. The listing was created and the client received consulting on using the platform and recording clients digitally.", "The core social media accounts and infrastructure were also created. Ongoing social content was not activated because the client has not chosen to move into regular content production at this stage."] },
    ],
    personalWork: ["Research & competitive review", "Digital strategy", "Information architecture", "UX/UI direction", "Content architecture", "Next.js / React development", "Responsive implementation", "Questionnaire digitization", "Scoring logic", "Privacy-by-design flow", "instaDoctor selection & consulting", "Google / booking integration direction", "Social account setup", "Testing & launch"],
    collaborators: [{ role: "Panos Maravas — Brand & Graphic Design", description: "Logo, color palette and core visual identity for the new digital presence." }],
    result: ["The anonymous digital process led to roughly 70% more questionnaire submissions.", "The project turned a static website and difficult long-form questionnaire into a unified digital presence with self-assessment, booking and clearer next steps."],
    closing: "When the right UX reduces exposure and friction, a scientific tool can become genuinely accessible.",
    assets: greekProjects[2].assets,
  },
  {
    ...greekProjects[3],
    tagline: "From a new identity to a complete digital acquisition ecosystem.",
    cardCategories: "Branding · Web · Paid Media",
    role: "Research · Digital Strategy · Information Architecture · Website Design & Development · Fresha Integration · Meta Business Setup · Paid Media · LLM Optimization",
    intro: [
      "L'Éclat Beauté needed a consistent digital presence from day one, connecting brand identity, services, online booking and paid media.",
      "The project was built as one ecosystem: research and positioning, visual identity, a multipage Next.js / React website, Fresha integration, Meta Business Portfolio, advertising and later optimization for clearer interpretation by LLMs and AI search systems.",
    ],
    sections: [
      { title: "Research → Identity → Digital Presence", paragraphs: ["The work started with research into the audience, competitive landscape and how the studio should be positioned online.", "Panos Maravas created the visual identity, logo and color palette. On that foundation I handled the structure, digital strategy and implementation of the online experience."], flow: "Research → Visual Identity → Website → Booking → Paid Media" },
      { title: "Multipage Website & Fresha", paragraphs: ["A multipage Next.js / React website was built with dedicated service sections, responsive UX and a clear path toward booking.", "Fresha was integrated as the appointment layer, allowing the website to handle discovery, positioning and consideration while bookings are completed in a specialized environment."] },
      { title: "Meta Business Portfolio & Paid Media", paragraphs: ["Meta Business Portfolio and the required advertising infrastructure were set up, followed by campaigns promoting services and content.", "From May 1 to July 31, 2026, the Meta Ads export recorded 106K reach, 297.8K impressions and €447.18 spend, with 2.53% link CTR, €0.059 CPC per link click and €1.50 CPM."] },
      { title: "LLM & AI Search Readiness", paragraphs: ["The site was updated so its content, structure and key entities are clearer and more machine-readable for LLMs and AI search systems.", "The approach does not treat AI visibility as a ranking promise, but as part of the modern technical and content readiness of a brand."] },
    ],
    personalWork: ["Research & positioning input", "Digital strategy", "Information architecture", "UX/UI implementation", "Next.js / React development", "Responsive implementation", "Content architecture", "Fresha integration", "Meta Business Portfolio setup", "Advertising setup & management", "Campaign reporting", "LLM / AI search optimization", "Testing & deployment"],
    collaborators: [{ role: "Panos Maravas — Brand & Graphic Design", description: "Logo, visual identity and color palette for L'Éclat Beauté." }],
    result: ["L'Éclat Beauté gained a unified path from brand discovery and service exploration to online booking and paid visibility.", "Meta Ads · 01/05–31/07/2026: 106K reach · 297.8K impressions · 2.53% link CTR · €0.059 CPC · €1.50 CPM · €447.18 spend."],
    closing: "A beauty brand does not simply need a website. It needs a consistent system from first impression to the next action.",
    assets: greekProjects[3].assets,
  },
  {
    ...greekProjects[4],
    tagline: "Before the ads, there needed to be a brand.",
    role: "Research · Positioning · Brand Strategy · Buyer Persona · Messaging · UX/UI Direction · E-commerce Design · Consulting",
    intro: ["When the collaboration started, an e-shop already existed, but there was no clear brand identity, positioning or strategy for who the business was trying to reach.", "The engagement began as consulting, with the goal of building the strategic foundation of the brand before investing in promotion."],
    sections: [
      { title: "Research & Competitive Analysis", paragraphs: ["The Greek cosmetics and personal-care market was analysed across positioning, websites, social media, product experience and digital presence.", "The opportunity was to build a familiar, value-for-money everyday self-care brand rather than another discount or aspirational luxury brand."] },
      { title: "Buyer Persona & Positioning", paragraphs: ["The primary audience was defined as women around 30–45 who shop online, read reviews and want quality and self-care without premium pricing.", "The strategic direction became Value-for-Money + Self-Care + Everyday Beauty, informing the brand statement, messaging and tone of voice."] },
      { title: "Brand Identity", paragraphs: ["Panos Maravas translated the strategy into a visual identity, including the logo and colour system. The sequence was deliberately Research → Positioning → Messaging → Visual Identity."], flow: "Research → Positioning → Messaging → Visual Identity" },
      { title: "E-commerce Experience", paragraphs: ["After the brand framework was established, I described the structure, functionality and visual direction of the e-shop and designed it with v0 through an AI-assisted workflow.", "The final design was handed off to an external agency for development and launch."], flow: "Strategy → Identity → Experience" },
      { title: "Marketing Consulting", paragraphs: ["Consulting sessions covered social media as a brand-building tool, content consistency, paid-media audiences and the role of email marketing in building repeat customers. I did not manage the campaigns after the strategy and design phase."] },
    ],
    personalWork: ["Competitor research", "Buyer persona", "Brand positioning", "Brand statement", "Messaging strategy", "Tone of voice", "Campaign messaging direction", "Audience strategy", "Social media consulting", "Email marketing consulting", "E-commerce architecture", "UX/UI direction", "v0-assisted e-shop design", "Handoff to development agency"],
    collaborators: [
      { role: "Panos Maravas — Brand & Graphic Design", description: "Brand identity, logo and visual system." },
      { role: "External Agency — Development", description: "Implementation of the e-shop based on the delivered design." },
    ],
    result: ["Pinkberry moved from an e-shop without a clear identity to a brand with a defined audience, positioning, voice, visual identity and e-commerce experience.", "The most important outcome was a brand framework that could support every later marketing activity."],
    closing: "Before asking an e-shop to sell, it first needs to know what brand it is.",
    assets: greekProjects[4].assets,
  },
  {
    ...greekProjects[5],
    title: "Notias Restaurant",
    tagline: "The right tool for each phase of the same project.",
    role: "Strategy · Social Media Management · Content Planning · Website Design & Development · Photography Direction · Web App Development · Backend & Content Management",
    intro: ["The relationship with Notias started in 2019 from a zero digital baseline. The business already had a visual identity from an external designer, but no website or organised digital presence.", "Over six years, the needs evolved from social media and a website to a custom application for dynamic menu management."],
    sections: [
      { title: "Social Media & Content Production", paragraphs: ["I handled content planning, calendars, copywriting, publishing, community management, video content and advertising activities over the course of the collaboration.", "Two professional photography productions were organised under my direction so the material could serve both the website and social media."] },
      { title: "Website", paragraphs: ["I designed and built the website in WordPress + Elementor, handling structure, content and technical implementation on top of the existing brand identity."] },
      { title: "When the website was no longer enough", paragraphs: ["The restaurant needed to update prices, dishes, daily specials, descriptions, photography and availability frequently. The existing WordPress workflow was not practical enough for that operational need.", "Instead of replacing a website that was already doing its job, I created a separate tool specifically for dynamic menu management."] },
      { title: "Menu Web Application", paragraphs: ["A custom Next.js application was built on a subdomain and embedded into the main website. It is not a QR menu: visitors experience it as part of the normal website.", "A dedicated backend lets the business manage dishes, categories, prices, descriptions, photos, availability and daily specials without needing a developer."], flow: "Public Website → Menu App → Management Backend" },
    ],
    personalWork: ["Digital & social strategy", "Content planning & copywriting", "Social media management", "Community management", "Advertising activities", "Website architecture & design", "WordPress / Elementor development", "Photography planning & direction", "Menu application architecture", "Next.js development", "Backend & admin interface", "Menu/content management functionality", "Website integration", "Testing & deployment"],
    collaborators: [
      { role: "External Brand Designer", description: "The visual identity had been created before my involvement." },
      { role: "Professional Photographer", description: "Two professional shoots produced under my supervision and creative direction." },
    ],
    result: ["Notias gained a consistent social presence, organised professional content, its own website and a custom menu-management system.", "The website and menu application remain live. The digital infrastructure evolved with the business instead of being over-engineered around hypothetical future needs."],
    closing: "Six years of collaboration, with the digital infrastructure evolving whenever a real new need appeared.",
    assets: greekProjects[5].assets,
  },
];

export const projectsByLocale: Record<Locale, ProjectCase[]> = {
  el: greekProjects,
  en: englishProjects,
};


export type MoreWorkMetric = {
  value: string;
  label: string;
};

export type MoreWorkCase = {
  id: string;
  title: string;
  period?: string;
  tags: string[];
  logo: string;
  paragraphs: string[];
  role: string;
  metrics?: MoreWorkMetric[];
  closing: string;
  liveUrl?: string;
};

const greekMoreWorkCases: MoreWorkCase[] = [
  {
    id: "pralina-pastry",
    title: "Pralina Pastry",
    period: "01/2024–05/2024",
    tags: ["Social Media", "Content", "Community Management"],
    logo: "/assets/more-work/pralina.jpeg",
    paragraphs: [
      "Ανέλαβα εξ ολοκλήρου τη διαχείριση της ψηφιακής παρουσίας της Pralina Pastry σε Instagram, Facebook και Google, από τη στρατηγική και το content planning μέχρι τη δημιουργία περιεχομένου, τη δημοσίευση και τη διαχείριση της κοινότητας.",
      "Η έμφαση δόθηκε στη συστηματική παραγωγή περιεχομένου και ιδιαίτερα στο short-form video, με στόχο μεγαλύτερη οργανική απήχηση και ανάπτυξη των social accounts.",
    ],
    role: "Strategy · Content Creation · Social Media Management · Community Management",
    metrics: [
      { value: "+270%", label: "Instagram followers" },
      { value: "+37.5%", label: "Facebook followers" },
      { value: "+2000%", label: "Facebook reach" },
      { value: "350K", label: "Facebook video views" },
      { value: "250K", label: "TikTok video views" },
      { value: "130K", label: "Instagram video views" },
    ],
    closing: "Συνεπές περιεχόμενο, σωστό format και οργανική ανάπτυξη χωρίς να βασίζεται όλο το αποτέλεσμα σε paid media.",
  },
  {
    id: "crazybloom",
    title: "CrazyBloom",
    period: "Seasonal collaboration · Website 2024",
    tags: ["Seasonal Social", "Content", "Website"],
    logo: "/assets/more-work/crazybloom.jpeg",
    paragraphs: [
      "Η συνεργασία με το CrazyBloom είχε έντονα εποχικό χαρακτήρα. Κάθε καλοκαίρι η ψηφιακή παρουσία της επιχείρησης έπρεπε να ενεργοποιείται γρήγορα και να υποστηρίζει τη σύντομη αλλά σημαντική περίοδο λειτουργίας της.",
      "Ανέλαβα τη διαχείριση Facebook, Instagram και Google Business, τη δημιουργία και δημοσίευση περιεχομένου και την επικοινωνία με το κοινό. Το 2024 σχεδίασα και κατασκεύασα επίσης το μονοσέλιδο website της επιχείρησης σε React / Next.js, ώστε να υπάρχει ένα σταθερό digital σημείο αναφοράς πέρα από τα social media.",
    ],
    role: "Social Media Management · Content · Website Design & Development",
    closing: "Μια εποχική επιχείρηση χρειάζεται digital παρουσία που μπορεί να ενεργοποιείται γρήγορα κάθε φορά που ξεκινά η σεζόν.",
    liveUrl: "https://crazybloom.gr",
  },
  {
    id: "ipsipetis-travel",
    title: "Ipsipetis Travel",
    period: "July 2024",
    tags: ["Strategy", "Social Media", "Consulting"],
    logo: "/assets/more-work/ipsipetis.png",
    paragraphs: [
      "Η συνεργασία με το Ipsipetis Travel ήταν περισσότερο στρατηγικό και συμβουλευτικό project παρά απλή διαχείριση social media.",
      "Ξεκίνησε με ανάλυση ανταγωνισμού και κοινού και εξελίχθηκε σε social media strategy, content direction, προτάσεις για posts και reels, profile optimization και ιδέες για marketing campaigns. Παράλληλα αναλύθηκαν κοινά και δημογραφικά χαρακτηριστικά, δημιουργήθηκε κατεύθυνση για τη διατήρηση engagement εκτός σεζόν και έγιναν συγκεκριμένες προτάσεις για τη βελτίωση της εμπειρίας χρήστη στο υπάρχον website.",
    ],
    role: "Research · Strategy · Audience Analysis · Content Direction · UX Consulting",
    closing: "Όχι απλώς τι θα δημοσιεύσουμε, αλλά σε ποιον μιλάμε, γιατί και τι πρέπει να συμβαίνει όταν τελειώνει η σεζόν.",
  },
  {
    id: "phaos",
    title: "PHAOS",
    tags: ["Digital Consulting", "Information Architecture", "Email Marketing", "Content", "Advertising"],
    logo: "/assets/more-work/phaos.jpeg",
    paragraphs: [
      "Στο PHAOS ο ρόλος μου ήταν κυρίως στρατηγικός και συμβουλευτικός γύρω από τη νέα ψηφιακή παρουσία και την επικοινωνία του οργανισμού.",
      "Συμμετείχα στον σχεδιασμό του νέου sitemap και της πληροφοριακής αρχιτεκτονικής του website, ενώ η τεχνική κατασκευή του site πραγματοποιήθηκε από διαφορετικό συνεργάτη. Παράλληλα ανέλαβα email marketing μέσω Mailchimp, παραγωγή περιεχομένου κατά τη διάρκεια live events για Stories και Reels, καθώς και δημιουργία content και concepts για advertising campaigns.",
    ],
    role: "Digital Consulting · Information Architecture · Email Marketing · Live Content · Advertising Content",
    closing: "Στρατηγική συμμετοχή εκεί όπου διαφορετικά digital touchpoints έπρεπε να αποκτήσουν κοινή κατεύθυνση.",
  },
  {
    id: "es-beauty",
    title: "ES Beauty Studio",
    period: "2025",
    tags: ["Website", "UX/UI", "SEO", "Fresha"],
    logo: "/assets/logos/es-beauty.png",
    paragraphs: [
      "Σχεδίασα και υλοποίησα εξ ολοκλήρου ένα multipage website σε React / Next.js, με καθαρή αρχιτεκτονική υπηρεσιών, responsive UX και SEO σε επίπεδο επιμέρους landing pages.",
      "Το website συνδέθηκε με το Fresha για online booking, ενώ έγινε setup analytics και Google Search Console ώστε η νέα ψηφιακή παρουσία να μπορεί να μετριέται και να εξελίσσεται.",
    ],
    role: "Strategy · Information Architecture · UX/UI · Copywriting · SEO · Development · Fresha Integration · Analytics",
    closing: "Ένα website που οργανώνει τις υπηρεσίες, υποστηρίζει την αναζήτηση και οδηγεί φυσικά στην κράτηση.",
    liveUrl: "https://esbeautystudio.gr",
  },
  {
    id: "eleni-stathopoulou",
    title: "Eleni Stathopoulou",
    period: "2025",
    tags: ["Branding", "Website", "SEO", "CMS"],
    logo: "/assets/logos/eleni-stathopoulou.png",
    paragraphs: [
      "Το bridal makeup απέκτησε αυτόνομο personal brand μέσα από έρευνα ανταγωνισμού, positioning, website copy, SEO στρατηγική και React / Next.js development.",
      "Ο Πάνος Μαραβάς δημιούργησε logo, typography, palette και homepage design στο Figma. Ανέλαβα την υλοποίηση του website, τη responsive εμπειρία, το Sanity CMS, το technical SEO και το structured data.",
    ],
    role: "Research · Positioning · Copywriting · Development · Sanity CMS · Technical SEO",
    closing: "Ένα προσωπικό bridal brand χτισμένο από την έρευνα και το positioning μέχρι τον κώδικα.",
    liveUrl: "https://elenistathopoulou.com",
  },

  {
    id: "kiosque",
    title: "Kiosque",
    period: "07/2025–10/2025",
    tags: ["Digital Strategy", "Website", "Local SEO", "Social Media", "Geolocation"],
    logo: "/assets/more-work/kiosque.svg",
    paragraphs: [
      "Η συνεργασία με το Kiosque έτρεξε από τον Ιούλιο έως τον Οκτώβριο του 2025 και συνδύασε digital strategy, website και τρίμηνη διαχείριση social media για το brand και τα καταστήματα σε Καλαμάτα και Πετρούπολη.",
      "Η βασική εμπειρία σχεδιάστηκε ως one-page Next.js website με geolocation ώστε ο χρήστης να οδηγείται στο κοντινότερο κατάστημα, μαζί με στοιχεία καταστημάτων, χάρτες και σαφή local information. Παράλληλα οργανώθηκαν local SEO και search-intent research ανά περιοχή, structured data και υποστηρικτικές SEO διαδρομές, ενώ το social content προσαρμόστηκε στις διαφορετικές ανάγκες των δύο τοποθεσιών.",
    ],
    role: "Research · Digital Strategy · Content Strategy · Copywriting · Next.js Development · Geolocation UX · Local SEO · Social Media Management",
    closing: "Ένα local-retail project όπου website, αναζήτηση και social σχεδιάστηκαν γύρω από μια απλή ερώτηση: ποιο Kiosque είναι ανοιχτό και πιο κοντά μου;",
  },

  {
    id: "ketobox",
    title: "Ketobox",
    period: "2024",
    tags: ["Marketing Strategy", "Research", "Content Strategy", "SEO", "KPI Framework"],
    logo: "/assets/more-work/logo_ketobox.png",
    paragraphs: [
      "Το Ketobox ήταν ένα strategy-led project με στόχο να οργανωθεί ένα ολοκληρωμένο 12μηνο marketing plan γύρω από το προϊόν. Η δουλειά ξεκίνησε από ανάλυση υπάρχουσας κατάστασης, ανταγωνισμού και κοινού-στόχου και επεκτάθηκε σε branding direction, content marketing, paid promotion, SEO, χρονοδιάγραμμα ενεργειών και KPI framework.",
      "Παράλληλα οργανώθηκε ένα πρακτικό content system για blog, social media, newsletters και short-form video, με θεματολογία, συχνότητα, κανάλια και συγκεκριμένα CTAs. Η στρατηγική υποστηρίχθηκε από keyword research, audience / community insights και δομημένα spreadsheets για planning και παρακολούθηση.",
    ],
    role: "Market Research · Audience Analysis · Brand Strategy · 12-Month Marketing Plan · Content Strategy · SEO Strategy · KPI Framework · Content Planning",
    closing: "Ένα project όπου research, brand, content, SEO και measurement οργανώθηκαν σε ένα ενιαίο πλάνο δράσης.",
  },

];

const englishMoreWorkCases: MoreWorkCase[] = [
  {
    ...greekMoreWorkCases[0],
    tags: ["Social Media", "Content", "Community Management"],
    paragraphs: [
      "I managed Pralina Pastry’s digital presence across Instagram, Facebook and Google, handling strategy, content planning, content creation, publishing and community management.",
      "The focus was on consistent content production and short-form video to increase organic reach and grow the social channels.",
    ],
    role: "Strategy · Content Creation · Social Media Management · Community Management",
    closing: "Consistent content, the right format and organic growth without relying entirely on paid media.",
  },
  {
    ...greekMoreWorkCases[1],
    period: "Seasonal collaboration · Website 2024",
    tags: ["Seasonal Social", "Content", "Website"],
    paragraphs: [
      "CrazyBloom is a highly seasonal business, so its digital presence needed to become active quickly each summer and support a short but commercially important operating period.",
      "I managed Facebook, Instagram and Google Business, created and published content and handled audience engagement. In 2024, I also designed and developed the company’s single-page website in React / Next.js, giving the business a permanent digital destination beyond social media.",
    ],
    role: "Social Media Management · Content · Website Design & Development",
    closing: "A seasonal business needs a digital presence that can activate quickly whenever the season begins.",
  },
  {
    ...greekMoreWorkCases[2],
    tags: ["Strategy", "Social Media", "Consulting"],
    paragraphs: [
      "The Ipsipetis Travel collaboration was primarily a strategic and consulting engagement rather than a simple social media management project.",
      "It started with competitor and audience analysis and evolved into a tailored social media strategy, content direction, posts and reels, profile optimisation and campaign recommendations. The work also included audience targeting, demographic insights, an off-season engagement plan and practical UX recommendations for the existing website.",
    ],
    role: "Research · Strategy · Audience Analysis · Content Direction · UX Consulting",
    closing: "Not just what to publish, but who we are speaking to, why, and what should happen when the season ends.",
  },
  {
    ...greekMoreWorkCases[3],
    tags: ["Digital Consulting", "Information Architecture", "Email Marketing", "Content", "Advertising"],
    paragraphs: [
      "My role with PHAOS was primarily strategic and consultative, supporting the organisation’s new digital presence and communication.",
      "I contributed to the new website’s sitemap and information architecture, while the technical development itself was handled by another collaborator. I also worked on Mailchimp email marketing, live-event content production for Stories and Reels, and content and creative concepts for advertising campaigns.",
    ],
    role: "Digital Consulting · Information Architecture · Email Marketing · Live Content · Advertising Content",
    closing: "Strategic involvement where different digital touchpoints needed a shared direction.",
  },
  {
    id: "es-beauty",
    title: "ES Beauty Studio",
    period: "2025",
    tags: ["Website", "UX/UI", "SEO", "Fresha"],
    logo: "/assets/logos/es-beauty.png",
    paragraphs: [
      "I designed and built the complete multipage website in React / Next.js, focusing on clear service architecture, responsive UX and SEO at individual landing-page level.",
      "The website was connected to Fresha for online booking, with analytics and Google Search Console set up so the digital presence could be measured and improved over time.",
    ],
    role: "Strategy · Information Architecture · UX/UI · Copywriting · SEO · Development · Fresha Integration · Analytics",
    closing: "A website that organises services, supports search and naturally guides users toward booking.",
    liveUrl: "https://esbeautystudio.gr",
  },
  {
    id: "eleni-stathopoulou",
    title: "Eleni Stathopoulou",
    period: "2025",
    tags: ["Branding", "Website", "SEO", "CMS"],
    logo: "/assets/logos/eleni-stathopoulou.png",
    paragraphs: [
      "Bridal makeup gained a standalone personal brand through competitor research, positioning, website copy, SEO strategy and React / Next.js development.",
      "Panos Maravas created the logo, typography, palette and homepage design in Figma. I handled website implementation, responsive experience, Sanity CMS, technical SEO and structured data.",
    ],
    role: "Research · Positioning · Copywriting · Development · Sanity CMS · Technical SEO",
    closing: "A personal bridal brand built from research and positioning through to code.",
    liveUrl: "https://elenistathopoulou.com",
  },

  {
    id: "kiosque",
    title: "Kiosque",
    period: "07/2025–10/2025",
    tags: ["Digital Strategy", "Website", "Local SEO", "Social Media", "Geolocation"],
    logo: "/assets/more-work/kiosque.svg",
    paragraphs: [
      "The Kiosque project ran from July to October 2025 and combined digital strategy, website development and three months of social media management for the brand and its stores in Kalamata and Petroupoli.",
      "The core experience was designed as a one-page Next.js website with geolocation to guide users toward the nearest store, supported by store information, maps and clear local information. In parallel, I developed location-specific local SEO and search-intent research, structured data and supporting SEO routes, while social content was adapted to the different needs of each location.",
    ],
    role: "Research · Digital Strategy · Content Strategy · Copywriting · Next.js Development · Geolocation UX · Local SEO · Social Media Management",
    closing: "A local-retail project where the website, search and social were built around one simple question: which Kiosque is open and closest to me?",
  },

  {
    id: "ketobox",
    title: "Ketobox",
    period: "2024",
    tags: ["Marketing Strategy", "Research", "Content Strategy", "SEO", "KPI Framework"],
    logo: "/assets/more-work/logo_ketobox.png",
    paragraphs: [
      "Ketobox was a strategy-led project built around a complete 12-month marketing plan for the product. The work started with current-state, competitor and audience analysis and expanded into brand direction, content marketing, paid promotion, SEO, an action timeline and KPI framework.",
      "In parallel, I organized a practical content system across blog, social media, newsletters and short-form video, with themes, cadence, channels and specific CTAs. The strategy was supported by keyword research, audience / community insights and structured spreadsheets for planning and performance tracking.",
    ],
    role: "Market Research · Audience Analysis · Brand Strategy · 12-Month Marketing Plan · Content Strategy · SEO Strategy · KPI Framework · Content Planning",
    closing: "A project where research, brand, content, SEO and measurement were organized into one actionable operating plan.",
  },

];

export const moreWorkCasesByLocale: Record<Locale, MoreWorkCase[]> = {
  el: greekMoreWorkCases,
  en: englishMoreWorkCases,
};


export type ProfileModalMode = "about" | "thinking";

export type ProfileModalContent = {
  eyebrow: string;
  title: string;
  intro: string[];
  timeline?: { title: string; description: string }[];
  today?: { title: string; body: string };
  facts?: { label: string; value: string }[];
  principles?: { number: string; title: string; body: string }[];
  process?: string[];
  statement?: string;
  closing: string;
};

export const profileModalCopy: Record<Locale, Record<ProfileModalMode, ProfileModalContent>> = {
  el: {
    about: {
      eyebrow: "ABOUT ME",
      title: "Η διαδρομή πίσω από τα projects.",
      intro: [
        "Είμαι ο Διονύσης Ηλιόπουλος και ασχολούμαι με τη στρατηγική, την υλοποίηση και τη διαχείριση ψηφιακών projects. Ξεκίνησα από το marketing, αλλά στην πορεία η δουλειά μου επεκτάθηκε στο content, τα websites, την παραγωγή, το AI, τα integrations και την αυτοματοποίηση.",
        "Αυτό που με ενδιαφέρει περισσότερο είναι να μπορώ να βλέπω ένα project συνολικά: από την επιχειρηματική ανάγκη και την εμπειρία του πελάτη μέχρι το τελικό αποτέλεσμα.",
      ],
      timeline: [
        {
          title: "Geoinformatics & Customer Experience",
          description: "Σπουδές στη Γεωπληροφορική και πρώιμη επαγγελματική εμπειρία σε customer service, τεχνική υποστήριξη και διαχείριση ομάδων.",
        },
        {
          title: "Sales & Communication",
          description: "B2B και B2C πωλήσεις, διαπραγμάτευση, εξυπηρέτηση πελατών και καθημερινή επαφή με πραγματικές επιχειρηματικές ανάγκες.",
        },
        {
          title: "Marketing & Content",
          description: "Στρατηγική, social media, content, advertising, email marketing, branding και ανάπτυξη ψηφιακής παρουσίας.",
        },
        {
          title: "Digital Products, AI & Project Leadership",
          description: "Websites, custom εφαρμογές, integrations, analytics, AI workflows, automations και συντονισμός εξειδικευμένων συνεργατών.",
        },
      ],
      today: {
        title: "Σήμερα",
        body: "Σήμερα συνδέω digital strategy, content, websites, custom applications, AI και automations μέσα από τη δουλειά μου στην Promoters. Όταν ένα project απαιτεί εξειδικευμένο design, performance, translation, photography ή video production, συντονίζω τους κατάλληλους συνεργάτες με σαφείς ρόλους και ευθύνη.",
      },
      facts: [
        { label: "Education", value: "Geoinformatics & Surveying · University of Serres · 2001–2006" },
        { label: "Greek", value: "Native" },
        { label: "English", value: "Professional" },
        { label: "German", value: "Conversational" },
      ],
      closing: "Marketing ήταν η αρχή. Η λογική, η περιέργεια και η ανάγκη να λύνω προβλήματα είναι αυτά που καθόρισαν την εξέλιξη.",
    },
    thinking: {
      eyebrow: "HOW I THINK",
      title: "Δεν ξεκινώ από την υπηρεσία. Ξεκινώ από το πρόβλημα.",
      intro: [
        "Κάθε project έχει διαφορετικές ανάγκες. Σε κάποιες περιπτώσεις χρειάζεται ένα website. Σε άλλες content, advertising, video, automation ή ένας συνδυασμός όλων αυτών.",
        "Ο ρόλος μου είναι πρώτα να καταλάβω τι πρέπει να πετύχουμε και μετά να αποφασίσω τι πραγματικά χρειάζεται.",
      ],
      principles: [
        {
          number: "01",
          title: "Problem before service",
          body: "Δεν ξεκινάμε από το «να κάνουμε social media» ή «να φτιάξουμε website». Ξεκινάμε από το τι πρέπει να αλλάξει.",
        },
        {
          number: "02",
          title: "Strategy before tools",
          body: "Next.js, WordPress, Meta, AI, Klaviyo ή οποιοδήποτε άλλο εργαλείο είναι μέσο. Όχι στρατηγική.",
        },
        {
          number: "03",
          title: "The right people, not all the people",
          body: "Δεν χρειάζεται κάθε project μεγάλη ομάδα. Όταν χρειάζεται specialist, επιλέγεται ο κατάλληλος και ο ρόλος του είναι ξεκάθαρος.",
        },
        {
          number: "04",
          title: "AI assists. Humans decide.",
          body: "Χρησιμοποιώ AI καθημερινά ως εργαλείο για έρευνα, παραγωγή και ταχύτητα. Δεν το αντιμετωπίζω ως μοναδική πηγή αλήθειας και η τελική απόφαση παραμένει ανθρώπινη.",
        },
        {
          number: "05",
          title: "Build, measure, improve",
          body: "Ένα project δεν τελειώνει όταν δημοσιευτεί. Μετράμε, μαθαίνουμε και βελτιώνουμε.",
        },
      ],
      process: ["Understand", "Research", "Strategy", "Design", "Deliver", "Improve"],
      statement: "Δεν ξεκινώ από το ποιο εργαλείο θα χρησιμοποιήσουμε. Ξεκινώ από το τι πρέπει να λειτουργήσει καλύτερα.",
      closing: "Better Problems. Better Solutions.",
    },
  },
  en: {
    about: {
      eyebrow: "ABOUT ME",
      title: "The journey behind the projects.",
      intro: [
        "I am Dionisios Iliopoulos and I work across the strategy, delivery and management of digital projects. I started in marketing, but over time my work expanded into content, websites, production, AI, integrations and automation.",
        "What interests me most is seeing a project as a whole: from the business need and customer experience to the final outcome.",
      ],
      timeline: [
        {
          title: "Geoinformatics & Customer Experience",
          description: "Studies in Geoinformatics and early professional experience in customer service, technical support and team leadership.",
        },
        {
          title: "Sales & Communication",
          description: "B2B and B2C sales, negotiation, customer care and daily exposure to real business needs.",
        },
        {
          title: "Marketing & Content",
          description: "Strategy, social media, content, advertising, email marketing, branding and digital presence.",
        },
        {
          title: "Digital Products, AI & Project Leadership",
          description: "Websites, custom applications, integrations, analytics, AI workflows, automation and coordination of specialist collaborators.",
        },
      ],
      today: {
        title: "Today",
        body: "Today I connect digital strategy, content, websites, custom applications, AI and automation through my work at Promoters. When a project needs specialist design, performance, translation, photography or video production, I coordinate the right collaborators with clear roles and responsibility.",
      },
      facts: [
        { label: "Education", value: "Geoinformatics & Surveying · University of Serres · 2001–2006" },
        { label: "Greek", value: "Native" },
        { label: "English", value: "Professional" },
        { label: "German", value: "Conversational" },
      ],
      closing: "Marketing was the starting point. Curiosity, logic and the need to solve problems shaped everything that followed.",
    },
    thinking: {
      eyebrow: "HOW I THINK",
      title: "I do not start with the service. I start with the problem.",
      intro: [
        "Every project has different needs. Sometimes the answer is a website. Sometimes it is content, advertising, video, automation, or a combination of them.",
        "My role is to understand what needs to be achieved first, and only then decide what the project actually needs.",
      ],
      principles: [
        {
          number: "01",
          title: "Problem before service",
          body: "We do not start with “let’s do social media” or “let’s build a website”. We start with what needs to change.",
        },
        {
          number: "02",
          title: "Strategy before tools",
          body: "Next.js, WordPress, Meta, AI, Klaviyo or any other tool is a means. It is not the strategy.",
        },
        {
          number: "03",
          title: "The right people, not all the people",
          body: "Not every project needs a large team. When a specialist is needed, the right person is selected and their role is clear.",
        },
        {
          number: "04",
          title: "AI assists. Humans decide.",
          body: "I use AI every day for research, production and speed. I do not treat it as the single source of truth, and the final decision remains human.",
        },
        {
          number: "05",
          title: "Build, measure, improve",
          body: "A project does not end when it goes live. We measure, learn and improve.",
        },
      ],
      process: ["Understand", "Research", "Strategy", "Design", "Deliver", "Improve"],
      statement: "I do not start with which tool we will use. I start with what needs to work better.",
      closing: "Better Problems. Better Solutions.",
    },
  },
};


export type ProductionModalContent = {
  eyebrow: string;
  title: string;
  intro: string;
  modes: {
    title: string;
    description: string;
    items: string[];
  }[];
  responsibilityTitle: string;
  responsibilityBody: string;
  responsibilityFlow: string[];
  collaborationTitle: string;
  collaborationBody: string;
  examplesTitle: string;
  examplesBody: string;
  exampleRole: string;
  workflow: string[];
  closing: string;
  watchLabel: string;
};

export const productionModalCopy: Record<Locale, ProductionModalContent> = {
  el: {
    eyebrow: "CONTENT & PRODUCTION",
    title: "Η παραγωγή προσαρμόζεται στην ιδέα. Όχι το αντίστροφο.",
    intro:
      "Δεν χρειάζεται κάθε video μεγάλη παραγωγή. Κάποιες φορές το σωστό format είναι ένα αυθεντικό UGC video γυρισμένο με mobile setup. Άλλες φορές το project απαιτεί επαγγελματική κάμερα, φωτισμό, drone, ηθοποιούς ή ακόμη και σκηνοθέτη. Το production setup επιλέγεται με βάση τον στόχο του περιεχομένου.",
    modes: [
      {
        title: "MOBILE / UGC PRODUCTION",
        description:
          "Γρήγορη, ευέλικτη παραγωγή για direct-to-camera, UGC και vertical short-form content.",
        items: [
          "Concept & hook",
          "Scriptwriting",
          "Teleprompter / direct-to-camera",
          "Mobile shooting setup",
          "Product demonstration",
          "UGC / presenter videos",
          "Short-form vertical content",
          "Direction & retakes",
        ],
      },
      {
        title: "FULL PRODUCTION",
        description:
          "Όταν η ιδέα χρειάζεται μεγαλύτερη παραγωγή, οργανώνεται η κατάλληλη ομάδα και ο εξοπλισμός.",
        items: [
          "Creative concept",
          "Scripts & shot lists",
          "Professional camera crew",
          "Photography",
          "Lighting & sound",
          "Drone",
          "Actors / creators",
          "Director όπου χρειάζεται",
          "Production coordination",
          "Post-production supervision",
        ],
      },
    ],
    responsibilityTitle: "Τι αναλαμβάνω προσωπικά",
    responsibilityBody:
      "Από τη στρατηγική και το concept μέχρι το script, το brief, τη σκηνοθετική κατεύθυνση, το mobile production όταν ταιριάζει στο format, τον ποιοτικό έλεγχο και τον σχεδιασμό της διανομής.",
    responsibilityFlow: [
      "Strategy",
      "Concept",
      "Research",
      "Hook",
      "Script",
      "Brief",
      "Direction",
      "Production",
      "Quality Control",
      "Distribution",
    ],
    collaborationTitle: "Όταν χρειάζεται μεγαλύτερη παραγωγή",
    collaborationBody:
      "Στήνω το brief και συντονίζω τους κατάλληλους συνεργάτες. Ανάλογα με το project μπορεί να συμμετέχουν videographer, photographer, drone operator, editor, creator, actor ή director. Ο στόχος είναι να χρησιμοποιούνται οι σωστοί άνθρωποι και ο σωστός εξοπλισμός για την ιδέα — όχι να μεγαλώνει η παραγωγή χωρίς λόγο.",
    examplesTitle: "Selected UGC Work",
    examplesBody:
      "Στα παρακάτω παραδείγματα ανέλαβα ολόκληρη τη διαδικασία μόνος μου, από το concept και το script μέχρι τη λήψη, την παρουσίαση στην κάμερα, τη σκηνοθετική κατεύθυνση και το τελικό edit.",
    exampleRole: "Concept · Script · Shooting · On-camera · Direction · Editing",
    workflow: ["Idea", "Hook", "Script", "Production", "Edit", "Distribution", "Learn"],
    closing:
      "Το σωστό video δεν ξεκινά από την κάμερα. Ξεκινά από το τι πρέπει να κάνει ο θεατής όταν τελειώσει.",
    watchLabel: "Watch on Instagram ↗",
  },
  en: {
    eyebrow: "CONTENT & PRODUCTION",
    title: "Production adapts to the idea. Not the other way around.",
    intro:
      "Not every video needs a large production. Sometimes the right format is authentic UGC shot with a mobile setup. Other projects need professional cameras, lighting, drone, actors or even a director. The production setup is chosen around the objective of the content.",
    modes: [
      {
        title: "MOBILE / UGC PRODUCTION",
        description:
          "Fast, flexible production for direct-to-camera, UGC and vertical short-form content.",
        items: [
          "Concept & hook",
          "Scriptwriting",
          "Teleprompter / direct-to-camera",
          "Mobile shooting setup",
          "Product demonstration",
          "UGC / presenter videos",
          "Short-form vertical content",
          "Direction & retakes",
        ],
      },
      {
        title: "FULL PRODUCTION",
        description:
          "When an idea needs a larger production, the right team and equipment are brought together.",
        items: [
          "Creative concept",
          "Scripts & shot lists",
          "Professional camera crew",
          "Photography",
          "Lighting & sound",
          "Drone",
          "Actors / creators",
          "Director when needed",
          "Production coordination",
          "Post-production supervision",
        ],
      },
    ],
    responsibilityTitle: "What I handle personally",
    responsibilityBody:
      "From strategy and concept to the script, brief, creative direction, mobile production when it fits the format, quality control and distribution planning.",
    responsibilityFlow: [
      "Strategy",
      "Concept",
      "Research",
      "Hook",
      "Script",
      "Brief",
      "Direction",
      "Production",
      "Quality Control",
      "Distribution",
    ],
    collaborationTitle: "When the production needs to scale",
    collaborationBody:
      "I build the brief and coordinate the right collaborators. Depending on the project, that can include a videographer, photographer, drone operator, editor, creator, actor or director. The goal is to use the right people and equipment for the idea — not to make production larger for its own sake.",
    examplesTitle: "Selected UGC Work",
    examplesBody:
      "For the examples below, I handled the entire process independently, from concept and script to shooting, on-camera performance, direction and final edit.",
    exampleRole: "Concept · Script · Shooting · On-camera · Direction · Editing",
    workflow: ["Idea", "Hook", "Script", "Production", "Edit", "Distribution", "Learn"],
    closing:
      "The right video does not start with the camera. It starts with what the viewer should do when it ends.",
    watchLabel: "Watch on Instagram ↗",
  },
};
