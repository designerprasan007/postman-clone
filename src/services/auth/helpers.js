import cookie from "js-cookie";

export const setCookie = (key, value, expiry = 1) => {
  if (window !== "undefined") {
    return cookie.set(key, value, {
      expires: expiry,
    });
  }
};

export const removeCookie = (key) => {
  if (window !== "undefined") {
    return cookie.remove(key);
  }
};

export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    return localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key) => {
  if (window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    return localStorage.removeItem(key);
  }
};
