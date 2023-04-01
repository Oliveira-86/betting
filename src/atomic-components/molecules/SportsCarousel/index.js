import React, { useEffect, useState } from 'react'
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
import { FaVolleyballBall } from 'react-icons/fa'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { IoMdTennisball } from 'react-icons/io'
import { GiSoccerBall, GiBasketballBall, GiAmericanFootballBall } from 'react-icons/gi'
import ScoreCard from '../ScoreCard'


function SportsCarousel({ title, swicth, list }, props, ref) {
  const [hasEndLeft, setHasEndLeft] = useState(true)
  const [slideIndex, setSlideIndex] = useState(1)
  const [selected, setSelectedId] = useState('')
  const [featureList, setFeatureList] = useState([]);
  const [variant, setVariant] = useState(featureList)
  const { isMobile } = useDeviceDetect()

  useEffect(() => {
    setFeatureList([
      {
        id: '01-feature-pix',
        title: 'Futebol',
        titleVariant: 'medium',
        icon:{ 
          grey: <GiSoccerBall size={15} color={theme.colors.grey} />,
          white: <GiSoccerBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '02-feature-transfers',
        title: 'Basquete',
        subtitle: 'Transferências',
        icon:{ 
          grey: <GiBasketballBall size={15} color={theme.colors.grey} />,
          white: <GiBasketballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '03-feature-pay-bill',
        title: 'Football',
        subtitle: 'Conta',
        icon:{ 
          grey: <GiAmericanFootballBall size={15} color={theme.colors.grey} />,
          white: <GiAmericanFootballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '08-feature-extract',
        title: 'Tênis',
        subtitle: 'Extrato',
        icon:{ 
          grey: <IoMdTennisball size={15} color={theme.colors.grey} />,
          white: <IoMdTennisball size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
      {
        id: '06-feature-deposit',
        title: 'Vôlei',
        subtitle: 'Via Boleto',
        icon:{ 
          grey: <FaVolleyballBall size={15} color={theme.colors.grey} />,
          white: <FaVolleyballBall size={15} color={theme.colors.white} />
        },
        onPress: () => {}
      },
    ]);
  }, []);

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
            <Row isMobile={!isMobile} id='slide'>
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
              <StyledArrow>
                <PrevButton {...props} scrollLeft={hasEndLeft}>
                  <MdChevronLeft onClick={slideLeft} size={40} color={theme.colors.grey} />
                </PrevButton>
                <NextButton {...props}>
                  <MdChevronRight onClick={slideRight}  size={40} color={theme.colors.grey} />
                </NextButton>
              </StyledArrow>
            </Row>                                
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default SportsCarousel