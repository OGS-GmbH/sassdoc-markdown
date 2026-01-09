import { Command } from "commander";

type Args = {
  out: string
}

// @ts-ignore fsasfasfa
function parseArgs (): Args {
  return new Command()
    .name("sassdoc-markdown")
    .version("0.1.0", "--version")
    .requiredOption("--out <string>", "output path")
    .helpOption("--help")
    .parse()
    .opts()
}

export type {
  Args
}

export {
  parseArgs
}
