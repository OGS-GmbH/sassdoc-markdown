import { code, heading, paragraph, rule, table, tableCell, tableRow, type TableRowNode, type Node as MarkdownNode, list, link } from "@ogs-gmbh/markdown";
import type { Example, Link, Node, NodeField, Parameter, Property, Since } from "../type";

function transformAccess (node: Node): MarkdownNode[] | null {
  if (!node.access)
    return null;

  return [
    heading("h2", "Access"),
    paragraph(node.access),
    rule("hyphens")
  ]
}

function transformAlias (node: Node): MarkdownNode[] | null {
  if (!node.alias)
    return null;

  return [
    heading("h2", "Alias"),
    paragraph(node.alias),
    rule("hyphens")
  ]
}

function transformAuthor (node: Node): MarkdownNode[] | null {
  if (!node.author)
    return null;

  return [
    heading("h2", "Author"),
    paragraph(node.author),
    rule("hyphens")
  ];
}

function transformContent (node: Node): MarkdownNode[] | null {
  if (!node.content)
    return null;

  return [
    heading("h2", "Content"),
    paragraph(node.content),
    rule("hyphens")
  ];
}

function transformDeprecated (node: Node): MarkdownNode[] | null {
  if (!node.deprecated)
    return null;

  return [
    heading("h2", "Deprecated"),
    paragraph(node.deprecated),
    rule("hyphens")
  ];
}

function transformExample (node: Node): MarkdownNode[] | null {
  if (!node.example)
    return null;

  return [
    heading("h2", "Examples"),
    node.example.map((example: Example) => [
      code(example.code, {
        language: example.type
      })
    ]).flat(),
    rule("hyphens")
  ];
}

function transformGroup (node: Node): MarkdownNode[] | null {
  if (!node.group)
    return null;

  return [
    heading("h2", "Groups"),
    list("unordered", ...node.group),
    rule("hyphens")
  ]
}

function transformIgnore (node: Node): MarkdownNode[] | null {
  if (!node.ignore)
    return null;

  return [
    heading("h2", "Ignores"),
    list("unordered", ...node.ignore),
    rule("hyphens")
  ]
}

function transformLink (node: Node): MarkdownNode[] | null {
  if (!node.link)
    return null;

  return [
    heading("h2", "Links"),
    node.link.map((_link: Link) => link(_link.url, _link.caption)).flat(),
    rule("hyphens")
  ];
}

function transformOutput (node: Node): MarkdownNode[] | null {
  if (!node.output)
    return null;

  return [
    heading("h2", "Output"),
    paragraph(node.output),
    rule("hyphens")
  ]
}

function transformParameter (node: Node): MarkdownNode[] | null {
  if (!node.parameter)
    return null;

  return [
    heading("h2", "Parameters"),
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
    rule("hyphens")
  ];
}

function transformProperty (node: Node): MarkdownNode[] | null {
  if (!node.property)
    return null;

  return [
    heading("h2", "Properties"),
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
    rule("hyphens")
  ]
}

function transformRequire (node: Node): MarkdownNode[] | null {
  if (!node.require)
    return null;

  return [
    heading("h2", "Requires"),
    node.require.map((require: string) => paragraph(require)).flat(),
    rule("hyphens")
  ];
}

function transformReturn (node: Node): MarkdownNode[] | null {
  if (!node.return)
    return null;

  return [
    heading("h2", "Returns"),
    code(node.return.type),
    paragraph(node.return.description),
    rule("hyphens")
  ];
}

function transformSee (node: Node): MarkdownNode[] | null {
  if (!node.see)
    return null;

  return [
    heading("h2", "See"),
    node.see.map((seeNode: Node): MarkdownNode => paragraph(seeNode.context.name)),
    rule("hyphens")
  ]
}

function transformSince (node: Node): MarkdownNode[] | null {
  if (!node.since)
    return null;

  return [
    heading("h2", "Since"),
    node.since.map((since: Since) => paragraph(since.version)).flat(),
    rule("hyphens")
  ];
}

function transformThrow (node: Node): MarkdownNode[] | null {
  if (!node.throw)
    return null;

  return [
    heading("h2", "Throws"),
    list("unordered", ...node.throw),
    rule("hyphens")
  ];
}

function transformTodo (node: Node): MarkdownNode[] | null {
  if (!node.todo)
    return null;

  return [
    heading("h2", "Type"),
    list("unordered", ...node.todo),
    rule("hyphens")
  ]
}

function transformType (node: Node): MarkdownNode[] | null {
  if (!node.type)
    return null;

  return [
    heading("h2", "Type"),
    paragraph(node.type),
    rule("hyphens")
  ];
}

function handleNodeField (field: NodeField, node: Node): MarkdownNode[] | null {
  switch (field) {
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
  }

  return null;
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
  handleNodeField
}
