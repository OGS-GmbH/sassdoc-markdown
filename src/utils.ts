import type { Type } from "./type";

function typeToHeading (type: Type): string {
  switch (type) {
    case "String":
      return "Strings";
    case "Number":
      return "Numbers";
    case "Boolean":
      return "Booleans";
    case "Color":
      return "Colors";
    case "Map":
      return "Maps";
    case "List":
      return "Lists";
    case "function":
      return "Functions";
    case "Mixin":
      return "Mixins";
    default:
      return "Other";
  }
}

export {
  typeToHeading
}
