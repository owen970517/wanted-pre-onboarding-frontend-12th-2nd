import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const AdBanner = () => {
  return(
    <Wrapper>
      <Link to="https://www.wanted.co.kr/" target='_blank'>
        <AdvertisementImg src="https://media.discordapp.net/attachments/1143474691118485558/1146132601518686371/ad_image.png?width=1440&height=230" alt='Ad'/>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AdvertisementImg = styled.img`
  width: 100%;
`
export default AdBanner;