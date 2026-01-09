import type { Node, Type } from "../type";

type FilteredNodes = {
  /**
   * Marks the filtered node category as custom group
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  isCustom: boolean;
  nodes: Node[];
};

function filterNodes (nodes: Node[]): Record<Type, FilteredNodes> {
  let filteredNodes: Record<string, FilteredNodes> = {};

  for (const node of nodes) {
    if (node.access === "private")
      continue;

    const group: string = node.group?.at(0) ?? node.context.type;

    const currentFilteredNode: FilteredNodes = {
      isCustom: node.group?.at(0) !== undefined,
      nodes: filteredNodes[group]?.nodes === undefined
        ? [ node ]
        : [  ...filteredNodes[group].nodes, node ]
    };

    filteredNodes[group] = currentFilteredNode;
  }

  if (Object.keys(filteredNodes).length === 0) {
    process.stderr.write("Expected to have at least more than one node after filtering\n");
    process.exit(1);
  }

  console.dir(filteredNodes);

  return filteredNodes;
}

export type {
  FilteredNodes
};
export {
  filterNodes
};
