import FS from "fs-extra-promise";
import YAML from "yaml";
import { fileURLToPath } from "node:url";
import { IDefaults } from "./interfaces/IDefaults.js";

const config = YAML.parse(
  FS.readFileSync(
    fileURLToPath(new URL("../Defaults.yml", import.meta.url)),
    "utf8"
  )
);

export const Defaults: IDefaults = config;
