import { heading, linebreak, paragraph, rule, type Node as MarkdownNode } from "@ogs-gmbh/markdown"
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node } from "../type";

/**
 * Transform SassDoc node to default header, used in docs
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformDefaultHeader (node: Node): Array<MarkdownNode | null> {
  return [
    heading("h1", node.context.name),
    linebreak("system"),
    paragraph(`Defined in ${ node.file.name }:${ node.context.line.start }`),
    linebreak("system"),
    node.description ? paragraph(node.description) : null,
    rule("hyphens"),
    linebreak("system")
  ];
}

export {
  transformDefaultHeader
};
