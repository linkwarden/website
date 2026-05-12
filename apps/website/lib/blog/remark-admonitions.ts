import { visit } from "unist-util-visit";

type DirectiveNode = {
  type: "containerDirective" | "leafDirective" | "textDirective";
  name: string;
  attributes?: Record<string, string | null>;
  children: unknown[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

const ADMONITION_NAMES = new Set([
  "note",
  "tip",
  "info",
  "warning",
  "danger",
  "caution",
]);

export default function remarkAdmonitions() {
  return (tree: unknown) => {
    visit(tree as never, (node: DirectiveNode) => {
      if (
        node.type !== "containerDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "textDirective"
      ) {
        return;
      }
      if (!ADMONITION_NAMES.has(node.name)) return;

      const data = node.data || (node.data = {});
      data.hName = "admonition";
      data.hProperties = { type: node.name };
    });
  };
}
