import type { Node, Type } from "../type";
import { define, heading, linebreak, list, rule } from "@ogs-gmbh/markdown";
import type { FilteredNodes } from "./filter";
import { typeToHeading } from "../utils";

function transformOverview (filteredNodes: Record<Type, FilteredNodes>): string {
  return Object.entries(
    filteredNodes
  ).map(([key, filteredNodesItem]) => {
    const headingContent: string = filteredNodesItem.isCustom ? key : typeToHeading(key);

    return define(
      heading("h2", headingContent.capitalize()),
      linebreak("system"),
      list(
        "unordered",
        ...filteredNodesItem.nodes.map((node: Node): string => `${node.context.name}`)
      ),
      rule("hyphens")
    ).toString();
  }).join("\n");
}

export {
  transformOverview
}
