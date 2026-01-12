#!/usr/bin/env node

import process from "node:process";
import { parseArgs, type Args } from "./args";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node } from "./type";
import "@ogs-gmbh/stdx";
import { run } from "./run";

const args: Args = parseArgs();

if (process.stdin.isTTY) {
  process.stderr.write("No input provided.\n");
  process.exit(1);
}

let stdin: string = "";

for await (const chunk of process.stdin)
  stdin += chunk;

stdin = stdin.split("\n")
  .slice(4)
  .join("\n");

if (!stdin) {
  process.stderr.write("No input provided.\n");
  process.exit(1);
}

const nodes: Node[] = JSON.parse(stdin) as Node[];

run(nodes, args.out);
