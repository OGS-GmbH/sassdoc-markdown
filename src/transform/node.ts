import { code, heading, paragraph, table, tableCell, tableRow, type TableRowNode, type Node as MarkdownNode, list, link, linebreak } from "@ogs-gmbh/markdown";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Example, Link, Node, NodeField, Parameter, Property, Require, Since } from "../type";
import { transformDefaultHeader } from "./additional";

/**
 * Transform SassDoc node access field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformAccess (node: Node): MarkdownNode[] | null {
  if (!node.access)
    return null;

  return [
    heading("h2", "Access"),
    linebreak("system"),
    paragraph(node.access),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node alias field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformAlias (node: Node): MarkdownNode[] | null {
  if (!node.alias)
    return null;

  return [
    heading("h2", "Alias"),
    linebreak("system"),
    paragraph(node.alias),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node author field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformAuthor (node: Node): MarkdownNode[] | null {
  if (!node.author)
    return null;

  return [
    heading("h2", "Author"),
    linebreak("system"),
    paragraph(node.author),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node content field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformContent (node: Node): MarkdownNode[] | null {
  if (!node.content)
    return null;

  return [
    heading("h2", "Content"),
    linebreak("system"),
    paragraph(node.content),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node deprecated field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformDeprecated (node: Node): MarkdownNode[] | null {
  if (!node.deprecated)
    return null;

  return [
    heading("h2", "Deprecated"),
    linebreak("system"),
    paragraph(node.deprecated),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node example field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformExample (node: Node): MarkdownNode[] | null {
  if (!node.example || node.example.length === 0)
    return null;

  return [
    heading("h2", "Examples"),
    linebreak("system"),
    node.example.flatMap((example: Example) => [
      code(example.code, {
        language: example.type,
        isBlock: true
      })
    ]),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node group field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformGroup (node: Node): MarkdownNode[] | null {
  if (!node.group || node.group.length === 0)
    return null;

  return [
    heading("h2", "Groups"),
    linebreak("system"),
    list("unordered", ...node.group)
  ];
}

/**
 * Transform SassDoc node ignore field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformIgnore (node: Node): MarkdownNode[] | null {
  if (!node.ignore || node.ignore.length === 0)
    return null;

  return [
    heading("h2", "Ignores"),
    linebreak("system"),
    list("unordered", ...node.ignore)
  ];
}

/**
 * Transform SassDoc node link field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformLink (node: Node): MarkdownNode[] | null {
  if (!node.link || node.link.length === 0)
    return null;

  return [
    heading("h2", "Links"),
    linebreak("system"),
    node.link.flatMap((_link: Link) => link(
      _link.url,
      _link.caption && _link.caption.length !== 0
        ? _link.caption
        : _link.url
    )),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node output field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformOutput (node: Node): MarkdownNode[] | null {
  if (!node.output)
    return null;

  return [
    heading("h2", "Output"),
    linebreak("system"),
    paragraph(node.output),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node parameter field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformParameter (node: Node): MarkdownNode[] | null {
  if (!node.parameter || node.parameter.length === 0)
    return null;

  return [
    heading("h2", "Parameters"),
    linebreak("system"),
    table(
      tableRow(
        tableCell("Parameter"),
        tableCell("Type"),
        tableCell("Description")
      ),
      ...node.parameter.map((parameter: Parameter): TableRowNode => tableRow(
        tableCell(parameter.name),
        tableCell(parameter.type),
        tableCell(parameter.description)
      ))
    ),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node property field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformProperty (node: Node): MarkdownNode[] | null {
  if (!node.property || node.property.length === 0)
    return null;

  return [
    heading("h2", "Properties"),
    linebreak("system"),
    table(
      tableRow(
        tableCell("Parameter"),
        tableCell("Type"),
        tableCell("Description")
      ),
      ...node.property.map((property: Property): TableRowNode => tableRow(
        tableCell(property.name),
        tableCell(property.type),
        tableCell(property.description)
      ))
    ),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node require field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformRequire (node: Node): MarkdownNode[] | null {
  if (!node.require || node.require.length === 0)
    return null;

  return [
    heading("h2", "Requires"),
    linebreak("system"),
    table(
      tableRow(
        tableCell("Type"),
        tableCell("Name")
      ),
      ...node.require.map((require: Require): TableRowNode => tableRow(
        tableCell(require.type),
        tableCell(require.name)
      ))
    ),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node return field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformReturn (node: Node): MarkdownNode[] | null {
  if (!node[ "return" ])
    return null;

  return [
    heading("h2", "Returns"),
    linebreak("system"),
    code(node[ "return" ].type),
    linebreak("system"),
    paragraph(node[ "return" ].description),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node see field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformSee (node: Node): MarkdownNode[] | null {
  if (!node.see || node.see.length === 0)
    return null;

  return [
    heading("h2", "See"),
    linebreak("system"),
    node.see.map((seeNode: Node): MarkdownNode => paragraph(seeNode.context.name)),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node since field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformSince (node: Node): MarkdownNode[] | null {
  if (!node.since || node.since.length === 0)
    return null;

  return [
    heading("h2", "Since"),
    linebreak("system"),
    node.since.flatMap((since: Since) => paragraph(since.version)),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node throw field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformThrow (node: Node): MarkdownNode[] | null {
  if (!node[ "throw" ] || node[ "throw" ].length === 0)
    return null;

  return [
    heading("h2", "Throws"),
    linebreak("system"),
    list("unordered", ...node[ "throw" ])
  ];
}

/**
 * Transform SassDoc node todo field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformTodo (node: Node): MarkdownNode[] | null {
  if (!node.todo || node.todo.length === 0)
    return null;

  return [
    heading("h2", "Type"),
    linebreak("system"),
    list("unordered", ...node.todo)
  ];
}

/**
 * Transform SassDoc node type field to Markdown nodes
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformType (node: Node): MarkdownNode[] | null {
  if (!node.type)
    return null;

  return [
    heading("h2", "Type"),
    linebreak("system"),
    paragraph(node.type),
    linebreak("system")
  ];
}

/**
 * Transform SassDoc node field to Markdown nodes
 * @param field - SassDoc node field
 * @param node - SassDoc node
 * @returns Array of Markdown nodes, or null if field is not recognized
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mapNodeField (field: NodeField, node: Node): MarkdownNode[] | null {
  switch (field) {
    case "alias": {
      return transformAlias(node);
    }

    case "access": {
      return transformAccess(node);
    }

    case "author": {
      return transformAuthor(node);
    }

    case "content": {
      return transformContent(node);
    }

    case "deprecated": {
      return transformDeprecated(node);
    }

    case "example": {
      return transformExample(node);
    }

    case "group": {
      return transformGroup(node);
    }

    case "ignore": {
      return transformIgnore(node);
    }

    case "link": {
      return transformLink(node);
    }

    case "output": {
      return transformOutput(node);
    }

    case "parameter": {
      return transformParameter(node);
    }

    case "property": {
      return transformProperty(node);
    }

    case "require": {
      return transformRequire(node);
    }

    case "return": {
      return transformReturn(node);
    }

    case "see": {
      return transformSee(node);
    }

    case "since": {
      return transformSince(node);
    }

    case "throw": {
      return transformThrow(node);
    }

    case "todo": {
      return transformTodo(node);
    }

    case "type": {
      return transformType(node);
    }

    default: {
      return null;
    }
  }
}

/**
 * Handle SassDoc node fields and transform them to Markdown nodes
 * @param fields - SassDoc node fields to handle
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function handleNodeFields (fields: NodeField[], node: Node): MarkdownNode[] | null {
  const markdownNodes: MarkdownNode[] = [];
  const headerNodes: Array<MarkdownNode | null> = transformDefaultHeader(node);

  for (const headerNode of headerNodes) {
    if (headerNode === null)
      continue;

    markdownNodes.push(headerNode);
  }

  for (const field of fields) {
    const currentMarkdownNodes: MarkdownNode[] | null = mapNodeField(field, node);

    if (currentMarkdownNodes === null)
      continue;

    markdownNodes.push(
      ...currentMarkdownNodes
    );
  }

  if (markdownNodes.length === 0)
    return null;

  return markdownNodes;
}

export {
  transformReturn,
  transformParameter,
  transformAuthor,
  transformThrow,
  transformExample,
  transformSince,
  transformDeprecated,
  transformRequire,
  transformLink,
  transformContent,
  transformType,
  transformAlias,
  transformSee,
  transformAccess,
  mapNodeField,
  handleNodeFields
};
