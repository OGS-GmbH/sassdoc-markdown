import { filterNodes, handleNode, transformOverview, type FilteredNodes } from "./public-api";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "./type";
import fs from "node:fs";
import path from "node:path";

/**
 * Run the markdown generator
 * @param nodes - SassDoc nodes
 * @param out - Output path
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export function run (nodes: Node[], out: string): void {
  const filteredNodes: Record<Type, FilteredNodes> = filterNodes(nodes);
  const index: string = transformOverview(filteredNodes);

  fs.mkdirSync(
    out,
    { recursive: true }
  );
  fs.writeFileSync(
    path.join(
      out,
      "index.md"
    ),
    index
  );

  for (const [ type, filteredNodesItem ] of Object.entries(filteredNodes)) {
    fs.mkdirSync(
      path.join(
        out,
        type
      ),
      { recursive: true }
    );

    for (const node of filteredNodesItem.nodes) {
      const content: string | null = handleNode(node);

      if (content === null)
        continue;

      fs.writeFileSync(
        path.join(
          out,
          type,
          `${ node.context.name }.md`
        ),
        content
      );
    }
  }
}
