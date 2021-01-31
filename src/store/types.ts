export interface State {
  token: string;
  userInfo: UserInfo;
  isAdmin: boolean;
}

export interface UserInfo {
  uid: string;
}
