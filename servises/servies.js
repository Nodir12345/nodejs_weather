import chalk from "chalk";
import dedent from "dedent-js";
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

const printweather = (response, icon) => {
  console.log(dedent`
  ${chalk.bgBlueBright("WHETHER")} City wether ${response.name} ${icon} ${
    response.weather[0].description
  }
  Tempruture: ${response.main.temp} 
  feels like : ${response.main.feels_like}
  Humidity : ${response.main.humidity}%
Wind speed : ${response.wind.speed}
  
  `);
};

export { printErr, printSuc, printHelp , printweather };
