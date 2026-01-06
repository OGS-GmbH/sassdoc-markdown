import type { Node, Type } from "../type";
import { typeToHeading } from "../utils";
import { define, heading, list, rule } from "@ogs-gmbh/markdown";

function transformOverview (filteredNodes: Record<Type, Node[]>): string {
  return Object.entries(
    filteredNodes
  ).map(([key, nodes]) => {
    const headingContent: string = typeToHeading(key);

    return define(
      heading("h2", headingContent),
      list(
        "unordered",
        nodes.map((node) => `${node.context.name}`)
      ),
      rule("hyphens")
    ).toString();
  }).join("\n");
}

export {
  transformOverview
}
