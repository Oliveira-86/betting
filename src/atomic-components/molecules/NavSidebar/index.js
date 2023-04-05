import React, { useEffect, useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import theme from '../../../global/styles/theme'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { Button } from '../../atoms/Button'
import Link from '../../atoms/Link'
import { StyledNavSidebar, Content, Row, BgShadow, UnderLine  } from './styles'

const NavSidebar = ({ casinoNav, isSidebarOpen, setIsSidebarOpenProps, hasSmallWidth }) => {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(null)
  const [hasSports, setHasSports] = useState(false)
  const [hasLive, setHasLive] = useState(false)
  const [hasCasino, setHasCasino] = useState(false)
  const [hasCasinoLive, setHasCasinoLive] = useState(false)
  const [hasPromotion, setHasPromotion] = useState(false)

  const { isMobile } = useDeviceDetect()
  const navigate = useNavigate();

  useEffect(() => {
    setHasToggleSidebar(isSidebarOpen)
  }, [isSidebarOpen])

  useEffect(() => {
    if (casinoNav) return setHasCasino(casinoNav)
    setHasSports(!casinoNav)
  }, [])
  
  const onHandleSportsNavigation = () => {
    navigate("/")
    setHasSports(true)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasLive(false)
    setHasPromotion(false)
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)
  }
  const onHandleLiveNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(true)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasPromotion(false)
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)
  }
  const onHandleCasinoNavigation = () => {
    navigate("/cassino")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(true)
    setHasCasinoLive(false)
    setHasPromotion(false)
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)
  }
  const onHandleCasinoLiveNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(false)
    setHasCasinoLive(true)
    setHasPromotion(false)
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)
  }
  const onHandlePromotionNavigation = () => {
    navigate("/")
    setHasSports(false)
    setHasLive(false)
    setHasCasino(false)
    setHasCasinoLive(false)
    setHasPromotion(true)
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)  
  }

  const onHandleSideBar = () => {
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)  
  }
  
  return (
    <>
      <BgShadow isOpen={hasToggleSidebar} onClick={onHandleSideBar}/>
      <StyledNavSidebar hasSmallWidth={hasSmallWidth && !isMobile} isOpen={hasToggleSidebar}>
        <Content> 
          <SiEpicgames color={theme.colors.secondary} size={45} />
          <Row>
            <Button style={{ marginRight: 10 }} label='ENTRAR' variant='secondary' textVariant='black' />    
            <Button label='REGISTRAR' variant='outlinedSecondary' textVariant='secondary' />    
          </Row>
          <Link variant='secondary' bold  onClick={onHandleSportsNavigation}>
            Esportes
            {hasSports && <UnderLine />}
          </Link>
          <Link variant='secondary' bold  onClick={onHandleLiveNavigation}>
            Ao vivo
            {hasLive&& <UnderLine />}
          </Link>
          <Link variant='secondary' bold  onClick={onHandleCasinoNavigation}>
            Cassino
            {hasCasino&& <UnderLine />}
          </Link>
          <Link variant='secondary' bold  onClick={onHandleCasinoLiveNavigation}>
            Cassino Ao vivo
            {hasCasinoLive && <UnderLine />}
          </Link>  
          <Link variant='secondary' bold  onClick={onHandlePromotionNavigation}>
            Promoções
            {hasPromotion && <UnderLine />}
          </Link>
        </Content>
      </StyledNavSidebar>
    </>
  )
}

export default NavSidebar