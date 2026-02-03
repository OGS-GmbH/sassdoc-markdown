import { filterNodes, handleNode, type FilteredNodes } from "./public-api";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "./type";
import fs from "node:fs";
import path from "node:path";
import { getFsDirToNodeFile, getFsDirToType, getIndexFileName } from "./utils";
import { transformOverview } from "./transform/overview";
import { getArgs, type Args } from "./args";

/**
 * Run the markdown generator
 * @param nodes - SassDoc nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export function run (nodes: Node[]): void {
  const args: Args = getArgs();
  const filteredNodes: Record<Type, FilteredNodes> = filterNodes(nodes);
  const index: string = transformOverview(filteredNodes);

  fs.mkdirSync(
    args.out,
    { recursive: true }
  );
  fs.writeFileSync(
    path.join(
      args.out,
      getIndexFileName()
    ),
    index
  );

  for (const [ type, filteredNodesItem ] of Object.entries(filteredNodes)) {
    fs.mkdirSync(
      getFsDirToType(type),
      { recursive: true }
    );

    for (const node of filteredNodesItem.nodes) {
      const content: string | null = handleNode(node);

      if (content === null)
        continue;

      fs.writeFileSync(
        getFsDirToNodeFile(type, node),
        content
      );
    }
  }
}
