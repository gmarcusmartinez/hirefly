export interface IAlert {
  id: string;
  msg: string;
  alertType: string;
  redirect?: string;
}

export interface IChatItem {
  _id: string;
  users: ProfileSubDoc[];
  latestMessage: string;
}

export interface IError {
  message: string;
  field?: string;
}

export interface IJob {
  _id: string;
  creator: string;
  title: string;
  company: string;
  link?: string;
  position: string;
  category: string;
  minSalary: number;
  maxSalary: number;
  city: string;
  country: string;
  imgUrl: string;
  description: string;
  skills: string[];
}

export interface IMessage {
  _id: string;
  chat: string;
  sender: string;
  content: string;
}

export interface INotification {
  _id: string;
  userFrom: {
    firstName: string;
    imgUrl: string;
    lastName: string;
  };
  userTo: string;
  notificationType: 'application:accepted';
  entityId: string;
  createdAt: string;
  opened: boolean;
}

export interface IProfile {
  userId: string;
  imgUrl: string;
  bio: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  gender: string;
  link: string;
  skills: string[];
}

export interface ProfileSubDoc {
  _id: string;
  firstName: string;
  imgUrl: string;
}

export interface IUser {
  _id: string;
  accountStatus: string;
}
