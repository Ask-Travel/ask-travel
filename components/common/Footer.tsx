import styled from "styled-components";
// import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 40vh;
  background-color: #f6f6f6;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70vw;
  margin: auto;
  padding: 20px;
`;

const SectionColumn = styled.div`
  display: grid;
  flex-direction: column;
  margin-left: 50px;
  max-width: 30vw;
  min-height: 10vh;
`;

const SectionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, auto));
  //   (grid개수, minmax(최소가로값, 최대가로값))
  // 1fr=남는 자유 공간의 1/3만큼의 크기
  height: 20vh;
  padding: 30px;
`;

const Category = styled.p`
  color: black;
  margin-bottom: 5px;
  font-size: 0.9em;
  text-decoration: none;
  &:hover {
    color: #06c6d4;
    transition: color 0.2s ease-out;
    cursor: pointer;
  }
  //   text-align:center;

  padding: 5px;
`;

const Header = styled.p`
  font-size: 1em;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
  //   text-align:center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 10vh;
  padding: 20px;
  margin-top: 2vh;
  text-align: center;
`;

const BottomInfo = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 10px;
  min-width: 80vw;
  font-size: 0.8em;
`;

const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <SectionRow>
          <SectionColumn>
            <Header>ABOUT</Header>
            <Category>
              {/* <Link to={{}}>ask your travel</Link> */}
              About us
            </Category>
            <Category>Contact</Category>
          </SectionColumn>

          <SectionColumn>
            <Header>COMMUNITY</Header>
            <Category>여행 블로그</Category>
            <Category>동행구하기</Category>
          </SectionColumn>

          <SectionColumn>
            <Header>MY TRIP</Header>
            <Category>여행 일정만들기</Category>
            <Category>나의 여행리스트</Category>
            <Category>마이페이지</Category>
          </SectionColumn>
        </SectionRow>
      </Container>
      <BottomWrapper>
        <Bottom>
          <BottomInfo>
            {" "}
            개인정보 처리방침 | 이용약관 | 사이트맵 | 회사 세부정보{" "}
          </BottomInfo>
        </Bottom>
      </BottomWrapper>
    </Wrapper>
  );
}

export default Footer;
