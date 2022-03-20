export const getCurrentUser = () => {
  return sessionStorage.getItem('currentUser');
}

export const setCurrentUser = (currentUser: IUser) => {
  return sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}