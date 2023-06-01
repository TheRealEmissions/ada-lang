import { APIEmbed } from "discord.js";

export type EmbedData = APIEmbed & { content?: string };
export abstract class BaseLang implements IBaseLang {
  [key: string]: (...args: any) => EmbedData;
  static convertPlaceholders(
    content: string | undefined,
    placeholders: { [key: string]: string }
  ) {
    if (!content) return undefined;
    for (const [key, value] of Object.entries(placeholders)) {
      content = content.replaceAll(`%${key}%`, value);
    }
    return content;
  }
}

export interface IBaseLang {
  [key: string]: (...args: any) => EmbedData;
}
