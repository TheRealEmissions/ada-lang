import { Config } from "../../../../config/internal/Config.js";
import { Defaults } from "../../../../config/internal/Defaults.js";
import { BaseLang } from "../../../BaseLang.js";

export class JoinEventLang extends BaseLang {
  @BaseLang.convertAllPlaceholders()
  welcome(
    tag: string,
    username: string,
    discrim: string,
    memberNumber: string,
    memberNumberEnding: string,
    avatarUrl?: string
  ) {
    const placeholders = {
      tag,
      username,
      member_number: memberNumber,
      member_number_ending: memberNumberEnding,
      discriminator: discrim,
      avatar_url: avatarUrl ?? Defaults.embed.thumbnail.url,
    };
    return {
      author: {
        name:
          Config.Welcome.events.join.author?.name ??
          "There's supposed to be text here... please tell someone!",
      },
      description: Config.Welcome.events.join.description,
      thumbnail: {
        url:
          Config.Welcome.events.join.thumbnail?.url ??
          Defaults.embed.thumbnail.url,
      },
      placeholders,
    };
  }
}
