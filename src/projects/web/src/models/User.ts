import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { BASE_URL } from "../api";
import { Attributes } from "./Attributes";
import { Model, ModelAttributes, ModelSync } from "./Model";
import { Collection } from "./Collection";

export interface IUser {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<IUser> {
  static rootUrl: string = `${BASE_URL}/users`;
  static GenerateUserWithApiSync(data: IUser): User {
    return new User(
      data,
      new Eventing(),
      new ApiSync(User.rootUrl),
      new Attributes(data)
    );
  }
  static GenerateUserCollection(): Collection<User, IUser> {
    return new Collection<User, IUser>(
      User.rootUrl,
      User.GenerateUserWithApiSync
    );
  }
  constructor(
    data: IUser,
    events: Eventing,
    sync: ModelSync<IUser>,
    attributes: ModelAttributes<IUser>
  ) {
    super(events, sync, attributes);
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
