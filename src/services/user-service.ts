import { api } from "utils/apiclient";
import { endpoints } from "utils/endpoints";
import { User } from "services/models/responses/user/user-model";

export class UserService {
  public static async getUsers(): Promise<User[]> {
    const response = await api.get(endpoints.users);
    console.log(response);
    return response.data;
  }

  public static async getUserDetail(id: string): Promise<User> {
    const response = await fetch(endpoints.userDetail(id));
    return response.json();
  }
}
