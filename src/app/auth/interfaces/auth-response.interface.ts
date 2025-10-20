import { User } from "./user.interface";

export interface AuthResponse {
  user:  User;
  token: string;
}
export interface RegisterResponse {
  user:  User;
  token: string;
  name:string;
}
