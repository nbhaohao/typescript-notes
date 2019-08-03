import { IUser, User } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, IUser> {
  template(): string {
    return `
        <div>
            <input placeholder="${this.model.get("name")}" />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetRandomAge,
      "click:.set-name": this.onSetName,
      "click:.save-model": this.onSaveModel
    };
  }

  onSaveModel = (): void => {
    this.model.save();
  };

  onSetRandomAge = (): void => {
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector("input");
    if (input === null) {
      return;
    }
    const newName = input.value;
    this.model.set({ name: newName });
  };
}
