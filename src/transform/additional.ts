import { heading, paragraph, rule, type Node as MarkdownNode } from "@ogs-gmbh/markdown"
import type { Node } from "../type"

function transformDefaultHeader (node: Node): Array<MarkdownNode | null> {
  return [
    heading("h1", node.context.name),
    paragraph(`Defined in ${node.file.name}:${node.context.line.start}`),
    node.description ? paragraph(node.description) : null,
    rule("hyphens")
  ]
}

export {
  transformDefaultHeader
}
