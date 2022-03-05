import styled from "styled-components";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

const Wrapper = styled.header`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const LogoImg = styled.img`
  width: 180px;
  height: 50px;
  margin-left: 3%;
`;

const UserInterface = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  gap: 15px;
`;

const UserBedge = styled.span`
  height: 35px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    background-color: #bfc5c9;
  }
`;

function Header() {
  return (
    <Wrapper>
      <LogoImg src="resources/image/logo.png" alt="여행을묻다_로고" />
      <UserInterface>
        <span>누구님, 여행을 즐겨보세요.</span>
        <NotificationsActiveIcon color="secondary" />
        <UserBedge>
          <MenuIcon />
          <PersonIcon />
        </UserBedge>
      </UserInterface>
    </Wrapper>
  );
}

export default Header;
