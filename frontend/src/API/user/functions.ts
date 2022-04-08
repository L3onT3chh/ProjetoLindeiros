import Users from "assets/data/user";
import { IUser } from "interfaces/IfaceProps";

export function createUser(user: IUser, users: IUser[]) {
  const { id, ...userSave } = user;

  users.push({
    id: Users.length + 1,
    ...userSave,
  });

  return { id: id + 1, userSave };
}

export function deleteUser(id: number, users: IUser[]) {
  const dataUser = users.filter((user) => user.id !== id);
  return dataUser;
}
