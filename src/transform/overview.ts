/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "../type";
import { define, heading, linebreak, link, list } from "@ogs-gmbh/markdown";
import type { FilteredNodes } from "./filter";
import { getLinkToNodeFile, typeToHeading } from "../utils";

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
  return define(
    heading("h1", "Reference"),
    linebreak("system"),
    ...Object.entries(
      filteredNodes
    ).map(([ type, filteredNodesItem ]: [string, FilteredNodes]): string => {
      const headingContent: string = filteredNodesItem.isCustom ? type : typeToHeading(type as Type);

      return define(
        heading("h2", headingContent.capitalize()),
        linebreak("system"),
        list(
          "unordered",
          ...filteredNodesItem.nodes.map(
            (node: Node): string =>
              link(
                getLinkToNodeFile(
                  type,
                  node
                ),
                node.context.name
              ).toString()
          )
        )
      ).toString();
    })
  ).toString();
}

export {
  transformOverview
};
