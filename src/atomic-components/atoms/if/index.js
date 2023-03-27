import React from 'react'
import PropTypes from 'prop-types'

const If = ({ condition, render, renderElse }) => {
  if (condition) return <> {render()} </>
  return renderElse()
}

If.defaultProps = {
  condition: false,
  render: () => <></>,
  renderElse: () => <></>,
}
If.propTypes = {
  condition: PropTypes.any, // We want a bool, but also truthy/falsy works
  render: PropTypes.func,
  renderElse: PropTypes.func,
}

export { If }
