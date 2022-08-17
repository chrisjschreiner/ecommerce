import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 375px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image1 = styled.img`
  height: 60%;
  padding-top: 110px;
  padding-left: 100px;
`;

const Image2 = styled.img`
  height: 85%;
  padding-left: 90px;
`;

const Image3 = styled.img`
  height: 80%;
  padding-top: 50px;
  padding-left: 160px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      {/* <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/products/women">
                <Button>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper> */}
      <Wrapper slideIndex={slideIndex}>
        <Slide
          style={{
            backgroundColor: "#f5fafd",
          }}
        >
          <ImgContainer>
            <Image1 src="https://i.ibb.co/Wpxw1yZ/summersaleimagesmaller3.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>ALL PAST SEASON'S GEAR UP TO 75% OFF!</Desc>
            <Link to="/products/women">
              <Button>SHOP NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>

        <Slide
          style={{
            backgroundColor: "#f5fafd",
          }}
        >
          <ImgContainer>
            <Image2 src="https://i.ibb.co/fnxrz3w/karsten-winegeart-1h-HLe-BZy2kk-unsplash-removebg-preview.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>NEW GEAR</Title>
            <Desc>
              GEAR UP FOR WINTER NOW & SAVE UP TO 30% OFF NEW ARRIVALS!
            </Desc>
            <Link to="/products/women">
              <Button>SHOP NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>

        <Slide
          style={{
            backgroundColor: "#fbf0f4",
          }}
        >
          <ImgContainer>
            <Image3 src="https://i.ibb.co/wpwdM1H/sliderimg3-bigger.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>STYLE UP</Title>
            <Desc>
              "DON'T COMPROMISE ON STYLE! GET 35% OFF PURCHASE OF $100 OR MORE!"
            </Desc>
            <Link to="/products/women">
              <Button>SHOP NOW</Button>
            </Link>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
