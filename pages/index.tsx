import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import FlightIcon from '@mui/icons-material/Flight';
import { spacing } from '@mui/system';
import { Avatar, Button } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import { purple, red } from '@mui/material/colors';

/* 반응형 미디어쿼리 */
const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  scroll-behavior:smooth;
`;

const SearchSection = styled(motion.section)<{ url: string }>`
  width: 100vw;
  height:80vh;  
  position:relative;
  font-size: 2rem;
  font-weight: 600;
  background: url(${(props) => props.url});
  background-size: cover; 
  background-repeat: no-repeat;
  box-shadow: 0.3vh 0.3vh 5vh 2vh rgba(58, 101, 36, 0.7);
  overflow:hidden;
  top:0vh;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction:column;
  text-align: center; 
  position: absolute;  
  width:100%;
  height:20vh;
  top:40vh;
  z-index:1;
`;

const SearchBar = styled(motion.input)`
  width: 20vw;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  text-align: center; 
  align-items: center;
  justify-content:center;
  background-color: rgba(255, 255, 255, 0.5);
  outline: none;
  // &:focus {
  //   width: 40vw;
  //   outline: none;
  //   text-align: left;
  //   padding-left: 3%;
  // }
  position:relative;  
  margin-top:5vh;
`; 

const SearchIconWrapper=styled(motion.div)` 
  width:10%;
  height:10%;
  position:absolute;
  top:50%;
  left:38%;
`;


const Ocean=styled(motion.section)<{ url: string }>`
    width:100%;
    height:100vh; 
    top:0vh;
    background: url(${(props) => props.url});
    background-size: 100%; 
    background-repeat: no-repeat;
    position:absolute;
    `

const OceanVariant={
    start:{
        y:0, 
    },
    end:{
        y:-30,  
        transition:{
          type:"spring",
          duration:1,
          bounce:0.2 
         },
    },
}

const Mt=styled(motion.section)<{url:string}>`
    width:100vw;
    height:100vh;
    top:0vh; 
    position:absolute;
    background: url(${(props) => props.url});
    background-repeat:no-repeat; 
    background-size: 100%; 
`;

const MtVariant={
    top:{
        y:0, 
        transition:{  
         },
    },
    scroll:{
        y:50,  
        transition:{ 
          duration:3, 
         },
    },
}


const Sun=styled(motion.section)<{ url: string }>`
    width:100%;
    height:100%;     
    position:absoulte;
    top:0vh;
    background: url(${(props) => props.url});
    background-repeat:no-repeat; 
    background-size: 100%; 
`;

const SunVariant={
    top:{
        y:50, 
        transition:{
          duration:0.5,
        }
    },
    scroll:{
        y:0,  
        transition:{ 
          duration:5,
         },
    },
}

const Plane=styled(motion.section)<{url:string}>`
  width:100%;
  height:100%;
  position:absoulte;
  top:0vh;
  background: url(${(props) => props.url});
  background-repeat:no-repeat; 
  background-size: 100%; 
  z-index:4;
  opacity:90%;
`
const PlaneVariant={
  start:{
      x:-70, 
  },
  end:{
      x:70,  
      transition:{ 
        duration:6,
        bounce:0.2 
       },
  },
}


const ScheduleSection = styled.section`
  width: 100vw;
  /*height: fit-content;*/ 
  height:100vh; 
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 2% 15%;
  gap: 40px;
  margin-top:10vh;
`;

const SecheduleTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 30px;
  letter-spacing: 2px; 
`;
const ScheduleButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #939fa5;
  font-weight: 600;
  color: #323d45;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 15px;
  &:hover {
    color: #ffffff;
    background-color: #2196f3;
  }
`;
const ScheduleInfoDiv = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // background:red;
  // gap: 30px;
  background: url(${(props) => props.url});
  background-size: 45%; 
  background-repeat: no-repeat;
  position:relative;
  left:30vw;
`;
const InfoBox = styled.div`
  width: 480px;
  height: 480px;
  background-color: aqua;
`;

// const BlogSection = styled.section`
//   width: 100vw;
//   height: 100vh;
//   background: url("/resources/image/cloud.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
// `;

const BlogTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding:50px;
  
`;

const BlogSectionVariant={
  top:{
      y:0, 
      transition:{
        duration:0.5,
      }
  },
  scroll:{
      y:100,  
      transition:{ 
        duration:1,
       },
  },
}
const BlogSlide = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const SlideCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const CardImgDiv = styled.div`
  width: 100%;
  height: 55%;
  padding: 2px;
  background-color: gray;
`;

const CardInfoDiv = styled.div`
  width: 100%;
  height: 45%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  div:first-child {
    height: 45%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
    justify-content: center;
    gap: 5px;
    letter-spacing: 1px;
    span:nth-child(1) {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    span:nth-child(2) {
      font-size: 16px;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    span:nth-child(1) {
      font-size: 22px;
      font-weight: 700;
      line-height: 30px;
    }
    span:nth-child(2) {
      font-size: 16px;
    }
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
`;

const SlideButtonDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8%;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`;

const BlogSection = styled(motion.div)`
cursor:grab; 
margin-left:15vw;
margin-right:15vw;  
height:100vh;
overflow:hidden;
margin-top:15vh;
`;

const Carousel = styled(motion.div)`
display:flex;  
gap:20px;
min-height:38rem; 
`;

const Post=styled(motion.div)`
min-height:38rem;
min-width:23.5rem; 
overflow:hidden;
border-radius: 12px;
background: #ffffff;
box-shadow:  5px -5px 10px #ededed,
             -5px 5px 10px #ffffff;
`;

const InnerPost=styled.div<{url:string}>`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size:cover; 
  height:40%; 
  overflow:hidden;
  border-radius: 12px 12px 0px 0px;
  
`;

const InnerDestination=styled.p`
  font-size:20px;
  font-weight:bold;
  line-height:30px; 
  padding:15px;
  text-align:center; 
`;

const InnerDetail=styled.div`
   
    width:100%;
    height:17vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap:nowrap;
`;

const InnerColumn=styled.div` 
            justify-content: space-around;
            align-items:flex-end;
            width:90%; 
            height:30%;  
            display: flex;
            flex-direction: row; 
            margin-bottom:10px;
`;

const InnerDetailTitle=styled.div`
flex-grow:2; 
width:70%;
height:100%; 
padding:10px;
text-align:center;
font-size:15px;
`;
const InnerAvatar=styled.div`
flex-grow:1; 
width:30%;
height:100%;
padding:5px;     

display:flex;     
`;
const InnerButton=styled.span` 
width: 30%;
height:100%;
padding:10px; 
position:relative;
top:3px;
`;
 
 

const InnerHeart=styled.div` 
width: 20%;
height:100%;
padding:10px;
position:relative;
left:80px;

`; 
 
/* SearchSection Animation 효과 넣어야함 */
const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const inputKeyword = (event: React.FormEvent<HTMLInputElement>) => {
    /* 엔터 입력 시 화면 전환 (검색 페이지로) */
    setKeyword(event.currentTarget.value);
  };
  const testSearch = () => {
    router.push("/search");
  };
  const keywordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("searching");
    router.push("/search");
  };

  const [width,setWidth]=useState(0);
  const carousel=useRef<HTMLDivElement>(null);
  useEffect(()=>{ 
    // if(carousel!=null){
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    // }else{
    //   console.error('carousel NULL');
    // }
}, []);

//scrollY
const { scrollY } = useViewportScroll();
const navAnimation = useAnimation();
useEffect(() => {
  scrollY.onChange(() => {
    if (scrollY.get() > 50) {
      navAnimation.start("top");
    } else {
      navAnimation.start("scroll");
    }
  });
}, [scrollY, navAnimation]);
 


  return (
    <Wrapper>
      <SearchSection url={`/resources/image/sky.png`}  >
     
      <SearchForm onSubmit={keywordSubmit}>
        어디든 떠나고 싶을 때
          <SearchBar
            ref={searchRef}
            placeholder="키워드를 입력해보세요!"
            value={keyword}
            onChange={inputKeyword} 
            initial={{scaleX:0.95}}
            whileHover={{scaleX:1.05}}
          />
          <SearchIconWrapper> 
            <SearchIcon
              //style={{ position: "absolute", right: 10 }}
              color="disabled"
              onClick={testSearch}
            />
          </SearchIconWrapper>
        </SearchForm>
 
        
        <Sun url={`/resources/image/sun.png`} variants={SunVariant} initial="top" animate={navAnimation}></Sun>
        <Ocean url={`/resources/image/bg2.png`}variants={OceanVariant} initial="start" animate="end">
        <Plane url={`/resources/image/plane.png`} variants={PlaneVariant} initial="start" animate="end"/>
        </Ocean>
        <Mt url={`/resources/image/tree.png`} variants={MtVariant} initial="start" animate={navAnimation}></Mt>
 
      </SearchSection>


      <BlogSection ref={carousel}className="carousel" whileTap={{cursor:"grabbing"}} variants={BlogSectionVariant} initial="top" animate={navAnimation}>
        <BlogTitle>다른 회원의 여행을 둘러보세요</BlogTitle>
        <Carousel 
              drag="x" 
              dragConstraints={{ right:0, left:-width}}>
                 <Post>
                      <InnerPost url={`/resources/image/test-la2.jpg`}></InnerPost>
                        <InnerDestination>LOS ANGELES<br/><FlightIcon fontSize="large" color="disabled" transform="rotate(90)" sx={{mt:0.3}}/><br/>TORRONTO</InnerDestination>
                       <InnerDetail> 
                         <InnerColumn> 
                          <InnerDetailTitle>Explore City of Lights..</InnerDetailTitle>
                          <InnerAvatar><Avatar src="/resources/image/avatar1.jpg"  sx={{ width: 30, height: 30}}></Avatar></InnerAvatar>
                        </InnerColumn>
                         
                        <InnerColumn>
                          <InnerHeart><Checkbox color="info" icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></InnerHeart>
                          <InnerButton>
                              <Button>
                                      View  <DoubleArrowIcon/>
                                </Button>
                          </InnerButton>
                        </InnerColumn>
                        </InnerDetail>   
                </Post>

                <Post>
                      <InnerPost url={`/resources/image/test-bali3.jpg`}></InnerPost>
                        <InnerDestination>BALI<br/><FlightIcon fontSize="large" color="disabled" transform="rotate(90)" sx={{mt:0.3}}/><br/>HONOLULU</InnerDestination>
                       <InnerDetail> 
                         <InnerColumn> 
                          <InnerDetailTitle>Wonderful sunset ever!</InnerDetailTitle>
                          <InnerAvatar><Avatar src="/resources/image/avatar2.jpg"  sx={{ width: 30, height: 30}}></Avatar></InnerAvatar>
                        </InnerColumn>

                        <InnerColumn>
                          <InnerHeart><Checkbox color="info" icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></InnerHeart>
                          <InnerButton>
                              <Button>View<DoubleArrowIcon/></Button>
                          </InnerButton>
                        </InnerColumn>
                        </InnerDetail>   
                </Post>

                <Post>
                      <InnerPost url={`/resources/image/test-gm.jpg`}></InnerPost>
                        <InnerDestination>DUSSELDORF<br/><FlightIcon fontSize="large" color="disabled" transform="rotate(90)" sx={{mt:0.3}}/><br/>MILAN</InnerDestination>
                       <InnerDetail> 
                         <InnerColumn> 
                          <InnerDetailTitle>Experience old times</InnerDetailTitle>
                          <InnerAvatar><Avatar src="/resources/image/avatar4.jpg"  sx={{ width: 30, height: 30}}></Avatar></InnerAvatar>
                        </InnerColumn>
                         
                        <InnerColumn>
                          <InnerHeart><Checkbox color="info" icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></InnerHeart>
                          <InnerButton>
                              <Button>
                                      View  <DoubleArrowIcon/>
                                </Button>
                          </InnerButton>
                        </InnerColumn>
                        </InnerDetail>   
                </Post>

                <Post>
                      <InnerPost url={`/resources/image/test-kj.jpg`}></InnerPost>
                        <InnerDestination>SEOUL<br/><FlightIcon fontSize="large" color="disabled" transform="rotate(90)" sx={{mt:0.3}}/><br/>OKINAWA</InnerDestination>
                       <InnerDetail> 
                         <InnerColumn> 
                          <InnerDetailTitle>Quiet moments</InnerDetailTitle>
                          <InnerAvatar><Avatar src="/resources/image/avatar3.jpg"  sx={{ width: 30, height: 30}}></Avatar></InnerAvatar>
                        </InnerColumn>
                         
                        <InnerColumn>
                          <InnerHeart><Checkbox color="info" icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></InnerHeart>
                          <InnerButton>
                          <Button>Plan</Button>
                          </InnerButton>
                        </InnerColumn>
                        </InnerDetail>   
                </Post>
                 <Post/>
                 <Post/>
                 <Post/>
                 <Post/>
                 <Post/>
        </Carousel>
      </BlogSection>


      <ScheduleSection>
        <SecheduleTitle>
          나만의 여행 일정을 만들어보세요
          <Button>
            PLAN  <DoubleArrowIcon/>
          </Button>
          {/* <ScheduleButton>
            여행짜기
            <ArrowForwardIcon />
          </ScheduleButton> */}
        </SecheduleTitle>
 
        {/* <ScheduleInfoDiv url={`/resources/image/samplemap.png`}>
        </ScheduleInfoDiv> */}
      </ScheduleSection>

 

      
            
      {/* <BlogSection>
        <BlogTitle>다른 회원의 여행 일정을 구경해보세요</BlogTitle>
        <BlogSlide>
          <ArrowBackIcon fontSize="large" />
          <SlideCard>
            <CardImgDiv></CardImgDiv>
            <CardInfoDiv>
              <div>
                <span>ILNAM</span>
                <span>오스트레일리아 (Australia)</span>
                <span>2022-02-11 ~ 2022-02-13</span>
              </div>
              <div>
                <span>테스트</span>
                <span>테스트</span>
              </div>
              <div>
                <span>123</span>
                <button>버튼</button>
              </div>
            </CardInfoDiv>
          </SlideCard>
          <SlideCard></SlideCard>
          <SlideCard></SlideCard>
          <ArrowForwardIcon fontSize="large" />
        </BlogSlide>
        <SlideButtonDiv>
          <span>
            전체보기
            <ArrowForwardIcon />
          </span>
        </SlideButtonDiv>
      </BlogSection> */}



    </Wrapper>
  );
};

export default Home;