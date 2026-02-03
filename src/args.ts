import { Command } from "commander";

type Args = {
  out: string;
  baseUrl?: string;
  srcDir?: string;
  origin?: string;
};

let args: Args | null = null;

function parseArgs (): Args {
  return new Command()
    .name("sassdoc-markdown")
    .version("0.2.0", "--version")
    .requiredOption("--out <string>", "output path")
    .option("--base-url <string>", "base URL for links in the documentation")
    .option("--origin <string>", "git remote origin name", "origin")
    .option("--src-dir <string>", "source directory path")
    .helpOption("--help")
    .parse()
    .opts();
}

function getArgs (): Args {
  args ??= parseArgs();

  return args;
}

export type {
  Args
};
export {
  args,
  parseArgs,
  getArgs
};
