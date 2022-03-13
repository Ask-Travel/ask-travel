import styled from "styled-components";
import { LoginForm } from "../login/login.style";

export const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const JoinForm = styled(LoginForm)`
  height: 600px;
  gap: 3%;
`;

export const Error = styled.span`
  font-size: 1.2rem;
  color: red;
`;
