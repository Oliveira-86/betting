import React, { useEffect, useState } from 'react'
import { Button } from '../../atoms/Button'
import { StyledHeaderMol, Row } from './styles'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { If } from '../../atoms/if'
import Link from '../../atoms/Link'
import { SiEpicgames } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import theme from '../../../global/styles/theme'
import NavSidebar from '../NavSidebar'
import { useNavigate } from 'react-router-dom'
import useWindowDimensions from '../../../hook/useWindowDimensions'



const NavBar = ({ heightProps }) => {
  const [hasSameHeight, setHasSameHeight] = useState(false)
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const { isMobile } = useDeviceDetect()
  const windowDimensions  = useWindowDimensions()
  const { width } = windowDimensions

  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  
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
        <NavSidebar hasSmallWidth={width <= 1050} isSidebarOpen={hasToggleSidebar} setIsSidebarOpenProps={setHasToggleSidebar}  />
        </>
      )}
      renderElse={() => (
        <StyledHeaderMol widthProps={width <= 1250 ? '85%' : width <= 1600 ? '90%' : '95%'}  hasSameHeight={true}>
          <Row marginTop widthProps={width <= 1250 ? '60%' : width <= 1600 ? '50%' :  '35%'}>     
            <SiEpicgames color={theme.colors.secondary} size={50} />
            <Link variant='secondary' bold>
              Esportes
            </Link>
            <Link variant='secondary' bold>
              Ao vivo
            </Link>
            <Link onClick={() => navigate("/cassino")} variant='secondary' bold>
              Cassino
            </Link>
            <Link variant='secondary' bold>
              Cassino Ao vivo
            </Link>  
            <Link variant='secondary' bold>
              Promoções
            </Link>
          </Row>
          <Row marginTop widthProps={width <= 1250 ? '25%' : '20%'}>
            <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} marginRight={'10px'} />
            <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} />
          </Row>
        </StyledHeaderMol>
      )}
    />
  )
}

export default NavBar