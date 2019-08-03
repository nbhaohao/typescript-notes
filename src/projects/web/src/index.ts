import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { IUser, User } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: IUser): User => {
    return User.GenerateUserWithApiSync(json);
  }
);

users.on("fetchSuccess", () => {
  const root = document.querySelector("#root");
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
