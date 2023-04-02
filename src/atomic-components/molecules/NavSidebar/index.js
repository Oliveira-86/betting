import React, { useEffect, useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import theme from '../../../global/styles/theme'
import { Button } from '../../atoms/Button'
import Link from '../../atoms/Link'
import { StyledNavSidebar, Content, Row, BgShadow  } from './styles'

const NavSidebar = ({ isSidebarOpen, setIsSidebarOpenProps }) => {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(null)

  useEffect(() => {
    setHasToggleSidebar(isSidebarOpen)
  }, [isSidebarOpen])
  
  const onHandleSideBar = () => { 
    setHasToggleSidebar(false)
    setIsSidebarOpenProps(false)
  }

  return (
    <>
      <BgShadow isOpen={hasToggleSidebar} onClick={onHandleSideBar}/>
      <StyledNavSidebar isOpen={hasToggleSidebar}>
        <Content> 
          <SiEpicgames color={theme.colors.secondary} size={45} />
          <Row>
            <Button style={{ marginRight: 10 }} label='ENTRAR' variant='secondary' textVariant='black' />    
            <Button label='REGISTRAR' variant='outlinedSecondary' textVariant='secondary' />    
          </Row>
          <Link variant='secondary' bold  onClick={onHandleSideBar}>
            Esportes
          </Link>
          <Link variant='secondary' bold  onClick={onHandleSideBar}>
            Ao vivo
          </Link>
          <Link variant='secondary' bold  onClick={onHandleSideBar}>
            Cassino
          </Link>
          <Link variant='secondary' bold  onClick={onHandleSideBar}>
            Cassino Ao vivo
          </Link>  
          <Link variant='secondary' bold  onClick={onHandleSideBar}>
            Promoções
          </Link>
        </Content>
      </StyledNavSidebar>
    </>
  )
}

export default NavSidebar