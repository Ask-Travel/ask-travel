import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
`;

const SearchSection = styled.section<{ url: string }>`
  width: 100vw;
  height: 80vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  padding: 120px 0;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBar = styled.input`
  width: 20vw;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  &:focus {
    width: 40vw;
    outline: none;
    text-align: left;
    padding-left: 3%;
  }
`;

const ScheduleSection = styled.section`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 7% 15%;
  gap: 20px;
`;

const SecheduleTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 30px;
  letter-spacing: 2px;
`;
const ScheduleButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #939fa5;
  font-weight: 600;
  color: #323d45;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 15px;
  &:hover {
    color: #ffffff;
    background-color: #2196f3;
  }
`;

const ScheduleInfoDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const InfoBox = styled.div`
  width: 480px;
  height: 480px;
  background-color: aqua;
`;

const BlogSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/resources/image/cloud.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const BlogTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const BlogSlide = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const SlideCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

/* SearchSection Animation 효과 넣어야함 */
const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const inputKeyword = (event: React.FormEvent<HTMLInputElement>) => {
    /* 엔터 입력 시 화면 전환 (검색 페이지로) */
    setKeyword(event.currentTarget.value);
  };
  return (
    <Wrapper>
      <SearchSection url={`/resources/image/back1.png`}>
        어디든 상관없이 떠나고 싶을 때 여행을 묻다가 도와드립니다
        <SearchForm>
          <SearchBar
            ref={searchRef}
            placeholder="키워드를 입력해보세요."
            value={keyword}
            onChange={inputKeyword}
          />
          <SearchIcon
            style={{ position: "absolute", right: 10 }}
            color="disabled"
          />
        </SearchForm>
      </SearchSection>

      <ScheduleSection>
        <SecheduleTitle>
          나만의 여행 일정을 만들어보세요
          <ScheduleButton>
            여행짜기
            <ArrowForwardIcon />
          </ScheduleButton>
        </SecheduleTitle>
        <ScheduleInfoDiv>
          <InfoBox></InfoBox>
          <InfoBox></InfoBox>
          <InfoBox></InfoBox>
          <InfoBox></InfoBox>
        </ScheduleInfoDiv>
      </ScheduleSection>

      <BlogSection>
        <BlogTitle>다른 회원의 여행 일정을 구경해보세요</BlogTitle>
        <BlogSlide>
          <ArrowBackIcon fontSize="large" />
          <SlideCard></SlideCard>
          <SlideCard></SlideCard>
          <SlideCard></SlideCard>
          <ArrowForwardIcon fontSize="large" />
        </BlogSlide>
      </BlogSection>
    </Wrapper>
  );
};

export default Home;
