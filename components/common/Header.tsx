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
  background-color: #e6e3e3;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Logo = styled.span`
  font-size: 30px;
  color: green;
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
      <Logo>여행을 묻다</Logo>
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
