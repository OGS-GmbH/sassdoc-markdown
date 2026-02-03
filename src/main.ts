#!/usr/bin/env node

import process from "node:process";
/* eslint-disable-next-line @tseslint/no-shadow */
import type { Node } from "./type";
import "@ogs-gmbh/stdx";
import { run } from "./run";

if (process.stdin.isTTY) {
  process.stderr.write("No input provided.\n");
  process.exit(1);
}

let stdin: string = "";

for await (const chunk of process.stdin)
  stdin += chunk;

if (!stdin) {
  process.stderr.write("No input provided.\n");
  process.exit(1);
}

const nodes: Node[] = JSON.parse(stdin) as Node[];

run(nodes);
