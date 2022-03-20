interface IUser {
  id: string;
  avatar: string;
  email: string;
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