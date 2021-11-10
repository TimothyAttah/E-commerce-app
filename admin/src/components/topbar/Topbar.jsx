import React from 'react';
import styled from 'styled-components';
import { Badge, Avatar } from '@material-ui/core';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

import { images } from '../images';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--bg-white);
`;
export const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TopbarLeft = styled.div`
  .logo{
    font-weight: bold;
    font-size:1.8rem;
    color: darkblue;
    cursor: pointer;
  }
`;
export const TopbarRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TopbarRightIcons = styled.div`
  margin-right: 20px;
  cursor: pointer;
  color: var(--text-gray);
`;
// export const TopbarRight = styled.div`

// `;


export const Topbar = () => {
  return (
    <Container>
      <TopbarWrapper>
        <TopbarLeft>
          <span className='logo'>Store_admin</span>
        </TopbarLeft>
        <TopbarRight>
          <TopbarRightIcons>
            <Badge color="secondary" badgeContent={2}>
            <NotificationsNone />
            </Badge >
          </TopbarRightIcons>
          <TopbarRightIcons>
            <Badge color="secondary" badgeContent={2}>
            <Language />
            </Badge >
          </TopbarRightIcons>
          <TopbarRightIcons>
            <Settings />
          </TopbarRightIcons>
          <Avatar>
            <img src={images.ProPic} alt="" />
          </Avatar>
        </TopbarRight>
      </TopbarWrapper>
    </Container>
  )
}
