import { Config } from "../../../../config/internal/Config.js";
import { BaseLang } from "../../../BaseLang.js";

export class JoinEventLang extends BaseLang {
  welcome(
    tag: string,
    username: string,
    discrim: string,
    memberNumber: string,
    memberNumberEnding: string
  ) {
    const placeholders = {
      tag,
      username,
      memberNumber,
      memberNumberEnding,
      discriminator: discrim,
    };
    return {
      author: {
        name:
          BaseLang.convertPlaceholders(
            Config.Welcome.events.join.author?.name,
            placeholders
          ) ?? "There's supposed to be text here... please tell someone!",
      },
      description: BaseLang.convertPlaceholders(
        Config.Welcome.events.join.description,
        placeholders
      ),
    };
  }
}
