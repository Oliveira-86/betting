import React from 'react'
import Image from '../../atoms/Image';
import Carousel from '../Carousel';
import { If } from '../../atoms/if';
import useDeviceDetect from '../../../hook/useDeviceDetect';
import { StyledBanner } from './styles'

const Banner = ({ width, list, heightProps }) => {
  const { isMobile } = useDeviceDetect()
  const webWidth = heightProps * 0.38
  
  return (
    <If 
      condition={isMobile}
      render={() => (
        <Carousel hasArrow elementScroll={width} >
          {list?.map((item) =>  (  
            <>       
              <Image key={item.id}  heightProps={`${heightProps}px`} src={item.src} alt='banner shoes' />
            </>
          ))}
        </Carousel>
      )}
      renderElse={() => (
      <>
       <Carousel hasArrow elementScroll={width} >
          {list?.map((item) =>  (  
            <StyledBanner isMobile={!isMobile}>       
              <Image key={item.id}  heightProps={`${webWidth}px`} src={item.src} alt='banner shoes' />
            </StyledBanner>
          ))}
        </Carousel>
      </>
      )}
    /> 
  )
}

export default Banner