import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { ISignUp } from "../../interface";
import { Input, InputDiv, SubmitBtn, Title } from "../login/login.style";
import { Error, JoinForm, Wrapper } from "./signUp.style";

const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUp>();
  const onValid = (data: ISignUp) => {
    if (data.pwd !== data.checkPwd) {
      setError(
        "checkPwd",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
  };
  return (
    <Wrapper>
      <JoinForm onSubmit={handleSubmit(onValid)}>
        <Title>회원가입</Title>
        <InputDiv>
          <div>
            아이디
            {errors.id && <Error>{errors.id?.message}</Error>}
          </div>
          <Input
            placeholder="ID를 입력해주세요."
            {...register("id", {
              required: "ID를 입력해주세요.",
              minLength: {
                value: 7,
                message: "7글자 이상 입력해주세요.",
              },
              maxLength: {
                value: 15,
                message: "ID는 최대 15자입니다.",
              },
            })}
          />
        </InputDiv>

        <InputDiv>
          <div>
            비밀번호
            {errors.pwd && <Error>{errors.pwd.message}</Error>}
          </div>
          <Input
            type="password"
            placeholder="영문자 + 숫자 10자리 이상 입력해주세요."
            {...register("pwd", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 5,
                message: "5글자 이상 입력해주세요.",
              },
              maxLength: {
                value: 12,
                message: "12자 이하로 입력해주세요.",
              },
              pattern: {
                value: /^[0-9a-z]+$/,
                message: "비밀번호는 숫자와 영문자만 입력 가능합니다.",
              },
            })}
          />
        </InputDiv>
        <InputDiv>
          <div>
            비밀번호 확인
            {errors.checkPwd && <Error>{errors.checkPwd.message}</Error>}
          </div>
          <Input
            type="password"
            placeholder="비밀번호가 일치하는지 체크합니다."
            {...register("checkPwd", {
              required: "비밀번호를 확인해주세요.",
            })}
          />
        </InputDiv>
        <InputDiv>
          <div>
            이름
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>
          <Input
            placeholder="이름을 입력해주세요"
            {...register("name", {
              required: "이름을 입력해주세요",
              minLength: {
                value: 1,
                message: "이름은 한글자 이상 입력 가능합니다.",
              },
            })}
          />
        </InputDiv>
        <InputDiv>
          <div>
            이메일
            {errors.email && <Error>{errors.email.message}</Error>}
          </div>
          <Input
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value:
                  /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                message: "이메일을 형식에 맞게 입력해주세요.",
              },
            })}
          />
        </InputDiv>
        <InputDiv>
          <SubmitBtn>회원가입</SubmitBtn>
        </InputDiv>
      </JoinForm>
    </Wrapper>
  );
};

export default SignUp;
