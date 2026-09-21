export type Locale = "el" | "en";

export type ProjectAsset = {
  src: string;
  alt: string;
  label?: string;
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
      title: "AI ως εργαλείο. Όχι ως μοναδική πηγή αλήθειας.",
      items: ["Custom GPTs", "AI-assisted Development", "Workflow Automation", "Content Research", "Internal Tools"],
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
      button: "Περισσότερα για εμένα →",
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
        ["CrazyBloom", "Seasonal Social & Content"],
        ["Ipsipetis Travel", "Travel & consulting"],
        ["PHAOS", "Multilingual website"],
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
      title: "AI as a tool. Not as the single source of truth.",
      items: ["Custom GPTs", "AI-assisted Development", "Workflow Automation", "Content Research", "Internal Tools"],
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
      button: "More about me →",
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
        ["CrazyBloom", "Seasonal Social & Content"],
        ["Ipsipetis Travel", "Travel & consulting"],
        ["PHAOS", "Multilingual website"],
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
      { src: driveImage("1sbEAsTMkRd0xLesFNRZRJSOXLB1b16Da"), alt: "Promoters website homepage", label: "Public website" },
      { src: driveImage("1t7TR_WssWX4rDcWYaY6vw6NQIy9u5Lfk"), alt: "Promoters admin dashboard", label: "Admin platform" },
      { src: driveImage("1tL8n2TSlhPAZ_kWqRQFk4ETPPEJU9IaV"), alt: "Promoters AI content dashboard", label: "AI content system" },
      { src: driveImage("1S7rtvMPVFXc-6yvqm31J2X3qXrHj9KFF"), alt: "Promoters Meta integration", label: "Meta integration" },
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
      { src: driveImage("1ForPyl-ulu7fKgRP5nJGi_G2Br5k1HUV"), alt: "TMA static content", label: "Static content" },
      { src: driveImage("1C0fYDcRrOkdCAv34LadV4bV_h-r-uAer"), alt: "TMA social content", label: "Social content" },
      { src: driveImage("1U-ZkkTCCY55x0733pYQlBWg01NQA9rmt"), alt: "TMA video frame", label: "Video content" },
    ],
  },
  {
    id: "es-beauty",
    title: "ES Beauty Studio",
    tagline: "Η ψηφιακή παρουσία εξελίχθηκε μαζί με την επιχείρηση.",
    period: "2025",
    status: "Live",
    categories: ["Website", "UX/UI", "Content Architecture", "SEO", "Analytics"],
    cardCategories: "Web · UX/UI · SEO",
    cardBackground: "#fdecec",
    logo: "/assets/logos/es-beauty.png",
    role: "Strategy · Information Architecture · UX/UI · Copywriting · SEO Structure · Front-end Development · Integrations · Analytics",
    intro: [
      "Το ES Beauty Studio χρειαζόταν μια νέα ψηφιακή παρουσία που να παρουσιάζει με πιο ολοκληρωμένο και σύγχρονο τρόπο τις υπηρεσίες του studio.",
      "Το αποτέλεσμα ήταν ένα ολοκληρωμένο multipage website σε React / Next.js, σχεδιασμένο και υλοποιημένο εξ ολοκλήρου από εμένα.",
    ],
    sections: [
      {
        title: "Η πρόκληση",
        paragraphs: [
          "Το site δεν έπρεπε να λειτουργεί σαν ψηφιακό φυλλάδιο. Έπρεπε ο επισκέπτης να καταλαβαίνει το ύφος του studio, να βρίσκει γρήγορα τη συγκεκριμένη υπηρεσία, να αποκτά αρκετή πληροφορία και να οδηγείται φυσικά προς την κράτηση.",
          "Παράλληλα, η αρχιτεκτονική έπρεπε να υποστηρίζει SEO σε επίπεδο επιμέρους υπηρεσίας και όχι μόνο στην homepage.",
        ],
      },
      {
        title: "Content Architecture & SEO",
        paragraphs: [
          "Οι υπηρεσίες οργανώθηκαν σε ξεχωριστές landing pages με σαφή πληροφοριακή ιεραρχία. Η δομή, τα headings, τα URLs και το copy σχεδιάστηκαν ώστε κάθε βασική κατηγορία να μπορεί να στοχεύει διαφορετική πρόθεση αναζήτησης.",
          "Το SEO αντιμετωπίστηκε ως μέρος της αρχιτεκτονικής από την αρχή και έγινε setup Google Search Console για την παρακολούθηση της οργανικής παρουσίας.",
        ],
        flow: "Brand Experience → Service Architecture → Conversion",
      },
      {
        title: "Fresha Integration & Analytics",
        paragraphs: [
          "Το website συνδέθηκε με το Fresha, χρησιμοποιώντας το site ως discovery & consideration layer και το Fresha για booking και appointment management.",
          "Παράλληλα έγινε setup του analytics layer ώστε η συμπεριφορά των χρηστών και η εξέλιξη της ψηφιακής παρουσίας να μπορούν να παρακολουθούνται μετά το launch.",
        ],
      },
    ],
    personalWork: ["Strategy", "Information architecture", "UX/UI design", "Content architecture", "Copywriting", "SEO structure", "Front-end development", "Responsive implementation", "Fresha integration", "Analytics setup", "Google Search Console", "Testing & launch"],
    collaborators: [],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Fresha", "Google Analytics", "Google Search Console"],
    result: [
      "Το studio απέκτησε σύγχρονη responsive παρουσία, ξεκάθαρη αρχιτεκτονική υπηρεσιών, αυτόνομες SEO-friendly σελίδες και εύκολη μετάβαση από την αναζήτηση υπηρεσίας στην κράτηση.",
      "Το αποτέλεσμα αξιολογείται κυρίως σε επίπεδο δομής και λειτουργίας και όχι με δημόσια performance metrics.",
    ],
    closing: "Ένα website που οργανώνει τις υπηρεσίες, υποστηρίζει την αναζήτηση και οδηγεί φυσικά στην κράτηση.",
    assets: [
      { src: driveImage("117OYEBPnEYIZrfPFGu4SLckgXsJGFLVc"), alt: "ES Beauty Studio desktop homepage", label: "Homepage · Desktop" },
      { src: driveImage("176wRVcKCfEn8rcmNU8AJAj5C98CEIFQa"), alt: "ES Beauty Studio mobile homepage", label: "Homepage · Mobile" },
      { src: driveImage("1J7G9Jcs3rPMRkKb82Rkm-Jm3CMQqxNqd"), alt: "ES Beauty Studio service page", label: "Service architecture" },
      { src: driveImage("1rBi4jXlI29g49ziKItCamj8xGBbhJ2vk"), alt: "Fresha booking integration", label: "Fresha booking" },
    ],
  },
  {
    id: "eleni-stathopoulou",
    title: "Eleni Stathopoulou",
    tagline: "Ένα ξεχωριστό digital identity για το bridal makeup.",
    period: "2025",
    status: "Live",
    categories: ["Brand Strategy", "Website", "UX/UI", "Content", "SEO", "CMS"],
    cardCategories: "Branding · Web · SEO",
    cardBackground: "#111827",
    logo: "/assets/logos/eleni-stathopoulou.png",
    role: "Research · Positioning · Copywriting · Content Architecture · Development · SEO · CMS Integration",
    intro: [
      "Η Ελένη Σταθοπούλου χρειαζόταν ένα ξεχωριστό προσωπικό brand αποκλειστικά για το bridal makeup, ανεξάρτητο από το ES Beauty Studio.",
      "Το project ξεκίνησε από το μηδέν και συνέδεσε έρευνα αγοράς, positioning, visual identity, Figma design, React / Next.js development, SEO και content infrastructure.",
    ],
    sections: [
      {
        title: "Research & Positioning",
        paragraphs: [
          "Η δουλειά ξεκίνησε με έρευνα ανταγωνισμού γύρω από bridal makeup artists, messaging, υπηρεσίες και search intent. Από αυτή την έρευνα προέκυψαν η επικοινωνιακή κατεύθυνση, τα slogans και η SEO στρατηγική.",
          "Έγραψα το website copy πριν από το design, ώστε η οπτική κατεύθυνση να βασιστεί σε ήδη διαμορφωμένο positioning.",
        ],
      },
      {
        title: "Brand Identity → Figma → Website",
        paragraphs: [
          "Ο Πάνος Μαραβάς δημιούργησε logo, typography και color palette και σχεδίασε την homepage στο Figma. Ανέλαβα την πιστή μεταφορά του design σε React / Next.js και την responsive υλοποίηση του υπόλοιπου site.",
          "Η λογική ήταν να διατηρηθούν η τυπογραφία, το spacing, η ιεραρχία, ο ρυθμός του περιεχομένου και η συνολική αίσθηση του design.",
        ],
        flow: "Strategy & Content → Brand Identity → Figma → Development",
      },
      {
        title: "Content, Photography & CMS",
        paragraphs: [
          "Επέλεξα από το διαθέσιμο archive τις φωτογραφίες που εξυπηρετούσαν καλύτερα το premium bridal positioning και οργανώθηκαν για επεξεργασία πριν ενσωματωθούν στο website.",
          "Το blog υλοποιήθηκε με Sanity CMS ώστε το editorial content να μπορεί να εξελίσσεται ανεξάρτητα από το development.",
        ],
      },
      {
        title: "SEO Strategy",
        paragraphs: [
          "Η έρευνα ανταγωνισμού οδήγησε σε keyword research και technical SEO. Οργανώθηκαν information architecture, copy, headings, metadata και structured data / schema markup για React / Next.js.",
        ],
      },
    ],
    personalWork: ["Competitor research", "Keyword research", "Positioning", "Slogans", "Website copywriting", "Content architecture", "Photography selection & direction", "Front-end development", "Responsive implementation", "Sanity CMS integration", "Technical SEO", "Structured data / schema", "Testing & launch"],
    collaborators: [
      { role: "Πάνος Μαραβάς — Brand & Graphic Design", description: "Logo, typography, color palette και σχεδιασμός της homepage στο Figma." },
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "Vercel", "Structured Data"],
    result: [
      "Το bridal makeup απέκτησε αυτόνομο positioning, οπτική ταυτότητα, περιεχόμενο και SEO παρουσία αντί να παραμένει μία ακόμη υπηρεσία μέσα σε ένα γενικό beauty brand.",
      "Το website λειτουργεί ως brand experience, portfolio και οργανικό σημείο εισόδου για νέες bridal αναζητήσεις.",
    ],
    closing: "Από την έρευνα και το positioning μέχρι το design και τον κώδικα, ένα προσωπικό bridal brand χτίστηκε από το μηδέν.",
    assets: [
      { src: driveImage("1llnkEbkgbOUmYoShBwxB_lO7r6mU-D61"), alt: "Eleni Stathopoulou brand guide", label: "Brand identity" },
      { src: driveImage("13kMIwFEk2SWDeXSjah2KYrMN4bZyhbnS"), alt: "Eleni Stathopoulou website", label: "Final website" },
      { src: driveImage("1w5GcEJKcTPJPNaEuTcIIOT7FMdKzt06Y"), alt: "Eleni Stathopoulou mobile website", label: "Responsive implementation" },
      { src: driveImage("18_MVtcxC35zEHyBaOqlFawdZijVFeQFW"), alt: "Bridal makeup photography", label: "Photography direction" },
      { src: driveImage("1nUsrG_SDT_LwJnhxHinPMAXIt4IMEms0"), alt: "Bridal makeup photography", label: "Selected visual" },
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
      { src: driveImage("1VTSFURQUIK1n02VL6Rx2KFgnT-PisAuv"), alt: "Pinkberry brand guide", label: "Brand identity" },
      { src: driveImage("1JjWf8V2FZNL3QdnqQyrlF7JNfXsUX_6X"), alt: "Pinkberry mobile e-commerce design", label: "E-commerce design" },
      { src: driveImage("1CXBU6LZ8tbk4UqTgTIN2hQDdQ2e0e4o0"), alt: "Pinkberry live e-shop", label: "Live e-shop" },
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
      { src: driveImage("1UIZpyCw-5p-sebGEV9SCzh7_7e-eqssZ"), alt: "Notias restaurant website", label: "Public website" },
      { src: driveImage("1UtBnMOLfxlWe95QcXwJZk4HNvUa5U2sw"), alt: "Notias menu application", label: "Menu experience" },
      { src: driveImage("1BO1hAX7mNYYz6YCVcvcN_6c0rxBa2wKB"), alt: "Notias menu administration", label: "Management backend" },
      { src: driveImage("15jC51gG13Lz5g9qmBuwH7WIDLEB_rKR5"), alt: "Notias professional food photography", label: "Content production" },
      { src: driveImage("1hh3dR_D1IdahUk-k3Zrl5ShA03LAwlpR"), alt: "Notias mobile website", label: "Mobile experience" },
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
    tagline: "A digital presence built to grow with the business.",
    role: "Strategy · Information Architecture · UX/UI · Copywriting · SEO Structure · Front-end Development · Integrations · Analytics",
    intro: ["ES Beauty Studio needed a new digital presence that could present its services in a more complete and contemporary way.", "The result was a full multipage React / Next.js website, designed and developed entirely by me."],
    sections: [
      { title: "The challenge", paragraphs: ["The site could not be just a digital brochure. Visitors needed to understand the studio, find the service they wanted, get enough information to build trust and move naturally towards booking.", "The architecture also had to support SEO at individual service level, not only on the homepage."] },
      { title: "Content Architecture & SEO", paragraphs: ["Services were organised into dedicated landing pages with a clear information hierarchy. Structure, headings, URLs and copy were designed so each major category could target a different search intent.", "SEO was treated as part of the architecture from the beginning, with Google Search Console connected for ongoing organic visibility monitoring."], flow: "Brand Experience → Service Architecture → Conversion" },
      { title: "Fresha Integration & Analytics", paragraphs: ["The website was connected to Fresha: the site acts as the discovery and consideration layer, while Fresha handles booking and appointment management.", "An analytics layer was also set up so behaviour and digital performance could be monitored after launch."] },
    ],
    personalWork: ["Strategy", "Information architecture", "UX/UI design", "Content architecture", "Copywriting", "SEO structure", "Front-end development", "Responsive implementation", "Fresha integration", "Analytics setup", "Google Search Console", "Testing & launch"],
    collaborators: [],
    result: ["The studio gained a modern responsive presence, clear service architecture, dedicated SEO-friendly pages and a direct path from service discovery to booking.", "The case is presented primarily through structural and operational impact rather than public performance metrics."],
    closing: "A website that organises services, supports search and leads naturally to booking.",
    assets: greekProjects[2].assets,
  },
  {
    ...greekProjects[3],
    tagline: "A distinct digital identity for bridal makeup.",
    role: "Research · Positioning · Copywriting · Content Architecture · Development · SEO · CMS Integration",
    intro: ["Eleni Stathopoulou needed a separate personal brand focused exclusively on bridal makeup, independent from ES Beauty Studio.", "The project connected market research, positioning, visual identity, Figma design, React / Next.js development, SEO and content infrastructure."],
    sections: [
      { title: "Research & Positioning", paragraphs: ["The work started with competitor research around bridal makeup artists, messaging, service structure and search intent. This informed the communication direction, slogans and SEO strategy.", "I wrote the website copy before design so the visual direction could be built on an already-defined positioning."] },
      { title: "Brand Identity → Figma → Website", paragraphs: ["Panos Maravas created the logo, typography and colour palette and designed the homepage in Figma. I implemented the design faithfully in React / Next.js and extended it responsively across the site.", "The objective was to preserve typography, spacing, hierarchy, content rhythm and the overall design feeling."], flow: "Strategy & Content → Brand Identity → Figma → Development" },
      { title: "Content, Photography & CMS", paragraphs: ["I selected the strongest images from the available archive for the premium bridal positioning and coordinated their preparation before they were used on the website.", "The blog was built with Sanity CMS so editorial content can evolve independently from development."] },
      { title: "SEO Strategy", paragraphs: ["Competitor research led to keyword research and technical SEO. Information architecture, copy, headings, metadata and structured data / schema markup were designed specifically for a React / Next.js implementation."] },
    ],
    personalWork: ["Competitor research", "Keyword research", "Positioning", "Slogans", "Website copywriting", "Content architecture", "Photography selection & direction", "Front-end development", "Responsive implementation", "Sanity CMS integration", "Technical SEO", "Structured data / schema", "Testing & launch"],
    collaborators: [{ role: "Panos Maravas — Brand & Graphic Design", description: "Logo, typography, colour palette and homepage design in Figma." }],
    result: ["Bridal makeup gained its own positioning, visual identity, content and SEO presence instead of remaining one service inside a broader beauty brand.", "The website works simultaneously as a brand experience, portfolio and organic entry point for bridal searches."],
    closing: "From research and positioning to design and code, a personal bridal brand was built from the ground up.",
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
