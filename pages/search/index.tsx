import { GetServerSideProps } from "next";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Container = styled.div`
  max-width: 80%;
  /* min-width: 600px; */
  /* height: 100vh; */
  margin: 0 auto;
  padding-top: 120px;
`;

const SearchSection = styled.section`
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  border-bottom: 1px solid #e5e5e5;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
    height: auto;
    border-bottom: none;
    gap: 20px;
  }
`;

const KeywordBox = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 1.6rem;
    width: fit-content;
  }
  span {
    width: fit-content;
    height: 35px;
    padding: 10px;
    font-size: 1.3rem;
    border: 1px solid #e5e5e5;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    height: auto;
  }
`;

const SearchForm = styled.form`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 5%;
  &:focus {
    outline: none;
    text-align: left;
  }
`;

const ListSection = styled.section`
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  gap: 15px;
  row-gap: 15px;
  @media screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

const PlaceCard = styled.div`
  width: 360px;
  height: 400px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const Search = (props: GetServerSideProps) => {
  const tempKeyword = ["여행", "관광", "레스토랑", "자연", "카페"];
  const tempList = [1, 2, 3, 4, 5, 6, 7];
  const [keyword, setKeyword] = useState("");
  const inputKeyword = (event: React.FormEvent<HTMLInputElement>) => {
    /* 엔터 입력 시 화면 전환 (검색 페이지로) */
    setKeyword(event.currentTarget.value);
  };
  console.log(props);
  return (
    <Container>
      <SearchSection>
        <KeywordBox>
          <h1>인기 TOP 10 : </h1>
          {tempKeyword.map((keyword, index) => (
            <span key={index}>{keyword}</span>
          ))}
        </KeywordBox>
        <SearchForm>
          <SearchBar
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
      <ListSection>
        {tempList.map((item) => (
          <PlaceCard>{item}</PlaceCard>
        ))}
      </ListSection>
    </Container>
  );
};

export function getServerSideProps() {
  return {
    props: {
      props: "console",
    },
  };
}

export default Search;
