import { define, type Node as MarkdownNode } from "@ogs-gmbh/markdown";
import { handleNodeFields } from "./node";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, NodeField } from "../type";

/**
 * Fields to transform for function nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const FUNCTION_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "parameter",
  "require",
  "return",
  "see",
  "since",
  "throw",
  "todo"
];

/**
 * Transform function node to markdown
 * @param node - SassDoc function node
 * @returns Markdown of function node, or null if no fields could be transformed
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformFunction (node: Node): string | null {
  const markdownNodes: MarkdownNode[] | null = handleNodeFields(FUNCTION_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

/**
 * Fields to transform for variable nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const VARIABLE_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "property",
  "require",
  "see",
  "since",
  "todo",
  "type"
];

/**
 * Transform variable node to markdown
 * @param node - SassDoc variable node
 * @returns Markdown of variable node, or null if no fields could be transformed
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformVariable (node: Node): string | null {
  const markdownNodes: MarkdownNode[] | null = handleNodeFields(VARIABLE_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

/**
 * Fields to transform for mixin nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
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
  "output",
  "parameter",
  "require",
  "see",
  "since",
  "throw",
  "todo"
];

/**
 * Transform mixin node to markdown
 * @param node - SassDoc mixin node
 * @returns Markdown of mixin node, or null if no fields could be transformed
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformMixin (node: Node): string | null {
  const markdownNodes: MarkdownNode[] | null = handleNodeFields(MIXIN_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

/**
 * Fields to transform for placeholder nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
const PLACEHOLDER_FIELDS: NodeField[] = [
  "access",
  "author",
  "deprecated",
  "example",
  "group",
  "ignore",
  "link",
  "require",
  "see",
  "since",
  "throw",
  "todo",
  "type"
];

/**
 * Transform placeholder node to markdown
 * @param node - SassDoc placeholder node
 * @returns Markdown of placeholder node, or null if no fields could be transformed
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformPlaceholder (node: Node): string | null {
  const markdownNodes: MarkdownNode[] | null = handleNodeFields(PLACEHOLDER_FIELDS, node);

  if (markdownNodes === null)
    return null;

  return define(
    ...markdownNodes
  ).toString();
}

/**
 * Handle SassDoc node based on its type
 * @param node - SassDoc node
 * @returns Markdown of SassDoc node, or null if no fields could be transformed
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function handleNode (node: Node): string | null {
  switch (node.context.type) {
    case "function": {
      return transformFunction(node);
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

    default: {
      return null;
    }
  }
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
};
