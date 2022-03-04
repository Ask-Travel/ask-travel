import { atom } from "recoil";

export const appWidth = atom({
  key: "AppWidth",
  default: window.innerWidth,
});
