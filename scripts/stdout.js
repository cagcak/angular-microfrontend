const signal = "--";
const outputs = {
  start: `Run the following scripts on seperated terminal sessions; \nyarn start:mf:header, yarn start:mf:content, yarn start:mf:footer, and yarn start:shell\nor just run: yarn start:all`,
};

const flag = (process.argv || [])
  .filter((arg) => arg.includes(signal))
  .reduce((_, curr) => curr, [])
  .replace(signal, "");

const output = outputs[flag];

if (!output) {
  throw new Error(
    `No output defined for ${flag}. Define one as a key-value pair`
  );
}

console.warn("\x1b[33m%s\x1b[0m", output);
process.exit(0);
