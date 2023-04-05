import React, { useState } from 'react'
import { StyledFooter, ItemContainer, Row, Column, Dropdown } from './styles'
import {  Text, Title } from '../../atoms/Text'
import { Button } from '../../atoms/Button'
import  Card  from '../../atoms/Card'
import theme from '../../../global/styles/theme'
import { BsLinkedin, BsFacebook, BsInstagram, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { SiPremierleague, SiMlb, SiTrustedshops } from 'react-icons/si'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { If } from '../../atoms/if'
import Link from '../../atoms/Link'
import Image from '../../atoms/Image'
import brazil_flag from '../../../assets/Icons/brazil-flag.png'
import usa from '../../../assets/Icons/usa.png'

const button_styles = { width: '200px', alignSelf: 'center', color: theme.colors.secondary, display: 'flex', alignItems: 'center' }

const Footer = () => {
  const [isPortuguese, setIsPortuguese] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { isMobile } = useDeviceDetect()

  const onHandleLanguage = () => {
    if (isPortuguese) {
      setIsPortuguese(false)
      setIsDropdownOpen(false)
    } else {
      setIsPortuguese(true)
      setIsDropdownOpen(false)
    }
  }

  const onHandleDropDown = () => {
    setIsDropdownOpen(true)
  }
 
  const ItemContent = ({ 
    heading, 
    content1, 
    content2, 
    content3, 
    content4, 
    content5, 
    content6, 
    content7, 
    content8 
  }) => (
    <ItemContainer>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} first href='www'>
        <Text big bold variant='ice'>{heading}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }}  href='www'>
        <Text variant='ice'>{content1}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content2}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content3}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content4}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content5}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content6}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content7}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='ice'>{content8}</Text>
      </Link>
    </ItemContainer>
  )

  return (

    <If 
        condition={isMobile}
        render={() => (
          <StyledFooter isMobile={isMobile}>
            <div style={{ width: '100%', height: 1,  marginBottom: 20, marginTop: 10, backgroundColor: theme.colors.secondary }} />
            <Button textVariant='secondary' style={button_styles} variant='outlinedSecondary' onClick={onHandleDropDown}>
               <Image src={isPortuguese ? brazil_flag : usa} style={{ width: 20, height: 20, marginRight: 10 }} /> {isPortuguese ? 'Portugues Brasil' :  'English USA'}
            </Button>
            {isDropdownOpen ? (<>
              <Dropdown onClick={onHandleLanguage}>
                <Image src={!isPortuguese ? brazil_flag : usa} style={{ width: 20, height: 20, marginRight: 10 }} /> {!isPortuguese ? 'Portugues Brasil' :  'English USA'}
              </Dropdown>
            </>) : <div style={{ height: 30 }} />}
            <ItemContent 
              heading='Esportes'
              content1='Apostas Esportivas'
              content2='Futebol'
              content3='Basquete'
              content4='Hóquei'
              content5='Boxe'
              content6='Natação'
              content7='Outros esportes'
            />
            <ItemContent 
              heading='Promoções'
              content1='Esportivas'
              content2='Casino'
              content3='Bingo'
            />
            <ItemContent 
              heading='Links corporativos'
              content1='Programas de afiliados'
              content2='Carreras'
              content3='Investors'
            />
            <ItemContent 
              heading='Quem somos'
              content1='Quem somos'
              content2='Contato'
              content3='Política de uso'
            />
            <Text small variant='ice' style={{ width: '100%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ O melhor site de apostas online.</Title>
              A Epic Games é a melhor experiência de apostas online disponível, 
              oferecendo a você as melhores cotações em quase todos os esportes, 
              assim como em política, reality shows, oscar, cassino, 
              poker e basicamente em tudo aquilo que você deseja apostar.
            </Text>
            <Text small variant='ice' style={{ width: '100%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ Os melhores produtos de apostas online.</Title>
              A Epic Games é a única casa de apostas online que lhe oferece não só a possibilidade de apostar da forma mais tradicional na 
              Epic Games Desportos mas também lhe dá acesso à maior bolsa de apostas online do mundo com a Epic Games Intercâmbio 
              e ainda lhe dá acesso a várias loterias esportivas com o LotoEsporte e a possibilidade de responder 
              a várias perguntas para segurar um prêmio no Segure esta Bolada.
            </Text>
            <Text small variant='ice' style={{ width: '100%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ As melhores ofertas de apostas.</Title>
              A Epic Games possui as melhores ofertas especiais e bônus para nossos clientes. Isso inclui apostas grátis ao se cadastrar; 
              igualamos seu primeiro depósito; giros grátis em nossos cassinos; cotações melhoradas em eventos esportivos ou reembolso em caso de perdas.
            </Text>
            <Text big bold style={{ alignSelf: 'center', color: theme.colors.ice, marginBottom: 10, marginTop: 40 }}>Patricionadores</Text>
            <Row style={{ width: isMobile ? '100%' : '25%', alignSelf: 'center' }}>
              <Column>
                <Image src={'https://scmedia.sportingbet.com/$-$/fb48d4b1f5474b7d8748f67519a9e0b9.png'} />
              </Column>
              <Column>
                <Image src='https://scmedia.sportingbet.com/$-$/9f03d5427b7044d6b51904bad11f4001.png' />
              </Column>
            </Row>
            <Row style={{ maxWidth: '100%', alignSelf: 'center', padding: 20 }}>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/casino-mentor.png?5cf9062ca54b2d04c7ba24c5bbbb7f5f'} />
              </Link>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/casinos-analyzer.png?58bc0eb2f4f6a72043b7f98e467f3b4f'} />
              </Link>
            </Row>
            <Row style={{ maxWidth: '100%', alignSelf: 'center', padding: 20 }}>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/migliori-casino-online.png?56a37c15cdd3bd2572000749ac886ee9'} />
              </Link>
              <Link>
                <Image src={'https://demo1.demofabets.com/images/best-bitcoin-casino.png?35cdfe6a486c35df46e4c79198c56610'} />
              </Link>
            </Row>
            <Row style={{ width: '100%', alignSelf: 'center', padding: 20 }}>
              <BsLinkedin color={theme.colors.ice} size={25} />
              <BsFacebook color={theme.colors.ice} size={25} />
              <BsInstagram color={theme.colors.ice} size={25} />
            </Row>
            <Text small variant='ice' style={{ width: '100%', alignSelf: 'center', padding: 20 }}>
              Usamos cookies e cookies de terceiros para melhorar nossos serviços, 
              analisar e personalizar suas preferências e para exibir anúncios.
              Se você continuar com a navegação, consideraremos que aceita seu uso. 
              Você pode alterar as configurações e obter mais informações em nossa 
            </Text>
          </StyledFooter>
        )}
        renderElse={() => (
          <StyledFooter>
            <div style={{ width: '100%', height: 1,  marginBottom: 20, marginTop: 10, backgroundColor: theme.colors.secondary }} />
            
            <Button textVariant='secondary' style={button_styles} variant='outlinedSecondary' onClick={onHandleDropDown}>
               <Image src={isPortuguese ? brazil_flag : usa} style={{ width: 20, height: 20, marginRight: 10 }} /> {isPortuguese ? 'Portugues Brasil' :  'English USA'}
            </Button>
            {isDropdownOpen ? (<>
              <Dropdown onClick={onHandleLanguage}>
                <Image src={!isPortuguese ? brazil_flag : usa} style={{ width: 20, height: 20, marginRight: 10 }} /> {!isPortuguese ? 'Portugues Brasil' :  'English USA'}
              </Dropdown>
            </>) : <div style={{ height: 30 }} />}
           
            <Row style={{ width: '60%', alignSelf: 'center' }}>
              <ItemContent 
                heading='Esportes'
                content1='Apostas Esportivas'
                content2='Futebol'
                content3='Basquete'
                content4='Hóquei'
                content5='Boxe'
                content6='Natação'
                content7='Outros esportes'
              />
              <ItemContent 
                heading='Promoções'
                content1='Esportivas'
                content2='Casino'
                content3='Bingo'
              />
              <ItemContent 
                heading='Links corporativos'
                content1='Programas de afiliados'
                content2='Carreras'
                content3='Investors'
              />
              <ItemContent 
                heading='Quem somos'
                content1='Quem somos'
                content2='Contato'
                content3='Política de uso'
              />
            </Row>
            <Text small variant='ice' style={{ width: '50%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ O melhor site de apostas online.</Title>
              A Epic Games é a melhor experiência de apostas online disponível, 
              oferecendo a você as melhores cotações em quase todos os esportes, 
              assim como em política, reality shows, oscar, cassino, 
              poker e basicamente em tudo aquilo que você deseja apostar.
            </Text>
            <Text small variant='ice' style={{ width: '50%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ Os melhores produtos de apostas online.</Title>
              A Epic Games é a única casa de apostas online que lhe oferece não só a possibilidade de apostar da forma mais tradicional na 
              Epic Games Desportos mas também lhe dá acesso à maior bolsa de apostas online do mundo com a Epic Games Intercâmbio 
              e ainda lhe dá acesso a várias loterias esportivas com o LotoEsporte e a possibilidade de responder 
              a várias perguntas para segurar um prêmio no Segure esta Bolada.
            </Text>
            <Text small variant='ice' style={{ width: '50%', alignSelf: 'center', padding: 20 }}>
              <Title level={2} variant='ice' style={{ marginBottom: 10 }}>✓ As melhores ofertas de apostas.</Title>
              A Epic Games possui as melhores ofertas especiais e bônus para nossos clientes. Isso inclui apostas grátis ao se cadastrar; 
              igualamos seu primeiro depósito; giros grátis em nossos cassinos; cotações melhoradas em eventos esportivos ou reembolso em caso de perdas.
            </Text>
    
            <Text big bold style={{ alignSelf: 'center', color: theme.colors.ice, marginBottom: 10, marginTop: 40 }}>Patricionadores</Text>
            <Row style={{ width: '25%', alignSelf: 'center' }}>
              <Column>
                <Image src={'https://scmedia.sportingbet.com/$-$/fb48d4b1f5474b7d8748f67519a9e0b9.png'} />
              </Column>
              <Column>
                <Image src='https://scmedia.sportingbet.com/$-$/9f03d5427b7044d6b51904bad11f4001.png' />
              </Column>
            </Row>
            <Row style={{ maxWidth: '70%', alignSelf: 'center', padding: 20 }}>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/casino-mentor.png?5cf9062ca54b2d04c7ba24c5bbbb7f5f'} />
              </Link>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/casinos-analyzer.png?58bc0eb2f4f6a72043b7f98e467f3b4f'} />
              </Link>
              <Link>
                <Image src={'	https://demo1.demofabets.com/images/migliori-casino-online.png?56a37c15cdd3bd2572000749ac886ee9'} />
              </Link>
              <Link>
                <Image src={'https://demo1.demofabets.com/images/best-bitcoin-casino.png?35cdfe6a486c35df46e4c79198c56610'} />
              </Link>
            </Row>
            <Row style={{ width: '30%', alignSelf: 'center', padding: 20 }}>
              <BsLinkedin color={theme.colors.ice} size={25} />
              <BsFacebook color={theme.colors.ice} size={25} />
              <BsInstagram color={theme.colors.ice} size={25} />
            </Row>
            <Text small variant='ice' style={{ width: '50%', alignSelf: 'center', padding: 20 }}>
              Usamos cookies e cookies de terceiros para melhorar nossos serviços, 
              analisar e personalizar suas preferências e para exibir anúncios.
              Se você continuar com a navegação, consideraremos que aceita seu uso. 
              Você pode alterar as configurações e obter mais informações em nossa 
            </Text>
          </StyledFooter>
        )}
      />
   
  )
}

export default Footer