/**
 * Type for SassDoc node
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Type = "String" | "Number" | "Boolean" | "Color" | "Map" | "List" | "Null" | "variable" | "ArgList" | "function" | "mixin" | "Selector" | "Any" | (string & {});

/**
 * Union containing all possible fields of a SassDoc node
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type NodeField = "access" | "alias" | "author" | "content" | "deprecated" | "example" | "group" | "ignore" | "link" | "output" | "parameter" | "property" | "require" | "return" | "see" | "since" | "throw" | "todo" | "type";

/**
 * Type for SassDoc "since" tag
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Since = {
  /**
   * Version, the feature was invented in
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  version: string;
};

/**
 * Type for a range in SassDoc
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Range = {
  /**
   * Start of the range
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  start: number;
  /**
   * End of the range
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  end: number;
};

/**
 * Type for SassDoc "context" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Context = {
  /**
   * Type of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: Type;
  /**
   * Name of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  name: string;
  /**
   * Code excerpt
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  code: string;
  /**
   * Range in which the node is defined
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  line: Range;
};

/**
 * Type for SassDoc "parameter" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Parameter = {
  /**
   * Type of the parameter
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: Type;
  /**
   * Name of the parameter
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  name: string;
  /**
   * Description of the parameter
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  description: string;
};

/**
 * Type for SassDoc "return" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Return = {
  /**
   * Type of the return value
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: Type;
  /**
   * Type of the return value
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  description: string;
};

/**
 * Type for SassDoc "link" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Link = {
  /**
   * URL of the link
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  url: string;
  /**
   * Caption of the link
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  caption?: string;
};

/**
 * Type for SassDoc "file" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type File = {
  /**
   * Path of the file
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  path: string;
  /**
   * Name of the file
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  name: string;
};

/**
 * Type for SassDoc "usedBy" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type UsedBy = {
  /**
   * Description where the node is used
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  description: string;
  /**
   * Context where the node is used
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  context: Context;
};

/**
 * Type for SassDoc "example" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Example = {
  /**
   * Type of the example
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: string;
  /**
   * Code excerpt of the example
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  code: string;
};

/**
 * Type for SassDoc "access" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Access = "private" | "public";

/**
 * Type for SassDoc "property" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Property = {
  /**
   * Type of the property
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: Type;
  /**
   * Name of the property
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  name: string;
  /**
   * Description of the property
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  description: string;
};

/**
 * Type for SassDoc "require" field
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Require = {
  /**
   * Type of the require
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: string;
  /**
   * Name of the require
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  name: string;
};

/**
 * Represensts a SassDoc node
 *
 * @category SassDoc
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Node = {
  /**
   * Range of the SassDoc documentation comment
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  commentRange: Range;
  /**
   * Carrying simple information of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  context: Context;
  /**
   * File, the node is defined in
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  file: File;
} & Partial<{
  /**
   * Access level of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  access: Access;
  /**
   * Alias of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  alias: string;
  /**
   * Authors of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  author: string[];
  /**
   * Content description of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  content: string;
  /**
   * Deprecated flag of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  deprecated: string;
  /**
   * Description of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  description: string;
  /**
   * Examples of the node's usage
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  example: Example[];
  /**
   * Groups, the node belongs to
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  group: string[];
  /**
   * Ignore flags of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  ignore: string[];
  /**
   * Links related to the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  link: Link[];
  /**
   * Output description of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  output: string;
  /**
   * Parameters of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  parameter: Parameter[];
  /**
   * Properties of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  property: Property[];
  /**
   * Required nodes to properly use this node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  require: Require[];
  /**
   * Return of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  "return": Return;
  /**
   * References to other nodes
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  see: Node[];
  /**
   * Existence of node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  since: Since[];
  /**
   * Possible errors thrown by node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  "throw": string[];
  /**
   * Open tasks related to the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  todo: string[];
  /**
   * Type of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  type: string;
  /**
   * Usage of the node
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
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
  Require,
  Node
};
