import React from 'react'
import { StyledHomeHeader } from './styles';
import useWindowDimensions from '../../../../hook/useWindowDimensions';
import NavBar from '../../../molecules/NavBar';
import { If } from '../../../atoms/if';
import useDeviceDetect from '../../../../hook/useDeviceDetect';
import dataSlider from '../../../../api/slides';
import ImagesCarousel from '../../../molecules/ImagesCarousel';

function HomeHeader() {
  const { width } = useWindowDimensions()
  const { isMobile } = useDeviceDetect()

  const heightProps = width / 1.8;
  
  return (
    <StyledHomeHeader>
      <If 
        condition={isMobile}
        render={() => (
          <>
            <ImagesCarousel dataSlider={dataSlider} width={width}  />
            <NavBar heightProps={heightProps} />     
          </>
        )}
        renderElse={() => (
          <>
            <NavBar heightProps={true} />     
            <ImagesCarousel dataSlider={dataSlider} width={width}  />
          </>
        )}
      />
    </StyledHomeHeader>
  )
}

export default HomeHeader