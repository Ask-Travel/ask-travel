import { NextPage } from "next";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
`;

const InputDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    margin-left: 5px;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    span {
      color: #0078ff;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  background-color: #fbfbfd;
  border: 1px solid #d7e2eb;
`;

const LoginButton = styled.button`
  display: block;
  height: 40px;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: #0078ff;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: blue;
  }
`;

const JoinDiv = styled.div`
  text-align: center;
  height: 40px;
  font-size: 1.2rem;
  color: #98a8b9;
  span {
    margin-left: 10px;
    color: black;
    font-weight: 600;
    &:hover {
      color: #0078ff;
    }
  }
`;

const LoginPage: NextPage = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Wrapper>
      <LoginForm>
        <Title>로그인</Title>
        <InputDiv>
          <div>이메일</div>
          <Input type="text" placeholder="아이디" />
        </InputDiv>
        <InputDiv>
          <div>
            비밀번호
            <span>비밀번호 재설정</span>
          </div>
          <Input type="text" placeholder="아이디" />
        </InputDiv>
        <InputDiv>
          <LoginButton>로그인 하기</LoginButton>
        </InputDiv>
        <JoinDiv>
          아직 계정이 없으신가요?
          <span>계정 만들기</span>
        </JoinDiv>
      </LoginForm>
    </Wrapper>
  );
};

export default LoginPage;
