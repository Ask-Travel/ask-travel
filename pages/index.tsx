import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { clearInterval } from "timers";
import getIndexImage from "../utils/getIndexImage";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
`;

const SearchSection = styled.div<{ url: string }>`
  width: 100vw;
  height: 80vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  padding: 100px 0;
  /* color: black; */
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Home: NextPage = () => {
  const [index, setIndex] = useState(1);
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     console.log("interval");
  //     setIndex((prev) => (prev !== 3 ? prev + 1 : 1));
  //   }, 7000);
  //   return () => clearInterval(timer);
  // }, [index]);
  // setInterval(() => {
  //   setIndex((prev) => {
  //     return prev === 3 ? 1 : prev + 1;
  //   });
  //   console.log("interval");
  // }, 10000);
  const url = `/resources/image/back${index}.png`;
  console.log("rendering");
  return (
    <Wrapper>
      <SearchSection
        url={url}
        style={
          {
            //background: `url(/resources/image/${getIndexImage(index)})`,
            //backgroundSize: "cover",
            //backgroundRepeat: "no-repeat",
          }
        }
      >
        어디든 상관없이 떠나고 싶을 때 여행을 묻다가 도와드립니다.
      </SearchSection>
    </Wrapper>
  );
};

export default Home;
