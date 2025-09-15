import * as mod from "style-to-js/cjs/index.js";

// Export default and named exports to be compatible with ESM imports expecting a default export
const exported = mod && mod.__esModule ? mod.default : mod;

export default exported;

// Re-export named exports if present
export * from "style-to-js/cjs/index.js";
