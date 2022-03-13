import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { ILoginForm } from "../../interface";
import {
  Input,
  InputDiv,
  JoinDiv,
  LoginForm,
  SubmitBtn,
  Title,
  Wrapper,
} from "./login.style";

const LoginPage: NextPage = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onValid = (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <Wrapper>
      <LoginForm onSubmit={handleSubmit(onValid)}>
        <Title>로그인</Title>
        <InputDiv>
          <div>아이디</div>
          <Input
            placeholder="아이디"
            {...register("id", {
              required: "ID를 입력해주세요.",
            })}
          />
        </InputDiv>
        <InputDiv>
          <div>
            비밀번호
            <span>비밀번호 재설정</span>
          </div>
          <Input
            type="password"
            placeholder="비밀번호"
            {...register("pwd", { required: "비밀번호를 입력해주세요." })}
          />
        </InputDiv>
        <InputDiv>
          <SubmitBtn>로그인 하기</SubmitBtn>
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
