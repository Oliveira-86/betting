import React, { useState } from 'react'
import { SiEpicgames } from 'react-icons/si'
import theme from '../../../global/styles/theme'
import { Button } from '../../atoms/Button'
import Link from '../../atoms/Link'
import { StyledNavSidebar, Content, Row, BgShadow  } from './styles'

const NavSidebar = ({ isSidebarOpen, setHasToggleSidebarProps }) => {
  const [hasToggleSidebar, setHasToggleSidebar] = useState(false)

  const onHandleToggleSidebar = (open) => {
    setHasToggleSidebar(open)
  }

  return (
    <>
      <BgShadow isOpen={isSidebarOpen} onClick={() => { 
        onHandleToggleSidebar(false)
        setHasToggleSidebarProps(hasToggleSidebar)
      }}/>
      <StyledNavSidebar isOpen={isSidebarOpen}>
        <Content> 
          <SiEpicgames color={theme.colors.secondary} size={45} />
          <Row>
            <Button style={{ marginRight: 10 }} label='ENTRAR' variant='secondary' textVariant='black' />    
            <Button label='REGISTRAR' variant='outlinedSecondary' textVariant='secondary' />    
          </Row>
          <Link variant='secondary' bold  onClick={() => { 
              onHandleToggleSidebar(false)
              setHasToggleSidebarProps(hasToggleSidebar)
            }}>
            Esportes
          </Link>
          <Link variant='secondary' bold  onClick={() => { 
              onHandleToggleSidebar(false)
              setHasToggleSidebarProps(hasToggleSidebar)
            }}>
            Ao vivo
          </Link>
          <Link variant='secondary' bold  onClick={() => { 
              onHandleToggleSidebar(false)
              setHasToggleSidebarProps(hasToggleSidebar)
            }}>
            Cassino
          </Link>
          <Link variant='secondary' bold  onClick={() => { 
              onHandleToggleSidebar(false)
              setHasToggleSidebarProps(hasToggleSidebar)
            }}>
            Cassino Ao vivo
          </Link>  
          <Link variant='secondary' bold  onClick={() => { 
              onHandleToggleSidebar(false)
              setHasToggleSidebarProps(hasToggleSidebar)
            }}>
            Promoções
          </Link>
        </Content>
      </StyledNavSidebar>
    </>
  )
}

export default NavSidebar