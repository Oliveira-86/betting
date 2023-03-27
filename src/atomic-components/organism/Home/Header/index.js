import React from 'react'
import { StyledHomeHeader } from './styles';
import useWindowDimensions from '../../../../hook/useWindowDimensions';
import NavBar from '../../../molecules/NavBar';
import { If } from '../../../atoms/if';
import useDeviceDetect from '../../../../hook/useDeviceDetect';
import dataSlider from '../../../../api/slides';
import Carousel from '../../../molecules/Carousel';

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
            <Carousel dataSlider={dataSlider} heightProps={heightProps} width={width}  />
            <NavBar heightProps={heightProps} />     
          </>
        )}
        renderElse={() => (
          <>
            <NavBar heightProps={true} />     
            <Carousel dataSlider={dataSlider} heightProps={heightProps} width={width}  />
          </>
        )}
      />
    </StyledHomeHeader>
  )
}

export default HomeHeader