import type { Locale } from "@/lib/content";

/**
 * Extra per-project data for the v3 redesign: the proof line shown on cards,
 * the headline metric shown first in the modal and on the case study page,
 * and the screenshot of the live site (where the site can be shown).
 */
export type ProjectExtra = {
  proof: string;
  metricValue: string;
  metricLabel: string;
  screenshot?: string;
  screenshotAlt?: string;
};

export const projectOrder = [
  "promoters",
  "tma",
  "dora-nikolaidou",
  "leclat-beaute",
  "pinkberry",
  "notias",
] as const;

export const projectExtras: Record<Locale, Record<string, ProjectExtra>> = {
  el: {
    promoters: {
      proof: "+40% leads",
      metricValue: "+40%",
      metricLabel: "αύξηση στα leads κατά την εξέλιξη του project",
      screenshot: "/projects/promoters/site.webp",
      screenshotAlt: "Η αρχική σελίδα του promoters.gr",
    },
    tma: {
      proof: "Funnel με trigger την ημερομηνία ταξιδιού",
      metricValue: "Funnel",
      metricLabel: "Lead generation με trigger την ημερομηνία ταξιδιού, αντί για άμεση πώληση",
      screenshot: "/projects/tma/site.webp",
      screenshotAlt: "Η αρχική σελίδα του travelmedicalassist.com",
    },
    "dora-nikolaidou": {
      proof: "+70% υποβολές ερωτηματολογίου",
      metricValue: "+70%",
      metricLabel: "περισσότερες υποβολές του ερωτηματολογίου, χωρίς αποθήκευση προσωπικών στοιχείων",
      screenshot: "/projects/dora-nikolaidou/site.webp",
      screenshotAlt: "Η σελίδα ανώνυμης αυτο-αξιολόγησης στο doranikolaidou.gr",
    },
    "leclat-beaute": {
      proof: "2.53% CTR · €0.06 ανά click",
      metricValue: "2.53%",
      metricLabel: "link CTR · €0.059 CPC · 106K reach σε Meta Ads (Μάιος–Ιούλιος 2026)",
    },
    pinkberry: {
      proof: "Brand πριν από το πρώτο ad",
      metricValue: "Brand first",
      metricLabel: "Κοινό, positioning, φωνή και e-shop πάνω στην ίδια στρατηγική βάση",
      screenshot: "/projects/pinkberry/site.webp",
      screenshotAlt: "Η αρχική σελίδα του pinkberry.gr",
    },
    notias: {
      proof: "6 χρόνια · από τα social σε custom εφαρμογή",
      metricValue: "6 χρόνια",
      metricLabel: "από μηδενική ψηφιακή βάση σε custom εφαρμογή διαχείρισης menu",
      screenshot: "/projects/notias/site.webp",
      screenshotAlt: "Η αρχική σελίδα του notiaskalamata.gr",
    },
  },
  en: {
    promoters: {
      proof: "+40% leads",
      metricValue: "+40%",
      metricLabel: "more leads over the course of the project",
      screenshot: "/projects/promoters/site.webp",
      screenshotAlt: "The promoters.gr homepage",
    },
    tma: {
      proof: "A funnel triggered by the travel date",
      metricValue: "Funnel",
      metricLabel: "Lead generation triggered by the travel date, instead of an immediate sale",
      screenshot: "/projects/tma/site.webp",
      screenshotAlt: "The travelmedicalassist.com homepage",
    },
    "dora-nikolaidou": {
      proof: "+70% questionnaire submissions",
      metricValue: "+70%",
      metricLabel: "more questionnaire submissions, with no personal data stored",
      screenshot: "/projects/dora-nikolaidou/site.webp",
      screenshotAlt: "The anonymous self-assessment page on doranikolaidou.gr",
    },
    "leclat-beaute": {
      proof: "2.53% CTR · €0.06 per click",
      metricValue: "2.53%",
      metricLabel: "link CTR · €0.059 CPC · 106K reach on Meta Ads (May–July 2026)",
    },
    pinkberry: {
      proof: "Brand before the first ad",
      metricValue: "Brand first",
      metricLabel: "Audience, positioning, voice and e-shop built on one strategy",
      screenshot: "/projects/pinkberry/site.webp",
      screenshotAlt: "The pinkberry.gr homepage",
    },
    notias: {
      proof: "6 years · from social media to a custom app",
      metricValue: "6 years",
      metricLabel: "from no digital presence to a custom menu management app",
      screenshot: "/projects/notias/site.webp",
      screenshotAlt: "The notiaskalamata.gr homepage",
    },
  },
};

export type Testimonial = { name: string; quote: string };

export const testimonialsCopy: Record<
  Locale,
  { eyebrow: string; title: string; items: Testimonial[] }
> = {
  el: {
    eyebrow: "WHAT CLIENTS SAY",
    title: "Τι λένε όσοι έχουν δουλέψει μαζί μας.",
    items: [
      {
        name: "Theodora Drakopoulou",
        quote:
          "Από τις καλύτερες επιλογές που μπορείς να κάνεις για digital marketing! Τα παιδιά έχουν απίστευτη συνέπεια, φρέσκιες ιδέες και σε αναλαμβάνουν ολοκληρωμένα, από το site μέχρι τα social και το branding. Είναι ακριβώς οι συνεργάτες που θέλεις να έχεις δίπλα σου. Τους συστήνω ανεπιφύλακτα!",
      },
      {
        name: "Panos",
        quote:
          "Εξαιρετική ομάδα, με πραγματική γνώση του digital marketing και την τεχνογνωσία να κάνει κάθε τοπική επιχείρηση να ξεχωρίσει.",
      },
      { name: "Eleni", quote: "Η ιδανική προβολή!" },
    ],
  },
  en: {
    eyebrow: "WHAT CLIENTS SAY",
    title: "What people who have worked with us say.",
    items: [
      {
        name: "Theodora Drakopoulou",
        quote:
          "One of the best choices you can make for digital marketing! The team is incredibly consistent, full of fresh ideas, and takes care of everything, from the website to social media and branding. Exactly the partners you want by your side. I recommend them without hesitation!",
      },
      {
        name: "Panos",
        quote:
          "An excellent team with real digital marketing knowledge and the know-how to make any local business stand out.",
      },
      { name: "Eleni", quote: "The perfect promotion!" },
    ],
  },
};

/** Copy for the single merged leadership section (replaces Leadership + Process + Operations). */
export const leadershipCopy: Record<
  Locale,
  {
    intro: string;
    responsibilitiesLabel: string;
    systemsLabel: string;
  }
> = {
  el: {
    intro:
      "Ένα σύνθετο digital project χρειάζεται σαφές scope, ξεκάθαρους owners, έγκαιρες αποφάσεις και συνεχή εικόνα του τι έχει γίνει και τι εκκρεμεί. Έτσι το οργανώνω.",
    responsibilitiesLabel: "ΤΙ ΑΝΑΛΑΜΒΑΝΩ",
    systemsLabel: "ΤΑ ΣΥΣΤΗΜΑΤΑ ΠΟΥ ΣΤΗΝΩ",
  },
  en: {
    intro:
      "A complex digital project needs a clear scope, clear owners, timely decisions and a constant view of what is done and what is pending. This is how I organise it.",
    responsibilitiesLabel: "WHAT I TAKE ON",
    systemsLabel: "THE SYSTEMS I SET UP",
  },
};

export const caseLabels: Record<
  Locale,
  {
    allWork: string;
    next: string;
    previous: string;
    viewCase: string;
    talkSimilar: string;
    similarTitle: string;
    openPage: string;
    more: (count: number) => string;
    readMore: string;
    swipe: string;
  }
> = {
  el: {
    allWork: "← Όλα τα έργα",
    next: "Επόμενο project",
    previous: "Προηγούμενο",
    viewCase: "Δείτε το case study →",
    talkSimilar: "Ας μιλήσουμε για κάτι παρόμοιο",
    similarTitle: "Έχετε κάτι παρόμοιο;",
    openPage: "Άνοιγμα ως σελίδα ↗",
    more: (count) => `+${count} ακόμα`,
    readMore: "Διαβάστε περισσότερα ↓",
    swipe: "σύρετε για τα υπόλοιπα",
  },
  en: {
    allWork: "← All work",
    next: "Next project",
    previous: "Previous",
    viewCase: "View the case study →",
    talkSimilar: "Let's talk about something similar",
    similarTitle: "Have something similar in mind?",
    openPage: "Open as a page ↗",
    more: (count) => `+${count} more`,
    readMore: "Read more ↓",
    swipe: "swipe for more",
  },
};
