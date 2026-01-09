import { define } from "@ogs-gmbh/markdown";
import { handleNodeFields } from "./node";
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

function transformFunction (node: Node): string | null {
  const markdownNodes = handleNodeFields(FUNCTION_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
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

function transformVariable (node: Node): string | null {
  const markdownNodes = handleNodeFields(VARIABLE_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
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

function transformMixin (node: Node): string | null {
  const markdownNodes = handleNodeFields(MIXIN_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

const PLACEHOLDER_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "name",
  "require",
  "see",
  "since",
  "throw",
  "todo",
  "type"
]

function transformPlaceholder (node: Node): string | null {
  const markdownNodes = handleNodeFields(PLACEHOLDER_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

function handleNode (node: Node): string | null {
  switch (node.context.type) {
    case "function": {
      return transformFunction(node)
    }

    case "variable": {
      return transformVariable(node);
    }

    case "placeholder": {
      return transformPlaceholder(node);
    }

    case "mixin": {
      return transformMixin(node);
    }
  }

  return null;
}

export {
  FUNCTION_FIELDS,
  transformFunction,
  VARIABLE_FIELDS,
  transformVariable,
  MIXIN_FIELDS,
  transformMixin,
  PLACEHOLDER_FIELDS,
  transformPlaceholder,
  handleNode
}
