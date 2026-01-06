import { define, type Node as MarkdownNode } from "@ogs-gmbh/markdown";
import { spreadNullish } from "../utils";
import { transformDefaultHeader } from "./additional";
import { handleNodeField } from "./node";
import type { Node, NodeField } from "../type";

const FUNCTION_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "name",
  "parameter",
  "require",
  "return",
  "see",
  "since",
  "throw",
  "todo"
]

function transformFunction (node: Node): string {
  return define(
    FUNCTION_FIELDS.map((field: NodeField): MarkdownNode[] | null => handleNodeField(field, node))
  ).toString();
}

const VARIABLE_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "name",
  "property",
  "require",
  "see",
  "since",
  "todo",
  "type"
];

function transformVariable (node: Node): string {
  return define(
    VARIABLE_FIELDS.map((field: NodeField) => handleNodeField(field, node))
  ).toString();
}

const MIXIN_FIELDS: NodeField[] = [
  "access",
  "alias",
  "author",
  "content",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "name",
  "output",
  "parameter",
  "require",
  "see",
  "since",
  "throw",
  "todo",
]

function transformMixin (node: Node): string {
  return define(
    )
  ).toString();
}

function transformPlaceholder (node: Node): string {
  return define(
    ...spreadNullish(
      transformDefaultHeader(node)
    ),
    ...spreadNullish(
      transformAccess(node)
    )
  ).toString();
}

function transformDetail (node: Node): string {
  switch (node.context.type) {
    case "function": {
      break;
    }

    case "variable": {
      break;
    }
  }

}
