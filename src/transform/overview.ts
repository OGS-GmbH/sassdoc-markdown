/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "../type";
import { define, heading, linebreak, list, rule } from "@ogs-gmbh/markdown";
import type { FilteredNodes } from "./filter";
import { typeToHeading } from "../utils";

/**
 * Transform overview of all nodes
 * @param filteredNodes - Filtered nodes
 * @returns Overview containing markdown
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformOverview (filteredNodes: Record<Type, FilteredNodes>): string {
  return Object.entries(
    filteredNodes
  ).map(([ key, filteredNodesItem ]: [Type, FilteredNodes]) => {
    const headingContent: string = filteredNodesItem.isCustom ? key : typeToHeading(key);

    return define(
      heading("h2", headingContent.capitalize()),
      linebreak("system"),
      list(
        "unordered",
        ...filteredNodesItem.nodes.map((node: Node): string => node.context.name)
      ),
      rule("hyphens")
    ).toString();
  })
    .join("\n");
}

export {
  transformOverview
};
