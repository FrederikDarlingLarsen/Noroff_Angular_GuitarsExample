import { stagger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { StorageKeys } from '../enums/storage-keys.enum';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _user?: User;

  public get user(): User | undefined {
    return this._user;
  }

  public set user(user: User | undefined){
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User)
   }
}
