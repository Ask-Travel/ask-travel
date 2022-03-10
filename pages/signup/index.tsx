import { NextPage } from "next";
import styled from "styled-components";
import { Input, InputDiv, LoginForm, SubmitBtn, Title } from "../login";

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const JoinForm = styled(LoginForm)`
  height: 600px;
  gap: 3%;
`;

const SignUp: NextPage = () => {
  return (
    <Wrapper>
      <JoinForm>
        <Title>회원가입</Title>
        <InputDiv>
          <div>아이디</div>
          <Input type="text" placeholder="abcd@naver.com" />
        </InputDiv>
        <InputDiv>
          <div>비밀번호</div>
          <Input
            type="password"
            placeholder="영문자 + 숫자 10자리 이상 입력해주세요."
          />
        </InputDiv>
        <InputDiv>
          <div>
            비밀번호 확인
            <span>일치합니다.</span>
          </div>
          <Input
            type="password"
            placeholder="비밀번호가 일치하는지 체크합니다."
          />
        </InputDiv>
        <InputDiv>
          <div>이름</div>
          <Input type="text" placeholder="이름을 입력해주세요" />
        </InputDiv>
        <InputDiv>
          <div>이메일</div>
          <Input type="email" placeholder="이메일을 입력해주세요." />
        </InputDiv>
        <InputDiv>
          <SubmitBtn>회원가입</SubmitBtn>
        </InputDiv>
      </JoinForm>
    </Wrapper>
  );
};

export default SignUp;
