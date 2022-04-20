interface IUser {
  name?: string;
  id: string;
  surname?: string;
  email: string;
  phone?: string;
  dob?: string;
  gender?: string;
  image?: string;
  confirmed?: boolean;
}
interface IUserChild {
  joob: string;
  name: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  matches?: IEmployee[];
}

interface IEmployee {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  department: string;
  job_title: string;
  country: string;
  city: string;
}