import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { appWidth } from "../store";

/* 화면 너비를 Atom으로 관리하면서 이를 추적하는 custom hook */
export const useHandleWidth = () => {
  const [width, setWidth] = useRecoilState(appWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};
