import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import { JoinEventLang } from "../core/Welcome/events/join/JoinEventLang";

abstract class BaseApp extends Base {
  constructor() {
    super();

    this.Lang = {
      Welcome: {
        events: {
          join: new JoinEventLang(),
        },
      },
    };
  }

  private Lang: {
    Welcome: {
      events: {
        join: JoinEventLang;
      };
    };
  };

  type: Dependency = Dependency.LANG;
  name: string = "Ada Lang";
  load = true;

  abstract init(): Promise<void>;

  // Ensure that you specify the correct dependencies!
  getDependencies(): Dependency[] {
    return [] as Dependency[];
  }

  getLang() {
    return this.Lang;
  }
}

export default BaseApp;
