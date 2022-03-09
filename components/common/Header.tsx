import styled from "styled-components";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Wrapper = styled(motion.header)`
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const LogoImg = styled.img`
  width: 180px;
  height: 50px;
  margin-left: 3%;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 90px;
    height: 25px;
  }
`;

const UserInterface = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  gap: 15px;
`;

const NoLoginInterface = styled.div`
  display: flex;
  width: 12%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 3%;
  @media screen and (max-width: 600px) {
    width: 30%;
  }
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

const MemberButton = styled.span`
  width: fit-content;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 2%;
  cursor: pointer;
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(255,255,255,0)",
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,1)",
  },
};

function Header() {
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);
  const goHome = () => {
    router.push("/");
  };
  return (
    <AnimatePresence>
      <Wrapper variants={navVariants} animate={navAnimation} initial="top">
        <LogoImg
          src="resources/image/logo.png"
          alt="여행을묻다_로고"
          onClick={goHome}
        />
        {isLogin ? (
          <UserInterface>
            <span>누구님, 여행을 즐겨보세요.</span>
            <NotificationsActiveIcon color="secondary" />
            <UserBedge>
              <MenuIcon />
              <PersonIcon />
            </UserBedge>
          </UserInterface>
        ) : (
          <NoLoginInterface>
            <Link href="/login">
              <MemberButton>로그인</MemberButton>
            </Link>
            <MemberButton>회원가입</MemberButton>
          </NoLoginInterface>
        )}
      </Wrapper>
    </AnimatePresence>
  );
}

export default Header;
