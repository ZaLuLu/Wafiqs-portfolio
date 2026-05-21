/**
 * projects.js — legacy re-export shim.
 *
 * Projects data has been moved to src/data/portfolio.js (the PROJECTS export).
 * This file re-exports it so existing imports don't break.
 *
 * To edit your projects, open src/data/portfolio.js and find the PROJECTS section.
 */
export { PROJECTS as projectsData } from './portfolio';
