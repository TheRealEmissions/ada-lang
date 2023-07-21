import { APIEmbed } from "discord.js";

export type EmbedData = APIEmbed & {
  content?: string;
  placeholders?: { [key: string]: string };
};
export abstract class BaseLang implements IBaseLang {
  [key: string]: (...args: any) => EmbedData;
  private static convertPlaceholders(
    content: string | undefined,
    placeholders: { [key: string]: string }
  ) {
    if (!content) return undefined;
    for (const [key, value] of Object.entries(placeholders)) {
      content = content.replaceAll(`%${key}%`, value);
    }
    return content;
  }

  public static convertAllPlaceholders() {
    return (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) => {
      const originalMethod = descriptor.value;
      descriptor.value = (...args: any[]) => {
        const embed = originalMethod.apply(this, args);
        if (embed.placeholders) {
          return this.convertEmbedPlaceholders(embed, embed.placeholders);
        }
        return embed;
      };
      return descriptor;
    };
  }

  private static convertEmbedPlaceholders(
    embed: EmbedData,
    placeholders: { [key: string]: string }
  ) {
    if (embed.author?.name) {
      embed.author.name = BaseLang.convertPlaceholders(
        embed.author.name,
        placeholders
      ) as string;
    }
    if (embed.content) {
      embed.content = BaseLang.convertPlaceholders(
        embed.content,
        placeholders
      ) as string;
    }
    if (embed.description) {
      embed.description = BaseLang.convertPlaceholders(
        embed.description,
        placeholders
      ) as string;
    }
    if (embed.fields && embed.fields.length > 0) {
      for (const field of embed.fields) {
        field.name = BaseLang.convertPlaceholders(
          field.name,
          placeholders
        ) as string;
        field.value = BaseLang.convertPlaceholders(
          field.value,
          placeholders
        ) as string;
      }
    }
    if (embed.footer?.text) {
      embed.footer.text = BaseLang.convertPlaceholders(
        embed.footer.text,
        placeholders
      ) as string;
    }
    if (embed.title) {
      embed.title = BaseLang.convertPlaceholders(
        embed.title,
        placeholders
      ) as string;
    }
    return embed;
  }
}

export interface IBaseLang {
  [key: string]: (...args: any) => EmbedData;
}
