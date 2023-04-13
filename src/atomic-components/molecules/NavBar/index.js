import React, { useEffect, useState } from 'react'
import { Button } from '../../atoms/Button'
import { StyledHeaderMol, Row, UnderLine } from './styles'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { If } from '../../atoms/if'
import Link from '../../atoms/Link'
import { SiEpicgames } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import theme from '../../../global/styles/theme'
import NavSidebar from '../NavSidebar'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../../hook/useWindowDimensions'



const NavBar = ({ heightProps, casinoNav }) => {
  const [hasSameHeight, setHasSameHeight] = useState(false)
  const [hasSports, setHasSports] = useState(false)
  const [hasLive, setHasLive] = useState(false)
  const [hasCasino, setHasCasino] = useState(false)
  const [hasCasinoLive, setHasCasinoLive] = useState(false)
  const [hasPromotion, setHasPromotion] = useState(false)
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const { isMobile } = useDeviceDetect()
  const windowDimensions  = useWindowDimensions()
  const { width } = windowDimensions
  
  const navigate = useNavigate();

  useEffect(() => {
    if (casinoNav) return setHasCasino(casinoNav)
    setHasSports(!casinoNav)
  }, [])
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);  

  useEffect(() => {
    if (scrollPosition >= heightProps) {
      setHasSameHeight(true)
    } else {
      setHasSameHeight(false)
    }
  }, [scrollPosition])

  const onHandleSportsNavigation = () => {
    navigate("/")
    setHasSports(true)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasLive(false)
    setHasPromotion(false)
  }
  const onHandleLiveNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(true)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasPromotion(false)
  }
  const onHandleCasinoNavigation = () => {
    navigate("/cassino")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(true)
    setHasCasinoLive(false)
    setHasPromotion(false)
  }
  const onHandleCasinoLiveNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(false)
    setHasCasinoLive(true)
    setHasPromotion(false)
  }
  const onHandlePromotionNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasPromotion(true)
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  return (
    <If 
      condition={isMobile || width <= 1050}
      render={() => (
        <>
        <StyledHeaderMol isMobile={isMobile} widthProps={'100%'}  hasSameHeight={scrollPosition >= 220}>
          <GiHamburgerMenu color={theme.colors.ice} size={30} onClick={() =>{ 
            setHasToggleSidebar(true)
          }} />
          <SiEpicgames color={theme.colors.secondary} size={35} />
          {width <= 1050 && !isMobile && (           
            <Row marginTop widthProps={'20%'}>
              <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} marginRight={'10px'} />
              <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} />
            </Row>
          )}
        </StyledHeaderMol>       
        <NavSidebar casinoNav hasSmallWidth={width <= 1050} isSidebarOpen={hasToggleSidebar} setIsSidebarOpenProps={setHasToggleSidebar}  />
        </>
      )}
      renderElse={() => (
          <StyledHeaderMol widthProps={'100%'}  hasSameHeight={true}>
            <Row marginTop widthProps={width <= 1250 ? '60%' : width <= 1600 ? '45%' :  '35%'}>     
              <SiEpicgames onClick={() => navigate("/")} style={{ cursor: 'pointer' }} color={theme.colors.secondary} size={50} />
              <Link onClick={onHandleSportsNavigation} variant='secondary' bold>
                Esportes
                {hasSports && <UnderLine />}
              </Link>
              <Link onClick={onHandleLiveNavigation} variant='secondary' bold>
                Ao vivo
                {hasLive && <UnderLine />}
              </Link>
              <Link onClick={onHandleCasinoNavigation} variant='secondary' bold>
                Cassino
                {hasCasino && <UnderLine />}
              </Link>
              <Link onClick={onHandleCasinoLiveNavigation} variant='secondary' bold>
                Cassino Ao vivo
                {hasCasinoLive && <UnderLine />}
              </Link>  
              <Link onClick={onHandlePromotionNavigation} variant='secondary' bold>
                Promoções
                {hasPromotion && <UnderLine />}
              </Link>
            </Row>
            <Row marginTop widthProps={width <= 1250 ? '25%' : '20%'}>
              <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} marginRight={'10px'} onClick={() => navigate("/login")} />
              <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} />
            </Row>
          </StyledHeaderMol>
      )}
    />
  )
}

export default NavBar