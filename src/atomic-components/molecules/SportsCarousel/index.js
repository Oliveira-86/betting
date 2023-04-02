import React, { useState } from 'react'
import { 
    Row, 
    StyledCarousel, 
    StyledScroll, 
    PrevButton, 
    NextButton, 
    StyledArrow, 
    Container 
  } from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import ScoreCard from '../ScoreCard'


function SportsCarousel({ hasArrow, list }, props, ref) {
  const [hasEndLeft] = useState(true)
  const { isMobile } = useDeviceDetect()


  const slideLeft = () => {
    let slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft  - 400;
  }
  
  const slideRight = () => {
    let slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft  + 400;
  }  

  return (
    <>
      <StyledCarousel ref={ref}>  
        <StyledScroll>
            <Row isMobile={isMobile} id='slide'>
              {list?.map((item, index) =>  (
                <>
                    <Container key={item.id}>
                      <ScoreCard
                        logo1={item.logo1}
                        logo2={item.logo2}
                        altTeam1={item.team1} 
                        altTeam2={item.team2}
                        nameTeam1={item.team1} 
                        nameTeam2={item.team2}
                        league={item.league}
                        goalsTeam1={item.goals.team1}
                        goalsTeam2={item.goals.team2} 
                        time={item.time} 
                      />
                    </Container>  
                </>
              ))} 

              {hasArrow && (
                <StyledArrow>
                  <PrevButton {...props} scrollLeft={hasEndLeft}>
                    <MdChevronLeft onClick={slideLeft} size={40} color={theme.colors.grey} />
                  </PrevButton>
                  <NextButton {...props}>
                    <MdChevronRight onClick={slideRight}  size={40} color={theme.colors.grey} />
                  </NextButton>
                </StyledArrow>
              )}
            </Row>                                
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default SportsCarousel