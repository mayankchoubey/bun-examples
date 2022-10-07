// Bun.argv contains the unparsed command-line arguments
// This is exactly like process.argv on Node.js
// The first two arguments are 'bun' and 'run'

// If called with bun run command_line_args.js --a 1 --b 2 --c --d e f g

console.log("Program:", Bun.argv[2]);
console.log("Arg 3 onwards:", Bun.argv.slice(3));

// > bun run command_line_args.js --a 1 --b 2 --c --d e f g
// Program: command_line_args.js
// Arg 3 onwards: [ "--a", "1", "--b", "2", "--c", "--d", "e", "f", "g" ]
