import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const content = {
 el: {
  back:"← Επιστροφή στο portfolio", kicker:"FEATURED CASE STUDY · 2026",
  title:"Promoters AI Creative Infrastructure",
  subtitle:"Δύο ανεξάρτητες αρχιτεκτονικές AI automation: ένα cloud creative workspace και ένα πραγματικό macOS workstation.",
  introTitle:"Τι πρόβλημα λύνει",intro:"Στο video editing και στο digital production, πολλές εργασίες απαιτούν να ανοίξει κάποιος εφαρμογές, να βρει αρχεία, να εισαγάγει υλικό, να εκτελέσει βήματα και να ελέγξει τα exports. Ένα chatbot μπορεί να περιγράψει τη διαδικασία, αλλά δεν την ολοκληρώνει μόνο του. Το σύστημα σχεδιάστηκε για να μετατρέπει μια εντολή σε ελεγχόμενες εργασίες σε πραγματικό υπολογιστικό περιβάλλον — με δυνατότητα παρέμβασης όταν χρειάζεται.",
  solutionTitle:"Πώς λειτουργεί σε κάθε περιβάλλον",
  linux:"Linux · Cloud Creative Workspace",linuxText:"Ο χρήστης δίνει μια εντολή από το ChatGPT ή το ιδιωτικό panel. Ο agent αξιοποιεί τα διαθέσιμα εργαλεία στο απομονωμένο Linux workspace: μπορεί να δουλέψει με αρχεία, browser και δημιουργικές εφαρμογές, να εκτελέσει υποστηριζόμενα jobs και να παράγει exports. Το περιβάλλον είναι ξεχωριστό από τον προσωπικό υπολογιστή και προστατεύεται με owner authentication.",
  mac:"Mac · Native Workstation Automation",macText:"Ο agent μπορεί να αναθέσει βήματα σε πραγματικό Mac mini, όπου υπάρχουν εγκατεστημένες δημιουργικές εφαρμογές και τοπικά αρχεία. Οι εργασίες μπαίνουν σε ουρά, παρακολουθούνται και συνεχίζονται με checkpoints. Ο owner μπορεί να αναλάβει προσωρινά την οθόνη ή να εγκρίνει μια κρίσιμη ενέργεια. Δεν πρόκειται για cloud VM αλλά για ξεχωριστό worker στο macOS.",
  flowTitle:"Από την εντολή στο αποτέλεσμα",flowSteps:["Ο χρήστης περιγράφει τη δουλειά που θέλει να γίνει.","Ο agent οργανώνει βήματα και καλεί εργαλεία μέσω εξουσιοδοτημένης σύνδεσης.","Ο Linux ή Mac worker εκτελεί όσα βήματα υποστηρίζονται, κρατώντας κατάσταση και αποτελέσματα.","Ο χρήστης ελέγχει το αποτέλεσμα και εγκρίνει τελικές ενέργειες όταν απαιτείται."],roleTitle:"Ο ρόλος μου",role:"Ανάλυση απαιτήσεων, σχεδιασμός λύσης, συντονισμός AI-assisted development, ενσωμάτωση εργαλείων, troubleshooting, acceptance criteria, QA και τεκμηρίωση. Το project παρουσιάζεται ως τεχνική ηγεσία και orchestration, όχι ως ισχυρισμός προσωπικής συγγραφής κάθε γραμμής κώδικα.",
  proofTitle:"Τεκμηριωμένα αποτελέσματα",proof:["Δύο ανεξάρτητες υποδομές, με διαφορετικούς μηχανισμούς εκτέλεσης.","Cloud Linux desktop και λειτουργική πρόσβαση μέσω MCP.","Mac worker v0.3.0, διαχείριση ουράς και επιβεβαιωμένη εκκίνηση FilmCraft.","Δοκιμαστικό FilmCraft project με συνθετικό υλικό, sequence 1280×720/25 fps και επιτυχή render."],
  caution:"Οι εικόνες προέρχονται από δοκιμές σε πραγματικά περιβάλλοντα. Οι λειτουργίες που απαιτούν πρόσθετους end-to-end ελέγχους δεν παρουσιάζονται ως πλήρως πιστοποιημένες.",
  figureLinux:"Πραγματικό Linux workspace",figureMac:"FilmCraft σε macOS με αποκλειστικά συνθετικό περιεχόμενο",status:"Επιλεγμένη τεχνική παρουσίαση · οι επιπλέον αυτοματισμοί παραμένουν υπό εξέλιξη",
  footer:"Στρατηγική, δημιουργική παραγωγή και τεχνική υλοποίηση σε ένα ενιαίο workflow."},
 en:{
  back:"← Back to portfolio",kicker:"FEATURED CASE STUDY · 2026",
  title:"Promoters AI Creative Infrastructure",
  subtitle:"Two independent AI automation architectures: a cloud creative workspace and a physical macOS workstation.",
  introTitle:"The problem it solves",intro:"Video editing and digital production involve opening applications, locating assets, importing footage, running steps and checking exports. A chatbot can describe those steps but does not complete them on its own. This system was designed to turn a request into controlled operations in a real computing environment, with human intervention where needed.",
  solutionTitle:"How it works in each environment",
  linux:"Linux · Cloud Creative Workspace",linuxText:"A user sends a request from ChatGPT or the private panel. The agent uses tools inside an isolated Linux workspace: working with files, the browser and creative applications, running supported jobs and producing exports. This workspace is separate from the personal computer and protected by owner authentication.",
  mac:"Mac · Native Workstation Automation",macText:"The agent can send steps to a physical Mac mini with installed creative applications and local files. Tasks are queued, tracked and checkpointed. The owner can temporarily take control of the screen or approve a critical action. This is a distinct macOS worker, not another cloud VM.",
  flowTitle:"From request to result",flowSteps:["The user describes the work to be done.","The agent plans steps and invokes tools through authorized connections.","The Linux or Mac worker executes supported actions, tracking state and outputs.","The user reviews the result and approves final actions when required."],roleTitle:"My role",role:"Requirements analysis, solution design, AI-assisted development coordination, integrations, troubleshooting, acceptance criteria, QA and documentation. This reflects technical leadership and orchestration, not a claim to having personally written every line of code.",
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
<section className={styles.section}><h2>{c.solutionTitle}</h2><div className={styles.columns}><article className={styles.card}><img className={styles.visual} src="/assets/portfolio-linux-workspace.svg" alt={c.figureLinux} /><h3>{c.linux}</h3><p>{c.linuxText}</p></article><article className={styles.card}><img className={styles.visual} src="/assets/portfolio-mac-filmcraft.svg" alt={c.figureMac} /><h3>{c.mac}</h3><p>{c.macText}</p></article></div></section>
<section className={styles.section}><h2>{c.flowTitle}</h2><ol>{c.flowSteps.map(step=><li key={step}>{step}</li>)}</ol></section>
<section className={styles.section}><h2>{c.roleTitle}</h2><p>{c.role}</p></section>
<section className={styles.section}><h2>{c.proofTitle}</h2><ul>{c.proof.map(p=><li key={p}>{p}</li>)}</ul><p className={styles.note}>{c.caution}</p></section>
<footer className={styles.footer}><strong>{c.footer}</strong><p>{c.status}</p><Link href={`/${locale}`}>{c.back}</Link></footer></main>}