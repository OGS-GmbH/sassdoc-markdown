import { getArgs, type Args } from "./args";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Type } from "./type";
import path from "node:path";

const SCSS_LINE_TERMINATOR: string = ";";
const MARKDOWN_EXTENSION: string = "md";

/**
 * Convert a SassDoc node type to a heading string
 * @param type - SassDoc node type
 * @returns Heading
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function typeToHeading (type: Type): string {
  switch (type) {
    case "function": {
      return "Functions";
    }

    case "mixin": {
      return "Mixins";
    }

    case "variable": {
      return "Variables";
    }

    default: {
      return "Other";
    }
  }
}

function toKebabCase (value: string): string {
  return value.toLowerCase()
    .replaceAll(" ", "-");
}

function getIndexFileName (): string {
  return `index.${ MARKDOWN_EXTENSION }`;
}

function getFileNameFromNode (node: Node): string {
  return `${ toKebabCase(node.context.name) }.${ MARKDOWN_EXTENSION }`;
}

function getFsDirToType (type: string): string {
  const args: Args = getArgs();

  return path.join(
    args.out,
    toKebabCase(type)
  );
}

function getFsDirToNodeFile (type: string, node: Node): string {
  const args: Args = getArgs();

  return path.join(
    args.out,
    toKebabCase(type),
    getFileNameFromNode(node)
  );
}

function getLinkToNodeFile (type: string, node: Node): string {
  const args: Args = getArgs();

  return path.join(
    args.baseUrl ?? "",
    toKebabCase(type),
    getFileNameFromNode(node)
  );
}

export {
  SCSS_LINE_TERMINATOR,
  typeToHeading,
  toKebabCase,
  getIndexFileName,
  getFileNameFromNode,
  getFsDirToType,
  getFsDirToNodeFile,
  getLinkToNodeFile
};
