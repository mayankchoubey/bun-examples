// NPM module yargs (74M weekly downloads) can be used to parse the args
// and get them back in an easy to use structure

const yargs = require("yargs-parser");

const rawArgs = Bun.argv.slice(3);
const args = yargs(rawArgs);
console.log("Unparsed args:", rawArgs);
console.log("Parsed args:", args);

// > bun run command_line_yargs.js --a 1 --b 2 --c --d e f g
// Unparsed args: [ "--a", "1", "--b", "2", "--c", "--d", "e", "f", "g" ]
// Parsed args: { _: [ "f", "g" ], a: 1, b: 2, c: true, d: "e" }
