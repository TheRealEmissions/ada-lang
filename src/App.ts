import { GeneralEvents } from "ada-events-types";
import BaseApp from "./BaseApp.js";

class App extends BaseApp {
  constructor() {
    super();
  }

  async init(): Promise<void> {
    this.getEvents()
      .getEventEmitter()
      .emit(GeneralEvents.INFO, "Ada Lang loaded");
  }
}

export default App;
