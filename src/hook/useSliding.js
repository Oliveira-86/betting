import { useState, useRef, useEffect } from 'react'

const useSliding = (elementWidth, countElements, elementsInViewport) => {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [distance, setDistance] = useState(0)
  const [totalInViewport, setTotalInViewport] = useState(0)
  const [viewed, setViewed] = useState(0)

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth

    setContainerWidth(containerWidth)
    setTotalInViewport(Math.round(containerWidth / elementWidth))
  }, [elementWidth])

  const handlePrev = () => {
    setViewed(viewed - totalInViewport)
    setDistance(
      distance + containerWidth - elementWidth / elementsInViewport / 2
    )
  }

  const handleNext = () => {
    setViewed(viewed + totalInViewport)
    setDistance(
      distance - containerWidth + elementWidth / elementsInViewport / 2
    )
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  }

  const nextScrollWidth = distance - containerWidth
  const hasPrev =
    countElements / elementsInViewport > 2 && distance * -1 < containerWidth / 2
      ? false
      : countElements / elementsInViewport < 2 &&
        distance * -1 < containerWidth / 2
      ? false
      : true
  const elements =
    viewed + totalInViewport < countElements / elementsInViewport - 0.2
  const hasNext =
    (countElements - 1 === elementsInViewport &&
      elementWidth + nextScrollWidth === 0) ||
    distance > 0 ||
    (viewed + totalInViewport < countElements / elementsInViewport && elements)

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext }
}

export default useSliding
