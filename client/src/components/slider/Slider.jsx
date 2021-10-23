import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { mobile } from '../../responsive';

import { sliderItems } from '../helper/helper';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({
    display: 'none',
  })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.dir === 'left' && '10px'};
  right: ${props => props.dir === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
`;
const Desc = styled.p`
  text-transform: uppercase;
  margin: 50px 0px;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-size: 1.2rem;
  background: transparent;
  border: 1px solid gray;
`;

export const Slider = () => {
  const [ slideIndex, setSlideIndex ] = useState( 0 );
  const handleClick = (direction) => {
    if ( direction === 'left' ) {
      setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2 );
    } else {
      setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0 );
    }
  };

  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { sliderItems.map( sliderItem => (
          <Slide bg={sliderItem.bg} key={sliderItem.id}>
            <ImageContainer>
              {/* <Image src='https://i.ibb.co./XsdmR2c/1.png' /> */ }
              <Image src={sliderItem.img} alt="" />
            </ImageContainer>
            <InfoContainer>
              <Title> {sliderItem.title}</Title>
              <Desc>
                {sliderItem.desc}
              </Desc>
              <Button>show now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
