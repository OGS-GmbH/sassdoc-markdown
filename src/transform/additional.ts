import { code, heading, linebreak, link, paragraph, type Node as MarkdownNode } from "@ogs-gmbh/markdown";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node, Parameter } from "../type";
import { SCSS_LINE_TERMINATOR } from "../utils";
import { getRevisitionHash } from "../git/revision";
import { getOriginUrl } from "../git/origin";
import { getRepositoryUrl, getRepositoryViewUrl, type GetRepositoryUrlResult } from "../git/github";
import { getArgs, type Args } from "../args";
import path from "node:path";

function transformMixinDefaultHeaderExcerpt (node: Node): string {
  let parameters: string = "";

  if (node.parameter !== undefined && node.parameter.length > 0)
    parameters = node.parameter.map((parameter: Parameter) => `$${ parameter.name }`).join(", ");

  return `@${ node.context.type } ${ node.context.name }(${ parameters })${ SCSS_LINE_TERMINATOR }`;
}

function transformFunctionDefaultHeaderExcerpt (node: Node): string {
  let parameters: string = "";

  if (node.parameter !== undefined && node.parameter.length > 0)
    parameters = node.parameter.map((parameter: Parameter) => `$${ parameter.name }`).join(", ");

  return `@${ node.context.type } ${ node.context.name }(${ parameters })${ SCSS_LINE_TERMINATOR }`;
}

function transformVariableDefaultHeaderExcerpt (node: Node): string {
  return `$${ node.context.name }${ SCSS_LINE_TERMINATOR }`;
}

function transformPlaceholderDefaultHeaderExcerpt (): string {
  /* TODO(simonkov): Unclear, needs more precise info */
  return "";
}

function mapDefaultHeaderExcerpt (node: Node): string {
  switch (node.context.type) {
    case "mixin": {
      return transformMixinDefaultHeaderExcerpt(node);
    }

    case "function": {
      return transformFunctionDefaultHeaderExcerpt(node);
    }

    case "variable": {
      return transformVariableDefaultHeaderExcerpt(node);
    }

    case "placeholder": {
      return transformPlaceholderDefaultHeaderExcerpt();
    }
  }
}

function mapDefaultHeaderName (node: Node): string {
  switch (node.context.type) {
    case "function": {
      return `${ node.context.name }()`;
    }

    case "variable": {
      return node.context.name;
    }

    case "mixin": {
      return `${ node.context.name }()`;
    }

    case "placeholder": {
      /* TODO(simonkov): Unclear, needs more precise info */
      return "";
    }
  }
}

function getDefinitionHref (node: Node): string {
  const originURL: URL = getOriginUrl("origin");
  const githubRepositoryUrl: GetRepositoryUrlResult = getRepositoryUrl(originURL);
  const githubRepositoryViewUrl: URL = getRepositoryViewUrl(githubRepositoryUrl);
  const lastRevisionHash: string = getRevisitionHash();
  const args: Args = getArgs();

  const pathSegments: string = path.join(
    lastRevisionHash,
    args.srcDir ?? "",
    `${ node.file.path }#L${ node.context.line.start }`
  );

  return `${ githubRepositoryViewUrl.toString() }/${ pathSegments }`;
}

function getDefinitionAlt (node: Node): string {
  return `${ node.file.name }:${ node.context.line.start }`;
}

/**
 * Transform SassDoc node to default header, used in docs
 * @param node - SassDoc node
 * @returns Array of Markdown nodes
 *
 * @category Transform
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function transformDefaultHeader (node: Node): Array<MarkdownNode | null> {
  return [
    heading("h1", mapDefaultHeaderName(node)),
    linebreak("system"),
    code(
      mapDefaultHeaderExcerpt(node),
      {
        language: "scss",
        isBlock: true
      }
    ),
    paragraph(
      `Defined in: ${
        link(
          getDefinitionHref(node),
          getDefinitionAlt(node)
        ).toString()
      }`
    ),
    linebreak("system"),
    node.description ? paragraph(node.description) : null
  ];
}

export {
  transformDefaultHeader
};
