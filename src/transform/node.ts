import { code, heading, paragraph, rule, table, tableCell, tableRow, type TableRowNode, type Node as MarkdownNode, list, link, linebreak } from "@ogs-gmbh/markdown";
import type { Example, Link, Node, NodeField, Parameter, Property, Require, Since } from "../type";
import { transformDefaultHeader } from "./additional";

function transformAccess (node: Node): MarkdownNode[] | null {
  if (!node.access)
    return null;

  return [
    heading("h2", "Access"),
    linebreak("system"),
    paragraph(node.access),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformAlias (node: Node): MarkdownNode[] | null {
  if (!node.alias)
    return null;

  return [
    heading("h2", "Alias"),
    linebreak("system"),
    paragraph(node.alias),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformAuthor (node: Node): MarkdownNode[] | null {
  if (!node.author)
    return null;

  return [
    heading("h2", "Author"),
    linebreak("system"),
    paragraph(node.author),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformContent (node: Node): MarkdownNode[] | null {
  if (!node.content)
    return null;

  return [
    heading("h2", "Content"),
    linebreak("system"),
    paragraph(node.content),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformDeprecated (node: Node): MarkdownNode[] | null {
  if (!node.deprecated)
    return null;

  return [
    heading("h2", "Deprecated"),
    linebreak("system"),
    paragraph(node.deprecated),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformExample (node: Node): MarkdownNode[] | null {
  if (!node.example)
    return null;

  return [
    heading("h2", "Examples"),
    linebreak("system"),
    node.example.map((example: Example) => [
      code(example.code, {
        language: example.type
      })
    ]).flat(),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformGroup (node: Node): MarkdownNode[] | null {
  if (!node.group)
    return null;

  return [
    heading("h2", "Groups"),
    linebreak("system"),
    list("unordered", ...node.group),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformIgnore (node: Node): MarkdownNode[] | null {
  if (!node.ignore)
    return null;

  return [
    heading("h2", "Ignores"),
    linebreak("system"),
    list("unordered", ...node.ignore),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformLink (node: Node): MarkdownNode[] | null {
  if (!node.link)
    return null;

  return [
    heading("h2", "Links"),
    linebreak("system"),
    node.link.map((_link: Link) => link(_link.url, _link.caption)).flat(),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformOutput (node: Node): MarkdownNode[] | null {
  if (!node.output)
    return null;

  return [
    heading("h2", "Output"),
    linebreak("system"),
    paragraph(node.output),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformParameter (node: Node): MarkdownNode[] | null {
  if (!node.parameter)
    return null;

  console.dir(node.parameter);

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
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformProperty (node: Node): MarkdownNode[] | null {
  if (!node.property)
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
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformRequire (node: Node): MarkdownNode[] | null {
  if (!node.require)
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
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformReturn (node: Node): MarkdownNode[] | null {
  if (!node.return)
    return null;

  return [
    heading("h2", "Returns"),
    linebreak("system"),
    code(node.return.type),
    linebreak("system"),
    paragraph(node.return.description),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformSee (node: Node): MarkdownNode[] | null {
  if (!node.see)
    return null;

  return [
    heading("h2", "See"),
    linebreak("system"),
    node.see.map((seeNode: Node): MarkdownNode => paragraph(seeNode.context.name)),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformSince (node: Node): MarkdownNode[] | null {
  if (!node.since)
    return null;

  return [
    heading("h2", "Since"),
    linebreak("system"),
    node.since.map((since: Since) => paragraph(since.version)).flat(),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformThrow (node: Node): MarkdownNode[] | null {
  if (!node.throw)
    return null;

  return [
    heading("h2", "Throws"),
    linebreak("system"),
    list("unordered", ...node.throw),
    rule("hyphens"),
    linebreak("system")
  ];
}

function transformTodo (node: Node): MarkdownNode[] | null {
  if (!node.todo)
    return null;

  return [
    heading("h2", "Type"),
    linebreak("system"),
    list("unordered", ...node.todo),
    rule("hyphens"),
    linebreak("system")
  ]
}

function transformType (node: Node): MarkdownNode[] | null {
  if (!node.type)
    return null;

  return [
    heading("h2", "Type"),
    linebreak("system"),
    paragraph(node.type),
    linebreak("system"),
    rule("hyphens"),
    linebreak("system")
  ];
}

function mapNodeField (field: NodeField, node: Node): MarkdownNode[] | null {
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

function handleNodeFields (fields: NodeField[], node: Node): MarkdownNode[] | null {
  const markdownNodes: MarkdownNode[] = [];

  const headerNodes = transformDefaultHeader(node);

  for (const headerNode of headerNodes) {
    if (headerNode === null)
      continue;

    markdownNodes.push(headerNode);
  }

  for (const field of fields) {
    const currentMarkdownNodes = mapNodeField(field, node);

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
}
