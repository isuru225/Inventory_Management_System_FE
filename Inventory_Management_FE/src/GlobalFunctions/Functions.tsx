import { useNavigate } from "react-router-dom";
import moment from "moment";

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

interface ITokenAttributes {
  [key: string]: any;
  sub: string | null,
  name: string | null,
  jti: string | null,
  userId: string | null,
  fullName: string | null,
  role: string | null,
  exp: Date | null,
  iss: URL | null,
  aud: URL | null
}

export const getAttributesFromToken = (requestedAttributes: Array<string>): ITokenAttributes => {
  const tokenAttribute: ITokenAttributes =
  {
    sub: null,
    name: null,
    jti: null,
    userId: null,
    fullName: null,
    role: null,
    exp: null,
    iss: null,
    aud: null
  }
  if (!IsTokenExpiredOrMissingChecker()) {
    const encodedValue = localStorage.getItem('token');
    if (encodedValue !== null) {
      const decodedPayload = JWTDecoder(encodedValue);
      requestedAttributes?.forEach((attribute: string)=>{
        tokenAttribute[attribute] = decodedPayload[attribute];
      })
      return tokenAttribute;

    } else {
      return tokenAttribute;
    }

  } else {
    return tokenAttribute;
  }
}

export const DateFormatter = (date: string): string => {
  return moment(date).format("YYYY/MM/DD, h:mm A");
}