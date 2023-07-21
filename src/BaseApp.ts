import Base from "ada-file-design";
import { Dependencies, Dependency } from "ada-types";
import { JoinEventLang } from "../core/Welcome/events/join/JoinEventLang.js";
import Events from "ada-events-types";

abstract class BaseApp extends Base {
  constructor() {
    super();

    this.Welcome = {
      events: {
        join: new JoinEventLang(),
      },
    };
  }

  private Welcome: {
    events: {
      join: JoinEventLang;
    };
  };

  getWelcomeLang() {
    return this.Welcome;
  }

  type: Dependency = Dependency.LANG;
  name: string = "Ada Lang";
  load = true;

  abstract init(): Promise<void>;

  @Dependencies.inject(Dependency.EVENTS)
  static Events: typeof Events;
  public getEvents() {
    return BaseApp.Events;
  }

  // Ensure that you specify the correct dependencies!
  getDependencies(): Dependency[] {
    return [Dependency.EVENTS];
  }
}

export default BaseApp;
