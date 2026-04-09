import { Injectable } from "@angular/core";
import UserDTO from "../dtos/userDTO";

@Injectable({ providedIn: 'root' })
export default class UserModel {
    user?: UserDTO;
}