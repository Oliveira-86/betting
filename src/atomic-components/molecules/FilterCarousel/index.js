import React, { useEffect, useState } from 'react'
import { Row, StyledCarousel, StyledScroll, StyledBanner } from './styles'
import Badge from '../../atoms/Badge'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { SPORTS_CATEGORY } from '../../../api/sports'


function FilterCarousel() {
  const [activeIndex, setActiveIndex] = useState(false) 
  const [slideIndex, setSlideIndex] = useState(1)

  const { isMobile } = useDeviceDetect()

  return (
    <>
      <StyledCarousel isMobile={isMobile}> 
        <StyledScroll>
            <Row isMobile={isMobile}>
              {SPORTS_CATEGORY?.map((item, index) =>  ( 
                <StyledBanner onClick={() => setActiveIndex(index)} isMobile={isMobile}>        
                  <Badge 
                    centered name={item.name} 
                    textVariant={activeIndex === index ? 'white' : 'grey_strong'}
                    variant={activeIndex === index ? 'secondary' : 'ice'}  
                  />  
                </StyledBanner>
              ))}
            </Row>                                  
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default FilterCarousel