export interface IError {
  message: string;
  field?: string;
}
export interface IUser {
  id: string;
  accountStatus: string;
}

enum PositionEnum {
  backend = 'backend',
  frontend = 'frontend',
  fullstack = 'fullstack',
}

enum PeriodEnum {
  fulltime = 'Full-Time',
  parttime = 'Part-Time',
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
  period: PeriodEnum;
  position: PositionEnum;
}
