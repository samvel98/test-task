interface IUser {
  id: string;
  avatar: string;
  email: string;
  fullName?: string;
  first_name?: string;
  last_name?: string;
}
interface IUserChild {
  joob: string;
  name: string;
}