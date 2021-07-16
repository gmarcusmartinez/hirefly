export interface IProfileForm {
  imgUrl: string;
  firstName: string;
  lastName: string;
  bio?: string;
  cv?: string;
  link?: string;
  location?: string;
}

export interface IJobForm {
  _id?: string;
  category: string;
  company: string;
  description: string;
  duration: number;
  imgUrl: string;
  location: string;
  link: string;
  position: string;
  title: string;
  salary: number;
  skills: string;
}
