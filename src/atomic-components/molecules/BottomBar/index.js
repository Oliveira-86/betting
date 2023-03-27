import React, { useState } from 'react'
import { StyledBottomBar } from './styles'
import { FiHome } from 'react-icons/fi'
import { MdLiveTv } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { BiSearchAlt2 } from 'react-icons/bi'
import theme from '../../../global/styles/theme'
import { Link } from 'react-router-dom'

function BottomBar({ scrollingDown }) {
  const [ activeHome, setActiveHome] = useState()
  const [ activeLive, setActiveLive] = useState()
  const [ activeGames, setActiveGames] = useState()
  const [ activeSearch, setActiveSearch] = useState()
  const [ scrolling, setScrolling] = useState()

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const onHandleActiveHome = React.useCallback(() => {
    forceUpdate()
    setActiveHome(true)
    setActiveLive(false)
    setActiveGames(false)
    setActiveSearch(false)
  }, [])

  const onHandleActiveLive = React.useCallback(() => {
    forceUpdate()
    setActiveHome(false)
    setActiveLive(true)
    setActiveGames(false)
    setActiveSearch(false)
  }, [])

  const onHandleActiveGames = React.useCallback(() => {
    forceUpdate()
    setActiveHome(false)
    setActiveLive(false)
    setActiveGames(true)
    setActiveSearch(false)
  }, [])

  const onHandleActiveSearch = React.useCallback(() => {
    forceUpdate()
    setActiveHome(false)
    setActiveLive(false)
    setActiveGames(false)
    setActiveSearch(true)
  }, [])
  
  return (
      <StyledBottomBar scrollingDown={scrolling ? !scrolling : scrollingDown}>
        <Link to={`/`}>
            <FiHome size={25} color={activeHome ? theme.colors.secondary : theme.colors.white} onClick={() => onHandleActiveHome()} />        
        </Link>
      
        <MdLiveTv size={25} color={activeLive ? theme.colors.secondary : theme.colors.white} onClick={() => onHandleActiveLive()} />
       
        <CgGames size={25} color={activeGames ? theme.colors.secondary : theme.colors.white} onClick={() => onHandleActiveGames()} />
        <BiSearchAlt2 size={25} color={activeSearch ? theme.colors.secondary : theme.colors.white} onClick={() => onHandleActiveSearch()} />
      </StyledBottomBar>
  )
}

export default BottomBar