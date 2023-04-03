import React from 'react'
import { StyledFooter, ItemContainer, Row, Column } from './styles'
import {  Text, Title } from '../../atoms/Text'
import theme from '../../../global/styles/theme'
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'
import { SiPremierleague, SiMlb } from 'react-icons/si'
import useDeviceDetect from '../../../hook/useDeviceDetect'
import { If } from '../../atoms/if'
import Link from '../../atoms/Link'

const Footer = () => {
  const { isMobile } = useDeviceDetect()

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
        <Text big bold variant='white'>{heading}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }}  href='www'>
        <Text variant='white'>{content1}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content2}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content3}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content4}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content5}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content6}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content7}</Text>
      </Link>
      <Link style={{ marginBottom: isMobile ? 3 : 5 }} href='www'>
        <Text variant='white'>{content8}</Text>
      </Link>
    </ItemContainer>
  )

  return (

    <If 
        condition={isMobile}
        render={() => (
          <StyledFooter isMobile={isMobile}>
            <div style={{ width: '100%', height: 1,  marginBottom: 20, marginTop: 10, backgroundColor: theme.colors.secondary }} />
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
            <Text big bold style={{ alignSelf: 'center', color: theme.colors.ice, marginBottom: 10, marginTop: 40 }}>Patricionadores</Text>
            <Row style={{ width: isMobile ? '100%' : '25%', alignSelf: 'center' }}>
              <Column>
                <SiPremierleague color={theme.colors.ice} size={50} />
                <Text style={{ marginTop: 10 }} bold small variant='ice'>Premier League</Text>
              </Column>
              <Column>
                <SiMlb color={theme.colors.ice} size={50} />
                <Text style={{ marginTop: 10 }} bold small variant='ice'>Major League Baseball</Text>
              </Column>
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
            <Text big bold style={{ alignSelf: 'center', color: theme.colors.ice, marginBottom: 10, marginTop: 40 }}>Patricionadores</Text>
            <Row style={{ width: '25%', alignSelf: 'center' }}>
              <Column>
                <SiPremierleague color={theme.colors.ice} size={50} />
                <Text style={{ marginTop: 10 }} bold  variant='ice'>Premier League</Text>
              </Column>
              <Column>
                <SiMlb color={theme.colors.ice} size={50} />
                <Text style={{ marginTop: 10 }} bold  variant='ice'>Major League Baseball</Text>
              </Column>
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