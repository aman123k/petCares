export interface UserRegistrationData {
  username: string;
  email: string;
  password: string;
  picture: string;
  registerType: string[];
}
export interface UseRegisterProps {
  url: string;
  data: UserRegistrationData;
}
export interface UserLoginData {
  username: string;
  email: string;
}
export interface UserUpadteData {
  image: string;
  userName: string;
}
export interface UserUpadteAditonalData {
  image: string;
  name: string;
}
export interface userUpdateProp {
  url: string;
  data: UserUpadteData | UserUpadteAditonalData;
}
export interface UserLoginProps {
  url: string;
  userInfo: UserLoginData;
}

export type MyFunctionType = () => void;

export type User = {
  username: string;
  email: string;
  password: string;
  picture: string;
  registerType: string[];
  loginType: string;
};

export type Characteristics = {
  petName: string;
  petAge: number;
  petSize: string;
  petColor: string;
  petSex: string;
  petBreed: string;
};
