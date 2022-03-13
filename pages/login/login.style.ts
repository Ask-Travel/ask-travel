import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 2px;
`;

export const InputDiv = styled.div`
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

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  background-color: #fbfbfd;
  border: 1px solid #d7e2eb;
  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
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

export const JoinDiv = styled.div`
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
