import { USER_TOKEN_KEY, USER_DATA_KEY } from "config/CONSTANTS";
import { getCookie } from "./helpers";

export const isUser = () => {
  if (window !== "undefined") {
    const checkCookie = getCookie(USER_TOKEN_KEY);
    if (checkCookie) {
      let getUser = localStorage.getItem(USER_DATA_KEY);
      return JSON.parse(getUser);
    } else {
      return false;
    }
  }
};
export const isSignedIn = () => {
  if (typeof window == "undefined") {
    return false;
  } else {
    const checkCookie = getCookie(USER_TOKEN_KEY);
    if (checkCookie && checkCookie !== "undefined") {
      return true;
    } else {
      return false;
    }
  }
};
