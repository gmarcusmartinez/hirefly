export interface IError {
  message: string;
  field?: string;
}
export interface IUser {
  id: string;
  accountType: string;
  accountStatus: string;
}

enum PositionEnum {
  backend = 'backend developer',
  frontend = 'frontend developer',
  fullstack = 'fullstack developer',
}

enum PeriodEnum {
  fulltime = 'Full-Time',
  parttime = 'Part-Time',
}

export interface IApplicant {
  userId: string;
  avatar: string;
  cv: string;
  description: string;
  firstName: string;
  lastName: string;
  link: string;
  location: string;
  period: PeriodEnum;
  position: PositionEnum;
}
