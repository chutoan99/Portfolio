import projects from '../data/projects.json'

// GET /api/projects — served by Nitro. Swap this body for a DB/CMS/upstream fetch
// later and the frontend composable stays unchanged.
export default defineEventHandler(() => projects)
