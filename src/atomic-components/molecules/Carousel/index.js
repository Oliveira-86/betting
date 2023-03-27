import React, { useEffect, useState } from 'react'
import { Text, Title } from '../../atoms/Text'
import { Row, StyledCarousel, StyledScroll, PrevButton, NextButton, StyledArrow, StyledTitle, StyledBanner, DotContainer, Dot } from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FaVolleyballBall } from 'react-icons/fa'
import Switch from '../../atoms/Switch'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import Image from '../../atoms/Image'
import { If } from '../../atoms/if'
import { IoMdTennisball } from 'react-icons/io'
import { GiSoccerBall, GiBasketballBall, GiAmericanFootballBall } from 'react-icons/gi'
import Badge from '../../atoms/Badge'


function Carousel({ heightProps, badget, title, swicth, dataSlider, list, width }, props, ref) {
  const [hasEndLeft, setHasEndLeft] = useState(true)
  const [slideIndex, setSlideIndex] = useState(1)
  const [selected, setSelectedId] = useState('')
  const [featureList, setFeatureList] = useState([]);
  const [variant, setVariant] = useState(featureList)

  const { isMobile } = useDeviceDetect()

  const webWidth = heightProps * 0.38
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

  const onHandleEventItens = (item) => {
    setSelectedId(item.id)
    if (variant === 'ice') {
      setVariant('black')
    } else {
      setVariant('ice')
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
            <Row isMobile={!isMobile} id='slide'>
              {/* <If 
                condition={badget}
                render={() => {
                  list?.map((item) =>  (   
                    <Container key={item.id}>
                      <Badge 
                        variant={selected === item.id ? 'secondary': 'white'} 
                        onClick={() => onHandleEventItens(item)}
                      >
                        <StyledCarHomeCarousel>
                          <Text 
                            MarginTop={'3px'}
                            variant={selected === item.id ? 'white': 'white'} 
                            MarginRight={'5px'} 
                            small
                          >
                            {item.title}
                          </Text>
      
                          {selected === item.id ? item.icon.white : item.icon.white}
                        </StyledCarHomeCarousel>
                      </Badge>
                    </Container>          
                  ))
                }}
                renderElse={() => ( */}
                  <If 
                    condition={isMobile}
                    render={() => list?.map((item, index) =>  (
                          <StyledBanner slideIndex={slideIndex === index + 1} >        
                            <Image key={item.id}  heightProps={`${heightProps}px`} src={item.src} alt='banner shoes' />   
                            <DotsSlider />
                          </StyledBanner>
                        ))}
                        
                    renderElse={() => (
                        dataSlider?.map((item, index) =>  (  
                          <StyledBanner slideIndex={slideIndex === index + 1} isMobile={!isMobile}>       
                            <Image key={item.id}  heightProps={`${webWidth}px`} src={item.src} alt='banner shoes' />    
                            <DotsSlider />                        
                          </StyledBanner>
                        ))
                    )}
                  /> 
                <StyledArrow>
                  <PrevButton {...props} scrollLeft={hasEndLeft}>
                    <MdChevronLeft onClick={slideLeft} size={30} color={theme.colors.ice} />
                  </PrevButton>
                  <NextButton {...props}>
                    <MdChevronRight onClick={slideRight}  size={30} color={theme.colors.ice} />
                  </NextButton>
                </StyledArrow>
            </Row>
            
          </StyledScroll>
      </StyledCarousel>        
    </>   
  )
}

export default Carousel