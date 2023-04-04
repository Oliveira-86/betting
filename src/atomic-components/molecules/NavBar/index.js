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



const NavBar = ({ heightProps, setHasToggleSidebarProps }) => {
  const [hasSameHeight, setHasSameHeight] = useState(false)
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false)
  const { isMobile } = useDeviceDetect()
  
  const [scrollPosition, setScrollPosition] = useState(0);

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
      condition={isMobile}
      render={() => (
        <>
        <StyledHeaderMol isMobile={isMobile} widthProps={'100%'}  hasSameHeight={scrollPosition >= 220}>
          <GiHamburgerMenu color={theme.colors.white} size={30} onClick={() =>{ 
            setHasToggleSidebar(true)
          }} />
          <SiEpicgames color={theme.colors.secondary} size={35} />
        </StyledHeaderMol>       
        <NavSidebar isSidebarOpen={hasToggleSidebar} setIsSidebarOpenProps={setHasToggleSidebar}  />
        </>
      )}
      renderElse={() => (
        <StyledHeaderMol widthProps={'100%'}  hasSameHeight={true}>
          <Row marginTop widthProps={'35%'}>     
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
          <Row marginTop widthProps={'20%'}>
            <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} marginRight={'10px'} />
            <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} />
          </Row>
        </StyledHeaderMol>
      )}
    />
  )
}

export default NavBar