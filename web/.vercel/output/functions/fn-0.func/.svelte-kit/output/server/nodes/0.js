import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.f3330569.js","_app/immutable/chunks/index.f5466b25.js","_app/immutable/chunks/index.9c5823de.js"];
export const stylesheets = ["_app/immutable/assets/0.82faa5ef.css"];
export const fonts = [];
