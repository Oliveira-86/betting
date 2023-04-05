import React, { useEffect, useState } from 'react'
import { Text, Title } from '../../atoms/Text'
import { Row, StyledCarousel, StyledScroll, PrevButton, NextButton, StyledArrow, StyledTitle, ImageContainer, Column } from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Switch from '../../atoms/Switch'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import Image from '../../atoms/Image'


function CasinoGames({ title, swicth, casinoGames, slide }, props, ref) {
  const [slideIndex, setSlideIndex] = useState(1)

  const { isMobile } = useDeviceDetect()

  useEffect(() => {
    const interval = setInterval(() => slideLeft(), 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  const slideLeft = () => {
    let slider = document.getElementById(slide)
    slider.scrollLeft = slider.scrollLeft  - 260 * 1.008;
  }
  
  const slideRight = () => {
    let slider = document.getElementById(slide)
    slider.scrollLeft = slider.scrollLeft  + 260 * 1.008;
  }
  
  return (
    <>
      <StyledCarousel isMobile={isMobile} ref={ref}>
          <StyledTitle>
            <Title 
              verticalMargin={'25px'} 
              variant='ice' 
              level={1}
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
            <StyledArrow>
              <PrevButton {...props}>
                <MdChevronLeft onClick={slideLeft} size={25} color={theme.colors.grey} />
              </PrevButton>
              <NextButton {...props}>
                <MdChevronRight onClick={slideRight}  size={25} color={theme.colors.grey} />
              </NextButton>
            </StyledArrow>
          </StyledTitle> 

          <StyledScroll>
            <Row isMobile={isMobile} id={slide}>
              {casinoGames?.map((item, index) =>  (
                <Column>
                  <ImageContainer isMobile={isMobile}>
                    <Image src={item.src} style={{ borderRadius: isMobile ? 5 : 10, height: isMobile ? 120 : 220, width: isMobile ? 120 : '' }} />
                  </ImageContainer>
                  <Text bold variant='ice' style={{ marginTop: 5, marginBottom: 5 }}>{item.title}</Text>
                  <Text xsmall variant='secondary'>{item.provider}</Text>
                </Column>
                )
              )} 
            </Row>                                
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default CasinoGames