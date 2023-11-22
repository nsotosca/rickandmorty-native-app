import { URL } from "react-native-url-polyfill";

export function getUrlParam(param: string, url: string) {
  const newURL = new URL(url);
  return newURL.searchParams.get(param);
}

export const getBase64 = (url: string, callback: (dataUrl: string) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result as string);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
};
