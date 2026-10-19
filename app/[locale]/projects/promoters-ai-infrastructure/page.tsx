import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const content = {
 el: {
  back:"← Επιστροφή στο portfolio", kicker:"FEATURED CASE STUDY · 2026",
  title:"Promoters AI Creative Infrastructure",
  subtitle:"Δύο ανεξάρτητες αρχιτεκτονικές AI automation: ένα cloud creative workspace και ένα πραγματικό macOS workstation.",
  introTitle:"Η πρόκληση",intro:"Η δημιουργική παραγωγή συνδυάζει εφαρμογές, αρχεία, browsers και πολλαπλά βήματα. Ο στόχος ήταν να εξεταστούν δύο ασφαλείς τρόποι εκτέλεσης εργασιών με AI και ανθρώπινη επίβλεψη, χωρίς να συγχέονται τα περιβάλλοντα.",
  solutionTitle:"Οι δύο υλοποιήσεις",
  linux:"Linux · Cloud Creative Workspace",linuxText:"Ξεχωριστός worker και MCP gateway στο Vercel, persistent Linux VM, ιδιωτικό desktop, εργαλεία επεξεργασίας, Auth0 owner access και ελεγχόμενες εξαγωγές στο Google Drive.",
  mac:"Mac · Native Workstation Automation",macText:"Ανεξάρτητος macOS worker σε Mac mini με Eve, persistent PostgreSQL queue, checkpoints, native screen observation, εξουσιοδοτημένο input και δυνατότητα ανάληψης ελέγχου από τον owner.",
  roleTitle:"Ο ρόλος μου",role:"Ανάλυση απαιτήσεων, σχεδιασμός λύσης, συντονισμός AI-assisted development, ενσωμάτωση εργαλείων, troubleshooting, acceptance criteria, QA και τεκμηρίωση. Το project παρουσιάζεται ως τεχνική ηγεσία και orchestration, όχι ως ισχυρισμός προσωπικής συγγραφής κάθε γραμμής κώδικα.",
  proofTitle:"Τεκμηριωμένα αποτελέσματα",proof:["Δύο ανεξάρτητες υποδομές, με διαφορετικούς μηχανισμούς εκτέλεσης.","Cloud Linux desktop και λειτουργική πρόσβαση μέσω MCP.","Mac worker v0.3.0, διαχείριση ουράς και επιβεβαιωμένη εκκίνηση FilmCraft.","Δοκιμαστικό FilmCraft project με συνθετικό υλικό, sequence 1280×720/25 fps και επιτυχή render."],
  caution:"Οι εικόνες προέρχονται από δοκιμές σε πραγματικά περιβάλλοντα. Οι λειτουργίες που απαιτούν πρόσθετους end-to-end ελέγχους δεν παρουσιάζονται ως πλήρως πιστοποιημένες.",
  figureLinux:"Πραγματικό Linux workspace",figureMac:"FilmCraft σε macOS με αποκλειστικά συνθετικό περιεχόμενο",status:"Επιλεγμένη τεχνική παρουσίαση · οι επιπλέον αυτοματισμοί παραμένουν υπό εξέλιξη",
  footer:"Στρατηγική, δημιουργική παραγωγή και τεχνική υλοποίηση σε ένα ενιαίο workflow."},
 en:{
  back:"← Back to portfolio",kicker:"FEATURED CASE STUDY · 2026",
  title:"Promoters AI Creative Infrastructure",
  subtitle:"Two independent AI automation architectures: a cloud creative workspace and a physical macOS workstation.",
  introTitle:"The challenge",intro:"Creative production spans applications, assets, browsers and multi-step workflows. The goal was to explore two controlled approaches to AI-assisted execution with human oversight, without conflating their environments.",
  solutionTitle:"Two implementations",
  linux:"Linux · Cloud Creative Workspace",linuxText:"Separate Vercel worker and MCP gateway, persistent Linux VM, private desktop, creative applications, Auth0 owner access and controlled Google Drive exports.",
  mac:"Mac · Native Workstation Automation",macText:"Independent Mac mini worker with Eve, persistent PostgreSQL queue, checkpoints, native screen observation, authorized input and owner takeover.",
  roleTitle:"My role",role:"Requirements analysis, solution design, AI-assisted development coordination, integrations, troubleshooting, acceptance criteria, QA and documentation. This reflects technical leadership and orchestration, not a claim to having personally written every line of code.",
  proofTitle:"Verified milestones",proof:["Two independent architectures with distinct execution models.","Cloud Linux desktop and functional MCP connectivity.","Mac worker v0.3.0, task queue and verified FilmCraft launch.","Synthetic FilmCraft test project with a 1280×720/25 fps sequence and successful frame render."],
  caution:"Images reflect real environment tests. Capabilities awaiting additional end-to-end acceptance are not represented as fully verified.",
  figureLinux:"Real Linux workspace",figureMac:"FilmCraft on macOS with exclusively synthetic footage",status:"Technical showcase · additional automation workflows remain in progress",
  footer:"Strategy, creative production and technical execution in one connected workflow."}
} as const;
export function generateStaticParams(){return [{locale:"el"},{locale:"en"}]}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(locale!=="el"&&locale!=="en")notFound();const c=content[locale];return {title:c.title+" | Dionisios Iliopoulos",description:c.subtitle,robots:{index:false,follow:false}}}
export default async function CaseStudy({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(locale!=="el"&&locale!=="en")notFound();const c=content[locale];return <main className={styles.page}>
<nav className={styles.nav}><Link href={`/${locale}`}>{c.back}</Link><Link href={`/${locale==="el"?"en":"el"}/projects/promoters-ai-infrastructure`}>{locale==="el"?"EN":"EL"}</Link></nav>
<header className={styles.hero}><p className={styles.eyebrow}>{c.kicker}</p><h1>{c.title}</h1><p className={styles.subtitle}>{c.subtitle}</p><div className={styles.pills}><span>AI Agents</span><span>MCP</span><span>Cloud Infrastructure</span><span>macOS Automation</span><span>Creative Technology</span></div></header>
<section className={styles.section}><h2>{c.introTitle}</h2><p>{c.intro}</p></section>
<section className={styles.section}><h2>{c.solutionTitle}</h2><div className={styles.columns}><article className={styles.card}><div className={styles.mock} aria-label={c.figureLinux}>LINUX / CLOUD</div><h3>{c.linux}</h3><p>{c.linuxText}</p></article><article className={styles.card}><div className={styles.mock} aria-label={c.figureMac}>MAC / NATIVE</div><h3>{c.mac}</h3><p>{c.macText}</p></article></div></section>
<section className={styles.section}><h2>{c.roleTitle}</h2><p>{c.role}</p></section>
<section className={styles.section}><h2>{c.proofTitle}</h2><ul>{c.proof.map(p=><li key={p}>{p}</li>)}</ul><p className={styles.note}>{c.caution}</p></section>
<footer className={styles.footer}><strong>{c.footer}</strong><p>{c.status}</p><Link href={`/${locale}`}>{c.back}</Link></footer></main>}