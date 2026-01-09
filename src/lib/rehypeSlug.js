import { createSlugger } from "./slugger.js";

const headingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

function getNodeText(node) {
  if (!node) return "";
  if (node.type === "text") return node.value ?? "";
  if (!Array.isArray(node.children)) return "";
  return node.children.map(getNodeText).join("");
}

export default function rehypeSlug() {
  return (tree) => {
    const slugger = createSlugger();

    const visit = (node) => {
      if (!node || typeof node !== "object") return;

      if (node.type === "element" && headingTags.has(node.tagName)) {
        const text = getNodeText(node).trim();
        const slug = slugger(text);
        node.properties = node.properties || {};
        if (!node.properties.id) {
          node.properties.id = slug;
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}
