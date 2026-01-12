import type { Type } from "./type";

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
    case "String": {
      return "Strings";
    }

    case "Number": {
      return "Numbers";
    }

    case "Boolean": {
      return "Booleans";
    }

    case "Color": {
      return "Colors";
    }

    case "Map": {
      return "Maps";
    }

    case "List": {
      return "Lists";
    }

    case "function": {
      return "Functions";
    }

    case "Mixin": {
      return "Mixins";
    }

    default: {
      return "Other";
    }
  }
}

export {
  typeToHeading
};
