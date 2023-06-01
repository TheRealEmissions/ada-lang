import { APIEmbed } from "discord.js";

export interface IConfig {
  Welcome: {
    events: {
      [key: string]: APIEmbed & { content?: string };
    };
  };
}
