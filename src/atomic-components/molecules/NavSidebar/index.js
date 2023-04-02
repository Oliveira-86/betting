import React from 'react'
import { SiEpicgames } from 'react-icons/si'
import theme from '../../../global/styles/theme'
import { Button } from '../../atoms/Button'
import Link from '../../atoms/Link'
import { StyledNavSidebar, Content, Row, BgShadow  } from './styles'

const NavSidebar = ({ isSidebarOpen }) => {
  return (
    <>
      <BgShadow isOpen={isSidebarOpen}/>
      <StyledNavSidebar isOpen={isSidebarOpen}>
        <Content> 
          <SiEpicgames color={theme.colors.secondary} size={45} />
          <Row>
            <Button style={{ marginRight: 10 }} label='ENTRAR' variant='secondary' textVariant='black' />    
            <Button label='REGISTRAR' variant='outlinedSecondary' textVariant='secondary' />    
          </Row>
          <Link variant='secondary' bold>
            Esportes
          </Link>
          <Link variant='secondary' bold>
            Ao vivo
          </Link>
          <Link variant='secondary' bold>
            Cassino
          </Link>
          <Link variant='secondary' bold>
            Cassino Ao vivo
          </Link>  
          <Link variant='secondary' bold>
            Promoções
          </Link>
        </Content>
      </StyledNavSidebar>
    </>
  )
}

export default NavSidebar