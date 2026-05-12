import { visit } from "unist-util-visit";

type ElementNode = {
  type: "element";
  tagName: string;
  children: Array<{ type: string; value?: string; children?: unknown[] }>;
};

export default function rehypeTrimCode() {
  return (tree: unknown) => {
    visit(tree as never, "element", (node: ElementNode) => {
      if (node.tagName !== "pre") return;
      const code = node.children.find(
        (c) =>
          c.type === "element" &&
          (c as unknown as ElementNode).tagName === "code",
      ) as ElementNode | undefined;
      if (!code || !Array.isArray(code.children)) return;
      const last = code.children[code.children.length - 1];
      if (last && last.type === "text" && typeof last.value === "string") {
        last.value = last.value.replace(/[\s\n]+$/, "");
      }
    });
  };
}
