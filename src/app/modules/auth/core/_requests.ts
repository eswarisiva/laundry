import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login (email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  }).then((response : any) => {
    return response;
  });
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  });
}


export function postRequest (URL: string, reqBody: any | null) {
  const token = localStorage.getItem('token');
  return axios.post(API_URL+URL, reqBody, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then((response : any) => {
      return response;
    });
}

export function getRequest (URL: string, QUERY : string) {
  const token = localStorage.getItem('token');
  return axios.get(API_URL+URL+QUERY, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then((response : any) => {
      return response;
    });
}

export function patchRequest (URL: string, reqBody: any | null) {
  const token = localStorage.getItem('token');
  return axios.patch(API_URL+URL, reqBody, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    ).then((response : any) => {
      return response;
    });
}

export function deleteRequest(URL: string) {

  const token = localStorage.getItem('token');
  return axios.delete(API_URL+URL, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then((response : any) => {
    return response;
  });
}

