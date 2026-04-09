import { environmentDev as env } from "../enviroment/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import UserDTO from "../model/dtos/userDTO";

@Injectable({ providedIn: 'root' })
export default class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserDTO[]>(env.usersUrl);
  }

  getById(id: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${env.apiUrl}/${id}`);
  }
}