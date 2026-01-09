import { heading, linebreak, paragraph, rule, type Node as MarkdownNode } from "@ogs-gmbh/markdown"
import type { Node } from "../type"

function transformDefaultHeader (node: Node): Array<MarkdownNode | null> {
  return [
    heading("h1", node.context.name),
    linebreak("system"),
    paragraph(`Defined in ${node.file.name}:${node.context.line.start}`),
    linebreak("system"),
    node.description ? paragraph(node.description) : null,
    rule("hyphens"),
    linebreak("system")
  ]
}

export {
  transformDefaultHeader
}
