export const getToken = (): string => {
  return sessionStorage.getItem('token') || '';
}

export const setToken = (userToken: string) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}