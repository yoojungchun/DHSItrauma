# The Trauma Plot — Course Site

An interactive syllabus for **_The Trauma Plot: Suffering and Spectacle from
Shakespeare to TikTok_**.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).
Stark editorial-brutalist design, an interactive 14-week schedule, and a reading
progress tracker that saves to the student's browser.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:4321/dhsitrauma/
```

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server                         |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Editing content

All content lives in two places — you never need to touch components:

- **Course info** — `src/data/course.ts`
  Title, description, instructor, term, assignment milestones, policies. Items
  marked `TBD` (instructor name, course code, term, meeting time, final-paper
  details, grading) are placeholders — fill them in.

- **Weekly schedule** — `src/content/weeks/01.md` … `14.md`
  One Markdown file per week. Each lists the week's `primary`, `secondary`, and
  (optionally) `optional` readings, plus any assignment `due` that week. To add a
  week, copy an existing file and bump the `week` number. Every reading needs a
  unique `id` — that id is the key used to remember whether a student has checked
  it off.

## Deployment (GitHub Pages)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

**One-time setup:** in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

The site is served from a subpath, so `astro.config.mjs` sets
`base: '/dhsitrauma/'`. If the repository is renamed, update `base` and `site` to
match.

Live URL: `https://yoojungchun.github.io/dhsitrauma/`
