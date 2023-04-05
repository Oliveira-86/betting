import React, { useState } from 'react'
import { StyledHomeHeader } from './styles';
import useWindowDimensions from '../../../../hook/useWindowDimensions';
import NavBar from '../../../molecules/NavBar';
import { If } from '../../../atoms/if';
import useDeviceDetect from '../../../../hook/useDeviceDetect';
import dataSlider from '../../../../api/slides';
import ImagesCarousel from '../../../molecules/ImagesCarousel';

function CasinoHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState()

  const { width } = useWindowDimensions()
  const { isMobile } = useDeviceDetect()

  const heightProps = width / 1.8;
  
  return (
    <StyledHomeHeader>
      <If 
        condition={isMobile}
        render={() => (
          <>
            <ImagesCarousel fully isSidebarOpen={!isSidebarOpen} dataSlider={dataSlider} width={width}  />
            <NavBar casinoNav heightProps={heightProps} isSidebarOpen={isSidebarOpen} /> 
          </>
        )}
        renderElse={() => (
          <>
            <NavBar casinoNav heightProps={true} />     
            <ImagesCarousel fully isSidebarOpen={!isSidebarOpen} dataSlider={dataSlider} width={width}  />
          </>
        )}
      />
    </StyledHomeHeader>
  )
}

export default CasinoHeader