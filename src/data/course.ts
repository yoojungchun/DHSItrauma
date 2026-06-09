/**
 * Course metadata — single source of truth for everything outside the weekly
 * schedule. Items marked `TBD` were not in the supplied syllabus content; fill
 * them in and the site updates automatically.
 */

export const course = {
  title: 'The Trauma Plot',
  subtitle: 'Suffering and Spectacle from Shakespeare to TikTok',
  code: 'ENGL TBD',
  term: 'Spring 2027',
  instructor: 'Yoojung Chun',
  meeting: 'TBD — Days / Time / Room',

  /** Full course description, verbatim. */
  description: [
    `Why can't you stop watching a YouTube apology video — even when you know it's performative, even when you suspect you're being manipulated, even when you're not sure who the tears are really for?`,
    `For centuries, the spectacle of pain has toppled regimes and built cults. Human empathy allows us to recognize the pain of vulnerable populations and mobilize for political action. But this same machinery has a shadow side. Publishing industries decide which wounds are marketable. Algorithms reward confession. Award committees crown the "right" kind of anguish. And the demand that marginalized people perform their trauma for credibility often reproduces the very violence it claims to oppose.`,
    `This course gives you the critical tools to hold both of those realities at once. Drawing on works by Shakespeare, Toni Morrison, Primo Levi, Ocean Vuong, and R.F. Kuang, alongside works of theorists like Aristotle, Susan Sontag, Edward Said, Sara Ahmed, Saidiya Hartman, and Elaine Scarry, we'll trace how suffering becomes narrative, how narrative becomes both weapon and commodity, and what's at stake in telling the difference.`,
    `You'll come away with a sharper vocabulary for questions you're probably already asking: When does empathy build power, and when does it curdle into consumption? Is there a way to bear witness that doesn't reproduce the spectacle? And who gets to decide?`,
  ],

  /** The three driving questions, pulled out for the Overview. */
  questions: [
    'When does empathy build power, and when does it curdle into consumption?',
    'Is there a way to bear witness that doesn’t reproduce the spectacle?',
    'And who gets to decide?',
  ],
} as const;

/** The four movements of the course. `weeks` is an inclusive [start, end] range. */
export const sections = [
  {
    id: 'I',
    numeral: 'I',
    title: 'Catharsis and the Prehistory of “Speaking-For”',
    weeks: [1, 4] as const,
  },
  {
    id: 'II',
    numeral: 'II',
    title: 'Post-45 Trauma and the Role of Witnessing',
    weeks: [5, 8] as const,
  },
  {
    id: 'III',
    numeral: 'III',
    title: 'Capitalism, Identity Politics, and Suffering',
    weeks: [9, 12] as const,
  },
  {
    id: 'IV',
    numeral: 'IV',
    title: 'The Future of Documents',
    weeks: [13, 14] as const,
  },
] as const;

/** Assignment milestones. Final paper details were not supplied (TBD). */
export const assignments = [
  {
    name: 'Prospectus & Annotated Bibliography',
    when: 'Due Week 7',
    detail:
      'A research prospectus plus a complete annotated bibliography establishing your project’s stakes and sources.',
  },
  {
    name: 'First Page',
    when: 'Due April 5 (Week 10)',
    detail: 'The opening page of your final paper — your argument’s first move.',
  },
  {
    name: 'Final Research Paper',
    when: 'TBD',
    detail:
      'Culminating research essay building on the prospectus and first page. Length and due date: TBD.',
  },
] as const;

/** Course policies — placeholder text; replace with department language. */
export const policies = [
  {
    heading: 'Attendance & Participation',
    body: 'TBD — Engaged, prepared attendance is expected. This is a discussion-driven seminar; come having read closely and ready to think out loud.',
  },
  {
    heading: 'Academic Integrity',
    body: 'TBD — All work must be your own and properly cited. Uphold the university’s honor code.',
  },
  {
    heading: 'Accessibility & Accommodations',
    body: 'TBD — Accommodations are arranged confidentially through the disability services office; reach out early.',
  },
  {
    heading: 'Content Note',
    body: 'This course engages sustained representations of violence, genocide, slavery, and atrocity. We treat this material seriously and with care. Speak with the instructor if you have concerns.',
  },
] as const;

export type Section = (typeof sections)[number];
