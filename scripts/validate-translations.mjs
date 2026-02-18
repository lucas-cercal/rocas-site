import { translations } from "../src/i18n/translations.js";

function walk(value, path = "", out = new Map()) {
  if (Array.isArray(value)) {
    out.set(path, "array");
    value.forEach((item, index) => {
      walk(item, `${path}[${index}]`, out);
    });
    return out;
  }

  if (value && typeof value === "object") {
    out.set(path, "object");
    for (const key of Object.keys(value)) {
      const nextPath = path ? `${path}.${key}` : key;
      walk(value[key], nextPath, out);
    }
    return out;
  }

  out.set(path, typeof value);
  return out;
}

const baseLang = "pt";
const baseShape = walk(translations[baseLang]);
let hasError = false;

for (const [lang, dict] of Object.entries(translations)) {
  if (lang === baseLang) continue;
  const shape = walk(dict);

  for (const [path, type] of baseShape.entries()) {
    if (!shape.has(path)) {
      console.error(`[${lang}] Missing key: ${path || "<root>"}`);
      hasError = true;
      continue;
    }
    const currentType = shape.get(path);
    if (currentType !== type) {
      console.error(
        `[${lang}] Type mismatch at ${path || "<root>"}: expected ${type}, got ${currentType}`,
      );
      hasError = true;
    }
  }
}

if (hasError) {
  process.exit(1);
}

console.log("Translation validation passed.");
