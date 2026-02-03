---
prev: false
next: false
---

# CLI

## Usage

`sassdoc-markdown` can simply be used by your CLI:

```sh
$ sassdoc-markdown
```

## Help

We offer an integrated help command, that'll show you every available argument:

```sh
$ sassdoc-markdown --help
```

The command will produce following output:

```sh
Usage: sassdoc-markdown [options]

Options:
  --version       output the version number
  --out <string>  output path
  --help          display help for command
```

::: info INFO

You can supply an relative path to `--out`, that'll be joined by the current working directory.

:::

`sassdoc-markdown` will analyze the SassDoc output and create the markdown file in path of `--out`.
