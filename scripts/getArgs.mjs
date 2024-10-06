/**
 * @see https://stackoverflow.com/a/54098693/5378393
 *`
 * @returns {void}
 */
export default function getArgs() {
  return process.argv.reduce((args, arg) => {
    if (arg.slice(0, 2) === "--") {
      // long arg
      const longArg = arg.split("=");
      const longArgFlag = longArg[0].slice(2);
      const longArgValue = longArg.length > 1 ? longArg[1] : true;
      args[longArgFlag] = longArgValue;
    } else if (arg[0] === "-") {
      // flags
      const flags = arg.slice(1).split("");
      flags.forEach((flag) => {
        args[flag] = true;
      });
    }
    return args;
  }, {});
}
