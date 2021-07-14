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
  category: string;
  company: string;
  description: string;
  duration: number;
  imgUrl: string;
  link: string;
  location: string;
  position: string;
  salary: number;
  skills: string;
  title: string;
}

export interface IMessage {
  _id: string;
  chat: string;
  sender: string;
  content: string;
}

export interface INotification {
  _id: string;
  userFrom: string;
  userTo: string;
  notificationType: string;
  entityId: string;
  createdAt: string;
}

export interface IProfile {
  userId: string;
  avatar: string;
  cv: string;
  bio: string;
  description: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
}

export interface ProfileSubDoc {
  _id: string;
  firstName: string;
  avatar: string;
}

export interface IUser {
  _id: string;
  accountStatus: string;
}
