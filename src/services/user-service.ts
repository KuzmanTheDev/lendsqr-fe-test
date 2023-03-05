import { api } from "utils/apiclient";
import { endpoints } from "utils/endpoints";
import { User } from "services/models/responses/user/user-model";

export class UserService {
  public static async getUsers() {
    try {
      const response = await api.get(endpoints.users);
      return response.data as User[];
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async getUserDetail(id: string): Promise<User> {
    const response = await fetch(endpoints.userDetail(id));
    return response.json();
  }
}
