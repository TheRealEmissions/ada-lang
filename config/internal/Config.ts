import YAML from "yaml";
import FS from "fs-extra-promise";
import { fileURLToPath } from "node:url";
import { IConfig } from "./interfaces/IConfig.js";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Config.yml", import.meta.url)),
    "utf8"
  )
);

export const Config: IConfig = config;
