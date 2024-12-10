import { useNavigate } from "react-router-dom";

export const JWTDecoder = (token: any) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const IsTokenExpiredOrMissingChecker = () => {

  const token = localStorage.getItem('token');
  if (token !== null) {
    try {
      const decodedToken = JWTDecoder(token);
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decodedToken.exp < currentTime; // true if token is expired
    } catch (error) {
      console.error('Invalid token', error);
      return true; // Consider invalid tokens as expired
    }
  } else {
    return true;// true if token is missing
  }

}