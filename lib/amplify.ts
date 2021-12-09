import { Auth } from '@aws-amplify/auth';

export const isLoggedIn = async () =>{
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch (_error){
    return false;
  }
};

export const isAdmin = async () =>{
  try {
    const user = await Auth.currentAuthenticatedUser();
    return true;
  } catch (error){
    return false;
  }
};

export const fetchUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error){
    return null;
  }
};

export const login = async (email: string, password: string) => {
  const user = await Auth.signIn({
    username: email,
    password: password
  });
  return user;
};

export const register = async (username: string, email: string, password: string) => {
  return await Auth.signUp({
    username: email,
    password: password,
    attributes: {
      preferred_username: username
    }
  });
};

export const verify = async (username: string, code: string) => {
  return await Auth.confirmSignUp(username, code);
};

export const forgotPassword = async (email: string) => {
  return await Auth.forgotPassword(email);
};

export const confirmForgotPassword = async (username: string, code: string, password: string) => {
  return await Auth.forgotPasswordSubmit(username, code, password);
};