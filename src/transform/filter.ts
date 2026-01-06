import type { Node, Type } from "../type";

function filterNodes (nodes: Node[]): Record<Type, Node[]> {
  let filteredNodes: Record<string, Node[]> = {};

  for (const node of nodes) {
    if (node.access === "private")
      continue;

    const group: string = node.group?.at(0) ?? node.context.type;

    filteredNodes[group] = filteredNodes[group] === undefined ? [ node ] : [  ...filteredNodes[group], node ];
  }

  if (Object.keys(filteredNodes).length === 0) {
    process.stderr.write("Expected to have at least more than one node after filtering");
    process.exit(1);
  }

  return filteredNodes;
}

export {
  filterNodes
}
