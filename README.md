> *We're OGS, check out our work on [github.com/ogs-gmbh](https://github.com/ogs-gmbh)*
  
# SassDoc → Markdown

*`sassdoc-markdown` is a command-line utility to convert your SassDoc documentation to Markdown*

<img src="https://raw.githubusercontent.com/OGS-GmbH/sassdoc-markdown/refs/heads/main/docs/preview.avif" alt="sassdoc-markdown preview" />

*If you like this project, consider giving it a ⭐ to show your support!*<br/>
*It also helps others to discover it.*

<a href="./LICENSE" target="_blank"><img src="https://img.shields.io/github/license/OGS-GmbH/sassdoc-markdown?color=0f434e&logo=hackthebox&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://github.com/OGS-GmbH/sassdoc-markdown/actions/workflows/main-deploy.yml" target="_blank"><img src="https://img.shields.io/github/actions/workflow/status/OGS-GmbH/sassdoc-markdown/main-deploy.yml?color=0f434e&logo=rocket&logoColor=000000&labelColor=ffffff" /></a>
<a href="https://www.npmjs.com/package/@ogs-gmbh/sassdoc-markdown" target="_blank"><img src="https://img.shields.io/npm/v/%40ogs-gmbh%2Fsassdoc-markdown?color=0f434e&logo=npm&logoColor=000000&labelColor=ffffff" /></a>

- **Automated SassDoc Generation**\
  Programmatic extraction of documentation from Sass/SCSS source files based on standardized SassDoc annotations.

- **Comprehensive API Coverage**\
  Documentation support for variables, functions, mixins and placeholders.

- **Structured Documentation Model**\
  Deterministic grouping and ordering of documented entities to ensure reproducibility and consistency.

- **Toolchain Integration**\
  Designed for seamless use in CI/CD pipelines and documentation workflows.

- **Standards-Oriented Design**\
  Alignment with SassDoc annotation conventions and Markdown specification.

## Getting Started

> [!IMPORTANT]
> We're offering an extensive API-Reference covered with in-depth usage examples of this project.

To get a starting point, simply refer to our documentation at [ogs-gmbh.github.io/sassdoc-markdown](https://ogs-gmbh.github.io/sassdoc-markdown).

## Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

## Installation

Using npm:
```sh
$ npm install -D @ogs-gmbh/sassdoc-markdown
```

<details>
  <summary>Using a different package managers?</summary>
  <br/>
  
  Using yarn:
  ```sh
  $ pnpm add -D @ogs-gmbh/sassdoc-markdown
  ```
  
  Using pnpm:
  ```sh
  $ pnpm add -D @ogs-gmbh/sassdoc-markdown
  ```
  
  Using bun:
  ```sh
  $ bun add -D @ogs-gmbh/sassdoc-markdown
  ```

</details>

## CLI

```sh
$ sassdoc-markdown --help
```

The command will produce following output:

```
Usage: sassdoc-markdown [options]

Options:
  --version       output the version number
  --out <string>  output path
  --help          display help for command
```

> [!NOTE]
> You can supply an relative path to `--out`, that'll be joined by the current working directory.

`sassdoc-markdown` will analyze the SassDoc output and create the markdown file in path of `--out`.

## License

The MIT License (MIT) - Please have a look at the [LICENSE file](./LICENSE) for more details.

## Contributing
Contributions are always welcome and greatly appreciated. Whether you want to report a bug, suggest a new feature, or improve the documentation, your input helps make the project better for everyone.

Feel free to submit a pull request, issue or feature request.

### Issues and Feature Requests
Reporting an issue or creating a feature request is made by creating a new issue on this repository.

You can create a [new issue or feature request here](../../issues/new/choose).

### Pull Requests
GitHub offers a solid guideline for contributing to open source projects through pull requests, covering key practices. These best practices provide a reliable starting point for making effective contributions.

You can find the [guidelines here](https://docs.github.com/get-started/exploring-projects-on-github/contributing-to-a-project).

### Code Of Conduct
We are committed to keeping a welcoming, inclusive, and respectful community for everyone. To help us achieve this, we kindly ask that you adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Disclaimer

All trademarks and registered trademarks mentioned are property of their respective owners and are used for identification purposes only. Use of these names does not imply endorsement or affiliation.

This project is a trademark of OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH. The License does not grant rights to use the trademark without permission.

---

<a href="https://www.ogs.de/en/">
  <picture>
    <source
      srcset="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/light.svg"
      media="(prefers-color-scheme: dark)"
    />
    <img height="64" alt="OGS Logo" src="https://raw.githubusercontent.com/OGS-GmbH/.github/refs/tags/v1.0.0/docs/assets/logo/dark.svg"
  </picture>
</a>

<p>OGS Gesellschaft für Datenverarbeitung und Systemberatung mbH</p>

[Imprint](https://www.ogs.de/en/imprint/) | [Contact](https://www.ogs.de/en/contact/) | [Careers](https://www.ogs.de/en/about-ogs/#Careers)
