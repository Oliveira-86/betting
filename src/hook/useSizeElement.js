import { useState, useRef, useEffect } from 'react'

const useSizeElement = () => {
  const elementRef = useRef(null)
  const [widthRef, setWidth] = useState(0)
  const [heightRef, setHeight] = useState(0)

  useEffect(() => {
    setWidth(elementRef.current.clientWidth)
  }, [])

  useEffect(() => {
    setHeight(elementRef.current.clientHeight)
  }, [])

  return { widthRef, heightRef,  elementRef }
}

export default useSizeElement
