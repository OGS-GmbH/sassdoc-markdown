type Type = "String" | "Number" | "Boolean" | "Color" | "Map" | "List" | "Null" | "variable" | "ArgList" | "function" | "Mixin" | "Selector" | "Any" | (string & {});

type NodeField = "access" | "alias" | "author" | "content" | "deprecated" | "example" | "group" | "ignore" | "link" | "name" | "output" | "parameter" | "property" | "require" | "return" | "see" | "since" | "throw" | "todo" | "type";

type Since = {
  version: string;
};

type Range = {
  start: number;
  end: number;
};

type Context = {
  type: Type;
  name: string;
  code: string;
  line: Range;
};

type Parameter = {
  type: Type;
  name: string;
  description: string;
};

type Return = {
  type: Type;
  description: string;
};

type Link = {
  url: string;
  caption?: string;
};

type File = {
  path: string;
  name: string;
};

type UsedBy = {
  description: string;
  context: Context;
};

type Example = {
  type: string;
  code: string;
}

type Access = "private" | "public";

type Property = {
  type: Type;
  name: string;
  description: string;
}

type Node = {
  commentRange: Range;
  context: Context;
  file: File;
} & Partial<{
  access: Access; 
  alias: string;
  author: string[];
  content: string;
  deprecated: string;
  description: string;
  example: Example[];
  group: string[];
  ignore: string[];
  link: Link[];
  output: string;
  parameter: Parameter[];
  property: Property[];
  require: string[];
  return: Return;
  see: Node[],
  since: Since[];
  throw: string[];
  todo: string[];
  type: string;
  usedBy: UsedBy[];
}>;

export type {
  Type,
  NodeField,
  Range,
  Context,
  Parameter,
  Return,
  Example,
  Since,
  Link,
  File,
  UsedBy,
  Property,
  Access,
  Node
}
