import Getargs from "./helpers/args.js";
import {
  getKeyvalue,
  SaveStorege,
  TOKEN_DICTINORY,
} from "./servises/storege.js";
import { printErr, printSuc, printHelp } from "./servises/servies.js";
import { Get_weather } from "./servises/api.js";
const savetoken = async (token) => {
  try {
    if (!token.length) {
      printErr("Token doesn't exsist");
      return;
    }
    await SaveStorege(TOKEN_DICTINORY.token, token);
    printSuc("token was saved");
  } catch (error) {
    printErr(error);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printErr("cITY doesn't exsist");
    return;
  }
  try {
    await SaveStorege(TOKEN_DICTINORY.city, city);
    printSuc("CIty was saved");
  } catch (error) {
    printErr(error);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyvalue(TOKEN_DICTINORY.city));
    const respons = await Get_weather(city);
    console.log(respons);
  } catch (error) {
    if (error?.respons?.status == 404) {
      printErr("City not found");
    } else if (error?.respons?.status == 401) {
      printErr("INVALID PASWORD");
    } else {
      printErr(error.message);
    }
  }
};
const start = () => {
  const args = Getargs(process.argv);
  if (args.h) {
    printHelp();
  }

  if (args.s) {
    saveCity(args.s);
  }
  if (args.t) {
    return savetoken(args.t);
  }

  getForcast();
};

start();
