import React, { useState } from 'react'
import { Text, Title } from '../../atoms/Text'
import { Row, StyledCarousel, StyledScroll, PrevButton, NextButton, StyledArrow, StyledTitle, StyledBanner, DotContainer, Dot } from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Switch from '../../atoms/Switch'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import Image from '../../atoms/Image'
import { If } from '../../atoms/if'


function ImagesCarousel({ heightProps, badget, title, swicth, dataSlider, list, width }, props, ref) {
  const [slideIndex, setSlideIndex] = useState(1)

  const { isMobile } = useDeviceDetect()

  const slideLeft = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1){
        setSlideIndex(dataSlider.length)
    }
  }
  
  const slideRight = () => {
      if (slideIndex !== dataSlider?.length) {
        setSlideIndex(slideIndex + 1)
      } else if (slideIndex === dataSlider?.length) {
        setSlideIndex(1)
      }
  }  

  const moveDot = index => {
    setSlideIndex(index)
  }

  const DotsSlider = () => (   
    <DotContainer>
      {Array.from({ length: dataSlider.length }).map((_, index) => (
        <Dot active={slideIndex === index + 1} onClick={() => moveDot(index + 1)}  />
      ))}
    </DotContainer> 
  )
console.log(heightProps)
  return (
    <>
      <StyledCarousel ref={ref}>
        {title && (
          <StyledTitle>
            <Title 
              verticalMargin={'25px'} 
              variant='grey' 
              level={3}
              >
              {title}
            </Title>
          {swicth 
            ? (
                <StyledTitle>
                  <Text MarginRight={'5px'} small bold variant='grey'>
                    AO VIVO
                  </Text>
                  <Switch />
                </StyledTitle>
              ) 
            : null}
          </StyledTitle>
        )}   

        <StyledScroll>
            <Row isMobile={!isMobile}>
              <If 
                condition={isMobile}
                render={() => list?.map((item, index) =>  (
                      <>
                        <StyledBanner slideIndex={slideIndex === index + 1} >        
                          <Image key={item.id}  heightProps={`${heightProps}px`} src={item.src} alt='banner shoes' />   
                        </StyledBanner>
                        <DotsSlider />  
                      </>
                    ))}
                    
                renderElse={() => (
                    dataSlider?.map((item, index) =>  (  
                      <>
                        <StyledBanner slideIndex={slideIndex === index + 1} isMobile={!isMobile}>       
                          <Image shadow key={item.id}  src={item.src} alt='banner shoes' />   
                        </StyledBanner>
                      </>
                    ))
                    )}
              /> 
              <StyledArrow>
                <PrevButton {...props}>
                  <MdChevronLeft onClick={slideLeft} size={40} color={theme.colors.ice} />
                </PrevButton>
                <NextButton {...props}>
                  <MdChevronRight onClick={slideRight}  size={40} color={theme.colors.ice} />
                </NextButton>
              </StyledArrow>
            </Row>            
            <DotsSlider />                        
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default ImagesCarousel