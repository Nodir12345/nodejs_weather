import chalk from "chalk";
const printErr = (err) => {
  console.log(chalk.bgRed("ERROR ") + " " + err);
};
const printSuc = (suc) => {
  console.log(chalk.bgGreen("SUCCES ") + " " + suc);
};
const printHelp = () => {
  console.log(`
${chalk.bgYellow("HELP")}
-s [CITY] for instal city
-h for help
-t [API_KEY] for saving token
  `);
};



export { printErr, printSuc, printHelp };
