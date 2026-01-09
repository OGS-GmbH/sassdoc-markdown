# Programatically

## Usage

As another public API, `sassdoc-markdown` can be called by your own script. If you're unsure about parts of the API, keep in mind, that you can always consult the [references](/references) for detailed documentation.

Here is an example with usage of [`run`]();

```ts [example-script.ts]
import { run, type Node } from "@ogs-gmbh/sassdoc-markdown";

// Do something...

const nodes: Node[] = previousCalls;
const out: string = "./dist/sassdoc-markdown";

run(nodes, out);
```

## Transform

If you plan to transform SassDoc's output partially by yourself or you want to make use of our transform-functions, here is an example with usage of [`transformAuthor`](/reference/functions/transformAuthor):

Since we internally use [`@ogs-gmbh/markdown`](https://github.com/OGS-GmbH/markdown), you can also make use of it for getting fine-grained control.

```ts [example-script.ts]
import { transformAuthor, type Node } from "@ogs-gmbh/sassdoc-markdown";
import { define } from "@ogs-gmbh/markdown";

const node: Node = previousCalls;
const authorMarkdown = transformAuthor(node);

const markdown = define(
  ...authorMarkdown
).toString();

// Use your markdown here
```
