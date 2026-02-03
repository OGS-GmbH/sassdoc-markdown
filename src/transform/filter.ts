/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "../type";
import process from "node:process";

/**
 * Filtered nodes grouped by their type or custom group
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type FilteredNodes = {
  /**
   * Marks the filtered node category as custom group
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  isCustom: boolean;
  /**
   * Contains all nodes of the filtered category
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  nodes: Node[];
};

/**
 * Filter nodes by their access level and group them by their type or custom group
 * @param nodes - SassDoc nodes
 * @returns Record of filtered nodes grouped by their type or custom group
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function filterNodes (nodes: Node[]): Record<Type, FilteredNodes> {
  const filteredNodes: Record<string, FilteredNodes> = {};

  for (const node of nodes) {
    if (node.access === "private")
      continue;

    /* eslint-disable @security/detect-object-injection */
    const group: string = node.group?.at(0) ?? node.context.type;
    const currentFilteredNode: FilteredNodes = {
      isCustom: node.group?.at(0) !== undefined,
      nodes: filteredNodes[ group ]?.nodes === undefined
        ? [ node ]
        : [ ...filteredNodes[ group ].nodes, node ]
    };

    filteredNodes[ group ] = currentFilteredNode;
    /* eslint-enable @security/detect-object-injection */
  }

  if (Object.keys(filteredNodes).length === 0) {
    process.stderr.write("Expected to have at least more than one node after filtering\n");
    /* eslint-disable-next-line @unicorn/no-process-exit */
    process.exit(1);
  }

  return filteredNodes;
}

export type {
  FilteredNodes
};
export {
  filterNodes
};
