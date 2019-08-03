type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Array<Callback> } = {};
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = handlers.concat(callback);
  };
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => callback());
  };
}
