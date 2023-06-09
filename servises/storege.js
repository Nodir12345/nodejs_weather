import os from "os";
import path from "path";
import fs from "fs";
const FilePath = path.join(os.homedir(), "weather-data.json");

const TOKEN_DICTINORY = {
  token : "token",
  city : "city"
}
console.log(FilePath);
const SaveStorege = async (key, value) => {
  let data = {};
  if (await isExist(FilePath)) {
    const file = await fs.promises.readFile(FilePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await fs.promises.writeFile(FilePath, JSON.stringify(data));
};

const getKeyvalue = async (key) => {
  if (await isExist(FilePath)) {
    const file = await fs.promises.readFile(FilePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined
};

const isExist = async (path) => {
  try {
    await fs.promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { SaveStorege, getKeyvalue , TOKEN_DICTINORY};
