import { CollectionView } from "./CollectionView";
import { User, IUser } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, IUser> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
