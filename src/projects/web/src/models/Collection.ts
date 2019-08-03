import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
export class Collection<T, P> {
  models: Array<T> = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string, private deserialize: (json: P) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch() {
    axios
      .get(`${this.rootUrl}`)
      .then(
        (response: AxiosResponse): void => {
          this.models = response.data.map(
            (item: P): T => this.deserialize(item)
          );
          this.trigger("fetchSuccess");
        }
      )
      .catch(
        (): void => {
          this.trigger("error");
        }
      );
  }
}
