import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../helper/helper';
import {
  Container, Arrow, Wrapper,
  Slide, ImageContainer, InfoContainer,
  Image, Desc, Button, Title
} from './SliderStyles';

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
          <Slide bg={sliderItem.bg} key={sliderItem._id}>
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
