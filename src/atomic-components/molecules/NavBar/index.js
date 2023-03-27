import React, { useEffect, useState } from 'react'
import useScrollingPosition from '../../../hook/useScrollingPosition'
import { Button } from '../../atoms/Button'
import { StyledHeaderMol, Row } from './styles'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { If } from '../../atoms/if'
import Link from '../../atoms/Link'
import { SiEpicgames } from 'react-icons/si'
import theme from '../../../global/styles/theme'



const NavBar = ({ heightProps }) => {
  const [hasSameHeight, setHasSameHeight] = useState(false)
  const { isMobile } = useDeviceDetect()
  
  const { scrollPosition } = useScrollingPosition()   
  
  useEffect(() => {
    if (scrollPosition >= heightProps) {
      setHasSameHeight(true)
    } else {
      setHasSameHeight(false)
    }
  }, [scrollPosition, heightProps])

  return (
    <If 
      condition={isMobile}
      render={() => (
        <StyledHeaderMol hasSameHeight={hasSameHeight}>
          <Row>
            <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} widthProps={'80px'} />
          </Row>
          <Row>
            <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} widthProps={'80px'} />
          </Row>
        </StyledHeaderMol>
      )}
      renderElse={() => (
        <StyledHeaderMol  hasSameHeight={true}>
          <Row widthProps={'40%'}>   
            <SiEpicgames color={theme.colors.secondary} size={50} />
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
          </Row>
          <Row widthProps={'20%'}>
            <Button textVariant='secondary' variant='outlinedSecondary' label='Login' heightProps={'30px'} widthProps={'80px'} />
            <Button textVariant='black' variant='secondary' label='Registre-se' heightProps={'30px'} widthProps={'80px'} />
          </Row>
        </StyledHeaderMol>
      )}
    />
  )
}

export default NavBar