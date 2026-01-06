import yargs from "yargs";

function parseArgs () {
  yargs()
    .scriptName("sassdoc-markdown - SassDoc to Markdown")
    .usage("$0 [options]")
}
